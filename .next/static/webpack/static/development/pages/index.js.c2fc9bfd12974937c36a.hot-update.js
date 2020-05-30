webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Address/AddressLayout.jsx":
/*!**********************************************!*\
  !*** ./components/Address/AddressLayout.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _Cards_AddressCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Cards/AddressCard */ \"./components/Cards/AddressCard.jsx\");\n/* harmony import */ var _Data_AddressData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Data/AddressData */ \"./components/Data/AddressData.js\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/dev/Desktop/RK Engineering/components/Address/AddressLayout.jsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\nvar AddressList = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(AddressList, _Component);\n\n  var _super = _createSuper(AddressList);\n\n  function AddressList(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, AddressList);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      addresses: _Data_AddressData__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n    };\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(AddressList, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var addresses = this.state.addresses;\n      return __jsx(\"div\", {\n        className: \"md:flex md:ml-64 md:pl-16\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 16,\n          columnNumber: 13\n        }\n      }, addresses.map(function (_ref) {\n        var name = _ref.name,\n            address = _ref.address,\n            imageUrl = _ref.imageUrl,\n            id = _ref.id;\n        return __jsx(\"div\", {\n          className: \"md:mr-4 mb-4 ml-4\",\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 18,\n            columnNumber: 20\n          }\n        }, __jsx(_Cards_AddressCard__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          key: id,\n          address: address,\n          name: name,\n          imageUrl: imageUrl,\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 19,\n            columnNumber: 20\n          }\n        }));\n      }));\n    }\n  }]);\n\n  return AddressList;\n}(react__WEBPACK_IMPORTED_MODULE_5__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddressList);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FkZHJlc3MvQWRkcmVzc0xheW91dC5qc3g/ZWY0MiJdLCJuYW1lcyI6WyJBZGRyZXNzTGlzdCIsInByb3BzIiwic3RhdGUiLCJhZGRyZXNzZXMiLCJBRERSRVNTX0RBVEEiLCJtYXAiLCJuYW1lIiwiYWRkcmVzcyIsImltYWdlVXJsIiwiaWQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0lBRU1BLFc7Ozs7O0FBQ0YsdUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUVBLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxlQUFTLEVBQUdDLHlEQUFZQTtBQURmLEtBQWI7QUFIZTtBQU1sQjs7Ozs2QkFDUTtBQUFBOztBQUFBLFVBQ0dELFNBREgsR0FDaUIsS0FBS0QsS0FEdEIsQ0FDR0MsU0FESDtBQUVMLGFBQ0k7QUFBSyxpQkFBUyxFQUFDLDJCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSUEsU0FBUyxDQUFDRSxHQUFWLENBQWM7QUFBQSxZQUFFQyxJQUFGLFFBQUVBLElBQUY7QUFBQSxZQUFPQyxPQUFQLFFBQU9BLE9BQVA7QUFBQSxZQUFlQyxRQUFmLFFBQWVBLFFBQWY7QUFBQSxZQUF3QkMsRUFBeEIsUUFBd0JBLEVBQXhCO0FBQUEsZUFDWDtBQUFLLG1CQUFTLEVBQUMsbUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNBLE1BQUMsMERBQUQ7QUFBYSxhQUFHLEVBQUVBLEVBQWxCO0FBQXNCLGlCQUFPLEVBQUVGLE9BQS9CO0FBQXdDLGNBQUksRUFBRUQsSUFBOUM7QUFBb0Qsa0JBQVEsRUFBRUUsUUFBOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURBLENBRFc7QUFBQSxPQUFkLENBREosQ0FESjtBQVVIOzs7O0VBcEJxQkUsK0M7O0FBdUJYViwwRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQWRkcmVzcy9BZGRyZXNzTGF5b3V0LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQWRkcmVzc0NhcmQgZnJvbSAnLi4vQ2FyZHMvQWRkcmVzc0NhcmQnO1xuaW1wb3J0IEFERFJFU1NfREFUQSBmcm9tICcuLi9EYXRhL0FkZHJlc3NEYXRhJztcblxuY2xhc3MgQWRkcmVzc0xpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgYWRkcmVzc2VzIDogQUREUkVTU19EQVRBXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGFkZHJlc3NlcyB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZDpmbGV4IG1kOm1sLTY0IG1kOnBsLTE2Jz5cbiAgICAgICAgICAgICAgIHthZGRyZXNzZXMubWFwKCh7bmFtZSxhZGRyZXNzLGltYWdlVXJsLGlkfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZDptci00IG1iLTQgbWwtNCc+XG4gICAgICAgICAgICAgICAgICAgPEFkZHJlc3NDYXJkIGtleT17aWR9IGFkZHJlc3M9e2FkZHJlc3N9IG5hbWU9e25hbWV9IGltYWdlVXJsPXtpbWFnZVVybH0vPlxuICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBZGRyZXNzTGlzdDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Address/AddressLayout.jsx\n");

/***/ })

})