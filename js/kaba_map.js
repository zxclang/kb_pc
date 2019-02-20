$(function () {
    var pos=[
        "http://j.map.baidu.com/ZG-tP",
        "http://j.map.baidu.com/1X-tP",
        "http://j.map.baidu.com/7uQtP",
        "http://j.map.baidu.com/lvRtP",
        "http://j.map.baidu.com/byQtP",
        "http://j.map.baidu.com/hZQtP",
        "http://j.map.baidu.com/gSQtP",
        "http://j.map.baidu.com/z_QtP",
        "http://j.map.baidu.com/cdRtP",
        "http://j.map.baidu.com/1KRtP",
        "http://j.map.baidu.com/1qpIZ",
        "http://j.map.baidu.com/8ypIZ",
        "http://j.map.baidu.com/_3pIZ"
    ];
    $(".pos_list li").click(function () {
        var index=$(this).index();
        $(".map iframe").attr("src",pos[index]);
        $(this).addClass("active").siblings().removeClass("active");
    })
})