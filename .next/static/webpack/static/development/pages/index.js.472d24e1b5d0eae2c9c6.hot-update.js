webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Partner/partnerlist.jsx":
/*!********************************************!*\
  !*** ./components/Partner/partnerlist.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _partnercard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./partnercard */ \"./components/Partner/partnercard.jsx\");\n/* harmony import */ var _Data_PartnerData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Data/PartnerData */ \"./components/Data/PartnerData.js\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/dev/Desktop/RK Engineering/components/Partner/partnerlist.jsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\nvar PartnerList = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(PartnerList, _Component);\n\n  var _super = _createSuper(PartnerList);\n\n  function PartnerList(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, PartnerList);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      partners: _Data_PartnerData__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n    };\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(PartnerList, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var partners = this.state.partners;\n      return __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 16,\n          columnNumber: 13\n        }\n      }, __jsx(\"div\", {\n        className: \"md:ml-24 mt-4 text-teal-400 text-center text-bold text-4xl font-medium\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 17,\n          columnNumber: 17\n        }\n      }, \"Partners\"), __jsx(\"div\", {\n        className: \"md:flex md:ml-64 md:pl-24\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 13\n        }\n      }, partners.map(function (_ref) {\n        var name = _ref.name,\n            number = _ref.number,\n            id = _ref.id,\n            imageUrl = _ref.imageUrl;\n        return __jsx(_partnercard__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          key: id,\n          number: number,\n          name: name,\n          imageUrl: imageUrl,\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 21,\n            columnNumber: 20\n          }\n        });\n      })), __jsx(\"div\", {\n        className: \"md:ml-24 mt-0 text-blue-500 text-center text-bold text-4xl font-medium\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 13\n        }\n      }, \"Or Mail us: rkec@airtelmail.in\"));\n    }\n  }]);\n\n  return PartnerList;\n}(react__WEBPACK_IMPORTED_MODULE_5__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PartnerList);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1BhcnRuZXIvcGFydG5lcmxpc3QuanN4P2Q5YjkiXSwibmFtZXMiOlsiUGFydG5lckxpc3QiLCJwcm9wcyIsInN0YXRlIiwicGFydG5lcnMiLCJQQVJUTkVSX0RBVEEiLCJtYXAiLCJuYW1lIiwibnVtYmVyIiwiaWQiLCJpbWFnZVVybCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7SUFFTUEsVzs7Ozs7QUFDRix1QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOO0FBRUEsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLGNBQVEsRUFBR0MseURBQVlBO0FBRGQsS0FBYjtBQUhlO0FBTWxCOzs7OzZCQUNRO0FBQUE7O0FBQUEsVUFDR0QsUUFESCxHQUNnQixLQUFLRCxLQURyQixDQUNHQyxRQURIO0FBRUwsYUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBSyxpQkFBUyxFQUFDLHdFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREosRUFHQTtBQUFLLGlCQUFTLEVBQUMsMkJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJQSxRQUFRLENBQUNFLEdBQVQsQ0FBYTtBQUFBLFlBQUVDLElBQUYsUUFBRUEsSUFBRjtBQUFBLFlBQU9DLE1BQVAsUUFBT0EsTUFBUDtBQUFBLFlBQWNDLEVBQWQsUUFBY0EsRUFBZDtBQUFBLFlBQWlCQyxRQUFqQixRQUFpQkEsUUFBakI7QUFBQSxlQUNWLE1BQUMsb0RBQUQ7QUFBYSxhQUFHLEVBQUVELEVBQWxCO0FBQXNCLGdCQUFNLEVBQUVELE1BQTlCO0FBQXNDLGNBQUksRUFBRUQsSUFBNUM7QUFBa0Qsa0JBQVEsRUFBRUcsUUFBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURVO0FBQUEsT0FBYixDQURKLENBSEEsRUFTQTtBQUFLLGlCQUFTLEVBQUMsd0VBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQ0FUQSxDQURKO0FBY0g7Ozs7RUF4QnFCQywrQzs7QUEyQlhWLDBFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9QYXJ0bmVyL3BhcnRuZXJsaXN0LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUGFydG5lckNhcmQgZnJvbSAnLi9wYXJ0bmVyY2FyZCc7XG5pbXBvcnQgUEFSVE5FUl9EQVRBIGZyb20gJy4uL0RhdGEvUGFydG5lckRhdGEnO1xuXG5jbGFzcyBQYXJ0bmVyTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBwYXJ0bmVycyA6IFBBUlRORVJfREFUQVxuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBwYXJ0bmVycyB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21kOm1sLTI0IG10LTQgdGV4dC10ZWFsLTQwMCB0ZXh0LWNlbnRlciB0ZXh0LWJvbGQgdGV4dC00eGwgZm9udC1tZWRpdW0nPiBcbiAgICAgUGFydG5lcnM8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZDpmbGV4IG1kOm1sLTY0IG1kOnBsLTI0Jz5cbiAgICAgICAgICAgICAgIHtwYXJ0bmVycy5tYXAoKHtuYW1lLG51bWJlcixpZCxpbWFnZVVybH0pID0+IChcbiAgICAgICAgICAgICAgICAgICA8UGFydG5lckNhcmQga2V5PXtpZH0gbnVtYmVyPXtudW1iZXJ9IG5hbWU9e25hbWV9IGltYWdlVXJsPXtpbWFnZVVybH0vPlxuICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21kOm1sLTI0IG10LTAgdGV4dC1ibHVlLTUwMCB0ZXh0LWNlbnRlciB0ZXh0LWJvbGQgdGV4dC00eGwgZm9udC1tZWRpdW0nPiBcbiAgICAgT3IgTWFpbCB1czogcmtlY0BhaXJ0ZWxtYWlsLmluPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFydG5lckxpc3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Partner/partnerlist.jsx\n");

/***/ })

})