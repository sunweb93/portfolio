(function($){
	var menuBtn = $('.menu_btn');
	var gnb 		= $('.gnb');


	menuBtn.on('click',function(e){
		e.preventDefault();
		$(this).toggleClass('open');
		gnb.toggleClass('open');
	});



var gnb        = $('.gnb');
var gnbUl      = gnb.children('ul');
var gnbLi      = gnbUl.children('li');
var gnbBtn     = gnbLi.children('button');
var aboutBox   = $('.about_box');
var webBox     = $('.web_box');
var otherBox   = $('.other_box');
var contactBox = $('.contact_box');

// header_click_scroll
gnbBtn.on('click',function(e){
	var aboutTop   = aboutBox.offset().top;
	var webTop     = webBox.offset().top;
	var otherTop   = otherBox.offset().top;
	var contactTop = contactBox.offset().top;
	var btnI = $(this).parent('li').index();
	
	e.preventDefault();
	if(btnI == 0){
		$('html').animate({scrollTop: aboutTop - '100'}, 500);
	}else if(btnI == 1){
		$('html').animate({scrollTop: webTop - '100'}, 500);
	}else if(btnI == 2){
		$('html').animate({scrollTop: otherTop - '100'}, 500);
	}else if(btnI == 3){
		$('html').animate({scrollTop: contactTop - '100'}, 500);
	};

});


// top button
var topBtn = $('.top_btn');

$(window).scroll(function(){
  if($(this).scrollTop() > 500) {
      topBtn.addClass('show');
  } else {
			topBtn.removeClass('show');
  }
});

topBtn.on('click',function(e){
	e.preventDefault();
	$('html').animate({scrollTop: '0'}, 500);
})

})(jQuery);