function updateTime() {
    var datetime = new Date().toLocaleString().replace(",", "");
    document.getElementById("datetime").textContent = datetime;
}

updateTime();
setInterval(updateTime, 1000);