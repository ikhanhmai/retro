webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/card.js":
/*!****************************!*\
  !*** ./components/card.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Card; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elements_buttonDelete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements/buttonDelete */ "./components/elements/buttonDelete.js");
var _jsxFileName = "/Users/khanhmai/side_projects/retro/components/card.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Card(props) {
  var onDeleteHandler = function onDeleteHandler() {
    props.onDelete();
  };

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, props.content), __jsx(_elements_buttonDelete__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onDelete: onDeleteHandler,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }));
}

/***/ })

})
//# sourceMappingURL=index.js.0d98d18ff73ba42ef9ea.hot-update.js.map