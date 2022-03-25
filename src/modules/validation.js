"use strict";

const validation = () => {
  const form = document.querySelectorAll("form");
  const inputUserName = document.querySelectorAll("input[type=text]");
  const inputMessage = document.querySelector(".mess");
  const inputEmail = document.querySelectorAll("input[type=email");
  const inputTel = document.querySelectorAll("input[type=tel]");

  // console.log(inputTel);

  inputUserName.forEach((item) => {
    item.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^а-яА-ЯёЁ\-\s]+/i, "");
      // console.log(e.target.value.replace(/[^а-яА-ЯёЁ\-\s]+/i, ""));
    });
  });

  inputMessage.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^а-яА-ЯёЁ\-\s]+/i, "");
  });

  inputEmail.forEach((item) => {
    item.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^\w@\-.!~*']+/gi, "");
      // console.log(e.target.value.replace(/[^\w@\-.!~*']+/gi, ""));
    });
  });

  inputTel.forEach((item) => {
    item.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^\d()-]+/gi, "");
      // console.log(e.target.value.replace(/[^\d()-]+/gi, ""));
    });
  });
};

export default validation;
