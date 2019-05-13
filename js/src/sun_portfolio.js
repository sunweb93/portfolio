// sun_portfolio.js

(function($){
	var wrap = $('#wrap');
	wrap.prepend('<header id="headBox"></headBox>')

	var headBox = $('#headBox');
	headBox.load('./common/sun_header.html');

	var list   = $('.list');
	var listUl = list.children('ul');
	var listLi = listUl.children('li');
	var pic    = $('.pic');
	var text   = $('.text');
	var textDt = text.find('dt');
	var textDd = text.find('dd');
	var link   = $('.link').children('a');


	listLi.on('click',function(e){
		e.preventDefault();
		var thisIndex = $(this).index();
		$(this).addClass('active')
		$(this).siblings('li').removeClass('active');

		if(thisIndex==0){
			pic.attr('class','pic gillette');
			text.attr('class','text gillette');
			textDt.css({'background-image':'url(../../img/portfolio/logo_gillette_white.svg)','backgroundSize':'auto 70%'});
			textDd.eq(0).text('질레트 코리아 [gillette korea]');
			textDd.eq(1).text('질레트 면도기 및 면도용품 판매 및 제품소개를 위한 웹사이트입니다.');
			link.attr('href','https://vividkimweb.github.io/gillette')


		}else if(thisIndex==1){
			pic.attr('class','pic kellogg');
			text.attr('class','text kellogg');
			textDt.css({'background-image':'url(../../img/portfolio/logo_kellogg_white.svg','backgroundSize':'auto 90%'});
			textDd.eq(0).text('농심 켈로그 [kellogg]');
			textDd.eq(1).text('켈로그 시리얼 제품 제품소개 및 마케팅을 위한 웹사이트입니다.');
			link.attr('href','https://vividkimweb.github.io/kellogg')

		}

	})



})(jQuery);