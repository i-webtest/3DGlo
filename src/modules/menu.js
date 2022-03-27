"use strict";

const menu = () => {
  const menu = document.querySelector("menu");
  // const menuBtn = document.querySelector(".menu");
  // const closeBtn = menu.querySelector(".close-btn");
  // const menuItems = menu.querySelectorAll("ul>li>a");

  const handleMenu = () => {
    menu.classList.toggle("active-menu");
  };

  // menuBtn.addEventListener("click", handleMenu);
  // closeBtn.addEventListener("click", handleMenu);

  // menuItems.forEach((menuItem) => menuItem.addEventListener("click", handleMenu));

  const toggleMenu = (e) => {
    if (menu.classList.contains("active-menu")) {
      if (!e.target.closest("menu")) {
        handleMenu();
      } else if (e.target.closest("menu") && e.target.closest("ul>li>a")) {
        handleMenu();
      } else if (e.target.classList.contains("close-btn")) {
        e.preventDefault();
        handleMenu();
      }
    } else if (e.target.closest(".menu")) {
      handleMenu();
    }
  };

  document.body.addEventListener("click", toggleMenu);
};

export default menu;
