webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Portfolio.jsx":
false,

/***/ "./components/PortfolioM.jsx":
false,

/***/ "./components/SideDrawer.js":
false,

/***/ "./components/Techfolio/TechnofolioM.jsx":
/*!***********************************************!*\
  !*** ./components/Techfolio/TechnofolioM.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Data_TechData_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Data/TechData.js */ "./components/Data/TechData.js");
/* harmony import */ var _Cards_Projects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Cards/Projects */ "./components/Cards/Projects.jsx");
/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-swipeable-views */ "./node_modules/react-swipeable-views/lib/index.js");
/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_swipeable_views__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _images_decorations_blob2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../images/decorations/blob2 */ "./components/images/decorations/blob2.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-reveal/Fade */ "./node_modules/react-reveal/Fade.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _images_folios_techstackimage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../images/folios/techstackimage */ "./components/images/folios/techstackimage.js");





var _jsxFileName = "/Users/dev/Desktop/Portfolio/components/Techfolio/TechnofolioM.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }









var TechnoPortfolioM = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(TechnoPortfolioM, _Component);

  var _super = _createSuper(TechnoPortfolioM);

  function TechnoPortfolioM(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TechnoPortfolioM);

    _this = _super.call(this, props);
    _this.state = {
      tech: _Data_TechData_js__WEBPACK_IMPORTED_MODULE_6__["default"]
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TechnoPortfolioM, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var tech = this.state.tech;
      var styles = {
        root: {
          padding: '0 2rem',
          marginLeft: '-0.9rem'
        },
        slideContainer: {
          marginLeft: '-0.2rem'
        }
      };
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 1
        }
      }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_10___default.a, {
        bottom: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 6
        }
      }, __jsx("div", {
        className: "text-indigo-400 text-bold text-center text-6xl font-mono",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 6
        }
      }, " Tech-Stack "), " "), __jsx("div", {
        className: "my-4 mx-auto w-2/3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 12
        }
      }, __jsx(_images_folios_techstackimage__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 15
        }
      })), __jsx(react_swipeable_views__WEBPACK_IMPORTED_MODULE_8___default.a, {
        style: styles.root,
        slideStyle: styles.slideContainer,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 13
        }
      }, tech.map(function (_ref) {
        var id = _ref.id,
            title = _ref.title,
            description = _ref.description,
            imageUrl = _ref.imageUrl;
        return __jsx("div", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 21
          }
        }, __jsx(_Cards_Projects__WEBPACK_IMPORTED_MODULE_7__["default"], {
          key: id,
          title: title,
          description: description,
          imageUrl: imageUrl,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 23
          }
        }));
      })), __jsx("div", {
        className: "-ml-32 md:-ml-48 md:w-1/5 w-1/2 md:-mt-24 -mt-12",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 10
        }
      }, __jsx(_images_decorations_blob2__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 76
        }
      })));
    }
  }]);

  return TechnoPortfolioM;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (TechnoPortfolioM);

/***/ }),

/***/ "./components/Techfolio/Technolgyfolio.jsx":
/*!*************************************************!*\
  !*** ./components/Techfolio/Technolgyfolio.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Data_TechData_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Data/TechData.js */ "./components/Data/TechData.js");
/* harmony import */ var _Cards_Projects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Cards/Projects */ "./components/Cards/Projects.jsx");
/* harmony import */ var _portfolio_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../portfolio.styles */ "./components/portfolio.styles.jsx");
/* harmony import */ var _images_decorations_blob2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../images/decorations/blob2 */ "./components/images/decorations/blob2.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-reveal/Fade */ "./node_modules/react-reveal/Fade.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _images_folios_techstackimage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../images/folios/techstackimage */ "./components/images/folios/techstackimage.js");





var _jsxFileName = "/Users/dev/Desktop/Portfolio/components/Techfolio/Technolgyfolio.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }









var TechnoPortfolio = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(TechnoPortfolio, _Component);

  var _super = _createSuper(TechnoPortfolio);

  function TechnoPortfolio(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TechnoPortfolio);

    _this = _super.call(this, props);
    _this.state = {
      tech: _Data_TechData_js__WEBPACK_IMPORTED_MODULE_6__["default"]
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TechnoPortfolio, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var tech = this.state.tech;
      var styles = {
        root: {
          padding: '0 2rem',
          marginLeft: '-0.9rem'
        },
        slideContainer: {
          marginLeft: '-0.2rem'
        }
      };
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 1
        }
      }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_10___default.a, {
        bottom: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 5
        }
      }, " ", __jsx("div", {
        className: "text-indigo-400 text-bold text-center text-6xl font-mono",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 19
        }
      }, " Tech-Stack "), " "), __jsx("div", {
        className: "mx-auto w-1/3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 8
        }
      }, " ", __jsx(_images_folios_techstackimage__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 40
        }
      }), "  "), __jsx(_portfolio_styles__WEBPACK_IMPORTED_MODULE_8__["PreviewContainer"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 13
        }
      }, tech.map(function (_ref) {
        var id = _ref.id,
            title = _ref.title,
            description = _ref.description,
            imageUrl = _ref.imageUrl;
        return __jsx(_Cards_Projects__WEBPACK_IMPORTED_MODULE_7__["default"], {
          key: id,
          title: title,
          description: description,
          imageUrl: imageUrl,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 27
          }
        });
      })), __jsx("div", {
        className: "-ml-32 md:-ml-48 md:w-1/5 w-1/2 md:-mt-24 -mt-12",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 9
        }
      }, " ", __jsx(_images_decorations_blob2__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 76
        }
      }), " "));
    }
  }]);

  return TechnoPortfolio;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (TechnoPortfolio);

/***/ }),

/***/ "./components/TechnofolioM.jsx":
false,

/***/ "./components/Technolgyfolio.jsx":
false,

/***/ "./components/header.js":
false,

/***/ "./components/projectfolio/Portfolio.jsx":
/*!***********************************************!*\
  !*** ./components/projectfolio/Portfolio.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Data_Data_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Data/Data.js */ "./components/Data/Data.js");
/* harmony import */ var _Cards_Projects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Cards/Projects */ "./components/Cards/Projects.jsx");
/* harmony import */ var _portfolio_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../portfolio.styles */ "./components/portfolio.styles.jsx");
/* harmony import */ var _images_decorations_blob1__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../images/decorations/blob1 */ "./components/images/decorations/blob1.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-reveal/Fade */ "./node_modules/react-reveal/Fade.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _images_folios_projectimage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../images/folios/projectimage */ "./components/images/folios/projectimage.js");





var _jsxFileName = "/Users/dev/Desktop/Portfolio/components/projectfolio/Portfolio.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }









var Portfolio = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Portfolio, _Component);

  var _super = _createSuper(Portfolio);

  function Portfolio(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Portfolio);

    _this = _super.call(this, props);
    _this.state = {
      projects: _Data_Data_js__WEBPACK_IMPORTED_MODULE_6__["default"]
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Portfolio, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var projects = this.state.projects;
      var styles = {
        root: {
          padding: '0 2rem',
          marginLeft: '-0.9rem'
        },
        slideContainer: {
          marginLeft: '-0.2rem'
        }
      };
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 6
        }
      }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_10___default.a, {
        bottom: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 6
        }
      }, " ", __jsx("div", {
        className: "text-teal-400 text-bold text-center text-6xl font-mono",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 20
        }
      }, " Projects "), " "), __jsx("div", {
        className: "my-4 mx-auto w-1/3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 7
        }
      }, " ", __jsx(_images_folios_projectimage__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 44
        }
      }), " "), __jsx(_portfolio_styles__WEBPACK_IMPORTED_MODULE_8__["PreviewContainer"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 13
        }
      }, projects.map(function (_ref) {
        var id = _ref.id,
            title = _ref.title,
            description = _ref.description,
            imageUrl = _ref.imageUrl;
        return __jsx(_Cards_Projects__WEBPACK_IMPORTED_MODULE_7__["default"], {
          key: id,
          title: title,
          description: description,
          imageUrl: imageUrl,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 27
          }
        });
      })), __jsx("div", {
        className: "-ml-32 md:-ml-48 md:w-1/4 w-1/2 md:-mt-24 -mt-12",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 9
        }
      }, " ", __jsx(_images_decorations_blob1__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 76
        }
      }), " "));
    }
  }]);

  return Portfolio;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Portfolio);

/***/ }),

/***/ "./components/projectfolio/PortfolioM.jsx":
/*!************************************************!*\
  !*** ./components/projectfolio/PortfolioM.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Data_Data_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Data/Data.js */ "./components/Data/Data.js");
/* harmony import */ var _Cards_Projects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Cards/Projects */ "./components/Cards/Projects.jsx");
/* harmony import */ var _portfolio_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../portfolio.styles */ "./components/portfolio.styles.jsx");
/* harmony import */ var react_socks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-socks */ "./node_modules/react-socks/dist/index.js");
/* harmony import */ var react_socks__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_socks__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-swipeable-views */ "./node_modules/react-swipeable-views/lib/index.js");
/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_swipeable_views__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _images_decorations_blob1__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../images/decorations/blob1 */ "./components/images/decorations/blob1.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-reveal/Fade */ "./node_modules/react-reveal/Fade.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-responsive */ "./node_modules/react-responsive/dist/react-responsive.js");
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _images_folios_projectimage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../images/folios/projectimage */ "./components/images/folios/projectimage.js");





var _jsxFileName = "/Users/dev/Desktop/Portfolio/components/projectfolio/PortfolioM.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }












var PortfolioM = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(PortfolioM, _Component);

  var _super = _createSuper(PortfolioM);

  function PortfolioM(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PortfolioM);

    _this = _super.call(this, props);
    _this.state = {
      projects: _Data_Data_js__WEBPACK_IMPORTED_MODULE_6__["default"]
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PortfolioM, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var projects = this.state.projects;
      var styles = {
        root: {
          padding: '0 2rem',
          marginLeft: '-0.9rem'
        },
        slideContainer: {
          marginLeft: '-0.2rem'
        }
      };
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 5
        }
      }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_12___default.a, {
        bottom: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 7
        }
      }, " ", __jsx("div", {
        className: "text-teal-400 text-bold text-center text-6xl font-mono",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }
      }, " Projects "), " "), __jsx("div", {
        className: "my-4 mx-auto w-2/3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 6
        }
      }, " ", __jsx(_images_folios_projectimage__WEBPACK_IMPORTED_MODULE_14__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 43
        }
      }), " "), __jsx(react_swipeable_views__WEBPACK_IMPORTED_MODULE_10___default.a, {
        style: styles.root,
        slideStyle: styles.slideContainer,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 6
        }
      }, projects.map(function (_ref) {
        var id = _ref.id,
            title = _ref.title,
            description = _ref.description,
            imageUrl = _ref.imageUrl;
        return __jsx(_Cards_Projects__WEBPACK_IMPORTED_MODULE_7__["default"], {
          key: id,
          title: title,
          description: description,
          imageUrl: imageUrl,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 27
          }
        });
      })), __jsx("div", {
        className: "-ml-32 md:-ml-48 md:w-1/4 w-1/2 md:-mt-24 -mt-12",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 9
        }
      }, " ", __jsx(_images_decorations_blob1__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 76
        }
      }), " "));
    }
  }]);

  return PortfolioM;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (PortfolioM);

/***/ }),

/***/ "./node_modules/@material-ui/icons/HomeOutlined.js":
false,

/***/ "./node_modules/@material-ui/icons/Menu.js":
false,

/***/ "./node_modules/@material-ui/icons/MessageOutlined.js":
false,

/***/ "./node_modules/@material-ui/icons/ThumbUpOutlined.js":
false,

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_images_home_homeimage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/images/home/homeimage */ "./components/images/home/homeimage.js");
/* harmony import */ var _components_WaverBorder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/WaverBorder */ "./components/WaverBorder.jsx");
/* harmony import */ var react_socks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-socks */ "./node_modules/react-socks/dist/index.js");
/* harmony import */ var react_socks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_socks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/GitHub */ "./node_modules/@material-ui/icons/GitHub.js");
/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/LinkedIn */ "./node_modules/@material-ui/icons/LinkedIn.js");
/* harmony import */ var _material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_projectfolio_Portfolio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/projectfolio/Portfolio */ "./components/projectfolio/Portfolio.jsx");
/* harmony import */ var _components_Techfolio_Technolgyfolio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Techfolio/Technolgyfolio */ "./components/Techfolio/Technolgyfolio.jsx");
/* harmony import */ var _components_projectfolio_PortfolioM__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/projectfolio/PortfolioM */ "./components/projectfolio/PortfolioM.jsx");
/* harmony import */ var _components_Techfolio_TechnofolioM__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Techfolio/TechnofolioM */ "./components/Techfolio/TechnofolioM.jsx");
var _this = undefined,
    _jsxFileName = "/Users/dev/Desktop/Portfolio/pages/index.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











var Index = function Index() {
  return __jsx(react_socks__WEBPACK_IMPORTED_MODULE_3__["BreakpointProvider"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 1
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "md:flex bg-gray-200",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "md:mx-4 md:mt-32 text-center md:w-1/2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }), __jsx("p", {
    className: "text-indigo-400 text-6xl md:text-6xl font-medium",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, "Hello World!"), __jsx("p", {
    className: "text-teal-300 text-2xl md:text-5xl font-medium",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, "I am Shaurya Tuli a Front-End Dev"), __jsx("p", {
    className: "mb-4 mx-2 text-gray-600 text-lg md:text-base font-thin",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, "a 18 Year Old from New Delhi , India who has passion for web development and making super awesome web apps and much more I use React.js and other libraries along with it to make some beautiful simple and usable "), __jsx("div", {
    className: "flex md:ml-32",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 14
    }
  }, __jsx("div", {
    className: "ml-20 mr-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 16
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "outlined",
    color: "inherit",
    startIcon: __jsx(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_5___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 30
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 18
    }
  }, " Github")), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "outlined",
    color: "primary",
    startIcon: __jsx(_material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_6___default.a, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 28
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, " LinkedIn ")))), __jsx("div", {
    className: " mx-4 my-8 md:w-1/2 md:mt-16",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, __jsx(_components_images_home_homeimage__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  })), __jsx(react_socks__WEBPACK_IMPORTED_MODULE_3__["Breakpoint"], {
    small: true,
    down: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, __jsx(_components_WaverBorder__WEBPACK_IMPORTED_MODULE_2__["default"], {
    upperColor: "#EDF2F7",
    lowerColor: "#fff",
    animationNegativeDelay: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }))), __jsx(react_socks__WEBPACK_IMPORTED_MODULE_3__["Breakpoint"], {
    medium: true,
    up: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 10
    }
  }, __jsx(_components_WaverBorder__WEBPACK_IMPORTED_MODULE_2__["default"], {
    upperColor: "#EDF2F7",
    lowerColor: "#fff",
    animationNegativeDelay: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 12
    }
  }))), __jsx("div", {
    className: "m-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 4
    }
  }, __jsx(react_socks__WEBPACK_IMPORTED_MODULE_3__["Breakpoint"], {
    small: true,
    down: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 4
    }
  }, __jsx(_components_projectfolio_PortfolioM__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 4
    }
  }), __jsx(_components_Techfolio_TechnofolioM__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 4
    }
  })), __jsx(react_socks__WEBPACK_IMPORTED_MODULE_3__["Breakpoint"], {
    medium: true,
    up: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 4
    }
  }, __jsx(_components_Techfolio_Technolgyfolio__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 4
    }
  }), __jsx(_components_projectfolio_Portfolio__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 4
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.0103bde166a249076588.hot-update.js.map