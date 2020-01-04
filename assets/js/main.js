$(document).ready(function(){
    let $imageContainer = $('#tooltip-container');
    let $imageLinks = $('.video-link');


    $imageLinks.on('mouseenter', (e) => {
        let videoURL = e.target.dataset.image;
        // needed this to fix Chrome video problems
        $imageContainer.empty();

        const url = 'https://nicholasmurray.dev/assets/images/';
        // `http://127.0.0.1:4000/assets/images/`;

        if (videoURL.includes('jpg')) {
            let image = document.createElement('img');
            let $image = $(image);
            $image.attr('src', `${url}${videoURL}`);
            $imageContainer.append($image);

        } else {
            let video = document.createElement('video');
            let $video = $(video);
            $video.attr('src', `${url}${videoURL}`);
            $video.attr('type', 'video/mp4'); // type="video/mp4"
            $video.attr('autoplay', true);
            $video.attr('loop', true);
            $video.attr('playsinline', true);
            $video.attr('muted', 'muted'); // setting to true would not work, solves Chrome autoplay issue
            $imageContainer.append($video);

            console.log($video.attr('muted'));
            console.log($video.attr('autoplay'));
        }

        let multiplier = 1;
        if (e.pageY <= 300) multiplier = 2;

        $imageContainer.css({
            left: e.clientX + 'px',
            top: multiplier*e.clientY + 'px'
        });
        $imageContainer.addClass('visible');
    });

    $imageLinks.on('mousemove', (e) => {
        let multiplier = 1;
        if (e.pageY <= 300) multiplier = 2;
        $imageContainer.css({
            left: e.clientX + 'px',
            top: multiplier*e.clientY + 'px'
        })
    });

    $imageLinks.on('mouseleave', () => {
        $imageContainer.removeClass('visible');
    })
});
