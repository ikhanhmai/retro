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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card */ "./components/card.js");
/* harmony import */ var _elements_buttonAdd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./elements/buttonAdd */ "./components/elements/buttonAdd.js");
/* harmony import */ var _elements_textBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./elements/textBox */ "./components/elements/textBox.js");

var _jsxFileName = "/Users/khanhmai/side_projects/retro/components/cardList.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function CardList(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    cards: [],
    showTextBox: false
  }),
      state = _useState[0],
      setState = _useState[1];

  var buttonAddHandler = function buttonAddHandler() {
    setState({
      showTextBox: true
    });
    console.log('showTextBox', showTextBox);
  };

  var addCard = function addCard(text) {
    setState.apply(void 0, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state).concat([{
      cards: state.cards.concat([text])
    }]));
    setState.apply(void 0, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state).concat([{
      showTextBox: false
    }]));
  };

  var onDeleteHandler = function onDeleteHandler(key) {
    console.log('key', key);
    setState.apply(void 0, Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state).concat([{
      cards: cards.splice(key, 1)
    }]));
  };

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, props.title), state.cards.map(function (card, index) {
    return __jsx(_card__WEBPACK_IMPORTED_MODULE_2__["default"], {
      onDelete: onDeleteHandler,
      cardIndex: index,
      key: index,
      content: card,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    });
  }), __jsx(_elements_buttonAdd__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: buttonAddHandler,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), state.showTextBox && __jsx(_elements_textBox__WEBPACK_IMPORTED_MODULE_4__["default"], {
    submitText: addCard,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }));
}

/***/ })

})
//# sourceMappingURL=index.js.42a25588df07ff27103f.hot-update.js.map