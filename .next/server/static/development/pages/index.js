module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Cards/Projects.jsx":
/*!***************************************!*\
  !*** ./components/Cards/Projects.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectCards; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Card */ "@material-ui/core/Card");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CardActionArea */ "@material-ui/core/CardActionArea");
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardActions */ "@material-ui/core/CardActions");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardContent */ "@material-ui/core/CardContent");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "@material-ui/core/CardMedia");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "/Users/dev/Desktop/Portfolio/components/Cards/Projects.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  root: {
    maxWidth: 360
  },
  media: {
    height: 180
  }
});
function ProjectCards({
  title,
  description,
  imageUrl
}) {
  const classes = useStyles();
  return __jsx("div", {
    className: "mx-2 md:mx-0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 1
    }
  }, __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: classes.root,
    variant: "outlined",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_6___default.a, {
    component: "img",
    className: classes.media,
    image: imageUrl,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a, {
    gutterBottom: true,
    variant: "h5",
    component: "h2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, title), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a, {
    variant: "body2",
    color: "textSecondary",
    component: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, description))), __jsx(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
    size: "small",
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, "Live Demo"))));
}

/***/ }),

/***/ "./components/Data/Data.js":
/*!*********************************!*\
  !*** ./components/Data/Data.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const PORTFOLIO_DATA = [{
  id: 1,
  title: 'Ecommerce',
  description: 'Redux+Stripe',
  imageUrl: 'https://i.imgur.com/ccDYHDn.png'
}, {
  id: 2,
  title: 'Ecommerce 2',
  description: 'Gatsby+Snipcart',
  imageUrl: 'https://i.imgur.com/580Ve3M.png'
}, {
  id: 3,
  title: 'Covid-19 Live Tracker',
  description: 'Using Covid-19 India API',
  imageUrl: 'https://i.imgur.com/r5WwPSa.png'
}, {
  id: 4,
  title: 'Personal Blog',
  description: 'Next.js & Datacom CMS',
  imageUrl: 'https://i.imgur.com/np13rw7.png'
}];
/* harmony default export */ __webpack_exports__["default"] = (PORTFOLIO_DATA);

/***/ }),

/***/ "./components/Data/TechData.js":
/*!*************************************!*\
  !*** ./components/Data/TechData.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const STACK_DATA = [{
  id: 1,
  title: 'React JS',
  description: 'A Javascript library for making UI',
  imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'
}, {
  id: 2,
  title: 'Next JS',
  description: 'A React Framework',
  imageUrl: 'https://spectrum.imgix.net/communities/613a8d4f-ac27-41d4-a9dc-054b2e34893d/next-white.png.0.731330725584979?w=256&h=256&dpr=2&auto=compress&expires=1585785600000&ixlib=js-1.4.1&s=f7b6fb4653c1f3029bbf7124792abe4b'
}, {
  id: 3,
  title: 'Gatsby JS',
  description: 'A React Framework',
  imageUrl: 'https://cdn.auth0.com/blog/illustrations/gatsbyjs.png'
}, {
  id: 4,
  title: 'Material UI',
  description: 'Components for Google design',
  imageUrl: 'data:image/png;base64,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'
}, {
  id: 5,
  title: 'Tailwind CSS',
  description: 'A utility based CSS library',
  imageUrl: 'https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png'
}];
/* harmony default export */ __webpack_exports__["default"] = (STACK_DATA);

/***/ }),

/***/ "./components/Techfolio/TechnofolioM.jsx":
/*!***********************************************!*\
  !*** ./components/Techfolio/TechnofolioM.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Data_TechData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Data/TechData.js */ "./components/Data/TechData.js");
/* harmony import */ var _Cards_Projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Cards/Projects */ "./components/Cards/Projects.jsx");
/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-swipeable-views */ "react-swipeable-views");
/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_swipeable_views__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_decorations_blob2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/decorations/blob2 */ "./components/images/decorations/blob2.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images_folios_techstackimage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/folios/techstackimage */ "./components/images/folios/techstackimage.js");
var _jsxFileName = "/Users/dev/Desktop/Portfolio/components/Techfolio/TechnofolioM.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








class TechnoPortfolioM extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      tech: _Data_TechData_js__WEBPACK_IMPORTED_MODULE_1__["default"]
    };
  }

  render() {
    const {
      tech
    } = this.state;
    const styles = {
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
    }, __jsx("div", {
      className: "-my-8 ml-24 w-2/3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 1
      }
    }, " ", __jsx(_images_folios_techstackimage__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 37
      }
    }), "  "), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5___default.a, {
      bottom: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 6
      }
    }, " ", __jsx("div", {
      className: "text-indigo-400 text-bold text-center text-6xl font-mono",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 20
      }
    }, " Tech-Stack "), " "), __jsx(react_swipeable_views__WEBPACK_IMPORTED_MODULE_3___default.a, {
      style: styles.root,
      slideStyle: styles.slideContainer,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 13
      }
    }, tech.map(({
      id,
      title,
      description,
      imageUrl
    }) => __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 21
      }
    }, __jsx(_Cards_Projects__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: id,
      title: title,
      description: description,
      imageUrl: imageUrl,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 23
      }
    })))), __jsx("div", {
      className: "-ml-32 md:-ml-48 md:w-1/5 w-1/2 md:-mt-24 -mt-12",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 10
      }
    }, __jsx(_images_decorations_blob2__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 76
      }
    })));
  }

}

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Data_TechData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Data/TechData.js */ "./components/Data/TechData.js");
/* harmony import */ var _Cards_Projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Cards/Projects */ "./components/Cards/Projects.jsx");
/* harmony import */ var _portfolio_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../portfolio.styles */ "./components/portfolio.styles.jsx");
/* harmony import */ var _images_decorations_blob2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/decorations/blob2 */ "./components/images/decorations/blob2.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images_folios_techstackimage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/folios/techstackimage */ "./components/images/folios/techstackimage.js");
var _jsxFileName = "/Users/dev/Desktop/Portfolio/components/Techfolio/Technolgyfolio.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








class TechnoPortfolio extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      tech: _Data_TechData_js__WEBPACK_IMPORTED_MODULE_1__["default"]
    };
  }

  render() {
    const {
      tech
    } = this.state;
    const styles = {
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
    }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5___default.a, {
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
      className: "-my-8 mx-auto w-1/3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 8
      }
    }, " ", __jsx(_images_folios_techstackimage__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 46
      }
    }), "  "), __jsx(_portfolio_styles__WEBPACK_IMPORTED_MODULE_3__["PreviewContainer"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 13
      }
    }, tech.map(({
      id,
      title,
      description,
      imageUrl
    }) => __jsx(_Cards_Projects__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: id,
      title: title,
      description: description,
      imageUrl: imageUrl,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 27
      }
    }))), __jsx("div", {
      className: "-ml-32 md:-ml-48 md:w-1/5 w-1/2 md:-mt-24 -mt-12",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }
    }, " ", __jsx(_images_decorations_blob2__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 76
      }
    }), " "));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (TechnoPortfolio);

/***/ }),

/***/ "./components/WaverBorder.jsx":
/*!************************************!*\
  !*** ./components/WaverBorder.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/dev/Desktop/Portfolio/components/WaverBorder.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const styles = {
  waves: {
    position: "relative",
    width: "100%",
    marginBottom: -7,
    height: "7vw",
    minHeight: "7vw"
  },
  "@keyframes moveForever": {
    from: {
      transform: "translate3d(-90px, 0, 0)"
    },
    to: {
      transform: "translate3d(85px, 0, 0)"
    }
  },
  parallax: {
    "& > use": {
      animation: "$moveForever 4s cubic-bezier(0.62, 0.5, 0.38, 0.5) infinite",
      animationDelay: props => `-${props.animationNegativeDelay}s`
    }
  }
};
/**
 *  https://codepen.io/csspoints/pen/WNeOEqd
 */

function WaveBorder(props) {
  const id = String(Math.random());

  const {
    className,
    lowerColor,
    upperColor,
    classes,
    animationNegativeDelay
  } = props,
        rest = _objectWithoutProperties(props, ["className", "lowerColor", "upperColor", "classes", "animationNegativeDelay"]);

  return __jsx("div", _extends({
    className: className,
    style: {
      background: upperColor
    }
  }, rest, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }), __jsx("svg", {
    className: classes.waves,
    xmlns: "http://www.w3.org/2000/svg",
    xlink: "http://www.w3.org/1999/xlink",
    viewBox: "0 24 150 28",
    preserveAspectRatio: "none",
    shapeRendering: "auto",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, __jsx("defs", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx("path", {
    id: id,
    d: "M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  })), __jsx("g", {
    className: classes.parallax,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, __jsx("use", {
    href: `#${id}`,
    x: "48",
    y: "0",
    fill: lowerColor,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }))));
}

WaveBorder.propTypes = {
  lowerColor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  upperColor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  animationNegativeDelay: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(WaveBorder));

/***/ }),

/***/ "./components/images/decorations/blob1.js":
/*!************************************************!*\
  !*** ./components/images/decorations/blob1.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/dev/Desktop/Portfolio/components/images/decorations/blob1.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Blob() {
  return __jsx("img", {
    src: "/blob2.png",
    alt: "deco image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 12
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Blob);

/***/ }),

/***/ "./components/images/decorations/blob2.js":
/*!************************************************!*\
  !*** ./components/images/decorations/blob2.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/dev/Desktop/Portfolio/components/images/decorations/blob2.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Blob2() {
  return __jsx("img", {
    src: "/blob3.png",
    alt: "deco image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 12
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Blob2);

/***/ }),

/***/ "./components/images/folios/projectimage.js":
/*!**************************************************!*\
  !*** ./components/images/folios/projectimage.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/dev/Desktop/Portfolio/components/images/folios/projectimage.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ProImage() {
  return __jsx("img", {
    src: "/project.png",
    alt: "home image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 12
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (ProImage);

/***/ }),

/***/ "./components/images/folios/techstackimage.js":
/*!****************************************************!*\
  !*** ./components/images/folios/techstackimage.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/dev/Desktop/Portfolio/components/images/folios/techstackimage.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function StackImage() {
  return __jsx("img", {
    src: "/stack.png",
    alt: "home image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 12
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (StackImage);

/***/ }),

/***/ "./components/images/home/homeimage.js":
/*!*********************************************!*\
  !*** ./components/images/home/homeimage.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/dev/Desktop/Portfolio/components/images/home/homeimage.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function HomeImage() {
  return __jsx("img", {
    src: "/home2.png",
    alt: "home image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 12
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (HomeImage);

/***/ }),

/***/ "./components/portfolio.styles.jsx":
/*!*****************************************!*\
  !*** ./components/portfolio.styles.jsx ***!
  \*****************************************/
/*! exports provided: PreviewContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewContainer", function() { return PreviewContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const PreviewContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
 display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;

  
`;

/***/ }),

/***/ "./components/projectfolio/Portfolio.jsx":
/*!***********************************************!*\
  !*** ./components/projectfolio/Portfolio.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Data_Data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Data/Data.js */ "./components/Data/Data.js");
/* harmony import */ var _Cards_Projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Cards/Projects */ "./components/Cards/Projects.jsx");
/* harmony import */ var _portfolio_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../portfolio.styles */ "./components/portfolio.styles.jsx");
/* harmony import */ var _images_decorations_blob1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/decorations/blob1 */ "./components/images/decorations/blob1.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images_folios_projectimage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/folios/projectimage */ "./components/images/folios/projectimage.js");
var _jsxFileName = "/Users/dev/Desktop/Portfolio/components/projectfolio/Portfolio.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








class Portfolio extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      projects: _Data_Data_js__WEBPACK_IMPORTED_MODULE_1__["default"]
    };
  }

  render() {
    const {
      projects
    } = this.state;
    const styles = {
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
    }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_5___default.a, {
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
    }, " ", __jsx(_images_folios_projectimage__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 44
      }
    }), " "), __jsx(_portfolio_styles__WEBPACK_IMPORTED_MODULE_3__["PreviewContainer"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 13
      }
    }, projects.map(({
      id,
      title,
      description,
      imageUrl
    }) => __jsx(_Cards_Projects__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: id,
      title: title,
      description: description,
      imageUrl: imageUrl,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 27
      }
    }))), __jsx("div", {
      className: "-ml-32 md:-ml-48 md:w-1/4 w-1/2 md:-mt-24 -mt-12",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }
    }, " ", __jsx(_images_decorations_blob1__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 76
      }
    }), " "));
  }

}

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Data_Data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Data/Data.js */ "./components/Data/Data.js");
/* harmony import */ var _Cards_Projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Cards/Projects */ "./components/Cards/Projects.jsx");
/* harmony import */ var _portfolio_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../portfolio.styles */ "./components/portfolio.styles.jsx");
/* harmony import */ var react_socks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-socks */ "react-socks");
/* harmony import */ var react_socks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_socks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-swipeable-views */ "react-swipeable-views");
/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_swipeable_views__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images_decorations_blob1__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/decorations/blob1 */ "./components/images/decorations/blob1.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-responsive */ "react-responsive");
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _images_folios_projectimage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../images/folios/projectimage */ "./components/images/folios/projectimage.js");
var _jsxFileName = "/Users/dev/Desktop/Portfolio/components/projectfolio/PortfolioM.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











class PortfolioM extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      projects: _Data_Data_js__WEBPACK_IMPORTED_MODULE_1__["default"]
    };
  }

  render() {
    const {
      projects
    } = this.state;
    const styles = {
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
    }, __jsx("div", {
      className: "ml-4 my-2 w-2/3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 8
      }
    }, " ", __jsx(_images_folios_projectimage__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 42
      }
    }), " "), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_7___default.a, {
      bottom: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 7
      }
    }, " ", __jsx("div", {
      className: "text-teal-400 text-bold text-center text-6xl font-mono",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 21
      }
    }, " Projects "), " "), __jsx(react_swipeable_views__WEBPACK_IMPORTED_MODULE_5___default.a, {
      style: styles.root,
      slideStyle: styles.slideContainer,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 7
      }
    }, projects.map(({
      id,
      title,
      description,
      imageUrl
    }) => __jsx(_Cards_Projects__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: id,
      title: title,
      description: description,
      imageUrl: imageUrl,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 27
      }
    }))), __jsx("div", {
      className: "-ml-32 md:-ml-48 md:w-1/4 w-1/2 md:-mt-24 -mt-12",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }
    }, " ", __jsx(_images_decorations_blob1__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 76
      }
    }), " "));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (PortfolioM);

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_images_home_homeimage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/images/home/homeimage */ "./components/images/home/homeimage.js");
/* harmony import */ var _components_WaverBorder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/WaverBorder */ "./components/WaverBorder.jsx");
/* harmony import */ var react_socks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-socks */ "react-socks");
/* harmony import */ var react_socks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_socks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/GitHub */ "@material-ui/icons/GitHub");
/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/LinkedIn */ "@material-ui/icons/LinkedIn");
/* harmony import */ var _material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_projectfolio_Portfolio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/projectfolio/Portfolio */ "./components/projectfolio/Portfolio.jsx");
/* harmony import */ var _components_Techfolio_Technolgyfolio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Techfolio/Technolgyfolio */ "./components/Techfolio/Technolgyfolio.jsx");
/* harmony import */ var _components_projectfolio_PortfolioM__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/projectfolio/PortfolioM */ "./components/projectfolio/PortfolioM.jsx");
/* harmony import */ var _components_Techfolio_TechnofolioM__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Techfolio/TechnofolioM */ "./components/Techfolio/TechnofolioM.jsx");
var _jsxFileName = "/Users/dev/Desktop/Portfolio/pages/index.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











const Index = () => __jsx(react_socks__WEBPACK_IMPORTED_MODULE_3__["BreakpointProvider"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 1
  }
}, __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 4
  }
}, __jsx("div", {
  className: "md:flex bg-gray-200",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 6
  }
}, __jsx("div", {
  className: "md:mx-4 md:mt-32 text-center md:w-1/2",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 9
  }
}, __jsx("br", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 11
  }
}), __jsx("p", {
  className: "text-indigo-400 text-6xl md:text-6xl font-medium",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 13
  }
}, "Hello World!"), __jsx("p", {
  className: "text-teal-300 text-2xl md:text-5xl font-medium",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 13
  }
}, "I am Shaurya Tuli a Front-End Dev"), __jsx("p", {
  className: "mb-4 mx-2 text-gray-600 text-lg md:text-base font-thin",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 13
  }
}, "a 18 Year Old from New Delhi , India who has passion for web development and making super awesome web apps and much more I use React.js and other libraries along with it to make some beautiful simple and usable "), __jsx("div", {
  className: "flex md:ml-32",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 14
  }
}, __jsx("div", {
  className: "ml-20 mr-2",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 16
  }
}, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
  variant: "outlined",
  color: "inherit",
  startIcon: __jsx(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 30
    }
  }),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 18
  }
}, " Github")), __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 15
  }
}, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
  variant: "outlined",
  color: "primary",
  startIcon: __jsx(_material_ui_icons_LinkedIn__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 28
    }
  }),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 17
  }
}, " LinkedIn ")))), __jsx("div", {
  className: " mx-4 my-8 md:w-1/2 md:mt-16",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 7
  }
}, __jsx(_components_images_home_homeimage__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 9
  }
})), __jsx(react_socks__WEBPACK_IMPORTED_MODULE_3__["Breakpoint"], {
  small: true,
  down: true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 7
  }
}, __jsx(_components_WaverBorder__WEBPACK_IMPORTED_MODULE_2__["default"], {
  upperColor: "#EDF2F7",
  lowerColor: "#fff",
  animationNegativeDelay: 4,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 7
  }
}))), __jsx(react_socks__WEBPACK_IMPORTED_MODULE_3__["Breakpoint"], {
  medium: true,
  up: true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 10
  }
}, __jsx(_components_WaverBorder__WEBPACK_IMPORTED_MODULE_2__["default"], {
  upperColor: "#EDF2F7",
  lowerColor: "#fff",
  animationNegativeDelay: 4,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 12
  }
}))), __jsx("div", {
  className: "m-12",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 11
  }
}, __jsx(react_socks__WEBPACK_IMPORTED_MODULE_3__["Breakpoint"], {
  small: true,
  down: true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 14
  }
}, __jsx(_components_projectfolio_PortfolioM__WEBPACK_IMPORTED_MODULE_9__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 68,
    columnNumber: 17
  }
}), __jsx(_components_Techfolio_TechnofolioM__WEBPACK_IMPORTED_MODULE_10__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 17
  }
})), __jsx(react_socks__WEBPACK_IMPORTED_MODULE_3__["Breakpoint"], {
  medium: true,
  up: true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 73,
    columnNumber: 11
  }
}, __jsx(_components_Techfolio_Technolgyfolio__WEBPACK_IMPORTED_MODULE_8__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 74,
    columnNumber: 14
  }
}), __jsx(_components_projectfolio_Portfolio__WEBPACK_IMPORTED_MODULE_7__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 75,
    columnNumber: 14
  }
}))));

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/dev/Desktop/Portfolio/pages/index.jsx */"./pages/index.jsx");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Card":
/*!*****************************************!*\
  !*** external "@material-ui/core/Card" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Card");

/***/ }),

/***/ "@material-ui/core/CardActionArea":
/*!***************************************************!*\
  !*** external "@material-ui/core/CardActionArea" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardActionArea");

/***/ }),

/***/ "@material-ui/core/CardActions":
/*!************************************************!*\
  !*** external "@material-ui/core/CardActions" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardActions");

/***/ }),

/***/ "@material-ui/core/CardContent":
/*!************************************************!*\
  !*** external "@material-ui/core/CardContent" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardContent");

/***/ }),

/***/ "@material-ui/core/CardMedia":
/*!**********************************************!*\
  !*** external "@material-ui/core/CardMedia" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardMedia");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/GitHub":
/*!********************************************!*\
  !*** external "@material-ui/icons/GitHub" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/GitHub");

/***/ }),

/***/ "@material-ui/icons/LinkedIn":
/*!**********************************************!*\
  !*** external "@material-ui/icons/LinkedIn" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LinkedIn");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-responsive":
/*!***********************************!*\
  !*** external "react-responsive" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-responsive");

/***/ }),

/***/ "react-reveal/Fade":
/*!************************************!*\
  !*** external "react-reveal/Fade" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-reveal/Fade");

/***/ }),

/***/ "react-socks":
/*!******************************!*\
  !*** external "react-socks" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-socks");

/***/ }),

/***/ "react-swipeable-views":
/*!****************************************!*\
  !*** external "react-swipeable-views" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-swipeable-views");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map