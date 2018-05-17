require.config({
    paths: {
        "jquery": "./libs/jquery-2.1.1.min",
        "handle": "./libs/handlebars",
        "swiper": "./libs/swiper.min",
        "bscroll": "./libs/bscroll",
        "index": "./app/index",
        "render": "./libs/render"
    }
})
require(["index"])