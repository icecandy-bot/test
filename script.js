// 倒數目標日期
const targetDate = new Date("2025-05-17T00:00:00");

// 更新倒數計時
function updateCountdown() {
  const now = new Date();
  const timeRemaining = targetDate - now;

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // 更新數字
  document.getElementById("days-number").textContent = days;
  document.getElementById("hours-number").textContent = hours;
  document.getElementById("minutes-number").textContent = minutes;
  document.getElementById("seconds-number").textContent = seconds;

  // 更新進度條
  const daysProgress = (days / 365) * 100;
  const hoursProgress = (hours / 24) * 100;
  const minutesProgress = (minutes / 60) * 100;
  const secondsProgress = (seconds / 60) * 100;

  document.getElementById("days-progress").style.background = `conic-gradient(
    #ff6f61 ${daysProgress}%, #d3d3d3 ${daysProgress}%
  )`;

  document.getElementById("hours-progress").style.background = `conic-gradient(
    #ffd966 ${hoursProgress}%, #d3d3d3 ${hoursProgress}%
  )`;

  document.getElementById("minutes-progress").style.background = `conic-gradient(
    #00bcd4 ${minutesProgress}%, #d3d3d3 ${minutesProgress}%
  )`;

  document.getElementById("seconds-progress").style.background = `conic-gradient(
    #6fa8dc ${secondsProgress}%, #d3d3d3 ${secondsProgress}%
  )`;
}

// 每秒更新倒數
setInterval(updateCountdown, 1000);

// 預先執行一次
updateCountdown();
