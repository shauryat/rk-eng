webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _SideDrawer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./SideDrawer */ "./components/SideDrawer.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");







var _jsxFileName = "/Users/dev/Desktop/Portfolio/components/header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }









var Header = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Header, _Component);

  var _super = _createSuper(Header);

  function Header() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      drawerOpen: false,
      headerShow: false
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleScroll", function () {
      if (window.scrollY > 0) {
        _this.setState({
          headerShow: true
        });
      } else {
        _this.setState({
          headerShow: false
        });
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "toggleDrawer", function (value) {
      _this.setState({
        drawerOpen: value
      });
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx("div", {
        className: "jsx-46384293",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 13
        }
      }, "                 ", __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_9__["default"], {
        position: "fixed",
        style: {
          backgroundColor: this.state.headerShow ? '#363636' : 'transparent',
          boxShadow: 'none',
          padding: '10px 0px'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 35
        }
      }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "jsx-46384293" + " " + 'header_logo',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "jsx-46384293" + " " + 'header_logo_venue text-teal-500',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 16
        }
      }, " Shaurya "), __jsx("div", {
        className: "jsx-46384293" + " " + 'text-teal-500',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 16
        }
      }, "Tuli ")), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
        color: "inherit",
        "aria-label": "Menu",
        onClick: function onClick() {
          return _this2.toggleDrawer(true);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 16
        }
      }, __jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_12___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 18
        }
      })), __jsx(_SideDrawer__WEBPACK_IMPORTED_MODULE_13__["default"], {
        open: this.state.drawerOpen,
        onClose: function onClose(value) {
          return _this2.toggleDrawer(value);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 15
        }
      }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "46384293",
        __self: this
      }, "header.jsx-46384293{padding:10px 0px;-webkit-transition:all 300ms ease-in;transition:all 300ms ease-in;}header.jsx-46384293 .header_logo.jsx-46384293{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}header.jsx-46384293 .header_logo_venue.jsx-46384293{font-size:40px;color:white;}header.jsx-46384293 .header_logo_title.jsx-46384293{text-transform:uppercase;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXYvRGVza3RvcC9Qb3J0Zm9saW8vY29tcG9uZW50cy9oZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUVpQixBQUdxQixBQUtKLEFBSUcsQUFLVSxlQUpiLEVBVGlCLFFBY2pDLEVBSkEsNENBSkEsWUFMQSIsImZpbGUiOiIvVXNlcnMvZGV2L0Rlc2t0b3AvUG9ydGZvbGlvL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IEFwcEJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXInO1xuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcbmltcG9ydCBNZW51SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudSc7XG5pbXBvcnQgU2lkZURyYXdlciBmcm9tICcuL1NpZGVEcmF3ZXInO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5cblxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgICAgIHN0YXRlID0geyBcbiAgICAgICAgICAgZHJhd2VyT3BlbjogZmFsc2UsXG4gICAgICAgICAgIGhlYWRlclNob3c6IGZhbHNlXG4gICAgICAgICAgICAgfVxuXG4gICAgICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsdGhpcy5oYW5kbGVTY3JvbGwpOyBcbiAgICAgICAgICAgICB9XG5cbiAgICBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG5cbmlmKHdpbmRvdy5zY3JvbGxZID4gMCl7XG4gICAgdGhpcy5zZXRTdGF0ZSAoe1xuICAgICAgICBoZWFkZXJTaG93OnRydWVcbiAgICB9KVxufVxuIGVsc2Uge1xuICAgIHRoaXMuc2V0U3RhdGUgKHtcbiAgICAgICAgaGVhZGVyU2hvdzpmYWxzZVxuICAgIH0pXG4gICAgXG4gfVxuICAgIH1cbiAgICBcbiAgICB0b2dnbGVEcmF3ZXIgPSAodmFsdWUpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgZHJhd2VyT3BlbjogdmFsdWVcbiAgICAgICAgfSlcbiAgICB9XG5cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+ICAgICAgICAgICAgICAgICA8QXBwQmFyIFxuICAgICAgICAgICAgcG9zaXRpb249XCJmaXhlZFwiXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5zdGF0ZS5oZWFkZXJTaG93ID8gJyMzNjM2MzYnIDogJ3RyYW5zcGFyZW50JyAsXG4gICAgICAgICAgICAgICAgYm94U2hhZG93Oidub25lJyxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOicxMHB4IDBweCcgfX0+XG4gICAgICAgIDxUb29sYmFyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2hlYWRlcl9sb2dvJz5cbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoZWFkZXJfbG9nb192ZW51ZSB0ZXh0LXRlYWwtNTAwJyA+IFNoYXVyeWEgPC9kaXY+XG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC10ZWFsLTUwMCcgPlR1bGkgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGNvbG9yPSdpbmhlcml0JyBhcmlhLWxhYmVsPSdNZW51JyBvbkNsaWNrPXsoKT0+IHRoaXMudG9nZ2xlRHJhd2VyKHRydWUpfT4gXG4gICAgICAgICAgICAgICAgIDxNZW51SWNvbi8+XG4gICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgICA8U2lkZURyYXdlclxuICAgICAgICAgICAgICAgICAgIG9wZW49e3RoaXMuc3RhdGUuZHJhd2VyT3Blbn1cbiAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9eyh2YWx1ZSk9PiB0aGlzLnRvZ2dsZURyYXdlcih2YWx1ZSl9Lz5cbiAgICAgICA8L1Rvb2xiYXI+XG4gICAgICAgICAgICA8L0FwcEJhcj4gICBcblxuICAgIDxzdHlsZSBqc3g+IHtgXG4gICAgaGVhZGVyIHtcbiAgICBwYWRkaW5nOjEwcHggMHB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlLWluO1xufVxuXG5oZWFkZXIgLmhlYWRlcl9sb2dvIHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgXG59XG5oZWFkZXIgLmhlYWRlcl9sb2dvX3ZlbnVlIHtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG5oZWFkZXIgLmhlYWRlcl9sb2dvX3RpdGxlIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4gICBgfVxuXG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyJdfQ== */\n/*@ sourceURL=/Users/dev/Desktop/Portfolio/components/header.js */"));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.f62aeda4edebd75a03c2.hot-update.js.map