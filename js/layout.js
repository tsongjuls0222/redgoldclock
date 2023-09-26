
const fullscreenButton = document.getElementById('fullscreen');
let fsBool = false;
let fullScreen = document.documentElement;

fullscreenButton.addEventListener('click', toggleFullScreen);

function toggleFullScreen(){
    if(!fsBool){
        fsBool = true;
        openFullscreen();
    }else{
        fsBool = false;
        closeFullscreen();
    }
}

function openFullscreen(){
    if (fullScreen.requestFullscreen) {
        fullScreen.requestFullscreen();
    } else if (fullScreen.webkitRequestFullscreen) { /* Safari */
        fullScreen.webkitRequestFullscreen();
    } else if (fullScreen.msRequestFullscreen) { /* IE11 */
        fullScreen.msRequestFullscreen();
    }
}

function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
    }
}

$(document).ready(function(){
    // $()
})
