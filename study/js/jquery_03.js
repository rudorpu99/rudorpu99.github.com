$(function(){
	$('#typo').css('color', '#ebc000'); //글자 색 바꾸기
	$('#typo .inner').css('transform', 'rotate(10deg)');//각도값 주기
	$('.page-main > div:nth-child(1) .inner').css('opacity', '0.5');//css3 선택자도먹혀요
})

$(function(){
	$('#typo').css({
		'height':'330px',//이렇게입력할수도있지만
		fontSize:'30px',//따옴표를떼고 입력해도된다.
		backgroundcolor:'#ae5e9b',//단 -를 떼고 그뒤시작문자는 대문자로해야된다.
		color:'#ddd'
	})//여러줄입력
});