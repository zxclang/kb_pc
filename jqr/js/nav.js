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

});


    // $("#btn_show").click(function () {
    //     $("#answer").hide();
    //
    // });

    $(function () {
        $("#btn_show").click(function () {
            $("#answer").slideToggle(500);
        });
        $("#btn_show1").click(function () {
            $("#answer1").slideToggle(500);
        });
        $("#btn_show2").click(function () {
            $("#answer2").slideToggle(500);
        });
        $("#btn_show3").click(function () {
            $("#answer3").slideToggle(500);
        });
        $("#btn_show4").click(function () {
            $("#answer4").slideToggle(500);
        });
        $("#btn_show5").click(function () {
            $("#answer5").slideToggle(500);
        });
        $("#btn_show6").click(function () {
            $("#answer6").slideToggle(500);
        });

    });























