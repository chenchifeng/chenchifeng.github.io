// onload = (function() {
    // document.getElementsByClassName("owl-carousel")
// 这里用js来进行轮播插件的配置
// 该插件使用说明http://www.jq22.com/jquery-info6010
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 1,                //内容区显示项数
        loop: true,              // 无限循环播放
        autoplay: true,          // 自动播放
        autoplayTimeout: 3000,   // 自动播放延时
        smartSpeed: 1000,        // 播放速度(1000毫秒/项)
        autoplayHoverPause: true // 鼠标滑过时停止自动播放
    });
});
