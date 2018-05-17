define(["jquery", "handle"], function($, handle) {
    var apply = function(val, sour, targ) {
        var source = sour.html();
        var template = handle.compile(source);
        var html = template(val);
        targ.html(html)
    }
    return apply
})