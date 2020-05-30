webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Clients/Portfolio.jsx":
/*!******************************************!*\
  !*** ./components/Clients/Portfolio.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _Data_Data_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Data/Data.js */ \"./components/Data/Data.js\");\n/* harmony import */ var _Cards_Projects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Cards/Projects */ \"./components/Cards/Projects.jsx\");\n/* harmony import */ var _Cards_CustomerMCards__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Cards/CustomerMCards */ \"./components/Cards/CustomerMCards.jsx\");\n/* harmony import */ var _portfolio_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../portfolio.styles */ \"./components/portfolio.styles.jsx\");\n/* harmony import */ var _material_ui_icons_Business__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Business */ \"./node_modules/@material-ui/icons/Business.js\");\n/* harmony import */ var _material_ui_icons_Business__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Business__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _images_decorations_blob1__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../images/decorations/blob1 */ \"./components/images/decorations/blob1.js\");\n/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-reveal/Fade */ \"./node_modules/react-reveal/Fade.js\");\n/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _images_folios_projectimage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../images/folios/projectimage */ \"./components/images/folios/projectimage.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-swipeable-views */ \"./node_modules/react-swipeable-views/lib/index.js\");\n/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_swipeable_views__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _iconcircele_jsx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../iconcircele.jsx */ \"./components/iconcircele.jsx\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/dev/Desktop/RK Engineering/components/Clients/Portfolio.jsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Portfolio = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Portfolio, _Component);\n\n  var _super = _createSuper(Portfolio);\n\n  function Portfolio(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Portfolio);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      projects: _Data_Data_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    };\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Portfolio, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var projects = this.state.projects;\n      var styles = {\n        root: {\n          padding: '0 2rem',\n          marginLeft: '-0.9rem'\n        },\n        slideContainer: {\n          marginLeft: '-0.2rem'\n        }\n      };\n      return __jsx(\"div\", {\n        className: \"m-12 md:ml-16\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 6\n        }\n      }, __jsx(\"div\", {\n        className: \"mb-4 md:mb-4 text-indigo-500 text-bold text-4xl md:text-6xl font-medium\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 6\n        }\n      }, __jsx(_iconcircele_jsx__WEBPACK_IMPORTED_MODULE_16__[\"default\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 4\n        }\n      }, \"  \", __jsx(_material_ui_icons_Business__WEBPACK_IMPORTED_MODULE_10___default.a, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 18\n        }\n      })), \"Our Customers \"), __jsx(_portfolio_styles__WEBPACK_IMPORTED_MODULE_9__[\"MobileOnly\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 7\n        }\n      }, __jsx(react_swipeable_views__WEBPACK_IMPORTED_MODULE_15___default.a, {\n        style: styles.root,\n        slideStyle: styles.slideContainer,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 7\n        }\n      }, projects.map(function (_ref) {\n        var id = _ref.id,\n            title = _ref.title,\n            description = _ref.description,\n            imageUrl = _ref.imageUrl;\n        return __jsx(_Cards_CustomerMCards__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n          key: id,\n          title: title,\n          description: description,\n          imageUrl: imageUrl,\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 23\n          }\n        });\n      }))), __jsx(_portfolio_styles__WEBPACK_IMPORTED_MODULE_9__[\"PreviewContainer\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 13\n        }\n      }, projects.map(function (_ref2) {\n        var id = _ref2.id,\n            title = _ref2.title,\n            description = _ref2.description,\n            imageUrl = _ref2.imageUrl;\n        return __jsx(_Cards_Projects__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n          key: id,\n          title: title,\n          description: description,\n          imageUrl: imageUrl,\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 27\n          }\n        });\n      })));\n    }\n  }]);\n\n  return Portfolio;\n}(react__WEBPACK_IMPORTED_MODULE_5__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Portfolio);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NsaWVudHMvUG9ydGZvbGlvLmpzeD9mMTE2Il0sIm5hbWVzIjpbIlBvcnRmb2xpbyIsInByb3BzIiwic3RhdGUiLCJwcm9qZWN0cyIsIlBPUlRGT0xJT19EQVRBIiwic3R5bGVzIiwicm9vdCIsInBhZGRpbmciLCJtYXJnaW5MZWZ0Iiwic2xpZGVDb250YWluZXIiLCJtYXAiLCJpZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZVVybCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTs7SUFHTUEsUzs7Ozs7QUFDTixxQkFBWUMsS0FBWixFQUFrQjtBQUFBOztBQUFBOztBQUNkLDhCQUFNQSxLQUFOO0FBRUEsVUFBS0MsS0FBTCxHQUFhO0FBQ1ZDLGNBQVEsRUFBR0MscURBQWNBO0FBRGYsS0FBYjtBQUhjO0FBT2pCOzs7OzZCQUVZO0FBQUE7O0FBQUEsVUFDRUQsUUFERixHQUNjLEtBQUtELEtBRG5CLENBQ0VDLFFBREY7QUFFTCxVQUFNRSxNQUFNLEdBQUc7QUFDWEMsWUFBSSxFQUFFO0FBQ0pDLGlCQUFPLEVBQUUsUUFETDtBQUVKQyxvQkFBVSxFQUFHO0FBRlQsU0FESztBQUtYQyxzQkFBYyxFQUFFO0FBQ2RELG9CQUFVLEVBQUM7QUFERztBQUxMLE9BQWY7QUFZQSxhQUNIO0FBQUssaUJBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FFQTtBQUFLLGlCQUFTLEVBQUMseUVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNGLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFjLE1BQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUFkLENBREUsbUJBRkEsRUFNQyxNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDQSxNQUFDLDZEQUFEO0FBQWdCLGFBQUssRUFBRUgsTUFBTSxDQUFDQyxJQUE5QjtBQUFvQyxrQkFBVSxFQUFFRCxNQUFNLENBQUNJLGNBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDUU4sUUFBUSxDQUFDTyxHQUFULENBQWE7QUFBQSxZQUFFQyxFQUFGLFFBQUVBLEVBQUY7QUFBQSxZQUFNQyxLQUFOLFFBQU1BLEtBQU47QUFBQSxZQUFhQyxXQUFiLFFBQWFBLFdBQWI7QUFBQSxZQUEwQkMsUUFBMUIsUUFBMEJBLFFBQTFCO0FBQUEsZUFDTCxNQUFDLDZEQUFEO0FBQWUsYUFBRyxFQUFFSCxFQUFwQjtBQUF3QixlQUFLLEVBQUVDLEtBQS9CO0FBQXNDLHFCQUFXLEVBQUVDLFdBQW5EO0FBQWdFLGtCQUFRLEVBQUVDLFFBQTFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESztBQUFBLE9BQWIsQ0FEUixDQURBLENBTkQsRUFjTyxNQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDS1gsUUFBUSxDQUFDTyxHQUFULENBQWE7QUFBQSxZQUFFQyxFQUFGLFNBQUVBLEVBQUY7QUFBQSxZQUFNQyxLQUFOLFNBQU1BLEtBQU47QUFBQSxZQUFhQyxXQUFiLFNBQWFBLFdBQWI7QUFBQSxZQUF5QkMsUUFBekIsU0FBeUJBLFFBQXpCO0FBQUEsZUFDSixNQUFDLHVEQUFEO0FBQWMsYUFBRyxFQUFFSCxFQUFuQjtBQUF1QixlQUFLLEVBQUVDLEtBQTlCO0FBQXFDLHFCQUFXLEVBQUVDLFdBQWxEO0FBQStELGtCQUFRLEVBQUVDLFFBQXpFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESTtBQUFBLE9BQWIsQ0FETCxDQWRQLENBREc7QUFxQkg7Ozs7RUE3Q21CQywrQzs7QUFpRFRmLHdFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9DbGllbnRzL1BvcnRmb2xpby5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBPUlRGT0xJT19EQVRBIGZyb20gJy4uL0RhdGEvRGF0YS5qcyc7XG5pbXBvcnQgUHJvamVjdENhcmRzIGZyb20gJy4uL0NhcmRzL1Byb2plY3RzJztcbmltcG9ydCBQcm9qZWN0Q2FyZHNNIGZyb20gJy4uL0NhcmRzL0N1c3RvbWVyTUNhcmRzJztcbmltcG9ydCB7IFByZXZpZXdDb250YWluZXIsIE1vYmlsZU9ubHkgfSBmcm9tICcuLi9wb3J0Zm9saW8uc3R5bGVzJztcbmltcG9ydCBCdXNpbmVzc0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0J1c2luZXNzJztcbmltcG9ydCBCbG9iIGZyb20gJy4uL2ltYWdlcy9kZWNvcmF0aW9ucy9ibG9iMSc7XG5pbXBvcnQgRmFkZSBmcm9tICdyZWFjdC1yZXZlYWwvRmFkZSc7XG5pbXBvcnQgUHJvSW1hZ2UgZnJvbSAnLi4vaW1hZ2VzL2ZvbGlvcy9wcm9qZWN0aW1hZ2UnO1xuXG5pbXBvcnQgeyBQYXBlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcblxuaW1wb3J0IFN3aXBlYWJsZVZpZXdzIGZyb20gJ3JlYWN0LXN3aXBlYWJsZS12aWV3cyc7XG5pbXBvcnQgQ2lyY2xlSWNvbiBmcm9tICcuLi9pY29uY2lyY2VsZS5qc3gnO1xuXG5cbmNsYXNzIFBvcnRmb2xpbyBleHRlbmRzIENvbXBvbmVudCB7XG5jb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICBwcm9qZWN0cyA6IFBPUlRGT0xJT19EQVRBXG5cbiAgICB9XG59XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHtwcm9qZWN0c30gPSB0aGlzLnN0YXRlO1xuICAgICAgICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICAgICAgICByb290OiB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6ICcwIDJyZW0nLFxuICAgICAgICAgICAgICBtYXJnaW5MZWZ0IDogJy0wLjlyZW0nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2xpZGVDb250YWluZXI6IHtcbiAgICAgICAgICAgICAgbWFyZ2luTGVmdDonLTAuMnJlbScsXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgXG4gICAgICAgICAgfTtcbiAgICAgICAgICBcbiAgICAgICAgcmV0dXJuIChcbiAgICAgPGRpdiBjbGFzc05hbWU9J20tMTIgbWQ6bWwtMTYnPlxuXG4gICAgIDxkaXYgY2xhc3NOYW1lPSdtYi00IG1kOm1iLTQgdGV4dC1pbmRpZ28tNTAwIHRleHQtYm9sZCB0ZXh0LTR4bCBtZDp0ZXh0LTZ4bCBmb250LW1lZGl1bSc+IFxuICAgPENpcmNsZUljb24+ICA8QnVzaW5lc3NJY29uLz4gXG4gICA8L0NpcmNsZUljb24+XG4gICBPdXIgQ3VzdG9tZXJzIDwvZGl2PlxuICAgICAgPE1vYmlsZU9ubHk+XG4gICAgICA8U3dpcGVhYmxlVmlld3Mgc3R5bGU9e3N0eWxlcy5yb290fSBzbGlkZVN0eWxlPXtzdHlsZXMuc2xpZGVDb250YWluZXJ9PlxuICAgICAgICAgICAgIHtwcm9qZWN0cy5tYXAoKHtpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBpbWFnZVVybH0pPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxQcm9qZWN0Q2FyZHNNIGtleT17aWR9IHRpdGxlPXt0aXRsZX0gZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufSBpbWFnZVVybD17aW1hZ2VVcmx9Lz5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L1N3aXBlYWJsZVZpZXdzPlxuICAgICAgPC9Nb2JpbGVPbmx5PlxuXG4gICAgICAgICAgICA8UHJldmlld0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICB7cHJvamVjdHMubWFwKCh7aWQsIHRpdGxlLCBkZXNjcmlwdGlvbixpbWFnZVVybH0pPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvamVjdENhcmRzIGtleT17aWR9IHRpdGxlPXt0aXRsZX0gZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufSBpbWFnZVVybD17aW1hZ2VVcmx9Lz4gKSl9XG4gICAgICAgICAgICA8L1ByZXZpZXdDb250YWluZXI+ICAgICAgXG4gICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgUG9ydGZvbGlvOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Clients/Portfolio.jsx\n");

/***/ })

})