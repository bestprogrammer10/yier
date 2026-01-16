(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/login/login"],{

/***/ 34:
/*!*****************************************************************************!*\
  !*** D:/ideaworkspace/yier/uniapp/main.js?{"page":"pages%2Flogin%2Flogin"} ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _login = _interopRequireDefault(__webpack_require__(/*! ./pages/login/login.vue */ 35));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_login.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 35:
/*!**********************************************************!*\
  !*** D:/ideaworkspace/yier/uniapp/pages/login/login.vue ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_vue_vue_type_template_id_b237504c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.vue?vue&type=template&id=b237504c&scoped=true& */ 36);
/* harmony import */ var _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.vue?vue&type=script&lang=js& */ 38);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _login_vue_vue_type_style_index_0_id_b237504c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.vue?vue&type=style&index=0&id=b237504c&scoped=true&lang=css& */ 44);
/* harmony import */ var _googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../googledownload/HBuilderX.4.87.2025121004/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 33);

var renderjs





/* normalize component */

var component = Object(_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _login_vue_vue_type_template_id_b237504c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _login_vue_vue_type_template_id_b237504c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "b237504c",
  null,
  false,
  _login_vue_vue_type_template_id_b237504c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/login/login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 36:
/*!*****************************************************************************************************!*\
  !*** D:/ideaworkspace/yier/uniapp/pages/login/login.vue?vue&type=template&id=b237504c&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_template_id_b237504c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../googledownload/HBuilderX.4.87.2025121004/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../googledownload/HBuilderX.4.87.2025121004/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../googledownload/HBuilderX.4.87.2025121004/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../googledownload/HBuilderX.4.87.2025121004/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../googledownload/HBuilderX.4.87.2025121004/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../googledownload/HBuilderX.4.87.2025121004/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./login.vue?vue&type=template&id=b237504c&scoped=true& */ 37);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_template_id_b237504c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_template_id_b237504c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_template_id_b237504c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_template_id_b237504c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 37:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/ideaworkspace/yier/uniapp/pages/login/login.vue?vue&type=template&id=b237504c&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 38:
/*!***********************************************************************************!*\
  !*** D:/ideaworkspace/yier/uniapp/pages/login/login.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../googledownload/HBuilderX.4.87.2025121004/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../googledownload/HBuilderX.4.87.2025121004/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../googledownload/HBuilderX.4.87.2025121004/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../googledownload/HBuilderX.4.87.2025121004/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../googledownload/HBuilderX.4.87.2025121004/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./login.vue?vue&type=script&lang=js& */ 39);
/* harmony import */ var _googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 39:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/ideaworkspace/yier/uniapp/pages/login/login.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 40));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 42));
var _request = __webpack_require__(/*! @/utils/request */ 30);
var _utils = __webpack_require__(/*! @/utils/utils */ 43);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/**
 * 记账小程序登录页面逻辑 - uniapp 版本
 * 遵循 SOLID 原则：单一职责，易于维护
 */
var _default = {
  data: function data() {
    return {
      // 登录方式切换
      activeTab: 'wechat',
      // 'wechat' | 'phone'

      // 手机号登录相关
      phone: '',
      code: '',
      canSendCode: false,
      canLogin: false,
      countdown: 60,
      timer: null,
      // 状态控制
      loading: false,
      privacyAgreed: true
    };
  },
  methods: {
    /**
     * 切换登录方式
     */
    switchTab: function switchTab(tab) {
      this.activeTab = tab;
    },
    /**
     * 手机号输入处理
     */
    handlePhoneInput: function handlePhoneInput(e) {
      this.phone = e.detail.value.trim();
      this.validateForm();
    },
    /**
     * 验证码输入处理
     */
    handleCodeInput: function handleCodeInput(e) {
      this.code = e.detail.value.trim();
      this.validateForm();
    },
    /**
     * 清空手机号
     */
    clearPhone: function clearPhone() {
      this.phone = '';
      this.validateForm();
    },
    /**
     * 表单验证
     */
    validateForm: function validateForm() {
      // 验证码按钮状态
      this.canSendCode = (0, _utils.validatePhone)(this.phone);

      // 登录按钮状态
      this.canLogin = this.canSendCode && this.code.length === 6 && this.privacyAgreed;
    },
    /**
     * 发送验证码
     */
    sendCode: function sendCode() {
      var _this = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (_this.canSendCode) {
                  _context.next = 3;
                  break;
                }
                _this.showToast('请输入正确的手机号');
                return _context.abrupt("return");
              case 3:
                // 调用后端API发送验证码
                _this.loading = true;
                _context.prev = 4;
                _context.next = 7;
                return _this.mockSendCodeAPI();
              case 7:
                _this.showToast('验证码已发送');
                _this.startCountdown();
                _context.next = 14;
                break;
              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](4);
                _this.showToast('发送失败，请重试');
              case 14:
                _context.prev = 14;
                _this.loading = false;
                return _context.finish(14);
              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[4, 11, 14, 17]]);
      }))();
    },
    /**
     * 模拟验证码发送API
     */
    mockSendCodeAPI: function mockSendCodeAPI() {
      var _this2 = this;
      return new Promise(function (resolve) {
        setTimeout(function () {
          console.log("\u9A8C\u8BC1\u7801\u5DF2\u53D1\u9001\u81F3: ".concat(_this2.phone));
          resolve();
        }, 1000);
      });
    },
    /**
     * 开始倒计时
     */
    startCountdown: function startCountdown() {
      var _this3 = this;
      var countdown = 60;
      this.countdown = countdown;
      this.timer = setInterval(function () {
        countdown--;
        if (countdown <= 0) {
          clearInterval(_this3.timer);
          _this3.timer = null;
          _this3.countdown = 0;
        } else {
          _this3.countdown = countdown;
        }
      }, 1000);
    },
    /**
     * 隐私协议切换
     */
    togglePrivacy: function togglePrivacy(e) {
      this.privacyAgreed = e.detail.value.length > 0;
      this.validateForm();
    },
    /**
     * 微信登录处理
     */
    handleWechatLogin: function handleWechatLogin(e) {
      var _this4 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        var userInfo;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (_this4.privacyAgreed) {
                  _context2.next = 3;
                  break;
                }
                _this4.showToast('请先同意隐私协议');
                return _context2.abrupt("return");
              case 3:
                _this4.loading = true;
                _context2.prev = 4;
                // 获取用户信息
                userInfo = e.detail.userInfo;
                if (userInfo) {
                  _context2.next = 9;
                  break;
                }
                _this4.showToast('需要授权才能继续');
                return _context2.abrupt("return");
              case 9:
                _context2.next = 11;
                return _this4.mockWechatLogin(userInfo);
              case 11:
                _this4.showToast('登录成功');

                // 延迟跳转，让用户看到成功提示
                setTimeout(function () {
                  _this4.navigateToHome();
                }, 1000);
                _context2.next = 18;
                break;
              case 15:
                _context2.prev = 15;
                _context2.t0 = _context2["catch"](4);
                _this4.showToast('登录失败，请重试');
              case 18:
                _context2.prev = 18;
                _this4.loading = false;
                return _context2.finish(18);
              case 21:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[4, 15, 18, 21]]);
      }))();
    },
    /**
     * 手机号登录处理
     */
    handlePhoneLogin: function handlePhoneLogin() {
      var _this5 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
        var result;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (_this5.canLogin) {
                  _context3.next = 2;
                  break;
                }
                return _context3.abrupt("return");
              case 2:
                _this5.loading = true;
                _context3.prev = 3;
                _context3.next = 6;
                return _request.request.post('/user/login/phone', {
                  phone: _this5.phone,
                  code: _this5.code
                });
              case 6:
                result = _context3.sent;
                // 保存token和用户信息
                _request.app.setToken(result.token);
                _request.app.setUserInfo(result.userInfo);
                _this5.showToast('登录成功');

                // 延迟跳转
                setTimeout(function () {
                  _this5.navigateToHome();
                }, 1000);
                _context3.next = 16;
                break;
              case 13:
                _context3.prev = 13;
                _context3.t0 = _context3["catch"](3);
                _this5.showToast('登录失败，请检查验证码');
              case 16:
                _context3.prev = 16;
                _this5.loading = false;
                return _context3.finish(16);
              case 19:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[3, 13, 16, 19]]);
      }))();
    },
    /**
     * 模拟微信登录API
     */
    mockWechatLogin: function mockWechatLogin(userInfo) {
      return new Promise(function (resolve) {
        setTimeout(function () {
          // 模拟登录成功，存储用户信息
          var loginData = {
            openid: 'mock_openid_' + Date.now(),
            sessionKey: 'mock_session_' + Date.now(),
            userInfo: userInfo,
            loginType: 'wechat'
          };

          // 存储到本地（实际项目中应存储到storage）
          console.log('登录数据:', loginData);
          resolve(loginData);
        }, 1500);
      });
    },
    /**
     * 跳转到首页
     */
    navigateToHome: function navigateToHome() {
      // 清理定时器
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }

      // 跳转到首页
      uni.reLaunch({
        url: '/pages/index/index',
        success: function success() {
          console.log('跳转成功');
        },
        fail: function fail(err) {
          console.error('跳转失败:', err);
        }
      });
    },
    /**
     * 显示隐私协议
     */
    showPrivacy: function showPrivacy() {
      this.showToast('隐私协议内容...');
      // 实际项目中跳转到协议页面
    },
    /**
     * 显示用户协议
     */
    showPolicy: function showPolicy() {
      this.showToast('用户协议内容...');
      // 实际项目中跳转到协议页面
    },
    /**
     * 快速填写（测试用）
     */
    quickFill: function quickFill() {
      this.phone = '13800138000';
      this.code = '123456';
      this.validateForm();
      this.showToast('已自动填充测试数据');
    },
    /**
     * 测试模式（演示用）
     */
    testMode: function testMode() {
      this.activeTab = 'phone';
      this.phone = '13800138000';
      this.code = '123456';
      this.validateForm();
      this.showToast('测试模式已启用');
    },
    /**
     * 显示Toast提示
     */
    showToast: function showToast(message) {
      uni.showToast({
        title: message,
        icon: 'none',
        duration: 2000
      });
    }
  },
  /**
   * 生命周期函数 - 页面加载
   */
  onLoad: function onLoad(options) {
    console.log('登录页面加载', options);

    // 可以在这里检查是否已经登录
    this.checkLoginStatus();
  },
  /**
   * 检查登录状态
   */
  checkLoginStatus: function checkLoginStatus() {
    // 实际项目中检查本地存储的token
    // 如果已登录，直接跳转到首页
    // const token = uni.getStorageSync('token');
    // if (token) {
    //   uni.reLaunch({ url: '/pages/index/index' });
    // }
  },
  /**
   * 生命周期函数 - 页面显示
   */
  onShow: function onShow() {
    // 每次显示页面时的处理
  },
  /**
   * 生命周期函数 - 页面卸载
   */
  onUnload: function onUnload() {
    // 清理资源
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 44:
/*!*******************************************************************************************************************!*\
  !*** D:/ideaworkspace/yier/uniapp/pages/login/login.vue?vue&type=style&index=0&id=b237504c&scoped=true&lang=css& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_style_index_0_id_b237504c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../googledownload/HBuilderX.4.87.2025121004/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../googledownload/HBuilderX.4.87.2025121004/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../googledownload/HBuilderX.4.87.2025121004/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../googledownload/HBuilderX.4.87.2025121004/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../googledownload/HBuilderX.4.87.2025121004/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../googledownload/HBuilderX.4.87.2025121004/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../googledownload/HBuilderX.4.87.2025121004/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./login.vue?vue&type=style&index=0&id=b237504c&scoped=true&lang=css& */ 45);
/* harmony import */ var _googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_style_index_0_id_b237504c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_style_index_0_id_b237504c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_style_index_0_id_b237504c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_style_index_0_id_b237504c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_googledownload_HBuilderX_4_87_2025121004_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_login_vue_vue_type_style_index_0_id_b237504c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 45:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/ideaworkspace/yier/uniapp/pages/login/login.vue?vue&type=style&index=0&id=b237504c&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[34,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/login/login.js.map