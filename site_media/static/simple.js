/*
Put members in cycle widget.
Loop through the members.
Randomly stop the widget and remove the top member.
Do this until there is only one member left.
The last member is the winner.
*/

$(document).ready(function() {

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


		t = setTimeout(infinite_loop, 150);	
	};

});