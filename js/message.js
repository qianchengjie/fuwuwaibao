$(document).ready(function() {

	$('.message-content li').click(function() {
		$(this).addClass('already-read');
		var tds = $(this).find('td');
		var message = $(this).find("[type='hidden']").val()
		$('.dialog-content').find('p').text(message);
		$('.dialog').show();
	})
	$('.all-read').click(function(){
		$('.message-content').find('li').addClass('already-read')
	})
	$('.clear-all').click(function(){
		$('.message-content').empty()
	})

});