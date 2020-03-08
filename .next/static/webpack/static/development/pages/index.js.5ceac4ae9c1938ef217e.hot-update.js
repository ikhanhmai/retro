webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/elements/textBox.js":
/*!****************************************!*\
  !*** ./components/elements/textBox.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TextBox; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/khanhmai/side_projects/retro/components/elements/textBox.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function TextBox(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      text = _useState.text,
      setText = _useState.setText;

  var onChangeHandler = function onChangeHandler(e) {
    setText(e.target.value);
  };

  var onAddClicked = function onAddClicked() {
    props.submitText(text);
  };

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("textarea", {
    onChange: onChangeHandler,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), __jsx("button", {
    onClick: onAddClicked,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Add"));
}

/***/ })

})
//# sourceMappingURL=index.js.5ceac4ae9c1938ef217e.hot-update.js.map