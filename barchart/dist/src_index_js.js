"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkbarchart"] = self["webpackChunkbarchart"] || []).push([["src_index_js"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! echarts */ \"./node_modules/echarts/index.js\");\n\r\n\r\nvar chartDom = document.getElementById('barchart-dev');\r\nvar myChart = echarts__WEBPACK_IMPORTED_MODULE_0__.init(chartDom);\r\nvar option;\r\n\r\noption = {\r\n    xAxis: {\r\n        type: 'category',\r\n        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']\r\n    },\r\n    yAxis: {\r\n        type: 'value'\r\n    },\r\n    series: [\r\n        {\r\n            data: [120, 200, 150, 80, 70, 110, 130],\r\n            type: 'bar'\r\n        }\r\n    ]\r\n};\r\n\r\noption && myChart.setOption(option);\n\n//# sourceURL=webpack://barchart/./src/index.js?");

/***/ })

}]);