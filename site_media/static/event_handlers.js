


set_event_handlers = function(){

	$('.next-btn').click(function(){
		$('.members').cycle('next');
	});

	$('.prev-btn').click(function(){
		$('.members').cycle('prev');
	});

	$('.stop-btn').click(function(){
		// set classes
		$('.start-btn').removeClass('on');
		$(this).addClass('on');

		return stop_loop();
	})

	$('.start-btn').click(function(){

		console.log(this);

		// set classes
		$('.stop-btn').removeClass('on');
		$(this).addClass('on');

		return start_loop();
	})
	
	start_loop = function(){
		infinite_loop();
		return false;
	}

	stop_loop = function(){
		clearTimeout(t);
		return false;
	}

};