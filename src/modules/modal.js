"use strict";

const modal = () => {
  const modal = document.querySelector(".popup");
  const buttons = document.querySelectorAll(".popup-btn");
  const closeBtn = modal.querySelector(".popup-close");
  const popupContent = modal.querySelector(".popup-content");
  const screen = window.screen.width;

  console.log(screen);

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      let count = 0;
      let idInterval;

      modal.style.display = "block";
      popupContent.style.top = -50 + "%";

      const myAnimate = () => {
        count += 3;
        idInterval = requestAnimationFrame(myAnimate);

        if (count < 25) {
          popupContent.style.top = count + "%";
        } else {
          cancelAnimationFrame(idInterval);
        }

        // if (count < 25) {
        //   // modal.style.display = "block";
        //   popupContent.style.top = count + "%";
        // } else {
        //   cancelAnimationFrame(idInterval);
        // }

        if (screen < 768) {
          modal.style.display = "block";
          popupContent.style.top = 20 + "%";
        }
      };

      myAnimate();
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
};

export default modal;
