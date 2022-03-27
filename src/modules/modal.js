"use strict";

const modal = () => {
  const modal = document.querySelector(".popup");
  const buttons = document.querySelectorAll(".popup-btn");
  const popupContent = modal.querySelector(".popup-content");
  const screen = window.screen.width;

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      let count = 0;
      let idInterval;

      modal.style.display = "block";
      popupContent.style.top = -50 + "%";

      const myAnimate = () => {
        count++;
        idInterval = requestAnimationFrame(myAnimate);

        if (count < 25) {
          popupContent.style.top = -50 + count * 3 + "%";
        } else {
          cancelAnimationFrame(idInterval);
        }

        if (screen < 768) {
          modal.style.display = "block";
          popupContent.style.top = 20 + "%";
        }
      };

      myAnimate();
    });
  });

  modal.addEventListener("click", (e) => {
    if (!e.target.closest(".popup-content") || e.target.classList.contains("popup-close")) {
      modal.style.display = "none";
    }
  });
};

export default modal;
