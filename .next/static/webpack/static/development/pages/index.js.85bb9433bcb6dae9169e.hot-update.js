webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/cardList.js":
/*!********************************!*\
  !*** ./components/cardList.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CardList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card */ "./components/card.js");
/* harmony import */ var _elements_buttonAdd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements/buttonAdd */ "./components/elements/buttonAdd.js");
/* harmony import */ var _elements_textBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./elements/textBox */ "./components/elements/textBox.js");
var _jsxFileName = "/Users/khanhmai/side_projects/retro/components/cardList.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function CardList(props) {
  this.state = {
    cards: []
  };
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, props.title), this.states.cards.map(function (card) {
    __jsx(_card__WEBPACK_IMPORTED_MODULE_1__["default"], {
      content: card,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    });
  }), __jsx(_elements_buttonAdd__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), __jsx(_elements_textBox__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }));
}

/***/ })

})
//# sourceMappingURL=index.js.85bb9433bcb6dae9169e.hot-update.js.map