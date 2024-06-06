document.addEventListener('DOMContentLoaded', function() {
    const scene = document.querySelector('.scene');
    const sablierDays = document.querySelector('.sablierDays');
    const sablierHours = document.querySelector('.sablierHours');
    const sablierMinutes = document.querySelector('.sablierMinutes');
    const sablierSeconds = document.querySelector('.sablierSeconds');
    const sablierMonths = document.querySelector('.sablierMonths');

    function rotateScene(e, delay) {
        e.style.animation = 'rotate 1s linear infinite';
        setTimeout(()=>{e.style.animation = 'none';}, 1000);
    }


    function rotateSablier() {
        setInterval(()=>{rotateScene(sablierSeconds)}, 1001);
        setInterval(()=>{rotateScene(sablierMinutes)}, 60001);
        setInterval(()=>{rotateScene(sablierHours)}, 3600001);
        setInterval(()=>{rotateScene(sablierDays)}, 86400001);
        setInterval(()=>{rotateScene(sablierMonths)}, 2592000001);
    }

    let now = new Date();
    let secondsLeft = (now.getSeconds()) / 60 * 100;
    let minutesLeft = (now.getMinutes()) / 60 * 100;
    let hoursLeft = (now.getHours()) / 24 * 100;
    let daysLeft = (now.getDate()) / 31 * 100;
    let monthsLeft = (now.getMonth()) / 12 * 100;
    let yearsLeft = (now.getFullYear() - 2021) / 100 * 100;

    document.querySelector('.sablierSeconds > .hourglass').style.animation = `rotateGlass 2s infinite linear`;


    document.documentElement.style.setProperty('--sandSecondsAnimation-name', 'dropsand');
    document.documentElement.style.setProperty('--sandSecondsAnimation-duration', '2s');
    document.documentElement.style.setProperty('--sandSecondsAnimation-iteration-count', 'infinite');
    document.documentElement.style.setProperty('--sandSecondsAnimation-timing-function', 'linear');

    document.documentElement.style.setProperty('--sandMinutesAnimation-name', 'dropsand');
    document.documentElement.style.setProperty('--sandMinutesAnimation-duration', '120s');
    document.documentElement.style.setProperty('--sandMinutesAnimation-iteration-count', 'infinite');
    document.documentElement.style.setProperty('--sandMinutesAnimation-timing-function', 'linear');

    document.documentElement.style.setProperty('--sandHoursAnimation-name', 'dropsand');
    document.documentElement.style.setProperty('--sandHoursAnimation-duration', '7200s');
    document.documentElement.style.setProperty('--sandHoursAnimation-iteration-count', 'infinite');
    document.documentElement.style.setProperty('--sandHoursAnimation-timing-function', 'linear');

    document.documentElement.style.setProperty('--sandDaysAnimation-name', 'dropsand');
    document.documentElement.style.setProperty('--sandDaysAnimation-duration', '172800s');
    document.documentElement.style.setProperty('--sandDaysAnimation-iteration-count', 'infinite');
    document.documentElement.style.setProperty('--sandDaysAnimation-timing-function', 'linear');

    document.documentElement.style.setProperty('--sandMonthsAnimation-name', 'dropsand');
    document.documentElement.style.setProperty('--sandMonthsAnimation-duration', '5184000s');
    document.documentElement.style.setProperty('--sandMonthsAnimation-iteration-count', 'infinite');
    document.documentElement.style.setProperty('--sandMonthsAnimation-timing-function', 'linear');
});