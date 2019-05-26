// sun_main.js

(function($){
	var wrap = $('#wrap');
	wrap.prepend('<header id="headBox"></headBox>')

	var headBox = $('#headBox');
	headBox.load('./common/sun_header.html');


	var otherBox = $('.other_ul');
	var otherLi  = otherBox.children('li');
	var modalBox = $('.modal');
	var modalPic = $('.modal_pic');

	otherLi.on('click',function(e){
		var thisI = $(this).index();

		e.preventDefault();
		modalPic.css({
			'background-size' : 'contain', 
			'background-repeat' : 'no-repeat', 
			'background-position':'center'});
		if(thisI == 0){
			modalPic.css({
			'backgroundImage':'url(../img/main/banner_01.png)'});
		}else if(thisI ==1){
			modalPic.css({
			'backgroundImage':'url(../img/main/banner_02.png)'});
		}else if(thisI ==2){
			modalPic.css({
			'backgroundImage':'url(../img/main/banner_03.png)'});
		}else if(thisI ==3){
			modalPic.css({
			'backgroundImage':'url(../img/main/banner_04.png)'});
		};
		modalBox.fadeIn();
	});

	modalBox.on('click',function(e){
		e.preventDefault();
		$(this).fadeOut();
	})


})(jQuery);