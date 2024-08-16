let seconds = 0;
let tens = 0;
let mins = 0;
let getSeconds = document.querySelector('.seconds');
let getTens = document.querySelector('.tens');
let getMins = document.querySelector('.mins');
let lapList = document.querySelector('.lap-list');
let btnStart = document.querySelector('.btn-start');
let btnStop = document.querySelector('.btn-stop');
let btnReset = document.querySelector('.btn-reset');
let btnLap = document.querySelector('.btn-lap');
let interval;

btnStart.addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
});

btnStop.addEventListener('click', () => {
    clearInterval(interval);
});

btnReset.addEventListener('click', () => {
    clearInterval(interval);
    tens = 0;
    seconds = 0;
    mins = 0;
    getSeconds.innerHTML = '00';
    getTens.innerHTML = '00';
    getMins.innerHTML = '00';
    lapList.innerHTML = '';
});

btnLap.addEventListener('click', () => {
    const lapTime = `${getMins.innerHTML}:${getSeconds.innerHTML}:${getTens.innerHTML}`;
    const li = document.createElement('li');
    li.textContent = lapTime;
    lapList.appendChild(li);
});

function startTimer() {
    tens++;
    if (tens <= 9) {
        getTens.innerHTML = '0' + tens;
    } else if (tens > 99) {
        seconds++;
        getSeconds.innerHTML = seconds <= 9 ? '0' + seconds : seconds;
        tens = 0;
        getTens.innerHTML = '00';
    } else {
        getTens.innerHTML = tens;
    }
    
    if (seconds > 59) {
        mins++;
        getMins.innerHTML = mins <= 9 ? '0' + mins : mins;
        seconds = 0;
        getSeconds.innerHTML = '00';
    }
}
