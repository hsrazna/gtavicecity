$(function() {

	$('#block-menu').children('ul').after('<div id="mobile-menu">').clone().appendTo('#mobile-menu');
	var az_mnu = '<div class="az-mob-menu-wrap">'+
					 '<div class="az-mob-menu">'+
						 '<div class="az-mnu-left">'+
							 '<a href="#mobile-menu" class="toggle-mnu hidden-lg"><span></span></a>'+
						 '</div>'+
						 '<div class="az-mnu-right">'+
							 '<div id="block-auth-links">'+
								 '<i class="icon-key"></i>&nbsp;<a href="/user/auth/" class="auth-link meta-link">Вход</a>'+
							 '</div>'+
						 '</div>'+
					 '</div>'+
				 '</div>';
	$('.page-content .central').prepend(az_mnu);
	$(".toggle-mnu").click(function() {
	  $(this).addClass("on");
	});
	$('#mobile-menu').mmenu({
		extensions : [ 'widescreen', 'theme-white', 'effect-menu-slide', 'pagedim-black' ],
		navbar: {
			title: "GTAViceCity.ru Menu",
			// titleLink: "/"
		}
	});
	$('#mobile-menu a:first').attr('href', '/');

	var api = $("#mobile-menu").data("mmenu");
	api.bind("closed", function () {
		$(".toggle-mnu").removeClass("on");
	});

	if(window.matchMedia( "(max-width: 992px)" ).matches){
		$('.az-mob-menu-wrap').after($('.social-block-groups').parent());
		$('.az-mob-menu-wrap').after($('.search'));
	} else {
		$('.right-col .navi').after($('.social-block-groups').parent());
		$('#block-logo').after($('.search'));
	}
	$(window).resize(function(){
		if(window.matchMedia( "(max-width: 992px)" ).matches){
			$('.az-mob-menu-wrap').after($('.social-block-groups').parent());
			$('.az-mob-menu-wrap').after($('.search'));
		} else {
			$('.right-col .navi').after($('.social-block-groups').parent());
			$('#block-logo').after($('.search'));
		}
	});

	$(window).scroll(function(){
		if($(window).scrollTop()>100){
			$('.az-mob-menu').addClass('az-mob-menu-fix');
		}else{
			$('.az-mob-menu').removeClass('az-mob-menu-fix');
		}
		if($(window).scrollTop()>200){
			$('.az-mob-menu').addClass('az-mob-menu-fix2');
		}else{
			$('.az-mob-menu').removeClass('az-mob-menu-fix2');
		}
	});
	var az_pagination = $('.paginator');
	var az_cur_pag = az_pagination.data('current-page');
	var az_prev = az_pagination.find('a:contains("'+(az_cur_pag-1)+'")');
	var az_next = az_pagination.find('a:contains("'+(az_cur_pag+1)+'")');
	var az_pag_html = '<div id="pagination-index-mobile" class="paginator">'+
										'<span class="az-next">' + ((az_next.length > 0)?( '<a href="' + az_next.attr('href') + '">' + '\< next' + '</a>'):'') + '</span>' +
										'<span class="az-cur">' + '<em>' + az_cur_pag + '</em>' + '</span>' +
										'<span class="az-prev">' + ((az_prev.length > 0)?( '<a href="' + az_prev.attr('href') + '">' + 'prev \>' + '</a>'):'') + '</span>' +
										'</div>';
	az_pagination.after(az_pag_html);
});
