/* *******************************************************
 * filename : main.js
 * description : 메인에만 사용되는 JS
 * date : 2017-05-30
******************************************************** */


jQuery(function($){

	/* *********************** 메인 History ************************ */
	$(".main-history-list-con.pc > ul").each(function  (index) {
		var $historyList = $(this);
		var $historyItem = $historyList.children("li");
		var historyLength = $historyItem.length;
		var startNum = 0;
		var rollingSpeed = 4000;
		
		function visualTime(){
			if(startNum < ( historyLength - 1)){
				startNum++;
			}else{
				startNum = 0;
			}
			visualPlay();
		}
		function visualPlay(){
			$historyItem.each(function(id){
					if(id == startNum){
						$(this).addClass("active");
					}else{
						$(this).removeClass("active");
					}
			});
		};

		visualPlay();
		var visual_timer = setInterval(visualTime,rollingSpeed);

		$historyItem.each(function(index){
			$(this).click(function(){
				clearInterval(visual_timer);
				startNum = index;
				visualPlay();
				visual_timer = setInterval(visualTime,rollingSpeed);
				return false;
			});
		});
	});


	$(".main-history-list-con.m > ul").slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: true,
		fade: false,
		dots:false,
		autoplay: true,
		speed:1000,
		infinite:false,
		autoplaySpeed: 4000,
		easing: 'easeInOutQuint',
		centerMode:true,
		focusOnSelect: true,
		centerPadding: '0px',
		responsive: [
			{
				breakpoint: 1279,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			}
		]
	});
});
