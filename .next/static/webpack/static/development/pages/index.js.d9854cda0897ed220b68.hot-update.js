webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Address/AddressLayout.jsx":
/*!**********************************************!*\
  !*** ./components/Address/AddressLayout.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _Cards_AddressCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Cards/AddressCard */ \"./components/Cards/AddressCard.jsx\");\n/* harmony import */ var _Data_AddressData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Data/AddressData */ \"./components/Data/AddressData.js\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/index.js\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/dev/Desktop/RK Engineering/components/Address/AddressLayout.jsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\nvar AddressList = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(AddressList, _Component);\n\n  var _super = _createSuper(AddressList);\n\n  function AddressList(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, AddressList);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      addresses: _Data_AddressData__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n    };\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(AddressList, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var addresses = this.state.addresses;\n      return __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 17,\n          columnNumber: 13\n        }\n      }, __jsx(\"div\", {\n        className: \"mb-2 md:mb-8 text-indigo-700 md:ml-4 text-4xl md:text-6xl font-medium\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 13\n        }\n      }, \"Our Offices \"), __jsx(\"div\", {\n        className: \"md:flex md:pl-4\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 5\n        }\n      }, addresses.map(function (_ref) {\n        var name = _ref.name,\n            address = _ref.address,\n            imageUrl = _ref.imageUrl,\n            id = _ref.id;\n        return __jsx(\"div\", {\n          className: \"md:mr-4 mb-4\",\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 22,\n            columnNumber: 20\n          }\n        }, __jsx(_Cards_AddressCard__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          key: id,\n          address: address,\n          name: name,\n          imageUrl: imageUrl,\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 23,\n            columnNumber: 20\n          }\n        }));\n      })));\n    }\n  }]);\n\n  return AddressList;\n}(react__WEBPACK_IMPORTED_MODULE_5__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddressList);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FkZHJlc3MvQWRkcmVzc0xheW91dC5qc3g/ZWY0MiJdLCJuYW1lcyI6WyJBZGRyZXNzTGlzdCIsInByb3BzIiwic3RhdGUiLCJhZGRyZXNzZXMiLCJBRERSRVNTX0RBVEEiLCJtYXAiLCJuYW1lIiwiYWRkcmVzcyIsImltYWdlVXJsIiwiaWQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0lBRU1BLFc7Ozs7O0FBQ0YsdUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUVBLFVBQUtDLEtBQUwsR0FBYTtBQUNUQyxlQUFTLEVBQUdDLHlEQUFZQTtBQURmLEtBQWI7QUFIZTtBQU1sQjs7Ozs2QkFDUTtBQUFBOztBQUFBLFVBQ0dELFNBREgsR0FDaUIsS0FBS0QsS0FEdEIsQ0FDR0MsU0FESDtBQUVMLGFBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNBO0FBQUssaUJBQVMsRUFBQyx1RUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURBLEVBR1I7QUFBSyxpQkFBUyxFQUFDLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDWUEsU0FBUyxDQUFDRSxHQUFWLENBQWM7QUFBQSxZQUFFQyxJQUFGLFFBQUVBLElBQUY7QUFBQSxZQUFPQyxPQUFQLFFBQU9BLE9BQVA7QUFBQSxZQUFlQyxRQUFmLFFBQWVBLFFBQWY7QUFBQSxZQUF3QkMsRUFBeEIsUUFBd0JBLEVBQXhCO0FBQUEsZUFDWDtBQUFLLG1CQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQ0EsTUFBQywwREFBRDtBQUFhLGFBQUcsRUFBRUEsRUFBbEI7QUFBc0IsaUJBQU8sRUFBRUYsT0FBL0I7QUFBd0MsY0FBSSxFQUFFRCxJQUE5QztBQUFvRCxrQkFBUSxFQUFFRSxRQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREEsQ0FEVztBQUFBLE9BQWQsQ0FEWixDQUhRLENBREo7QUFjSDs7OztFQXhCcUJFLCtDOztBQTJCWFYsMEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0FkZHJlc3MvQWRkcmVzc0xheW91dC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFkZHJlc3NDYXJkIGZyb20gJy4uL0NhcmRzL0FkZHJlc3NDYXJkJztcbmltcG9ydCBBRERSRVNTX0RBVEEgZnJvbSAnLi4vRGF0YS9BZGRyZXNzRGF0YSc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5J1xuXG5jbGFzcyBBZGRyZXNzTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBhZGRyZXNzZXMgOiBBRERSRVNTX0RBVEFcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgYWRkcmVzc2VzIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYi0yIG1kOm1iLTggdGV4dC1pbmRpZ28tNzAwIG1kOm1sLTQgdGV4dC00eGwgbWQ6dGV4dC02eGwgZm9udC1tZWRpdW0nPiBcbiAgICAgICAgICAgICAgICAgICAgICAgT3VyIE9mZmljZXMgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9J21kOmZsZXggbWQ6cGwtNCc+XG4gICAgICAgICAgICAgICB7YWRkcmVzc2VzLm1hcCgoe25hbWUsYWRkcmVzcyxpbWFnZVVybCxpZH0pID0+IChcbiAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWQ6bXItNCBtYi00Jz5cbiAgICAgICAgICAgICAgICAgICA8QWRkcmVzc0NhcmQga2V5PXtpZH0gYWRkcmVzcz17YWRkcmVzc30gbmFtZT17bmFtZX0gaW1hZ2VVcmw9e2ltYWdlVXJsfS8+XG4gICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWRkcmVzc0xpc3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Address/AddressLayout.jsx\n");

/***/ })

})