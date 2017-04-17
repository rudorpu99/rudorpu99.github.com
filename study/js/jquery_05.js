//한번에제어:반복이 가능함

$(function(){
	$('#typo').on('mouseover', function(){
		$('#typo').css({
			color: '#ebc000',
			backgroundColor: '#ae5e9b'
		});
	});
	$('#typo').on('mouseout', function(){
		$('#typo').css({
			color: '',
			backgroundColor: ''
		});
	});
});

