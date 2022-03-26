"use strict";

const validation = () => {
  const inputUserName = document.querySelectorAll("input[type=text]");
  const calcItems = document.querySelectorAll("input[type=text].calc-item");
  const inputMessage = document.querySelector(".mess");
  const inputEmail = document.querySelectorAll("input[type=email");
  const inputTel = document.querySelectorAll("input[type=tel]");

  inputUserName.forEach((item) => {
    if (item.classList.contains("calc-item")) {
      item.addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/\D+/gi, "");
      });
    } else {
      item.addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/[^а-яА-ЯёЁ\-\s]+/i, "");
      });
    }
  });

  inputMessage.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^а-яА-ЯёЁ\-\s]+/i, "");
  });

  inputEmail.forEach((item) => {
    item.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^\w@\-.!~*']+/gi, "");
    });
  });

  inputTel.forEach((item) => {
    item.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^\d+()-]+/gi, "");
    });
  });
};

export default validation;
