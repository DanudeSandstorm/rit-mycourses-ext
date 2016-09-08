// @description  Make MyCourses Discussion Posts Smaller
// @author Tecmaster
'use strict';

var $ = window.jQuery;

$('.d2l-le-disc-posrev .d2l-htmlblock').each(function(idx, ele) {
    var post = $(ele).html();
    var quoteStart = post.indexOf("&lt;&lt;&lt; Replied to post below &gt;&gt;&gt;");
    if (quoteStart === -1) {
        return;
    }
    var freshPost = post.substring(0, quoteStart);
    var quotedPost = post.substring(quoteStart);
    $(ele).html(freshPost);
    var quoteLink = $('<a></a>')
        .attr({id: "toggle-"+idx, href: "#"})
        .html("Show quoted post");
    $(ele).append(quoteLink);
    var quotedHtml = $('<div></div>')
        .attr({ id: "quote-"+idx})
        .html(quotedPost)
        .hide()
    $(ele).append(quotedHtml);
    $('#toggle-'+idx).click({id: idx}, showPost);
});

function showPost(e) {
    e.preventDefault();
    var id = e.data.id;
    $('#quote-'+id).show();
    $('#toggle-'+id).click({id: id}, hidePost);
    $('#toggle-'+id).html("Hide quoted post");
}

function hidePost(e) {
    e.preventDefault();
    var id = e.data.id;
    $('#quote-'+id).hide();
    $('#toggle-'+id).click({id: id}, showPost);
    $('#toggle-'+id).html("Show quoted post");
}
