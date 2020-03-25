webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/elements/buttonLike.js":
/*!*******************************************!*\
  !*** ./components/elements/buttonLike.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ButtonLike; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/khanhmai/side_projects/retro/components/elements/buttonLike.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function ButtonLike(props) {
  var onClickHandler = function onClickHandler() {
    props.onLike();
  };

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("button", {
    onClick: onClickHandler,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Like"), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, props.likeCount));
}

/***/ })

})
//# sourceMappingURL=index.js.c386610d2cb52aee06b1.hot-update.js.map