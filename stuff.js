window.addEventListener('load', function() {
		$('.header-hover-centre').animate({
			left: "+=5%",
			opacity: 0
		},{
			duration: 500,
			complete: function() {
				$(this).hide();
				$('div.main-container').fadeIn('slow');
			}
		})
	site.bindClick();
})

var site = {
	bindClick : function() {
		$('ul.main-nav li').click(function() {
			var a = $(this).html();
			$('html, body').animate({
				scrollTop: $('#'+a).offset().top
			}, 800);
		});

		$('.scrollTop').click(function() {
			$('html, body').animate({
				scrollTop: '0'
			}, 500);
		})
	}
}