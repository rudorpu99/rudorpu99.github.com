$(document).ready(function() {

	//메인 추천디자인/프로그램 탭
	$("#bestProduct_tabs1").click(function(){
		$("#bestProduct_tabs2").removeClass("active");
		$("#bestProduct_tabs1").addClass("active");
		$(".bestProduct_tabs1").show();
		$(".bestProduct_tabs2").hide();
	 });
	$("#bestProduct_tabs2").click(function(){
		$("#bestProduct_tabs1").removeClass("active");
		$("#bestProduct_tabs2").addClass("active");
		$(".bestProduct_tabs2").show();
		$(".bestProduct_tabs1").hide();
	 });


	//메인 슬라이드
	var slider = $('.bxslider').bxSlider({
		mode: 'horizontal',
		auto: true,
		default: 200,
		pause: 2000
	});


	//상품목록타입 탭
	$("#listType_tabs1").click(function(){
		$("#listType_tabs2").removeClass("active");
		$("#listType_tabs1").addClass("active");
		$(".listType_tabs1").show();
		$(".listType_tabs2").hide();
	 });
	$("#listType_tabs2").click(function(){
		$("#listType_tabs1").removeClass("active");
		$("#listType_tabs2").addClass("active");
		$(".listType_tabs2").show();
		$(".listType_tabs1").hide();
	 });


	//미리보기 레이어 팝업
	var firstImg = $(".previewList li:first-of-type").find("img").attr("src");

	$(".modalPreview").click(function(){
		$("#modalPreview").toggleClass("on");
		reset();
	});


	$(window).scroll(function(){
		$("#modalPreview").removeClass("on");
		reset();
	});


	$("#modalPreview").mouseleave(function(){
		$("#modalPreview").removeClass("on");
		reset();
	});

	function reset(){
		$(".previewList > ul").css({"left":"0px","right":"0px"});
		$("#bigPreview").attr("src",firstImg);
	}

	//제품사진보기 슬라이드
	var  liCount=0;
    $(".previewList_wrap").find('li').each(function(){
        
		liCount++;
		$(".previewList > ul").css('width',67*liCount);
		
    });

	var nowclick=0;
    $(".previewList_wrap > .previous").click(function(){
       
		if(nowclick>0){
		nowclick--;
			$(".previewList > ul").animate({
				left: '+=66px',
				right: '-=66px'
			});
		}
		
    });

    $(".previewList_wrap > .next").click(function(){
        
		if(liCount-5>nowclick){
		nowclick++;
			$(".previewList > ul").animate({
				right: '+=66px',
					left:'-=66px'
			});
		}
		
    });

	$(".previewList li").click(function(){
		var selImg = $(this).find("img").attr("src");
		$("#bigPreview").attr("src",selImg);
	});






});