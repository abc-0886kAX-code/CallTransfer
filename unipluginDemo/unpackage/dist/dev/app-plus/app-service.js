(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!*********************************************!*\
  !*** E:/CallTransfer/unipluginDemo/main.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nvar _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 2));\n__webpack_require__(/*! uni-pages */ 6);\nvar _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 22));\nvar _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 23));\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n_vue.default.config.productionTip = false;\n_App.default.mpType = 'app';\nvar app = new _vue.default(_objectSpread({}, _App.default));\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb25maWciLCJwcm9kdWN0aW9uVGlwIiwiQXBwIiwibXBUeXBlIiwiYXBwIiwiJG1vdW50Il0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFBbUI7QUFDbkI7QUFBdUI7QUFBQTtBQUV2QkEsWUFBRyxDQUFDQyxNQUFNLENBQUNDLGFBQWEsR0FBRyxLQUFLO0FBRWhDQyxZQUFHLENBQUNDLE1BQU0sR0FBRyxLQUFLO0FBRWxCLElBQU1DLEdBQUcsR0FBRyxJQUFJTCxZQUFHLG1CQUNaRyxZQUFHLEVBQ1I7QUFDRkUsR0FBRyxDQUFDQyxNQUFNLEVBQUUiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcclxuaW1wb3J0IEFwcCBmcm9tICcuL0FwcCdcclxuXHJcblZ1ZS5jb25maWcucHJvZHVjdGlvblRpcCA9IGZhbHNlXHJcblxyXG5BcHAubXBUeXBlID0gJ2FwcCdcclxuXHJcbmNvbnN0IGFwcCA9IG5ldyBWdWUoe1xyXG4gICAgLi4uQXBwXHJcbn0pXHJcbmFwcC4kbW91bnQoKSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 2 */
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 3);
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
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
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 3 */
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 4)["default"];
var toPrimitive = __webpack_require__(/*! ./toPrimitive.js */ 5);
function _toPropertyKey(arg) {
  var key = toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
module.exports = _toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 4 */
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 5 */
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 4)["default"];
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
module.exports = _toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 6 */
/*!************************************************!*\
  !*** E:/CallTransfer/unipluginDemo/pages.json ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(function (value) {
      return promise.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return promise.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };
}
if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  var global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
if (uni.restoreGlobal) {
  uni.restoreGlobal(weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
__definePage('pages/login/index', function () {
  return Vue.extend(__webpack_require__(/*! pages/login/index.vue?mpType=page */ 7).default);
});
__definePage('pages/home/index', function () {
  return Vue.extend(__webpack_require__(/*! pages/home/index.vue?mpType=page */ 17).default);
});

/***/ }),
/* 7 */
/*!***********************************************************************!*\
  !*** E:/CallTransfer/unipluginDemo/pages/login/index.vue?mpType=page ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_705bf593_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=705bf593&mpType=page */ 8);\n/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 10);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 16);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_705bf593_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_705bf593_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _index_vue_vue_type_template_id_705bf593_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/login/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDN0g7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQzJMO0FBQzNMLGdCQUFnQixtTUFBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTcwNWJmNTkzJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9sb2dpbi9pbmRleC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!*****************************************************************************************************!*\
  !*** E:/CallTransfer/unipluginDemo/pages/login/index.vue?vue&type=template&id=705bf593&mpType=page ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_705bf593_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=705bf593&mpType=page */ 9);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_705bf593_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_705bf593_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_705bf593_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_705bf593_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 9 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/CallTransfer/unipluginDemo/pages/login/index.vue?vue&type=template&id=705bf593&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "login"), attrs: { _i: 0 } },
    [
      _c(
        "div",
        { staticClass: _vm._$s(1, "sc", "login-form"), attrs: { _i: 1 } },
        [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.username,
                expression: "username",
              },
            ],
            staticClass: _vm._$s(2, "sc", "u-input login-form-item"),
            attrs: { _i: 2 },
            domProps: { value: _vm._$s(2, "v-model", _vm.username) },
            on: {
              input: function ($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.username = $event.target.value
              },
            },
          }),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.password,
                expression: "password",
              },
            ],
            staticClass: _vm._$s(3, "sc", "u-input login-form-item"),
            attrs: { _i: 3 },
            domProps: { value: _vm._$s(3, "v-model", _vm.password) },
            on: {
              input: function ($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.password = $event.target.value
              },
            },
          }),
        ]
      ),
      _c(
        "div",
        { staticClass: _vm._$s(4, "sc", "login-console"), attrs: { _i: 4 } },
        [
          _c("button", {
            staticClass: _vm._$s(5, "sc", "login-console-button u-button"),
            attrs: { _i: 5 },
            on: { click: _vm.handleLogon },
          }),
        ]
      ),
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 10 */
/*!***********************************************************************************************!*\
  !*** E:/CallTransfer/unipluginDemo/pages/login/index.vue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 11);\n/* harmony import */ var _D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1vQixDQUFnQiw4cEJBQUcsRUFBQyIsImZpbGUiOiIxMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTYtMSFEOlxcXFxIQnVpbGRlclhcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTYtMSFEOlxcXFxIQnVpbGRlclhcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///10\n");

/***/ }),
/* 11 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/CallTransfer/unipluginDemo/pages/login/index.vue?vue&type=script&lang=js&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 1);\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 12));\nvar _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 14));\nvar _comm = __webpack_require__(/*! @/api/comm.js */ 15);\nvar _permission = _interopRequireDefault(__webpack_require__(/*! @/js_sdk/wa-permission/permission.js */ 27));\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = {\n  data: function data() {\n    return {\n      username: '',\n      password: ''\n    };\n  },\n  onLoad: function onLoad() {\n    this.initLogin();\n    this.obtainingAuthorization();\n  },\n  methods: {\n    handleLogon: function handleLogon() {\n      var _this = this;\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {\n        var params, data;\n        return _regenerator.default.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                if (!(!_this.username || !_this.password)) {\n                  _context.next = 3;\n                  break;\n                }\n                uni.showToast({\n                  title: '请输入账号或密码',\n                  icon: 'error'\n                });\n                return _context.abrupt(\"return\");\n              case 3:\n                params = {\n                  username: _this.username,\n                  password: _this.password\n                };\n                _context.next = 6;\n                return (0, _comm.Login)(params);\n              case 6:\n                data = _context.sent;\n                if (data) {\n                  uni.reLaunch({\n                    url: \"../home/index\"\n                  });\n                }\n              case 8:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }))();\n    },\n    initLogin: function initLogin() {\n      // 查看是否有token，并且校验token,通过则自动登录进入，失败则需要用户手动输入后登录\n    },\n    obtainingAuthorization: function obtainingAuthorization() {\n      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {\n        var result, strStatus;\n        return _regenerator.default.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.next = 2;\n                return _permission.default.requestAndroidPermission('android.permission.CALL_PHONE');\n              case 2:\n                result = _context2.sent;\n                if (result == 1) {\n                  strStatus = \"已获得授权\";\n                } else if (result == 0) {\n                  strStatus = \"未获得授权\";\n                } else {\n                  strStatus = \"被永久拒绝权限\";\n                }\n                uni.showModal({\n                  content: 'android.permission.CALL_PHONE' + strStatus,\n                  showCancel: false\n                });\n              case 5:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }))();\n    }\n  }\n};\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvbG9naW4vaW5kZXgudnVlIl0sIm5hbWVzIjpbImRhdGEiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwib25Mb2FkIiwiaW5pdExvZ2luIiwib2J0YWluaW5nQXV0aG9yaXphdGlvbiIsIm1ldGhvZHMiLCJoYW5kbGVMb2dvbiIsInVuaSIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsInBhcmFtcyIsIkxvZ2luIiwicmVMYXVuY2giLCJ1cmwiLCJwZXJtaXNpb24iLCJyZXF1ZXN0QW5kcm9pZFBlcm1pc3Npb24iLCJyZXN1bHQiLCJzdHJTdGF0dXMiLCJzaG93TW9kYWwiLCJjb250ZW50Iiwic2hvd0NhbmNlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBWUE7QUFDQTtBQWJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQSxlQUllO0VBQ2RBLElBQUksa0JBQUc7SUFDTixPQUFPO01BQ05DLFFBQVEsRUFBQyxFQUFFO01BQ1hDLFFBQVEsRUFBQztJQUNWLENBQUM7RUFDRixDQUFDO0VBQ0RDLE1BQU0sb0JBQUc7SUFDUixJQUFJLENBQUNDLFNBQVMsRUFBRTtJQUNoQixJQUFJLENBQUNDLHNCQUFzQixFQUFFO0VBQzlCLENBQUM7RUFDREMsT0FBTyxFQUFFO0lBQ0ZDLFdBQVcseUJBQUU7TUFBQTtNQUFBO1FBQUE7UUFBQTtVQUFBO1lBQUE7Y0FBQTtnQkFBQSxNQUNmLENBQUMsS0FBSSxDQUFDTixRQUFRLElBQUksQ0FBQyxLQUFJLENBQUNDLFFBQVE7a0JBQUE7a0JBQUE7Z0JBQUE7Z0JBQ2xDTSxHQUFHLENBQUNDLFNBQVMsQ0FBQztrQkFDYkMsS0FBSyxFQUFDLFVBQVU7a0JBQ2hCQyxJQUFJLEVBQUM7Z0JBQ04sQ0FBQyxDQUFDO2dCQUFBO2NBQUE7Z0JBSUdDLE1BQU0sR0FBRztrQkFDZFgsUUFBUSxFQUFDLEtBQUksQ0FBQ0EsUUFBUTtrQkFDdEJDLFFBQVEsRUFBQyxLQUFJLENBQUNBO2dCQUNmLENBQUM7Z0JBQUE7Z0JBQUEsT0FDa0IsSUFBQVcsV0FBSyxFQUFDRCxNQUFNLENBQUM7Y0FBQTtnQkFBMUJaLElBQUk7Z0JBRVYsSUFBR0EsSUFBSSxFQUFDO2tCQUNOUSxHQUFHLENBQUNNLFFBQVEsQ0FBQztvQkFDWkMsR0FBRyxFQUFDO2tCQUNMLENBQUMsQ0FBQztnQkFDSjtjQUFDO2NBQUE7Z0JBQUE7WUFBQTtVQUFBO1FBQUE7TUFBQTtJQUNGLENBQUM7SUFDRFgsU0FBUyx1QkFBRTtNQUNWO0lBQUEsQ0FDQTtJQUNLQyxzQkFBc0Isb0NBQUU7TUFBQTtRQUFBO1FBQUE7VUFBQTtZQUFBO2NBQUE7Z0JBQUE7Z0JBQUEsT0FDVlcsbUJBQVMsQ0FBQ0Msd0JBQXdCLENBQUMsK0JBQStCLENBQUM7Y0FBQTtnQkFBbEZDLE1BQU07Z0JBRVYsSUFBSUEsTUFBTSxJQUFJLENBQUMsRUFBRTtrQkFDaEJDLFNBQVMsR0FBRyxPQUFPO2dCQUNwQixDQUFDLE1BQU0sSUFBSUQsTUFBTSxJQUFJLENBQUMsRUFBRTtrQkFDdkJDLFNBQVMsR0FBRyxPQUFPO2dCQUNwQixDQUFDLE1BQU07a0JBQ05BLFNBQVMsR0FBRyxTQUFTO2dCQUN0QjtnQkFDQVgsR0FBRyxDQUFDWSxTQUFTLENBQUM7a0JBQ2JDLE9BQU8sRUFBRSwrQkFBK0IsR0FBR0YsU0FBUztrQkFDcERHLFVBQVUsRUFBRTtnQkFDYixDQUFDLENBQUM7Y0FBQztjQUFBO2dCQUFBO1lBQUE7VUFBQTtRQUFBO01BQUE7SUFDSjtFQUNEO0FBQ0QsQ0FBQztBQUFBIiwiZmlsZSI6IjExLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG5cbmltcG9ydCB7TG9naW59IGZyb20gXCJAL2FwaS9jb21tLmpzXCJcbmltcG9ydCBwZXJtaXNpb24gZnJvbSBcIkAvanNfc2RrL3dhLXBlcm1pc3Npb24vcGVybWlzc2lvbi5qc1wiXG5leHBvcnQgZGVmYXVsdCB7XG5cdGRhdGEoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHVzZXJuYW1lOicnLFxuXHRcdFx0cGFzc3dvcmQ6JycsXG5cdFx0fVxuXHR9LFxuXHRvbkxvYWQoKSB7XG5cdFx0dGhpcy5pbml0TG9naW4oKVxuXHRcdHRoaXMub2J0YWluaW5nQXV0aG9yaXphdGlvbigpO1xuXHR9LFxuXHRtZXRob2RzOiB7XG5cdFx0YXN5bmMgaGFuZGxlTG9nb24oKXtcblx0XHRcdGlmKCF0aGlzLnVzZXJuYW1lIHx8ICF0aGlzLnBhc3N3b3JkKXtcblx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0dGl0bGU6J+ivt+i+k+WFpei0puWPt+aIluWvhueggScsXG5cdFx0XHRcdFx0aWNvbjonZXJyb3InXG5cdFx0XHRcdH0pXG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0Y29uc3QgcGFyYW1zID0ge1xuXHRcdFx0XHR1c2VybmFtZTp0aGlzLnVzZXJuYW1lLFxuXHRcdFx0XHRwYXNzd29yZDp0aGlzLnBhc3N3b3JkLFxuXHRcdFx0fVxuXHRcdFx0Y29uc3QgZGF0YSA9IGF3YWl0IExvZ2luKHBhcmFtcyk7XG5cdFx0XHRcblx0XHRcdGlmKGRhdGEpe1xuXHRcdFx0XHRcdHVuaS5yZUxhdW5jaCh7XG5cdFx0XHRcdFx0XHR1cmw6XCIuLi9ob21lL2luZGV4XCJcblx0XHRcdFx0XHR9KVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0aW5pdExvZ2luKCl7XG5cdFx0XHQvLyDmn6XnnIvmmK/lkKbmnIl0b2tlbu+8jOW5tuS4lOagoemqjHRva2VuLOmAmui/h+WImeiHquWKqOeZu+W9lei/m+WFpe+8jOWksei0peWImemcgOimgeeUqOaIt+aJi+WKqOi+k+WFpeWQjueZu+W9lVxuXHRcdH0sXG5cdFx0YXN5bmMgb2J0YWluaW5nQXV0aG9yaXphdGlvbigpe1xuXHRcdFx0dmFyIHJlc3VsdCA9IGF3YWl0IHBlcm1pc2lvbi5yZXF1ZXN0QW5kcm9pZFBlcm1pc3Npb24oJ2FuZHJvaWQucGVybWlzc2lvbi5DQUxMX1BIT05FJylcblx0XHRcdHZhciBzdHJTdGF0dXNcblx0XHRcdGlmIChyZXN1bHQgPT0gMSkge1xuXHRcdFx0XHRzdHJTdGF0dXMgPSBcIuW3suiOt+W+l+aOiOadg1wiXG5cdFx0XHR9IGVsc2UgaWYgKHJlc3VsdCA9PSAwKSB7XG5cdFx0XHRcdHN0clN0YXR1cyA9IFwi5pyq6I635b6X5o6I5p2DXCJcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHN0clN0YXR1cyA9IFwi6KKr5rC45LmF5ouS57ud5p2D6ZmQXCJcblx0XHRcdH1cblx0XHRcdHVuaS5zaG93TW9kYWwoe1xuXHRcdFx0XHRjb250ZW50OiAnYW5kcm9pZC5wZXJtaXNzaW9uLkNBTExfUEhPTkUnICsgc3RyU3RhdHVzLFxuXHRcdFx0XHRzaG93Q2FuY2VsOiBmYWxzZVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 4);
// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(/*! ../helpers/regeneratorRuntime */ 13)();
module.exports = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if ((typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}

/***/ }),
/* 13 */
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 4)["default"];
function _regeneratorRuntime() {
  "use strict";

  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return exports;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    defineProperty = Object.defineProperty || function (obj, key, desc) {
      obj[key] = desc.value;
    },
    $Symbol = "function" == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || "@@iterator",
    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    }), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg,
          value = result.value;
        return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    defineProperty(this, "_invoke", {
      value: function value(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(innerFn, self, context) {
    var state = "suspendedStart";
    return function (method, arg) {
      if ("executing" === state) throw new Error("Generator is already running");
      if ("completed" === state) {
        if ("throw" === method) throw arg;
        return doneResult();
      }
      for (context.method = method, context.arg = arg;;) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
          if ("suspendedStart" === state) throw state = "completed", context.arg;
          context.dispatchException(context.arg);
        } else "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self, context);
        if ("normal" === record.type) {
          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
          return {
            value: record.arg,
            done: context.done
          };
        }
        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method,
      method = delegate.iterator[methodName];
    if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            for (; ++i < iterable.length;) {
              if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
            }
            return next.value = undefined, next.done = !0, next;
          };
        return next.next = next;
      }
    }
    return {
      next: doneResult
    };
  }
  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (val) {
    var object = Object(val),
      keys = [];
    for (var key in object) {
      keys.push(key);
    }
    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) {
        "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
      }
    },
    stop: function stop() {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
          record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
            hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 14 */
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
module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 15 */
/*!*************************************************!*\
  !*** E:/CallTransfer/unipluginDemo/api/comm.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Login = Login;\nfunction Login(params) {\n  var username = params.username,\n    password = params.password;\n  if (username !== 'admin') {\n    uni.showToast({\n      title: '账号错误!',\n      icon: 'error'\n    });\n    return;\n  }\n  if (password !== '123') {\n    uni.showToast({\n      title: '密码错误!',\n      icon: 'error'\n    });\n    return;\n  }\n  return Promise.resolve({\n    token: '123',\n    username: '管理员'\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vYXBpL2NvbW0uanMiXSwibmFtZXMiOlsiTG9naW4iLCJwYXJhbXMiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwidW5pIiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ0b2tlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQU8sU0FBU0EsS0FBSyxDQUFDQyxNQUFNLEVBQUM7RUFDNUIsSUFBT0MsUUFBUSxHQUFhRCxNQUFNLENBQTNCQyxRQUFRO0lBQUNDLFFBQVEsR0FBSUYsTUFBTSxDQUFsQkUsUUFBUTtFQUV4QixJQUFHRCxRQUFRLEtBQUssT0FBTyxFQUFDO0lBQ3BCRSxHQUFHLENBQUNDLFNBQVMsQ0FBQztNQUNiQyxLQUFLLEVBQUMsT0FBTztNQUNiQyxJQUFJLEVBQUM7SUFDTixDQUFDLENBQUM7SUFDRjtFQUNEO0VBRUgsSUFBR0osUUFBUSxLQUFLLEtBQUssRUFBQztJQUNsQkMsR0FBRyxDQUFDQyxTQUFTLENBQUM7TUFDYkMsS0FBSyxFQUFDLE9BQU87TUFDYkMsSUFBSSxFQUFDO0lBQ04sQ0FBQyxDQUFDO0lBQ0Y7RUFDRDtFQUdILE9BQU9DLE9BQU8sQ0FBQ0MsT0FBTyxDQUFDO0lBQ3RCQyxLQUFLLEVBQUMsS0FBSztJQUNYUixRQUFRLEVBQUM7RUFDVixDQUFDLENBQUM7QUFFSCIsImZpbGUiOiIxNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBMb2dpbihwYXJhbXMpe1xyXG5cdGNvbnN0IHt1c2VybmFtZSxwYXNzd29yZH0gPSBwYXJhbXM7XHJcblx0XHJcblx0aWYodXNlcm5hbWUgIT09ICdhZG1pbicpe1xyXG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdHRpdGxlOifotKblj7fplJnor68hJyxcclxuXHRcdFx0XHRcdFx0aWNvbjonZXJyb3InXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRpZihwYXNzd29yZCAhPT0gJzEyMycpe1xyXG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdHRpdGxlOiflr4bnoIHplJnor68hJyxcclxuXHRcdFx0XHRcdFx0aWNvbjonZXJyb3InXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHRcclxuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtcclxuXHRcdHRva2VuOicxMjMnLFxyXG5cdFx0dXNlcm5hbWU6J+euoeeQhuWRmCdcclxuXHR9KVxyXG5cdFxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///15\n");

/***/ }),
/* 16 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 17 */
/*!**********************************************************************!*\
  !*** E:/CallTransfer/unipluginDemo/pages/home/index.vue?mpType=page ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_3d4d74ab_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=3d4d74ab&mpType=page */ 18);\n/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 20);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 16);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_3d4d74ab_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_3d4d74ab_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _index_vue_vue_type_template_id_3d4d74ab_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/home/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDN0g7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQzJMO0FBQzNMLGdCQUFnQixtTUFBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMTcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zZDRkNzRhYiZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFxIQnVpbGRlclhcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvaG9tZS9pbmRleC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///17\n");

/***/ }),
/* 18 */
/*!****************************************************************************************************!*\
  !*** E:/CallTransfer/unipluginDemo/pages/home/index.vue?vue&type=template&id=3d4d74ab&mpType=page ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3d4d74ab_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=3d4d74ab&mpType=page */ 19);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3d4d74ab_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3d4d74ab_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3d4d74ab_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3d4d74ab_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 19 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/CallTransfer/unipluginDemo/pages/home/index.vue?vue&type=template&id=3d4d74ab&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "home"), attrs: { _i: 0 } },
    [
      _c(
        "div",
        { staticClass: _vm._$s(1, "sc", "home-exit"), attrs: { _i: 1 } },
        [
          _c("icon", {
            staticClass: _vm._$s(2, "sc", "home-exit-button e-icon"),
            attrs: { _i: 2 },
            on: { click: _vm.handleExit },
          }),
        ]
      ),
      _c(
        "div",
        { staticClass: _vm._$s(3, "sc", "home-form"), attrs: { _i: 3 } },
        [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.phone,
                expression: "phone",
              },
            ],
            staticClass: _vm._$s(4, "sc", "u-input home-form-item"),
            attrs: { _i: 4 },
            domProps: { value: _vm._$s(4, "v-model", _vm.phone) },
            on: {
              input: function ($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.phone = $event.target.value
              },
            },
          }),
        ]
      ),
      _c(
        "div",
        { staticClass: _vm._$s(5, "sc", "home-console"), attrs: { _i: 5 } },
        [
          _c("button", {
            staticClass: _vm._$s(6, "sc", "home-console-button s-button"),
            attrs: { _i: 6 },
            on: { click: _vm.handleSetup },
          }),
        ]
      ),
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 20 */
/*!**********************************************************************************************!*\
  !*** E:/CallTransfer/unipluginDemo/pages/home/index.vue?vue&type=script&lang=js&mpType=page ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 21);\n/* harmony import */ var _D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1vQixDQUFnQiw4cEJBQUcsRUFBQyIsImZpbGUiOiIyMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTYtMSFEOlxcXFxIQnVpbGRlclhcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTYtMSFEOlxcXFxIQnVpbGRlclhcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///20\n");

/***/ }),
/* 21 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/CallTransfer/unipluginDemo/pages/home/index.vue?vue&type=script&lang=js&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nvar callforwarding = uni.requireNativePlugin('callforwarding');\nvar _default = {\n  data: function data() {\n    return {\n      phone: ''\n    };\n  },\n  onLoad: function onLoad() {},\n  methods: {\n    handleSetup: function handleSetup() {\n      if (!this.phone) {\n        uni.showToast({\n          title: '请输入来电转移电话',\n          icon: 'error'\n        });\n        return;\n      }\n      // 此处返回提示消息是否启动并且设置成功\n      callforwarding.setOverallSituationPhone({\n        phone: this.phone\n      });\n    },\n    handleExit: function handleExit() {\n      // 清除当前登录信息\n      uni.reLaunch({\n        url: \"../login/index\"\n      });\n    }\n  }\n};\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaG9tZS9pbmRleC52dWUiXSwibmFtZXMiOlsiZGF0YSIsInBob25lIiwib25Mb2FkIiwibWV0aG9kcyIsImhhbmRsZVNldHVwIiwidW5pIiwidGl0bGUiLCJpY29uIiwiY2FsbGZvcndhcmRpbmciLCJoYW5kbGVFeGl0IiwidXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWNBO0FBQUEsZUFDQTtFQUNBQTtJQUNBO01BQ0FDO0lBQ0E7RUFDQTtFQUNBQztFQUNBQztJQUNBQztNQUNBO1FBQ0FDO1VBQ0FDO1VBQ0FDO1FBQ0E7UUFDQTtNQUNBO01BQ0E7TUFDQUM7UUFBQVA7TUFBQTtJQUNBO0lBQ0FRO01BRUE7TUFDQUo7UUFDQUs7TUFDQTtJQUNBO0VBQ0E7QUFDQTtBQUFBIiwiZmlsZSI6IjIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IGNsYXNzPVwiaG9tZVwiPlxyXG5cdFx0PGRpdiBjbGFzcz1cImhvbWUtZXhpdFwiPlxyXG5cdFx0XHQ8aWNvbiBjbGFzcz1cImhvbWUtZXhpdC1idXR0b24gZS1pY29uXCIgc2l6ZT1cIjI2XCIgdHlwZT1cImNhbmNlbFwiIEBjbGljaz1cImhhbmRsZUV4aXRcIiBjb2xvcj1cIiNmZmZcIj48L2ljb24+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdDxkaXYgY2xhc3M9XCJob21lLWZvcm1cIj5cclxuXHRcdFx0PGlucHV0IGNsYXNzPVwidS1pbnB1dCBob21lLWZvcm0taXRlbVwiIHYtbW9kZWw9XCJwaG9uZVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCLmnaXnlLXovaznp7vnlLXor51cIj5cclxuXHRcdDwvZGl2PlxyXG5cdFx0PGRpdiBjbGFzcz1cImhvbWUtY29uc29sZVwiPlxyXG5cdFx0XHQ8YnV0dG9uIGNsYXNzPVwiaG9tZS1jb25zb2xlLWJ1dHRvbiBzLWJ1dHRvblwiIEBjbGljaz1cImhhbmRsZVNldHVwXCI+6K6+572uPC9idXR0b24+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcbjxzY3JpcHQ+XHJcblx0Y29uc3QgY2FsbGZvcndhcmRpbmcgPSB1bmkucmVxdWlyZU5hdGl2ZVBsdWdpbignY2FsbGZvcndhcmRpbmcnKTtcdFxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0cGhvbmU6JydcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG9uTG9hZCgpIHt9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRoYW5kbGVTZXR1cCgpe1xyXG5cdFx0XHRcdGlmKCF0aGlzLnBob25lKXtcclxuXHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHR0aXRsZTon6K+36L6T5YWl5p2l55S16L2s56e755S16K+dJyxcclxuXHRcdFx0XHRcdFx0aWNvbjonZXJyb3InXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQvLyDmraTlpITov5Tlm57mj5DnpLrmtojmga/mmK/lkKblkK/liqjlubbkuJTorr7nva7miJDlip9cclxuXHRcdFx0XHRjYWxsZm9yd2FyZGluZy5zZXRPdmVyYWxsU2l0dWF0aW9uUGhvbmUoe3Bob25lOnRoaXMucGhvbmV9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRoYW5kbGVFeGl0KCl7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Ly8g5riF6Zmk5b2T5YmN55m75b2V5L+h5oGvXHJcblx0XHRcdFx0dW5pLnJlTGF1bmNoKHtcclxuXHRcdFx0XHRcdHVybDpcIi4uL2xvZ2luL2luZGV4XCJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxyXG5cdEBpbXBvcnQgdXJsKCcuLi8uLi9jb21tb24vY29tcG9uZW50cy1zdHlsZS5zY3NzJyk7XHJcblx0LmhvbWV7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGhlaWdodDogMTAwJTtcclxuXHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0XHRiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL3N0YXRpYy9ob21lLnBuZycpIG5vLXJlcGVhdDtcclxuXHRcdGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMTAwJTtcclxuXHRcdCYtZm9ybXtcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHR0b3A6IDI0JTtcclxuXHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdGhlaWdodDogMjEwcnB4O1xyXG5cdFx0XHRtYXJnaW46IDAgYXV0bztcclxuXHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHQmLWl0ZW17XHJcblx0XHRcdFx0aGVpZ2h0OiA0MiU7XHJcblx0XHRcdFx0d2lkdGg6IDc1JTtcclxuXHRcdFx0XHRcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0Ji1jb25zb2xle1xyXG5cdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRib3R0b206IDE1JTtcclxuXHRcdFx0Ji1idXR0b257XHJcblx0XHRcdFx0d2lkdGg6IDQ1JTtcclxuXHRcdFx0XHRoZWlnaHQ6IDcwcnB4O1xyXG5cdFx0XHRcdG1hcmdpbjogMCBhdXRvO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHQmLWV4aXR7XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdHRvcDogMDtcclxuXHRcdFx0cmlnaHQ6IDA7XHJcblx0XHRcdCYtYnV0dG9ue1xyXG5cdFx0XHRcdHdpZHRoOiA3MHJweDtcclxuXHRcdFx0XHRoZWlnaHQ6IDcwcnB4O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///21\n");

/***/ }),
/* 22 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 23 */
/*!*********************************************!*\
  !*** E:/CallTransfer/unipluginDemo/App.vue ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 24);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 16);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDMkw7QUFDM0wsZ0JBQWdCLG1NQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6IjIzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhRDpcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkFwcC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///23\n");

/***/ }),
/* 24 */
/*!**********************************************************************!*\
  !*** E:/CallTransfer/unipluginDemo/App.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 25);\n/* harmony import */ var _D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_D_HBuilderX_HBuilderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNuQixDQUFnQixpcEJBQUcsRUFBQyIsImZpbGUiOiIyNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTYtMSFEOlxcXFxIQnVpbGRlclhcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFx1c2luZy1jb21wb25lbnRzLmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlclhcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhRDpcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1hcHAtbG9hZGVyXFxcXHVzaW5nLWNvbXBvbmVudHMuanMhRDpcXFxcSEJ1aWxkZXJYXFxcXEhCdWlsZGVyWFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///24\n");

/***/ }),
/* 25 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/CallTransfer/unipluginDemo/App.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _default = {\n  onLaunch: function onLaunch() {\n    __f__(\"log\", 'App Launch', \" at App.vue:4\");\n  },\n  onShow: function onShow() {\n    __f__(\"log\", 'App Show', \" at App.vue:7\");\n  },\n  onHide: function onHide() {\n    __f__(\"log\", 'App Hide', \" at App.vue:10\");\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 26)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6WyJvbkxhdW5jaCIsIm9uU2hvdyIsIm9uSGlkZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O2VBQ2U7RUFDZEEsUUFBUSxFQUFFLG9CQUFXO0lBQ3BCLGFBQVksWUFBWTtFQUN6QixDQUFDO0VBQ0RDLE1BQU0sRUFBRSxrQkFBVztJQUNsQixhQUFZLFVBQVU7RUFDdkIsQ0FBQztFQUNEQyxNQUFNLEVBQUUsa0JBQVc7SUFDbEIsYUFBWSxVQUFVO0VBQ3ZCO0FBQ0QsQ0FBQztBQUFBLDJCIiwiZmlsZSI6IjI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZGVmYXVsdCB7XG5cdG9uTGF1bmNoOiBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwIExhdW5jaCcpXG5cdH0sXG5cdG9uU2hvdzogZnVuY3Rpb24oKSB7XG5cdFx0Y29uc29sZS5sb2coJ0FwcCBTaG93Jylcblx0fSxcblx0b25IaWRlOiBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwIEhpZGUnKVxuXHR9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///25\n");

/***/ }),
/* 26 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! exports provided: log, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatLog; });
function typof (v) {
  var s = Object.prototype.toString.call(v)
  return s.substring(8, s.length - 1)
}

function isDebugMode () {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__
}

function jsonStringifyReplacer (k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }'
    default :
      return p
  }
}

function log (type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key]
  }
  console[type].apply(console, args)
}

function formatLog () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key]
  }
  var type = args.shift()
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'))
    return console[type].apply(console, args)
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase()

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---'
      } catch (e) {
        v = type
      }
    } else {
      if (v === null) {
        v = '---NULL---'
      } else if (v === undefined) {
        v = '---UNDEFINED---'
      } else {
        var vType = typof(v).toUpperCase()

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---'
        } else {
          v = String(v)
        }
      }
    }

    return v
  })
  var msg = ''

  if (msgs.length > 1) {
    var lastMsg = msgs.pop()
    msg = msgs.join('---COMMA---')

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg
    } else {
      msg += '---COMMA---' + lastMsg
    }
  } else {
    msg = msgs[0]
  }

  console[type](msg)
}


/***/ }),
/* 27 */
/*!************************************************************************!*\
  !*** E:/CallTransfer/unipluginDemo/js_sdk/wa-permission/permission.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(__f__) {/**\r\n * 本模块封装了Android、iOS的应用权限判断、打开应用权限设置界面、以及位置系统服务是否开启\r\n */\n\nvar isIos;\nisIos = plus.os.name == \"iOS\";\n\n// 判断推送权限是否开启\nfunction judgeIosPermissionPush() {\n  var result = false;\n  var UIApplication = plus.ios.import(\"UIApplication\");\n  var app = UIApplication.sharedApplication();\n  var enabledTypes = 0;\n  if (app.currentUserNotificationSettings) {\n    var settings = app.currentUserNotificationSettings();\n    enabledTypes = settings.plusGetAttribute(\"types\");\n    __f__(\"log\", \"enabledTypes1:\" + enabledTypes, \" at js_sdk/wa-permission/permission.js:19\");\n    if (enabledTypes == 0) {\n      __f__(\"log\", \"推送权限没有开启\", \" at js_sdk/wa-permission/permission.js:21\");\n    } else {\n      result = true;\n      __f__(\"log\", \"已经开启推送功能!\", \" at js_sdk/wa-permission/permission.js:24\");\n    }\n    plus.ios.deleteObject(settings);\n  } else {\n    enabledTypes = app.enabledRemoteNotificationTypes();\n    if (enabledTypes == 0) {\n      __f__(\"log\", \"推送权限没有开启!\", \" at js_sdk/wa-permission/permission.js:30\");\n    } else {\n      result = true;\n      __f__(\"log\", \"已经开启推送功能!\", \" at js_sdk/wa-permission/permission.js:33\");\n    }\n    __f__(\"log\", \"enabledTypes2:\" + enabledTypes, \" at js_sdk/wa-permission/permission.js:35\");\n  }\n  plus.ios.deleteObject(app);\n  plus.ios.deleteObject(UIApplication);\n  return result;\n}\n\n// 判断定位权限是否开启\nfunction judgeIosPermissionLocation() {\n  var result = false;\n  var cllocationManger = plus.ios.import(\"CLLocationManager\");\n  var status = cllocationManger.authorizationStatus();\n  result = status != 2;\n  __f__(\"log\", \"定位权限开启：\" + result, \" at js_sdk/wa-permission/permission.js:48\");\n  // 以下代码判断了手机设备的定位是否关闭，推荐另行使用方法 checkSystemEnableLocation\n  /* var enable = cllocationManger.locationServicesEnabled();\r\n  var status = cllocationManger.authorizationStatus();\r\n  console.log(\"enable:\" + enable);\r\n  console.log(\"status:\" + status);\r\n  if (enable && status != 2) {\r\n  \tresult = true;\r\n  \tconsole.log(\"手机定位服务已开启且已授予定位权限\");\r\n  } else {\r\n  \tconsole.log(\"手机系统的定位没有打开或未给予定位权限\");\r\n  } */\n  plus.ios.deleteObject(cllocationManger);\n  return result;\n}\n\n// 判断麦克风权限是否开启\nfunction judgeIosPermissionRecord() {\n  var result = false;\n  var avaudiosession = plus.ios.import(\"AVAudioSession\");\n  var avaudio = avaudiosession.sharedInstance();\n  var permissionStatus = avaudio.recordPermission();\n  __f__(\"log\", \"permissionStatus:\" + permissionStatus, \" at js_sdk/wa-permission/permission.js:70\");\n  if (permissionStatus == 1684369017 || permissionStatus == 1970168948) {\n    __f__(\"log\", \"麦克风权限没有开启\", \" at js_sdk/wa-permission/permission.js:72\");\n  } else {\n    result = true;\n    __f__(\"log\", \"麦克风权限已经开启\", \" at js_sdk/wa-permission/permission.js:75\");\n  }\n  plus.ios.deleteObject(avaudiosession);\n  return result;\n}\n\n// 判断相机权限是否开启\nfunction judgeIosPermissionCamera() {\n  var result = false;\n  var AVCaptureDevice = plus.ios.import(\"AVCaptureDevice\");\n  var authStatus = AVCaptureDevice.authorizationStatusForMediaType('vide');\n  __f__(\"log\", \"authStatus:\" + authStatus, \" at js_sdk/wa-permission/permission.js:86\");\n  if (authStatus == 3) {\n    result = true;\n    __f__(\"log\", \"相机权限已经开启\", \" at js_sdk/wa-permission/permission.js:89\");\n  } else {\n    __f__(\"log\", \"相机权限没有开启\", \" at js_sdk/wa-permission/permission.js:91\");\n  }\n  plus.ios.deleteObject(AVCaptureDevice);\n  return result;\n}\n\n// 判断相册权限是否开启\nfunction judgeIosPermissionPhotoLibrary() {\n  var result = false;\n  var PHPhotoLibrary = plus.ios.import(\"PHPhotoLibrary\");\n  var authStatus = PHPhotoLibrary.authorizationStatus();\n  __f__(\"log\", \"authStatus:\" + authStatus, \" at js_sdk/wa-permission/permission.js:102\");\n  if (authStatus == 3) {\n    result = true;\n    __f__(\"log\", \"相册权限已经开启\", \" at js_sdk/wa-permission/permission.js:105\");\n  } else {\n    __f__(\"log\", \"相册权限没有开启\", \" at js_sdk/wa-permission/permission.js:107\");\n  }\n  plus.ios.deleteObject(PHPhotoLibrary);\n  return result;\n}\n\n// 判断通讯录权限是否开启\nfunction judgeIosPermissionContact() {\n  var result = false;\n  var CNContactStore = plus.ios.import(\"CNContactStore\");\n  var cnAuthStatus = CNContactStore.authorizationStatusForEntityType(0);\n  if (cnAuthStatus == 3) {\n    result = true;\n    __f__(\"log\", \"通讯录权限已经开启\", \" at js_sdk/wa-permission/permission.js:120\");\n  } else {\n    __f__(\"log\", \"通讯录权限没有开启\", \" at js_sdk/wa-permission/permission.js:122\");\n  }\n  plus.ios.deleteObject(CNContactStore);\n  return result;\n}\n\n// 判断日历权限是否开启\nfunction judgeIosPermissionCalendar() {\n  var result = false;\n  var EKEventStore = plus.ios.import(\"EKEventStore\");\n  var ekAuthStatus = EKEventStore.authorizationStatusForEntityType(0);\n  if (ekAuthStatus == 3) {\n    result = true;\n    __f__(\"log\", \"日历权限已经开启\", \" at js_sdk/wa-permission/permission.js:135\");\n  } else {\n    __f__(\"log\", \"日历权限没有开启\", \" at js_sdk/wa-permission/permission.js:137\");\n  }\n  plus.ios.deleteObject(EKEventStore);\n  return result;\n}\n\n// 判断备忘录权限是否开启\nfunction judgeIosPermissionMemo() {\n  var result = false;\n  var EKEventStore = plus.ios.import(\"EKEventStore\");\n  var ekAuthStatus = EKEventStore.authorizationStatusForEntityType(1);\n  if (ekAuthStatus == 3) {\n    result = true;\n    __f__(\"log\", \"备忘录权限已经开启\", \" at js_sdk/wa-permission/permission.js:150\");\n  } else {\n    __f__(\"log\", \"备忘录权限没有开启\", \" at js_sdk/wa-permission/permission.js:152\");\n  }\n  plus.ios.deleteObject(EKEventStore);\n  return result;\n}\n\n// Android权限查询\nfunction requestAndroidPermission(permissionID) {\n  return new Promise(function (resolve, reject) {\n    plus.android.requestPermissions([permissionID],\n    // 理论上支持多个权限同时查询，但实际上本函数封装只处理了一个权限的情况。有需要的可自行扩展封装\n    function (resultObj) {\n      var result = 0;\n      for (var i = 0; i < resultObj.granted.length; i++) {\n        var grantedPermission = resultObj.granted[i];\n        __f__(\"log\", '已获取的权限：' + grantedPermission, \" at js_sdk/wa-permission/permission.js:167\");\n        result = 1;\n      }\n      for (var i = 0; i < resultObj.deniedPresent.length; i++) {\n        var deniedPresentPermission = resultObj.deniedPresent[i];\n        __f__(\"log\", '拒绝本次申请的权限：' + deniedPresentPermission, \" at js_sdk/wa-permission/permission.js:172\");\n        result = 0;\n      }\n      for (var i = 0; i < resultObj.deniedAlways.length; i++) {\n        var deniedAlwaysPermission = resultObj.deniedAlways[i];\n        __f__(\"log\", '永久拒绝申请的权限：' + deniedAlwaysPermission, \" at js_sdk/wa-permission/permission.js:177\");\n        result = -1;\n      }\n      resolve(result);\n      // 若所需权限被拒绝,则打开APP设置界面,可以在APP设置界面打开相应权限\n      // if (result != 1) {\n      // gotoAppPermissionSetting()\n      // }\n    }, function (error) {\n      __f__(\"log\", '申请权限错误：' + error.code + \" = \" + error.message, \" at js_sdk/wa-permission/permission.js:187\");\n      resolve({\n        code: error.code,\n        message: error.message\n      });\n    });\n  });\n}\n\n// 使用一个方法，根据参数判断权限\nfunction judgeIosPermission(permissionID) {\n  if (permissionID == \"location\") {\n    return judgeIosPermissionLocation();\n  } else if (permissionID == \"camera\") {\n    return judgeIosPermissionCamera();\n  } else if (permissionID == \"photoLibrary\") {\n    return judgeIosPermissionPhotoLibrary();\n  } else if (permissionID == \"record\") {\n    return judgeIosPermissionRecord();\n  } else if (permissionID == \"push\") {\n    return judgeIosPermissionPush();\n  } else if (permissionID == \"contact\") {\n    return judgeIosPermissionContact();\n  } else if (permissionID == \"calendar\") {\n    return judgeIosPermissionCalendar();\n  } else if (permissionID == \"memo\") {\n    return judgeIosPermissionMemo();\n  }\n  return false;\n}\n\n// 跳转到**应用**的权限页面\nfunction gotoAppPermissionSetting() {\n  if (isIos) {\n    var UIApplication = plus.ios.import(\"UIApplication\");\n    var application2 = UIApplication.sharedApplication();\n    var NSURL2 = plus.ios.import(\"NSURL\");\n    // var setting2 = NSURL2.URLWithString(\"prefs:root=LOCATION_SERVICES\");\t\t\n    var setting2 = NSURL2.URLWithString(\"app-settings:\");\n    application2.openURL(setting2);\n    plus.ios.deleteObject(setting2);\n    plus.ios.deleteObject(NSURL2);\n    plus.ios.deleteObject(application2);\n  } else {\n    // console.log(plus.device.vendor);\n    var Intent = plus.android.importClass(\"android.content.Intent\");\n    var Settings = plus.android.importClass(\"android.provider.Settings\");\n    var Uri = plus.android.importClass(\"android.net.Uri\");\n    var mainActivity = plus.android.runtimeMainActivity();\n    var intent = new Intent();\n    intent.setAction(Settings.ACTION_APPLICATION_DETAILS_SETTINGS);\n    var uri = Uri.fromParts(\"package\", mainActivity.getPackageName(), null);\n    intent.setData(uri);\n    mainActivity.startActivity(intent);\n  }\n}\n\n// 检查系统的设备服务是否开启\n// var checkSystemEnableLocation = async function () {\nfunction checkSystemEnableLocation() {\n  if (isIos) {\n    var result = false;\n    var cllocationManger = plus.ios.import(\"CLLocationManager\");\n    var result = cllocationManger.locationServicesEnabled();\n    __f__(\"log\", \"系统定位开启:\" + result, \" at js_sdk/wa-permission/permission.js:253\");\n    plus.ios.deleteObject(cllocationManger);\n    return result;\n  } else {\n    var context = plus.android.importClass(\"android.content.Context\");\n    var locationManager = plus.android.importClass(\"android.location.LocationManager\");\n    var main = plus.android.runtimeMainActivity();\n    var mainSvr = main.getSystemService(context.LOCATION_SERVICE);\n    var result = mainSvr.isProviderEnabled(locationManager.GPS_PROVIDER);\n    __f__(\"log\", \"系统定位开启:\" + result, \" at js_sdk/wa-permission/permission.js:262\");\n    return result;\n  }\n}\nmodule.exports = {\n  judgeIosPermission: judgeIosPermission,\n  requestAndroidPermission: requestAndroidPermission,\n  checkSystemEnableLocation: checkSystemEnableLocation,\n  gotoAppPermissionSetting: gotoAppPermissionSetting\n};\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 26)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vanNfc2RrL3dhLXBlcm1pc3Npb24vcGVybWlzc2lvbi5qcyJdLCJuYW1lcyI6WyJpc0lvcyIsInBsdXMiLCJvcyIsIm5hbWUiLCJqdWRnZUlvc1Blcm1pc3Npb25QdXNoIiwicmVzdWx0IiwiVUlBcHBsaWNhdGlvbiIsImlvcyIsImltcG9ydCIsImFwcCIsInNoYXJlZEFwcGxpY2F0aW9uIiwiZW5hYmxlZFR5cGVzIiwiY3VycmVudFVzZXJOb3RpZmljYXRpb25TZXR0aW5ncyIsInNldHRpbmdzIiwicGx1c0dldEF0dHJpYnV0ZSIsImRlbGV0ZU9iamVjdCIsImVuYWJsZWRSZW1vdGVOb3RpZmljYXRpb25UeXBlcyIsImp1ZGdlSW9zUGVybWlzc2lvbkxvY2F0aW9uIiwiY2xsb2NhdGlvbk1hbmdlciIsInN0YXR1cyIsImF1dGhvcml6YXRpb25TdGF0dXMiLCJqdWRnZUlvc1Blcm1pc3Npb25SZWNvcmQiLCJhdmF1ZGlvc2Vzc2lvbiIsImF2YXVkaW8iLCJzaGFyZWRJbnN0YW5jZSIsInBlcm1pc3Npb25TdGF0dXMiLCJyZWNvcmRQZXJtaXNzaW9uIiwianVkZ2VJb3NQZXJtaXNzaW9uQ2FtZXJhIiwiQVZDYXB0dXJlRGV2aWNlIiwiYXV0aFN0YXR1cyIsImF1dGhvcml6YXRpb25TdGF0dXNGb3JNZWRpYVR5cGUiLCJqdWRnZUlvc1Blcm1pc3Npb25QaG90b0xpYnJhcnkiLCJQSFBob3RvTGlicmFyeSIsImp1ZGdlSW9zUGVybWlzc2lvbkNvbnRhY3QiLCJDTkNvbnRhY3RTdG9yZSIsImNuQXV0aFN0YXR1cyIsImF1dGhvcml6YXRpb25TdGF0dXNGb3JFbnRpdHlUeXBlIiwianVkZ2VJb3NQZXJtaXNzaW9uQ2FsZW5kYXIiLCJFS0V2ZW50U3RvcmUiLCJla0F1dGhTdGF0dXMiLCJqdWRnZUlvc1Blcm1pc3Npb25NZW1vIiwicmVxdWVzdEFuZHJvaWRQZXJtaXNzaW9uIiwicGVybWlzc2lvbklEIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJhbmRyb2lkIiwicmVxdWVzdFBlcm1pc3Npb25zIiwicmVzdWx0T2JqIiwiaSIsImdyYW50ZWQiLCJsZW5ndGgiLCJncmFudGVkUGVybWlzc2lvbiIsImRlbmllZFByZXNlbnQiLCJkZW5pZWRQcmVzZW50UGVybWlzc2lvbiIsImRlbmllZEFsd2F5cyIsImRlbmllZEFsd2F5c1Blcm1pc3Npb24iLCJlcnJvciIsImNvZGUiLCJtZXNzYWdlIiwianVkZ2VJb3NQZXJtaXNzaW9uIiwiZ290b0FwcFBlcm1pc3Npb25TZXR0aW5nIiwiYXBwbGljYXRpb24yIiwiTlNVUkwyIiwic2V0dGluZzIiLCJVUkxXaXRoU3RyaW5nIiwib3BlblVSTCIsIkludGVudCIsImltcG9ydENsYXNzIiwiU2V0dGluZ3MiLCJVcmkiLCJtYWluQWN0aXZpdHkiLCJydW50aW1lTWFpbkFjdGl2aXR5IiwiaW50ZW50Iiwic2V0QWN0aW9uIiwiQUNUSU9OX0FQUExJQ0FUSU9OX0RFVEFJTFNfU0VUVElOR1MiLCJ1cmkiLCJmcm9tUGFydHMiLCJnZXRQYWNrYWdlTmFtZSIsInNldERhdGEiLCJzdGFydEFjdGl2aXR5IiwiY2hlY2tTeXN0ZW1FbmFibGVMb2NhdGlvbiIsImxvY2F0aW9uU2VydmljZXNFbmFibGVkIiwiY29udGV4dCIsImxvY2F0aW9uTWFuYWdlciIsIm1haW4iLCJtYWluU3ZyIiwiZ2V0U3lzdGVtU2VydmljZSIsIkxPQ0FUSU9OX1NFUlZJQ0UiLCJpc1Byb3ZpZGVyRW5hYmxlZCIsIkdQU19QUk9WSURFUiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJQSxLQUFLO0FBRVRBLEtBQUssR0FBSUMsSUFBSSxDQUFDQyxFQUFFLENBQUNDLElBQUksSUFBSSxLQUFNOztBQUcvQjtBQUNBLFNBQVNDLHNCQUFzQixHQUFHO0VBQ2pDLElBQUlDLE1BQU0sR0FBRyxLQUFLO0VBQ2xCLElBQUlDLGFBQWEsR0FBR0wsSUFBSSxDQUFDTSxHQUFHLENBQUNDLE1B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TSxDQUFDLG1CQUFtQixDQUFDO0lBQzNELElBQUlILE1BQU0sR0FBR2EsZ0JBQWdCLENBQUNnRSx1QkFBdUIsRUFBRTtJQUN2RCxhQUFZLFNBQVMsR0FBRzdFLE1BQU07SUFDOUJKLElBQUksQ0FBQ00sR0FBRyxDQUFDUSxZQUFZLENBQUNHLGdCQUFnQixDQUFDO0lBQ3ZDLE9BQU9iLE1BQU07RUFDZCxDQUFDLE1BQU07SUFDTixJQUFJOEUsT0FBTyxHQUFHbEYsSUFBSSxDQUFDNkMsT0FBTyxDQUFDc0IsV0FBVyxDQUFDLHlCQUF5QixDQUFDO0lBQ2pFLElBQUlnQixlQUFlLEdBQUduRixJQUFJLENBQUM2QyxPQUFPLENBQUNzQixXQUFXLENBQUMsa0NBQWtDLENBQUM7SUFDbEYsSUFBSWlCLElBQUksR0FBR3BGLElBQUksQ0FBQzZDLE9BQU8sQ0FBQzBCLG1CQUFtQixFQUFFO0lBQzdDLElBQUljLE9BQU8sR0FBR0QsSUFBSSxDQUFDRSxnQkFBZ0IsQ0FBQ0osT0FBTyxDQUFDSyxnQkFBZ0IsQ0FBQztJQUM3RCxJQUFJbkYsTUFBTSxHQUFHaUYsT0FBTyxDQUFDRyxpQkFBaUIsQ0FBQ0wsZUFBZSxDQUFDTSxZQUFZLENBQUM7SUFDcEUsYUFBWSxTQUFTLEdBQUdyRixNQUFNO0lBQzlCLE9BQU9BLE1BQU07RUFDZDtBQUNEO0FBRUFzRixNQUFNLENBQUNDLE9BQU8sR0FBRztFQUNoQmhDLGtCQUFrQixFQUFFQSxrQkFBa0I7RUFDdENuQix3QkFBd0IsRUFBRUEsd0JBQXdCO0VBQ2xEd0MseUJBQXlCLEVBQUVBLHlCQUF5QjtFQUNwRHBCLHdCQUF3QixFQUFFQTtBQUMzQixDQUFDLEMiLCJmaWxlIjoiMjcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5pys5qih5Z2X5bCB6KOF5LqGQW5kcm9pZOOAgWlPU+eahOW6lOeUqOadg+mZkOWIpOaWreOAgeaJk+W8gOW6lOeUqOadg+mZkOiuvue9rueVjOmdouOAgeS7peWPiuS9jee9ruezu+e7n+acjeWKoeaYr+WQpuW8gOWQr1xyXG4gKi9cclxuXHJcbnZhciBpc0lvc1xyXG5cclxuaXNJb3MgPSAocGx1cy5vcy5uYW1lID09IFwiaU9TXCIpXHJcblxyXG5cclxuLy8g5Yik5pat5o6o6YCB5p2D6ZmQ5piv5ZCm5byA5ZCvXHJcbmZ1bmN0aW9uIGp1ZGdlSW9zUGVybWlzc2lvblB1c2goKSB7XHJcblx0dmFyIHJlc3VsdCA9IGZhbHNlO1xyXG5cdHZhciBVSUFwcGxpY2F0aW9uID0gcGx1cy5pb3MuaW1wb3J0KFwiVUlBcHBsaWNhdGlvblwiKTtcclxuXHR2YXIgYXBwID0gVUlBcHBsaWNhdGlvbi5zaGFyZWRBcHBsaWNhdGlvbigpO1xyXG5cdHZhciBlbmFibGVkVHlwZXMgPSAwO1xyXG5cdGlmIChhcHAuY3VycmVudFVzZXJOb3RpZmljYXRpb25TZXR0aW5ncykge1xyXG5cdFx0dmFyIHNldHRpbmdzID0gYXBwLmN1cnJlbnRVc2VyTm90aWZpY2F0aW9uU2V0dGluZ3MoKTtcclxuXHRcdGVuYWJsZWRUeXBlcyA9IHNldHRpbmdzLnBsdXNHZXRBdHRyaWJ1dGUoXCJ0eXBlc1wiKTtcclxuXHRcdGNvbnNvbGUubG9nKFwiZW5hYmxlZFR5cGVzMTpcIiArIGVuYWJsZWRUeXBlcyk7XHJcblx0XHRpZiAoZW5hYmxlZFR5cGVzID09IDApIHtcclxuXHRcdFx0Y29uc29sZS5sb2coXCLmjqjpgIHmnYPpmZDmsqHmnInlvIDlkK9cIik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXN1bHQgPSB0cnVlO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIuW3sue7j+W8gOWQr+aOqOmAgeWKn+iDvSFcIilcclxuXHRcdH1cclxuXHRcdHBsdXMuaW9zLmRlbGV0ZU9iamVjdChzZXR0aW5ncyk7XHJcblx0fSBlbHNlIHtcclxuXHRcdGVuYWJsZWRUeXBlcyA9IGFwcC5lbmFibGVkUmVtb3RlTm90aWZpY2F0aW9uVHlwZXMoKTtcclxuXHRcdGlmIChlbmFibGVkVHlwZXMgPT0gMCkge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIuaOqOmAgeadg+mZkOayoeacieW8gOWQryFcIik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXN1bHQgPSB0cnVlO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcIuW3sue7j+W8gOWQr+aOqOmAgeWKn+iDvSFcIilcclxuXHRcdH1cclxuXHRcdGNvbnNvbGUubG9nKFwiZW5hYmxlZFR5cGVzMjpcIiArIGVuYWJsZWRUeXBlcyk7XHJcblx0fVxyXG5cdHBsdXMuaW9zLmRlbGV0ZU9iamVjdChhcHApO1xyXG5cdHBsdXMuaW9zLmRlbGV0ZU9iamVjdChVSUFwcGxpY2F0aW9uKTtcclxuXHRyZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG4vLyDliKTmlq3lrprkvY3mnYPpmZDmmK/lkKblvIDlkK9cclxuZnVuY3Rpb24ganVkZ2VJb3NQZXJtaXNzaW9uTG9jYXRpb24oKSB7XHJcblx0dmFyIHJlc3VsdCA9IGZhbHNlO1xyXG5cdHZhciBjbGxvY2F0aW9uTWFuZ2VyID0gcGx1cy5pb3MuaW1wb3J0KFwiQ0xMb2NhdGlvbk1hbmFnZXJcIik7XHJcblx0dmFyIHN0YXR1cyA9IGNsbG9jYXRpb25NYW5nZXIuYXV0aG9yaXphdGlvblN0YXR1cygpO1xyXG5cdHJlc3VsdCA9IChzdGF0dXMgIT0gMilcclxuXHRjb25zb2xlLmxvZyhcIuWumuS9jeadg+mZkOW8gOWQr++8mlwiICsgcmVzdWx0KTtcclxuXHQvLyDku6XkuIvku6PnoIHliKTmlq3kuobmiYvmnLrorr7lpIfnmoTlrprkvY3mmK/lkKblhbPpl63vvIzmjqjojZDlj6booYzkvb/nlKjmlrnms5UgY2hlY2tTeXN0ZW1FbmFibGVMb2NhdGlvblxyXG5cdC8qIHZhciBlbmFibGUgPSBjbGxvY2F0aW9uTWFuZ2VyLmxvY2F0aW9uU2VydmljZXNFbmFibGVkKCk7XHJcblx0dmFyIHN0YXR1cyA9IGNsbG9jYXRpb25NYW5nZXIuYXV0aG9yaXphdGlvblN0YXR1cygpO1xyXG5cdGNvbnNvbGUubG9nKFwiZW5hYmxlOlwiICsgZW5hYmxlKTtcclxuXHRjb25zb2xlLmxvZyhcInN0YXR1czpcIiArIHN0YXR1cyk7XHJcblx0aWYgKGVuYWJsZSAmJiBzdGF0dXMgIT0gMikge1xyXG5cdFx0cmVzdWx0ID0gdHJ1ZTtcclxuXHRcdGNvbnNvbGUubG9nKFwi5omL5py65a6a5L2N5pyN5Yqh5bey5byA5ZCv5LiU5bey5o6I5LqI5a6a5L2N5p2D6ZmQXCIpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIuaJi+acuuezu+e7n+eahOWumuS9jeayoeacieaJk+W8gOaIluacque7meS6iOWumuS9jeadg+mZkFwiKTtcclxuXHR9ICovXHJcblx0cGx1cy5pb3MuZGVsZXRlT2JqZWN0KGNsbG9jYXRpb25NYW5nZXIpO1xyXG5cdHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbi8vIOWIpOaWrem6puWFi+mjjuadg+mZkOaYr+WQpuW8gOWQr1xyXG5mdW5jdGlvbiBqdWRnZUlvc1Blcm1pc3Npb25SZWNvcmQoKSB7XHJcblx0dmFyIHJlc3VsdCA9IGZhbHNlO1xyXG5cdHZhciBhdmF1ZGlvc2Vzc2lvbiA9IHBsdXMuaW9zLmltcG9ydChcIkFWQXVkaW9TZXNzaW9uXCIpO1xyXG5cdHZhciBhdmF1ZGlvID0gYXZhdWRpb3Nlc3Npb24uc2hhcmVkSW5zdGFuY2UoKTtcclxuXHR2YXIgcGVybWlzc2lvblN0YXR1cyA9IGF2YXVkaW8ucmVjb3JkUGVybWlzc2lvbigpO1xyXG5cdGNvbnNvbGUubG9nKFwicGVybWlzc2lvblN0YXR1czpcIiArIHBlcm1pc3Npb25TdGF0dXMpO1xyXG5cdGlmIChwZXJtaXNzaW9uU3RhdHVzID09IDE2ODQzNjkwMTcgfHwgcGVybWlzc2lvblN0YXR1cyA9PSAxOTcwMTY4OTQ4KSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIum6puWFi+mjjuadg+mZkOayoeacieW8gOWQr1wiKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0cmVzdWx0ID0gdHJ1ZTtcclxuXHRcdGNvbnNvbGUubG9nKFwi6bqm5YWL6aOO5p2D6ZmQ5bey57uP5byA5ZCvXCIpO1xyXG5cdH1cclxuXHRwbHVzLmlvcy5kZWxldGVPYmplY3QoYXZhdWRpb3Nlc3Npb24pO1xyXG5cdHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbi8vIOWIpOaWreebuOacuuadg+mZkOaYr+WQpuW8gOWQr1xyXG5mdW5jdGlvbiBqdWRnZUlvc1Blcm1pc3Npb25DYW1lcmEoKSB7XHJcblx0dmFyIHJlc3VsdCA9IGZhbHNlO1xyXG5cdHZhciBBVkNhcHR1cmVEZXZpY2UgPSBwbHVzLmlvcy5pbXBvcnQoXCJBVkNhcHR1cmVEZXZpY2VcIik7XHJcblx0dmFyIGF1dGhTdGF0dXMgPSBBVkNhcHR1cmVEZXZpY2UuYXV0aG9yaXphdGlvblN0YXR1c0Zvck1lZGlhVHlwZSgndmlkZScpO1xyXG5cdGNvbnNvbGUubG9nKFwiYXV0aFN0YXR1czpcIiArIGF1dGhTdGF0dXMpO1xyXG5cdGlmIChhdXRoU3RhdHVzID09IDMpIHtcclxuXHRcdHJlc3VsdCA9IHRydWU7XHJcblx0XHRjb25zb2xlLmxvZyhcIuebuOacuuadg+mZkOW3sue7j+W8gOWQr1wiKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0Y29uc29sZS5sb2coXCLnm7jmnLrmnYPpmZDmsqHmnInlvIDlkK9cIik7XHJcblx0fVxyXG5cdHBsdXMuaW9zLmRlbGV0ZU9iamVjdChBVkNhcHR1cmVEZXZpY2UpO1xyXG5cdHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbi8vIOWIpOaWreebuOWGjOadg+mZkOaYr+WQpuW8gOWQr1xyXG5mdW5jdGlvbiBqdWRnZUlvc1Blcm1pc3Npb25QaG90b0xpYnJhcnkoKSB7XHJcblx0dmFyIHJlc3VsdCA9IGZhbHNlO1xyXG5cdHZhciBQSFBob3RvTGlicmFyeSA9IHBsdXMuaW9zLmltcG9ydChcIlBIUGhvdG9MaWJyYXJ5XCIpO1xyXG5cdHZhciBhdXRoU3RhdHVzID0gUEhQaG90b0xpYnJhcnkuYXV0aG9yaXphdGlvblN0YXR1cygpO1xyXG5cdGNvbnNvbGUubG9nKFwiYXV0aFN0YXR1czpcIiArIGF1dGhTdGF0dXMpO1xyXG5cdGlmIChhdXRoU3RhdHVzID09IDMpIHtcclxuXHRcdHJlc3VsdCA9IHRydWU7XHJcblx0XHRjb25zb2xlLmxvZyhcIuebuOWGjOadg+mZkOW3sue7j+W8gOWQr1wiKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0Y29uc29sZS5sb2coXCLnm7jlhozmnYPpmZDmsqHmnInlvIDlkK9cIik7XHJcblx0fVxyXG5cdHBsdXMuaW9zLmRlbGV0ZU9iamVjdChQSFBob3RvTGlicmFyeSk7XHJcblx0cmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuLy8g5Yik5pat6YCa6K6v5b2V5p2D6ZmQ5piv5ZCm5byA5ZCvXHJcbmZ1bmN0aW9uIGp1ZGdlSW9zUGVybWlzc2lvbkNvbnRhY3QoKSB7XHJcblx0dmFyIHJlc3VsdCA9IGZhbHNlO1xyXG5cdHZhciBDTkNvbnRhY3RTdG9yZSA9IHBsdXMuaW9zLmltcG9ydChcIkNOQ29udGFjdFN0b3JlXCIpO1xyXG5cdHZhciBjbkF1dGhTdGF0dXMgPSBDTkNvbnRhY3RTdG9yZS5hdXRob3JpemF0aW9uU3RhdHVzRm9yRW50aXR5VHlwZSgwKTtcclxuXHRpZiAoY25BdXRoU3RhdHVzID09IDMpIHtcclxuXHRcdHJlc3VsdCA9IHRydWU7XHJcblx0XHRjb25zb2xlLmxvZyhcIumAmuiur+W9leadg+mZkOW3sue7j+W8gOWQr1wiKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0Y29uc29sZS5sb2coXCLpgJrorq/lvZXmnYPpmZDmsqHmnInlvIDlkK9cIik7XHJcblx0fVxyXG5cdHBsdXMuaW9zLmRlbGV0ZU9iamVjdChDTkNvbnRhY3RTdG9yZSk7XHJcblx0cmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuLy8g5Yik5pat5pel5Y6G5p2D6ZmQ5piv5ZCm5byA5ZCvXHJcbmZ1bmN0aW9uIGp1ZGdlSW9zUGVybWlzc2lvbkNhbGVuZGFyKCkge1xyXG5cdHZhciByZXN1bHQgPSBmYWxzZTtcclxuXHR2YXIgRUtFdmVudFN0b3JlID0gcGx1cy5pb3MuaW1wb3J0KFwiRUtFdmVudFN0b3JlXCIpO1xyXG5cdHZhciBla0F1dGhTdGF0dXMgPSBFS0V2ZW50U3RvcmUuYXV0aG9yaXphdGlvblN0YXR1c0ZvckVudGl0eVR5cGUoMCk7XHJcblx0aWYgKGVrQXV0aFN0YXR1cyA9PSAzKSB7XHJcblx0XHRyZXN1bHQgPSB0cnVlO1xyXG5cdFx0Y29uc29sZS5sb2coXCLml6XljobmnYPpmZDlt7Lnu4/lvIDlkK9cIik7XHJcblx0fSBlbHNlIHtcclxuXHRcdGNvbnNvbGUubG9nKFwi5pel5Y6G5p2D6ZmQ5rKh5pyJ5byA5ZCvXCIpO1xyXG5cdH1cclxuXHRwbHVzLmlvcy5kZWxldGVPYmplY3QoRUtFdmVudFN0b3JlKTtcclxuXHRyZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG4vLyDliKTmlq3lpIflv5jlvZXmnYPpmZDmmK/lkKblvIDlkK9cclxuZnVuY3Rpb24ganVkZ2VJb3NQZXJtaXNzaW9uTWVtbygpIHtcclxuXHR2YXIgcmVzdWx0ID0gZmFsc2U7XHJcblx0dmFyIEVLRXZlbnRTdG9yZSA9IHBsdXMuaW9zLmltcG9ydChcIkVLRXZlbnRTdG9yZVwiKTtcclxuXHR2YXIgZWtBdXRoU3RhdHVzID0gRUtFdmVudFN0b3JlLmF1dGhvcml6YXRpb25TdGF0dXNGb3JFbnRpdHlUeXBlKDEpO1xyXG5cdGlmIChla0F1dGhTdGF0dXMgPT0gMykge1xyXG5cdFx0cmVzdWx0ID0gdHJ1ZTtcclxuXHRcdGNvbnNvbGUubG9nKFwi5aSH5b+Y5b2V5p2D6ZmQ5bey57uP5byA5ZCvXCIpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRjb25zb2xlLmxvZyhcIuWkh+W/mOW9leadg+mZkOayoeacieW8gOWQr1wiKTtcclxuXHR9XHJcblx0cGx1cy5pb3MuZGVsZXRlT2JqZWN0KEVLRXZlbnRTdG9yZSk7XHJcblx0cmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuLy8gQW5kcm9pZOadg+mZkOafpeivolxyXG5mdW5jdGlvbiByZXF1ZXN0QW5kcm9pZFBlcm1pc3Npb24ocGVybWlzc2lvbklEKSB7XHJcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuXHRcdHBsdXMuYW5kcm9pZC5yZXF1ZXN0UGVybWlzc2lvbnMoXHJcblx0XHRcdFtwZXJtaXNzaW9uSURdLCAvLyDnkIborrrkuIrmlK/mjIHlpJrkuKrmnYPpmZDlkIzml7bmn6Xor6LvvIzkvYblrp7pmYXkuIrmnKzlh73mlbDlsIHoo4Xlj6rlpITnkIbkuobkuIDkuKrmnYPpmZDnmoTmg4XlhrXjgILmnInpnIDopoHnmoTlj6/oh6rooYzmianlsZXlsIHoo4VcclxuXHRcdFx0ZnVuY3Rpb24ocmVzdWx0T2JqKSB7XHJcblx0XHRcdFx0dmFyIHJlc3VsdCA9IDA7XHJcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCByZXN1bHRPYmouZ3JhbnRlZC5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0dmFyIGdyYW50ZWRQZXJtaXNzaW9uID0gcmVzdWx0T2JqLmdyYW50ZWRbaV07XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZygn5bey6I635Y+W55qE5p2D6ZmQ77yaJyArIGdyYW50ZWRQZXJtaXNzaW9uKTtcclxuXHRcdFx0XHRcdHJlc3VsdCA9IDFcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCByZXN1bHRPYmouZGVuaWVkUHJlc2VudC5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0dmFyIGRlbmllZFByZXNlbnRQZXJtaXNzaW9uID0gcmVzdWx0T2JqLmRlbmllZFByZXNlbnRbaV07XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZygn5ouS57ud5pys5qyh55Sz6K+355qE5p2D6ZmQ77yaJyArIGRlbmllZFByZXNlbnRQZXJtaXNzaW9uKTtcclxuXHRcdFx0XHRcdHJlc3VsdCA9IDBcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCByZXN1bHRPYmouZGVuaWVkQWx3YXlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHR2YXIgZGVuaWVkQWx3YXlzUGVybWlzc2lvbiA9IHJlc3VsdE9iai5kZW5pZWRBbHdheXNbaV07XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZygn5rC45LmF5ouS57ud55Sz6K+355qE5p2D6ZmQ77yaJyArIGRlbmllZEFsd2F5c1Blcm1pc3Npb24pO1xyXG5cdFx0XHRcdFx0cmVzdWx0ID0gLTFcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmVzb2x2ZShyZXN1bHQpO1xyXG5cdFx0XHRcdC8vIOiLpeaJgOmcgOadg+mZkOiiq+aLkue7nSzliJnmiZPlvIBBUFDorr7nva7nlYzpnaIs5Y+v5Lul5ZyoQVBQ6K6+572u55WM6Z2i5omT5byA55u45bqU5p2D6ZmQXHJcblx0XHRcdFx0Ly8gaWYgKHJlc3VsdCAhPSAxKSB7XHJcblx0XHRcdFx0Ly8gZ290b0FwcFBlcm1pc3Npb25TZXR0aW5nKClcclxuXHRcdFx0XHQvLyB9XHJcblx0XHRcdH0sXHJcblx0XHRcdGZ1bmN0aW9uKGVycm9yKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ+eUs+ivt+adg+mZkOmUmeivr++8micgKyBlcnJvci5jb2RlICsgXCIgPSBcIiArIGVycm9yLm1lc3NhZ2UpO1xyXG5cdFx0XHRcdHJlc29sdmUoe1xyXG5cdFx0XHRcdFx0Y29kZTogZXJyb3IuY29kZSxcclxuXHRcdFx0XHRcdG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2VcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0KTtcclxuXHR9KTtcclxufVxyXG5cclxuLy8g5L2/55So5LiA5Liq5pa55rOV77yM5qC55o2u5Y+C5pWw5Yik5pat5p2D6ZmQXHJcbmZ1bmN0aW9uIGp1ZGdlSW9zUGVybWlzc2lvbihwZXJtaXNzaW9uSUQpIHtcclxuXHRpZiAocGVybWlzc2lvbklEID09IFwibG9jYXRpb25cIikge1xyXG5cdFx0cmV0dXJuIGp1ZGdlSW9zUGVybWlzc2lvbkxvY2F0aW9uKClcclxuXHR9IGVsc2UgaWYgKHBlcm1pc3Npb25JRCA9PSBcImNhbWVyYVwiKSB7XHJcblx0XHRyZXR1cm4ganVkZ2VJb3NQZXJtaXNzaW9uQ2FtZXJhKClcclxuXHR9IGVsc2UgaWYgKHBlcm1pc3Npb25JRCA9PSBcInBob3RvTGlicmFyeVwiKSB7XHJcblx0XHRyZXR1cm4ganVkZ2VJb3NQZXJtaXNzaW9uUGhvdG9MaWJyYXJ5KClcclxuXHR9IGVsc2UgaWYgKHBlcm1pc3Npb25JRCA9PSBcInJlY29yZFwiKSB7XHJcblx0XHRyZXR1cm4ganVkZ2VJb3NQZXJtaXNzaW9uUmVjb3JkKClcclxuXHR9IGVsc2UgaWYgKHBlcm1pc3Npb25JRCA9PSBcInB1c2hcIikge1xyXG5cdFx0cmV0dXJuIGp1ZGdlSW9zUGVybWlzc2lvblB1c2goKVxyXG5cdH0gZWxzZSBpZiAocGVybWlzc2lvbklEID09IFwiY29udGFjdFwiKSB7XHJcblx0XHRyZXR1cm4ganVkZ2VJb3NQZXJtaXNzaW9uQ29udGFjdCgpXHJcblx0fSBlbHNlIGlmIChwZXJtaXNzaW9uSUQgPT0gXCJjYWxlbmRhclwiKSB7XHJcblx0XHRyZXR1cm4ganVkZ2VJb3NQZXJtaXNzaW9uQ2FsZW5kYXIoKVxyXG5cdH0gZWxzZSBpZiAocGVybWlzc2lvbklEID09IFwibWVtb1wiKSB7XHJcblx0XHRyZXR1cm4ganVkZ2VJb3NQZXJtaXNzaW9uTWVtbygpXHJcblx0fVxyXG5cdHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuLy8g6Lez6L2s5YiwKirlupTnlKgqKueahOadg+mZkOmhtemdolxyXG5mdW5jdGlvbiBnb3RvQXBwUGVybWlzc2lvblNldHRpbmcoKSB7XHJcblx0aWYgKGlzSW9zKSB7XHJcblx0XHR2YXIgVUlBcHBsaWNhdGlvbiA9IHBsdXMuaW9zLmltcG9ydChcIlVJQXBwbGljYXRpb25cIik7XHJcblx0XHR2YXIgYXBwbGljYXRpb24yID0gVUlBcHBsaWNhdGlvbi5zaGFyZWRBcHBsaWNhdGlvbigpO1xyXG5cdFx0dmFyIE5TVVJMMiA9IHBsdXMuaW9zLmltcG9ydChcIk5TVVJMXCIpO1xyXG5cdFx0Ly8gdmFyIHNldHRpbmcyID0gTlNVUkwyLlVSTFdpdGhTdHJpbmcoXCJwcmVmczpyb290PUxPQ0FUSU9OX1NFUlZJQ0VTXCIpO1x0XHRcclxuXHRcdHZhciBzZXR0aW5nMiA9IE5TVVJMMi5VUkxXaXRoU3RyaW5nKFwiYXBwLXNldHRpbmdzOlwiKTtcclxuXHRcdGFwcGxpY2F0aW9uMi5vcGVuVVJMKHNldHRpbmcyKTtcclxuXHJcblx0XHRwbHVzLmlvcy5kZWxldGVPYmplY3Qoc2V0dGluZzIpO1xyXG5cdFx0cGx1cy5pb3MuZGVsZXRlT2JqZWN0KE5TVVJMMik7XHJcblx0XHRwbHVzLmlvcy5kZWxldGVPYmplY3QoYXBwbGljYXRpb24yKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0Ly8gY29uc29sZS5sb2cocGx1cy5kZXZpY2UudmVuZG9yKTtcclxuXHRcdHZhciBJbnRlbnQgPSBwbHVzLmFuZHJvaWQuaW1wb3J0Q2xhc3MoXCJhbmRyb2lkLmNvbnRlbnQuSW50ZW50XCIpO1xyXG5cdFx0dmFyIFNldHRpbmdzID0gcGx1cy5hbmRyb2lkLmltcG9ydENsYXNzKFwiYW5kcm9pZC5wcm92aWRlci5TZXR0aW5nc1wiKTtcclxuXHRcdHZhciBVcmkgPSBwbHVzLmFuZHJvaWQuaW1wb3J0Q2xhc3MoXCJhbmRyb2lkLm5ldC5VcmlcIik7XHJcblx0XHR2YXIgbWFpbkFjdGl2aXR5ID0gcGx1cy5hbmRyb2lkLnJ1bnRpbWVNYWluQWN0aXZpdHkoKTtcclxuXHRcdHZhciBpbnRlbnQgPSBuZXcgSW50ZW50KCk7XHJcblx0XHRpbnRlbnQuc2V0QWN0aW9uKFNldHRpbmdzLkFDVElPTl9BUFBMSUNBVElPTl9ERVRBSUxTX1NFVFRJTkdTKTtcclxuXHRcdHZhciB1cmkgPSBVcmkuZnJvbVBhcnRzKFwicGFja2FnZVwiLCBtYWluQWN0aXZpdHkuZ2V0UGFja2FnZU5hbWUoKSwgbnVsbCk7XHJcblx0XHRpbnRlbnQuc2V0RGF0YSh1cmkpO1xyXG5cdFx0bWFpbkFjdGl2aXR5LnN0YXJ0QWN0aXZpdHkoaW50ZW50KTtcclxuXHR9XHJcbn1cclxuXHJcbi8vIOajgOafpeezu+e7n+eahOiuvuWkh+acjeWKoeaYr+WQpuW8gOWQr1xyXG4vLyB2YXIgY2hlY2tTeXN0ZW1FbmFibGVMb2NhdGlvbiA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuZnVuY3Rpb24gY2hlY2tTeXN0ZW1FbmFibGVMb2NhdGlvbigpIHtcclxuXHRpZiAoaXNJb3MpIHtcclxuXHRcdHZhciByZXN1bHQgPSBmYWxzZTtcclxuXHRcdHZhciBjbGxvY2F0aW9uTWFuZ2VyID0gcGx1cy5pb3MuaW1wb3J0KFwiQ0xMb2NhdGlvbk1hbmFnZXJcIik7XHJcblx0XHR2YXIgcmVzdWx0ID0gY2xsb2NhdGlvbk1hbmdlci5sb2NhdGlvblNlcnZpY2VzRW5hYmxlZCgpO1xyXG5cdFx0Y29uc29sZS5sb2coXCLns7vnu5/lrprkvY3lvIDlkK86XCIgKyByZXN1bHQpO1xyXG5cdFx0cGx1cy5pb3MuZGVsZXRlT2JqZWN0KGNsbG9jYXRpb25NYW5nZXIpO1xyXG5cdFx0cmV0dXJuIHJlc3VsdDtcclxuXHR9IGVsc2Uge1xyXG5cdFx0dmFyIGNvbnRleHQgPSBwbHVzLmFuZHJvaWQuaW1wb3J0Q2xhc3MoXCJhbmRyb2lkLmNvbnRlbnQuQ29udGV4dFwiKTtcclxuXHRcdHZhciBsb2NhdGlvbk1hbmFnZXIgPSBwbHVzLmFuZHJvaWQuaW1wb3J0Q2xhc3MoXCJhbmRyb2lkLmxvY2F0aW9uLkxvY2F0aW9uTWFuYWdlclwiKTtcclxuXHRcdHZhciBtYWluID0gcGx1cy5hbmRyb2lkLnJ1bnRpbWVNYWluQWN0aXZpdHkoKTtcclxuXHRcdHZhciBtYWluU3ZyID0gbWFpbi5nZXRTeXN0ZW1TZXJ2aWNlKGNvbnRleHQuTE9DQVRJT05fU0VSVklDRSk7XHJcblx0XHR2YXIgcmVzdWx0ID0gbWFpblN2ci5pc1Byb3ZpZGVyRW5hYmxlZChsb2NhdGlvbk1hbmFnZXIuR1BTX1BST1ZJREVSKTtcclxuXHRcdGNvbnNvbGUubG9nKFwi57O757uf5a6a5L2N5byA5ZCvOlwiICsgcmVzdWx0KTtcclxuXHRcdHJldHVybiByZXN1bHRcclxuXHR9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGp1ZGdlSW9zUGVybWlzc2lvbjoganVkZ2VJb3NQZXJtaXNzaW9uLFxyXG5cdHJlcXVlc3RBbmRyb2lkUGVybWlzc2lvbjogcmVxdWVzdEFuZHJvaWRQZXJtaXNzaW9uLFxyXG5cdGNoZWNrU3lzdGVtRW5hYmxlTG9jYXRpb246IGNoZWNrU3lzdGVtRW5hYmxlTG9jYXRpb24sXHJcblx0Z290b0FwcFBlcm1pc3Npb25TZXR0aW5nOiBnb3RvQXBwUGVybWlzc2lvblNldHRpbmdcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///27\n");

/***/ })
],[[0,"app-config"]]]);