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
});

//选项卡start
$(function() {
	$(".btnss a").each(function(i) {
		$(this).click(function() {
			$(".btnss a").removeClass().eq(i).addClass("cur");
			$(".votecont").hide().eq(i).show();
		});
	});
});

$(function() {
	$(".volefle1 a").each(function(i) {
		$(this).click(function() {
			$(".volefle1 a").removeClass().eq(i).addClass("kur");
			$(".volerig1").hide().eq(i).show();
		});
	});
});

$(function() {
	$(".volefle2 a").each(function(i) {
		$(this).click(function() {
			$(".volefle2 a").removeClass().eq(i).addClass("kur");
			$(".volerig2").hide().eq(i).show();
		});
	});
});

$(function() {
	$(".volefle3 a").each(function(i) {
		$(this).click(function() {
			$(".volefle3 a").removeClass().eq(i).addClass("kur");
			$(".volerig3").hide().eq(i).show();
		});
	});
});

$(function() {
	$(".volefle4 a").each(function(i) {
		$(this).click(function() {
			$(".volefle4 a").removeClass().eq(i).addClass("kur");
			$(".volerig4").hide().eq(i).show();
		});

	});
});

$(function() {
	$(".volefle5 a").each(function(i) {
		$(this).click(function() {
			$(".volefle5 a").removeClass().eq(i).addClass("kur");
			$(".volerig5").hide().eq(i).show();
		});
	});
});
//选项卡end