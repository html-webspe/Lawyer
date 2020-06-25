//====================  SCROLL ========================//
$(window).scroll(function (event) {
	var scr = $(this).scrollTop();
	sectors(scr);
});
function sectors(scr) {
	var w = $(window).outerWidth();
	var h = $(window).outerHeight();
	if (scr > 130) {
		$('.site-header').addClass('scroll');

		$('.site-header').find('.site-logo').html('<img src="img/logo-white.png" alt="Логотип" />');
	} else {
		$('.site-header').removeClass('scroll');
		$('.site-header').find('.site-logo').html('<img src="img/logo.png" alt="Логотип" />');
	}
}
//====================  <!-- SCROLL --> ========================//
//====================  UP ========================//
$(window).scroll(function () {
	var w = $(window).width();
	if ($(window).scrollTop() > 50) {
		$('#up').fadeIn(300);
	} else {
		$('#up').fadeOut(300);
	}
});
$('#up').click(function (event) {
	$('body,html').animate({ scrollTop: 0 }, 300);
});
//==================== <!-- UP --> ========================//
//====================  ImageBg ========================//
function ibg() {
	function isIE() {
		let ibg = document.querySelectorAll(".ibg");
		for (var i = 0; i < ibg.length; i++) {
			if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
				ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
			}
		}
	}
}
ibg();
//====================  <!-- ImageBg -->  ========================//

//====================   GoTO -->  ========================//
$('.goto').click(function () {
	var el = $(this).attr('href').replace('#', '');

	var offset = 0;
	$('body,html').animate({ scrollTop: $('.' + el).offset().top + offset }, 500, function () { });

	if ($('.header-menu__mobile').hasClass('active')) {
		$('.header-menu__mobile,.header-menu__icon').removeClass('active');
		$('body').removeClass('lock');
	}
	return false;
});
//====================  <!-- GoTO -->  ========================//
//====================  Video  ========================//
$('.video-play').click(function () {
	$('#video').get(0).play();
	$(this).fadeOut();
	$('.video__poster').fadeOut();
});
//====================  <!-- Video -->  ========================//
//====================  Price-counter  ========================//
const counters = document.querySelectorAll('.price-content__price-count');
const speed = 130; // The lower the slower

counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = + Math.round(counter.innerText);
		const inc = Math.round(target / speed);
		if (count < target) {
			counter.innerText = count + inc;
			setTimeout(updateCount, 10);
		} else {
			counter.innerText = target;
		}
	};
	updateCount();
});
//==================== <!-- Price-counter --> ========================//

var owl = $('.owl-carousel');
owl.owlCarousel({
	margin: 100,
	loop: true,
	autoplay: true,
	slideBy: 5,
	responsive: {
		0: {

			items: 1
		},
		600: {
			items: 3
		},
		1000: {
			items: 5
		}
	}
})

$('.post-sharing').click(function () {
	$(this).toggleClass('active');
	$(this).parent().find('.post-sharing__popup').toggleClass('active');
});


/*
gsap.fromTo("#logo", { x: -300, opacity: 0, scale: 0.5 }, { duration: 1, x: 0, opacity: 1, scale: 1 });

gsap.from('.content-header__right-text', { duration: 1.5, opacity: 0, scale: 0.5 });
gsap.from('.content-header__links', { duration: 2.5, opacity: 0, y: -500 })
gsap.from('.intro__btn', { delay: 2, duration: 1, opacity: 0 })

var tl = new TimelineMax();

var introText = $('.intro__text').text(),
	splitSpace = introText.split(' '),
	array = new Array(),
	counter = 400;

$(splitSpace).each(function (index) {
	var markup = '<span style="position:relative; right:' + counter + 'px">' + splitSpace[index] + '</span>';

	array.push(markup);
	counter = counter + 200;
});

var finalArray = array.join(' ')

$('.intro__text').html(finalArray);
gsap.to($('.intro__text span'), 0.5, { duration: 1, right: 0 }, 1);*/