"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkpiechart"] = self["webpackChunkpiechart"] || []).push([["src_index_js"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! echarts */ \"./node_modules/echarts/index.js\");\n\r\n\r\nvar chartDom = document.getElementById('piechart-dev');\r\nvar myChart = echarts__WEBPACK_IMPORTED_MODULE_0__.init(chartDom);\r\nvar option;\r\n\r\noption = {\r\n    tooltip: {\r\n        trigger: 'item'\r\n    },\r\n    legend: {\r\n        top: '5%',\r\n        left: 'center'\r\n    },\r\n    series: [\r\n        {\r\n            name: 'Access From',\r\n            type: 'pie',\r\n            radius: ['40%', '70%'],\r\n            avoidLabelOverlap: false,\r\n            itemStyle: {\r\n                borderRadius: 10,\r\n                borderColor: '#fff',\r\n                borderWidth: 2\r\n            },\r\n            label: {\r\n                show: false,\r\n                position: 'center'\r\n            },\r\n            emphasis: {\r\n                label: {\r\n                    show: true,\r\n                    fontSize: 40,\r\n                    fontWeight: 'bold'\r\n                }\r\n            },\r\n            labelLine: {\r\n                show: false\r\n            },\r\n            data: [\r\n                { value: 1048, name: 'Search Engine' },\r\n                { value: 735, name: 'Direct' },\r\n                { value: 580, name: 'Email' },\r\n                { value: 484, name: 'Union Ads' },\r\n                { value: 300, name: 'Video Ads' }\r\n            ]\r\n        }\r\n    ]\r\n};\r\n\r\noption && myChart.setOption(option);\r\n\n\n//# sourceURL=webpack://piechart/./src/index.js?");

/***/ })

}]);