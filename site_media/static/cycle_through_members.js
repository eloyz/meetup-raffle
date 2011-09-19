/*
Put members in cycle widget.
Loop through the members.
Randomly stop the widget and remove the top member.
Do this until there is only one member left.
The last member is the winner.
*/

$(document).ready(function() {

	images = $.makeArray($('.members img').sort(function(){
		return Math.round(Math.random());
	}));

	// put members in cycle-widget
    $('.members').cycle({
		fx: 'fade',
		timeout: 0,
		speed: 75,
	});

	// the loop
	infinite_loop = function(){

		$('.members').cycle('next');  // go to next member
		top_element = $('.members img[style*="opacity: 1"]')[0];  // get top element

		console.log(top_element);

		if(images[images.length-1] == top_element){
			image = images.pop();						// loop list; pop item;
			$(image).remove();							// dom remove member div

			if(images.length < 2) {
				return;
			};
		};

		/*
			This script does not work as expected because clicking 
			next in the cycle results in empty elements.
			I don't know how the next method calculates it's next element.
			The cycle object does not know that the next element is not there.
		*/

		t = setTimeout(infinite_loop, 150);	
	};

});