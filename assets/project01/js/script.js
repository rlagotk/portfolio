$(document).ready(function(){

    var current = 0;
    var setIntervalld;

$("#main_img .btns li").click(function(){
    var i = $(this).index();
    move(i)
});

$("#main_img").hover(
    function(){
        clearInterval(setIntervalld);
    },
    function(){
        timer();
    });

timer();
function timer(){
    setIntervalld = setInterval(function(){
        var n = current + 1;
        if(n == 5){
            n = 0;
        }
        move(n)
    }, 1000);
}

function move(i){
    if(current == i) return;

    var currentEl = $(".imgs li").eq(current);
    var nextEl = $(".imgs li").eq(i);
    currentEl.css({left:0}).stop().animate({left:'-100%'});
     nextEl.css({left:'100%'}).stop().animate({left:0});
    
    current = i;
}

function move2(i){
	if(current == i) return; 
	var currentEl = $(".imgs li").eq(current);
	var nextEl = $(".imgs li").eq(i);
	currentEl.css({left:0}).stop().animate({left:'100%'});
	nextEl.css({left:'-100%'}).stop().animate({left:0});
    
    current = i;
}


});