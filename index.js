var countdown = document.querySelector(".countdown");
var x = setInterval(function () {
  var launchDate = new Date("Sep 21, 2020 13:00:00").getTime();
  var now = new Date().getTime();
  var distance = launchDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.innerHTML = `
  <div>${days}<span>Days</span></div>
  <div>${hours}<span>Hours</span></div>
  <div>${mins}<span>Minutes</span></div>
  <div>${seconds}<span>Seconds</span></div>
  `;

  if (distance < 0) {
    clearInterval(intvl);

    countdown.style.color = "#ead700";
    countdown.innerHTML = "Launched";
  }
});
