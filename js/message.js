$(document).ready(function() {

	$('.message-content li').click(function() {
		$(this).addClass('already-read');
		var tds = $(this).find('td');
		var message = $(this).find('.message-detailed').val()
		var msg_id = $(this).find('.msg-id').val()
		$('.dialog-content').find('p').text(message);
		$('.dialog').show();

		//变成已读ajax
		$.ajax({
			url : '',
			type : 'POST',
			date : {
				msgID : msg_id
			},
			success : function(date){

			}
		})
	})
	//全部已读
	$('.all-read').click(function(){
		$('.message-content').find('li').addClass('already-read')
	})
	//清空消息
	$('.clear-all').click(function(){
		$('.message-content').empty()
	})

});