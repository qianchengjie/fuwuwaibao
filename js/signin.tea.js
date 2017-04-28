$(document).ready(function() {

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
			case '':
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
			var password = '';
			$('.anhao').find('li').each(function() {
					password += $(this).html();
				})

			$.ajax({
					type: 'POST',
					url: '',
					data: {
						password: password
					},
					success: function(data) {
					}
				})
			window.location.href = "signin_tea.html"

		}

	})


});