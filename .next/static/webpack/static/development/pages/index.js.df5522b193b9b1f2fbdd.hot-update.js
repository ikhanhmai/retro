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
/* harmony import */ var _elements_buttonLike__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements/buttonLike */ "./components/elements/buttonLike.js");
var _jsxFileName = "/Users/khanhmai/side_projects/retro/components/card.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Card(props) {
  var onDeleteHandler = function onDeleteHandler() {
    props.onDelete(props.cardIndex);
  };

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, props.content), __jsx(_elements_buttonDelete__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onDelete: onDeleteHandler,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), __jsx(_elements_buttonLike__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }));
}

/***/ }),

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
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, __jsx("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, "Like"), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, props.likeCount ? props.likeCount : 0));
}

/***/ })

})
//# sourceMappingURL=index.js.df5522b193b9b1f2fbdd.hot-update.js.map