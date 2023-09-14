setInterval(() => {
    d = new Date(); //object of date()
    hr = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();
    hr_rotation = 30 * hr + min / 2; //converting current time
    min_rotation = 6 * min;
    sec_rotation = 6 * sec;
 
    hour.style.transform = `rotate(${hr_rotation}deg)`;
    minute.style.transform = `rotate(${min_rotation}deg)`;
    second.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);

$(document).ready(function(){
    let time = 10
    let el = $('.gold.animate__animated')
    setInterval(function(){
        time--
        console.log(time)
        if(time == 9){
            el.addClass('animate__flipInX')
        }else if(time == 5){
            el.removeClass('animate__flipInX')
        }else if(time == 1){
            time = 10
        }
    },1000)
})