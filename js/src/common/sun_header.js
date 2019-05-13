(function($){
	var menuBtn = $('.menu_btn');
	var gnb 		= $('.gnb');


	menuBtn.on('click',function(e){
		e.preventDefault();
		$(this).toggleClass('open');
		gnb.toggleClass('open');
	});


})(jQuery);