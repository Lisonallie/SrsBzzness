const today = new Date();
var write = document.getElementById("write");
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