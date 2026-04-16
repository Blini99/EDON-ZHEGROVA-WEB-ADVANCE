var wakeuptime;
var dstime;
var sleeptime;
var noon = 12 ;

function showCurrentTime(){
    var clock = document.getElementById('clock');
    var currentTime = new Date();

    var hours=currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    var meridian = "AM";

    if(hours >= noon){
        meridian="PM";
    }
    var clockTime = hours +":" +minutes + ":"+seconds+":"+""+meridian;
    clock.inenerText=clockTime;
    changeImage();
}

var oneSecond=1000;
setInterval(showCurrentTime,oneSecond);

function changeImage(){
    var time= new Date().getHours();
    console.log(time);

    var image="clock.png";
    var imageHTML = document.getElementById("timeImage");


    if(time==wakeuptime){
        image = "morning.gif";

    }
    else if(time== dstime){
        image ="class.gif";
    }
    ekse if(time==sleeptime){
        image = "night.gif";

        imageHTML.src=image;
    }
};


function updateClock(){
    var wakeupTIMESelector = document.getElementById('wakeupTimeselector')
    wakeuptime=wakeupTIMESelector.value;

      
    var dsTIMESELECTOR = document.getElementById('wakeupTimeselector')
    dsTimeSelecotr=wakeupTIMESelector.value;
        
    
    var wakeupTIMESelector = document.getElementById('wakeupTimeselector')
    sleeptime=sleepTimeSelector.value;
}
