"use strict";

const timer = (deadline) => {
  const timerHours = document.getElementById("timer-hours");
  const timerMinutes = document.getElementById("timer-minutes");
  const timerSeconds = document.getElementById("timer-seconds");

  const getTimeRemaining = () => {
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;
    // let days = Math.floor(timeRemaining / 60 / 60 / 24);
    let hours = Math.floor(timeRemaining / 60 / 60);
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let seconds = Math.floor(timeRemaining % 60);

    return { timeRemaining, hours, minutes, seconds };
  };

  const updateClock = () => {
    // console.log("qwerty");
    let getTime = getTimeRemaining();

    timerHours.textContent = getTime.hours;
    timerMinutes.textContent = getTime.minutes;
    timerSeconds.textContent = getTime.seconds;

    if (timerHours.textContent < 10) {
      timerHours.textContent = "0" + timerHours.textContent;
    }
    if (timerMinutes.textContent < 10) {
      timerMinutes.textContent = "0" + timerMinutes.textContent;
    }
    if (timerSeconds.textContent < 10) {
      timerSeconds.textContent = "0" + timerSeconds.textContent;
    }

    if (getTime.timeRemaining <= 0) {
      timerHours.textContent = "00";
      timerMinutes.textContent = "00";
      timerSeconds.textContent = "00";
    }

    // const timerId = setInterval(() => {
    //   if (getTime.timeRemaining > 0) {
    //     updateClock();
    //   }
    // }, 1000);

    // setTimeout(() => {
    //   clearInterval(timerId);
    // }, 1000);
  };
  updateClock();

  setInterval(updateClock, 1000);
};

export default timer;
