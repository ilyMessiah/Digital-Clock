const hours = document.getElementById('hours')

const minutes = document.getElementById('minutes')

const seconds = document.getElementById('seconds')

const convo = document.getElementById('am and pm')

function updateDigitalClock() {

const currentDateEL = new Date()

const hoursEL = currentDateEL.getHours()
    
const minutesEL = currentDateEL.getMinutes()
    
const secondsEL = currentDateEL.getSeconds()

if (hoursEL <= 12) {

convo.textContent = 'am'

}

if (hoursEL >= 1) {

convo.textContent = 'pm'

}


hours.textContent = hoursEL

minutes.textContent = minutesEL

seconds.textContent = secondsEL


}

setInterval(updateDigitalClock,1000)
