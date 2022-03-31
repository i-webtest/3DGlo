"use strict";

import { animate } from "./helpers";

const modal = () => {
  const modal = document.querySelector(".popup");
  const buttons = document.querySelectorAll(".popup-btn");
  const popupContent = modal.querySelector(".popup-content");
  const screen = window.screen.width;

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // let count = 0;
      // let idInterval;

      modal.style.display = "block";
      popupContent.style.top = -50 + "%";

      if (screen > 768) {
        animate({
          duration: 500,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            popupContent.style.top = -50 + 80 * progress + "%";
          },
        });
      } else {
        modal.style.display = "block";
        popupContent.style.top = 20 + "%";
      }
    });
  });

  modal.addEventListener("click", (e) => {
    if (!e.target.closest(".popup-content") || e.target.classList.contains("popup-close")) {
      modal.style.display = "none";
    }
  });
};

export default modal;
