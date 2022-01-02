const timer = () => {
    const startingMinutes = 1;
    let time = startingMinutes * 60;
    const countDownEl = document.getElementById('timer_clock');
    function updateCountDown() {
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;

        seconds = seconds < 10 ? '0' + seconds : seconds;

        countDownEl.innerHTML = `0${minutes}:${seconds}`;
        time--;

        if(seconds == '01') {
        //   window.location = '/result';
        }
    }
    setInterval(updateCountDown, 1000);
}

export default timer;
