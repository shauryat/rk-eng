webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Clients/Portfolio.jsx":
/*!******************************************!*\
  !*** ./components/Clients/Portfolio.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _Data_Data_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Data/Data.js */ \"./components/Data/Data.js\");\n/* harmony import */ var _Cards_Projects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Cards/Projects */ \"./components/Cards/Projects.jsx\");\n/* harmony import */ var _portfolio_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../portfolio.styles */ \"./components/portfolio.styles.jsx\");\n/* harmony import */ var _material_ui_icons_BusinessOutlined__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/BusinessOutlined */ \"./node_modules/@material-ui/icons/BusinessOutlined.js\");\n/* harmony import */ var _material_ui_icons_BusinessOutlined__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_BusinessOutlined__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _images_decorations_blob1__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../images/decorations/blob1 */ \"./components/images/decorations/blob1.js\");\n/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-reveal/Fade */ \"./node_modules/react-reveal/Fade.js\");\n/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _images_folios_projectimage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../images/folios/projectimage */ \"./components/images/folios/projectimage.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-swipeable-views */ \"./node_modules/react-swipeable-views/lib/index.js\");\n/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_swipeable_views__WEBPACK_IMPORTED_MODULE_14__);\n\n\n\n\n\nvar _jsxFileName = \"/Users/dev/Desktop/RK Engineering/components/Clients/Portfolio.jsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\n\n\n\n\nvar Portfolio = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Portfolio, _Component);\n\n  var _super = _createSuper(Portfolio);\n\n  function Portfolio(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Portfolio);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      projects: _Data_Data_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    };\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Portfolio, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var projects = this.state.projects;\n      var styles = {\n        root: {\n          padding: '0 2rem',\n          marginLeft: '-0.9rem'\n        },\n        slideContainer: {\n          marginLeft: '-0.2rem'\n        }\n      };\n      return __jsx(\"div\", {\n        className: \"m-12 md:ml-16\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 6\n        }\n      }, __jsx(\"div\", {\n        className: \"mb-4 md:mb-8 text-indigo-700 text-bold text-center text-4xl md:text-6xl font-medium\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 6\n        }\n      }, __jsx(_material_ui_icons_BusinessOutlined__WEBPACK_IMPORTED_MODULE_9___default.a, {\n        style: {\n          fontSize: 40\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 6\n        }\n      }), \" Our Clients \"), __jsx(_portfolio_styles__WEBPACK_IMPORTED_MODULE_8__[\"MobileOnly\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 7\n        }\n      }, __jsx(react_swipeable_views__WEBPACK_IMPORTED_MODULE_14___default.a, {\n        style: styles.root,\n        slideStyle: styles.slideContainer,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 7\n        }\n      }, projects.map(function (_ref) {\n        var id = _ref.id,\n            title = _ref.title,\n            description = _ref.description,\n            imageUrl = _ref.imageUrl;\n        return __jsx(_Cards_Projects__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n          key: id,\n          title: title,\n          description: description,\n          imageUrl: imageUrl,\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 47,\n            columnNumber: 23\n          }\n        });\n      }))), __jsx(_portfolio_styles__WEBPACK_IMPORTED_MODULE_8__[\"PreviewContainer\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 13\n        }\n      }, projects.map(function (_ref2) {\n        var id = _ref2.id,\n            title = _ref2.title,\n            description = _ref2.description,\n            imageUrl = _ref2.imageUrl;\n        return __jsx(_Cards_Projects__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n          key: id,\n          title: title,\n          description: description,\n          imageUrl: imageUrl,\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 27\n          }\n        });\n      })));\n    }\n  }]);\n\n  return Portfolio;\n}(react__WEBPACK_IMPORTED_MODULE_5__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Portfolio);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NsaWVudHMvUG9ydGZvbGlvLmpzeD9mMTE2Il0sIm5hbWVzIjpbIlBvcnRmb2xpbyIsInByb3BzIiwic3RhdGUiLCJwcm9qZWN0cyIsIlBPUlRGT0xJT19EQVRBIiwic3R5bGVzIiwicm9vdCIsInBhZGRpbmciLCJtYXJnaW5MZWZ0Iiwic2xpZGVDb250YWluZXIiLCJmb250U2l6ZSIsIm1hcCIsImlkIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImltYWdlVXJsIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOztJQUdNQSxTOzs7OztBQUNOLHFCQUFZQyxLQUFaLEVBQWtCO0FBQUE7O0FBQUE7O0FBQ2QsOEJBQU1BLEtBQU47QUFFQSxVQUFLQyxLQUFMLEdBQWE7QUFDVkMsY0FBUSxFQUFHQyxxREFBY0E7QUFEZixLQUFiO0FBSGM7QUFPakI7Ozs7NkJBRVk7QUFBQTs7QUFBQSxVQUNFRCxRQURGLEdBQ2MsS0FBS0QsS0FEbkIsQ0FDRUMsUUFERjtBQUVMLFVBQU1FLE1BQU0sR0FBRztBQUNYQyxZQUFJLEVBQUU7QUFDSkMsaUJBQU8sRUFBRSxRQURMO0FBRUpDLG9CQUFVLEVBQUc7QUFGVCxTQURLO0FBS1hDLHNCQUFjLEVBQUU7QUFDZEQsb0JBQVUsRUFBQztBQURHO0FBTEwsT0FBZjtBQVlBLGFBQ0g7QUFBSyxpQkFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUVBO0FBQUssaUJBQVMsRUFBQyxxRkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0EsTUFBQywwRUFBRDtBQUFjLGFBQUssRUFBRTtBQUFFRSxrQkFBUSxFQUFFO0FBQVosU0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURBLGtCQUZBLEVBSUMsTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0EsTUFBQyw2REFBRDtBQUFnQixhQUFLLEVBQUVMLE1BQU0sQ0FBQ0MsSUFBOUI7QUFBb0Msa0JBQVUsRUFBRUQsTUFBTSxDQUFDSSxjQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ1FOLFFBQVEsQ0FBQ1EsR0FBVCxDQUFhO0FBQUEsWUFBRUMsRUFBRixRQUFFQSxFQUFGO0FBQUEsWUFBTUMsS0FBTixRQUFNQSxLQUFOO0FBQUEsWUFBYUMsV0FBYixRQUFhQSxXQUFiO0FBQUEsWUFBMEJDLFFBQTFCLFFBQTBCQSxRQUExQjtBQUFBLGVBQ0wsTUFBQyx1REFBRDtBQUFjLGFBQUcsRUFBRUgsRUFBbkI7QUFBdUIsZUFBSyxFQUFFQyxLQUE5QjtBQUFxQyxxQkFBVyxFQUFFQyxXQUFsRDtBQUErRCxrQkFBUSxFQUFFQyxRQUF6RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREs7QUFBQSxPQUFiLENBRFIsQ0FEQSxDQUpELEVBWU8sTUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0taLFFBQVEsQ0FBQ1EsR0FBVCxDQUFhO0FBQUEsWUFBRUMsRUFBRixTQUFFQSxFQUFGO0FBQUEsWUFBTUMsS0FBTixTQUFNQSxLQUFOO0FBQUEsWUFBYUMsV0FBYixTQUFhQSxXQUFiO0FBQUEsWUFBeUJDLFFBQXpCLFNBQXlCQSxRQUF6QjtBQUFBLGVBQ0osTUFBQyx1REFBRDtBQUFjLGFBQUcsRUFBRUgsRUFBbkI7QUFBdUIsZUFBSyxFQUFFQyxLQUE5QjtBQUFxQyxxQkFBVyxFQUFFQyxXQUFsRDtBQUErRCxrQkFBUSxFQUFFQyxRQUF6RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREk7QUFBQSxPQUFiLENBREwsQ0FaUCxDQURHO0FBbUJIOzs7O0VBM0NtQkMsK0M7O0FBK0NUaEIsd0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NsaWVudHMvUG9ydGZvbGlvLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUE9SVEZPTElPX0RBVEEgZnJvbSAnLi4vRGF0YS9EYXRhLmpzJztcbmltcG9ydCBQcm9qZWN0Q2FyZHMgZnJvbSAnLi4vQ2FyZHMvUHJvamVjdHMnO1xuaW1wb3J0IHsgUHJldmlld0NvbnRhaW5lciwgTW9iaWxlT25seSB9IGZyb20gJy4uL3BvcnRmb2xpby5zdHlsZXMnO1xuaW1wb3J0IEJ1c2luZXNzSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQnVzaW5lc3NPdXRsaW5lZCc7XG5pbXBvcnQgQmxvYiBmcm9tICcuLi9pbWFnZXMvZGVjb3JhdGlvbnMvYmxvYjEnO1xuaW1wb3J0IEZhZGUgZnJvbSAncmVhY3QtcmV2ZWFsL0ZhZGUnO1xuaW1wb3J0IFByb0ltYWdlIGZyb20gJy4uL2ltYWdlcy9mb2xpb3MvcHJvamVjdGltYWdlJztcblxuaW1wb3J0IHsgUGFwZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5cbmltcG9ydCBTd2lwZWFibGVWaWV3cyBmcm9tICdyZWFjdC1zd2lwZWFibGUtdmlld3MnO1xuXG5cbmNsYXNzIFBvcnRmb2xpbyBleHRlbmRzIENvbXBvbmVudCB7XG5jb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICBwcm9qZWN0cyA6IFBPUlRGT0xJT19EQVRBXG5cbiAgICB9XG59XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHtwcm9qZWN0c30gPSB0aGlzLnN0YXRlO1xuICAgICAgICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICAgICAgICByb290OiB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6ICcwIDJyZW0nLFxuICAgICAgICAgICAgICBtYXJnaW5MZWZ0IDogJy0wLjlyZW0nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2xpZGVDb250YWluZXI6IHtcbiAgICAgICAgICAgICAgbWFyZ2luTGVmdDonLTAuMnJlbScsXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgXG4gICAgICAgICAgfTtcbiAgICAgICAgICBcbiAgICAgICAgcmV0dXJuIChcbiAgICAgPGRpdiBjbGFzc05hbWU9J20tMTIgbWQ6bWwtMTYnPlxuXG4gICAgIDxkaXYgY2xhc3NOYW1lPSdtYi00IG1kOm1iLTggdGV4dC1pbmRpZ28tNzAwIHRleHQtYm9sZCB0ZXh0LWNlbnRlciB0ZXh0LTR4bCBtZDp0ZXh0LTZ4bCBmb250LW1lZGl1bSc+IFxuICAgICA8QnVzaW5lc3NJY29uIHN0eWxlPXt7IGZvbnRTaXplOiA0MCB9fS8+IE91ciBDbGllbnRzIDwvZGl2PlxuICAgICAgPE1vYmlsZU9ubHk+XG4gICAgICA8U3dpcGVhYmxlVmlld3Mgc3R5bGU9e3N0eWxlcy5yb290fSBzbGlkZVN0eWxlPXtzdHlsZXMuc2xpZGVDb250YWluZXJ9PlxuICAgICAgICAgICAgIHtwcm9qZWN0cy5tYXAoKHtpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBpbWFnZVVybH0pPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxQcm9qZWN0Q2FyZHMga2V5PXtpZH0gdGl0bGU9e3RpdGxlfSBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259IGltYWdlVXJsPXtpbWFnZVVybH0vPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvU3dpcGVhYmxlVmlld3M+XG4gICAgICA8L01vYmlsZU9ubHk+XG5cbiAgICAgICAgICAgIDxQcmV2aWV3Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgIHtwcm9qZWN0cy5tYXAoKHtpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLGltYWdlVXJsfSk9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9qZWN0Q2FyZHMga2V5PXtpZH0gdGl0bGU9e3RpdGxlfSBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259IGltYWdlVXJsPXtpbWFnZVVybH0vPiApKX1cbiAgICAgICAgICAgIDwvUHJldmlld0NvbnRhaW5lcj4gICAgICBcbiAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBQb3J0Zm9saW87Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Clients/Portfolio.jsx\n");

/***/ }),

/***/ "./node_modules/@material-ui/icons/Business.js":
false,

/***/ "./node_modules/@material-ui/icons/BusinessOutlined.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/icons/BusinessOutlined.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nvar _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ \"./node_modules/@material-ui/icons/utils/createSvgIcon.js\"));\n\nvar _default = (0, _createSvgIcon.default)(_react.default.createElement(\"path\", {\n  d: \"M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z\"\n}), 'BusinessOutlined');\n\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2ljb25zL0J1c2luZXNzT3V0bGluZWQuanM/YmQxZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBYTs7QUFFYiw2QkFBNkIsbUJBQU8sQ0FBQyxvSEFBOEM7O0FBRW5GO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUEsb0NBQW9DLG1CQUFPLENBQUMsNENBQU87O0FBRW5ELDRDQUE0QyxtQkFBTyxDQUFDLHVGQUF1Qjs7QUFFM0U7QUFDQTtBQUNBLENBQUM7O0FBRUQiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2ljb25zL0J1c2luZXNzT3V0bGluZWQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfY3JlYXRlU3ZnSWNvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvY3JlYXRlU3ZnSWNvblwiKSk7XG5cbnZhciBfZGVmYXVsdCA9ICgwLCBfY3JlYXRlU3ZnSWNvbi5kZWZhdWx0KShfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTEyIDdWM0gydjE4aDIwVjdIMTJ6TTYgMTlINHYtMmgydjJ6bTAtNEg0di0yaDJ2MnptMC00SDRWOWgydjJ6bTAtNEg0VjVoMnYyem00IDEySDh2LTJoMnYyem0wLTRIOHYtMmgydjJ6bTAtNEg4VjloMnYyem0wLTRIOFY1aDJ2MnptMTAgMTJoLTh2LTJoMnYtMmgtMnYtMmgydi0yaC0yVjloOHYxMHptLTItOGgtMnYyaDJ2LTJ6bTAgNGgtMnYyaDJ2LTJ6XCJcbn0pLCAnQnVzaW5lc3NPdXRsaW5lZCcpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@material-ui/icons/BusinessOutlined.js\n");

/***/ })

})