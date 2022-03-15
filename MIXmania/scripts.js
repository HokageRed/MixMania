$(function () { 
	let scrollPos = $(window).scrollTop();
	let rmClass = $('#rmClass');
	let width = $(window).width();
	$(window).on("scroll load resize", function() {

		scrollPos = $(this).scrollTop();
		if (width <= 1200 && width >=320) {
		rmClass.addClass('row');
	}
	})
	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();

		let elementId = $(this).data('scroll');
		let elementOffset = $(elementId).offset().top;

		$("html, body").animate({
			scrollTop: elementOffset - 90
		}, 700);
	});

});
