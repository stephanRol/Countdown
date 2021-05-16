const daysElement = document.querySelector('#days')
const hoursElement = document.querySelector('#hours')
const minutesElement = document.querySelector('#minutes')
const secondsElement = document.querySelector('#seconds')

const newYears = '1 Jan 2022';
const otherDate = '26 May 2021'

function countdown() {
    const newYearsDate = new Date(otherDate);
    const currentDate = new Date();

    const secondsTotal = (newYearsDate.getTime() - currentDate.getTime()) / 1000;
    days = Math.floor(secondsTotal / (24 * 3600))
    hours = Math.floor(secondsTotal / (3600)) % 24
    minutes = Math.floor(secondsTotal / 60) % 60
    seconds = Math.floor(secondsTotal) % 60

    daysElement.innerHTML = days.toString().padStart(2, '0')
    hoursElement.innerHTML = hours.toString().padStart(2, '0')
    minutesElement.innerHTML = minutes.toString().padStart(2, '0')
    secondsElement.innerHTML = seconds.toString().padStart(2, '0')

    console.log(`Days: ${days} Hours: ${hours} Minutes: ${minutes} Seconds: ${seconds}`);

}

setInterval(countdown, 1000)
