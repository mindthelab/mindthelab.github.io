var countDownDate = new Date("Oct 26, 2020 15:37:25").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = now - countDownDate;
    var years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365));
    var months = Math.floor((distance % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    var days = Math.floor((distance % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update individual timers
    var yearsElem = document.getElementById("years");
    var monthsElem = document.getElementById("months");
    var daysElem = document.getElementById("days");
    var hoursElem = document.getElementById("hours");
    var minutesElem = document.getElementById("minutes");
    var secondsElem = document.getElementById("seconds");

    if (yearsElem) yearsElem.innerHTML = years + " years";
    if (monthsElem) monthsElem.innerHTML = months + " months";
    if (daysElem) daysElem.innerHTML = days + " days";
    if (hoursElem) hoursElem.innerHTML = hours + " hours";
    if (minutesElem) minutesElem.innerHTML = minutes + " minutes";
    if (secondsElem) secondsElem.innerHTML = seconds + " seconds";

}, 1000);
