"use strict";

const calculator = () => {
  const calcItems = document.querySelectorAll("input.calc-item");

  calcItems.forEach((item) => {
    item.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/\D+/, "");
    });
  });
};

export default calculator;
