const today = new Date();
var open = document.getElementById("open");
var closed = document.getElementById("closed");
function starter() {
    if (today == 0) closed.style.display === "block";
    if (today.getHours() >= 10 && today.getHours() < 18 && today.getDay() < 4) {
        open.style.display === "block";
        closed.style.display === "none";
    } else {
        closed.style.display === "block";
    }
    if (today.getDay() = 4 && today.getHours() < 15) {
        closed.style.display === "block";
        open.style.display === "none";
    }
}