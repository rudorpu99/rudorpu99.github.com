//개별제어:개별로주면 한번씩밖에 발생안함

$(function(){
	$('#typo').on('mouseover',function(){	//mouseover:마우스를 올려놓은 시점
		$('#typo').css('color','#ebc000');
		$('header').css('background-color','#ae5e9b'); //이런 선택자도 가능
	});
});


$(function(){
	$('#typo').on('mouseout',function(){	//요소에서 마우스 포인터가 벗어날때
		$('#typo').css('font-size','15px');
	});	
});


/*실행시점을 제어하는 코드

$('선택자').on('이벤트타입',function(){
	임의처리
});

*/