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