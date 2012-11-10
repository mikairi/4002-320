$(document).ready(function() {
	// Hide second level menu
	$('#nav-member').click(function(event) {
		event.preventDefault();
		$('#nav-menu-member').toggleClass('nav-hidden');
	});

	// Fixed navigation menu when scrolled pass
	var top = $('#nav-right').offset().top;
	$(window).scroll(function() {
		if ($(window).scrollTop() > top) {
			$('#nav-right').addClass('nav-fixed');
		} else {
			$('#nav-right').removeClass('nav-fixed');
		}
	});
});
