$(document).ready(function () {

	//push карта

	$('.coffee__block-two').click(function (e) {
		$(".index-push").css("display", "flex");
	})

	//карта
	$(".vipusk").on("click", function (event) {
		event.preventDefault;
		$(".card_item").removeClass("active");
		$(".card_item2").addClass("active");
		$(".opp1").removeClass("active");
		$(".opp2").addClass("active");
		$(".referal").addClass("active");
	});


	//меню
	$('.menu__burger').click(function (event) {
		$('.menu__burger,.menu__list').toggleClass('active');
		$('body').toggleClass('lock');
	});

	//push
	$('.items-cart__link-push').click(function (event) {
		$('.push').css('display', 'flex');
	});



	$('.push__yes').click(function (event) {
		$(".items-cart__link").removeClass("act");
		$(".items-cart__link-push").addClass("act");
		$(".items-cart__block").removeClass("act-block"), $('.items-cart__block-tab').addClass("act-block");
		$('.push').css('display', 'none');
	});

	
	
	$('.push__no').click(function (event) {

		$('.push').css('display', 'none');

	});

	//табы
	$(".items-cart__link").click((function (e) {
		e.preventDefault();
		$(".items-cart__link").removeClass("act"), $(this).addClass("act");
		$(".items-cart__block").removeClass("act-block"), $(this).addClass("act-block");
		$(".items-cart__link-push").removeClass("act");
		$('.items-cart__block-tab').removeClass("act-block");
		$($(this).attr('href')).addClass("act-block");
	}));
	$(".items-cart__link:first").click();

	//попап
	$(".items-cart__wrap").click((function (e) {
		e.preventDefault();
		$(".items-cart__wrap").removeClass("popap-a"), $(this).addClass("popap-a");
		$(".popap-cart").removeClass("popap-a"), $(this).addClass("popap-a");
		$(".items-cart__block").addClass("non");
		$($(this).attr('href')).addClass("popap-act");
		$('body,html').animate({ scrollTop: 140 }, 200);
	}));
	
	$(".popap-cart__close").click((function (e) {
		$(".popap-cart").removeClass("popap-act");
		$(".items-cart__block").removeClass("non");
		$(".popap-cart__list").removeClass('popap-cart__active');

	}));


	//выбор мл в форме
	$(".popap-cart__btn-1").click((function (e) {
		e.preventDefault();
		$(".popap-cart__list-1").toggleClass('popap-cart__active');
	}));
	
	$(".popap-cart__ml-1").click((function (e) {
		let inp = $(this).html();
		$(".popap-cart__q").val(inp);
		$(".popap-cart__list-1").removeClass('popap-cart__active');
	}));
	////////////////////////////
	$(".popap-cart__btn-2").click((function (e) {
		e.preventDefault();
		$(".popap-cart__list-2").toggleClass('popap-cart__active');
	}));

	$(".popap-cart__ml-2").click((function (e) {
		let inp = $(this).html();
		$(".popap-cart__w").val(inp);
		$(".popap-cart__list-2").removeClass('popap-cart__active');
	}));

	//корзина

	$('.popap-cart__button').click(function (e) {
		let tt = $('.header-cart__span').text();
		tt++;
		$('.header-cart__span').text(tt);
		$('.header-cart__image').addClass('header-cart__a');

		$(".popap-cart").removeClass("popap-act");
		$(".items-cart__block").removeClass("non");
		$('body,html').animate({ scrollTop: 0 }, 200);
	});
		
	//basket
	$('.basket__minus').click(function (e) {
		let num = $(this).siblings().find('.basket__span').text();
		//let num = $('.basket__span').html();
		num--;
		if(num > 0) {
			$(this).siblings().find('.basket__span').text(num);
		}

	});

	$('.basket__plus').click(function (e) {
		let num = $(this).siblings().find('.basket__span').text();
		//let num = $('.basket__span').html();
		num++;

		$(this).siblings().find('.basket__span').text(num);
	});

	$('.basket__close').click(function (e) {

		$(this).parent().css('display', 'none');
	
	});

	//присоедениться
	$('.start__btn').click(function (e) {
		e.preventDefault();
		$('body,html').animate({ scrollTop: 10000 }, 500);
	});

	//видео
	$('.video').parent().click(function () {
		if ($(this).children(".video").get(0).paused) {
			$(this).children(".video").get(0).play(); $(this).children(".playpause").fadeOut();
		} else {
			$(this).children(".video").get(0).pause();
			$(this).children(".playpause").fadeIn();
		}
	});
	///// job
	$('#z').click(function (e) {
		e.preventDefault();
		$('#qa').addClass('popap-job__act');
		$('body,html').animate({ scrollTop: 0 }, 0);
	});
	$('#x').click(function (e) {
		e.preventDefault();
		$('#wa').addClass('popap-job__act');
		$('body,html').animate({ scrollTop: 0 }, 0);
	});
	$('#c').click(function (e) {
		e.preventDefault();
		$('#ea').addClass('popap-job__act');
		$('body,html').animate({ scrollTop: 0 }, 0);
	});
	$('.popap-job__close').click(function (e) {
		e.preventDefault();
		$('.popap-job').removeClass('popap-job__act');
		$('body,html').animate({ scrollTop: 900 }, 0);
	});

	$('.popap-job__days').click(function (e) {
		$(this).find('.popap-job__list').toggleClass('popap-job__active');
		$('.popap-job__l').removeClass('popap-job__active');
	});

	$('.popap-job__watch').click(function (e) {
		$(this).find('.popap-job__list').toggleClass('popap-job__active');
		$('.popap-job__h').removeClass('popap-job__active');
	});

	$('.popap-job__link').click(function (e) {
		e.preventDefault();
		let text =  $(this).text();
		$(this).parent().parent().find('.popap-job__s').text(text);

		//console.log(parent);
	});
	
	//сладеры
	$('.product__slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		centerMode: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true,
					arrows: false,
				}
			}
		]
	});

	$('.news__wrapper').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true,
					arrows: false,
				}
			}
		]
	});

	$('.reviews__slider').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		variableWidth: true,
		responsive: [
			{
				breakpoint: 1220,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true,
					arrows: false,
					variableWidth: false
				}
			}
		]
	});

	$('.items-cart__slider').slick({
		infinite: true,
		slidesToShow: 6,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 4,

				}
			},
			{
				breakpoint: 730,
				settings: {
					slidesToShow: 2,

				}
			},
			{
				breakpoint: 450,
				settings: {
					slidesToShow: 1,

				}
			}
		]
	});


});