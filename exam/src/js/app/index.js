require(["jquery", "render", "swiper", "bscroll"], function($, render, swiper, bscroll) {
    $.ajax({
        url: "/app/exam",
        dataType: "json",
        success: function(res) {
            render(res, $("#tpl"), $(".wrap"))
        },
        error: function(err) {
            console.log(err)
        }
    })
})