var $;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max + 1);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

$(() => (async () => {
  const fetchCat = async () => {
    try {
      const res = await $.get('https://random.cat/meow');
      pics.push(res);
      return res;
    } catch (e) {
      return null;
    }
  };  
  
  const pics = [];
  // let scrollSpeed = 1;
  let currI = 0;
  // const throttleWait = 100;
  
  const createCats = () => {
    for (; currI < pics.length; currI += 1) {
      const img = $(`<li><img src=${pics[currI].file} /></li>`);
      $(`#container-${getRandomInt(1, 3)}`).append(img);
    }
  };

  
  // setInterval(() => window.scrollBy(0, scrollSpeed));
  setInterval(() => fetchCat(), 200);
  setInterval(() => createCats(), 1000);
  // setInterval(() => scrollSpeed *= 1.0, 2000);
})());
