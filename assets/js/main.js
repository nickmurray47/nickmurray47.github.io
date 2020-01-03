$(document).ready(function(){
    let $imageContainer = $('#tooltip-container');
    let $imageLinks = $('.video-link');

    $imageLinks.on('mouseenter', (e) => {
        let videoURL = e.target.dataset.image;
        // needed this to fix Chrome video problems
        console.log(videoURL);
        $imageContainer.empty();

        if (videoURL.includes('jpg')) {
            let image = document.createElement('img');
            let $image = $(image);
            $image.attr('src', `http://127.0.0.1:4000/assets/images/${videoURL}`);
            $imageContainer.append($image);

        } else{
            let video = document.createElement('video');
            let $video = $(video);
            if (window.chrome) videoURL = videoURL.replace(".mp4", ".webm");
            // $video.attr('src', `assets/${videoURL}`);
            $video.attr('src', `http://127.0.0.1:4000/assets/images/${videoURL}`);
            $video.attr('muted', true);
            $video.attr('type', 'video/mp4'); // type="video/mp4"
            $video.attr('autoplay', true);
            $video.attr('loop', true);
            $video.attr('playslinline', true);
            $imageContainer.append($video);
        }

        $imageContainer.css({
            left: e.clientX + 'px',
            top: e.clientY + 'px'
        });
        $imageContainer.addClass('visible');
    });

    $imageLinks.on('mousemove', (e) => {
        $imageContainer.css({
            left: e.clientX + 'px',
            top: e.clientY + 'px'
        })
    });

    $imageLinks.on('mouseleave', () => {
        $imageContainer.removeClass('visible');
    })
});
