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

window.onload = function() {
	//第一个轮播图start
	// 获取所有有关的对象
	var box = document.getElementById("box");
	var screen = box.children[0]; //获得相框
	var imgWidth = screen.offsetWidth; //图片显示宽度
	var ulObj = screen.children[0];
	var list = ulObj.children; //图片的li的集合
	var olObj = screen.children[1];
	var arr = document.getElementById("arr"); //获得左右焦点

	// 创建小按钮
	var pic = 0;
	for(var i = 0; i < list.length; i++) {
		var liObj = document.createElement("li");
		olObj.appendChild(liObj);
		//				liObj.innerHTML = i + 1;
		// 给每一个小按钮添加自定义属性，记录下标
		liObj.index = i;
		// 给每一个小按钮绑定事件
		liObj.onmouseover = function() {
			for(var j = 0; j < olObj.children.length; j++) {
				olObj.children[j].removeAttribute("class"); //清除所有小按钮的样式
			}
			this.className = "current";
			pic = this.index;
			animate(ulObj, -pic * imgWidth)
		}
	}
	// 给第一个小按钮添加样式
	olObj.children[0].className = "current";

	// 将第一个li克隆一份追加到ul中
	ulObj.appendChild(ulObj.children[0].cloneNode(true))
	// 设置自动播放
	setInterval(clickHandle, 4000);

	// 显示和隐藏左右焦点按钮
//	box.onmouseover = function() {
//		arr.style.display = "block";
//	}
//	box.onmouseout = function() {
//		arr.style.display = "none";
//	}
	// 右边焦点
	document.getElementById("right").onclick = clickHandle;

	function clickHandle() {
		if(pic >= list.length - 1) {
			pic = 0;
			ulObj.style.left = "0px";
		}
		pic++;
		animate(ulObj, -pic * imgWidth);
		// 如果图片为第6张，清除所有小按钮的样式，第一个小按钮有颜色
		if(pic == list.length - 1) {
			olObj.children[olObj.children.length - 1].className = "";
			olObj.children[0].className = "current";
		} else {
			for(var i = 0; i < olObj.children.length; i++) {
				olObj.children[i].className = "";
			}
			olObj.children[pic].className = "current";
		}
	}
	// 左边焦点
	document.getElementById("left").onclick = function() {
		if(pic == 0) {
			pic = list.length - 1;
			ulObj.style.left = -pic * imgWidth + "px";
		}
		pic--;
		animate(ulObj, -pic * imgWidth);

		// 设置小按钮的样式
		for(var i = 0; i < olObj.children.length; i++) {
			olObj.children[i].className = "";
		}
		olObj.children[pic].className = "current";

	}
	// 设置任意的一个元素,移动到指定的目标位置
	function animate(element, target) {
		clearInterval(element.timeId);
		//定时器的id值存储到对象的一个属性中
		element.timeId = setInterval(function() {
			//获取元素的当前的位置,数字类型
			var current = element.offsetLeft;
			var step = 10; //每次移动的距离
			step = current < target ? step : -step;
			current += step; //当前移动到位置
			if(Math.abs(current - target) > Math.abs(step)) {
				element.style.left = current + "px";
			} else {
				clearInterval(element.timeId); //清理定时器
				element.style.left = target + "px"; //直接到达目标
			}
		}, 10);
	}
	//第一个轮播图end
}

$(function() {
	//第二个轮播图start
	/*
	 原理：核心：轮播的时候，出去的图片，剪切放到最后，首尾拼接
	 
	 1.ul：设置宽度
	 2.开定时器：轮播（出去一张，就减掉马上放回后面）
	 3.鼠标经过停下来，鼠标离开就启动
	 4.上下按钮点击能够切换
	 5.点击焦点能切换图片
	 */

	//1.给ul设置宽度：li个数*单个图片的宽度
	var iWidth = $("#imglist li").length * $("#imglist li:first").outerWidth();
	$("#imglist ul").width(iWidth);
	//console.log(iWidth);

	//2.开定时器：轮播（出去一张，就减掉马上放回后面）
	var now = 0; //当前的
	var timer = null;
	var moveWidth = $("#imglist li:first").outerWidth();

	clearInterval(timer);
	//	timer = setInterval(next, 2000);

	function next() {
		//设置临界值
		now = ++now > $("#imglist li").length - 1 ? 0 : now;
		//往左边走：负数，-moveWidth
		$("#imglist ul").animate({
			"left": -moveWidth
		}, 1000, "linear", function() {
			$("#imglist ul li:first").insertAfter($("#imglist ul li:last"));
			$("#imglist ul").css({
				"left": 0
			});
		});

		light();
	}

	//焦点跟随
	function light() {
		$("#light span").eq(now).addClass("active").siblings().removeClass("active");
	}

	//3.鼠标经过停下来，鼠标离开就启动

	$("#box2").hover(function() {
		clearInterval(timer);
	}, function() {
		clearInterval(timer);
		//		timer = setInterval(next, 2000);
	});

	//4.上下按钮点击能够切换
	var oldtime = new Date();
	$("#prev").click(function() {
		if(new Date() - oldtime > 500) {
			oldtime = new Date(); //点击间隔时间太短则作为无效点击
			//上一张，往右走
			now = --now < 0 ? $("#imglist ul li").length - 1 : now;
			$("#imglist ul li:last").insertBefore($("#imglist li:first"));
			$("#imglist ul").css({
				"left": -moveWidth
			});
			$("#imglist ul").animate({
				"left": 0
			}, 1000, "linear");
			light();
		} else {}

	});

	$("#next").click(function() {
		if(new Date() - oldtime > 500) {
			oldtime = new Date();
			next();
		} else {

		}

	});

	//	//5.点击焦点，能够切换图片
	//	$("#light span").click(function() {
	//		if(new Date() - oldtime > 500) {
	//			oldtime = new Date();
	//			$(this).addClass("active").siblings().removeClass("active");
	//
	//			if($(this).index() > now) {
	//				//往左运动  5  3  2
	//				var dis = $(this).index() - now; //要运动的张数
	//				$("#imglist ul").animate({
	//					"left": -moveWidth * dis
	//				}, 1000, "linear", function() {
	//					for(var i = 0; i < dis; i++) {
	//						$("#imglist ul").css({
	//							"left": 0
	//						});
	//						$("#imglist ul li:first").insertAfter($("#imglist ul li:last"));
	//					}
	//				});
	//				now = $(this).index();
	//			}
	//
	//			if($(this).index() < now) {
	//				//往右运动
	//				var dis = now - $(this).index(); //要运动的张数
	//				$("#imglist ul").css({
	//					"left": -moveWidth * dis
	//				});
	//				for(var i = 0; i < dis; i++) {
	//					$("#imglist ul li:last").insertBefore($("#imglist ul li:first"));
	//					$("#imglist ul").animate({
	//						"left": 0
	//					}, 1000, "linear");
	//				}
	//
	//				now = $(this).index();
	//			}
	//		} else {
	//
	//		}
	//	});

	//	$("#light").delegate("span","click",function(){
	//		//创建出来的span用这种方式最好。
	//	});
	//第二个轮播图end
});

//window.onload = function() {
	//申请试听正则表达式
//	function CheckForm() {
//		if(document.Form1.kb_name.value.length == 0) {
//			alert("请输入宝宝姓名!");
//			document.Form1.kb_name.focus();
//			return false;
//		}
//		if(document.Form1.kb_birthday.value.length == 0) {
//			alert("请输入宝宝生日!");
//			document.Form1.kb_birthday.focus();
//			return false;
//		}
//		if(document.Form1.kb_phone.value.length == 0) {
//			alert("请输入您的手机号!");
//			document.Form1.kb_phone.focus();
//			return false;
//		}
//		var sMobile = document.Form1.kb_phone.value
//		if(!(/^1[3|4|5|7|8]\d{9}$/.test(sMobile))) {
//			alert("不是完整的11位手机号或者正确的手机号前七位");
//			document.Form1.kb_phone.focus();
//			return false;
//		}
//		if(document.Form1.kb_course.value == '*选择课程') {
//			alert("请选择课程!");
//			document.Form1.kb_course.focus();
//			return false;
//		}
//		var cet = document.Form1.centerplace.value;
//		if(cet == 0 || cet == 500 || cet == 1000 || cet == 1500 || cet == 2000 || cet == 2500) {
//			alert("请选择就近中心!");
//			document.Form1.centerplace.focus();
//			return false;
//		}
//	}
//
//	function getDate() {
//		var today = new Date();
//		var date;
//		date = (today.getFullYear()) + "年" + (today.getMonth() + 1) + "月" + today.getDate() + "日-" + today.toLocaleTimeString();
//		document.getElementById('kb_time').value = date;
//	}
//}