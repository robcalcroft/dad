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
	site.navHeightCalc();
	site.musicPlayer.addBindings();
	$(window).on('resize', site.navHeightCalc);
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
	},

	navHeightCalc : function() {
		var height = window.innerHeight / 2;
		console.log(height);
		$('ul.main-nav').css({'padding-top': height - 56 + 'px', 'padding-bottom' : height + 56 + 'px'});
		// DO IT FOR RESPONSIVE!!!!!!!
	},

	musicPlayer : {

		play : function() {
			$('#bg-track')[0].play()
			$('#bg-track')[0].volume = .2;
		},

		pause : function() {
			$('#bg-track')[0].pause();
		},

		volDown : function() {
			$('#bg-track')[0].volume -= .1;
		},

		volUp : function() {
			$('#bg-track')[0].volume += .1;
		},

		addBindings : function() {
			$('#song-start').click(function() {
				site.musicPlayer.play();
				$('#song-pause').fadeIn('slow');
			})
			$('#song-pause').click(function() {
				site.musicPlayer.pause();
				$(this).hide();
				$('#song-play').show();
			})
			$('#song-play').click(function() {
				site.musicPlayer.play();
				$(this).hide();
				$('#song-pause').show();
			})
		}

	}
}