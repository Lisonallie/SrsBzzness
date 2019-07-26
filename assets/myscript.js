let today = new Date();
var write = document.getElementById("write");
var clock = document.getElementById("clock");


function starter() {
    if (today.getHours() >= 10 && today.getHours() < 18 && today.getDay() < 5) {
        write.innerHTML = "Open!";
    } else if (today.getDay() == 5 && today.getHours() < 15) {
        write.innerHTML = "Open!";
    } else {
        write.innerHTML = "Closed.";
    }
}

function time() {
    var s = today.getSeconds();
    var m = today.getMinutes();
    var h = today.getHours();
    clock.textContent = h + ":" + m + ":" + s;
}
console.log(today.getDay());


setInterval(time, 1000);