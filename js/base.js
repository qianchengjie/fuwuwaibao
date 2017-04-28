$(document).ready(function() {

	$('.navbar-right span').click(function() {
		$('.navbar-right').find('.popover').show()
		$('.navbar-right .mask').show();
	})
	$('.navbar-right .popover a,.navbar-right .mask').click(function() {
		$('.navbar-right').find('.popover').hide()
		$('.navbar-right .mask').hide();
	})

	$('.table tbody tr').click(function() {
		var tds = $(this).find('td');
		var spans = $('.dialog-content').find('span');
		for (var i = 0; i < tds.length; i++) {
			$(spans[i]).text($(tds[i]).text());
		}
		$('.dialog').show();
	})
	$('.dialog-bottom,.dialog .mask').click(function() {
		$('.dialog').hide();
	})

});

//更新开始
var nums = [0, 0];
var timers = new Array(2);
function updateStart() {
	$('.loading').show();
	var animSpan = $('.loading-anim').find('span');
	timers[0] = setInterval(function() {
		$(animSpan[nums[0]]).toggleClass('anim');
		nums[0] = nums[0] == animSpan.length - 1 ? 0 : ++nums[0];
	}, 300)
	setTimeout(function() {
		timers[1] = setInterval(function() {
			$(animSpan[nums[1]]).toggleClass('anim');
			nums[1] = nums[1] == animSpan.length - 1 ? 0 : ++nums[1];
		}, 300)
	}, 300)
}
//更新完成
function updateFinish(){
	$('.loading').hide();
	$('.loading-anim').find('span').each(function(){
		$(this).removeClass('anim')
	})
	clearInterval(timers[0]);
	clearInterval(timers[1]);
	nums[0]=0,nums[1]=0;
}