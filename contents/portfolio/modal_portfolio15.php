<div id="myCarousel" class="carousel slide" data-ride="carousel">
	<div class="col-md-4 col-md-push-8 col-lg-4">
		<h3>픽스폰</h3>
		<p>핸드폰수리점 모바일 홈페이지</p>
		<span class="link">
			<a href="http://fixphone.kr/m/" target="_blank">http://fixphone.kr/m/</a>
		</span>
		<dl>
			<dt>참여도</dt><dd>디자인 100%, 코딩 100%</dd>
			<dt>크로스브라우징</dt><dd>익스8이상</dd>
			<dt>제작기간</dt><dd>2015/07~2015/08</dd>
		</dl>
		<!-- Indicators -->
		<ol class="carousel-indicators">
			<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
			<li data-target="#myCarousel" data-slide-to="1"></li>
			<li data-target="#myCarousel" data-slide-to="2"></li>
			<li data-target="#myCarousel" data-slide-to="3"></li>
		</ol>
	</div>

	<div class="col-md-8 col-md-pull-4 col-lg-8">
		<!-- Wrapper for slides -->
		<div class="carousel-inner" role="listbox">
			<div class="item active">
				<img src="images/img_portfolio15_01.jpg" alt="메인 화면" width="100%">
			</div>
			<div class="item">
				<img src="images/img_portfolio15_02.jpg" alt="지점 선택 화면" width="100%">
			</div>
			<div class="item">
				<img src="images/img_portfolio15_03.jpg" alt="지점 안내 화면" width="100%">
			</div>
			<div class="item">
				<img src="images/img_portfolio15_04.jpg" alt="수리 안내 화면" width="100%">
			</div>
		</div>

		<!-- Left and right controls -->
		<a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
			<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
			<span class="sr-only">Previous</span>
		</a>
		<a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
			<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
			<span class="sr-only">Next</span>
		</a>
	</div>
</div>

<script>
$(".link > a").click(function(){
	event = event || window.event;
	if(event.preventDefault)
		event.preventDefault(); // W3C 모델
	else
		event.returnValue = false; // MS 모델

	var device = navigator.userAgent;
	find = device.indexOf("Mobile");
	if(find!==-1){
		window.open("http://fixphone.kr/m/", "_blank");
	}else{
	  window.open("http://fixphone.kr/m/", "_blank", "toolbar=no, scrollbars=no, resizable=no, top=500, left=500, width=375, height=665");	
	}
});
</script>