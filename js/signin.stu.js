$(document).ready(function() {
	var numIndex = 0;

	$('.signin-block').bind('touchmove', function() {
		var touch = event.targetTouches[0];
		var offsetX = 0;
		var wWidth = $(window).width();
		var bWidth = $('.signin-block').width();
		offsetX = touch.pageX - bWidth / 2;
		offsetX = offsetX <= 0 ? 0 : offsetX;
		offsetX = offsetX >= wWidth - bWidth ? wWidth - bWidth : offsetX;
		$('.signin-block').css({
			left: offsetX
		})
		$('.signin-bg').width($('.signin-block').offset().left);

		//滑动到最边缘
		if ($('.signin-block').offset().left >= $(window).width() - $('.signin-block').width()) {
			var password = '';
			$('.anhao').find('li').each(function() {
				password += $(this).html();
			})

			if (password == '1234') {
				$('.dialog-content p').text('签到成功！')
				$('.tips p').text('签到成功！');
				$('.anhao').fadeOut();
				$('.number').slideUp();
				dialogShow();
			} else {
				$('.tips p').text('密码错误！');
				$('.signin').hide();
				$('.anhao').fadeIn();
				$('.number').fadeIn();
				$('.anhao').find('li').each(function() {
					$(this).html("<span></span>");
				})
				numIndex = 0;
			}


			//签到
			// $.ajax({
			// 	type: 'POST',
			// 	url: '',
			// 	data: {
			// 		password: password
			// 	},
			//  	success: function(data) {
			// 		if (data.indexOf('签到成功') != -1) {
			// 			$('.dialog-content p').text('签到成功！')
			//  			$('.tips p').text('签到成功！');
			// 			$('.signin').fadeOut();
			//  			$('.number').slideUp();
			// 			dialogShow();
			// 		} else {
			// 			$('.tips p').text('密码错误！');
			// 			$('.signin').hide();
			// 			$('.anhao').fadeIn();
						// $('.number').show();
			// 			$('.anhao').find('li').each(function() {
			// 				$(this).html("<span></span>");
			// 			})
			// 			numIndex = 0;
			// 		}
			// 	}
			// })

		}
	})

	$('.dialog-bottom,.dialog .mask').click(function() {
		$('.dialog').hide();
	})

	//四位密码
	var numIndex = 0;
	$('.number').find('li').click(function() {

		var num = $(this).text();
		$(this).css('background-color', '#DDD');
		var number_obj = $(this);
		setTimeout(function() {
			number_obj.css('background-color', '')
		}, 100)
		switch (num) {
			case ' ':
				break;
			case 'Del':
				$('.anhao').find('li').each(function() {
					if ($(this).index() == numIndex) {
						$(this).html("<span></span>");
					}
				})
				numIndex = numIndex == 0 ? 0 : --numIndex;
				break;
			default:
				$('.anhao').find('li').each(function() {
					if ($(this).index() == numIndex && $(this).html() == "<span></span>") {
						$(this).html(num);
					}
				})
				numIndex = numIndex == 3 ? 3 : ++numIndex;
				break;
		}

		//输入了四位密码
		if ($('.anhao').find('li:last-child').html() != "<span></span>") {
			$('.signin-block').css('left', '0')
			$('.signin-bg').width($('.signin-block').offset().left);
			$('.number').hide();
			$('.anhao').hide();
			$('.signin').fadeIn();
			$('.tips p').text('滑动验证');
		}

	})


});

function dialogShow() {
	$('.message-1').css('display', 'block')
	$('.message-2').css('display', 'none');
	$('.dialog').show();
}