var myswiper = new Swiper(".swiper-banner",{
	paginationClickable:true,
	autoplay:2000,
});
var myswiper = new Swiper(".swiper-menu",{
	pagination:".swiper-pagination",
	paginationClickable:true,
});
var menutop = $(".menu1 .menu .menu_top div[class*=icon]");
for(var i = 0 ;i<menutop.length;i++){
	$(menutop[i]).css({
		"width":"0.88rem",
		"height":"0.86rem",
		"background":"url(images/bar_0"+(i+1)+".jpg) no-repeat",
		"background-size":"contain",
	});
}
var menubottom = $(".menu1 .menu .menu_bottom div[class*=icon]");
for(var i = 0 ;i<menubottom.length;i++){
	$(menubottom[i]).css({
		"width":"0.88rem",
		"height":"0.86rem",
		"background":"url(images/bar_0"+(i+5)+".jpg) no-repeat",
		"background-size":"contain",
	});
}
var menu1 = $(".menu1 .menu").clone();
$(".menu2 .menu").append(menu1);
var freeicon = $(".free_content div[class*=icon]");
for(var i = 0 ;i<freeicon.length;i++){
	$(freeicon[i]).css({
		"width":"1.31rem",
		"height":"1.11rem",
		"background":"url(images/free"+(i+1)+".jpg) no-repeat",
		"background-size":"contain",
	});
}
var jbnicon = $(".jbn_content div[class*=icon]");
for(var i = 0;i<jbnicon.length;i++){
	$(jbnicon[i]).css({
		"width":"1.33rem",
		"height":"1.03rem",
		"background":"url(images/jbn_"+(i+1)+".jpg) no-repeat",
		"background-size":"contain",
	});
}
var jbntitle = $(".jbn_content > div >div");
for(var i = 0;i<jbntitle.length;i++){
	$(jbntitle[i]).css({
		"width":"1.44rem",
		"height":"1.5rem",
		"background":"pink",
	});
}
var favleft = $(".fav_content div[class*=left]");
for(var i = 0;i<favleft.length;i++){
	$(favleft[i]).css({
		"width":"2.05rem",
		"height":"1.5rem",
		"background":"url(images/food_0"+(i+1)+".jpg) no-repeat",
		"background-size":"cover",
	});
}
var footericon = $(".footer div[class*=icon]");
for(var i = 0;i<footericon.length;i++){
	$(footericon[i]).css({
		"width":"0.48rem",
		"height":"0.43rem",
		"background":"url(images/footer_"+(i+1)+".jpg) no-repeat",
		"background-size":"cover",
		"margin":"auto",
	});
}
var ulstate = false;
$(".top_area p").click(function(){
	if(!ulstate){
		$(".top_area ul").show();
		ulstate = true;
		$(".top_area img").css("transform","rotate(180deg)");
	}
	else{
		$(".top_area ul").hide();
		ulstate = false;
		$(".top_area img").css("transform","rotate(360deg)");
	}
});
var lis = $(".top_area li");
for(var i = 0;i<lis.length;i++){
	$(lis[i]).click(function(){
		$(".top_area p").html($(this).html()).click();
	});
}
var newDate = new Date(2017,5,20);

var timer = setInterval(function(){
	var now = new Date();
	var time = Math.floor(newDate-now)/1000;
	var timeStr;
	if(time>0){
		timeStr = (Math.floor(time/3600)<10?"0"+Math.floor(time/3600):Math.floor(time/3600))+":"+
					(Math.floor(time%3600/60)<10?"0"+Math.floor(time%3600/60):Math.floor(time%3600/60))+":"+
					(Math.floor(time%60)<10?"0"+Math.floor(time%60):Math.floor(time%60));
	}else{
		timeStr = "正在抢购";
		clearInterval(timer);
	}
	$(".free_title_center span").html(timeStr);
},1000);
var listState = false;
$(".fav_all").click(function(){
	if(!listState){
		var content = $(".fav_content").clone();
		$(".fav_list").append(content);
		$(this).html("收起");
		listState = true;
	}else{
		var lis = $(".fav_list > div");
		for(var i = 0;i<lis.length;i++){
			if(i>2){
				$(lis[i]).remove();
			}
		}
		$(this).html("查看所有团购");
		listState = false;
	}

	
});
