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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/calculator */ \"./modules/calculator.js\");\n/* harmony import */ var _modules_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/validation */ \"./modules/validation.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n\"use script\";\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"24 march 2022\");\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_calculator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(100);\r\n(0,_modules_validation__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calculator.js":
/*!*******************************!*\
  !*** ./modules/calculator.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst calculator = (price = 100) => {\r\n  const calcBlock = document.querySelector(\".calc-block\");\r\n  const calcType = document.querySelector(\".calc-type\");\r\n  const calcSquare = document.querySelector(\".calc-square\");\r\n  const calcCount = document.querySelector(\".calc-count\");\r\n  const calcDay = document.querySelector(\".calc-day\");\r\n  const total = document.getElementById(\"total\");\r\n\r\n  const countCalc = () => {\r\n    const calcTypeValue = +calcType.options[calcType.selectedIndex].value;\r\n    const calcSquareValue = calcSquare.value;\r\n\r\n    let totalValue = 0;\r\n    let calcCountValue = 1;\r\n    let calcDayValue = 1;\r\n\r\n    if (calcCount.value > 1) {\r\n      calcCountValue += +calcCount.value / 10;\r\n    }\r\n\r\n    if (calcDay.value && calcDay.value < 5) {\r\n      calcDayValue = 2;\r\n    } else if (calcDay.value && calcDay.value < 10) {\r\n      calcDayValue = 1.5;\r\n    }\r\n\r\n    if (calcType.value && calcSquare.value) {\r\n      totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;\r\n    } else {\r\n      totalValue = 0;\r\n    }\r\n\r\n    total.textContent = totalValue;\r\n  };\r\n\r\n  calcBlock.addEventListener(\"input\", (e) => {\r\n    if (e.target === calcType || e.target === calcSquare || e.target === calcCount || e.target === calcDay) {\r\n      countCalc();\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculator);\r\n\n\n//# sourceURL=webpack:///./modules/calculator.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst menu = () => {\r\n  const menu = document.querySelector(\"menu\");\r\n  // const menuBtn = document.querySelector(\".menu\");\r\n  // const closeBtn = menu.querySelector(\".close-btn\");\r\n  // const menuItems = menu.querySelectorAll(\"ul>li>a\");\r\n\r\n  const handleMenu = () => {\r\n    menu.classList.toggle(\"active-menu\");\r\n  };\r\n\r\n  // menuBtn.addEventListener(\"click\", handleMenu);\r\n  // closeBtn.addEventListener(\"click\", handleMenu);\r\n\r\n  // menuItems.forEach((menuItem) => menuItem.addEventListener(\"click\", handleMenu));\r\n\r\n  const toggleMenu = (e) => {\r\n    if (menu.classList.contains(\"active-menu\")) {\r\n      if (!e.target.closest(\"menu\")) {\r\n        handleMenu();\r\n      } else if (e.target.closest(\"menu\") && e.target.closest(\"ul>li>a\")) {\r\n        handleMenu();\r\n      } else if (e.target.classList.contains(\"close-btn\")) {\r\n        e.preventDefault();\r\n        handleMenu();\r\n      }\r\n    } else if (e.target.closest(\".menu\")) {\r\n      handleMenu();\r\n    }\r\n  };\r\n\r\n  document.body.addEventListener(\"click\", toggleMenu);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\r\n\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst modal = () => {\r\n  const modal = document.querySelector(\".popup\");\r\n  const buttons = document.querySelectorAll(\".popup-btn\");\r\n  const popupContent = modal.querySelector(\".popup-content\");\r\n  const screen = window.screen.width;\r\n\r\n  buttons.forEach((btn) => {\r\n    btn.addEventListener(\"click\", () => {\r\n      let count = 0;\r\n      let idInterval;\r\n\r\n      modal.style.display = \"block\";\r\n      popupContent.style.top = -50 + \"%\";\r\n\r\n      const myAnimate = () => {\r\n        count++;\r\n        idInterval = requestAnimationFrame(myAnimate);\r\n\r\n        if (count < 25) {\r\n          popupContent.style.top = -50 + count * 3 + \"%\";\r\n        } else {\r\n          cancelAnimationFrame(idInterval);\r\n        }\r\n\r\n        if (screen < 768) {\r\n          modal.style.display = \"block\";\r\n          popupContent.style.top = 20 + \"%\";\r\n        }\r\n      };\r\n\r\n      myAnimate();\r\n    });\r\n  });\r\n\r\n  modal.addEventListener(\"click\", (e) => {\r\n    if (!e.target.closest(\".popup-content\") || e.target.classList.contains(\"popup-close\")) {\r\n      modal.style.display = \"none\";\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\r\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst slider = () => {\r\n  const sliderBlock = document.querySelector(\".portfolio-content\");\r\n  const slides = document.querySelectorAll(\".portfolio-item\");\r\n  const portfolioDots = document.querySelector(\".portfolio-dots\");\r\n\r\n  let dots = document.querySelectorAll(\".dot\");\r\n\r\n  const timeInterval = 2000;\r\n\r\n  let currentSlide = 0;\r\n  let interval;\r\n\r\n  const prevSlide = (elems, index, strClass) => {\r\n    elems[index].classList.remove(strClass);\r\n  };\r\n\r\n  const nextSlide = (elems, index, strClass) => {\r\n    elems[index].classList.add(strClass);\r\n  };\r\n\r\n  // функция автоматического переключения слайдов\r\n  const autoSlide = () => {\r\n    prevSlide(slides, currentSlide, \"portfolio-item-active\");\r\n    prevSlide(dots, currentSlide, \"dot-active\");\r\n    currentSlide++;\r\n\r\n    if (currentSlide >= slides.length) {\r\n      currentSlide = 0;\r\n    }\r\n    nextSlide(slides, currentSlide, \"portfolio-item-active\");\r\n    nextSlide(dots, currentSlide, \"dot-active\");\r\n  };\r\n\r\n  const startSlide = (timer = 1500) => {\r\n    interval = setInterval(autoSlide, timer);\r\n  };\r\n\r\n  const stopSlide = () => {\r\n    clearInterval(interval);\r\n  };\r\n\r\n  if (slides.length > 0) {\r\n    sliderBlock.addEventListener(\"click\", (e) => {\r\n      e.preventDefault();\r\n\r\n      if (!e.target.matches(\".dot, .portfolio-btn\")) {\r\n        return;\r\n      }\r\n\r\n      prevSlide(slides, currentSlide, \"portfolio-item-active\");\r\n      prevSlide(dots, currentSlide, \"dot-active\");\r\n\r\n      if (e.target.matches(\"#arrow-right\")) {\r\n        currentSlide++;\r\n      } else if (e.target.matches(\"#arrow-left\")) {\r\n        currentSlide--;\r\n      } else if (e.target.classList.contains(\"dot\")) {\r\n        dots.forEach((dot, index) => {\r\n          if (e.target === dot) {\r\n            currentSlide = index;\r\n          }\r\n        });\r\n      }\r\n\r\n      if (currentSlide >= slides.length) {\r\n        currentSlide = 0;\r\n      }\r\n\r\n      if (currentSlide < 0) {\r\n        currentSlide = slides.length - 1;\r\n      }\r\n\r\n      nextSlide(slides, currentSlide, \"portfolio-item-active\");\r\n      nextSlide(dots, currentSlide, \"dot-active\");\r\n    });\r\n  }\r\n\r\n  sliderBlock.addEventListener(\r\n    \"mouseenter\",\r\n    (e) => {\r\n      if (e.target.matches(\".dot, .portfolio-btn\")) {\r\n        stopSlide();\r\n      }\r\n    },\r\n    true\r\n  );\r\n\r\n  sliderBlock.addEventListener(\r\n    \"mouseleave\",\r\n    (e) => {\r\n      if (e.target.matches(\".dot, .portfolio-btn\")) {\r\n        startSlide(timeInterval);\r\n      }\r\n    },\r\n    true\r\n  );\r\n\r\n  startSlide(timeInterval);\r\n\r\n  const createDots = () => {\r\n    slides.forEach((item, index) => {\r\n      const dot = document.createElement(\"li\");\r\n      dot.classList.add(\"dot\");\r\n\r\n      if (item.classList.contains(\"dot-active\")) {\r\n        dot.classList.add(\"dot-active\");\r\n        currentSlide = index;\r\n      }\r\n\r\n      portfolioDots.append(dot);\r\n    });\r\n    dots = document.querySelectorAll(\".dot\");\r\n  };\r\n  createDots();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\r\n\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst tabs = () => {\r\n  const tabPanel = document.querySelector(\".service-header\");\r\n  const tabs = document.querySelectorAll(\".service-header-tab\");\r\n  const tabContent = document.querySelectorAll(\".service-tab\");\r\n\r\n  tabPanel.addEventListener(\"click\", (e) => {\r\n    if (e.target.closest(\".service-header-tab\")) {\r\n      const tabBtn = e.target.closest(\".service-header-tab\");\r\n\r\n      tabs.forEach((tab, index) => {\r\n        if (tab === tabBtn) {\r\n          tab.classList.add(\"active\");\r\n          tabContent[index].classList.remove(\"d-none\");\r\n        } else {\r\n          tab.classList.remove(\"active\");\r\n          tabContent[index].classList.add(\"d-none\");\r\n        }\r\n      });\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\r\n\n\n//# sourceURL=webpack:///./modules/tabs.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst timer = (deadline) => {\r\n  const timerHours = document.getElementById(\"timer-hours\");\r\n  const timerMinutes = document.getElementById(\"timer-minutes\");\r\n  const timerSeconds = document.getElementById(\"timer-seconds\");\r\n\r\n  let timerId = 0;\r\n\r\n  const getTimeRemaining = () => {\r\n    let dateStop = new Date(deadline).getTime();\r\n    let dateNow = new Date().getTime();\r\n    let timeRemaining = (dateStop - dateNow) / 1000;\r\n    // let days = Math.floor(timeRemaining / 60 / 60 / 24);\r\n    let hours = Math.floor(timeRemaining / 60 / 60);\r\n    let minutes = Math.floor((timeRemaining / 60) % 60);\r\n    let seconds = Math.floor(timeRemaining % 60);\r\n\r\n    return { timeRemaining, hours, minutes, seconds };\r\n  };\r\n\r\n  const updateClock = () => {\r\n    let getTime = getTimeRemaining();\r\n\r\n    timerHours.textContent = getTime.hours;\r\n    timerMinutes.textContent = getTime.minutes;\r\n    timerSeconds.textContent = getTime.seconds;\r\n\r\n    if (timerHours.textContent < 10) {\r\n      timerHours.textContent = \"0\" + timerHours.textContent;\r\n    }\r\n    if (timerMinutes.textContent < 10) {\r\n      timerMinutes.textContent = \"0\" + timerMinutes.textContent;\r\n    }\r\n    if (timerSeconds.textContent < 10) {\r\n      timerSeconds.textContent = \"0\" + timerSeconds.textContent;\r\n    }\r\n\r\n    if (getTime.timeRemaining <= 0) {\r\n      timerHours.textContent = \"00\";\r\n      timerMinutes.textContent = \"00\";\r\n      timerSeconds.textContent = \"00\";\r\n      clearInterval(timerId);\r\n    }\r\n  };\r\n  updateClock();\r\n\r\n  timerId = setInterval(updateClock, 1000);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\r\n\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ }),

/***/ "./modules/validation.js":
/*!*******************************!*\
  !*** ./modules/validation.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst validation = () => {\r\n  const inputUserName = document.querySelectorAll(\"input[type=text]\");\r\n  // const calcItems = document.querySelectorAll(\"input[type=text].calc-item\");\r\n  const inputMessage = document.querySelector(\".mess\");\r\n  const inputEmail = document.querySelectorAll(\"input[type=email\");\r\n  const inputTel = document.querySelectorAll(\"input[type=tel]\");\r\n\r\n  inputUserName.forEach((item) => {\r\n    if (item.classList.contains(\"calc-item\")) {\r\n      item.addEventListener(\"input\", (e) => {\r\n        e.target.value = e.target.value.replace(/\\D+/gi, \"\");\r\n      });\r\n    } else {\r\n      item.addEventListener(\"input\", (e) => {\r\n        e.target.value = e.target.value.replace(/[^а-яА-ЯёЁ\\-\\s]+/i, \"\");\r\n      });\r\n    }\r\n  });\r\n\r\n  inputMessage.addEventListener(\"input\", (e) => {\r\n    e.target.value = e.target.value.replace(/[^а-яА-ЯёЁ\\-\\s]+/i, \"\");\r\n  });\r\n\r\n  inputEmail.forEach((item) => {\r\n    item.addEventListener(\"input\", (e) => {\r\n      e.target.value = e.target.value.replace(/[^\\w@\\-.!~*']+/gi, \"\");\r\n    });\r\n  });\r\n\r\n  inputTel.forEach((item) => {\r\n    item.addEventListener(\"input\", (e) => {\r\n      e.target.value = e.target.value.replace(/[^\\d+()-]+/gi, \"\");\r\n    });\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validation);\r\n\n\n//# sourceURL=webpack:///./modules/validation.js?");

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