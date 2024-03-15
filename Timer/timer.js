const day = document.getElementById("days");
const hr = document.getElementById("hrs");
const min = document.getElementById("mins");
const second = document.getElementById("sec");


function timer(){
  const date= new Date();
  const newdate = new Date(2024,0,1);
  var dif= newdate-date;
  
  var days = Math.floor(dif / (1000 * 60 * 60 * 24));
  var hrs = Math.floor((dif % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var mins = Math.floor((dif % (1000 * 60 * 60)) / (1000 * 60));
  var sec = Math.floor((dif % (1000 * 60)) / 1000);
  
  day.innerHTML= days;
  hr.innerHTML= hrs;
  min.innerHTML= mins;
  second.innerHTML = sec;
}

timer();
setInterval(timer, 1000);