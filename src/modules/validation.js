"use strict";

// import maskPhone from "./maskPhone";

const validation = () => {
  const inputUserName = document.querySelectorAll("input[type=text]");
  // const calcItems = document.querySelectorAll("input[type=text].calc-item");
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
        e.target.value = e.target.value.replace(/[^а-яА-ЯёЁ\s]+/i, "");
        e.target.style.border = null;
      });
      item.addEventListener("invalid", (e) => {
        e.preventDefault();
        e.target.style.border = "1px solid red";
      });
    }
  });

  inputMessage.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^а-яА-ЯёЁ\s.,;:'"!?\d]+/i, "");
    e.target.style.border = null;
  });

  inputEmail.forEach((item) => {
    item.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^\w@\-.!~*']+/gi, "");
      e.target.style.border = null;
    });
    item.addEventListener("invalid", (e) => {
      e.preventDefault();
      e.target.style.border = "1px solid red";
    });
  });

  inputTel.forEach((item) => {
    item.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/[^\d+()-]+/gi, "");
      e.target.style.border = null;
    });
    item.addEventListener("invalid", (e) => {
      e.preventDefault();
      e.target.style.border = "1px solid red";
    });
  });
};

export default validation;
//import maskPhone from "./modules/maskPhone";

// maskPhone();
