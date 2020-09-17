window.onload = function() {
    var video = document.getElementById('video');
    var mirror = document.getElementById('mirror');
    var allow = document.getElementById('allow');

    

    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
    window.URL.createObjectURL = window.URL.createObjectURL || window.URL.webkitCreateObjectURL || window.URL.mozCreateObjectURL || window.URL.msCreateObjectURL;

    navigator.getUserMedia(
        {video: true},
        function(stream) {
            allow.style.display = 'none';
            mirror.style.display = 'block';
            video.srcObject = stream;
        },
        function(){
            allow.innerHTML = 'зря...';
        }
    )
}
