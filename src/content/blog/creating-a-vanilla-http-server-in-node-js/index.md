---
slug: '/creating-a-vanilla-http-server-in-node-js'
title: 'Creating a Vanilla HTTP Server in Node.js'
tags: ['node', 'http']
date_published: 2017-06-18
date_updated: 2020-06-01
---

There are so many tutorials out there using Express, but what does Express use? In this post, we're going to use the native HTTP module to create a vanilla Node server and get a better understanding of Node and HTTP.

## Getting started

First, make sure you have Node installed and then create a `server.js` file. Inside the file let's require the HTTP module:

```js
const http = require('http')
```

We don't need to `npm install` this because the HTTP module comes along with Node.

Now let's create our server and have it listen on port `8080`.

```js
...
const PORT = 8080;
const server = http.createServer((request, response) => {
  console.log('Request made to server!');
});

server.listen(PORT, () => {
  console.log(`Server listening on port :${PORT} 🚀`);
});
```

- The `.createServer` method takes in a callback that will be invoked when _any_ request is made to our server once it's started. The callback takes in two parameters that we'll utilize soon.

- The `.listen` method takes in the port our server will run on and a callback. It will start the server and then invoke the callback.

Now let's run this with the following command in the terminal:

```sh
$ node server.js
Server listening on port :8080 🚀
```

## Making requests to our server

Awesome! We've created our server and if we try to make any requests to it we should see the log run.

Here I opened up another terminal and used a command-line tool called cURL to send requests to our server. You could also use a more friendly tool such as Postman or even your browser if you wanted to.

```sh
$ curl -i localhost:8080/
```

Notice I added this 'localhost' before the port. This is because you need to say what the host of the server is when you make a request to it and localhost automatically points to your own machine. You could also use `127.0.0.1:8080` as well, but that's a little bit harder to remember.

Now, if we check back to the other terminal running the server we see:

```sh
$ node server.js
Server listening on port :8080 🚀
Request made to server!
```

Great. Now, there's actually a small problem we need to fix. When we make a request to our server, it definitely comes through, but currently, our server doesn't respond. Leaving our client (like cURL/Postman/Browser) waiting and waiting until they give up.

## Responding

This is where the `response` parameter to `.createServer` comes into play. As the variable name hints at, `response` will be an object that we can use for dealing with the response of any HTTP request sent to our server.

Two important methods of response are `.writeHead` and `.end`.

```js
...
const server = http.createServer((request, response) => {
  console.log('Request made to server!');

  const headers = {
    'Content-Type': 'text/plain',
  };
  let statusCode = 200;
  let body = 'Hello, world!';

  response.writeHead(statusCode, headers);
  response.end(body);
});
...
```

- The `.writeHead` method takes in the status code and optional headers you want to be sent back to the client. Note: It only prepares the response and doesn't actually respond.
- The `.end` method optionally takes in a string to be sent as the body of the response and then sends off the request.

Now, we need to restart our server so it is running our new code. Press Ctrl-C in your terminal running the server and then re-run the `node server.js` command to boot the server up again.

If we try to make a request to our server now, we'll see we get a response:

```sh
$ curl -i localhost:8080/
HTTP/1.1 200 OK
Content-Type: text/plain
Date: Fri, 26 Jun 2020 00:51:26 GMT
Connection: keep-alive
Transfer-Encoding: chunked

Hello, world!%
```

## Routing

This is great, but most of the time we want to perform different actions based on the request method and endpoint. This is where the `request` object comes in, giving us `request.url` and `request.method`:

```js
...
const server = http.createServer((request, response) => {
  console.log('Request made to server!');

  const headers = {
    'Content-Type': 'text/plain',
  };
  let statusCode = 404;
  let body = 'Not Found';

  if (request.url === '/') {
    if (request.method === 'GET') {
      statusCode = 200;
      body = 'Hello, world!';
    }
  } else if (request.url === '/bananas') {
    if (request.method === 'GET') {
      statusCode = 200;
      body = '🍌🍌🍌';
    } else if (request.method === 'POST') {
      // Save new banana
      statusCode = 201;
      body = 'Banana saved!';
    } else {
      // ...others such as PUT, PATCH, DELETE
    }
  }

  response.writeHead(statusCode, headers);
  response.end(body);
});
...
```

We used some `if`s to change what our server does and responds with based on the endpoint and method. Btw, don't forget to restart your server after changing the code!

## Wrapping up

We've now built a server using Node without any framework. Woo! If you'd like to play with the code, here's the [source code](https://github.com/cainwatson/vanilla-node-http-server).

Now while frameworks definitely make building servers much easier, it can be fun to look under the hood sometimes.
