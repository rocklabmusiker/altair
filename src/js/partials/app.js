	$('#menu').click(function() {
    	$('.nav__list').slideToggle(500);
  	});

  	$(window).resize(function() {
    if($(window).width() > 900){
        $('.nav__list').removeAttr('style');
    }
});