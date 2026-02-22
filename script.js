let timerDisplay = document.querySelector('.timerDisplay');
let StrBtn = document.getElementById('StrBtn');
let StoBtn = document.getElementById('StoBtn');
let ReBtn = document.getElementById('ReBtn');

let msec = '00';
let sec = '00';
let min = '00';

let timerId = null;

StrBtn.addEventListener('click', function(){
    if(timerId !== null){
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10);
});


StoBtn.addEventListener('click', function(){
    clearInterval(timerId);
});

ReBtn.addEventListener('click', function(){
    clearInterval(timerId);
    timerDisplay.innerHTML = `00 : 00 : 00`;
    msec = sec = min = '00';
});


function startTimer(){
    msec++;
    if(msec == 100){
        msec = 0;
        sec++;
        if(sec == 60){
            sec = 0;
            min++;
        }
    }

    let msecString = msec < 10 ? `0${msec}` : msec;
    let secString = sec < 10 ? `0${sec}` : sec;
    let minString = min < 10 ? `0${min}` : min;

    timerDisplay.innerHTML = `${minString} : ${secString} : ${msecString}`;
}
    
