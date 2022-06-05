let giris = prompt("ismin ne")
const myClock = document.querySelector("#myClock");

let myname = document.querySelector("#myName")

if(giris.length>=0) {
    myname.innerHTML = giris
}
else {
    console.log("değer gir")
}

function showTime() {
    const d = new Date();
    const hour = d.getHours();
    const minutes = d.getMinutes();
    const seconds = d.getSeconds();
    let day = d.getDay();
    if (day === 1) {
        day = "Pazartesi";
      } else if (day === 2) {
        day = "Salı";
      } else if (day === 3) {
        day = "Çarşamba";
      } else if (day === 4) {
        day = "Perşembe";
      } else if (day === 5) {
        day = "Cuma";
      } else if (day === 6) {
        day = "Cumartesi";
      } else if (day === 7) {
        day = "Pazar";
      }
      setTimeout(showTime, 1000);
      myClock.innerHTML = `${hour}:${minutes}:${seconds} ${day}`;
}
showTime();