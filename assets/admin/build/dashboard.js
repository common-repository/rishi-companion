/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/admin/dashboard.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/admin/ContentHooks.js":
/*!**************************************!*\
  !*** ./assets/admin/ContentHooks.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Extensions_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Extensions.js */ "./assets/admin/components/Extensions.js");
/* harmony import */ var _components_Usefulplugin_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Usefulplugin.js */ "./assets/admin/components/Usefulplugin.js");
/* harmony import */ var _components_Changelog_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Changelog.js */ "./assets/admin/components/Changelog.js");





function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, result);
  };
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}







var ContentHooks = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default()(ContentHooks, _Component);

  var _super = _createSuper(ContentHooks);

  function ContentHooks(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ContentHooks);

    _this = _super.call(this);
    Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__["addFilter"])('rishi_dashboard_components', 'ContentHooks', function (path) {
      return /*#__PURE__*/React.createElement(React.Fragment, null, "extensions" === path ? /*#__PURE__*/React.createElement(_components_Extensions_js__WEBPACK_IMPORTED_MODULE_6__["default"], null) : '', "usefulplugin" === path ? /*#__PURE__*/React.createElement(_components_Usefulplugin_js__WEBPACK_IMPORTED_MODULE_7__["default"], null) : '', "changelog" === path ? /*#__PURE__*/React.createElement(_components_Changelog_js__WEBPACK_IMPORTED_MODULE_8__["default"], null) : '');
    });
    return _this;
  }

  return ContentHooks;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["Component"]);

new ContentHooks();

/***/ }),

/***/ "./assets/admin/NavbarHook.js":
/*!************************************!*\
  !*** ./assets/admin/NavbarHook.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);





function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, result);
  };
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}




var RishiCompanionTabs = [{
  id: 'extensions',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])("Extensions", 'rishi-companion')
}, {
  id: 'usefulplugin',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])("Useful Plugins", 'rishi-companion')
}, {
  id: 'changelog',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])("Changelog", 'rishi-companion')
}];

var NavbarHooks = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default()(NavbarHooks, _Component);

  var _super = _createSuper(NavbarHooks);

  function NavbarHooks(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, NavbarHooks);

    _this = _super.call(this);
    Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__["addFilter"])('rishi_dashboard_tabs', 'NavbarHooks', function (tabs) {
      RishiCompanionTabs && RishiCompanionTabs.map(function (tab, index) {
        tabs && tabs.push({
          id: tab.id,
          label: tab.label
        });
      });
      return tabs;
    });
    return _this;
  }

  return NavbarHooks;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["Component"]);

new NavbarHooks();

/***/ }),

/***/ "./assets/admin/components/Changelog.js":
/*!**********************************************!*\
  !*** ./assets/admin/components/Changelog.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_toArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/toArray */ "./node_modules/@babel/runtime/helpers/toArray.js");
/* harmony import */ var _babel_runtime_helpers_toArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/date */ "@wordpress/date");
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_date__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__);







 //Import __() from wp.i18n

var parseChangelog = function parseChangelog(changelog) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      hasBetas = _ref.hasBetas;

  return changelog.replace(/\r/g, '').replace(/(\r\n|\r|\n){3,}/g, '$1\n\n').split('\n\n').map(function (versionDescriptor) {
    var _versionDescriptor$sp = versionDescriptor.split(/\r?\n/)[0].split(':'),
        _versionDescriptor$sp2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_versionDescriptor$sp, 2),
        version = _versionDescriptor$sp2[0],
        date = _versionDescriptor$sp2[1];

    return {
      version: version,
      date: Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_5__["dateI18n"])('F j, Y', new Date(date.trim())),
      descriptor: versionDescriptor
    };
  }).filter(function (_ref2) {
    var version = _ref2.version;
    return hasBetas ? true : version.indexOf('beta') === -1;
  }).filter(function (_ref3) {
    var version = _ref3.version;
    return hasBetas ? true : version.split('.').length === 3;
  });
};

var SingleVersion = function SingleVersion(_ref4) {
  var versionDescriptor = _ref4.versionDescriptor;

  var _versionDescriptor$de = versionDescriptor.descriptor.split(/\r?\n/),
      _versionDescriptor$de2 = _babel_runtime_helpers_toArray__WEBPACK_IMPORTED_MODULE_2___default()(_versionDescriptor$de),
      _ = _versionDescriptor$de2[0],
      allReleaseChanges = _versionDescriptor$de2.slice(1);

  return /*#__PURE__*/React.createElement("div", {
    className: "main--details"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rishi--versions"
  }, /*#__PURE__*/React.createElement("div", {
    className: "version--title"
  }, /*#__PURE__*/React.createElement("h5", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["sprintf"])( // translators: placeholder here means the actual version.
  Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Version: %s', 'rishi-companion'), versionDescriptor.version))), /*#__PURE__*/React.createElement("div", {
    className: "released-date"
  }, /*#__PURE__*/React.createElement("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["sprintf"])( // translators: placeholder here means the actual date.
  Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Released on %s', 'rishi-companion'), versionDescriptor.date)))), /*#__PURE__*/React.createElement("div", {
    className: "details",
    dangerouslySetInnerHTML: {
      __html: "<ul class=\"text-wrap\"><li>\n\n                        ".concat(allReleaseChanges.join('\n').trim().split('\n').map(function (c) {
        return c.replace(/^-\s/, '');
      }).map(function (c) {
        return c.replace(/`(.*?)`/g, '<code>$1</code>');
      }).join('</li><li>'), "\n                        </li></ul>").replace(/New Feature:/g, "<span class=\"letter light--green\">N</span>").replace(/Fixes:/g, "<span class=\"letter light--yellow\">F</span>").replace(/Update:/g, "<span class=\"letter light--blue\">U</span>")
    }
  }));
};

function Changelog() {
  var _React$createElement;

  var changelog_cache = null;

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["useState"])(!changelog_cache),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState, 2),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];

  var _useState3 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["useState"])(changelog_cache),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState3, 2),
      changelog = _useState4[0],
      setChangelog = _useState4[1];

  var _useState5 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["useState"])(0),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState5, 2),
      currentChangelog = _useState6[0],
      setCurrentChangelog = _useState6[1];

  var _useState7 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["useState"])(1),
      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState7, 2),
      toggleState = _useState8[0],
      setToggleState = _useState8[1];

  var toggleTab = function toggleTab(index) {
    setToggleState(index);
  };

  var hasBetas = false;

  var syncChangelog = /*#__PURE__*/function () {
    var _ref5 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee() {
      var verbose,
          body,
          response,
          _yield$response$json,
          success,
          data,
          _args = arguments;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              verbose = _args.length > 0 && _args[0] !== undefined ? _args[0] : false;

              if (verbose) {
                setIsLoading(true);
              }

              body = new FormData();
              body.append('action', 'rc_get_latest_changelog');
              _context.prev = 4;
              _context.next = 7;
              return fetch(RishiCompanionDashboard.ajaxURL, {
                method: 'POST',
                body: body
              });

            case 7:
              response = _context.sent;

              if (!(response.status === 200)) {
                _context.next = 15;
                break;
              }

              _context.next = 11;
              return response.json();

            case 11:
              _yield$response$json = _context.sent;
              success = _yield$response$json.success;
              data = _yield$response$json.data;

              if (success && data.changelog) {
                setChangelog(data.changelog);
                changelog_cache = data.changelog;
              }

            case 15:
              _context.next = 19;
              break;

            case 17:
              _context.prev = 17;
              _context.t0 = _context["catch"](4);

            case 19:
              setIsLoading(false);

            case 20:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[4, 17]]);
    }));

    return function syncChangelog() {
      return _ref5.apply(this, arguments);
    };
  }();

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    syncChangelog(!changelog_cache);
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "changelog"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "changelog--wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "button--wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rishi--btns"
  }, /*#__PURE__*/React.createElement("button", {
    className: toggleState === 1 ? "btn-tabs active-tabs" : "btn-tabs",
    onClick: function onClick() {
      toggleTab(1);
      setCurrentChangelog(0);
    }
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Theme', 'rishi-companion')), /*#__PURE__*/React.createElement("button", (_React$createElement = {
    className: "tabs"
  }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_React$createElement, "className", toggleState === 2 ? "btn-tabs active-tabs" : "btn-tabs"), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_React$createElement, "onClick", function onClick() {
    toggleTab(2);
    setCurrentChangelog(1);
  }), _React$createElement), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Companion', 'rishi-companion'))), /*#__PURE__*/React.createElement("div", {
    className: "logs"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "letter light--green"
  }, "N"), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('New Feature', 'rishi-companion')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "letter light--yellow"
  }, "F"), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Fixes', 'rishi-companion')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "letter light--blue"
  }, "U"), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Update', 'rishi-companion')))), /*#__PURE__*/React.createElement("div", {
    className: "dr-whats-new-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "content---wrapper content active-content"
  }, changelog && changelog[currentChangelog].changelog ? parseChangelog(changelog[currentChangelog].changelog, {
    hasBetas: hasBetas
  }).map(function (versionDescriptor) {
    return /*#__PURE__*/React.createElement(SingleVersion, {
      key: versionDescriptor.version,
      versionDescriptor: versionDescriptor
    });
  }) : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('No changelog present at the moment.', 'rishi-companion')))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Changelog);

/***/ }),

/***/ "./assets/admin/components/Extensions.js":
/*!***********************************************!*\
  !*** ./assets/admin/components/Extensions.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ui_components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui-components/Button */ "./assets/admin/components/ui-components/Button.js");






var QuestionMark = function QuestionMark() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("g", {
    opacity: "0.4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M7 0C10.866 0 14 3.13401 14 7C14 10.866 10.866 14 7 14C3.13401 14 0 10.866 0 7C0 3.13401 3.13401 0 7 0ZM6.48612 9.33333C6.03914 9.33333 5.66169 9.67495 5.66169 10.1615C5.66169 10.648 6.03914 11 6.48612 11C6.94304 11 7.33043 10.648 7.33043 10.1615C7.33043 9.67495 6.94304 9.33333 6.48612 9.33333ZM7.01498 3C5.6743 3 4.62255 3.80157 4.50476 5.27386L4.50039 5.3356C4.49341 5.44915 4.57991 5.54685 4.6936 5.55383L4.70625 5.55422H5.72047C5.84272 5.55422 5.94907 5.47352 5.98312 5.35824L5.98894 5.33473C6.09539 4.80722 6.54444 4.50602 7.00292 4.50602C7.56989 4.50602 7.98004 4.83133 7.98004 5.42169C7.98004 5.74699 7.78703 6.09639 7.35275 6.27711L6.91848 6.44578C5.91723 6.85542 5.68803 7.45783 5.78454 8.38554C5.78454 8.51862 5.89255 8.62651 6.0258 8.62651H6.84578C6.96688 8.62651 7.06803 8.5374 7.08515 8.41993L7.08736 8.39759C7.08736 7.90361 7.41307 7.78313 7.87147 7.62651C8.80033 7.3012 9.5 6.51807 9.5 5.3494C9.5 3.90361 8.4505 3 7.01498 3Z",
    fill: "#060F1A",
    "fill-opacity": "0.8"
  })));
}; // const Botton = (props) => {
//     let className = props.className // this will be the className sent from <Button>
//     return
//     <botton className={className}></botton>
// }


var Extensions = function Extensions(props) {
  var _React$createElement;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(1),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      toggleState = _useState2[0],
      setToggleState = _useState2[1];

  var toggleTab = function toggleTab(index) {
    setToggleState(index);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "extension--wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "content--wrapper--grid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "button--wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    className: toggleState === 1 ? "btn-tabs active-tabs" : "btn-tabs",
    onClick: function onClick() {
      return toggleTab(1);
    }
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Free Extensions', 'rishi-companion')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", (_React$createElement = {
    className: "tabs"
  }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_React$createElement, "className", toggleState === 2 ? "btn-tabs active-tabs" : "btn-tabs"), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_React$createElement, "onClick", function onClick() {
    return toggleTab(2);
  }), _React$createElement), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Pro Extensions', 'rishi-companion'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
    className: "content--wrapper"
  }, "className", toggleState === 1 ? "content  active-content" : "content"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "rishi--card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "details--wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h4", null, " ", Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Cookies Consent', 'rishi-companion'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "extensions--desc"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, " ", Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Enable this extension in order to comply with the GDPR regulations.', 'rishi-companion')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "rishi--btn--wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ui_components_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    buttonStyle: "btn--secondary"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Deactivate', 'rishi-companion')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ui_components_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    buttonStyle: "btn--secondary"
  }, " ", Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Configure', 'rishi-companion'), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(QuestionMark, null), "   "))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "rishi--card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "details--wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h4", null, " ", Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Widgets', 'rishi-companion'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "extensions--desc"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, " ", Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Popular/Recent Posts, Advertisement, Contact Info, Mailchimp Subscribe, Social Icons and more', 'rishi-companion')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "rishi--btn--wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ui_components_Button__WEBPACK_IMPORTED_MODULE_4__["default"], null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Activate', 'rishi-companion')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(QuestionMark, null), "   ")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: toggleState === 2 ? "content  active-content" : "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", null, "Content 2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptatum qui adipisci."))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Extensions);

/***/ }),

/***/ "./assets/admin/components/Usefulplugin.js":
/*!*************************************************!*\
  !*** ./assets/admin/components/Usefulplugin.js ***!
  \*************************************************/
/*! exports provided: pluginsWithNames, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pluginsWithNames", function() { return pluginsWithNames; });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ui_components_PluginBlock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui-components/PluginBlock */ "./assets/admin/components/ui-components/PluginBlock.js");






var plugins_status_cache = null;
var staticSource = RishiCompanionDashboard.pluginName;
var pluginsWithNames = function pluginsWithNames() {
  return Object.values(staticSource).map(function (plugin, index) {
    plugin['name'] = Object.keys(staticSource)[index];
    return plugin;
  });
};

var RecommendedPlugins = function RecommendedPlugins() {
  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["useState"])(!plugins_status_cache),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];

  var _useState3 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["useState"])(plugins_status_cache || []),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),
      plugins_status = _useState4[0],
      setPluginStatus = _useState4[1];

  var plugins = pluginsWithNames();

  var syncPlugins = /*#__PURE__*/function () {
    var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
      var verbose,
          body,
          response,
          _yield$response$json,
          success,
          data,
          _args = arguments;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              verbose = _args.length > 0 && _args[0] !== undefined ? _args[0] : false;

              if (verbose) {
                setIsLoading(true);
              }

              body = new FormData();
              body.append('action', 'rc_get_plugins_status');
              _context.prev = 4;
              _context.next = 7;
              return fetch(RishiCompanionDashboard.ajaxURL, {
                method: 'POST',
                body: body
              });

            case 7:
              response = _context.sent;

              if (!(response.status === 200)) {
                _context.next = 15;
                break;
              }

              _context.next = 11;
              return response.json();

            case 11:
              _yield$response$json = _context.sent;
              success = _yield$response$json.success;
              data = _yield$response$json.data;

              if (success) {
                setPluginStatus(data);
                plugins_status_cache = data;
              }

            case 15:
              _context.next = 19;
              break;

            case 17:
              _context.prev = 17;
              _context.t0 = _context["catch"](4);

            case 19:
              setIsLoading(false);

            case 20:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[4, 17]]);
    }));

    return function syncPlugins() {
      return _ref.apply(this, arguments);
    };
  }();

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    syncPlugins(!plugins_status_cache);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "plugin--wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, plugins.length > 0 && /*#__PURE__*/React.createElement(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, /*#__PURE__*/React.createElement("div", {
    className: "plugin--grid--wrapper"
  }, plugins.map(function (plugin) {
    return /*#__PURE__*/React.createElement(_ui_components_PluginBlock__WEBPACK_IMPORTED_MODULE_5__["default"], {
      plugin: plugin,
      key: plugin.name,
      onPluginsSync: function onPluginsSync() {
        return syncPlugins();
      },
      status: (plugins_status.find(function (_ref2) {
        var name = _ref2.name;
        return name === plugin.name;
      }) || {}).status
    });
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (RecommendedPlugins);

/***/ }),

/***/ "./assets/admin/components/ui-components/Button.js":
/*!*********************************************************!*\
  !*** ./assets/admin/components/ui-components/Button.js ***!
  \*********************************************************/
/*! exports provided: Button, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _button_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button.css */ "./assets/admin/components/ui-components/button.css");
/* harmony import */ var _button_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_button_css__WEBPACK_IMPORTED_MODULE_1__);



var Style = ["btn--primary", "btn--secondary", "btn-tabs"];
var Button = function Button(_ref) {
  var children = _ref.children,
      type = _ref.type,
      onClick = _ref.onClick,
      buttonStyle = _ref.buttonStyle,
      buttonSize = _ref.buttonSize;
  var checkButtonStyle = Style.includes(buttonStyle) ? buttonStyle : Style[0];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn ".concat(checkButtonStyle),
    onClick: onClick,
    type: type
  }, children);
};
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./assets/admin/components/ui-components/PluginBlock.js":
/*!**************************************************************!*\
  !*** ./assets/admin/components/ui-components/PluginBlock.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);






var PluginBlock = function PluginBlock(_ref) {
  var status = _ref.status,
      plugin = _ref.plugin,
      onPluginsSync = _ref.onPluginsSync;

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];

  var makeAction = /*#__PURE__*/function () {
    var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(plugin, actionName) {
      var body;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              body = new FormData();
              body.append('plugin', plugin);
              body.append('action', actionName);
              setIsLoading(true);
              _context.prev = 4;
              _context.next = 7;
              return fetch(RishiCompanionDashboard.ajaxURL, {
                method: 'POST',
                body: body
              });

            case 7:
              onPluginsSync();
              _context.next = 12;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](4);

            case 12:
              setIsLoading(false);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[4, 10]]);
    }));

    return function makeAction(_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/React.createElement("div", {
    className: "plugin--card--wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "plugin--details--wrapper"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "plugin--title"
  }, plugin.title, isLoading && /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 100 100"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(50,50)"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "scale(1)"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "0",
    cy: "0",
    r: "50",
    fill: "#687c93"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "0",
    cy: "-26",
    r: "12",
    fill: "#ffffff",
    transform: "rotate(161.634)"
  }, /*#__PURE__*/React.createElement("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    calcMode: "linear",
    values: "0 0 0;360 0 0",
    keyTimes: "0;1",
    dur: "1s",
    begin: "0s",
    repeatCount: "indefinite"
  })))))), plugin.description && /*#__PURE__*/React.createElement("div", {
    className: "plugin--description"
  }, /*#__PURE__*/React.createElement("p", null, plugin.description)), /*#__PURE__*/React.createElement("div", {
    className: "rc-extension-actions"
  }, status === 'activated' && /*#__PURE__*/React.createElement("a", {
    onClick: function onClick() {
      return makeAction(plugin.name, 'rc_get_plugin_deactivate');
    },
    className: "rc-button"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Deactivate', 'rishi-companion')), status === 'deactivated' && /*#__PURE__*/React.createElement("a", {
    onClick: function onClick() {
      return makeAction(plugin.name, 'rc_get_plugin_activate');
    },
    className: "rc-button-primary"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Activate', 'rishi-companion')), status === 'uninstalled' && !plugin.comingsoon && plugin.type !== 'link' && /*#__PURE__*/React.createElement("a", {
    onClick: function onClick() {
      return makeAction(plugin.name, 'rc_get_plugin_download');
    },
    className: "rc-button"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Install', 'rishi-companion')), status === 'uninstalled' && !plugin.comingsoon && plugin.type === 'link' && /*#__PURE__*/React.createElement("a", {
    href: plugin.link,
    className: "rc-button",
    target: "_blank"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Download', 'rishi-companion')), status === 'uninstalled' && plugin.comingsoon && /*#__PURE__*/React.createElement("span", {
    className: "rc-badge"
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('COMING SOON', 'rishi-companion')))));
};

/* harmony default export */ __webpack_exports__["default"] = (PluginBlock);

/***/ }),

/***/ "./assets/admin/components/ui-components/button.css":
/*!**********************************************************!*\
  !*** ./assets/admin/components/ui-components/button.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/admin/dashboard.js":
/*!***********************************!*\
  !*** ./assets/admin/dashboard.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NavbarHook_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavbarHook.js */ "./assets/admin/NavbarHook.js");
/* harmony import */ var _ContentHooks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContentHooks.js */ "./assets/admin/ContentHooks.js");



/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

module.exports = _iterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"];

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toArray.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toArray.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _toArray(arr) {
  return arrayWithHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableRest();
}

module.exports = _toArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*************************************!*\
  !*** external "regeneratorRuntime" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["regeneratorRuntime"]; }());

/***/ }),

/***/ "@wordpress/date":
/*!******************************!*\
  !*** external ["wp","date"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["date"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["hooks"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["React"]; }());

/***/ })

/******/ });
//# sourceMappingURL=dashboard.js.map