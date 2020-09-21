function timer() {    
    const getTimeFromSeconds = (segundos) => {
        const date = new Date(segundos * 1000);

        return date.toLocaleTimeString('pt-BR',{
            hour12: false,
            timeZone: "GMT"
        });
    };

    const timer = document.querySelector('.timer');
    const startButton = document.querySelector('button[value="start"]');
    const pauseButton = document.querySelector('button[value="pause"]');
    const resetButton = document.querySelector('button[value="reset"]');

    let seconds = 0;
    let setTimer;
    let started = false; // evita que o timer seja iniciado infinitas vezes

    const startTimer = () => {
        if(!started){
            timer.classList.remove("paused");
            setTimer = setInterval(() => {
                    seconds++;
                    timer.innerHTML = getTimeFromSeconds(seconds);
                }, 1000);
            started = true;
        }
    };


    const stopTimer = (reset) => {
        if(reset){
            seconds = 0;
            timer.innerHTML = '00:00:00';
            timer.classList.remove("paused");
        } else {
            timer.classList.add("paused");
        }

        clearInterval(setTimer);
        started = false;
    }

    document.addEventListener('click', (e) => {
        const el = e.target;

        if (el === startButton) startTimer();
        if (el === pauseButton) stopTimer(false);
        if (el === resetButton) stopTimer(true);
        
    });
}

timer();