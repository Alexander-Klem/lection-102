/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sayHi),
/* harmony export */   one: () => (/* binding */ one),
/* harmony export */   two: () => (/* binding */ two)
/* harmony export */ });
let one = 1;

let two = 2;



function sayHi() { 
    console.log(`Hello`);
}

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
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.js */ "./src/js/main.js");

// 1) import { one, two } from "./main.js"; // Импортируем сразу две переменные
// console.log(`${one} and ${two}`);

// 2) import { one as first } from "./main.js"; можно переименовать переменную (когда большое название переменной и ее неудобно читать)
// console.log(first);

// 3) import * as data from "./main"; // * - позволяет нам импортировать все что экспортируется из файла (data - по сути объект, который включает все что было экпортировано)
// import * as data from "./main"
// data.sayHi();

// import { one, two } from "./main.js"; // по сути тут просто деструктуризация объекта на one и two

// console.log(`${one} and ${two}`);

// !В модулях может быть экспорт по умолчанию. Он может быть только один т.е ЭКСПОРТ ПО УМОЛЧАНИЮ ДОЛЖЕН БЫТЬ ТОЛЬКО ОДИН:
// -export default
// import sayHi from "./main.js"; // тут функция напрямую экспортируется из main.js
// sayHi();

// 4) Атрибут typemodel - можем применить к тегу скрипт в HTML, чтобы он попытался использовать скрипты в качестве модулей.
// Порядок действий:
// 1) Настроить все необходимые экспорты и импорты
// 2) Правильно подключить на нашу страницу:
// 1 - ый файл идет тот, у которого файлы экспортируются
// 2 - ой файл
// 3 поставить type="module"
// 4 Должны правильно прописывать пути к нашим файлам т.е main.js (import { one, two } from "./main.js";)

{/* <script type="module" src="./src/js/main.js"></script>
<script type="module" src="./src/js/script.js" ></script> */}




console.log(`${_main_js__WEBPACK_IMPORTED_MODULE_0__.one} and ${_main_js__WEBPACK_IMPORTED_MODULE_0__.two}`);
(0,_main_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map