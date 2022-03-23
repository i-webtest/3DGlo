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
      modal.style.display = "block";

      let count = 0;
      let idInterval;

      const myAnimate = () => {
        count++;
        idInterval = requestAnimationFrame(myAnimate);

        if (count < 100) {
          modal.style.display = "block";
          popupContent.style.top = count + "px";
        } else {
          cancelAnimationFrame(idInterval);
        }

        if (screen < 768) {
          modal.style.display = "block";
          popupContent.style.top = 50 + "px";
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
