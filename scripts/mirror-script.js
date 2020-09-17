window.onload = function() {
    var video = document.getElementById('video');
    var videoStreamUrl = false;

    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
    window.URL.createObjectURL = window.URL.createObjectURL || window.URL.webkitCreateObjectURL || window.URL.mozCreateObjectURL || window.URL.msCreateObjectURL;

    navigator.getUserMedia(
        {video: true},
        function(stream) {
            videoStreamUrl = window.URL.createObjectURL(stream);
            video.src = videoStreamUrl
        },
        function(){
            alert('извините за мой французский, но вы пидор..');
        }
    )
}
