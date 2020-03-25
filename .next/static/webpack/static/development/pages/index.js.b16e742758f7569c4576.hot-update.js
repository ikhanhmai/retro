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

  var onLikeHandler = function onLikeHandler(likeCount) {
    props.onLike(props.cardIndex, likeCount);
  };

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, props.content), __jsx(_elements_buttonDelete__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onDelete: onDeleteHandler,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), __jsx(_elements_buttonLike__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onLike: onLikeHandler,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }));
}

/***/ })

})
//# sourceMappingURL=index.js.b16e742758f7569c4576.hot-update.js.map