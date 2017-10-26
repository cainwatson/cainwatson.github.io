"use strict";
var $;
$(() => {
    $('main').fadeTo('slow', 1);

    $('#cats').click(() => {
        addCat();
    }); 
    
    let amountOfPics = 0, catsJSON;   
    const addCat = () => {
    	  $.ajax({
		    type: 'GET',
		    url: 'https://random.cat/meow',
		    success: (data) => {
		    	catsJSON = data;
		    	$('#cats').append("<img src='" + catsJSON.file + "' style='width: " + window.innerWidth/2 + "px; height= " + window.innerHeight/2 + "px;' class='aCat'>"); 
                
                window.scrollBy(0, window.innerHeight - window.innerHeight/4);
                $('.aCat').mousemove(addCat);
                $('.amountOfPics').html("<span class='.amountOfPics'>" + ++amountOfPics + "</span>");
		    },
		    error: () => {
		    	//console.log('%cerror occured when get requesting api...\n(just slow down for a second)', 'color: red; font-size:25px');
 			},
 			timeout: 5000
		  });
    };

    addCat();
});