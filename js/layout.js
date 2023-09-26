
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

function myTimer(){
    // Create a new Date object
    const currentDate = new Date();
    
    // Get the current date and time
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // Months are zero-based, so add 1
    const day = currentDate.getDate();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    const inday = currentDate.getDay()

    $(".clock .hour .digit:first-child span").html(formatTime(hours).toString().charAt(0));
    $(".clock .hour .digit:last-child span").html(formatTime(hours).toString().charAt(1));
    $(".clock .minutes .digit:first-child span").html(formatTime(minutes).toString().charAt(0));
    $(".clock .minutes .digit:last-child span").html(formatTime(minutes).toString().charAt(1));
}

function formatTime(num){
    if(num <= 9){
        num = "0" + num;
    }
    return num;
}

setInterval(() => {
    myTimer();
}, 1000)
