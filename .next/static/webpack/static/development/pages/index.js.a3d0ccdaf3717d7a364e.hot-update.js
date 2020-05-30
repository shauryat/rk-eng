webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Clients/Portfolio.jsx":
/*!******************************************!*\
  !*** ./components/Clients/Portfolio.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _Data_Data_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Data/Data.js */ \"./components/Data/Data.js\");\n/* harmony import */ var _Cards_Projects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Cards/Projects */ \"./components/Cards/Projects.jsx\");\n/* harmony import */ var _portfolio_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../portfolio.styles */ \"./components/portfolio.styles.jsx\");\n/* harmony import */ var _material_ui_icons_Business__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Business */ \"./node_modules/@material-ui/icons/Business.js\");\n/* harmony import */ var _material_ui_icons_Business__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Business__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _images_decorations_blob1__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../images/decorations/blob1 */ \"./components/images/decorations/blob1.js\");\n/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-reveal/Fade */ \"./node_modules/react-reveal/Fade.js\");\n/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _images_folios_projectimage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../images/folios/projectimage */ \"./components/images/folios/projectimage.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-swipeable-views */ \"./node_modules/react-swipeable-views/lib/index.js\");\n/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_swipeable_views__WEBPACK_IMPORTED_MODULE_14__);\n\n\n\n\n\nvar _jsxFileName = \"/Users/dev/Desktop/RK Engineering/components/Clients/Portfolio.jsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\n\n\n\n\nvar Portfolio = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Portfolio, _Component);\n\n  var _super = _createSuper(Portfolio);\n\n  function Portfolio(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Portfolio);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      projects: _Data_Data_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    };\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Portfolio, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var projects = this.state.projects;\n      var styles = {\n        root: {\n          padding: '0 2rem',\n          marginLeft: '-0.9rem'\n        },\n        slideContainer: {\n          marginLeft: '-0.2rem'\n        }\n      };\n      return __jsx(\"div\", {\n        className: \"m-12 md:ml-16 bg-gray-100 \",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 6\n        }\n      }, __jsx(\"div\", {\n        className: \"mb-4 md:mb-4 text-indigo-300 text-bold text-4xl md:text-6xl font-medium\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 6\n        }\n      }, __jsx(_material_ui_icons_Business__WEBPACK_IMPORTED_MODULE_9___default.a, {\n        style: {\n          fontSize: 40\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 6\n        }\n      }), \" Our Customers \"), __jsx(_portfolio_styles__WEBPACK_IMPORTED_MODULE_8__[\"MobileOnly\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 7\n        }\n      }, __jsx(react_swipeable_views__WEBPACK_IMPORTED_MODULE_14___default.a, {\n        style: styles.root,\n        slideStyle: styles.slideContainer,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 7\n        }\n      }, projects.map(function (_ref) {\n        var id = _ref.id,\n            title = _ref.title,\n            description = _ref.description,\n            imageUrl = _ref.imageUrl;\n        return __jsx(_Cards_Projects__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n          key: id,\n          title: title,\n          description: description,\n          imageUrl: imageUrl,\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 47,\n            columnNumber: 23\n          }\n        });\n      }))), __jsx(_portfolio_styles__WEBPACK_IMPORTED_MODULE_8__[\"PreviewContainer\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 13\n        }\n      }, projects.map(function (_ref2) {\n        var id = _ref2.id,\n            title = _ref2.title,\n            description = _ref2.description,\n            imageUrl = _ref2.imageUrl;\n        return __jsx(_Cards_Projects__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n          key: id,\n          title: title,\n          description: description,\n          imageUrl: imageUrl,\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 27\n          }\n        });\n      })));\n    }\n  }]);\n\n  return Portfolio;\n}(react__WEBPACK_IMPORTED_MODULE_5__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Portfolio);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NsaWVudHMvUG9ydGZvbGlvLmpzeD9mMTE2Il0sIm5hbWVzIjpbIlBvcnRmb2xpbyIsInByb3BzIiwic3RhdGUiLCJwcm9qZWN0cyIsIlBPUlRGT0xJT19EQVRBIiwic3R5bGVzIiwicm9vdCIsInBhZGRpbmciLCJtYXJnaW5MZWZ0Iiwic2xpZGVDb250YWluZXIiLCJmb250U2l6ZSIsIm1hcCIsImlkIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImltYWdlVXJsIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOztJQUdNQSxTOzs7OztBQUNOLHFCQUFZQyxLQUFaLEVBQWtCO0FBQUE7O0FBQUE7O0FBQ2QsOEJBQU1BLEtBQU47QUFFQSxVQUFLQyxLQUFMLEdBQWE7QUFDVkMsY0FBUSxFQUFHQyxxREFBY0E7QUFEZixLQUFiO0FBSGM7QUFPakI7Ozs7NkJBRVk7QUFBQTs7QUFBQSxVQUNFRCxRQURGLEdBQ2MsS0FBS0QsS0FEbkIsQ0FDRUMsUUFERjtBQUVMLFVBQU1FLE1BQU0sR0FBRztBQUNYQyxZQUFJLEVBQUU7QUFDSkMsaUJBQU8sRUFBRSxRQURMO0FBRUpDLG9CQUFVLEVBQUc7QUFGVCxTQURLO0FBS1hDLHNCQUFjLEVBQUU7QUFDZEQsb0JBQVUsRUFBQztBQURHO0FBTEwsT0FBZjtBQVlBLGFBQ0g7QUFBSyxpQkFBUyxFQUFDLDRCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FFQTtBQUFLLGlCQUFTLEVBQUMseUVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNBLE1BQUMsa0VBQUQ7QUFBYyxhQUFLLEVBQUU7QUFBRUUsa0JBQVEsRUFBRTtBQUFaLFNBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFEQSxvQkFGQSxFQUlDLE1BQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNBLE1BQUMsNkRBQUQ7QUFBZ0IsYUFBSyxFQUFFTCxNQUFNLENBQUNDLElBQTlCO0FBQW9DLGtCQUFVLEVBQUVELE1BQU0sQ0FBQ0ksY0FBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNRTixRQUFRLENBQUNRLEdBQVQsQ0FBYTtBQUFBLFlBQUVDLEVBQUYsUUFBRUEsRUFBRjtBQUFBLFlBQU1DLEtBQU4sUUFBTUEsS0FBTjtBQUFBLFlBQWFDLFdBQWIsUUFBYUEsV0FBYjtBQUFBLFlBQTBCQyxRQUExQixRQUEwQkEsUUFBMUI7QUFBQSxlQUNMLE1BQUMsdURBQUQ7QUFBYyxhQUFHLEVBQUVILEVBQW5CO0FBQXVCLGVBQUssRUFBRUMsS0FBOUI7QUFBcUMscUJBQVcsRUFBRUMsV0FBbEQ7QUFBK0Qsa0JBQVEsRUFBRUMsUUFBekU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURLO0FBQUEsT0FBYixDQURSLENBREEsQ0FKRCxFQVlPLE1BQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNLWixRQUFRLENBQUNRLEdBQVQsQ0FBYTtBQUFBLFlBQUVDLEVBQUYsU0FBRUEsRUFBRjtBQUFBLFlBQU1DLEtBQU4sU0FBTUEsS0FBTjtBQUFBLFlBQWFDLFdBQWIsU0FBYUEsV0FBYjtBQUFBLFlBQXlCQyxRQUF6QixTQUF5QkEsUUFBekI7QUFBQSxlQUNKLE1BQUMsdURBQUQ7QUFBYyxhQUFHLEVBQUVILEVBQW5CO0FBQXVCLGVBQUssRUFBRUMsS0FBOUI7QUFBcUMscUJBQVcsRUFBRUMsV0FBbEQ7QUFBK0Qsa0JBQVEsRUFBRUMsUUFBekU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURJO0FBQUEsT0FBYixDQURMLENBWlAsQ0FERztBQW1CSDs7OztFQTNDbUJDLCtDOztBQStDVGhCLHdFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9DbGllbnRzL1BvcnRmb2xpby5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBPUlRGT0xJT19EQVRBIGZyb20gJy4uL0RhdGEvRGF0YS5qcyc7XG5pbXBvcnQgUHJvamVjdENhcmRzIGZyb20gJy4uL0NhcmRzL1Byb2plY3RzJztcbmltcG9ydCB7IFByZXZpZXdDb250YWluZXIsIE1vYmlsZU9ubHkgfSBmcm9tICcuLi9wb3J0Zm9saW8uc3R5bGVzJztcbmltcG9ydCBCdXNpbmVzc0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0J1c2luZXNzJztcbmltcG9ydCBCbG9iIGZyb20gJy4uL2ltYWdlcy9kZWNvcmF0aW9ucy9ibG9iMSc7XG5pbXBvcnQgRmFkZSBmcm9tICdyZWFjdC1yZXZlYWwvRmFkZSc7XG5pbXBvcnQgUHJvSW1hZ2UgZnJvbSAnLi4vaW1hZ2VzL2ZvbGlvcy9wcm9qZWN0aW1hZ2UnO1xuXG5pbXBvcnQgeyBQYXBlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcblxuaW1wb3J0IFN3aXBlYWJsZVZpZXdzIGZyb20gJ3JlYWN0LXN3aXBlYWJsZS12aWV3cyc7XG5cblxuY2xhc3MgUG9ydGZvbGlvIGV4dGVuZHMgQ29tcG9uZW50IHtcbmNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgIHByb2plY3RzIDogUE9SVEZPTElPX0RBVEFcblxuICAgIH1cbn1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge3Byb2plY3RzfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGNvbnN0IHN0eWxlcyA9IHtcbiAgICAgICAgICAgIHJvb3Q6IHtcbiAgICAgICAgICAgICAgcGFkZGluZzogJzAgMnJlbScsXG4gICAgICAgICAgICAgIG1hcmdpbkxlZnQgOiAnLTAuOXJlbSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzbGlkZUNvbnRhaW5lcjoge1xuICAgICAgICAgICAgICBtYXJnaW5MZWZ0OictMC4ycmVtJyxcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9LCBcbiAgICAgICAgICBcbiAgICAgICAgICB9O1xuICAgICAgICAgIFxuICAgICAgICByZXR1cm4gKFxuICAgICA8ZGl2IGNsYXNzTmFtZT0nbS0xMiBtZDptbC0xNiBiZy1ncmF5LTEwMCAnPlxuXG4gICAgIDxkaXYgY2xhc3NOYW1lPSdtYi00IG1kOm1iLTQgdGV4dC1pbmRpZ28tMzAwIHRleHQtYm9sZCB0ZXh0LTR4bCBtZDp0ZXh0LTZ4bCBmb250LW1lZGl1bSc+IFxuICAgICA8QnVzaW5lc3NJY29uIHN0eWxlPXt7IGZvbnRTaXplOiA0MCB9fS8+IE91ciBDdXN0b21lcnMgPC9kaXY+XG4gICAgICA8TW9iaWxlT25seT5cbiAgICAgIDxTd2lwZWFibGVWaWV3cyBzdHlsZT17c3R5bGVzLnJvb3R9IHNsaWRlU3R5bGU9e3N0eWxlcy5zbGlkZUNvbnRhaW5lcn0+XG4gICAgICAgICAgICAge3Byb2plY3RzLm1hcCgoe2lkLCB0aXRsZSwgZGVzY3JpcHRpb24sIGltYWdlVXJsfSk9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPFByb2plY3RDYXJkcyBrZXk9e2lkfSB0aXRsZT17dGl0bGV9IGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn0gaW1hZ2VVcmw9e2ltYWdlVXJsfS8+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9Td2lwZWFibGVWaWV3cz5cbiAgICAgIDwvTW9iaWxlT25seT5cblxuICAgICAgICAgICAgPFByZXZpZXdDb250YWluZXI+XG4gICAgICAgICAgICAgICAge3Byb2plY3RzLm1hcCgoe2lkLCB0aXRsZSwgZGVzY3JpcHRpb24saW1hZ2VVcmx9KT0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2plY3RDYXJkcyBrZXk9e2lkfSB0aXRsZT17dGl0bGV9IGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn0gaW1hZ2VVcmw9e2ltYWdlVXJsfS8+ICkpfVxuICAgICAgICAgICAgPC9QcmV2aWV3Q29udGFpbmVyPiAgICAgIFxuICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFBvcnRmb2xpbzsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Clients/Portfolio.jsx\n");

/***/ })

})