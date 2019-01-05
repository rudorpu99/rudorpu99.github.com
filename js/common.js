


/*스크롤 효과*/
	$(document).ready(function(){
		$("nav a").click(function(e){
			$("#myNavbar").attr("aria-expanded","false").css("height","1px").removeClass("in");
			$.scrollTo(this.hash || 0, 1000);
			e.preventDefault();
		});
	});



/*경력사항 영역*/

$(".career_more").click(function(){
	$(this).toggleClass("close");
	$(this).parents(".img_wrap").toggleClass("col-md-12 full");
	var imgWrap = $(this).parents(".img_wrap");
	if(imgWrap.hasClass("full")==true){
		$(this).parents(".img_wrap").animate({
			 height: '100%',
		 });
	}else{
		$(this).parents(".img_wrap").animate({
			 height: '175px',
		 });
	}

});




/*포트폴리오 영역*/
$(function(){
	$('#gallery').each(function(){
		var $container = $(this);
			$loadMoreButton = $('#load-more'),
			$filter = $('#gallery-filter'),
			addItemCount = 8,
			added = 0,
			allData = [],
			filteredData = [];

		/*포트폴리오 배치*/

		$container.isotope({
			columnWidth: 110,
			gutter:50,
			layoutMode: 'packery',
			itemSelector: '.gallery-item'
		});

		$.getJSON('portfolio.json',initGallery);

			function initGallery (data){
				allData = data;
				filteredData = allData;
				addItems();
				$loadMoreButton.on('click', addItems);
				$filter.on('click', 'button', filterItems);
			}

		$("#gallery-filter button").click(function(){
			$(this).addClass("active");
			$(this).siblings("button").removeClass("active");

		});


			function addItems (filter){
				var elements = [],
					slicedData = filteredData.slice(added, added + addItemCount);

				$.each(slicedData, function(i,item){
					var itemHTML =
						'<li id="' + item.modal + '" class="gallery-item is-loading">' +
						'<a href="modal.html" target="_blank" onclick="return false;">' +
						'<div class="thumb"><img src="' + item.img + '" alt="' + item.title + " 시안" +'"></div>' +
						'<dl class="con_list">' +
							'<dt>' + item.title + '</dt>' +
							'<dd class="label">' + item.label + '</dd>' +
							'<dd class="role">' + item.role + '</dd>' +
							'<dd class="ex">' + item.ex + '</dd>' +
						'</dl>' +
						'</a>' +
						'</li>';
					elements.push($(itemHTML).get(0));

				});

				$container
					.append(elements)
					.imagesLoaded(function(){
						$(elements).removeClass('is-loading');
						$container.isotope('appended', elements);

						if(filter){
							$container.isotope();
						}
					});



					$('.gallery-item').click(function(){
						var clickedID = this.id;
						var clickedIDNumber = clickedID.substr(9,2);
						$("#myModal").modal({backdrop: true});
						$("#pofol_wrap").load('contents/portfolio/modal_portfolio'+clickedIDNumber+'.html');

					});
					$('#myModal .close').click(function(){
						$("#pofol_wrap").empty();
					});


				added += slicedData.length;

				if (added < filteredData.length){
					$loadMoreButton.show();
				}else{
					$loadMoreButton.hide();
				}
			}

			function filterItems(){
				var key = $(this).val(),
					isotopeItems = $container.isotope('getItemElements');
				$container.isotope('remove', isotopeItems);

				filteredData = [];
				added = 0;

				if(key === 'all'){
					filteredData = allData;
				}else{
					filteredData = $.grep(allData, function (item){
						return item.category === key;
					});

				}
			addItems(true);
		}
	});
});

/*문의*/
function chkMailFrm() {
 var f = document.formmail;
 if (!f.senduser.value) {
  alert("이름을 입력해주세요");
  f.senduser.focus();
  return false;
 }
 if (!f.phone.value) {
  alert("연락처를 입력해주세요");
  f.phone.focus();
  return false;
 }
 if (!f.email.value) {
  alert("이메일을 입력해주세요");
  f.email.focus();
  return false;
 }
 if (!f.title.value) {
  alert("제목을 입력해주세요");
  f.title.focus();
  return false;
 }
 if (!f.body.value) {
  alert("내용을 입력해주세요");
  f.body.focus();
  return false;
 }


}
