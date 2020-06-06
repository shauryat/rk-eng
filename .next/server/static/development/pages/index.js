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

/***/ "./components/Address/AddressLayout.jsx":
/*!**********************************************!*\
  !*** ./components/Address/AddressLayout.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Cards_AddressCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Cards/AddressCard */ "./components/Cards/AddressCard.jsx");
/* harmony import */ var _Data_AddressData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Data/AddressData */ "./components/Data/AddressData.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Apartment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Apartment */ "@material-ui/icons/Apartment");
/* harmony import */ var _material_ui_icons_Apartment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Apartment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _iconcircele__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../iconcircele */ "./components/iconcircele.jsx");
/* harmony import */ var _portfolio_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../portfolio.styles */ "./components/portfolio.styles.jsx");
/* harmony import */ var _FabIcons_Landline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../FabIcons/Landline */ "./components/FabIcons/Landline.jsx");
/* harmony import */ var _FabIcons_Mail__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../FabIcons/Mail */ "./components/FabIcons/Mail.jsx");
/* harmony import */ var _FabIcons_Phone__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../FabIcons/Phone */ "./components/FabIcons/Phone.jsx");
var _jsxFileName = "/Users/dev/Desktop/RK Engineering/components/Address/AddressLayout.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











class AddressList extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      addresses: _Data_AddressData__WEBPACK_IMPORTED_MODULE_2__["default"]
    };
  }

  render() {
    const {
      addresses
    } = this.state;
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "mx-4 mb-2 md:mb-4 text-indigo-400 md:ml-4 text-4xl font-medium",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 13
      }
    }, __jsx(_iconcircele__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 18
      }
    }, __jsx(_material_ui_icons_Apartment__WEBPACK_IMPORTED_MODULE_4___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 30
      }
    })), " Our Locations  "), __jsx("div", {
      className: "md:flex md:pl-4 mr-4 md:mx-0",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 5
      }
    }, addresses.map(({
      name,
      address,
      imageUrl,
      id
    }) => __jsx("div", {
      className: "ml-4 md:ml-0 md:mr-4 mb-4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 20
      }
    }, __jsx(_Cards_AddressCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: id,
      address: address,
      name: name,
      imageUrl: imageUrl,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 20
      }
    })))), __jsx("div", {
      className: "ml-2 md:ml-4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 13
      }
    }, __jsx(_FabIcons_Mail__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 13
      }
    }), __jsx("div", {
      className: "flex",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 11
      }
    }, __jsx(_FabIcons_Phone__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 11
      }
    }), __jsx(_FabIcons_Landline__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 11
      }
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (AddressList);

/***/ }),

/***/ "./components/Cards/AddressCard.jsx":
/*!******************************************!*\
  !*** ./components/Cards/AddressCard.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddressCard; });
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
/* harmony import */ var _material_ui_icons_DirectionsOutlined__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/DirectionsOutlined */ "@material-ui/icons/DirectionsOutlined");
/* harmony import */ var _material_ui_icons_DirectionsOutlined__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_DirectionsOutlined__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "/Users/dev/Desktop/RK Engineering/components/Cards/AddressCard.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});
function AddressCard({
  name,
  address,
  imageUrl
}) {
  const classes = useStyles();
  return __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2___default.a, {
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
      columnNumber: 9
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
  }, name), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a, {
    variant: "body2",
    color: "textSecondary",
    component: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, address))), __jsx(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_4___default.a, {
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
  }, __jsx(_material_ui_icons_DirectionsOutlined__WEBPACK_IMPORTED_MODULE_9___default.a, {
    style: {
      marginRight: '5'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 10
    }
  }), "  Directions")));
}

/***/ }),

/***/ "./components/Cards/CustomerMCards.jsx":
/*!*********************************************!*\
  !*** ./components/Cards/CustomerMCards.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectCardsM; });
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
var _jsxFileName = "/Users/dev/Desktop/RK Engineering/components/Cards/CustomerMCards.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  root: {
    maxWidth: 240,
    height: 260
  },
  media: {
    height: 180
  }
});
function ProjectCardsM({
  title,
  imageUrl
}) {
  const classes = useStyles();
  return __jsx("div", {
    className: "mr-4 mb-4 inline-block",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 1
    }
  }, __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: classes.root,
    elevation: 0,
    variant: "outlined",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_6___default.a, {
    component: "img",
    className: classes.media,
    image: imageUrl,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a, {
    component: "h5",
    variant: "h6",
    align: "center",
    color: "textSecondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, title))));
}

/***/ }),

/***/ "./components/Cards/LeaderCard.jsx":
/*!*****************************************!*\
  !*** ./components/Cards/LeaderCard.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LeaderCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Card */ "@material-ui/core/Card");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CardContent */ "@material-ui/core/CardContent");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "@material-ui/core/CardMedia");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/dev/Desktop/RK Engineering/components/Cards/LeaderCard.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  root: {
    maxWidth: 305,
    height: 372
  },
  media: {
    height: 170
  }
});
function LeaderCard({
  name,
  description,
  imageUrl
}) {
  const classes = useStyles();
  return __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: classes.root,
    variant: "outlined",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4___default.a, {
    component: "img",
    className: classes.media,
    image: imageUrl,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    gutterBottom: true,
    variant: "h6",
    component: "h2",
    color: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, name), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "body2",
    color: "textSecondary",
    component: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, description)));
}

/***/ }),

/***/ "./components/Cards/MachineCard.jsx":
/*!******************************************!*\
  !*** ./components/Cards/MachineCard.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MachineCard; });
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
var _jsxFileName = "/Users/dev/Desktop/RK Engineering/components/Cards/MachineCard.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  root: {
    width: 275,
    height: 315
  },
  media: {
    height: 180
  }
});
function MachineCard({
  name,
  description,
  imageUrl
}) {
  const classes = useStyles();
  return __jsx("div", {
    className: "mr-4 md:mb-4 bg-white shadow-lg rounded-lg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: classes.root,
    elevation: 0,
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
      columnNumber: 9
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
    variant: "subtitle1",
    component: "h5",
    color: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, name), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a, {
    variant: "body2",
    color: "textPrimary",
    component: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, description))));
}

/***/ }),

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
var _jsxFileName = "/Users/dev/Desktop/RK Engineering/components/Cards/Projects.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  root: {
    maxWidth: 240,
    height: 'auto'
  },
  media: {
    height: 180
  }
});
function ProjectCards({
  title,
  imageUrl
}) {
  const classes = useStyles();
  return __jsx("div", {
    className: "mr-4 mb-4 shadow-lg rounded-lg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 1
    }
  }, __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: classes.root,
    elevation: 0,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_6___default.a, {
    component: "img",
    className: classes.media,
    image: imageUrl,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }), __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a, {
    component: "h5",
    variant: "h6",
    align: "center",
    color: "textSecondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, title))));
}

/***/ }),

/***/ "./components/Counter/counter.jsx":
/*!****************************************!*\
  !*** ./components/Counter/counter.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/dev/Desktop/RK Engineering/components/Counter/counter.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Counter = () => __jsx("div", {
  className: "md:flex bg-blue-200 w-full h-32",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2,
    columnNumber: 5
  }
}, __jsx("div", {
  className: "text-6xl text-blue-400 text-center ml-12 mt-8",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 9
  }
}, "50+ ", __jsx("br", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 19
  }
}), " ", __jsx("div", {
  className: "text-lg text-white",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 25
  }
}, "YEARS OF EXPERIENCE")), __jsx("div", {
  className: "text-6xl text-white text-center ml-16 mt-8",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }
}, "50+ ", __jsx("br", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 19
  }
}), " ", __jsx("div", {
  className: "text-lg",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 25
  }
}, "CUSTOMERS")), __jsx("div", {
  className: "text-6xl text-white text-center ml-16 mt-8",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }
}, "50+ ", __jsx("br", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 19
  }
}), " ", __jsx("div", {
  className: "text-lg",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 25
  }
}, "PRODUCTS")), __jsx("div", {
  className: "text-6xl text-white text-center ml-16 mt-8",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 15
  }
}, "50+ ", __jsx("br", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 19
  }
}), " ", __jsx("div", {
  className: "text-lg",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 25
  }
}, "YEARS OF EXPERIENCE")));

/* harmony default export */ __webpack_exports__["default"] = (Counter);

/***/ }),

/***/ "./components/Customers/Customers.jsx":
/*!********************************************!*\
  !*** ./components/Customers/Customers.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Data_Data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Data/Data.js */ "./components/Data/Data.js");
/* harmony import */ var _Cards_Projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Cards/Projects */ "./components/Cards/Projects.jsx");
/* harmony import */ var _Cards_CustomerMCards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Cards/CustomerMCards */ "./components/Cards/CustomerMCards.jsx");
/* harmony import */ var _portfolio_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../portfolio.styles */ "./components/portfolio.styles.jsx");
/* harmony import */ var _material_ui_icons_Business__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Business */ "@material-ui/icons/Business");
/* harmony import */ var _material_ui_icons_Business__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Business__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-swipeable-views */ "react-swipeable-views");
/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_swipeable_views__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _iconcircele_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../iconcircele.jsx */ "./components/iconcircele.jsx");
/* harmony import */ var _parallax2_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../parallax2.jsx */ "./components/parallax2.jsx");
var _jsxFileName = "/Users/dev/Desktop/RK Engineering/components/Customers/Customers.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










class Customers extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
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
        marginLeft: '-0.11rem'
      },
      slideContainer: {
        marginLeft: '-0.2rem'
      }
    };
    return __jsx("div", {
      className: "m-4 md:mx-24 md:mt-4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 6
      }
    }, __jsx("div", {
      className: "-m-4 md:-mx-24",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }
    }, __jsx(_parallax2_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], {
      imageUrl: "https://images.pexels.com/photos/257636/pexels-photo-257636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }
    })), __jsx(_portfolio_styles__WEBPACK_IMPORTED_MODULE_4__["MobileOnly"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 7
      }
    }, __jsx(_portfolio_styles__WEBPACK_IMPORTED_MODULE_4__["HorizontalList"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }
    }, projects.map(({
      id,
      title,
      imageUrl
    }) => __jsx(_Cards_CustomerMCards__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: id,
      title: title,
      imageUrl: imageUrl,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 23
      }
    })))), __jsx(_portfolio_styles__WEBPACK_IMPORTED_MODULE_4__["PreviewContainer"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 13
      }
    }, projects.map(({
      id,
      title,
      imageUrl
    }) => __jsx(_Cards_Projects__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: id,
      title: title,
      imageUrl: imageUrl,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 27
      }
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Customers);

/***/ }),

/***/ "./components/Data/AddressData.js":
/*!****************************************!*\
  !*** ./components/Data/AddressData.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const ADDRESS_DATA = [{
  id: 1,
  address: 'Flat No.709 59 Shakuntala Building Nehru Place,New Delhi',
  name: 'Head Office',
  imageUrl: 'https://www.veethi.com/watermark.php?path=images/city-images/original/Delhi-40422.jpg'
}, {
  id: 2,
  address: 'A-51 Sector-58 Noida, District Gautam Bush Nagar,UP',
  name: 'Works',
  imageUrl: 'https://m.hindustantimes.com/rf/image_size_444x250/HT/p2/2017/04/25/Pictures/sunday-hindustan-april-sector-noida-industrial-india_1d7cc3e4-29dd-11e7-bd89-19cc2c5d765e.jpg'
}];
/* harmony default export */ __webpack_exports__["default"] = (ADDRESS_DATA);

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
  id: 2,
  title: 'Hero Motocorp Ltd.',
  description: 'Gatsby+Snipcart',
  imageUrl: 'https://download.logo.wine/logo/Hero_MotoCorp/Hero_MotoCorp-Logo.wine.png'
}, {
  id: 1,
  title: 'Maruti',
  description: 'Redux+Stripe',
  imageUrl: 'https://logosvector.net/wp-content/uploads/2013/03/maruti-suzuki-eps-vector-logo.png'
}, {
  id: 3,
  title: 'Honda Scooters',
  description: 'Using Covid-19 India API',
  imageUrl: 'https://cdn.freebiesupply.com/logos/large/2x/honda-11-logo-png-transparent.png'
}, {
  id: 4,
  title: 'Bajaj Auto',
  description: 'Next.js & Datacom CMS',
  imageUrl: 'https://www.venturecenter.co.in/csr/bajajauto/wp-content/uploads/2019/06/Bajaj-logo.jpg'
}, {
  id: 5,
  title: 'Honda Siel Ltd.',
  description: 'Next.js & Datacom CMS',
  imageUrl: 'https://seekvectorlogo.com/wp-content/uploads/2017/12/honda-power-products-vector-logo-small.png'
}, {
  id: 6,
  title: 'Tata Motors',
  description: 'Next.js & Datacom CMS',
  imageUrl: 'https://seekvectorlogo.com/wp-content/uploads/2017/12/honda-power-products-vector-logo-small.png'
}, {
  id: 7,
  title: 'Escorts Ltd.',
  description: 'Next.js & Datacom CMS',
  imageUrl: 'https://seekvectorlogo.com/wp-content/uploads/2017/12/honda-power-products-vector-logo-small.png'
}, {
  id: 8,
  title: 'TVS motorcycles',
  description: 'Next.js & Datacom CMS',
  imageUrl: 'https://seekvectorlogo.com/wp-content/uploads/2017/12/honda-power-products-vector-logo-small.png'
}];
/* harmony default export */ __webpack_exports__["default"] = (PORTFOLIO_DATA);

/***/ }),

/***/ "./components/Data/MachineData.js":
/*!****************************************!*\
  !*** ./components/Data/MachineData.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const MACHINE_DATA = [{
  id: 1,
  name: 'Carbon Sulphur Appartus',
  description: 'Lorem ipsum dolor sit amet, ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in',
  imageUrl: 'https://5.imimg.com/data5/KA/FF/MY-45525125/carbon-sulphur-apparatus-500x500.jpg'
}, {
  id: 2,
  name: 'Carbon Sulphur Appartus',
  description: 'Lorem ipsum dolor sit amet, ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in',
  imageUrl: 'https://5.imimg.com/data5/KA/FF/MY-45525125/carbon-sulphur-apparatus-500x500.jpg'
}, {
  id: 3,
  name: 'Carbon Sulphur Appartus',
  description: 'Lorem ipsum efunijnfjinfh jneh fjnerfnr efne hjrfnhr efnhref dolor sit amet, ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in',
  imageUrl: 'https://5.imimg.com/data5/KA/FF/MY-45525125/carbon-sulphur-apparatus-500x500.jpg'
}, {
  id: 4,
  name: 'Carbon Sulphur Appartus',
  description: 'Lorem ipsum dolor sit amet, ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in',
  imageUrl: 'https://5.imimg.com/data5/KA/FF/MY-45525125/carbon-sulphur-apparatus-500x500.jpg'
}, {
  id: 5,
  name: 'Carbon Sulphur Appartus',
  description: 'Lorem ipsum dolor sit amet, ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in',
  imageUrl: 'https://5.imimg.com/data5/KA/FF/MY-45525125/carbon-sulphur-apparatus-500x500.jpg'
}];
/* harmony default export */ __webpack_exports__["default"] = (MACHINE_DATA);

/***/ }),

/***/ "./components/Data/PartnerData.js":
/*!****************************************!*\
  !*** ./components/Data/PartnerData.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const PARTNER_DATA = [{
  id: 1,
  name: 'Mr. Raghav Kumar',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  imageUrl: 'https://cbsnews1.cbsistatic.com/hub/i/r/2012/03/10/f8ea7194-d271-11e2-a43e-02911869d855/thumbnail/1200x630/cea1a937c30b8e1c52daadce7dd61be9/TheGodfather_02.jpg'
}, {
  id: 2,
  name: 'Mr. Raghav Kumar',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  imageUrl: 'https://cbsnews1.cbsistatic.com/hub/i/r/2012/03/10/f8ea7194-d271-11e2-a43e-02911869d855/thumbnail/1200x630/cea1a937c30b8e1c52daadce7dd61be9/TheGodfather_02.jpg'
}, {
  id: 3,
  name: 'Mr. Raghav Kumar',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  imageUrl: 'https://cbsnews1.cbsistatic.com/hub/i/r/2012/03/10/f8ea7194-d271-11e2-a43e-02911869d855/thumbnail/1200x630/cea1a937c30b8e1c52daadce7dd61be9/TheGodfather_02.jpg'
}];
/* harmony default export */ __webpack_exports__["default"] = (PARTNER_DATA);

/***/ }),

/***/ "./components/Data/ProductList.js":
/*!****************************************!*\
  !*** ./components/Data/ProductList.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const PRODUCTLIST_DATA = [{
  id: 1,
  name: 'BRIGHT DRAWN STEEL BARS',
  description: 'Lorem ipsum dolor sit amet, ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in',
  imageUrl: 'https://5.imimg.com/data5/KA/FF/MY-45525125/carbon-sulphur-apparatus-500x500.jpg'
}, {
  id: 2,
  name: 'GROUND BARS',
  description: 'Lorem ipsum dolor sit amet, ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in',
  imageUrl: 'https://5.imimg.com/data5/KA/FF/MY-45525125/carbon-sulphur-apparatus-500x500.jpg'
}, {
  id: 3,
  name: 'BRIGHT DRAWN STEEL WIRES',
  description: 'Lorem ipsum efunijnfjinfh jneh fjnerfnr efne hjrfnhr efnhref dolor sit amet, ullamco',
  imageUrl: 'https://5.imimg.com/data5/KA/FF/MY-45525125/carbon-sulphur-apparatus-500x500.jpg'
}];
/* harmony default export */ __webpack_exports__["default"] = (PRODUCTLIST_DATA);

/***/ }),

/***/ "./components/Data/ProductTable.js":
/*!*****************************************!*\
  !*** ./components/Data/ProductTable.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const PRODUCT_TABLE = [{
  id: 1,
  description: 'Free Cutting Steel',
  brit: 'EN1A(L)',
  brit2: 'EN1A',
  america: 'SAE 12L14',
  america2: 'SAE 12L13',
  count: '1'
}, {
  id: 2,
  description: 'Semi Free Cutting Steel',
  brit: "EN8M",
  brit2: "EN15AM",
  america: '',
  count: '2'
}, {
  id: 3,
  description: 'Carbon Steel',
  brit: 'EN3',
  brit2: 'EN8',
  brit3: 'EN8',
  america: '',
  count: '3'
}, {
  id: 4,
  description: 'Alloy Steel',
  brit: '16MnCr5',
  brit2: '20MnCr5',
  america: 'SAE 8620',
  america2: 'SAE 4320 ',
  america3: 'SAE4140',
  count: '4'
}];
/* harmony default export */ __webpack_exports__["default"] = (PRODUCT_TABLE);

/***/ }),

/***/ "./components/FabIcons/Landline.jsx":
/*!******************************************!*\
  !*** ./components/FabIcons/Landline.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LandlineExtendedIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Fab */ "@material-ui/core/Fab");
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_PermPhoneMsgOutlined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/PermPhoneMsgOutlined */ "@material-ui/icons/PermPhoneMsgOutlined");
/* harmony import */ var _material_ui_icons_PermPhoneMsgOutlined__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PermPhoneMsgOutlined__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/dev/Desktop/RK Engineering/components/FabIcons/Landline.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  margin: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));
function LandlineExtendedIcon() {
  const classes = useStyles();
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_2___default.a, {
    size: "small",
    variant: "extended",
    color: "secondary",
    "aria-label": "add",
    className: classes.margin,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx(_material_ui_icons_PermPhoneMsgOutlined__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: classes.extendedIcon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }), "012042831012"));
}

/***/ }),

/***/ "./components/FabIcons/Mail.jsx":
/*!**************************************!*\
  !*** ./components/FabIcons/Mail.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MailExtendedIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Fab */ "@material-ui/core/Fab");
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_MailOutlineOutlined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/MailOutlineOutlined */ "@material-ui/icons/MailOutlineOutlined");
/* harmony import */ var _material_ui_icons_MailOutlineOutlined__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MailOutlineOutlined__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/dev/Desktop/RK Engineering/components/FabIcons/Mail.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  margin: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));
function MailExtendedIcon() {
  const classes = useStyles();
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_2___default.a, {
    variant: "extended",
    color: "primary",
    "aria-label": "add",
    className: classes.margin,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx(_material_ui_icons_MailOutlineOutlined__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: classes.extendedIcon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }), "rkec@airtelmail.in"));
}

/***/ }),

/***/ "./components/FabIcons/Phone.jsx":
/*!***************************************!*\
  !*** ./components/FabIcons/Phone.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PhoneExtendedIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Fab */ "@material-ui/core/Fab");
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_CardTravel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/CardTravel */ "@material-ui/icons/CardTravel");
/* harmony import */ var _material_ui_icons_CardTravel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CardTravel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_PhoneOutlined__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/PhoneOutlined */ "@material-ui/icons/PhoneOutlined");
/* harmony import */ var _material_ui_icons_PhoneOutlined__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PhoneOutlined__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/dev/Desktop/RK Engineering/components/FabIcons/Phone.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  margin: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));
function PhoneExtendedIcon() {
  const classes = useStyles();
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_2___default.a, {
    size: "small",
    variant: "extended",
    color: "secondary",
    "aria-label": "add",
    className: classes.margin,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx(_material_ui_icons_PhoneOutlined__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.extendedIcon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }), "9810162130"));
}

/***/ }),

/***/ "./components/Future/DropDown.jsx":
/*!****************************************!*\
  !*** ./components/Future/DropDown.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Transition_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Transition.js */ "./components/Future/Transition.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ClickAwayListener */ "@material-ui/core/ClickAwayListener");
/* harmony import */ var _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/dev/Desktop/RK Engineering/components/Future/DropDown.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  root: {
    position: 'relative'
  },
  dropdown: {
    position: 'absolute',
    top: 28,
    right: 0,
    left: 0,
    zIndex: 1,
    border: '1px solid',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper
  }
}));

function DropDown() {
  const classes = useStyles();
  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);

  const handleClick = () => {
    setOpen(prev => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return __jsx(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_3___default.a, {
    onClickAway: handleClickAway,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "relative inline-block text-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, __jsx("button", {
    type: "button",
    onClick: handleClick,
    className: "inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, "Facilities", __jsx("svg", {
    class: "-mr-1 ml-2 h-5 w-5",
    fill: "currentColor",
    viewBox: "0 0 20 20",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx("path", {
    "fill-rule": "evenodd",
    d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
    "clip-rule": "evenodd",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }))), open ? __jsx("div", {
    className: "origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "rounded-md bg-white shadow-xs",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "#",
    class: "block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, "Flow Chart"), __jsx("a", {
    href: "#",
    class: "block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, "Testing Facilities"), __jsx("a", {
    href: "#",
    class: "block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, "Quality Promise"))) : null));
}

/* harmony default export */ __webpack_exports__["default"] = (DropDown);

/***/ }),

/***/ "./components/Future/Header.js":
/*!*************************************!*\
  !*** ./components/Future/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Menu */ "@material-ui/icons/Menu");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _SideDrawer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SideDrawer */ "./components/Future/SideDrawer.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _portfolio_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../portfolio.styles */ "./components/portfolio.styles.jsx");
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Tabs */ "@material-ui/core/Tabs");
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Tab */ "@material-ui/core/Tab");
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _iconcircele__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../iconcircele */ "./components/iconcircele.jsx");
/* harmony import */ var _DropDown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./DropDown */ "./components/Future/DropDown.jsx");
var _jsxFileName = "/Users/dev/Desktop/RK Engineering/components/Future/Header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















class Header extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      drawerOpen: false,
      headerShow: false
    });

    _defineProperty(this, "handleScroll", () => {
      if (window.scrollY > 0) {
        this.setState({
          headerShow: true
        });
      } else {
        this.setState({
          headerShow: false
        });
      }
    });

    _defineProperty(this, "toggleDrawer", value => {
      this.setState({
        drawerOpen: value
      });
    });
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  render() {
    return __jsx("div", {
      className: "mb-16",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1___default.a, {
      position: "fixed",
      style: {
        backgroundColor: this.state.headerShow ? '#F7FAFC' : 'white',
        boxShadow: this.state.headerShow ? '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)' : 'none',
        padding: '10px 0px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }
    }, __jsx("div", {
      style: {
        flexGrow: 1
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "text-indigo-400 text-xl",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 16
      }
    }, " RK Engineering "), __jsx("div", {
      className: "text-indigo-300",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 16
      }
    }, " Corporation ")), __jsx(_portfolio_styles__WEBPACK_IMPORTED_MODULE_8__["Desktop"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 12
      }
    }, __jsx("div", {
      className: "text-gray-600 text-lg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 15
      }
    }, __jsx(_portfolio_styles__WEBPACK_IMPORTED_MODULE_8__["FontRoboto"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 19
      }
    }, __jsx("div", {
      className: "inline mx-4 hover:text-indigo-600",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 19
      }
    }, "Home"), __jsx("div", {
      className: "inline mx-4 hover:text-indigo-600",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 19
      }
    }, "Leadership"), __jsx(_DropDown__WEBPACK_IMPORTED_MODULE_12__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 19
      }
    })))), __jsx(_portfolio_styles__WEBPACK_IMPORTED_MODULE_8__["MobileOnly"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3___default.a, {
      color: "primary",
      "aria-label": "Menu",
      onClick: () => this.toggleDrawer(true),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 17
      }
    }, __jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_4___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 20
      }
    }))), __jsx(_SideDrawer__WEBPACK_IMPORTED_MODULE_5__["default"], {
      open: this.state.drawerOpen,
      onClose: value => this.toggleDrawer(value),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 15
      }
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Future/List.jsx":
/*!************************************!*\
  !*** ./components/Future/List.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NestedList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/ListSubheader */ "@material-ui/core/ListSubheader");
/* harmony import */ var _material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/List */ "@material-ui/core/List");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "@material-ui/core/ListItemIcon");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "@material-ui/core/ListItemText");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Collapse */ "@material-ui/core/Collapse");
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/MoveToInbox */ "@material-ui/icons/MoveToInbox");
/* harmony import */ var _material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoveToInbox__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Drafts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Drafts */ "@material-ui/icons/Drafts");
/* harmony import */ var _material_ui_icons_Drafts__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Drafts__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Send */ "@material-ui/icons/Send");
/* harmony import */ var _material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Send__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/ExpandLess */ "@material-ui/icons/ExpandLess");
/* harmony import */ var _material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "@material-ui/icons/ExpandMore");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_StarBorder__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/StarBorder */ "@material-ui/icons/StarBorder");
/* harmony import */ var _material_ui_icons_StarBorder__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_StarBorder__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_HomeOutlined__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/HomeOutlined */ "@material-ui/icons/HomeOutlined");
/* harmony import */ var _material_ui_icons_HomeOutlined__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_HomeOutlined__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_AccountCircleOutlined__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/AccountCircleOutlined */ "@material-ui/icons/AccountCircleOutlined");
/* harmony import */ var _material_ui_icons_AccountCircleOutlined__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccountCircleOutlined__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_icons_CardTravel__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/CardTravel */ "@material-ui/icons/CardTravel");
/* harmony import */ var _material_ui_icons_CardTravel__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CardTravel__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_icons_AccountTreeOutlined__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/AccountTreeOutlined */ "@material-ui/icons/AccountTreeOutlined");
/* harmony import */ var _material_ui_icons_AccountTreeOutlined__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccountTreeOutlined__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_icons_LibraryAddCheckOutlined__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/icons/LibraryAddCheckOutlined */ "@material-ui/icons/LibraryAddCheckOutlined");
/* harmony import */ var _material_ui_icons_LibraryAddCheckOutlined__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LibraryAddCheckOutlined__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_icons_DoneAllOutlined__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/icons/DoneAllOutlined */ "@material-ui/icons/DoneAllOutlined");
/* harmony import */ var _material_ui_icons_DoneAllOutlined__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_DoneAllOutlined__WEBPACK_IMPORTED_MODULE_19__);
var _jsxFileName = "/Users/dev/Desktop/RK Engineering/components/Future/List.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




















const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  root: {
    width: '350',
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing(4)
  }
}));
function NestedList() {
  const classes = useStyles();
  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return __jsx("div", {
    className: "w-64",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }, "    ", __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3___default.a, {
    component: "nav",
    "aria-labelledby": "nested-list-subheader",
    subheader: __jsx(_material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_2___default.a, {
      component: "div",
      id: "nested-list-subheader",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }
    }, "RK Engineering Corporation"),
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 31
    }
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
    button: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, __jsx(_material_ui_icons_HomeOutlined__WEBPACK_IMPORTED_MODULE_14___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6___default.a, {
    primary: "Home",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
    button: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, __jsx(_material_ui_icons_AccountCircleOutlined__WEBPACK_IMPORTED_MODULE_15___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6___default.a, {
    primary: "Leadership",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
    button: true,
    onClick: handleClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, __jsx(_material_ui_icons_CardTravel__WEBPACK_IMPORTED_MODULE_16___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6___default.a, {
    primary: "Facilities",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }), open ? __jsx(_material_ui_icons_ExpandLess__WEBPACK_IMPORTED_MODULE_11___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 17
    }
  }) : __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_12___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 34
    }
  })), __jsx(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_7___default.a, {
    in: open,
    timeout: "auto",
    unmountOnExit: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3___default.a, {
    component: "div",
    disablePadding: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_AccountTreeOutlined__WEBPACK_IMPORTED_MODULE_17___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6___default.a, {
    primary: "Flow Chart",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  })), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_LibraryAddCheckOutlined__WEBPACK_IMPORTED_MODULE_18___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6___default.a, {
    primary: "Testing Facilities",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  })), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
    button: true,
    className: classes.nested,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_DoneAllOutlined__WEBPACK_IMPORTED_MODULE_19___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 15
    }
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6___default.a, {
    primary: "Quality Promise",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  }))))));
}

/***/ }),

/***/ "./components/Future/SideDrawer.js":
/*!*****************************************!*\
  !*** ./components/Future/SideDrawer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Drawer */ "@material-ui/core/Drawer");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/List */ "@material-ui/core/List");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_MessageOutlined__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/MessageOutlined */ "@material-ui/icons/MessageOutlined");
/* harmony import */ var _material_ui_icons_MessageOutlined__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MessageOutlined__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_HomeOutlined__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/HomeOutlined */ "@material-ui/icons/HomeOutlined");
/* harmony import */ var _material_ui_icons_HomeOutlined__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_HomeOutlined__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_ThumbUpOutlined__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/ThumbUpOutlined */ "@material-ui/icons/ThumbUpOutlined");
/* harmony import */ var _material_ui_icons_ThumbUpOutlined__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ThumbUpOutlined__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./List */ "./components/Future/List.jsx");
var _jsxFileName = "/Users/dev/Desktop/RK Engineering/components/Future/SideDrawer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










const SideDrawer = props => {
  return __jsx(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_1___default.a, {
    anchor: "right",
    open: props.open,
    onClose: () => props.onClose(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx(_List__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 1
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SideDrawer);

/***/ }),

/***/ "./components/Future/Transition.js":
/*!*****************************************!*\
  !*** ./components/Future/Transition.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-transition-group */ "react-transition-group");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/dev/Desktop/RK Engineering/components/Future/Transition.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const TransitionContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({
  parent: {}
});

function useIsInitialRender() {
  const isInitialRender = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(true);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    isInitialRender.current = false;
  }, []);
  return isInitialRender.current;
}

function CSSTransition({
  show,
  enter = '',
  enterFrom = '',
  enterTo = '',
  leave = '',
  leaveFrom = '',
  leaveTo = '',
  appear,
  children
}) {
  const enterClasses = enter.split(' ').filter(s => s.length);
  const enterFromClasses = enterFrom.split(' ').filter(s => s.length);
  const enterToClasses = enterTo.split(' ').filter(s => s.length);
  const leaveClasses = leave.split(' ').filter(s => s.length);
  const leaveFromClasses = leaveFrom.split(' ').filter(s => s.length);
  const leaveToClasses = leaveTo.split(' ').filter(s => s.length);

  function addClasses(node, classes) {
    classes.length && node.classList.add(...classes);
  }

  function removeClasses(node, classes) {
    classes.length && node.classList.remove(...classes);
  }

  return __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_1__["CSSTransition"], {
    appear: appear,
    unmountOnExit: true,
    in: show,
    addEndListener: (node, done) => {
      node.addEventListener('transitionend', done, false);
    },
    onEnter: node => {
      addClasses(node, [...enterClasses, ...enterFromClasses]);
    },
    onEntering: node => {
      removeClasses(node, enterFromClasses);
      addClasses(node, enterToClasses);
    },
    onEntered: node => {
      removeClasses(node, [...enterToClasses, ...enterClasses]);
    },
    onExit: node => {
      addClasses(node, [...leaveClasses, ...leaveFromClasses]);
    },
    onExiting: node => {
      removeClasses(node, leaveFromClasses);
      addClasses(node, leaveToClasses);
    },
    onExited: node => {
      removeClasses(node, [...leaveToClasses, ...leaveClasses]);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, children);
}

function Transition(_ref) {
  let {
    show,
    appear
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["show", "appear"]);

  const {
    parent
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(TransitionContext);
  const isInitialRender = useIsInitialRender();
  const isChild = show === undefined;

  if (isChild) {
    return __jsx(CSSTransition, _extends({
      appear: parent.appear || !parent.isInitialRender,
      show: parent.show
    }, rest, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 7
      }
    }));
  }

  return __jsx(TransitionContext.Provider, {
    value: {
      parent: {
        show,
        isInitialRender,
        appear
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 5
    }
  }, __jsx(CSSTransition, _extends({
    appear: appear,
    show: show
  }, rest, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Transition);

/***/ }),

/***/ "./components/Leaders/LeaderLayout.jsx":
/*!*********************************************!*\
  !*** ./components/Leaders/LeaderLayout.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Cards_AddressCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Cards/AddressCard */ "./components/Cards/AddressCard.jsx");
/* harmony import */ var _Data_PartnerData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Data/PartnerData */ "./components/Data/PartnerData.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Apartment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Apartment */ "@material-ui/icons/Apartment");
/* harmony import */ var _material_ui_icons_Apartment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Apartment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _iconcircele__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../iconcircele */ "./components/iconcircele.jsx");
/* harmony import */ var _portfolio_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../portfolio.styles */ "./components/portfolio.styles.jsx");
/* harmony import */ var _Cards_LeaderCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Cards/LeaderCard */ "./components/Cards/LeaderCard.jsx");
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/AccountCircle */ "@material-ui/icons/AccountCircle");
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "/Users/dev/Desktop/RK Engineering/components/Leaders/LeaderLayout.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










class AddressList extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      leaders: _Data_PartnerData__WEBPACK_IMPORTED_MODULE_2__["default"]
    };
  }

  render() {
    const {
      leaders
    } = this.state;
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "mx-4 mb-2 md:mb-4 text-indigo-400 md:ml-4 text-4xl font-medium",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 13
      }
    }, __jsx(_iconcircele__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 18
      }
    }, __jsx(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_8___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 30
      }
    })), " Leadership"), __jsx("div", {
      className: "md:flex md:pl-4 mr-4 md:mx-0",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 5
      }
    }, leaders.map(({
      name,
      description,
      imageUrl,
      id
    }) => __jsx("div", {
      className: "ml-4 md:ml-0 md:mr-4 mb-4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 20
      }
    }, __jsx(_Cards_LeaderCard__WEBPACK_IMPORTED_MODULE_7__["default"], {
      key: id,
      description: description,
      name: name,
      imageUrl: imageUrl,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 20
      }
    })))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (AddressList);

/***/ }),

/***/ "./components/Machine/machinelist.jsx":
/*!********************************************!*\
  !*** ./components/Machine/machinelist.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Cards_MachineCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Cards/MachineCard */ "./components/Cards/MachineCard.jsx");
/* harmony import */ var _Data_MachineData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Data/MachineData */ "./components/Data/MachineData.js");
/* harmony import */ var _portfolio_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../portfolio.styles */ "./components/portfolio.styles.jsx");
/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-swipeable-views */ "react-swipeable-views");
/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_swipeable_views__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/dev/Desktop/RK Engineering/components/Machine/machinelist.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






class MachineList extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      machines: _Data_MachineData__WEBPACK_IMPORTED_MODULE_2__["default"]
    };
  }

  render() {
    const {
      machines
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
        lineNumber: 31,
        columnNumber: 13
      }
    }, __jsx(_portfolio_styles__WEBPACK_IMPORTED_MODULE_3__["PreviewContainer"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }
    }, machines.map(({
      name,
      description,
      id,
      imageUrl
    }) => __jsx(_Cards_MachineCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: id,
      description: description,
      name: name,
      imageUrl: imageUrl,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 20
      }
    }))), __jsx(_portfolio_styles__WEBPACK_IMPORTED_MODULE_3__["MobileOnly"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 13
      }
    }, __jsx(react_swipeable_views__WEBPACK_IMPORTED_MODULE_4___default.a, {
      style: styles.root,
      slideStyle: styles.slideContainer,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 16
      }
    }, machines.map(({
      name,
      description,
      id,
      imageUrl
    }) => __jsx(_Cards_MachineCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: id,
      description: description,
      name: name,
      imageUrl: imageUrl,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 20
      }
    })))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MachineList);

/***/ }),

/***/ "./components/Product/Facilitiesbutton.jsx":
/*!*************************************************!*\
  !*** ./components/Product/Facilitiesbutton.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FacilitiesExtendedIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Fab */ "@material-ui/core/Fab");
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_CardTravel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/CardTravel */ "@material-ui/icons/CardTravel");
/* harmony import */ var _material_ui_icons_CardTravel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CardTravel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Menu */ "@material-ui/core/Menu");
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/dev/Desktop/RK Engineering/components/Product/Facilitiesbutton.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  margin: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));
function FacilitiesExtendedIcon() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_2___default.a, {
    variant: "extended",
    color: "primary",
    "aria-label": "add",
    className: classes.margin,
    "aria-controls": "simple-menu",
    "aria-haspopup": "true",
    onClick: handleClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx(_material_ui_icons_CardTravel__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: classes.extendedIcon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }), "Facilites"), __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "simple-menu",
    anchorEl: anchorEl,
    keepMounted: true,
    open: Boolean(anchorEl),
    onClose: handleClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
    onClick: handleClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, "Flow Chart"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
    onClick: handleClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, "Testing Facilities"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
    onClick: handleClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, "Quality Promise")));
}

/***/ }),

/***/ "./components/Product/Product.jsx":
/*!****************************************!*\
  !*** ./components/Product/Product.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_LocalShippingOutlined__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/LocalShippingOutlined */ "@material-ui/icons/LocalShippingOutlined");
/* harmony import */ var _material_ui_icons_LocalShippingOutlined__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LocalShippingOutlined__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Machine_machinelist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Machine/machinelist */ "./components/Machine/machinelist.jsx");
/* harmony import */ var _iconcircele__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../iconcircele */ "./components/iconcircele.jsx");
/* harmony import */ var _portfolio_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../portfolio.styles */ "./components/portfolio.styles.jsx");
/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Table */ "./components/Product/Table.jsx");
/* harmony import */ var _ProductList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ProductList */ "./components/Product/ProductList.jsx");
/* harmony import */ var _Facilitiesbutton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Facilitiesbutton */ "./components/Product/Facilitiesbutton.jsx");
/* harmony import */ var _Future_DropDown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Future/DropDown */ "./components/Future/DropDown.jsx");
var _jsxFileName = "/Users/dev/Desktop/RK Engineering/components/Product/Product.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const image1 = 'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fannatobin%2Ffiles%2F2019%2F02%2F5G-factory-UK-1200x675.jpg';
const image2 = 'https://i.imgur.com/imxGeLF.png';

const ProductDetail = () => __jsx("div", {
  className: "md:mt-4 mb-8 md:mx-16 bg-gray-100 md:bg-white shadow-lg rounded-lg md:border-indigo-200 ",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 1
  }
}, __jsx("br", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }
}), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
  container: true,
  spacing: 1,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 9
  }
}, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
  item: true,
  md: 9,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 13
  }
}, __jsx("div", {
  className: "ml-8 md:ml-4 text-4xl md:text-6xl text-indigo-500 text-bold font-medium",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 9
  }
}, __jsx(_iconcircele__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 7
  }
}, __jsx(_material_ui_icons_LocalShippingOutlined__WEBPACK_IMPORTED_MODULE_2___default.a, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 7
  }
})), "PRODUCTS"), __jsx("div", {
  className: "mx-8 md:mx-4",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 6
  }
}, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
  variant: "subtitle1",
  color: "textSecondary",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }
}, "We manufacture a wide range of grades and sizes to cater to the wide variety of requirements in the industry. An optimum raw material stock is also maintained to provide timely delivery of goods to our customers. The raw material is sourced from the most reputed steel rolling producers in our country. We process free cutting, semi free cutting, carbon steel and other alloy grades conforming to British and American standard specification.", __jsx("br", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }
}), __jsx("br", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 10
  }
}), "The grade of steel processed at our plant are as follows:")))), __jsx("br", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 5
  }
}), __jsx(_Table__WEBPACK_IMPORTED_MODULE_6__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 5
  }
}), __jsx("br", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 5
  }
}), __jsx("div", {
  className: "mx-8 md:mx-4",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 5
  }
}, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
  variant: "subtitle1",
  color: "textSecondary",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 5
  }
}, "We supply the material in the following forms:"), __jsx("br", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 5
  }
}), __jsx(_ProductList__WEBPACK_IMPORTED_MODULE_7__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 5
  }
}), __jsx("div", {
  className: "m-4 mb-2",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 1
  }
}, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
  variant: "subtitle2",
  color: "textPrimary",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 5
  }
}, "Check out the Facilities provide by us! ", __jsx("br", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 45
  }
}), " (by clicking the button down below)")), __jsx(_Facilitiesbutton__WEBPACK_IMPORTED_MODULE_8__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 5
  }
}), __jsx("br", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 5
  }
})));

/* harmony default export */ __webpack_exports__["default"] = (ProductDetail);

/***/ }),

/***/ "./components/Product/ProductList.jsx":
/*!********************************************!*\
  !*** ./components/Product/ProductList.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Cards_MachineCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Cards/MachineCard */ "./components/Cards/MachineCard.jsx");
/* harmony import */ var _Data_ProductList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Data/ProductList */ "./components/Data/ProductList.js");
/* harmony import */ var _portfolio_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../portfolio.styles */ "./components/portfolio.styles.jsx");
/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-swipeable-views */ "react-swipeable-views");
/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_swipeable_views__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/dev/Desktop/RK Engineering/components/Product/ProductList.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






class ProductList extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      products: _Data_ProductList__WEBPACK_IMPORTED_MODULE_2__["default"]
    };
  }

  render() {
    const {
      products
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
        lineNumber: 31,
        columnNumber: 13
      }
    }, __jsx(_portfolio_styles__WEBPACK_IMPORTED_MODULE_3__["PreviewContainer"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }
    }, products.map(({
      name,
      description,
      id,
      imageUrl
    }) => __jsx(_Cards_MachineCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: id,
      description: description,
      name: name,
      imageUrl: imageUrl,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 20
      }
    }))), __jsx(_portfolio_styles__WEBPACK_IMPORTED_MODULE_3__["MobileOnly"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 13
      }
    }, __jsx(react_swipeable_views__WEBPACK_IMPORTED_MODULE_4___default.a, {
      style: styles.root,
      slideStyle: styles.slideContainer,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 16
      }
    }, products.map(({
      name,
      description,
      id,
      imageUrl
    }) => __jsx(_Cards_MachineCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: id,
      description: description,
      name: name,
      imageUrl: imageUrl,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 20
      }
    })))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ProductList);

/***/ }),

/***/ "./components/Product/Table.jsx":
/*!**************************************!*\
  !*** ./components/Product/Table.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SimpleTable; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Table */ "@material-ui/core/Table");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TableBody */ "@material-ui/core/TableBody");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TableCell */ "@material-ui/core/TableCell");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TableContainer */ "@material-ui/core/TableContainer");
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TableHead */ "@material-ui/core/TableHead");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TableRow */ "@material-ui/core/TableRow");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Data_ProductTable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Data/ProductTable */ "./components/Data/ProductTable.js");
var _jsxFileName = "/Users/dev/Desktop/RK Engineering/components/Product/Table.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  table: {
    minWidth: 650
  }
});
const rows = _Data_ProductTable__WEBPACK_IMPORTED_MODULE_9__["default"];
function SimpleTable() {
  const classes = useStyles();
  return __jsx(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: classes.table,
    "aria-label": "simple table",
    size: "small",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, "Description"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, "British Standard"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, "American Standard"))), __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, rows.map(row => __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7___default.a, {
    key: row.id,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 15
    }
  }, row.description), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, row.brit, __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 32
    }
  }), row.brit2, __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 48
    }
  }), row.brit3), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 15
    }
  }, row.america, __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 39
    }
  }), row.america2, __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 58
    }
  }), row.america3))))));
}

/***/ }),

/***/ "./components/SlideShow/Demo.jsx":
/*!***************************************!*\
  !*** ./components/SlideShow/Demo.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/KeyboardArrowRight */ "@material-ui/icons/KeyboardArrowRight");
/* harmony import */ var _material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/KeyboardArrowLeft */ "@material-ui/icons/KeyboardArrowLeft");
/* harmony import */ var _material_ui_icons_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_treasury_components_slide_parallax__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui-treasury/components/slide/parallax */ "@mui-treasury/components/slide/parallax");
/* harmony import */ var _mui_treasury_components_slide_parallax__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_treasury_components_slide_parallax__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_treasury_components_indicator_dot__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui-treasury/components/indicator/dot */ "@mui-treasury/components/indicator/dot");
/* harmony import */ var _mui_treasury_components_indicator_dot__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_treasury_components_indicator_dot__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_treasury_styles_button_arrowDark__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui-treasury/styles/button/arrowDark */ "@mui-treasury/styles/button/arrowDark");
/* harmony import */ var _mui_treasury_styles_button_arrowDark__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_treasury_styles_button_arrowDark__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "/Users/dev/Desktop/RK Engineering/components/SlideShow/Demo.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const data = [{
  id: 1,
  title: 'Huarache',
  subtitle: 'Gripp',
  image: // eslint-disable-next-line max-len
  'https://firebasestorage.googleapis.com/v0/b/mui-treasury.appspot.com/o/public%2Fshoes%2Fair-huarache-gripp.png?alt=media'
}, {
  id: 2,
  title: 'Air Max',
  subtitle: '270 P',
  image: // eslint-disable-next-line max-len
  'https://firebasestorage.googleapis.com/v0/b/mui-treasury.appspot.com/o/public%2Fshoes%2Fair-max-270.png?alt=media'
}, {
  id: 3,
  title: 'Air Max',
  subtitle: 'Deluxe',
  image: // eslint-disable-next-line max-len
  'https://firebasestorage.googleapis.com/v0/b/mui-treasury.appspot.com/o/public%2Fshoes%2Fair-max-deluxe.png?alt=media'
}];
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(({
  palette,
  breakpoints,
  spacing
}) => ({
  root: {
    // a must if you want to set arrows, indicator as absolute
    position: 'relative',
    width: '100%'
  },
  slide: {
    perspective: 1000,
    // create perspective
    overflow: 'hidden',
    // relative is a must if you want to create overlapping layers in children
    position: 'relative',
    paddingTop: spacing(8),
    [breakpoints.up('sm')]: {
      paddingTop: spacing(10)
    },
    [breakpoints.up('md')]: {
      paddingTop: spacing(14)
    }
  },
  imageContainer: {
    display: 'block',
    position: 'relative',
    zIndex: 2,
    paddingBottom: '56.25%'
  },
  image: {
    display: 'block',
    position: 'absolute',
    zIndex: 10,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    marginLeft: '12%',
    [breakpoints.up('sm')]: {
      marginLeft: '4%'
    }
  },
  arrow: {
    display: 'none',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    [breakpoints.up('sm')]: {
      display: 'inline-flex'
    }
  },
  arrowLeft: {
    left: 0,
    [breakpoints.up('lg')]: {
      left: -64
    }
  },
  arrowRight: {
    right: 0,
    [breakpoints.up('lg')]: {
      right: -64
    }
  },
  text: {
    // shared style for text-top and text-bottom
    fontFamily: 'Poppins, san-serif',
    fontWeight: 900,
    position: 'absolute',
    color: palette.common.white,
    padding: '0 8px',
    transform: 'rotateY(45deg)',
    lineHeight: 1.2,
    [breakpoints.up('sm')]: {
      padding: '0 16px'
    },
    [breakpoints.up('md')]: {
      padding: '0 24px'
    }
  },
  title: {
    top: 20,
    left: '20%',
    height: '40%',
    fontSize: 40,
    zIndex: 1,
    background: 'linear-gradient(0deg, rgba(255,255,255,0) 0%, #9c9c9c 100%)',
    [breakpoints.up('sm')]: {
      top: 40,
      fontSize: 72
    },
    [breakpoints.up('md')]: {
      top: 52,
      fontSize: 72
    }
  },
  subtitle: {
    top: 60,
    left: '0%',
    height: '52%',
    fontSize: 56,
    zIndex: 2,
    background: 'linear-gradient(0deg, rgba(255,255,255,0) 0%, #888888 100%)',
    [breakpoints.up('sm')]: {
      top: 112,
      left: '6%',
      fontSize: 96
    },
    [breakpoints.up('md')]: {
      top: 128,
      fontSize: 104
    }
  },
  indicatorContainer: {
    textAlign: 'center'
  }
}));

const ParallaxCarousel = () => {
  const classes = useStyles();
  const arrowStyles = Object(_mui_treasury_styles_button_arrowDark__WEBPACK_IMPORTED_MODULE_9__["useArrowDarkButtonStyles"])();

  const createStyle = (slideIndex, fineIndex) => {
    const diff = slideIndex - fineIndex;
    if (Math.abs(diff) > 1) return {};
    return {
      transform: `rotateY(${(-diff + 1) * 45}deg)`
    };
  }; // eslint-disable-next-line react/prop-types


  const renderElements = ({
    index,
    onChangeIndex
  }) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(classes.arrow, classes.arrowLeft),
    classes: arrowStyles,
    disabled: index === 0,
    onClick: () => onChangeIndex(index - 1),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 7
    }
  }, __jsx(_material_ui_icons_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 9
    }
  })), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(classes.arrow, classes.arrowRight),
    classes: arrowStyles,
    disabled: index === data.length - 1,
    onClick: () => onChangeIndex(index + 1),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 7
    }
  }, __jsx(_material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: classes.indicatorContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 7
    }
  }, data.map(({
    id
  }, i) => __jsx(_mui_treasury_components_indicator_dot__WEBPACK_IMPORTED_MODULE_8___default.a, {
    key: id,
    active: i === index,
    onClick: () => onChangeIndex(i),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 11
    }
  }))));

  const renderChildren = ({
    injectStyle,
    fineIndex
  }) => data.map(({
    id,
    title,
    subtitle,
    image
  }, i) => __jsx("div", {
    key: id,
    className: classes.slide,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
    noWrap: true,
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(classes.text, classes.title),
    style: _objectSpread(_objectSpread({}, injectStyle(i, 60)), createStyle(i, fineIndex)),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 9
    }
  }, title), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
    noWrap: true,
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(classes.text, classes.subtitle),
    style: _objectSpread(_objectSpread({}, injectStyle(i, 40)), createStyle(i, fineIndex)),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 9
    }
  }, subtitle), __jsx("div", {
    className: classes.imageContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 9
    }
  }, __jsx("img", {
    className: classes.image,
    src: image,
    alt: 'slide',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 11
    }
  }))));

  return __jsx("div", {
    className: classes.root,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 5
    }
  }, __jsx(_mui_treasury_components_slide_parallax__WEBPACK_IMPORTED_MODULE_7___default.a, {
    renderElements: renderElements,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 7
    }
  }, renderChildren));
};

/* harmony default export */ __webpack_exports__["default"] = (ParallaxCarousel);

/***/ }),

/***/ "./components/footer/Footer.jsx":
/*!**************************************!*\
  !*** ./components/footer/Footer.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/dev/Desktop/RK Engineering/components/footer/Footer.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Copyright() {
  return __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1___default.a, {
    variant: "body2",
    color: "textSecondary",
    align: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 7
    }
  }, 'Copyright © ', "RK Engineering Corporation", ' ', new Date().getFullYear(), '.');
}

const Footer = () => __jsx("div", {
  className: "bg-gray-100 h-32",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }
}, __jsx("br", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 7
  }
}), __jsx("div", {
  className: "mt-8",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 7
  }
}, __jsx(Copyright, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 7
  }
})));

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/googleforms.jsx":
/*!************************************!*\
  !*** ./components/googleforms.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_MessageOutlined__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/MessageOutlined */ "@material-ui/icons/MessageOutlined");
/* harmony import */ var _material_ui_icons_MessageOutlined__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MessageOutlined__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_FabIcons_Landline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/FabIcons/Landline */ "./components/FabIcons/Landline.jsx");
/* harmony import */ var _components_FabIcons_Mail__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/FabIcons/Mail */ "./components/FabIcons/Mail.jsx");
/* harmony import */ var _components_FabIcons_Phone__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/FabIcons/Phone */ "./components/FabIcons/Phone.jsx");
var _jsxFileName = "/Users/dev/Desktop/RK Engineering/components/googleforms.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const GoogleForm = () => __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }
}, __jsx("form", {
  action: "https://docs.google.com/forms/u/0/d/e/1FAIpQLScQqZCHMp0Cw6xv3CvAAlQZf7bMmfnKz4qAXSh2_eRaInSjgw/formResponse",
  method: "post",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }
}, __jsx("div", {
  className: "md:mx-12 mt-4 text-indigo-400 text-center text-bold text-4xl font-medium",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }
}, "Message Us"), __jsx("p", {
  className: "mx-4 mb-4 md:mx-24 text-center text-gray-600 text-lg md:text-base font-thin",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 6
  }
}, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium totam omnis distinctio beatae sunt aliquam explicabo, asperiores perspiciatis quos deleniti reiciendis sit molestias architecto maiores vitae accusamus. Illum, quod voluptatem."), __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5___default.a, {
  component: "main",
  maxWidth: "xs",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 12
  }
}, __jsx("div", {
  className: "mb-4",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 13
  }
}, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1___default.a, {
  name: "entry.1204567259",
  label: "E-Mail",
  type: "email",
  required: true,
  fullWidth: true,
  variant: "outlined",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 35
  }
})), __jsx("div", {
  className: "mb-4",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 11
  }
}, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1___default.a, {
  type: "text",
  name: "entry.570675750",
  label: "Name",
  required: true,
  fullWidth: true,
  variant: "outlined",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 33
  }
})), __jsx("div", {
  className: "mb-4",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 11
  }
}, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_1___default.a, {
  name: "entry.1753231462",
  label: "Message",
  multiline: true,
  rows: 4,
  required: true,
  fullWidth: true,
  variant: "outlined",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 33
  }
})), __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 11
  }
}, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
  variant: "outlined",
  color: "primary",
  type: "submit",
  fullWidth: true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 16
  }
}, "Submit")))));

/* harmony default export */ __webpack_exports__["default"] = (GoogleForm);

/***/ }),

/***/ "./components/iconcircele.jsx":
/*!************************************!*\
  !*** ./components/iconcircele.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CircleIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Avatar */ "@material-ui/core/Avatar");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/dev/Desktop/RK Engineering/components/iconcircele.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main
  }
}));
function CircleIcon(props) {
  const classes = useStyles();
  return __jsx(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: classes.avatar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, props.children);
}

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
var _jsxFileName = "/Users/dev/Desktop/RK Engineering/components/images/home/homeimage.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function HomeImage() {
  return __jsx("img", {
    src: "/home.jpeg",
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

/***/ "./components/parallax.jsx":
/*!*********************************!*\
  !*** ./components/parallax.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-parallax */ "react-parallax");
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_parallax__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _portfolio_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./portfolio.styles */ "./components/portfolio.styles.jsx");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/dev/Desktop/RK Engineering/components/parallax.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Iarallax = ({
  imageUrl
}) => __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }
}, __jsx(react_parallax__WEBPACK_IMPORTED_MODULE_1__["Parallax"], {
  blur: 5,
  bgImage: imageUrl,
  strength: 500,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }
}, __jsx("div", {
  style: {
    height: 380
  },
  className: "border-2  border-white",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 7
  }
}, __jsx("div", {
  className: "text-center",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 12
  }
}, __jsx("p", {
  className: "md:-mb-4 mt-8 md:mt-16 text-white text-4xl md:text-7xl",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 12
  }
}, "Welcome To "), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3___default.a, {
  bottom: true,
  delay: 1100,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }
}, "  ", __jsx("p", {
  className: "text-white text-6xl md:text-7xl font-bold mb-4 ",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 33
  }
}, "RK Engineering Corporation"), "     "), __jsx("p", {
  className: "mx-4 mb-4 md:mx-64 text-white md:text-lg font-thin",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 11
  }
}, "RK engineering Corporation is a leading bright bar manufacturing company catering to the needs of innumerable automotive ancillary units in Northern India for nearly five decades , the company\u2019s name is synonymous with quality and prompt delivery of goods")))));

/* harmony default export */ __webpack_exports__["default"] = (Iarallax);

/***/ }),

/***/ "./components/parallax2.jsx":
/*!**********************************!*\
  !*** ./components/parallax2.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-parallax */ "react-parallax");
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_parallax__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _portfolio_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./portfolio.styles */ "./components/portfolio.styles.jsx");
var _jsxFileName = "/Users/dev/Desktop/RK Engineering/components/parallax2.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Iarallax2 = ({
  imageUrl
}) => __jsx("div", {
  className: "mb-8",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }
}, __jsx(react_parallax__WEBPACK_IMPORTED_MODULE_1__["Parallax"], {
  blur: {
    min: 1,
    max: 5
  },
  bgImage: imageUrl,
  strength: 500,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }
}, __jsx("div", {
  style: {
    height: '100%'
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 7
  }
}, __jsx("div", {
  className: "text-center",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 12
  }
}, __jsx("p", {
  className: "mt-8 text-white text-6xl md:text-7xl font-bold",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 11
  }
}, "OUR ANCILLARIES"), __jsx("p", {
  className: "mx-4 mb-4 md:mx-64 text-white md:text-lg ",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 11
  }
}, "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita saepe necessitatibus aliquam corrupti odio eos in nobis praesentium blanditiis molestiae totam sint itaque, iure a dolor? Vel fugiat velit molestiae.")))));

/* harmony default export */ __webpack_exports__["default"] = (Iarallax2);

/***/ }),

/***/ "./components/portfolio.styles.jsx":
/*!*****************************************!*\
  !*** ./components/portfolio.styles.jsx ***!
  \*****************************************/
/*! exports provided: PreviewContainer, MobileOnly, FontChelsea, Desktop, FontRoboto, HorizontalList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewContainer", function() { return PreviewContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileOnly", function() { return MobileOnly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontChelsea", function() { return FontChelsea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Desktop", function() { return Desktop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontRoboto", function() { return FontRoboto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorizontalList", function() { return HorizontalList; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const PreviewContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "portfoliostyles__PreviewContainer",
  componentId: "sc-4qvl3i-0"
})(["display:none;@media (min-width:768px){display:grid;grid-template-columns:1fr 1fr 1fr 1fr;grid-gap:5px;}"]);
const MobileOnly = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "portfoliostyles__MobileOnly",
  componentId: "sc-4qvl3i-1"
})(["@media (min-width:768px){display:none;}"]);
const FontChelsea = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "portfoliostyles__FontChelsea",
  componentId: "sc-4qvl3i-2"
})(["font-family:'Chelsea Market',cursive;"]);
const Desktop = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "portfoliostyles__Desktop",
  componentId: "sc-4qvl3i-3"
})(["display:none;@media (min-width:768px){display:inline-block;}"]);
const FontRoboto = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "portfoliostyles__FontRoboto",
  componentId: "sc-4qvl3i-4"
})(["font-family:'Roboto',sans-serif;"]);
const HorizontalList = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "portfoliostyles__HorizontalList",
  componentId: "sc-4qvl3i-5"
})(["overflow:auto;white-space:nowrap;"]);

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
/* harmony import */ var _components_Customers_Customers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Customers/Customers */ "./components/Customers/Customers.jsx");
/* harmony import */ var _components_Product_Product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Product/Product */ "./components/Product/Product.jsx");
/* harmony import */ var _components_googleforms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/googleforms */ "./components/googleforms.jsx");
/* harmony import */ var _components_Address_AddressLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Address/AddressLayout */ "./components/Address/AddressLayout.jsx");
/* harmony import */ var _components_footer_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/footer/Footer */ "./components/footer/Footer.jsx");
/* harmony import */ var _components_Future_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Future/Header */ "./components/Future/Header.js");
/* harmony import */ var _components_Leaders_LeaderLayout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Leaders/LeaderLayout */ "./components/Leaders/LeaderLayout.jsx");
/* harmony import */ var _components_Product_ProductList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Product/ProductList */ "./components/Product/ProductList.jsx");
/* harmony import */ var _components_portfolio_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/portfolio.styles */ "./components/portfolio.styles.jsx");
/* harmony import */ var _components_parallax__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/parallax */ "./components/parallax.jsx");
/* harmony import */ var _components_Counter_counter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Counter/counter */ "./components/Counter/counter.jsx");
/* harmony import */ var _components_SlideShow_Demo__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/SlideShow/Demo */ "./components/SlideShow/Demo.jsx");
var _jsxFileName = "/Users/dev/Desktop/RK Engineering/pages/index.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;














const Index = () => __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 3
  }
}, __jsx(_components_Future_Header__WEBPACK_IMPORTED_MODULE_7__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 6
  }
}), __jsx(_components_parallax__WEBPACK_IMPORTED_MODULE_11__["default"], {
  imageUrl: "https://www.brotherearth.com/en/tech/images/pic-sub-ecofactory.jpg",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 10
  }
}), __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 8
  }
}, __jsx(_components_Product_Product__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 11
  }
}), __jsx(_components_Customers_Customers__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 12
  }
}), __jsx("div", {
  className: "mb-4 mx-4 md:mx-12 rounded-md bg-white shadow-md",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 12
  }
}, __jsx(_components_googleforms__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 13
  }
}), __jsx("br", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 16
  }
})), __jsx("br", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 10
  }
}), __jsx(_components_Address_AddressLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 12
  }
}), __jsx(_components_footer_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 12
  }
})));

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/dev/Desktop/RK Engineering/pages/index.jsx */"./pages/index.jsx");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "@material-ui/core/Avatar":
/*!*******************************************!*\
  !*** external "@material-ui/core/Avatar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Avatar");

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

/***/ "@material-ui/core/ClickAwayListener":
/*!******************************************************!*\
  !*** external "@material-ui/core/ClickAwayListener" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ClickAwayListener");

/***/ }),

/***/ "@material-ui/core/Collapse":
/*!*********************************************!*\
  !*** external "@material-ui/core/Collapse" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Collapse");

/***/ }),

/***/ "@material-ui/core/Container":
/*!**********************************************!*\
  !*** external "@material-ui/core/Container" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Container");

/***/ }),

/***/ "@material-ui/core/Drawer":
/*!*******************************************!*\
  !*** external "@material-ui/core/Drawer" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Drawer");

/***/ }),

/***/ "@material-ui/core/Fab":
/*!****************************************!*\
  !*** external "@material-ui/core/Fab" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Fab");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/List":
/*!*****************************************!*\
  !*** external "@material-ui/core/List" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ "@material-ui/core/ListItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/ListItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ "@material-ui/core/ListItemIcon":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemIcon" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemIcon");

/***/ }),

/***/ "@material-ui/core/ListItemText":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemText" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),

/***/ "@material-ui/core/ListSubheader":
/*!**************************************************!*\
  !*** external "@material-ui/core/ListSubheader" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListSubheader");

/***/ }),

/***/ "@material-ui/core/Menu":
/*!*****************************************!*\
  !*** external "@material-ui/core/Menu" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Menu");

/***/ }),

/***/ "@material-ui/core/MenuItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/MenuItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "@material-ui/core/Tab":
/*!****************************************!*\
  !*** external "@material-ui/core/Tab" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tab");

/***/ }),

/***/ "@material-ui/core/Table":
/*!******************************************!*\
  !*** external "@material-ui/core/Table" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Table");

/***/ }),

/***/ "@material-ui/core/TableBody":
/*!**********************************************!*\
  !*** external "@material-ui/core/TableBody" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableBody");

/***/ }),

/***/ "@material-ui/core/TableCell":
/*!**********************************************!*\
  !*** external "@material-ui/core/TableCell" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableCell");

/***/ }),

/***/ "@material-ui/core/TableContainer":
/*!***************************************************!*\
  !*** external "@material-ui/core/TableContainer" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableContainer");

/***/ }),

/***/ "@material-ui/core/TableHead":
/*!**********************************************!*\
  !*** external "@material-ui/core/TableHead" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableHead");

/***/ }),

/***/ "@material-ui/core/TableRow":
/*!*********************************************!*\
  !*** external "@material-ui/core/TableRow" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableRow");

/***/ }),

/***/ "@material-ui/core/Tabs":
/*!*****************************************!*\
  !*** external "@material-ui/core/Tabs" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tabs");

/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

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

/***/ "@material-ui/icons/AccountCircle":
/*!***************************************************!*\
  !*** external "@material-ui/icons/AccountCircle" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AccountCircle");

/***/ }),

/***/ "@material-ui/icons/AccountCircleOutlined":
/*!***********************************************************!*\
  !*** external "@material-ui/icons/AccountCircleOutlined" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AccountCircleOutlined");

/***/ }),

/***/ "@material-ui/icons/AccountTreeOutlined":
/*!*********************************************************!*\
  !*** external "@material-ui/icons/AccountTreeOutlined" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AccountTreeOutlined");

/***/ }),

/***/ "@material-ui/icons/Apartment":
/*!***********************************************!*\
  !*** external "@material-ui/icons/Apartment" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Apartment");

/***/ }),

/***/ "@material-ui/icons/Business":
/*!**********************************************!*\
  !*** external "@material-ui/icons/Business" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Business");

/***/ }),

/***/ "@material-ui/icons/CardTravel":
/*!************************************************!*\
  !*** external "@material-ui/icons/CardTravel" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/CardTravel");

/***/ }),

/***/ "@material-ui/icons/DirectionsOutlined":
/*!********************************************************!*\
  !*** external "@material-ui/icons/DirectionsOutlined" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/DirectionsOutlined");

/***/ }),

/***/ "@material-ui/icons/DoneAllOutlined":
/*!*****************************************************!*\
  !*** external "@material-ui/icons/DoneAllOutlined" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/DoneAllOutlined");

/***/ }),

/***/ "@material-ui/icons/Drafts":
/*!********************************************!*\
  !*** external "@material-ui/icons/Drafts" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Drafts");

/***/ }),

/***/ "@material-ui/icons/ExpandLess":
/*!************************************************!*\
  !*** external "@material-ui/icons/ExpandLess" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExpandLess");

/***/ }),

/***/ "@material-ui/icons/ExpandMore":
/*!************************************************!*\
  !*** external "@material-ui/icons/ExpandMore" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExpandMore");

/***/ }),

/***/ "@material-ui/icons/HomeOutlined":
/*!**************************************************!*\
  !*** external "@material-ui/icons/HomeOutlined" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/HomeOutlined");

/***/ }),

/***/ "@material-ui/icons/KeyboardArrowLeft":
/*!*******************************************************!*\
  !*** external "@material-ui/icons/KeyboardArrowLeft" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/KeyboardArrowLeft");

/***/ }),

/***/ "@material-ui/icons/KeyboardArrowRight":
/*!********************************************************!*\
  !*** external "@material-ui/icons/KeyboardArrowRight" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/KeyboardArrowRight");

/***/ }),

/***/ "@material-ui/icons/LibraryAddCheckOutlined":
/*!*************************************************************!*\
  !*** external "@material-ui/icons/LibraryAddCheckOutlined" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LibraryAddCheckOutlined");

/***/ }),

/***/ "@material-ui/icons/LocalShippingOutlined":
/*!***********************************************************!*\
  !*** external "@material-ui/icons/LocalShippingOutlined" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LocalShippingOutlined");

/***/ }),

/***/ "@material-ui/icons/MailOutlineOutlined":
/*!*********************************************************!*\
  !*** external "@material-ui/icons/MailOutlineOutlined" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/MailOutlineOutlined");

/***/ }),

/***/ "@material-ui/icons/Menu":
/*!******************************************!*\
  !*** external "@material-ui/icons/Menu" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),

/***/ "@material-ui/icons/MessageOutlined":
/*!*****************************************************!*\
  !*** external "@material-ui/icons/MessageOutlined" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/MessageOutlined");

/***/ }),

/***/ "@material-ui/icons/MoveToInbox":
/*!*************************************************!*\
  !*** external "@material-ui/icons/MoveToInbox" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/MoveToInbox");

/***/ }),

/***/ "@material-ui/icons/PermPhoneMsgOutlined":
/*!**********************************************************!*\
  !*** external "@material-ui/icons/PermPhoneMsgOutlined" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/PermPhoneMsgOutlined");

/***/ }),

/***/ "@material-ui/icons/PhoneOutlined":
/*!***************************************************!*\
  !*** external "@material-ui/icons/PhoneOutlined" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/PhoneOutlined");

/***/ }),

/***/ "@material-ui/icons/Send":
/*!******************************************!*\
  !*** external "@material-ui/icons/Send" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Send");

/***/ }),

/***/ "@material-ui/icons/StarBorder":
/*!************************************************!*\
  !*** external "@material-ui/icons/StarBorder" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/StarBorder");

/***/ }),

/***/ "@material-ui/icons/ThumbUpOutlined":
/*!*****************************************************!*\
  !*** external "@material-ui/icons/ThumbUpOutlined" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ThumbUpOutlined");

/***/ }),

/***/ "@mui-treasury/components/indicator/dot":
/*!*********************************************************!*\
  !*** external "@mui-treasury/components/indicator/dot" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@mui-treasury/components/indicator/dot");

/***/ }),

/***/ "@mui-treasury/components/slide/parallax":
/*!**********************************************************!*\
  !*** external "@mui-treasury/components/slide/parallax" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@mui-treasury/components/slide/parallax");

/***/ }),

/***/ "@mui-treasury/styles/button/arrowDark":
/*!********************************************************!*\
  !*** external "@mui-treasury/styles/button/arrowDark" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@mui-treasury/styles/button/arrowDark");

/***/ }),

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("clsx");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-parallax":
/*!*********************************!*\
  !*** external "react-parallax" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-parallax");

/***/ }),

/***/ "react-reveal/Fade":
/*!************************************!*\
  !*** external "react-reveal/Fade" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-reveal/Fade");

/***/ }),

/***/ "react-swipeable-views":
/*!****************************************!*\
  !*** external "react-swipeable-views" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-swipeable-views");

/***/ }),

/***/ "react-transition-group":
/*!*****************************************!*\
  !*** external "react-transition-group" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-transition-group");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BZGRyZXNzL0FkZHJlc3NMYXlvdXQuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2FyZHMvQWRkcmVzc0NhcmQuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2FyZHMvQ3VzdG9tZXJNQ2FyZHMuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2FyZHMvTGVhZGVyQ2FyZC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DYXJkcy9NYWNoaW5lQ2FyZC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DYXJkcy9Qcm9qZWN0cy5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Db3VudGVyL2NvdW50ZXIuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ3VzdG9tZXJzL0N1c3RvbWVycy5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EYXRhL0FkZHJlc3NEYXRhLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGF0YS9EYXRhLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGF0YS9NYWNoaW5lRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0RhdGEvUGFydG5lckRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EYXRhL1Byb2R1Y3RMaXN0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGF0YS9Qcm9kdWN0VGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9GYWJJY29ucy9MYW5kbGluZS5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9GYWJJY29ucy9NYWlsLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0ZhYkljb25zL1Bob25lLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Z1dHVyZS9Ecm9wRG93bi5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9GdXR1cmUvSGVhZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRnV0dXJlL0xpc3QuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRnV0dXJlL1NpZGVEcmF3ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9GdXR1cmUvVHJhbnNpdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xlYWRlcnMvTGVhZGVyTGF5b3V0LmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01hY2hpbmUvbWFjaGluZWxpc3QuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUHJvZHVjdC9GYWNpbGl0aWVzYnV0dG9uLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2R1Y3QvUHJvZHVjdC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qcm9kdWN0L1Byb2R1Y3RMaXN0LmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2R1Y3QvVGFibGUuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2xpZGVTaG93L0RlbW8uanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZm9vdGVyL0Zvb3Rlci5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9nb29nbGVmb3Jtcy5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29uY2lyY2VsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pbWFnZXMvaG9tZS9ob21laW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYXJhbGxheC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYXJhbGxheDIuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcG9ydGZvbGlvLnN0eWxlcy5qc3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRBY3Rpb25BcmVhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEFjdGlvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRNZWRpYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0NsaWNrQXdheUxpc3RlbmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ29sbGFwc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9EcmF3ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9GYWJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1JY29uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdFN1YmhlYWRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFiXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUJvZHlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNlbGxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNvbnRhaW5lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlSGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFic1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0FjY291bnRDaXJjbGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQWNjb3VudENpcmNsZU91dGxpbmVkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0FjY291bnRUcmVlT3V0bGluZWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQXBhcnRtZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0J1c2luZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0NhcmRUcmF2ZWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRGlyZWN0aW9uc091dGxpbmVkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0RvbmVBbGxPdXRsaW5lZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9EcmFmdHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTGVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9FeHBhbmRNb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0hvbWVPdXRsaW5lZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9LZXlib2FyZEFycm93TGVmdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9LZXlib2FyZEFycm93UmlnaHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTGlicmFyeUFkZENoZWNrT3V0bGluZWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTG9jYWxTaGlwcGluZ091dGxpbmVkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL01haWxPdXRsaW5lT3V0bGluZWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9NZXNzYWdlT3V0bGluZWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTW92ZVRvSW5ib3hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvUGVybVBob25lTXNnT3V0bGluZWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvUGhvbmVPdXRsaW5lZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9TZW5kXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL1N0YXJCb3JkZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvVGh1bWJVcE91dGxpbmVkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG11aS10cmVhc3VyeS9jb21wb25lbnRzL2luZGljYXRvci9kb3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbXVpLXRyZWFzdXJ5L2NvbXBvbmVudHMvc2xpZGUvcGFyYWxsYXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbXVpLXRyZWFzdXJ5L3N0eWxlcy9idXR0b24vYXJyb3dEYXJrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2xzeFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcGFyYWxsYXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZXZlYWwvRmFkZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXN3aXBlYWJsZS12aWV3c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXRyYW5zaXRpb24tZ3JvdXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbIkFkZHJlc3NMaXN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwiYWRkcmVzc2VzIiwiQUREUkVTU19EQVRBIiwicmVuZGVyIiwibWFwIiwibmFtZSIsImFkZHJlc3MiLCJpbWFnZVVybCIsImlkIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInJvb3QiLCJtYXhXaWR0aCIsIm1lZGlhIiwiaGVpZ2h0IiwiQWRkcmVzc0NhcmQiLCJjbGFzc2VzIiwibWFyZ2luUmlnaHQiLCJQcm9qZWN0Q2FyZHNNIiwidGl0bGUiLCJMZWFkZXJDYXJkIiwiZGVzY3JpcHRpb24iLCJ3aWR0aCIsIk1hY2hpbmVDYXJkIiwiUHJvamVjdENhcmRzIiwiQ291bnRlciIsIkN1c3RvbWVycyIsInByb2plY3RzIiwiUE9SVEZPTElPX0RBVEEiLCJzdHlsZXMiLCJwYWRkaW5nIiwibWFyZ2luTGVmdCIsInNsaWRlQ29udGFpbmVyIiwiTUFDSElORV9EQVRBIiwiUEFSVE5FUl9EQVRBIiwiUFJPRFVDVExJU1RfREFUQSIsIlBST0RVQ1RfVEFCTEUiLCJicml0IiwiYnJpdDIiLCJhbWVyaWNhIiwiYW1lcmljYTIiLCJjb3VudCIsImJyaXQzIiwiYW1lcmljYTMiLCJ0aGVtZSIsIm1hcmdpbiIsInNwYWNpbmciLCJleHRlbmRlZEljb24iLCJMYW5kbGluZUV4dGVuZGVkSWNvbiIsIk1haWxFeHRlbmRlZEljb24iLCJQaG9uZUV4dGVuZGVkSWNvbiIsInBvc2l0aW9uIiwiZHJvcGRvd24iLCJ0b3AiLCJyaWdodCIsImxlZnQiLCJ6SW5kZXgiLCJib3JkZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwiYmFja2dyb3VuZCIsInBhcGVyIiwiRHJvcERvd24iLCJvcGVuIiwic2V0T3BlbiIsIlJlYWN0IiwidXNlU3RhdGUiLCJoYW5kbGVDbGljayIsInByZXYiLCJoYW5kbGVDbGlja0F3YXkiLCJIZWFkZXIiLCJkcmF3ZXJPcGVuIiwiaGVhZGVyU2hvdyIsIndpbmRvdyIsInNjcm9sbFkiLCJzZXRTdGF0ZSIsInZhbHVlIiwiY29tcG9uZW50RGlkTW91bnQiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlU2Nyb2xsIiwiYm94U2hhZG93IiwiZmxleEdyb3ciLCJ0b2dnbGVEcmF3ZXIiLCJuZXN0ZWQiLCJwYWRkaW5nTGVmdCIsIk5lc3RlZExpc3QiLCJTaWRlRHJhd2VyIiwib25DbG9zZSIsIlRyYW5zaXRpb25Db250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInBhcmVudCIsInVzZUlzSW5pdGlhbFJlbmRlciIsImlzSW5pdGlhbFJlbmRlciIsInVzZVJlZiIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJDU1NUcmFuc2l0aW9uIiwic2hvdyIsImVudGVyIiwiZW50ZXJGcm9tIiwiZW50ZXJUbyIsImxlYXZlIiwibGVhdmVGcm9tIiwibGVhdmVUbyIsImFwcGVhciIsImNoaWxkcmVuIiwiZW50ZXJDbGFzc2VzIiwic3BsaXQiLCJmaWx0ZXIiLCJzIiwibGVuZ3RoIiwiZW50ZXJGcm9tQ2xhc3NlcyIsImVudGVyVG9DbGFzc2VzIiwibGVhdmVDbGFzc2VzIiwibGVhdmVGcm9tQ2xhc3NlcyIsImxlYXZlVG9DbGFzc2VzIiwiYWRkQ2xhc3NlcyIsIm5vZGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmVDbGFzc2VzIiwicmVtb3ZlIiwiZG9uZSIsIlRyYW5zaXRpb24iLCJyZXN0IiwidXNlQ29udGV4dCIsImlzQ2hpbGQiLCJ1bmRlZmluZWQiLCJsZWFkZXJzIiwiTWFjaGluZUxpc3QiLCJtYWNoaW5lcyIsIkZhY2lsaXRpZXNFeHRlbmRlZEljb24iLCJhbmNob3JFbCIsInNldEFuY2hvckVsIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiaGFuZGxlQ2xvc2UiLCJCb29sZWFuIiwiaW1hZ2UxIiwiaW1hZ2UyIiwiUHJvZHVjdERldGFpbCIsIlByb2R1Y3RMaXN0IiwicHJvZHVjdHMiLCJ0YWJsZSIsIm1pbldpZHRoIiwicm93cyIsIlNpbXBsZVRhYmxlIiwicm93IiwiZGF0YSIsInN1YnRpdGxlIiwiaW1hZ2UiLCJicmVha3BvaW50cyIsInNsaWRlIiwicGVyc3BlY3RpdmUiLCJvdmVyZmxvdyIsInBhZGRpbmdUb3AiLCJ1cCIsImltYWdlQ29udGFpbmVyIiwiZGlzcGxheSIsInBhZGRpbmdCb3R0b20iLCJvYmplY3RGaXQiLCJhcnJvdyIsInRyYW5zZm9ybSIsImFycm93TGVmdCIsImFycm93UmlnaHQiLCJ0ZXh0IiwiZm9udEZhbWlseSIsImZvbnRXZWlnaHQiLCJjb2xvciIsImNvbW1vbiIsIndoaXRlIiwibGluZUhlaWdodCIsImZvbnRTaXplIiwiaW5kaWNhdG9yQ29udGFpbmVyIiwidGV4dEFsaWduIiwiUGFyYWxsYXhDYXJvdXNlbCIsImFycm93U3R5bGVzIiwidXNlQXJyb3dEYXJrQnV0dG9uU3R5bGVzIiwiY3JlYXRlU3R5bGUiLCJzbGlkZUluZGV4IiwiZmluZUluZGV4IiwiZGlmZiIsIk1hdGgiLCJhYnMiLCJyZW5kZXJFbGVtZW50cyIsImluZGV4Iiwib25DaGFuZ2VJbmRleCIsImN4IiwiaSIsInJlbmRlckNoaWxkcmVuIiwiaW5qZWN0U3R5bGUiLCJDb3B5cmlnaHQiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJGb290ZXIiLCJHb29nbGVGb3JtIiwiYXZhdGFyIiwicHJpbWFyeSIsIm1haW4iLCJDaXJjbGVJY29uIiwiSG9tZUltYWdlIiwiSWFyYWxsYXgiLCJJYXJhbGxheDIiLCJtaW4iLCJtYXgiLCJQcmV2aWV3Q29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiTW9iaWxlT25seSIsIkZvbnRDaGVsc2VhIiwiRGVza3RvcCIsIkZvbnRSb2JvdG8i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Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7Ozs7O0FDQUEscUU7Ozs7Ozs7Ozs7O0FDQUEsbUU7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEsa0U7Ozs7Ozs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7Ozs7O0FDQUEsaUU7Ozs7Ozs7Ozs7O0FDQUEsa0U7Ozs7Ozs7Ozs7O0FDQUEsdUU7Ozs7Ozs7Ozs7O0FDQUEscUU7Ozs7Ozs7Ozs7O0FDQUEsbUU7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7Ozs7O0FDQUEsb0U7Ozs7Ozs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7Ozs7O0FDQUEsbUU7Ozs7Ozs7Ozs7O0FDQUEsb0U7Ozs7Ozs7Ozs7O0FDQUEsa0U7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoic3RhdGljL2RldmVsb3BtZW50L3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBZGRyZXNzQ2FyZCBmcm9tICcuLi9DYXJkcy9BZGRyZXNzQ2FyZCc7XG5pbXBvcnQgQUREUkVTU19EQVRBIGZyb20gJy4uL0RhdGEvQWRkcmVzc0RhdGEnO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSdcbmltcG9ydCBBcGFydG1lbnRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BcGFydG1lbnQnO1xuaW1wb3J0IENpcmNsZUljb24gZnJvbSAnLi4vaWNvbmNpcmNlbGUnO1xuaW1wb3J0IHsgRm9udENoZWxzZWEgfSBmcm9tICcuLi9wb3J0Zm9saW8uc3R5bGVzJztcbmltcG9ydCBMYW5kbGluZUV4dGVuZGVkSWNvbiBmcm9tICcuLi9GYWJJY29ucy9MYW5kbGluZSc7XG5pbXBvcnQgTWFpbEV4dGVuZGVkSWNvbiBmcm9tICcuLi9GYWJJY29ucy9NYWlsJztcbmltcG9ydCBQaG9uZUV4dGVuZGVkSWNvbiBmcm9tICcuLi9GYWJJY29ucy9QaG9uZSc7XG5cblxuY2xhc3MgQWRkcmVzc0xpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgYWRkcmVzc2VzIDogQUREUkVTU19EQVRBXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGFkZHJlc3NlcyB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXgtNCBtYi0yIG1kOm1iLTQgdGV4dC1pbmRpZ28tNDAwIG1kOm1sLTQgdGV4dC00eGwgZm9udC1tZWRpdW0nPiBcbiAgICAgICAgICAgICAgICAgPENpcmNsZUljb24+PEFwYXJ0bWVudEljb24vPjwvQ2lyY2xlSWNvbj4gT3VyIExvY2F0aW9ucyAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9J21kOmZsZXggbWQ6cGwtNCBtci00IG1kOm14LTAnPlxuICAgICAgICAgICAgICAge2FkZHJlc3Nlcy5tYXAoKHtuYW1lLGFkZHJlc3MsaW1hZ2VVcmwsaWR9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21sLTQgbWQ6bWwtMCBtZDptci00IG1iLTQnPlxuICAgICAgICAgICAgICAgICAgIDxBZGRyZXNzQ2FyZCBrZXk9e2lkfSBhZGRyZXNzPXthZGRyZXNzfSBuYW1lPXtuYW1lfSBpbWFnZVVybD17aW1hZ2VVcmx9Lz5cbiAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtMiBtZDptbC00XCI+XG4gICAgICAgICAgICA8TWFpbEV4dGVuZGVkSWNvbi8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICAgICAgPFBob25lRXh0ZW5kZWRJY29uLz5cbiAgICAgICAgICA8TGFuZGxpbmVFeHRlbmRlZEljb24vPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFkZHJlc3NMaXN0OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBDYXJkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmQnO1xuaW1wb3J0IENhcmRBY3Rpb25BcmVhIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRBY3Rpb25BcmVhJztcbmltcG9ydCBDYXJkQWN0aW9ucyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9ucyc7XG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnQnO1xuaW1wb3J0IENhcmRNZWRpYSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkTWVkaWEnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgRGlyZWN0aW9uc091dGxpbmVkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRGlyZWN0aW9uc091dGxpbmVkJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XG4gIHJvb3Q6IHtcbiAgICBtYXhXaWR0aDogMzQ1LFxuICB9LFxuICBtZWRpYToge1xuICAgIGhlaWdodDogMTQwLFxuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkZHJlc3NDYXJkKHtuYW1lLGFkZHJlc3MsaW1hZ2VVcmx9KSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICByZXR1cm4gKFxuICAgIDxDYXJkIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSB2YXJpYW50PSdvdXRsaW5lZCc+XG4gICAgICA8Q2FyZEFjdGlvbkFyZWE+XG4gICAgICAgIDxDYXJkTWVkaWFcbiAgICAgICAgIGNvbXBvbmVudD1cImltZ1wiXG4gICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubWVkaWF9XG4gICAgICAgIGltYWdlPXtpbWFnZVVybH1cbiAgICAgICAgLz5cbiAgICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PVwiaDVcIiBjb21wb25lbnQ9XCJoMlwiPlxuICAgICAgICAgICAge25hbWV9XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiIGNvbXBvbmVudD1cInBcIj5cbiAgICAgICAgICAge2FkZHJlc3N9XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgPC9DYXJkQWN0aW9uQXJlYT5cbiAgICAgIDxDYXJkQWN0aW9ucz5cbiAgICAgICAgPEJ1dHRvbiBzaXplPVwic21hbGxcIiBjb2xvcj1cInByaW1hcnlcIj5cbiAgICAgICAgIDxEaXJlY3Rpb25zT3V0bGluZWRJY29uIHN0eWxlPXt7bWFyZ2luUmlnaHQ6JzUnfX0vPiAgRGlyZWN0aW9uc1xuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvQ2FyZEFjdGlvbnM+XG4gICAgPC9DYXJkPlxuICApO1xufVxuIiwiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgQ2FyZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkJztcbmltcG9ydCBDYXJkQWN0aW9uQXJlYSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9uQXJlYSc7XG5pbXBvcnQgQ2FyZEFjdGlvbnMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEFjdGlvbnMnO1xuaW1wb3J0IENhcmRDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50JztcbmltcG9ydCBDYXJkTWVkaWEgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZE1lZGlhJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcbiAgcm9vdDoge1xuICAgIG1heFdpZHRoOiAyNDAsXG4gICAgaGVpZ2h0OjI2MCxcbiAgfSxcbiAgbWVkaWE6IHtcbiAgICBoZWlnaHQ6IDE4MCxcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0Q2FyZHNNKHsgdGl0bGUsIGltYWdlVXJsIH0pIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIHJldHVybiAoXG48ZGl2IGNsYXNzTmFtZT0nbXItNCBtYi00IGlubGluZS1ibG9jayc+ICBcbiAgICA8Q2FyZCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gZWxldmF0aW9uPXswfSB2YXJpYW50PSdvdXRsaW5lZCc+XG4gICAgICA8Q2FyZE1lZGlhXG4gICAgICAgY29tcG9uZW50PVwiaW1nXCJcbiAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubWVkaWF9XG4gICAgICBpbWFnZT17aW1hZ2VVcmx9XG4gICAgICAgIC8+XG4gICAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9J2g1JyB2YXJpYW50PSdoNicgYWxpZ249J2NlbnRlcicgY29sb3I9J3RleHRTZWNvbmRhcnknPlxuICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICA8L0NhcmQ+XG48L2Rpdj5cbiAgKTtcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgQ2FyZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkJztcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudCc7XG5pbXBvcnQgQ2FyZE1lZGlhIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRNZWRpYSc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XG4gIHJvb3Q6IHtcbiAgICBtYXhXaWR0aDogMzA1LFxuICAgIGhlaWdodDozNzJcbiAgfSxcbiAgbWVkaWE6IHtcbiAgICBoZWlnaHQ6IDE3MCxcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMZWFkZXJDYXJkKHtuYW1lLGRlc2NyaXB0aW9uLGltYWdlVXJsfSkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q2FyZCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gdmFyaWFudD0nb3V0bGluZWQnPlxuICAgICAgICA8Q2FyZE1lZGlhXG4gICAgICAgICBjb21wb25lbnQ9XCJpbWdcIlxuICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1lZGlhfVxuICAgICAgICBpbWFnZT17aW1hZ2VVcmx9XG4gICAgICAgIC8+XG4gICAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgICA8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20gdmFyaWFudD1cImg2XCIgY29tcG9uZW50PVwiaDJcIiBjb2xvcj1cInNlY29uZGFyeVwiPlxuICAgICAgICAgICAge25hbWV9XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiIGNvbXBvbmVudD1cInBcIj5cbiAgICAgICAgICAge2Rlc2NyaXB0aW9ufVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICA8L0NhcmQ+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgQ2FyZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkJztcbmltcG9ydCBDYXJkQWN0aW9uQXJlYSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9uQXJlYSc7XG5pbXBvcnQgQ2FyZEFjdGlvbnMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEFjdGlvbnMnO1xuaW1wb3J0IENhcmRDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50JztcbmltcG9ydCBDYXJkTWVkaWEgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZE1lZGlhJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcbiAgcm9vdDoge1xuICAgIHdpZHRoOiAyNzUsXG4gICAgaGVpZ2h0OjMxNSxcbiAgfSxcbiAgbWVkaWE6IHtcbiAgICBoZWlnaHQ6IDE4MCxcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWNoaW5lQ2FyZCh7bmFtZSxkZXNjcmlwdGlvbixpbWFnZVVybH0pIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J21yLTQgbWQ6bWItNCBiZy13aGl0ZSBzaGFkb3ctbGcgcm91bmRlZC1sZyc+XG4gICAgICA8Q2FyZCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gZWxldmF0aW9uPXswfT5cbiAgICAgICAgPENhcmRNZWRpYVxuICAgICAgICAgICBjb21wb25lbnQ9XCJpbWdcIlxuICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubWVkaWF9XG4gICAgICAgICAgaW1hZ2U9e2ltYWdlVXJsfSAgICAgICAgXG4gICAgICAgICAgLz5cbiAgICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PVwic3VidGl0bGUxXCIgY29tcG9uZW50PVwiaDVcIiBjb2xvcj1cInByaW1hcnlcIj5cbiAgICAgICAgICAgIHtuYW1lfSAgICAgICAgIFxuICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHRQcmltYXJ5XCIgY29tcG9uZW50PVwicFwiPlxuICAgICAgICAgICAge2Rlc2NyaXB0aW9ufVxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgPC9DYXJkPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgQ2FyZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkJztcbmltcG9ydCBDYXJkQWN0aW9uQXJlYSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9uQXJlYSc7XG5pbXBvcnQgQ2FyZEFjdGlvbnMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEFjdGlvbnMnO1xuaW1wb3J0IENhcmRDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50JztcbmltcG9ydCBDYXJkTWVkaWEgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZE1lZGlhJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcbiAgcm9vdDoge1xuICAgIG1heFdpZHRoOiAyNDAsXG4gICAgaGVpZ2h0OidhdXRvJyxcbiAgfSxcbiAgbWVkaWE6IHtcbiAgICBoZWlnaHQ6IDE4MCxcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0Q2FyZHMoeyB0aXRsZSxpbWFnZVVybCB9KSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICByZXR1cm4gKFxuPGRpdiBjbGFzc05hbWU9J21yLTQgbWItNCBzaGFkb3ctbGcgcm91bmRlZC1sZyc+ICBcbiAgICA8Q2FyZCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gZWxldmF0aW9uPXswfT5cbiAgICAgIDxDYXJkTWVkaWFcbiAgICAgICBjb21wb25lbnQ9XCJpbWdcIlxuICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZWRpYX1cbiAgICAgIGltYWdlPXtpbWFnZVVybH1cbiAgICAgICAgLz5cbiAgICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD0naDUnIHZhcmlhbnQ9J2g2JyBhbGlnbj0nY2VudGVyJyBjb2xvcj0ndGV4dFNlY29uZGFyeSc+XG4gICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgIDwvQ2FyZD5cbjwvZGl2PlxuICApO1xufSIsImNvbnN0IENvdW50ZXIgPSAoKSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J21kOmZsZXggYmctYmx1ZS0yMDAgdy1mdWxsIGgtMzInPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC02eGwgdGV4dC1ibHVlLTQwMCB0ZXh0LWNlbnRlciBtbC0xMiBtdC04Jz5cbiAgICAgICAgICAgICAgNTArIDxici8+IDxkaXYgY2xhc3NOYW1lPSd0ZXh0LWxnIHRleHQtd2hpdGUnPllFQVJTIE9GIEVYUEVSSUVOQ0U8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LTZ4bCB0ZXh0LXdoaXRlIHRleHQtY2VudGVyIG1sLTE2IG10LTgnPlxuICAgICAgICAgICAgICA1MCsgPGJyLz4gPGRpdiBjbGFzc05hbWU9J3RleHQtbGcnPkNVU1RPTUVSUzwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtNnhsIHRleHQtd2hpdGUgdGV4dC1jZW50ZXIgbWwtMTYgbXQtOCc+XG4gICAgICAgICAgICAgIDUwKyA8YnIvPiA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1sZyc+UFJPRFVDVFM8L2Rpdj5cbiAgICAgICAgPC9kaXY+PGRpdiBjbGFzc05hbWU9J3RleHQtNnhsIHRleHQtd2hpdGUgdGV4dC1jZW50ZXIgbWwtMTYgbXQtOCc+XG4gICAgICAgICAgICAgIDUwKyA8YnIvPiA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1sZyc+WUVBUlMgT0YgRVhQRVJJRU5DRTwvZGl2PlxuICAgICAgICA8L2Rpdj4gICAgICBcbiAgICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgQ291bnRlcjsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBPUlRGT0xJT19EQVRBIGZyb20gJy4uL0RhdGEvRGF0YS5qcyc7XG5pbXBvcnQgUHJvamVjdENhcmRzIGZyb20gJy4uL0NhcmRzL1Byb2plY3RzJztcbmltcG9ydCBQcm9qZWN0Q2FyZHNNIGZyb20gJy4uL0NhcmRzL0N1c3RvbWVyTUNhcmRzJztcbmltcG9ydCB7IFByZXZpZXdDb250YWluZXIsIE1vYmlsZU9ubHkgLCBGb250Q2hlbHNlYSwgSG9yaXpvbnRhbExpc3QgfSBmcm9tICcuLi9wb3J0Zm9saW8uc3R5bGVzJztcbmltcG9ydCBCdXNpbmVzc0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0J1c2luZXNzJztcbmltcG9ydCBTd2lwZWFibGVWaWV3cyBmcm9tICdyZWFjdC1zd2lwZWFibGUtdmlld3MnO1xuaW1wb3J0IENpcmNsZUljb24gZnJvbSAnLi4vaWNvbmNpcmNlbGUuanN4JztcbmltcG9ydCBJYXJhbGxheDIgZnJvbSAnLi4vcGFyYWxsYXgyLmpzeCc7XG5cblxuY2xhc3MgQ3VzdG9tZXJzIGV4dGVuZHMgQ29tcG9uZW50IHtcbmNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgIHByb2plY3RzIDogUE9SVEZPTElPX0RBVEFcblxuICAgIH1cbn1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge3Byb2plY3RzfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGNvbnN0IHN0eWxlcyA9IHtcbiAgICAgICAgICAgIHJvb3Q6IHtcbiAgICAgICAgICAgICAgcGFkZGluZzogJzAgMnJlbScsXG4gICAgICAgICAgICAgIG1hcmdpbkxlZnQgOiAnLTAuMTFyZW0nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2xpZGVDb250YWluZXI6IHtcbiAgICAgICAgICAgICAgbWFyZ2luTGVmdDonLTAuMnJlbScsXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgXG4gICAgICAgICAgfTtcbiAgICAgICAgICBcbiAgICAgICAgcmV0dXJuIChcbiAgICAgPGRpdiBjbGFzc05hbWU9J20tNCBtZDpteC0yNCBtZDptdC00Jz5cbiAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9J3RleHQtY2VudGVyIG1iLTQgbWQ6bWItNCB0ZXh0LWluZGlnby01MDAgdGV4dC1ib2xkIHRleHQtNHhsIG1kOnRleHQtNnhsIGZvbnQtbWVkaXVtJz4gXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgT1VSIEFOQ0lMTEFSSUVTICBcbiAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nLW0tNCBtZDotbXgtMjQnPlxuICAgICAgICA8SWFyYWxsYXgyIGltYWdlVXJsPVwiaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvMjU3NjM2L3BleGVscy1waG90by0yNTc2MzYuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJmRwcj0yJmg9NjUwJnc9OTQwXCIvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPE1vYmlsZU9ubHk+XG4gICAgICAgIDxIb3Jpem9udGFsTGlzdD5cbiAgICAgICAgICAgICB7cHJvamVjdHMubWFwKCh7aWQsIHRpdGxlLCBpbWFnZVVybH0pPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxQcm9qZWN0Q2FyZHNNIGtleT17aWR9IHRpdGxlPXt0aXRsZX0gIGltYWdlVXJsPXtpbWFnZVVybH0vPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L0hvcml6b250YWxMaXN0PiAgXG4gICAgICA8L01vYmlsZU9ubHk+XG5cbiAgICAgICAgICAgIDxQcmV2aWV3Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgIHtwcm9qZWN0cy5tYXAoKHtpZCwgdGl0bGUsIGltYWdlVXJsfSk9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9qZWN0Q2FyZHMga2V5PXtpZH0gdGl0bGU9e3RpdGxlfSAgaW1hZ2VVcmw9e2ltYWdlVXJsfS8+ICkpfVxuICAgICAgICAgICAgPC9QcmV2aWV3Q29udGFpbmVyPiAgICBcblxuICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbWVyczsiLCJjb25zdCBBRERSRVNTX0RBVEEgPSBbXG5cbiAgICB7XG4gICAgICAgIGlkOjEsXG4gICAgICAgIGFkZHJlc3M6J0ZsYXQgTm8uNzA5IDU5IFNoYWt1bnRhbGEgQnVpbGRpbmcgTmVocnUgUGxhY2UsTmV3IERlbGhpJyxcbiAgICAgICAgbmFtZTonSGVhZCBPZmZpY2UnLFxuICAgICAgICBpbWFnZVVybDonaHR0cHM6Ly93d3cudmVldGhpLmNvbS93YXRlcm1hcmsucGhwP3BhdGg9aW1hZ2VzL2NpdHktaW1hZ2VzL29yaWdpbmFsL0RlbGhpLTQwNDIyLmpwZycsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOjIsXG4gICAgICAgIGFkZHJlc3M6J0EtNTEgU2VjdG9yLTU4IE5vaWRhLCBEaXN0cmljdCBHYXV0YW0gQnVzaCBOYWdhcixVUCcsXG4gICAgICAgIG5hbWU6J1dvcmtzJyxcbiAgICAgICAgaW1hZ2VVcmw6J2h0dHBzOi8vbS5oaW5kdXN0YW50aW1lcy5jb20vcmYvaW1hZ2Vfc2l6ZV80NDR4MjUwL0hUL3AyLzIwMTcvMDQvMjUvUGljdHVyZXMvc3VuZGF5LWhpbmR1c3Rhbi1hcHJpbC1zZWN0b3Itbm9pZGEtaW5kdXN0cmlhbC1pbmRpYV8xZDdjYzNlNC0yOWRkLTExZTctYmQ4OS0xOWNjMmM1ZDc2NWUuanBnJyxcbiAgICB9XG5dXG5cbmV4cG9ydCBkZWZhdWx0IEFERFJFU1NfREFUQTsiLCJjb25zdCBQT1JURk9MSU9fREFUQSA9IFtcbiAgICB7XG4gICAgICAgIGlkIDoyLFxuICAgICAgICB0aXRsZTonSGVybyBNb3RvY29ycCBMdGQuJyxcbiAgICAgICAgZGVzY3JpcHRpb246J0dhdHNieStTbmlwY2FydCcsXG4gICAgICAgIGltYWdlVXJsOidodHRwczovL2Rvd25sb2FkLmxvZ28ud2luZS9sb2dvL0hlcm9fTW90b0NvcnAvSGVyb19Nb3RvQ29ycC1Mb2dvLndpbmUucG5nJyBcbiAgICB9LFxuIHtcbiAgICBpZCA6MSxcbiAgICB0aXRsZTonTWFydXRpJyxcbiAgICBkZXNjcmlwdGlvbjonUmVkdXgrU3RyaXBlJyxcbiAgICBpbWFnZVVybDonaHR0cHM6Ly9sb2dvc3ZlY3Rvci5uZXQvd3AtY29udGVudC91cGxvYWRzLzIwMTMvMDMvbWFydXRpLXN1enVraS1lcHMtdmVjdG9yLWxvZ28ucG5nJ1xufSxcblxue1xuICAgIGlkIDozLFxuICAgIHRpdGxlOidIb25kYSBTY29vdGVycycsXG4gICAgZGVzY3JpcHRpb246J1VzaW5nIENvdmlkLTE5IEluZGlhIEFQSScsXG4gICAgaW1hZ2VVcmw6J2h0dHBzOi8vY2RuLmZyZWViaWVzdXBwbHkuY29tL2xvZ29zL2xhcmdlLzJ4L2hvbmRhLTExLWxvZ28tcG5nLXRyYW5zcGFyZW50LnBuZydcbn0sXG5cbntcbiAgICBpZCA6NCxcbiAgICB0aXRsZTonQmFqYWogQXV0bycsXG4gICAgZGVzY3JpcHRpb246J05leHQuanMgJiBEYXRhY29tIENNUycsXG4gICAgaW1hZ2VVcmw6J2h0dHBzOi8vd3d3LnZlbnR1cmVjZW50ZXIuY28uaW4vY3NyL2JhamFqYXV0by93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wNi9CYWphai1sb2dvLmpwZydcbn0sXG57XG4gICAgaWQgOjUsXG4gICAgdGl0bGU6J0hvbmRhIFNpZWwgTHRkLicsXG4gICAgZGVzY3JpcHRpb246J05leHQuanMgJiBEYXRhY29tIENNUycsXG4gICAgaW1hZ2VVcmw6J2h0dHBzOi8vc2Vla3ZlY3RvcmxvZ28uY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE3LzEyL2hvbmRhLXBvd2VyLXByb2R1Y3RzLXZlY3Rvci1sb2dvLXNtYWxsLnBuZydcbn0sXG57XG4gICAgaWQgOjYsXG4gICAgdGl0bGU6J1RhdGEgTW90b3JzJyxcbiAgICBkZXNjcmlwdGlvbjonTmV4dC5qcyAmIERhdGFjb20gQ01TJyxcbiAgICBpbWFnZVVybDonaHR0cHM6Ly9zZWVrdmVjdG9ybG9nby5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTcvMTIvaG9uZGEtcG93ZXItcHJvZHVjdHMtdmVjdG9yLWxvZ28tc21hbGwucG5nJ1xufSxcbntcbiAgICBpZCA6NyxcbiAgICB0aXRsZTonRXNjb3J0cyBMdGQuJyxcbiAgICBkZXNjcmlwdGlvbjonTmV4dC5qcyAmIERhdGFjb20gQ01TJyxcbiAgICBpbWFnZVVybDonaHR0cHM6Ly9zZWVrdmVjdG9ybG9nby5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTcvMTIvaG9uZGEtcG93ZXItcHJvZHVjdHMtdmVjdG9yLWxvZ28tc21hbGwucG5nJ1xufSxcbntcbiAgICBpZCA6OCxcbiAgICB0aXRsZTonVFZTIG1vdG9yY3ljbGVzJyxcbiAgICBkZXNjcmlwdGlvbjonTmV4dC5qcyAmIERhdGFjb20gQ01TJyxcbiAgICBpbWFnZVVybDonaHR0cHM6Ly9zZWVrdmVjdG9ybG9nby5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTcvMTIvaG9uZGEtcG93ZXItcHJvZHVjdHMtdmVjdG9yLWxvZ28tc21hbGwucG5nJ1xufVxuXTtcblxuZXhwb3J0IGRlZmF1bHQgUE9SVEZPTElPX0RBVEEiLCJjb25zdCBNQUNISU5FX0RBVEEgPSBbXG4gICAgeyBcbiAgICAgICAgaWQ6MSxcbiAgICAgICAgbmFtZTonQ2FyYm9uIFN1bHBodXIgQXBwYXJ0dXMnLFxuICAgICAgICBkZXNjcmlwdGlvbjonTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuIER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbicsXG4gICAgICAgIGltYWdlVXJsOidodHRwczovLzUuaW1pbWcuY29tL2RhdGE1L0tBL0ZGL01ZLTQ1NTI1MTI1L2NhcmJvbi1zdWxwaHVyLWFwcGFyYXR1cy01MDB4NTAwLmpwZycsXG4gICAgfSxcbiAgICB7IFxuICAgICAgICBpZDoyLFxuICAgICAgICBuYW1lOidDYXJib24gU3VscGh1ciBBcHBhcnR1cycsXG4gICAgICAgIGRlc2NyaXB0aW9uOidMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluJyxcbiAgICAgICAgaW1hZ2VVcmw6J2h0dHBzOi8vNS5pbWltZy5jb20vZGF0YTUvS0EvRkYvTVktNDU1MjUxMjUvY2FyYm9uLXN1bHBodXItYXBwYXJhdHVzLTUwMHg1MDAuanBnJyxcbiAgICB9LFxuICAgIHsgXG4gICAgICAgIGlkOjMsXG4gICAgICAgIG5hbWU6J0NhcmJvbiBTdWxwaHVyIEFwcGFydHVzJyxcbiAgICAgICAgZGVzY3JpcHRpb246J0xvcmVtIGlwc3VtIGVmdW5pam5mamluZmggam5laCBmam5lcmZuciBlZm5lIGhqcmZuaHIgZWZuaHJlZiBkb2xvciBzaXQgYW1ldCwgdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluJyxcbiAgICAgICAgaW1hZ2VVcmw6J2h0dHBzOi8vNS5pbWltZy5jb20vZGF0YTUvS0EvRkYvTVktNDU1MjUxMjUvY2FyYm9uLXN1bHBodXItYXBwYXJhdHVzLTUwMHg1MDAuanBnJyxcbiAgICB9LFxuICAgIHsgXG4gICAgICAgIGlkOjQsXG4gICAgICAgIG5hbWU6J0NhcmJvbiBTdWxwaHVyIEFwcGFydHVzJyxcbiAgICAgICAgZGVzY3JpcHRpb246J0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4nLFxuICAgICAgICBpbWFnZVVybDonaHR0cHM6Ly81LmltaW1nLmNvbS9kYXRhNS9LQS9GRi9NWS00NTUyNTEyNS9jYXJib24tc3VscGh1ci1hcHBhcmF0dXMtNTAweDUwMC5qcGcnLFxuICAgIH0sXG4gICAgeyBcbiAgICAgICAgaWQ6NSxcbiAgICAgICAgbmFtZTonQ2FyYm9uIFN1bHBodXIgQXBwYXJ0dXMnLFxuICAgICAgICBkZXNjcmlwdGlvbjonTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuIER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbicsXG4gICAgICAgIGltYWdlVXJsOidodHRwczovLzUuaW1pbWcuY29tL2RhdGE1L0tBL0ZGL01ZLTQ1NTI1MTI1L2NhcmJvbi1zdWxwaHVyLWFwcGFyYXR1cy01MDB4NTAwLmpwZycsXG4gICAgfVxuXG5dXG5cbmV4cG9ydCBkZWZhdWx0IE1BQ0hJTkVfREFUQTsiLCJjb25zdCBQQVJUTkVSX0RBVEEgPSBbXG4gICAge1xuICAgICAgICBpZDoxLFxuICAgICAgICBuYW1lOidNci4gUmFnaGF2IEt1bWFyJyxcbiAgICAgICAgZGVzY3JpcHRpb246J0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkICBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4nLFxuICAgICAgICBpbWFnZVVybDonaHR0cHM6Ly9jYnNuZXdzMS5jYnNpc3RhdGljLmNvbS9odWIvaS9yLzIwMTIvMDMvMTAvZjhlYTcxOTQtZDI3MS0xMWUyLWE0M2UtMDI5MTE4NjlkODU1L3RodW1ibmFpbC8xMjAweDYzMC9jZWExYTkzN2MzMGI4ZTFjNTJkYWFkY2U3ZGQ2MWJlOS9UaGVHb2RmYXRoZXJfMDIuanBnJ1xuXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOjIsXG4gICAgICAgIG5hbWU6J01yLiBSYWdoYXYgS3VtYXInLFxuICAgICAgICBkZXNjcmlwdGlvbjonTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgIGluIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyLicsXG4gICAgICAgIGltYWdlVXJsOidodHRwczovL2Nic25ld3MxLmNic2lzdGF0aWMuY29tL2h1Yi9pL3IvMjAxMi8wMy8xMC9mOGVhNzE5NC1kMjcxLTExZTItYTQzZS0wMjkxMTg2OWQ4NTUvdGh1bWJuYWlsLzEyMDB4NjMwL2NlYTFhOTM3YzMwYjhlMWM1MmRhYWRjZTdkZDYxYmU5L1RoZUdvZGZhdGhlcl8wMi5qcGcnXG5cbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6MyxcbiAgICAgICAgbmFtZTonTXIuIFJhZ2hhdiBLdW1hcicsXG4gICAgICAgIGRlc2NyaXB0aW9uOidMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCAgaW4gdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGEgcGFyaWF0dXIuJyxcbiAgICAgICAgaW1hZ2VVcmw6J2h0dHBzOi8vY2JzbmV3czEuY2JzaXN0YXRpYy5jb20vaHViL2kvci8yMDEyLzAzLzEwL2Y4ZWE3MTk0LWQyNzEtMTFlMi1hNDNlLTAyOTExODY5ZDg1NS90aHVtYm5haWwvMTIwMHg2MzAvY2VhMWE5MzdjMzBiOGUxYzUyZGFhZGNlN2RkNjFiZTkvVGhlR29kZmF0aGVyXzAyLmpwZydcblxuICAgIH1cbl07XG5cbmV4cG9ydCBkZWZhdWx0IFBBUlRORVJfREFUQTsiLCJjb25zdCBQUk9EVUNUTElTVF9EQVRBID0gW1xuICAgIHsgXG4gICAgICAgIGlkOjEsXG4gICAgICAgIG5hbWU6J0JSSUdIVCBEUkFXTiBTVEVFTCBCQVJTJyxcbiAgICAgICAgZGVzY3JpcHRpb246J0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4nLFxuICAgICAgICBpbWFnZVVybDonaHR0cHM6Ly81LmltaW1nLmNvbS9kYXRhNS9LQS9GRi9NWS00NTUyNTEyNS9jYXJib24tc3VscGh1ci1hcHBhcmF0dXMtNTAweDUwMC5qcGcnLFxuICAgIH0sXG4gICAgeyBcbiAgICAgICAgaWQ6MixcbiAgICAgICAgbmFtZTonR1JPVU5EIEJBUlMnLFxuICAgICAgICBkZXNjcmlwdGlvbjonTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuIER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbicsXG4gICAgICAgIGltYWdlVXJsOidodHRwczovLzUuaW1pbWcuY29tL2RhdGE1L0tBL0ZGL01ZLTQ1NTI1MTI1L2NhcmJvbi1zdWxwaHVyLWFwcGFyYXR1cy01MDB4NTAwLmpwZycsXG4gICAgfSxcbiAgICB7IFxuICAgICAgICBpZDozLFxuICAgICAgICBuYW1lOidCUklHSFQgRFJBV04gU1RFRUwgV0lSRVMnLFxuICAgICAgICBkZXNjcmlwdGlvbjonTG9yZW0gaXBzdW0gZWZ1bmlqbmZqaW5maCBqbmVoIGZqbmVyZm5yIGVmbmUgaGpyZm5ociBlZm5ocmVmIGRvbG9yIHNpdCBhbWV0LCB1bGxhbWNvJyxcbiAgICAgICAgaW1hZ2VVcmw6J2h0dHBzOi8vNS5pbWltZy5jb20vZGF0YTUvS0EvRkYvTVktNDU1MjUxMjUvY2FyYm9uLXN1bHBodXItYXBwYXJhdHVzLTUwMHg1MDAuanBnJyxcbiAgICB9LFxuICAgIFxuXVxuXG5leHBvcnQgZGVmYXVsdCBQUk9EVUNUTElTVF9EQVRBOyIsImNvbnN0IFBST0RVQ1RfVEFCTEUgPSBbXG4gICAge1xuICAgICAgICBpZDoxLFxuICAgICAgICBkZXNjcmlwdGlvbjonRnJlZSBDdXR0aW5nIFN0ZWVsJyxcbiAgICAgICAgYnJpdDonRU4xQShMKScsXG4gICAgICAgIGJyaXQyOidFTjFBJyxcbiAgICAgICAgYW1lcmljYTonU0FFIDEyTDE0JyxcbiAgICAgICAgYW1lcmljYTI6J1NBRSAxMkwxMycsXG4gICAgICAgIGNvdW50OicxJ1xuICAgIH0sXG4gICAge1xuICAgICAgICBpZDoyLFxuICAgICAgICBkZXNjcmlwdGlvbjonU2VtaSBGcmVlIEN1dHRpbmcgU3RlZWwnLFxuICAgICAgICBicml0OlwiRU44TVwiLFxuICAgICAgICBicml0MjpcIkVOMTVBTVwiLFxuICAgICAgICBhbWVyaWNhOicnLFxuICAgICAgICBjb3VudDonMidcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6MyxcbiAgICAgICAgZGVzY3JpcHRpb246J0NhcmJvbiBTdGVlbCcsXG4gICAgICAgIGJyaXQ6J0VOMycsXG4gICAgICAgIGJyaXQyOidFTjgnLFxuICAgICAgICBicml0MzonRU44JyxcbiAgICAgICAgYW1lcmljYTonJyxcbiAgICAgICAgY291bnQ6JzMnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOjQsXG4gICAgICAgIGRlc2NyaXB0aW9uOidBbGxveSBTdGVlbCcsXG4gICAgICAgIGJyaXQ6JzE2TW5DcjUnLFxuICAgICAgICBicml0MjonMjBNbkNyNScsXG4gICAgICAgIGFtZXJpY2E6J1NBRSA4NjIwJyxcbiAgICAgICAgYW1lcmljYTI6J1NBRSA0MzIwICcsXG4gICAgICAgIGFtZXJpY2EzOidTQUU0MTQwJyxcbiAgICAgICAgY291bnQ6JzQnXG4gICAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IFBST0RVQ1RfVEFCTEU7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IEZhYiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9GYWInO1xuaW1wb3J0IFBlcm1QaG9uZU1zZ091dGxpbmVkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvUGVybVBob25lTXNnT3V0bGluZWQnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgbWFyZ2luOiB7XG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxuICB9LFxuICBleHRlbmRlZEljb246IHtcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygxKSxcbiAgfSxcbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGFuZGxpbmVFeHRlbmRlZEljb24oKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICAgIDxGYWIgc2l6ZT1cInNtYWxsXCIgdmFyaWFudD1cImV4dGVuZGVkXCIgY29sb3I9XCJzZWNvbmRhcnlcIiBhcmlhLWxhYmVsPVwiYWRkXCIgY2xhc3NOYW1lPXtjbGFzc2VzLm1hcmdpbn0+XG4gICAgICAgICAgPFBlcm1QaG9uZU1zZ091dGxpbmVkSWNvbiBjbGFzc05hbWU9e2NsYXNzZXMuZXh0ZW5kZWRJY29ufSAvPlxuICAgICAgICAgIDAxMjA0MjgzMTAxMlxuICAgICAgICA8L0ZhYj5cbiAgICAgIDwvZGl2PlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IEZhYiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9GYWInO1xuaW1wb3J0IE1haWxPdXRsaW5lT3V0bGluZWRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9NYWlsT3V0bGluZU91dGxpbmVkJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gIG1hcmdpbjoge1xuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcbiAgfSxcbiAgZXh0ZW5kZWRJY29uOiB7XG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMSksXG4gIH0sXG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haWxFeHRlbmRlZEljb24oKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICAgIDxGYWIgdmFyaWFudD1cImV4dGVuZGVkXCIgY29sb3I9XCJwcmltYXJ5XCIgYXJpYS1sYWJlbD1cImFkZFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYXJnaW59PlxuICAgICAgICAgIDxNYWlsT3V0bGluZU91dGxpbmVkSWNvbiBjbGFzc05hbWU9e2NsYXNzZXMuZXh0ZW5kZWRJY29ufSAvPlxuICAgICAgICAgIHJrZWNAYWlydGVsbWFpbC5pblxuICAgICAgICA8L0ZhYj5cbiAgICAgIDwvZGl2PlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IEZhYiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9GYWInO1xuaW1wb3J0IENhcmRUcmF2ZWxJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DYXJkVHJhdmVsJztcbmltcG9ydCBQaG9uZU91dGxpbmVkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvUGhvbmVPdXRsaW5lZCc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICBtYXJnaW46IHtcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXG4gIH0sXG4gIGV4dGVuZGVkSWNvbjoge1xuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDEpLFxuICB9LFxufSkpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQaG9uZUV4dGVuZGVkSWNvbigpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgICAgPEZhYiBzaXplPVwic21hbGxcIiB2YXJpYW50PVwiZXh0ZW5kZWRcIiBjb2xvcj1cInNlY29uZGFyeVwiIGFyaWEtbGFiZWw9XCJhZGRcIiBjbGFzc05hbWU9e2NsYXNzZXMubWFyZ2lufT5cbiAgICAgICAgICA8UGhvbmVPdXRsaW5lZEljb24gY2xhc3NOYW1lPXtjbGFzc2VzLmV4dGVuZGVkSWNvbn0gLz5cbiAgICAgICAgICA5ODEwMTYyMTMwXG4gICAgICAgIDwvRmFiPlxuICAgICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFRyYW5zaXRpb24gZnJvbSBcIi4vVHJhbnNpdGlvbi5qc1wiO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgQ2xpY2tBd2F5TGlzdGVuZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2xpY2tBd2F5TGlzdGVuZXInO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgcm9vdDoge1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICB9LFxuICBkcm9wZG93bjoge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogMjgsXG4gICAgcmlnaHQ6IDAsXG4gICAgbGVmdDogMCxcbiAgICB6SW5kZXg6IDEsXG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkJyxcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDEpLFxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxuICB9LFxufSkpO1xuXG5cbmZ1bmN0aW9uIERyb3BEb3duKCkge1xuICBcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgc2V0T3BlbigocHJldikgPT4gIXByZXYpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrQXdheSA9ICgpID0+IHtcbiAgICBzZXRPcGVuKGZhbHNlKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgIDxDbGlja0F3YXlMaXN0ZW5lciBvbkNsaWNrQXdheT17aGFuZGxlQ2xpY2tBd2F5fT5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGlubGluZS1ibG9jayB0ZXh0LWxlZnRcIj5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgcm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHB4LTQgcHktMiBiZy13aGl0ZSB0ZXh0LXNtIGxlYWRpbmctNSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNzAwIGhvdmVyOnRleHQtZ3JheS01MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1ibHVlLTMwMCBmb2N1czpzaGFkb3ctb3V0bGluZS1ibHVlIGFjdGl2ZTpiZy1ncmF5LTUwIGFjdGl2ZTp0ZXh0LWdyYXktODAwIHRyYW5zaXRpb24gZWFzZS1pbi1vdXQgZHVyYXRpb24tMTUwXCI+XG4gICAgICBGYWNpbGl0aWVzXG4gICAgICAgIDxzdmcgY2xhc3M9XCItbXItMSBtbC0yIGgtNSB3LTVcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiPlxuICAgICAgICAgIDxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTUuMjkzIDcuMjkzYTEgMSAwIDAxMS40MTQgMEwxMCAxMC41ODZsMy4yOTMtMy4yOTNhMSAxIDAgMTExLjQxNCAxLjQxNGwtNCA0YTEgMSAwIDAxLTEuNDE0IDBsLTQtNGExIDEgMCAwMTAtMS40MTR6XCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiLz5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L2J1dHRvbj5cblxuICAgeyBvcGVuID8gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9yaWdpbi10b3AtcmlnaHQgYWJzb2x1dGUgcmlnaHQtMCBtdC0yIHctNTYgcm91bmRlZC1tZCBzaGFkb3ctbGdcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtbWQgYmctd2hpdGUgc2hhZG93LXhzXCI+XG4gICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImJsb2NrIHB4LTQgcHktMiB0ZXh0LXNtIGxlYWRpbmctNSB0ZXh0LWdyYXktNzAwIGhvdmVyOmJnLWdyYXktMTAwIGhvdmVyOnRleHQtZ3JheS05MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJnLWdyYXktMTAwIGZvY3VzOnRleHQtZ3JheS05MDBcIj5GbG93IENoYXJ0PC9hPlxuICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiYmxvY2sgcHgtNCBweS0yIHRleHQtc20gbGVhZGluZy01IHRleHQtZ3JheS03MDAgaG92ZXI6YmctZ3JheS0xMDAgaG92ZXI6dGV4dC1ncmF5LTkwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6YmctZ3JheS0xMDAgZm9jdXM6dGV4dC1ncmF5LTkwMFwiPlRlc3RpbmcgRmFjaWxpdGllczwvYT5cbiAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImJsb2NrIHB4LTQgcHktMiB0ZXh0LXNtIGxlYWRpbmctNSB0ZXh0LWdyYXktNzAwIGhvdmVyOmJnLWdyYXktMTAwIGhvdmVyOnRleHQtZ3JheS05MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJnLWdyYXktMTAwIGZvY3VzOnRleHQtZ3JheS05MDBcIj5RdWFsaXR5IFByb21pc2U8L2E+XG4gICAgICAgXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PiApIDogbnVsbCB9XG5cbiAgICAgICAgICA8L2Rpdj5cbiAgICA8L0NsaWNrQXdheUxpc3RlbmVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBEcm9wRG93blxuICAgICAgICAiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQXBwQmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0FwcEJhcic7XG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyJztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xuaW1wb3J0IE1lbnVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9NZW51JztcbmltcG9ydCBTaWRlRHJhd2VyIGZyb20gJy4vU2lkZURyYXdlcic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHsgRGVza3RvcCwgTW9iaWxlT25seSwgRm9udFJvYm90byB9IGZyb20gJy4uL3BvcnRmb2xpby5zdHlsZXMnO1xuaW1wb3J0IFRhYnMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFicyc7XG5pbXBvcnQgVGFiIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYic7XG5pbXBvcnQgQ2lyY2xlSWNvbiBmcm9tICcuLi9pY29uY2lyY2VsZSc7XG5cbmltcG9ydCBEcm9wRG93biBmcm9tICcuL0Ryb3BEb3duJztcblxuXG5cbmNsYXNzIEhlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICAgICBzdGF0ZSA9IHsgXG4gICAgICAgICAgIGRyYXdlck9wZW46IGZhbHNlLFxuICAgICAgICAgICBoZWFkZXJTaG93OiBmYWxzZSxcbiAgICAgICAgICAgICB9XG5cbiAgICAgICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJyx0aGlzLmhhbmRsZVNjcm9sbCk7IFxuICAgICAgICAgICAgIH1cblxuICAgIGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcblxuaWYod2luZG93LnNjcm9sbFkgPiAwKXtcbiAgICB0aGlzLnNldFN0YXRlICh7XG4gICAgICAgIGhlYWRlclNob3c6dHJ1ZVxuICAgIH0pXG59XG4gZWxzZSB7XG4gICAgdGhpcy5zZXRTdGF0ZSAoe1xuICAgICAgICBoZWFkZXJTaG93OmZhbHNlXG4gICAgfSlcbiAgICBcbiB9XG4gICAgfVxuICAgIFxuICAgIHRvZ2dsZURyYXdlciA9ICh2YWx1ZSkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICBkcmF3ZXJPcGVuOiB2YWx1ZVxuICAgICAgICB9KVxuICAgIH1cblxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICAgIFxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWItMTYnPlxuICAgICAgICAgICAgPEFwcEJhciBcbiAgICAgICAgICAgIHBvc2l0aW9uPVwiZml4ZWRcIlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuc3RhdGUuaGVhZGVyU2hvdyA/ICcjRjdGQUZDJyA6ICd3aGl0ZScgLFxuICAgICAgICAgICAgICAgIGJveFNoYWRvdzp0aGlzLnN0YXRlLmhlYWRlclNob3cgPyAnMHB4IDJweCA0cHggLTFweCByZ2JhKDAsMCwwLDAuMiksMHB4IDRweCA1cHggMHB4IHJnYmEoMCwwLDAsMC4xNCksMHB4IDFweCAxMHB4IDBweCByZ2JhKDAsMCwwLDAuMTIpJyA6ICdub25lJyAsXG4gICAgICAgICAgICAgICAgcGFkZGluZzonMTBweCAwcHgnLFxuICAgICAgICAgICAgIH19PlxuICAgICAgICA8VG9vbGJhcj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmbGV4R3JvdzoxfX0+XG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1pbmRpZ28tNDAwIHRleHQteGwnID4gUksgRW5naW5lZXJpbmcgPC9kaXY+XG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1pbmRpZ28tMzAwJyA+IENvcnBvcmF0aW9uIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgPERlc2t0b3A+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LWdyYXktNjAwIHRleHQtbGcnPlxuICAgICAgICAgICAgICAgICAgPEZvbnRSb2JvdG8+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5saW5lIG14LTQgaG92ZXI6dGV4dC1pbmRpZ28tNjAwJz5Ib21lPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5saW5lIG14LTQgaG92ZXI6dGV4dC1pbmRpZ28tNjAwJz5MZWFkZXJzaGlwPC9kaXY+ICBcbiAgICAgICAgICAgICAgICAgIDxEcm9wRG93bi8+XG4gICAgICAgICAgICAgICAgICA8L0ZvbnRSb2JvdG8+XG4gICAgICAgICAgICAgIDwvZGl2PiAgXG4gICAgICAgICAgIDwvRGVza3RvcD4gIFxuXG4gICAgICAgICBcbiAgICAgICAgICAgIDxNb2JpbGVPbmx5PiBcbiAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBjb2xvcj0ncHJpbWFyeScgYXJpYS1sYWJlbD0nTWVudScgb25DbGljaz17KCk9PiB0aGlzLnRvZ2dsZURyYXdlcih0cnVlKX0+IFxuICAgICAgICAgICAgICAgICAgIDxNZW51SWNvbi8+XG4gICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgIDwvTW9iaWxlT25seT5cblxuICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgIDxTaWRlRHJhd2VyXG4gICAgICAgICAgICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5kcmF3ZXJPcGVufVxuICAgICAgICAgICAgICAgICAgb25DbG9zZT17KHZhbHVlKT0+IHRoaXMudG9nZ2xlRHJhd2VyKHZhbHVlKX0vPlxuXG5cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgIDwvVG9vbGJhcj5cbiAgICAgICBcbiAgICAgICAgICAgIDwvQXBwQmFyPiAgIFxuICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBMaXN0U3ViaGVhZGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RTdWJoZWFkZXInO1xuaW1wb3J0IExpc3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdCc7XG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW0nO1xuaW1wb3J0IExpc3RJdGVtSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbUljb24nO1xuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHQnO1xuaW1wb3J0IENvbGxhcHNlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbGxhcHNlJztcbmltcG9ydCBJbmJveEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01vdmVUb0luYm94JztcbmltcG9ydCBEcmFmdHNJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9EcmFmdHMnO1xuaW1wb3J0IFNlbmRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TZW5kJztcbmltcG9ydCBFeHBhbmRMZXNzIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9FeHBhbmRMZXNzJztcbmltcG9ydCBFeHBhbmRNb3JlIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9FeHBhbmRNb3JlJztcbmltcG9ydCBTdGFyQm9yZGVyIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TdGFyQm9yZGVyJztcblxuaW1wb3J0IEhvbWVPdXRsaW5lZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0hvbWVPdXRsaW5lZCc7XG5pbXBvcnQgQWNjb3VudENpcmNsZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0FjY291bnRDaXJjbGVPdXRsaW5lZCc7XG5pbXBvcnQgQ2FyZFRyYXZlbEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0NhcmRUcmF2ZWwnO1xuaW1wb3J0IEFjY291bnRUcmVlT3V0bGluZWRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BY2NvdW50VHJlZU91dGxpbmVkJztcbmltcG9ydCBMaWJyYXJ5QWRkQ2hlY2tPdXRsaW5lZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0xpYnJhcnlBZGRDaGVja091dGxpbmVkJztcbmltcG9ydCBEb25lQWxsT3V0bGluZWRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Eb25lQWxsT3V0bGluZWQnO1xuXG5cblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gIHJvb3Q6IHtcbiAgICB3aWR0aDogJzM1MCcsXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXG4gIH0sXG4gIG5lc3RlZDoge1xuICAgIHBhZGRpbmdMZWZ0OiB0aGVtZS5zcGFjaW5nKDQpLFxuICB9LFxufSkpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXN0ZWRMaXN0KCkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIHNldE9wZW4oIW9wZW4pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J3ctNjQnPiAgICA8TGlzdFxuICAgICAgY29tcG9uZW50PVwibmF2XCJcbiAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm5lc3RlZC1saXN0LXN1YmhlYWRlclwiXG4gICAgICBzdWJoZWFkZXI9e1xuICAgICAgICA8TGlzdFN1YmhlYWRlciBjb21wb25lbnQ9XCJkaXZcIiBpZD1cIm5lc3RlZC1saXN0LXN1YmhlYWRlclwiPlxuICAgICAgICAgIFJLIEVuZ2luZWVyaW5nIENvcnBvcmF0aW9uXG4gICAgICAgIDwvTGlzdFN1YmhlYWRlcj5cbiAgICAgIH1cbiAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fVxuICAgID5cbiAgICAgIDxMaXN0SXRlbSBidXR0b24+XG4gICAgICAgIDxMaXN0SXRlbUljb24+XG4gICAgICAgIDxIb21lT3V0bGluZWRJY29uLz5cbiAgICAgICAgPC9MaXN0SXRlbUljb24+XG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkhvbWVcIiAvPlxuICAgICAgPC9MaXN0SXRlbT5cbiAgICAgIDxMaXN0SXRlbSBidXR0b24+XG4gICAgICAgIDxMaXN0SXRlbUljb24+XG4gICAgICAgIDxBY2NvdW50Q2lyY2xlSWNvbi8+XG4gICAgICAgIDwvTGlzdEl0ZW1JY29uPlxuICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJMZWFkZXJzaGlwXCIgLz5cbiAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICA8TGlzdEl0ZW0gYnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cbiAgICAgICAgPExpc3RJdGVtSWNvbj5cbiAgICAgICAgPENhcmRUcmF2ZWxJY29uLz5cbiAgICAgICAgPC9MaXN0SXRlbUljb24+XG4gICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkZhY2lsaXRpZXNcIiAvPlxuICAgICAgICB7b3BlbiA/IDxFeHBhbmRMZXNzIC8+IDogPEV4cGFuZE1vcmUgLz59XG4gICAgICA8L0xpc3RJdGVtPlxuICAgICAgPENvbGxhcHNlIGluPXtvcGVufSB0aW1lb3V0PVwiYXV0b1wiIHVubW91bnRPbkV4aXQ+XG4gICAgICAgIDxMaXN0IGNvbXBvbmVudD1cImRpdlwiIGRpc2FibGVQYWRkaW5nPlxuICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLm5lc3RlZH0+XG4gICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgPEFjY291bnRUcmVlT3V0bGluZWRJY29uLz5cbiAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiRmxvdyBDaGFydFwiIC8+XG4gICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5uZXN0ZWR9PlxuICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgIDxMaWJyYXJ5QWRkQ2hlY2tPdXRsaW5lZEljb24vPlxuICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XG4gICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJUZXN0aW5nIEZhY2lsaXRpZXNcIiAvPlxuICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMubmVzdGVkfT5cbiAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgIDxEb25lQWxsT3V0bGluZWRJY29uLz5cbiAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiUXVhbGl0eSBQcm9taXNlXCIgLz5cbiAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICA8L0xpc3Q+XG4gICAgICA8L0NvbGxhcHNlPlxuICAgIDwvTGlzdD5cbiAgICA8L2Rpdj5cblxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBEcmF3ZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRHJhd2VyJztcbmltcG9ydCBMaXN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3QnO1xuaW1wb3J0IExpc3RJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtJztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xuaW1wb3J0IEJvb2ttYXJrIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9NZXNzYWdlT3V0bGluZWQnO1xuaW1wb3J0IEhvbWVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Ib21lT3V0bGluZWQnO1xuaW1wb3J0IExpa2UgZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1RodW1iVXBPdXRsaW5lZCc7XG5pbXBvcnQgTmVzdGVkTGlzdCBmcm9tICcuL0xpc3QnO1xuXG5cblxuXG5jb25zdCBTaWRlRHJhd2VyID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPERyYXdlciBcbiAgICAgICAgYW5jaG9yPVwicmlnaHRcIlxuICAgICAgICBvcGVuPXtwcm9wcy5vcGVufVxuICAgICAgICBvbkNsb3NlPXsoKT0+IHByb3BzLm9uQ2xvc2UoZmFsc2UpfVxuICAgICAgICAgPlxuPE5lc3RlZExpc3QvPlxuICAgXG4gICAgICAgIDwvRHJhd2VyPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaWRlRHJhd2VyOyIsImltcG9ydCB7IENTU1RyYW5zaXRpb24gYXMgUmVhY3RDU1NUcmFuc2l0aW9uIH0gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cCdcbmltcG9ydCB7IHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IFRyYW5zaXRpb25Db250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh7XG4gIHBhcmVudDoge30sXG59KVxuXG5mdW5jdGlvbiB1c2VJc0luaXRpYWxSZW5kZXIoKSB7XG4gIGNvbnN0IGlzSW5pdGlhbFJlbmRlciA9IHVzZVJlZih0cnVlKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlzSW5pdGlhbFJlbmRlci5jdXJyZW50ID0gZmFsc2VcbiAgfSwgW10pXG4gIHJldHVybiBpc0luaXRpYWxSZW5kZXIuY3VycmVudFxufVxuXG5mdW5jdGlvbiBDU1NUcmFuc2l0aW9uKHtcbiAgc2hvdyxcbiAgZW50ZXIgPSAnJyxcbiAgZW50ZXJGcm9tID0gJycsXG4gIGVudGVyVG8gPSAnJyxcbiAgbGVhdmUgPSAnJyxcbiAgbGVhdmVGcm9tID0gJycsXG4gIGxlYXZlVG8gPSAnJyxcbiAgYXBwZWFyLFxuICBjaGlsZHJlbixcbn0pIHtcbiAgY29uc3QgZW50ZXJDbGFzc2VzID0gZW50ZXIuc3BsaXQoJyAnKS5maWx0ZXIoKHMpID0+IHMubGVuZ3RoKVxuICBjb25zdCBlbnRlckZyb21DbGFzc2VzID0gZW50ZXJGcm9tLnNwbGl0KCcgJykuZmlsdGVyKChzKSA9PiBzLmxlbmd0aClcbiAgY29uc3QgZW50ZXJUb0NsYXNzZXMgPSBlbnRlclRvLnNwbGl0KCcgJykuZmlsdGVyKChzKSA9PiBzLmxlbmd0aClcbiAgY29uc3QgbGVhdmVDbGFzc2VzID0gbGVhdmUuc3BsaXQoJyAnKS5maWx0ZXIoKHMpID0+IHMubGVuZ3RoKVxuICBjb25zdCBsZWF2ZUZyb21DbGFzc2VzID0gbGVhdmVGcm9tLnNwbGl0KCcgJykuZmlsdGVyKChzKSA9PiBzLmxlbmd0aClcbiAgY29uc3QgbGVhdmVUb0NsYXNzZXMgPSBsZWF2ZVRvLnNwbGl0KCcgJykuZmlsdGVyKChzKSA9PiBzLmxlbmd0aClcblxuICBmdW5jdGlvbiBhZGRDbGFzc2VzKG5vZGUsIGNsYXNzZXMpIHtcbiAgICBjbGFzc2VzLmxlbmd0aCAmJiBub2RlLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NlcylcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUNsYXNzZXMobm9kZSwgY2xhc3Nlcykge1xuICAgIGNsYXNzZXMubGVuZ3RoICYmIG5vZGUuY2xhc3NMaXN0LnJlbW92ZSguLi5jbGFzc2VzKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3RDU1NUcmFuc2l0aW9uXG4gICAgICBhcHBlYXI9e2FwcGVhcn1cbiAgICAgIHVubW91bnRPbkV4aXRcbiAgICAgIGluPXtzaG93fVxuICAgICAgYWRkRW5kTGlzdGVuZXI9eyhub2RlLCBkb25lKSA9PiB7XG4gICAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGRvbmUsIGZhbHNlKVxuICAgICAgfX1cbiAgICAgIG9uRW50ZXI9eyhub2RlKSA9PiB7XG4gICAgICAgIGFkZENsYXNzZXMobm9kZSwgWy4uLmVudGVyQ2xhc3NlcywgLi4uZW50ZXJGcm9tQ2xhc3Nlc10pXG4gICAgICB9fVxuICAgICAgb25FbnRlcmluZz17KG5vZGUpID0+IHtcbiAgICAgICAgcmVtb3ZlQ2xhc3Nlcyhub2RlLCBlbnRlckZyb21DbGFzc2VzKVxuICAgICAgICBhZGRDbGFzc2VzKG5vZGUsIGVudGVyVG9DbGFzc2VzKVxuICAgICAgfX1cbiAgICAgIG9uRW50ZXJlZD17KG5vZGUpID0+IHtcbiAgICAgICAgcmVtb3ZlQ2xhc3Nlcyhub2RlLCBbLi4uZW50ZXJUb0NsYXNzZXMsIC4uLmVudGVyQ2xhc3Nlc10pXG4gICAgICB9fVxuICAgICAgb25FeGl0PXsobm9kZSkgPT4ge1xuICAgICAgICBhZGRDbGFzc2VzKG5vZGUsIFsuLi5sZWF2ZUNsYXNzZXMsIC4uLmxlYXZlRnJvbUNsYXNzZXNdKVxuICAgICAgfX1cbiAgICAgIG9uRXhpdGluZz17KG5vZGUpID0+IHtcbiAgICAgICAgcmVtb3ZlQ2xhc3Nlcyhub2RlLCBsZWF2ZUZyb21DbGFzc2VzKVxuICAgICAgICBhZGRDbGFzc2VzKG5vZGUsIGxlYXZlVG9DbGFzc2VzKVxuICAgICAgfX1cbiAgICAgIG9uRXhpdGVkPXsobm9kZSkgPT4ge1xuICAgICAgICByZW1vdmVDbGFzc2VzKG5vZGUsIFsuLi5sZWF2ZVRvQ2xhc3NlcywgLi4ubGVhdmVDbGFzc2VzXSlcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvUmVhY3RDU1NUcmFuc2l0aW9uPlxuICApXG59XG5cbmZ1bmN0aW9uIFRyYW5zaXRpb24oeyBzaG93LCBhcHBlYXIsIC4uLnJlc3QgfSkge1xuICBjb25zdCB7IHBhcmVudCB9ID0gdXNlQ29udGV4dChUcmFuc2l0aW9uQ29udGV4dClcbiAgY29uc3QgaXNJbml0aWFsUmVuZGVyID0gdXNlSXNJbml0aWFsUmVuZGVyKClcbiAgY29uc3QgaXNDaGlsZCA9IHNob3cgPT09IHVuZGVmaW5lZFxuXG4gIGlmIChpc0NoaWxkKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDU1NUcmFuc2l0aW9uXG4gICAgICAgIGFwcGVhcj17cGFyZW50LmFwcGVhciB8fCAhcGFyZW50LmlzSW5pdGlhbFJlbmRlcn1cbiAgICAgICAgc2hvdz17cGFyZW50LnNob3d9XG4gICAgICAgIHsuLi5yZXN0fVxuICAgICAgLz5cbiAgICApXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxUcmFuc2l0aW9uQ29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgcGFyZW50OiB7XG4gICAgICAgICAgc2hvdyxcbiAgICAgICAgICBpc0luaXRpYWxSZW5kZXIsXG4gICAgICAgICAgYXBwZWFyLFxuICAgICAgICB9LFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8Q1NTVHJhbnNpdGlvbiBhcHBlYXI9e2FwcGVhcn0gc2hvdz17c2hvd30gey4uLnJlc3R9IC8+XG4gICAgPC9UcmFuc2l0aW9uQ29udGV4dC5Qcm92aWRlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmFuc2l0aW9uIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBZGRyZXNzQ2FyZCBmcm9tICcuLi9DYXJkcy9BZGRyZXNzQ2FyZCc7XG5pbXBvcnQgUEFSVE5FUl9EQVRBIGZyb20gJy4uL0RhdGEvUGFydG5lckRhdGEnO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSdcbmltcG9ydCBBcGFydG1lbnRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BcGFydG1lbnQnO1xuaW1wb3J0IENpcmNsZUljb24gZnJvbSAnLi4vaWNvbmNpcmNlbGUnO1xuaW1wb3J0IHsgRm9udENoZWxzZWEgfSBmcm9tICcuLi9wb3J0Zm9saW8uc3R5bGVzJztcbmltcG9ydCBMZWFkZXJDYXJkIGZyb20gJy4uL0NhcmRzL0xlYWRlckNhcmQnO1xuaW1wb3J0IEFjY291bnRDaXJjbGVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BY2NvdW50Q2lyY2xlJztcblxuXG5cbmNsYXNzIEFkZHJlc3NMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGxlYWRlcnMgOiBQQVJUTkVSX0RBVEFcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgbGVhZGVycyB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXgtNCBtYi0yIG1kOm1iLTQgdGV4dC1pbmRpZ28tNDAwIG1kOm1sLTQgdGV4dC00eGwgZm9udC1tZWRpdW0nPiBcbiAgICAgICAgICAgICAgICAgPENpcmNsZUljb24+PEFjY291bnRDaXJjbGVJY29uLz48L0NpcmNsZUljb24+IExlYWRlcnNoaXA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT0nbWQ6ZmxleCBtZDpwbC00IG1yLTQgbWQ6bXgtMCc+XG4gICAgICAgICAgICAgICB7bGVhZGVycy5tYXAoKHtuYW1lLGRlc2NyaXB0aW9uLGltYWdlVXJsLGlkfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtbC00IG1kOm1sLTAgbWQ6bXItNCBtYi00Jz5cbiAgICAgICAgICAgICAgICAgICA8TGVhZGVyQ2FyZCBrZXk9e2lkfSBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259IG5hbWU9e25hbWV9IGltYWdlVXJsPXtpbWFnZVVybH0vPlxuICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFkZHJlc3NMaXN0OyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTWFjaGluZUNhcmQgZnJvbSAnLi4vQ2FyZHMvTWFjaGluZUNhcmQnO1xuaW1wb3J0IE1BQ0hJTkVfREFUQSBmcm9tICcuLi9EYXRhL01hY2hpbmVEYXRhJztcbmltcG9ydCB7IFByZXZpZXdDb250YWluZXIsIE1vYmlsZU9ubHkgfSBmcm9tICcuLi9wb3J0Zm9saW8uc3R5bGVzJztcbmltcG9ydCBTd2lwZWFibGVWaWV3cyBmcm9tICdyZWFjdC1zd2lwZWFibGUtdmlld3MnO1xuXG5cbmNsYXNzIE1hY2hpbmVMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG1hY2hpbmVzIDogTUFDSElORV9EQVRBXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IG1hY2hpbmVzIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICAgICAgICByb290OiB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6ICcwIDJyZW0nLFxuICAgICAgICAgICAgICBtYXJnaW5MZWZ0IDogJy0wLjlyZW0nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2xpZGVDb250YWluZXI6IHtcbiAgICAgICAgICAgICAgbWFyZ2luTGVmdDonLTAuMnJlbScsXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgXG4gICAgICAgICAgfTtcbiAgICAgICBcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFByZXZpZXdDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21hY2hpbmVzLm1hcCgoe25hbWUsZGVzY3JpcHRpb24saWQsaW1hZ2VVcmx9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgPE1hY2hpbmVDYXJkIGtleT17aWR9IGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn0gbmFtZT17bmFtZX0gaW1hZ2VVcmw9e2ltYWdlVXJsfS8+XG4gICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgPC9QcmV2aWV3Q29udGFpbmVyPlxuXG4gICAgICAgICAgICA8TW9iaWxlT25seT5cbiAgICAgICAgICAgICAgIDxTd2lwZWFibGVWaWV3cyBzdHlsZT17c3R5bGVzLnJvb3R9IHNsaWRlU3R5bGU9e3N0eWxlcy5zbGlkZUNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICAgIHttYWNoaW5lcy5tYXAoKHtuYW1lLGRlc2NyaXB0aW9uLGlkLGltYWdlVXJsfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgIDxNYWNoaW5lQ2FyZCBrZXk9e2lkfSBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259IG5hbWU9e25hbWV9IGltYWdlVXJsPXtpbWFnZVVybH0vPlxuICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICA8L1N3aXBlYWJsZVZpZXdzPlxuICAgICAgPC9Nb2JpbGVPbmx5PlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFjaGluZUxpc3Q7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IEZhYiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9GYWInO1xuaW1wb3J0IENhcmRUcmF2ZWxJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DYXJkVHJhdmVsJztcbmltcG9ydCBNZW51IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnUnO1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gIG1hcmdpbjoge1xuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcbiAgfSxcbiAgZXh0ZW5kZWRJY29uOiB7XG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMSksXG4gIH0sXG59KSk7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmFjaWxpdGllc0V4dGVuZGVkSWNvbigpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCBbYW5jaG9yRWwsIHNldEFuY2hvckVsXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgc2V0QW5jaG9yRWwoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XG4gICAgc2V0QW5jaG9yRWwobnVsbCk7XG4gIH07XG5cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICAgIDxGYWIgdmFyaWFudD1cImV4dGVuZGVkXCIgY29sb3I9XCJwcmltYXJ5XCIgYXJpYS1sYWJlbD1cImFkZFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYXJnaW59XG4gICAgICAgIGFyaWEtY29udHJvbHM9XCJzaW1wbGUtbWVudVwiIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCIgb25DbGljaz17aGFuZGxlQ2xpY2t9ID5cbiAgICAgICAgICA8Q2FyZFRyYXZlbEljb24gY2xhc3NOYW1lPXtjbGFzc2VzLmV4dGVuZGVkSWNvbn0gLz5cbiAgICAgICAgICBGYWNpbGl0ZXNcbiAgICAgICAgPC9GYWI+XG5cbiAgICAgICAgPE1lbnVcbiAgICAgICAgaWQ9XCJzaW1wbGUtbWVudVwiXG4gICAgICAgIGFuY2hvckVsPXthbmNob3JFbH1cbiAgICAgICAga2VlcE1vdW50ZWRcbiAgICAgICAgb3Blbj17Qm9vbGVhbihhbmNob3JFbCl9XG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxuICAgICAgPlxuICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlQ2xvc2V9PkZsb3cgQ2hhcnQ8L01lbnVJdGVtPlxuICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlQ2xvc2V9PlRlc3RpbmcgRmFjaWxpdGllczwvTWVudUl0ZW0+XG4gICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+UXVhbGl0eSBQcm9taXNlPC9NZW51SXRlbT5cbiAgICAgIDwvTWVudT5cbiAgICAgIDwvZGl2PlxuICApO1xufVxuIiwiaW1wb3J0IHsgUGFwZXIsIFR5cG9ncmFwaHksIEdyaWQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgTG9jYWxTaGlwcGluZ0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0xvY2FsU2hpcHBpbmdPdXRsaW5lZCc7XG5pbXBvcnQgTWFjaGluZUxpc3QgZnJvbSAnLi4vTWFjaGluZS9tYWNoaW5lbGlzdCc7XG5pbXBvcnQgQ2lyY2xlSWNvbiBmcm9tICcuLi9pY29uY2lyY2VsZSc7XG5pbXBvcnQgeyBGb250Q2hlbHNlYSB9IGZyb20gJy4uL3BvcnRmb2xpby5zdHlsZXMnO1xuaW1wb3J0IFNpbXBsZVRhYmxlIGZyb20gJy4vVGFibGUnO1xuaW1wb3J0IFByb2R1Y3RMaXN0IGZyb20gJy4vUHJvZHVjdExpc3QnO1xuaW1wb3J0IEZhY2lsaXRpZXNFeHRlbmRlZEljb24gZnJvbSAnLi9GYWNpbGl0aWVzYnV0dG9uJztcbmltcG9ydCBEcm9wRG93biBmcm9tICcuLi9GdXR1cmUvRHJvcERvd24nO1xuXG5jb25zdCBpbWFnZTEgPSAnaHR0cHM6Ly90aHVtYm9yLmZvcmJlcy5jb20vdGh1bWJvci85NjB4MC9odHRwcyUzQSUyRiUyRmJsb2dzLWltYWdlcy5mb3JiZXMuY29tJTJGYW5uYXRvYmluJTJGZmlsZXMlMkYyMDE5JTJGMDIlMkY1Ry1mYWN0b3J5LVVLLTEyMDB4Njc1LmpwZyc7XG5jb25zdCBpbWFnZTIgPSAnaHR0cHM6Ly9pLmltZ3VyLmNvbS9pbXhHZUxGLnBuZyc7XG5cbmNvbnN0IFByb2R1Y3REZXRhaWwgPSAoKSA9PiAoXG5cbjxkaXYgY2xhc3NOYW1lPSdtZDptdC00IG1iLTggbWQ6bXgtMTYgYmctZ3JheS0xMDAgbWQ6Ymctd2hpdGUgc2hhZG93LWxnIHJvdW5kZWQtbGcgbWQ6Ym9yZGVyLWluZGlnby0yMDAgJz5cbiAgICAgICAgPGJyLz5cbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezF9PlxuICAgICAgICAgICAgPEdyaWQgaXRlbSBtZD17OX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtbC04IG1kOm1sLTQgdGV4dC00eGwgbWQ6dGV4dC02eGwgdGV4dC1pbmRpZ28tNTAwIHRleHQtYm9sZCBmb250LW1lZGl1bSc+IFxuICAgICAgPENpcmNsZUljb24+XG4gICAgICA8TG9jYWxTaGlwcGluZ0ljb24vPjwvQ2lyY2xlSWNvbj4gXG4gICAgICAgUFJPRFVDVFNcbiAgICAgICA8L2Rpdj5cbiAgICB7LyogPGltZyBzcmM9e2ltYWdlMX0gY2xhc3NOYW1lPSdoLTY0IC1tdC00IG1kOm1sLTQnLz4gKi99XG4gICAgIDxkaXYgY2xhc3NOYW1lPSdteC04IG1kOm14LTQnPlxuICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9J3N1YnRpdGxlMScgY29sb3I9J3RleHRTZWNvbmRhcnknPlxuICAgIFdlIG1hbnVmYWN0dXJlIGEgd2lkZSByYW5nZSBvZiBncmFkZXMgYW5kIHNpemVzIHRvIGNhdGVyIHRvIHRoZSB3aWRlIHZhcmlldHkgb2YgcmVxdWlyZW1lbnRzIGluIHRoZSBpbmR1c3RyeS4gQW4gb3B0aW11bSByYXcgbWF0ZXJpYWwgc3RvY2sgaXMgYWxzbyBtYWludGFpbmVkIHRvIHByb3ZpZGUgdGltZWx5IGRlbGl2ZXJ5IG9mIGdvb2RzIHRvIG91ciBjdXN0b21lcnMuIFRoZSByYXcgbWF0ZXJpYWwgaXMgc291cmNlZCBmcm9tIHRoZSBtb3N0IHJlcHV0ZWQgc3RlZWwgcm9sbGluZyBwcm9kdWNlcnMgaW4gb3VyIGNvdW50cnkuIFdlIHByb2Nlc3MgZnJlZSBjdXR0aW5nLCBzZW1pIGZyZWUgY3V0dGluZywgY2FyYm9uIHN0ZWVsIGFuZCBvdGhlciBhbGxveSBncmFkZXMgY29uZm9ybWluZyB0byBCcml0aXNoIGFuZCBBbWVyaWNhbiBzdGFuZGFyZCBzcGVjaWZpY2F0aW9uLlxuICAgIDxici8+PGJyLz5cbiAgICBUaGUgZ3JhZGUgb2Ygc3RlZWwgcHJvY2Vzc2VkIGF0IG91ciBwbGFudCBhcmUgYXMgZm9sbG93czpcbiAgICA8L1R5cG9ncmFwaHk+XG4gICAgPC9kaXY+XG4gICAgPC9HcmlkPlxuICAgIDwvR3JpZD5cbiAgICA8YnIvPlxuICAgIFxuICAgIDxTaW1wbGVUYWJsZS8+XG4gICAgPGJyLz5cbiAgICA8ZGl2IGNsYXNzTmFtZT0nbXgtOCBtZDpteC00Jz5cbiAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdzdWJ0aXRsZTEnIGNvbG9yPSd0ZXh0U2Vjb25kYXJ5Jz5cbiAgICBXZSBzdXBwbHkgdGhlIG1hdGVyaWFsIGluIHRoZSBmb2xsb3dpbmcgZm9ybXM6XG4gICAgPC9UeXBvZ3JhcGh5PlxuICAgIDxici8+XG4gICAgPFByb2R1Y3RMaXN0Lz5cblxuPGRpdiBjbGFzc05hbWU9J20tNCBtYi0yJz5cbiAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdzdWJ0aXRsZTInY29sb3I9XCJ0ZXh0UHJpbWFyeVwiPlxuICAgIENoZWNrIG91dCB0aGUgRmFjaWxpdGllcyBwcm92aWRlIGJ5IHVzISA8YnIvPiAoYnkgY2xpY2tpbmcgdGhlIGJ1dHRvbiBkb3duIGJlbG93KVxuICAgIDwvVHlwb2dyYXBoeT5cbiAgICA8L2Rpdj5cbiAgICA8RmFjaWxpdGllc0V4dGVuZGVkSWNvbi8+XG4gICAgPGJyLz5cbiAgICAgPC9kaXY+XG48L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdERldGFpbDsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1hY2hpbmVDYXJkIGZyb20gJy4uL0NhcmRzL01hY2hpbmVDYXJkJztcbmltcG9ydCBQUk9EVUNUTElTVF9EQVRBIGZyb20gJy4uL0RhdGEvUHJvZHVjdExpc3QnO1xuaW1wb3J0IHsgUHJldmlld0NvbnRhaW5lciwgTW9iaWxlT25seSB9IGZyb20gJy4uL3BvcnRmb2xpby5zdHlsZXMnO1xuaW1wb3J0IFN3aXBlYWJsZVZpZXdzIGZyb20gJ3JlYWN0LXN3aXBlYWJsZS12aWV3cyc7XG5cblxuY2xhc3MgUHJvZHVjdExpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgcHJvZHVjdHMgOiBQUk9EVUNUTElTVF9EQVRBXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IHByb2R1Y3RzIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICAgICAgICByb290OiB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6ICcwIDJyZW0nLFxuICAgICAgICAgICAgICBtYXJnaW5MZWZ0IDogJy0wLjlyZW0nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2xpZGVDb250YWluZXI6IHtcbiAgICAgICAgICAgICAgbWFyZ2luTGVmdDonLTAuMnJlbScsXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgXG4gICAgICAgICAgfTtcbiAgICAgICBcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFByZXZpZXdDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3RzLm1hcCgoe25hbWUsZGVzY3JpcHRpb24saWQsaW1hZ2VVcmx9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgPE1hY2hpbmVDYXJkIGtleT17aWR9IGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn0gbmFtZT17bmFtZX0gaW1hZ2VVcmw9e2ltYWdlVXJsfS8+XG4gICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgPC9QcmV2aWV3Q29udGFpbmVyPlxuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIDxNb2JpbGVPbmx5PlxuICAgICAgICAgICAgICAgPFN3aXBlYWJsZVZpZXdzIHN0eWxlPXtzdHlsZXMucm9vdH0gc2xpZGVTdHlsZT17c3R5bGVzLnNsaWRlQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3RzLm1hcCgoe25hbWUsZGVzY3JpcHRpb24saWQsaW1hZ2VVcmx9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgPE1hY2hpbmVDYXJkIGtleT17aWR9IGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn0gbmFtZT17bmFtZX0gaW1hZ2VVcmw9e2ltYWdlVXJsfS8+XG4gICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgfVxuICAgICAgICAgIDwvU3dpcGVhYmxlVmlld3M+XG4gICAgICA8L01vYmlsZU9ubHk+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0TGlzdDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgVGFibGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGUnO1xuaW1wb3J0IFRhYmxlQm9keSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUJvZHknO1xuaW1wb3J0IFRhYmxlQ2VsbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNlbGwnO1xuaW1wb3J0IFRhYmxlQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ29udGFpbmVyJztcbmltcG9ydCBUYWJsZUhlYWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVIZWFkJztcbmltcG9ydCBUYWJsZVJvdyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVJvdyc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuaW1wb3J0IFBST0RVQ1RfVEFCTEUgZnJvbSAnLi4vRGF0YS9Qcm9kdWN0VGFibGUnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcbiAgdGFibGU6IHtcbiAgICBtaW5XaWR0aDogNjUwLFxuICB9LFxufSk7XG5cbmNvbnN0IHJvd3MgPSBQUk9EVUNUX1RBQkxFO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaW1wbGVUYWJsZSgpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIHJldHVybiAoXG4gICAgPFRhYmxlQ29udGFpbmVyPlxuICAgICAgPFRhYmxlIGNsYXNzTmFtZT17Y2xhc3Nlcy50YWJsZX0gYXJpYS1sYWJlbD1cInNpbXBsZSB0YWJsZVwiIHNpemU9XCJzbWFsbFwiPlxuICAgICAgICA8VGFibGVIZWFkPlxuICAgICAgICAgIDxUYWJsZVJvdz5cbiAgICAgICAgICAgIDxUYWJsZUNlbGw+RGVzY3JpcHRpb248L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgIDxUYWJsZUNlbGw+QnJpdGlzaCBTdGFuZGFyZDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgPFRhYmxlQ2VsbD5BbWVyaWNhbiBTdGFuZGFyZDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgPC9UYWJsZUhlYWQ+XG4gICAgICAgIDxUYWJsZUJvZHk+XG4gICAgICAgICAge3Jvd3MubWFwKChyb3cpID0+IChcbiAgICAgICAgICAgIDxUYWJsZVJvdyBrZXk9e3Jvdy5pZH0+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGw+e3Jvdy5kZXNjcmlwdGlvbn08L1RhYmxlQ2VsbD5cbiAgICAgICAgICA8VGFibGVDZWxsPntyb3cuYnJpdH08YnIvPntyb3cuYnJpdDJ9PGJyLz57cm93LmJyaXQzfTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8VGFibGVDZWxsPntyb3cuYW1lcmljYX08YnIvPntyb3cuYW1lcmljYTJ9PGJyLz57cm93LmFtZXJpY2EzfTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9UYWJsZUJvZHk+XG4gICAgICA8L1RhYmxlPlxuICAgIDwvVGFibGVDb250YWluZXI+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBLZXlib2FyZEFycm93UmlnaHQgZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0tleWJvYXJkQXJyb3dSaWdodCc7XG5pbXBvcnQgS2V5Ym9hcmRBcnJvd0xlZnQgZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0tleWJvYXJkQXJyb3dMZWZ0JztcbmltcG9ydCBQYXJhbGxheFNsaWRlIGZyb20gJ0BtdWktdHJlYXN1cnkvY29tcG9uZW50cy9zbGlkZS9wYXJhbGxheCc7XG5pbXBvcnQgRG90SW5kaWNhdG9yIGZyb20gJ0BtdWktdHJlYXN1cnkvY29tcG9uZW50cy9pbmRpY2F0b3IvZG90JztcbmltcG9ydCB7IHVzZUFycm93RGFya0J1dHRvblN0eWxlcyB9IGZyb20gJ0BtdWktdHJlYXN1cnkvc3R5bGVzL2J1dHRvbi9hcnJvd0RhcmsnO1xuXG5jb25zdCBkYXRhID0gW1xuICB7XG4gICAgaWQ6IDEsXG4gICAgdGl0bGU6ICdIdWFyYWNoZScsXG4gICAgc3VidGl0bGU6ICdHcmlwcCcsXG4gICAgaW1hZ2U6XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxuICAgICAgJ2h0dHBzOi8vZmlyZWJhc2VzdG9yYWdlLmdvb2dsZWFwaXMuY29tL3YwL2IvbXVpLXRyZWFzdXJ5LmFwcHNwb3QuY29tL28vcHVibGljJTJGc2hvZXMlMkZhaXItaHVhcmFjaGUtZ3JpcHAucG5nP2FsdD1tZWRpYScsXG4gIH0sXG4gIHtcbiAgICBpZDogMixcbiAgICB0aXRsZTogJ0FpciBNYXgnLFxuICAgIHN1YnRpdGxlOiAnMjcwIFAnLFxuICAgIGltYWdlOlxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW5cbiAgICAgICdodHRwczovL2ZpcmViYXNlc3RvcmFnZS5nb29nbGVhcGlzLmNvbS92MC9iL211aS10cmVhc3VyeS5hcHBzcG90LmNvbS9vL3B1YmxpYyUyRnNob2VzJTJGYWlyLW1heC0yNzAucG5nP2FsdD1tZWRpYScsXG4gIH0sXG4gIHtcbiAgICBpZDogMyxcbiAgICB0aXRsZTogJ0FpciBNYXgnLFxuICAgIHN1YnRpdGxlOiAnRGVsdXhlJyxcbiAgICBpbWFnZTpcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXG4gICAgICAnaHR0cHM6Ly9maXJlYmFzZXN0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vdjAvYi9tdWktdHJlYXN1cnkuYXBwc3BvdC5jb20vby9wdWJsaWMlMkZzaG9lcyUyRmFpci1tYXgtZGVsdXhlLnBuZz9hbHQ9bWVkaWEnLFxuICB9LFxuXTtcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygoeyBwYWxldHRlLCBicmVha3BvaW50cywgc3BhY2luZyB9KSA9PiAoe1xuICByb290OiB7XG4gICAgLy8gYSBtdXN0IGlmIHlvdSB3YW50IHRvIHNldCBhcnJvd3MsIGluZGljYXRvciBhcyBhYnNvbHV0ZVxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gIH0sXG4gIHNsaWRlOiB7XG4gICAgcGVyc3BlY3RpdmU6IDEwMDAsIC8vIGNyZWF0ZSBwZXJzcGVjdGl2ZVxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAvLyByZWxhdGl2ZSBpcyBhIG11c3QgaWYgeW91IHdhbnQgdG8gY3JlYXRlIG92ZXJsYXBwaW5nIGxheWVycyBpbiBjaGlsZHJlblxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIHBhZGRpbmdUb3A6IHNwYWNpbmcoOCksXG4gICAgW2JyZWFrcG9pbnRzLnVwKCdzbScpXToge1xuICAgICAgcGFkZGluZ1RvcDogc3BhY2luZygxMCksXG4gICAgfSxcbiAgICBbYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XG4gICAgICBwYWRkaW5nVG9wOiBzcGFjaW5nKDE0KSxcbiAgICB9LFxuICB9LFxuICBpbWFnZUNvbnRhaW5lcjoge1xuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgekluZGV4OiAyLFxuICAgIHBhZGRpbmdCb3R0b206ICc1Ni4yNSUnLFxuICB9LFxuICBpbWFnZToge1xuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgekluZGV4OiAxMCxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIG9iamVjdEZpdDogJ2NvdmVyJyxcbiAgICBtYXJnaW5MZWZ0OiAnMTIlJyxcbiAgICBbYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XG4gICAgICBtYXJnaW5MZWZ0OiAnNCUnLFxuICAgIH0sXG4gIH0sXG4gIGFycm93OiB7XG4gICAgZGlzcGxheTogJ25vbmUnLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogJzUwJScsXG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtNTAlKScsXG4gICAgW2JyZWFrcG9pbnRzLnVwKCdzbScpXToge1xuICAgICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgICB9LFxuICB9LFxuICBhcnJvd0xlZnQ6IHtcbiAgICBsZWZ0OiAwLFxuICAgIFticmVha3BvaW50cy51cCgnbGcnKV06IHtcbiAgICAgIGxlZnQ6IC02NCxcbiAgICB9LFxuICB9LFxuICBhcnJvd1JpZ2h0OiB7XG4gICAgcmlnaHQ6IDAsXG4gICAgW2JyZWFrcG9pbnRzLnVwKCdsZycpXToge1xuICAgICAgcmlnaHQ6IC02NCxcbiAgICB9LFxuICB9LFxuICB0ZXh0OiB7XG4gICAgLy8gc2hhcmVkIHN0eWxlIGZvciB0ZXh0LXRvcCBhbmQgdGV4dC1ib3R0b21cbiAgICBmb250RmFtaWx5OiAnUG9wcGlucywgc2FuLXNlcmlmJyxcbiAgICBmb250V2VpZ2h0OiA5MDAsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgY29sb3I6IHBhbGV0dGUuY29tbW9uLndoaXRlLFxuICAgIHBhZGRpbmc6ICcwIDhweCcsXG4gICAgdHJhbnNmb3JtOiAncm90YXRlWSg0NWRlZyknLFxuICAgIGxpbmVIZWlnaHQ6IDEuMixcbiAgICBbYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XG4gICAgICBwYWRkaW5nOiAnMCAxNnB4JyxcbiAgICB9LFxuICAgIFticmVha3BvaW50cy51cCgnbWQnKV06IHtcbiAgICAgIHBhZGRpbmc6ICcwIDI0cHgnLFxuICAgIH0sXG4gIH0sXG4gIHRpdGxlOiB7XG4gICAgdG9wOiAyMCxcbiAgICBsZWZ0OiAnMjAlJyxcbiAgICBoZWlnaHQ6ICc0MCUnLFxuICAgIGZvbnRTaXplOiA0MCxcbiAgICB6SW5kZXg6IDEsXG4gICAgYmFja2dyb3VuZDogJ2xpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDI1NSwyNTUsMjU1LDApIDAlLCAjOWM5YzljIDEwMCUpJyxcbiAgICBbYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XG4gICAgICB0b3A6IDQwLFxuICAgICAgZm9udFNpemU6IDcyLFxuICAgIH0sXG4gICAgW2JyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xuICAgICAgdG9wOiA1MixcbiAgICAgIGZvbnRTaXplOiA3MixcbiAgICB9LFxuICB9LFxuICBzdWJ0aXRsZToge1xuICAgIHRvcDogNjAsXG4gICAgbGVmdDogJzAlJyxcbiAgICBoZWlnaHQ6ICc1MiUnLFxuICAgIGZvbnRTaXplOiA1NixcbiAgICB6SW5kZXg6IDIsXG4gICAgYmFja2dyb3VuZDogJ2xpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDI1NSwyNTUsMjU1LDApIDAlLCAjODg4ODg4IDEwMCUpJyxcbiAgICBbYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XG4gICAgICB0b3A6IDExMixcbiAgICAgIGxlZnQ6ICc2JScsXG4gICAgICBmb250U2l6ZTogOTYsXG4gICAgfSxcbiAgICBbYnJlYWtwb2ludHMudXAoJ21kJyldOiB7XG4gICAgICB0b3A6IDEyOCxcbiAgICAgIGZvbnRTaXplOiAxMDQsXG4gICAgfSxcbiAgfSxcbiAgaW5kaWNhdG9yQ29udGFpbmVyOiB7XG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgfSxcbn0pKTtcblxuY29uc3QgUGFyYWxsYXhDYXJvdXNlbCA9ICgpID0+IHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCBhcnJvd1N0eWxlcyA9IHVzZUFycm93RGFya0J1dHRvblN0eWxlcygpO1xuICBjb25zdCBjcmVhdGVTdHlsZSA9IChzbGlkZUluZGV4LCBmaW5lSW5kZXgpID0+IHtcbiAgICBjb25zdCBkaWZmID0gc2xpZGVJbmRleCAtIGZpbmVJbmRleDtcbiAgICBpZiAoTWF0aC5hYnMoZGlmZikgPiAxKSByZXR1cm4ge307XG4gICAgcmV0dXJuIHtcbiAgICAgIHRyYW5zZm9ybTogYHJvdGF0ZVkoJHsoLWRpZmYgKyAxKSAqIDQ1fWRlZylgLFxuICAgIH07XG4gIH07XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9wcm9wLXR5cGVzXG4gIGNvbnN0IHJlbmRlckVsZW1lbnRzID0gKHsgaW5kZXgsIG9uQ2hhbmdlSW5kZXggfSkgPT4gKFxuICAgIDw+XG4gICAgICA8QnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT17Y3goY2xhc3Nlcy5hcnJvdywgY2xhc3Nlcy5hcnJvd0xlZnQpfVxuICAgICAgICBjbGFzc2VzPXthcnJvd1N0eWxlc31cbiAgICAgICAgZGlzYWJsZWQ9e2luZGV4ID09PSAwfVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNoYW5nZUluZGV4KGluZGV4IC0gMSl9XG4gICAgICA+XG4gICAgICAgIDxLZXlib2FyZEFycm93TGVmdCAvPlxuICAgICAgPC9CdXR0b24+XG4gICAgICA8QnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT17Y3goY2xhc3Nlcy5hcnJvdywgY2xhc3Nlcy5hcnJvd1JpZ2h0KX1cbiAgICAgICAgY2xhc3Nlcz17YXJyb3dTdHlsZXN9XG4gICAgICAgIGRpc2FibGVkPXtpbmRleCA9PT0gZGF0YS5sZW5ndGggLSAxfVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNoYW5nZUluZGV4KGluZGV4ICsgMSl9XG4gICAgICA+XG4gICAgICAgIDxLZXlib2FyZEFycm93UmlnaHQgLz5cbiAgICAgIDwvQnV0dG9uPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW5kaWNhdG9yQ29udGFpbmVyfT5cbiAgICAgICAge2RhdGEubWFwKCh7IGlkIH0sIGkpID0+IChcbiAgICAgICAgICA8RG90SW5kaWNhdG9yXG4gICAgICAgICAgICBrZXk9e2lkfVxuICAgICAgICAgICAgYWN0aXZlPXtpID09PSBpbmRleH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2hhbmdlSW5kZXgoaSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbiAgY29uc3QgcmVuZGVyQ2hpbGRyZW4gPSAoeyBpbmplY3RTdHlsZSwgZmluZUluZGV4IH0pID0+XG4gICAgZGF0YS5tYXAoKHsgaWQsIHRpdGxlLCBzdWJ0aXRsZSwgaW1hZ2UgfSwgaSkgPT4gKFxuICAgICAgPGRpdiBrZXk9e2lkfSBjbGFzc05hbWU9e2NsYXNzZXMuc2xpZGV9PlxuICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgIG5vV3JhcFxuICAgICAgICAgIGNsYXNzTmFtZT17Y3goY2xhc3Nlcy50ZXh0LCBjbGFzc2VzLnRpdGxlKX1cbiAgICAgICAgICBzdHlsZT17eyAuLi5pbmplY3RTdHlsZShpLCA2MCksIC4uLmNyZWF0ZVN0eWxlKGksIGZpbmVJbmRleCkgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgIG5vV3JhcFxuICAgICAgICAgIGNsYXNzTmFtZT17Y3goY2xhc3Nlcy50ZXh0LCBjbGFzc2VzLnN1YnRpdGxlKX1cbiAgICAgICAgICBzdHlsZT17eyAuLi5pbmplY3RTdHlsZShpLCA0MCksIC4uLmNyZWF0ZVN0eWxlKGksIGZpbmVJbmRleCkgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHtzdWJ0aXRsZX1cbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZUNvbnRhaW5lcn0+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2V9IHNyYz17aW1hZ2V9IGFsdD17J3NsaWRlJ30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgIDxQYXJhbGxheFNsaWRlIHJlbmRlckVsZW1lbnRzPXtyZW5kZXJFbGVtZW50c30+XG4gICAgICAgIHtyZW5kZXJDaGlsZHJlbn1cbiAgICAgIDwvUGFyYWxsYXhTbGlkZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhcmFsbGF4Q2Fyb3VzZWw7IiwiaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSdcblxuZnVuY3Rpb24gQ29weXJpZ2h0KCkge1xuICAgIHJldHVybiAoXG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHRTZWNvbmRhcnlcIiBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICB7J0NvcHlyaWdodCDCqSAnfVxuICAgICAgXG4gICAgICAgICAgUksgRW5naW5lZXJpbmcgQ29ycG9yYXRpb257JyAnfVxuICAgICAgICB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfVxuICAgICAgICB7Jy4nfVxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICk7XG4gIH1cblxuY29uc3QgRm9vdGVyID0gKCkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS0xMDAgaC0zMlwiPlxuICAgICAgPGJyLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdtdC04Jz5cbiAgICAgIDxDb3B5cmlnaHQvPlxuICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyOyIsImltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nXG5pbXBvcnQgeyBQYXBlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCBNZXNzYWdlT3V0bGluZWRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9NZXNzYWdlT3V0bGluZWQnO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInO1xuaW1wb3J0IExhbmRsaW5lRXh0ZW5kZWRJY29uIGZyb20gJy4uL2NvbXBvbmVudHMvRmFiSWNvbnMvTGFuZGxpbmUnO1xuaW1wb3J0IE1haWxFeHRlbmRlZEljb24gZnJvbSAnLi4vY29tcG9uZW50cy9GYWJJY29ucy9NYWlsJztcbmltcG9ydCBQaG9uZUV4dGVuZGVkSWNvbiBmcm9tICcuLi9jb21wb25lbnRzL0ZhYkljb25zL1Bob25lJztcblxuY29uc3QgR29vZ2xlRm9ybSA9ICgpID0+IChcbiAgICA8ZGl2PlxuICAgICAgICA8Zm9ybSBhY3Rpb249XCJodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9mb3Jtcy91LzAvZC9lLzFGQUlwUUxTY1FxWkNITXAwQ3c2eHYzQ3ZBQWxRWmY3Yk1tZm5LejRxQVhTaDJfZVJhSW5Tamd3L2Zvcm1SZXNwb25zZVwiIG1ldGhvZD1cInBvc3RcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21kOm14LTEyIG10LTQgdGV4dC1pbmRpZ28tNDAwIHRleHQtY2VudGVyIHRleHQtYm9sZCB0ZXh0LTR4bCBmb250LW1lZGl1bSc+IFxuICAgICBNZXNzYWdlIFVzPC9kaXY+XG4gICAgIDxwIGNsYXNzTmFtZT0nbXgtNCBtYi00IG1kOm14LTI0IHRleHQtY2VudGVyIHRleHQtZ3JheS02MDAgdGV4dC1sZyBtZDp0ZXh0LWJhc2UgZm9udC10aGluJz5cbiAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIExhdWRhbnRpdW0gdG90YW0gb21uaXMgZGlzdGluY3RpbyBiZWF0YWUgc3VudCBhbGlxdWFtIGV4cGxpY2FibywgYXNwZXJpb3JlcyBwZXJzcGljaWF0aXMgcXVvcyBkZWxlbml0aSByZWljaWVuZGlzIHNpdCBtb2xlc3RpYXMgYXJjaGl0ZWN0byBtYWlvcmVzIHZpdGFlIGFjY3VzYW11cy4gSWxsdW0sIHF1b2Qgdm9sdXB0YXRlbS48L3A+ICAgICBcbiAgICAgICAgICAgPENvbnRhaW5lciBjb21wb25lbnQ9XCJtYWluXCIgbWF4V2lkdGg9XCJ4c1wiPiAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYi00Jz48VGV4dEZpZWxkIG5hbWU9XCJlbnRyeS4xMjA0NTY3MjU5XCIgbGFiZWw9XCJFLU1haWxcIiB0eXBlPSdlbWFpbCcgcmVxdWlyZWQgZnVsbFdpZHRoIHZhcmlhbnQ9XCJvdXRsaW5lZFwiLz48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWItNCc+PFRleHRGaWVsZCB0eXBlPSd0ZXh0JyBuYW1lPVwiZW50cnkuNTcwNjc1NzUwXCIgbGFiZWw9J05hbWUnIHJlcXVpcmVkIGZ1bGxXaWR0aCB2YXJpYW50PVwib3V0bGluZWRcIi8+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21iLTQnPjxUZXh0RmllbGQgbmFtZT1cImVudHJ5LjE3NTMyMzE0NjJcIiBsYWJlbD0nTWVzc2FnZScgbXVsdGlsaW5lIHJvd3M9ezR9IHJlcXVpcmVkIGZ1bGxXaWR0aCB2YXJpYW50PVwib3V0bGluZWRcIi8+PC9kaXY+IFxuICAgICAgICAgIDxkaXY+PEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZWRcIiBjb2xvcj1cInByaW1hcnlcIiB0eXBlPVwic3VibWl0XCIgZnVsbFdpZHRoPlN1Ym1pdDwvQnV0dG9uPjwvZGl2PlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBHb29nbGVGb3JtOyIsImltcG9ydCBBdmF0YXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyJztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgICBhdmF0YXI6IHtcbiAgICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXG4gICAgfVxuICB9KSk7XG5cbiAgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2lyY2xlSWNvbihwcm9wcykge1xuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxBdmF0YXIgY2xhc3NOYW1lPXtjbGFzc2VzLmF2YXRhcn0+XG4gICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICA8L0F2YXRhcj5cbiAgICApO1xuICB9XG4gICIsImZ1bmN0aW9uIEhvbWVJbWFnZSgpIHtcbiAgICBcbiAgICByZXR1cm4gPGltZyBzcmM9XCIvaG9tZS5qcGVnXCIgYWx0PVwiaG9tZSBpbWFnZVwiIC8+XG4gIH1cbiAgXG4gIGV4cG9ydCBkZWZhdWx0IEhvbWVJbWFnZSIsImltcG9ydCB7IFBhcmFsbGF4IH0gZnJvbSAncmVhY3QtcGFyYWxsYXgnO1xuaW1wb3J0IHsgRm9udFJvYm90byB9IGZyb20gJy4vcG9ydGZvbGlvLnN0eWxlcyc7XG5pbXBvcnQgRmFkZSBmcm9tICdyZWFjdC1yZXZlYWwvRmFkZSc7XG5cbiBcbmNvbnN0IElhcmFsbGF4ID0gKHtpbWFnZVVybH0pID0+IChcbiAgICA8ZGl2PlxuICAgICAgICB7LyogLS0tLS1iYXNpYyBjb25maWctLS0tLSovfVxuICAgICAgICA8UGFyYWxsYXggYmx1cj17NX0gYmdJbWFnZT17aW1hZ2VVcmx9IHN0cmVuZ3RoPXs1MDB9PlxuICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6IDM4MCB9fSBjbGFzc05hbWU9J2JvcmRlci0yICBib3JkZXItd2hpdGUnID5cbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICA8cCBjbGFzc05hbWU9J21kOi1tYi00IG10LTggbWQ6bXQtMTYgdGV4dC13aGl0ZSB0ZXh0LTR4bCBtZDp0ZXh0LTd4bCc+V2VsY29tZSBUbyA8L3A+XG4gICAgPEZhZGUgYm90dG9tIGRlbGF5PXsxMTAwfT4gIDxwIGNsYXNzTmFtZT0ndGV4dC13aGl0ZSB0ZXh0LTZ4bCBtZDp0ZXh0LTd4bCBmb250LWJvbGQgbWItNCAnPlJLIEVuZ2luZWVyaW5nIENvcnBvcmF0aW9uPC9wPiAgICAgPC9GYWRlPiAgICAgICBcbiAgICAgICAgICA8cCBjbGFzc05hbWU9J214LTQgbWItNCBtZDpteC02NCB0ZXh0LXdoaXRlIG1kOnRleHQtbGcgZm9udC10aGluJz5cbiAgICAgICAgICAgIFJLIGVuZ2luZWVyaW5nIENvcnBvcmF0aW9uIGlzIGEgbGVhZGluZyBicmlnaHQgYmFyIG1hbnVmYWN0dXJpbmcgY29tcGFueSBjYXRlcmluZyB0byB0aGUgbmVlZHMgb2YgaW5udW1lcmFibGUgYXV0b21vdGl2ZSBhbmNpbGxhcnkgdW5pdHMgaW4gTm9ydGhlcm4gSW5kaWEgZm9yIG5lYXJseSBmaXZlIGRlY2FkZXMgLCB0aGUgY29tcGFueeKAmXMgbmFtZSBpcyBzeW5vbnltb3VzIHdpdGggcXVhbGl0eSBhbmQgcHJvbXB0IGRlbGl2ZXJ5IG9mIGdvb2RzICBcbiAgICAgICAgICAgPC9wPiAgIFxuICAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvUGFyYWxsYXg+XG4gICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgICAgIFxuZXhwb3J0IGRlZmF1bHQgSWFyYWxsYXggICAgICAgICIsImltcG9ydCB7IFBhcmFsbGF4IH0gZnJvbSAncmVhY3QtcGFyYWxsYXgnO1xuaW1wb3J0IHsgRm9udFJvYm90byB9IGZyb20gJy4vcG9ydGZvbGlvLnN0eWxlcyc7XG5cbiBcbmNvbnN0IElhcmFsbGF4MiA9ICh7aW1hZ2VVcmx9KSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J21iLTgnPlxuICAgICAgICB7LyogLS0tLS1iYXNpYyBjb25maWctLS0tLSovfVxuICAgICAgICA8UGFyYWxsYXggYmx1cj17eyBtaW46IDEsIG1heDogNSB9fSBiZ0ltYWdlPXtpbWFnZVVybH0gc3RyZW5ndGg9ezUwMH0+XG4gICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogJzEwMCUnIH19ID5cbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbXQtOCB0ZXh0LXdoaXRlIHRleHQtNnhsIG1kOnRleHQtN3hsIGZvbnQtYm9sZCc+T1VSIEFOQ0lMTEFSSUVTPC9wPiAgICAgICAgICAgIFxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbXgtNCBtYi00IG1kOm14LTY0IHRleHQtd2hpdGUgbWQ6dGV4dC1sZyAnPlxuICAgICAgICAgICAgICBMb3JlbSBpcHN1bSwgZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRXhwZWRpdGEgc2FlcGUgbmVjZXNzaXRhdGlidXMgYWxpcXVhbSBjb3JydXB0aSBvZGlvIGVvcyBpbiBub2JpcyBwcmFlc2VudGl1bSBibGFuZGl0aWlzIG1vbGVzdGlhZSB0b3RhbSBzaW50IGl0YXF1ZSwgaXVyZSBhIGRvbG9yPyBWZWwgZnVnaWF0IHZlbGl0IG1vbGVzdGlhZS5cbiAgICAgICAgICAgIDwvcD4gICBcbiAgICAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L1BhcmFsbGF4PlxuICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICAgICBcbmV4cG9ydCBkZWZhdWx0IElhcmFsbGF4MiAgICAgICAgIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IFByZXZpZXdDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuXG5kaXNwbGF5Om5vbmU7XG5cbkBtZWRpYSAobWluLXdpZHRoOjc2OHB4KSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xuICBncmlkLWdhcDogNXB4OyAgXG59XG5gO1xuXG5leHBvcnQgY29uc3QgTW9iaWxlT25seSA9IHN0eWxlZC5kaXZgXG5cbkBtZWRpYSAobWluLXdpZHRoOjc2OHB4KSB7XG4gIGRpc3BsYXk6bm9uZTsgIFxufVxuYDtcblxuZXhwb3J0IGNvbnN0IEZvbnRDaGVsc2VhID0gc3R5bGVkLmRpdmBcblxuZm9udC1mYW1pbHk6ICdDaGVsc2VhIE1hcmtldCcsIGN1cnNpdmU7XG5cbmA7XG5cbmV4cG9ydCBjb25zdCBEZXNrdG9wID0gc3R5bGVkLmRpdmBcblxuZGlzcGxheTpub25lO1xuXG5AbWVkaWEgKG1pbi13aWR0aDo3NjhweCkge1xuICBkaXNwbGF5OmlubGluZS1ibG9jazsgIFxufVxuYDtcblxuZXhwb3J0IGNvbnN0IEZvbnRSb2JvdG8gPSBzdHlsZWQuZGl2YFxuXG5mb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG5cbmA7XG5cbmV4cG9ydCBjb25zdCBIb3Jpem9udGFsTGlzdCA9IHN0eWxlZC5kaXZgXG5cbm92ZXJmbG93OiBhdXRvO1xud2hpdGUtc3BhY2U6IG5vd3JhcDtcblxuYDtcblxuXG5cbiIsImltcG9ydCBIb21lSW1hZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9pbWFnZXMvaG9tZS9ob21laW1hZ2UnO1xuaW1wb3J0IEN1c3RvbWVycyBmcm9tICcuLi9jb21wb25lbnRzL0N1c3RvbWVycy9DdXN0b21lcnMnO1xuaW1wb3J0IFByb2R1Y3REZXRhaWwgZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9kdWN0L1Byb2R1Y3QnO1xuaW1wb3J0IEdvb2dsZUZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9nb29nbGVmb3Jtcyc7XG5pbXBvcnQgQWRkcmVzc0xpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9BZGRyZXNzL0FkZHJlc3NMYXlvdXQnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3Rlci9Gb290ZXInO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0Z1dHVyZS9IZWFkZXInO1xuaW1wb3J0IExlYWRlckxpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9MZWFkZXJzL0xlYWRlckxheW91dCc7XG5pbXBvcnQgUHJvZHVjdExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9kdWN0L1Byb2R1Y3RMaXN0JztcblxuaW1wb3J0IHsgRm9udENoZWxzZWEgfSBmcm9tICcuLi9jb21wb25lbnRzL3BvcnRmb2xpby5zdHlsZXMnO1xuaW1wb3J0IElhcmFsbGF4IGZyb20gJy4uL2NvbXBvbmVudHMvcGFyYWxsYXgnO1xuaW1wb3J0IENvdW50ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Db3VudGVyL2NvdW50ZXInO1xuaW1wb3J0IFBhcmFsbGF4Q2Fyb3VzZWwgZnJvbSAnLi4vY29tcG9uZW50cy9TbGlkZVNob3cvRGVtbyc7XG5cbmNvbnN0IEluZGV4ID0gKCkgPT4gKFxuXG4gIDxkaXY+ICAgIFxuICAgICA8SGVhZGVyLz5cbiAgICAgey8qIDxkaXYgY2xhc3NOYW1lPSdtZDpmbGV4IGJnLWdyYXktMTAwJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21kOm14LTQgbWQ6bXQtMTYgbGc6bXQtMjQgdGV4dC1jZW50ZXIgbWQ6dy0xLzInPlxuICAgICAgICAgIDxici8+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtaW5kaWdvLTMwMCB0ZXh0LTR4bCBtZDp0ZXh0LTZ4bCBmb250LW1lZGl1bSc+V2VsY29tZSBUbyA8L3A+XG4gICAgICAgPEZvbnRDaGVsc2VhPiA8cCBjbGFzc05hbWU9J3RleHQtaW5kaWdvLTUwMCB0ZXh0LTV4bCBmb250LW1lZGl1bSBtYi00ICc+UksgRW5naW5lZXJpbmcgQ29ycG9yYXRpb248L3A+IDwvRm9udENoZWxzZWE+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9J21iLTQgbXgtNCB0ZXh0LWdyYXktNjAwIHRleHQtbGcgbWQ6dGV4dC1iYXNlIGZvbnQtdGhpbic+XG4gICAgICAgICAgICBSSyBlbmdpbmVlcmluZyBDb3Jwb3JhdGlvbiBpcyBhIGxlYWRpbmcgYnJpZ2h0IGJhciBtYW51ZmFjdHVyaW5nIGNvbXBhbnkgY2F0ZXJpbmcgdG8gdGhlIG5lZWRzIG9mIGlubnVtZXJhYmxlIGF1dG9tb3RpdmUgYW5jaWxsYXJ5IHVuaXRzIGluIE5vcnRoZXJuIEluZGlhIGZvciBuZWFybHkgZml2ZSBkZWNhZGVzICwgdGhlIGNvbXBhbnnigJlzIG5hbWUgaXMgc3lub255bW91cyB3aXRoIHF1YWxpdHkgYW5kIHByb21wdCBkZWxpdmVyeSBvZiBnb29kcyAgXG4gICAgICAgICAgIDwvcD4gICBcbiAgICAgICAgICAgICA8L2Rpdj4gICAgXG4gICAgICAgICAgICAgICAgey8qIHBob3RvIG9waW1pemF0aW9uICovfVxuICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPSctbWItNCBtZDptYi0yNCBteC1hdXRvIG1kOm14LTEyIG10LTggbWQ6dy0yLzUgbWQ6bXQtMTYnPlxuICAgICAgICAgICA8SG9tZUltYWdlLz5cbiAgICAgICAgIDwvZGl2PiAgXG4gICAgICAgICA8L2Rpdj4gKi99XG5cbiAgICAgICAgIDxJYXJhbGxheCBpbWFnZVVybD1cImh0dHBzOi8vd3d3LmJyb3RoZXJlYXJ0aC5jb20vZW4vdGVjaC9pbWFnZXMvcGljLXN1Yi1lY29mYWN0b3J5LmpwZ1wiLz5cbiAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT0nbXQtNCBtZDpteC0zMic+XG4gICAgICAgICA8UGFyYWxsYXhDYXJvdXNlbC8+XG4gICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgPGRpdj4gICAgICAgICBcbiAgICAgICAgICA8UHJvZHVjdERldGFpbC8+XG4gICAgICAgICAgIDxDdXN0b21lcnMvPlxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWItNCBteC00IG1kOm14LTEyIHJvdW5kZWQtbWQgYmctd2hpdGUgc2hhZG93LW1kJz5cbiAgICAgICAgICAgIDxHb29nbGVGb3JtLz5cbiAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDxici8+XG4gICAgICAgICAgIDxBZGRyZXNzTGlzdC8+XG4gICAgICAgICAgIDxGb290ZXIvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuIFxuKVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRBY3Rpb25BcmVhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRBY3Rpb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRNZWRpYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9DbGlja0F3YXlMaXN0ZW5lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Db2xsYXBzZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRHJhd2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0ZhYlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1JY29uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0U3ViaGVhZGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFiXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlQm9keVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNlbGxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDb250YWluZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVIZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1RhYnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0FjY291bnRDaXJjbGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0FjY291bnRDaXJjbGVPdXRsaW5lZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQWNjb3VudFRyZWVPdXRsaW5lZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQXBhcnRtZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9CdXNpbmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2FyZFRyYXZlbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRGlyZWN0aW9uc091dGxpbmVkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9Eb25lQWxsT3V0bGluZWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0RyYWZ0c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTGVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTW9yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvSG9tZU91dGxpbmVkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9LZXlib2FyZEFycm93TGVmdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvS2V5Ym9hcmRBcnJvd1JpZ2h0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9MaWJyYXJ5QWRkQ2hlY2tPdXRsaW5lZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTG9jYWxTaGlwcGluZ091dGxpbmVkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9NYWlsT3V0bGluZU91dGxpbmVkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9NZW51XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9NZXNzYWdlT3V0bGluZWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL01vdmVUb0luYm94XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9QZXJtUGhvbmVNc2dPdXRsaW5lZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvUGhvbmVPdXRsaW5lZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2VuZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU3RhckJvcmRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvVGh1bWJVcE91dGxpbmVkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWktdHJlYXN1cnkvY29tcG9uZW50cy9pbmRpY2F0b3IvZG90XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWktdHJlYXN1cnkvY29tcG9uZW50cy9zbGlkZS9wYXJhbGxheFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpLXRyZWFzdXJ5L3N0eWxlcy9idXR0b24vYXJyb3dEYXJrXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsc3hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcGFyYWxsYXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmV2ZWFsL0ZhZGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc3dpcGVhYmxlLXZpZXdzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXRyYW5zaXRpb24tZ3JvdXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==