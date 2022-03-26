<<<<<<< HEAD
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n\"use script\";\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"24 march 2022\");\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nconst menu = () => {\n  const menuBtn = document.querySelector(\".menu\");\n  const menu = document.querySelector(\"menu\");\n  const closeBtn = menu.querySelector(\".close-btn\");\n  const menuItems = menu.querySelectorAll(\"ul>li>a\");\n\n  const handleMenu = () => {\n    menu.classList.toggle(\"active-menu\");\n  };\n\n  menuBtn.addEventListener(\"click\", handleMenu);\n  closeBtn.addEventListener(\"click\", handleMenu);\n\n  menuItems.forEach((menuItem) => menuItem.addEventListener(\"click\", handleMenu));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst modal = () => {\r\n  const modal = document.querySelector(\".popup\");\r\n  const buttons = document.querySelectorAll(\".popup-btn\");\r\n  const closeBtn = modal.querySelector(\".popup-close\");\r\n  const popupContent = modal.querySelector(\".popup-content\");\r\n  const screen = window.screen.width;\r\n\r\n  buttons.forEach((btn) => {\r\n    btn.addEventListener(\"click\", () => {\r\n      let count = 0;\r\n      let idInterval;\r\n\r\n      modal.style.display = \"block\";\r\n      popupContent.style.top = -50 + \"%\";\r\n\r\n      const myAnimate = () => {\r\n        count++;\r\n        idInterval = requestAnimationFrame(myAnimate);\r\n\r\n        if (count < 25) {\r\n          popupContent.style.top = -50 + count * 3 + \"%\";\r\n        } else {\r\n          cancelAnimationFrame(idInterval);\r\n        }\r\n\r\n        if (screen < 768) {\r\n          modal.style.display = \"block\";\r\n          popupContent.style.top = 20 + \"%\";\r\n        }\r\n      };\r\n\r\n      myAnimate();\r\n    });\r\n  });\r\n\r\n  closeBtn.addEventListener(\"click\", () => {\r\n    modal.style.display = \"none\";\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\r\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst timer = (deadline) => {\r\n  const timerHours = document.getElementById(\"timer-hours\");\r\n  const timerMinutes = document.getElementById(\"timer-minutes\");\r\n  const timerSeconds = document.getElementById(\"timer-seconds\");\r\n\r\n  let timerId = 0;\r\n\r\n  const getTimeRemaining = () => {\r\n    let dateStop = new Date(deadline).getTime();\r\n    let dateNow = new Date().getTime();\r\n    let timeRemaining = (dateStop - dateNow) / 1000;\r\n    // let days = Math.floor(timeRemaining / 60 / 60 / 24);\r\n    let hours = Math.floor(timeRemaining / 60 / 60);\r\n    let minutes = Math.floor((timeRemaining / 60) % 60);\r\n    let seconds = Math.floor(timeRemaining % 60);\r\n\r\n    return { timeRemaining, hours, minutes, seconds };\r\n  };\r\n\r\n  const updateClock = () => {\r\n    let getTime = getTimeRemaining();\r\n\r\n    timerHours.textContent = getTime.hours;\r\n    timerMinutes.textContent = getTime.minutes;\r\n    timerSeconds.textContent = getTime.seconds;\r\n\r\n    if (timerHours.textContent < 10) {\r\n      timerHours.textContent = \"0\" + timerHours.textContent;\r\n    }\r\n    if (timerMinutes.textContent < 10) {\r\n      timerMinutes.textContent = \"0\" + timerMinutes.textContent;\r\n    }\r\n    if (timerSeconds.textContent < 10) {\r\n      timerSeconds.textContent = \"0\" + timerSeconds.textContent;\r\n    }\r\n\r\n    if (getTime.timeRemaining <= 0) {\r\n      timerHours.textContent = \"00\";\r\n      timerMinutes.textContent = \"00\";\r\n      timerSeconds.textContent = \"00\";\r\n      clearInterval(timerId);\r\n    }\r\n  };\r\n  updateClock();\r\n\r\n  timerId = setInterval(updateClock, 1000);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\r\n\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;
=======
(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),l=document.getElementById("timer-seconds");let o=0;const r=()=>{let e=(()=>{let e=(new Date("24 march 2022").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,hours:Math.floor(e/60/60),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})();t.textContent=e.hours,n.textContent=e.minutes,l.textContent=e.seconds,t.textContent<10&&(t.textContent="0"+t.textContent),n.textContent<10&&(n.textContent="0"+n.textContent),l.textContent<10&&(l.textContent="0"+l.textContent),e.timeRemaining<=0&&(t.textContent="00",n.textContent="00",l.textContent="00",clearInterval(o))};r(),o=setInterval(r,1e3)})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),n=t.querySelector(".close-btn"),l=t.querySelectorAll("ul>li>a"),o=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",o),n.addEventListener("click",o),l.forEach((e=>e.addEventListener("click",o)))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),n=e.querySelector(".popup-close"),l=e.querySelector(".popup-content"),o=window.screen.width;t.forEach((t=>{t.addEventListener("click",(()=>{let t,n=0;e.style.display="block",l.style.top="-50%";const r=()=>{n++,t=requestAnimationFrame(r),n<25?l.style.top=3*n-50+"%":cancelAnimationFrame(t),o<768&&(e.style.display="block",l.style.top="20%")};r()}))})),n.addEventListener("click",(()=>{e.style.display="none"}))})(),document.querySelectorAll("input[type=text].calc-item"),(()=>{const e=document.querySelectorAll("input[type=text]"),t=(document.querySelectorAll("input[type=text].calc-item"),document.querySelector(".mess")),n=document.querySelectorAll("input[type=email"),l=document.querySelectorAll("input[type=tel]");e.forEach((e=>{e.classList.contains("calc-item")?e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D+/gi,"")})):e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-яА-ЯёЁ\-\s]+/i,"")}))})),t.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-яА-ЯёЁ\-\s]+/i,"")})),n.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^\w@\-.!~*']+/gi,"")}))})),l.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^\d+()-]+/gi,"")}))}))})()})();
>>>>>>> lesson21
