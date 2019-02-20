$(function() {
//头部start
var sub2 = $("#sub_02");
var sub3 = $("#sub_03");
var sub4 = $("#sub_04");
var sub6 = $("#sub_06");
$(".n2").mouseover(function() {
	sub2.slideDown();
});
$(".n2").mouseleave(function() {
	sub2.slideUp();
});
$(".n3").mouseover(function() {
	sub3.slideDown();
});
$(".n3").mouseleave(function() {
	sub3.slideUp();
});
$(".n4").mouseover(function() {
	sub4.slideDown();
});
$(".n4").mouseleave(function() {
	sub4.slideUp();
});
$(".n6").mouseover(function() {
	sub6.slideDown();
});
$(".n6").mouseleave(function() {
	sub6.slideUp();
});
//头部end

	//选项卡start
	var bt4 = $('.bt4');
	var bt3 = $('.bt3');
	var bt1 = $('.bt1');
	var bt2 = $('.bt2');
	var ex4 = $('#ex4');
	var ex3 = $('#ex3');
	var ex1 = $('#ex1');
	var ex2 = $('#ex2');
	var geteg = $('.geteg');
	
	bt4.click(function(){
		ex4.show();
		ex3.hide();
		ex1.hide();
		ex2.hide();
		$(this).addClass('bt4s');
		bt3.removeClass('bt3s');
		bt1.removeClass('bt1s');
		bt2.removeClass('bt2s');
	});
	bt3.click(function(){
		ex4.hide();
		ex3.show();
		ex1.hide();
		ex2.hide();
		bt4.removeClass('bt4s');
		$(this).addClass('bt3s');
		bt1.removeClass('bt1s');
		bt2.removeClass('bt2s');
	});
	bt1.click(function(){
		ex4.hide();
		ex3.hide();
		ex1.show();
		ex2.hide();
		bt4.removeClass('bt4s');
		bt3.removeClass('bt3s');
		$(this).addClass('bt1s');
		bt2.removeClass('bt2s');
	});
	bt2.click(function(){
		ex4.hide();
		ex3.hide();
		ex1.hide();
		ex2.show();
		bt4.removeClass('bt4s');
		bt3.removeClass('bt3s');
		bt1.removeClass('bt1s');
		$(this).addClass('bt2s');
	});
	//选项卡end
	
	//通过导航连接选项卡start
	var sub_04_1 = $('.sub_04_1');
	var sub_04_2 = $('.sub_04_2');
	var sub_04_3 = $('.sub_04_3');
	var sub_04_4 = $('.sub_04_4');
	
	sub_04_4.click(function(){
		bt4.addClass('bt4s');
		bt3.removeClass('bt3s');
		bt1.removeClass('bt1s');
		bt2.removeClass('bt2s');
	});
	sub_04_3.click(function(){
		bt4.removeClass('bt4s');
		bt3.addClass('bt3s');
		bt1.removeClass('bt1s');
		bt2.removeClass('bt2s');
	});
	sub_04_1.click(function(){
		bt4.removeClass('bt4s');
		bt3.removeClass('bt3s');
		bt1.addClass('bt1s');
		bt2.removeClass('bt2s');
	});
	sub_04_2.click(function(){
		bt4.removeClass('bt4s');
		bt3.removeClass('bt3s');
		bt1.removeClass('bt1s');
		bt2.addClass('bt2s');
	});
通过导航连接选项卡end

});