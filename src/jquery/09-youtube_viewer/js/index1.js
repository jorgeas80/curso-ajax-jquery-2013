$(document).ready(function($){
    var videoLinks = $('a');
    
    for(var i=0; i < videoLinks.length; i++) {
        var videoLink = $(videoLinks[i])
        var linkUrl = videoLink.attr('href');
        var thumbnailUrl = youtube.generateThumbnailUrl(linkUrl);
        
        var divImg = $('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">')
        var thumbnailImg = $('<img>');
        thumbnailImg.attr('src', thumbnailUrl);
        divImg.append(thumbnailImg)
        videoLink.append(divImg);
    }
});
