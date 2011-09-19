/*
Randomly select a div every couple of seconds.
*/

$(document).ready(function() {

	var images = $.makeArray($('.members img').sort(function(){
		return Math.round(Math.random());
	}));

	// the loop
	infinite_loop = function(){

		var image = images.pop();
		console.log(image);
		$(image).remove();

		if(images.length < 2) return;

		// var length = images.length-1;
		// if(!length) return;				// stop the loop

		// var rand_int = random_int(length);
		// var image = images[rand_int];

		// // $(images).removeClass('on');	// remove 'on' class from all images
		// $(image).addClass('on');		// add 'on' class to random image

		// $('.stage').text(rand_int);		// display random number
		// console.log(rand_int);			// debug in console
		// console.log(image);				// debug in console

		// image = images.pop();			// remove from list
		// $(image).remove();				// remove from dom

		t = setTimeout(infinite_loop, 400);	
	};

	// var random_int = function(length){
	// 	if(!length) length = 10;
	// 	return Math.round(Math.random() * length);
	// };

});