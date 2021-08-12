let username=prompt("Adınız Nedir?")
document.getElementById('myName').innerHTML=username
var tarih = new Date()
var hours = date.getHours()
var minutes = date.getMinutes()
var seconds = date.getSeconds()
var gün = date.getDay()

if (gün == 1) {
    gün = "Pazartesi"
  } else if (gün == 2) {
    gün = "Salı"
  } else if (gün == 3) {
    gün = "Çarşamba"
  } else if (gün == 4) {
    gün = "Perşembe"
  } else if (gün == 5) {
    gün = "Cuma"
  } else if (gün == 6) {
    gün = "Cumartesi"
  } else if (gün == 7) {
    gün = "Pazar"
  }

  h = h < 10 ? "0" + h : h
  m = m < 10 ? "0" + m : m
  s = s < 10 ? "0" + s : s

  var time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("myClock").innerText = time;
  document.getElementById("myClock").textContent = time;

  setTimeout(showTime, 1000);



