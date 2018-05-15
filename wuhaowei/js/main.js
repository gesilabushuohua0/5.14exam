require.config({
    baseUrl: "./js/libs",
    paths: {
        "jquery": "./jquery-2.1.1.min",
        "iscroll": "./iscroll-probe",
        "zepto": "./zepto",
        "swiper": "./swiper.min",
        "index": "../app/index",
        "util": "./util"
    },
    shim: {
        util: {
            init: function() {
                return { app1, app2 }
            }
        }
    }
})
require(["index"])