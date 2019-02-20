$("#banner").Carousel({
    'play':'true', //是否循环播放
    'fade':'true',
    'playTimer':'3000',
    'auto':'true'
});

$("#banner2").Carousel({
    'play':'true', //是否循环播放
    'fade':'true',
    'playTimer':'3050',
    'auto':'true'
});

$("#banner3").Carousel({
    'play':'true', //是否循环播放
    'fade':'true',
    'playTimer':'3100',
    'auto':'true'
});

    window.onscroll=function () {
      var st= $(window).scrollTop();
       if (st>=639){
           $(".title").addClass("getfixed");
       }else{
           $(".title").removeClass("getfixed");
       }
    }

var getli=$("#newwey li");
    var getbox=$(".content_r");
for (let i=0;i<getli.length;i++){
    getli[i].onclick=function () {
        for (var j=0;j<getli.length;j++){
            getli[j].className="";
            for (var k = 0; k <getbox.length; k++) {
                getbox[k].style.display="none";
            }
        }
        getbox[i].style.display="block";
        this.className="cur";
    }
}
