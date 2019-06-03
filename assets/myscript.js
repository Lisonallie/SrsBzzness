const today = new Date();
var write = document.getElementById("write");
var clock = document.getElementById("clock");


function starter() {
    if (today.getHours() >= 10 && today.getHours() < 18 && today.getDay() < 4) {
        write.innerHTML = "Open!";
    } else {
        write.innerHTML = "Closed.";
    }
    if (today.getDay() = 4 && today.getHours() < 15) {
        write.innerHTML = "Open!";
    }
}

function time() {
    var d = new Date();
    var s = d.getSeconds();
    var m = d.getMinutes();
    var h = d.getHours();
    clock.textContent = h + ":" + m + ":" + s;
  }
  
  setInterval(time, 1000);