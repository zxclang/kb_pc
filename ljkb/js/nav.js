$(function () {
    var sub2=$("#sub_02");
    var sub3=$("#sub_03");
    var sub4=$("#sub_04");
    var sub6=$("#sub_06");
    $(".n2").mouseover(function () {
        sub2.slideDown();
    });
    $(".n2").mouseleave(function () {
        sub2.slideUp();
    });
    $(".n3").mouseover(function () {
        sub3.slideDown();
    });
    $(".n3").mouseleave(function () {
        sub3.slideUp();
    });
    $(".n4").mouseover(function () {
        sub4.slideDown();
    });
    $(".n4").mouseleave(function () {
        sub4.slideUp();
    });
    $(".n6").mouseover(function () {
        sub6.slideDown();
    });
    $(".n6").mouseleave(function () {
        sub6.slideUp();
    });

})



function CheckForm()

{   

if (document.Form1.kb_name.value.length == 0) {   

alert("请输入宝宝姓名!");

document.Form1.kb_name.focus();

return false;

}

if (document.Form1.kb_birthday.value.length == 0) {   

alert("请输入宝宝生日!");

document.Form1.kb_birthday.focus();

return false;

}

if (document.Form1.kb_phone.value.length == 0) {   

alert("请输入您的手机号!");

document.Form1.kb_phone.focus();

return false;

} 

     

var sMobile = document.Form1.kb_phone.value 

    if(!(/^1[3|4|5|7|8]\d{9}$/.test(sMobile))){ 

        alert("不是完整的11位手机号或者正确的手机号前七位"); 

        document.Form1.kb_phone.focus(); 

        return false; 

    } 



if (document.Form1.kb_course.value == '*选择课程') {   

alert("请选择课程!");

document.Form1.kb_course.focus();

return false;

}

var cet = document.Form1.centerplace.value; 

if (cet == 0 || cet == 500 || cet == 1000 || cet == 1500 || cet == 2000 || cet == 2500) {   

alert("请选择就近中心!");

document.Form1.centerplace.focus();

return false;

} 

}



function getDate()

{

var today = new Date(); 

 var date; 

date = (today.getFullYear()) +"年" + (today.getMonth() + 1 ) + "月" + today.getDate() + "日-" + today.toLocaleTimeString();  

document.getElementById('kb_time').value = date;

}











