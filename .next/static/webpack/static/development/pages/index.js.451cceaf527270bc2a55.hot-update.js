webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Partner/partnerlist.jsx":
/*!********************************************!*\
  !*** ./components/Partner/partnerlist.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _partnercard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./partnercard */ \"./components/Partner/partnercard.jsx\");\n/* harmony import */ var _Data_PartnerData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Data/PartnerData */ \"./components/Data/PartnerData.js\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/index.js\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/dev/Desktop/RK Engineering/components/Partner/partnerlist.jsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\nvar PartnerList = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(PartnerList, _Component);\n\n  var _super = _createSuper(PartnerList);\n\n  function PartnerList(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, PartnerList);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      partners: _Data_PartnerData__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n    };\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(PartnerList, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var partners = this.state.partners;\n      return __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 17,\n          columnNumber: 13\n        }\n      }, __jsx(\"div\", {\n        className: \"md:ml-12 mt-4 text-indigo-400 text-center text-bold text-4xl font-medium\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 17\n        }\n      }, \"Partners\"), __jsx(\"p\", {\n        className: \"md:mx-24 text-center text-gray-600 text-lg md:text-base font-thin\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 6\n        }\n      }, \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium totam omnis distinctio beatae sunt aliquam explicabo, asperiores perspiciatis quos deleniti reiciendis sit molestias architecto maiores vitae accusamus. Illum, quod voluptatem.\"), __jsx(\"div\", {\n        className: \"md:flex md:ml-64 md:pl-4\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 13\n        }\n      }, partners.map(function (_ref) {\n        var name = _ref.name,\n            number = _ref.number,\n            id = _ref.id,\n            imageUrl = _ref.imageUrl;\n        return __jsx(_partnercard__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          key: id,\n          number: number,\n          name: name,\n          imageUrl: imageUrl,\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 24,\n            columnNumber: 20\n          }\n        });\n      })), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        variant: \"h5\",\n        color: \"primary\",\n        align: \"center\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 11\n        }\n      }, \"rkec@airtelmail.in\"));\n    }\n  }]);\n\n  return PartnerList;\n}(react__WEBPACK_IMPORTED_MODULE_5__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PartnerList);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1BhcnRuZXIvcGFydG5lcmxpc3QuanN4P2Q5YjkiXSwibmFtZXMiOlsiUGFydG5lckxpc3QiLCJwcm9wcyIsInN0YXRlIiwicGFydG5lcnMiLCJQQVJUTkVSX0RBVEEiLCJtYXAiLCJuYW1lIiwibnVtYmVyIiwiaWQiLCJpbWFnZVVybCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsVzs7Ozs7QUFDRix1QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOO0FBRUEsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLGNBQVEsRUFBR0MseURBQVlBO0FBRGQsS0FBYjtBQUhlO0FBTWxCOzs7OzZCQUNRO0FBQUE7O0FBQUEsVUFDR0QsUUFESCxHQUNnQixLQUFLRCxLQURyQixDQUNHQyxRQURIO0FBRUwsYUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBSyxpQkFBUyxFQUFDLDBFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREosRUFHUDtBQUFHLGlCQUFTLEVBQUMsbUVBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnUUFITyxFQUtBO0FBQUssaUJBQVMsRUFBQywwQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0lBLFFBQVEsQ0FBQ0UsR0FBVCxDQUFhO0FBQUEsWUFBRUMsSUFBRixRQUFFQSxJQUFGO0FBQUEsWUFBT0MsTUFBUCxRQUFPQSxNQUFQO0FBQUEsWUFBY0MsRUFBZCxRQUFjQSxFQUFkO0FBQUEsWUFBaUJDLFFBQWpCLFFBQWlCQSxRQUFqQjtBQUFBLGVBQ1YsTUFBQyxvREFBRDtBQUFhLGFBQUcsRUFBRUQsRUFBbEI7QUFBc0IsZ0JBQU0sRUFBRUQsTUFBOUI7QUFBc0MsY0FBSSxFQUFFRCxJQUE1QztBQUFrRCxrQkFBUSxFQUFFRyxRQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRFU7QUFBQSxPQUFiLENBREosQ0FMQSxFQVdGLE1BQUMsb0VBQUQ7QUFBWSxlQUFPLEVBQUMsSUFBcEI7QUFBeUIsYUFBSyxFQUFDLFNBQS9CO0FBQXlDLGFBQUssRUFBQyxRQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQVhFLENBREo7QUFlSDs7OztFQXpCcUJDLCtDOztBQTRCWFYsMEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1BhcnRuZXIvcGFydG5lcmxpc3QuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQYXJ0bmVyQ2FyZCBmcm9tICcuL3BhcnRuZXJjYXJkJztcbmltcG9ydCBQQVJUTkVSX0RBVEEgZnJvbSAnLi4vRGF0YS9QYXJ0bmVyRGF0YSc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5J1xuXG5jbGFzcyBQYXJ0bmVyTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBwYXJ0bmVycyA6IFBBUlRORVJfREFUQVxuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBwYXJ0bmVycyB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21kOm1sLTEyIG10LTQgdGV4dC1pbmRpZ28tNDAwIHRleHQtY2VudGVyIHRleHQtYm9sZCB0ZXh0LTR4bCBmb250LW1lZGl1bSc+IFxuICAgICBQYXJ0bmVyczwvZGl2PlxuICAgICA8cCBjbGFzc05hbWU9J21kOm14LTI0IHRleHQtY2VudGVyIHRleHQtZ3JheS02MDAgdGV4dC1sZyBtZDp0ZXh0LWJhc2UgZm9udC10aGluJz5cbiAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIExhdWRhbnRpdW0gdG90YW0gb21uaXMgZGlzdGluY3RpbyBiZWF0YWUgc3VudCBhbGlxdWFtIGV4cGxpY2FibywgYXNwZXJpb3JlcyBwZXJzcGljaWF0aXMgcXVvcyBkZWxlbml0aSByZWljaWVuZGlzIHNpdCBtb2xlc3RpYXMgYXJjaGl0ZWN0byBtYWlvcmVzIHZpdGFlIGFjY3VzYW11cy4gSWxsdW0sIHF1b2Qgdm9sdXB0YXRlbS48L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWQ6ZmxleCBtZDptbC02NCBtZDpwbC00Jz5cbiAgICAgICAgICAgICAgIHtwYXJ0bmVycy5tYXAoKHtuYW1lLG51bWJlcixpZCxpbWFnZVVybH0pID0+IChcbiAgICAgICAgICAgICAgICAgICA8UGFydG5lckNhcmQga2V5PXtpZH0gbnVtYmVyPXtudW1iZXJ9IG5hbWU9e25hbWV9IGltYWdlVXJsPXtpbWFnZVVybH0vPlxuICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNVwiIGNvbG9yPVwicHJpbWFyeVwiIGFsaWduPSdjZW50ZXInPnJrZWNAYWlydGVsbWFpbC5pbjwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYXJ0bmVyTGlzdDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Partner/partnerlist.jsx\n");

/***/ })

})