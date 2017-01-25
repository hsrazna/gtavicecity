$(function() {

	$('#block-menu').children('ul').after('<div id="mobile-menu">').clone().appendTo('#mobile-menu');
	var az_mnu = '<div class="az-mob-menu-wrap">'+
					 '<div class="az-mob-menu">'+
						 '<div class="az-mnu-left">'+
							 '<a href="#mobile-menu" class="toggle-mnu hidden-lg"><span></span></a>'+
						 '</div>'+
						 '<div class="az-mnu-right">'+
							 '<div id="block-auth-links">'+
							 	 (($('#auth-modal').length==1)?
								 '<i class="icon-key"></i>&nbsp;<a href="/user/auth/" class="auth-link meta-link">Вход</a>':
								 '<span class="greetings pull-right dropdown-toggle" data-toggle="dropdown"><strong><a id="user-menu-trigger" href="#" class="meta-link">' +
									 $('#user-menu .greetings strong').text() +
								 '</a></strong></span>' + 
								 '<ul id="user-menu-drop" class="dropdown-menu pull-right">'+
									 '<li><a href="/user/edit/" title="Profile settings"><i class="icon-user"></i>&nbsp;Настройки профиля</a></li>'+
									 '<li><a href="/message/" title="Private messages"><i class="icon-envelope"></i>&nbsp;Личные сообщения</a></li>'+
									 '<li><a href="/user/bookmark/" title="Bookmarks"><i class="icon-tags"></i>&nbsp;Закладки</a></li>'+
									 '<li class="divider"></li>'+
									 '<li><a href="/mod/" title="My modifications"><i class="icon-list"></i>&nbsp;Мои моды</a></li>'+
									 '<li class="divider"></li>'+
									 '<li><a href="/user/logout/">Выход</a></li>'+
								 '</ul>'
									 )+
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
	var az_tabs_cont = $('.filters .tab-content > div[id]');
	var az_tabs = $('.filters .nav-tabs > li:not(.pull-right) > a');
	az_tabs_cont.each(function(){
		$(this).after('<div id="' + $(this).attr('id') + '-mobile">').children().clone().appendTo('#' + $(this).attr('id') + '-mobile');
		$('#' + $(this).attr('id') + '-mobile').addClass('white-popup mfp-with-anim mfp-hide');
	});
	az_tabs.each(function(){
		$(this).after('<a href="' + $(this).attr('href') + '-mobile">' + $(this).text() + '</a>');
		$('a[href="' + $(this).attr('href') + '-mobile"]').magnificPopup({
			type: 'inline',

			fixedContentPos: false,
			fixedBgPos: true,

			overflowY: 'auto',

			closeBtnInside: true,
			preloader: false,
			
			midClick: true,
			removalDelay: 300,
			mainClass: 'my-mfp-slide-bottom'
		});
		// alert('a[href="' + $(this).attr('href') + '-mobile"]');
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
			if($('.az-mob-menu').css('overflow') != 'visible'){
				setTimeout(function(){
					$('.az-mob-menu').css('overflow', 'visible');
				}, 500);
			}
		}else{
			$('.az-mob-menu').removeClass('az-mob-menu-fix2');
			$('.az-mob-menu').removeAttr("style");
		}
	});
	var az_pagination = $('.paginator');
	var az_cur_pag = az_pagination.data('current-page');
	var az_prev = az_pagination.find('a:contains("'+(az_cur_pag-1)+'")');
	var az_next = az_pagination.find('a:contains("'+(az_cur_pag+1)+'")');
	var az_pag_html = '<div id="pagination-index-mobile" class="paginator">'+
										'<span class="az-next">' + ((az_next.length > 0)?( '<a href="' + az_next.attr('href') + '"><i class="icon-chevron-left icon-white"></i></a>'):'') + '</span>' +
										'<span class="az-cur">' + '<em>' + az_cur_pag + '</em>' + '</span>' +
										'<span class="az-prev">' + ((az_prev.length > 0)?( '<a href="' + az_prev.attr('href') + '"><i class="icon-chevron-right icon-white"></i></a>'):'') + '</span>' +
										'</div>';
	az_pagination.after(az_pag_html);
});
