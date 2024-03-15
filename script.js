let hr = document.getElementById('hour')
let min = document.getElementById('mins')
let sec = document.getElementById('secs')

function displayTime(){
    let date = new Date()

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotate = 30*hh + mm/2;
    let mRotate = 6*mm;
    let sRotate = 6*ss;

    hr.style.transform = `rotate(${hRotate}deg)`
    min.style.transform = `rotate(${mRotate}deg)`
    sec.style.transform = `rotate(${sRotate}deg)`
}

setInterval(displayTime, 1000)

