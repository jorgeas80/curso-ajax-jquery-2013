$(document).ready(function($){
    
    $('h2').funText(10, 'candy');
    
    var thumbnailify = function(videoLink) {

        var linkUrl = videoLink.attr('href');
        var thumbnailUrl = youtube.generateThumbnailUrl(linkUrl);

        var divImg = $('<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">')
        var thumbnailImg = $('<img>');
        thumbnailImg.attr('src', thumbnailUrl);
        divImg.append(thumbnailImg)
        videoLink.append(divImg);
        videoLink.funText(10, 'candy');

        videoLink.on('click', function(e) {
            e.preventDefault();
            var videoEmbed = $('<iframe class="embed-responsive-item"></iframe>');
            videoEmbed.attr('src', youtube.generateEmbedUrl(linkUrl));
            //videoEmbed.attr('width', 560);
            //videoEmbed.attr('height', 325);
            var videoWatcher = $('#video-watcher');
            videoWatcher.hide();
            videoWatcher.html(videoEmbed);
            videoWatcher.fadeIn();
        });
    }

    var videoLinks = $('a');

    for(var i=0; i < videoLinks.length; i++) {
        var videoLink = $(videoLinks[i]);
        thumbnailify(videoLink);
    }
});