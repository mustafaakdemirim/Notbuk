"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_signup_signup_module_ts"],{

/***/ 1471:
/*!*************************************************!*\
  !*** ./src/app/signup/signup-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPageRoutingModule": () => (/* binding */ SignupPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup.page */ 8085);




const routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_0__.SignupPage
    }
];
let SignupPageRoutingModule = class SignupPageRoutingModule {
};
SignupPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SignupPageRoutingModule);



/***/ }),

/***/ 2759:
/*!*****************************************!*\
  !*** ./src/app/signup/signup.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPageModule": () => (/* binding */ SignupPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup-routing.module */ 1471);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page */ 8085);







let SignupPageModule = class SignupPageModule {
};
SignupPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__.SignupPageRoutingModule
        ],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_1__.SignupPage]
    })
], SignupPageModule);



/***/ }),

/***/ 8085:
/*!***************************************!*\
  !*** ./src/app/signup/signup.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPage": () => (/* binding */ SignupPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _Users_mustafaakdemir_Desktop_notbuk_node_modules_ngtools_webpack_src_loaders_direct_resource_js_signup_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./signup.page.html */ 6497);
/* harmony import */ var _signup_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page.scss */ 5145);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _firestore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firestore.service */ 2788);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);






let SignupPage = class SignupPage {
    constructor(firestoreservis, router) {
        this.firestoreservis = firestoreservis;
        this.router = router;
    }
    ngOnInit() {
    }
    kayitOl() {
        if (!this.eposta) {
            return;
        }
        // eslint-disable-next-line prefer-const
        let kullanici = {
            parola: this.parola,
            eposta: this.eposta
        };
        // eslint-disable-next-line max-len
        this.firestoreservis.KayitOl(kullanici).then(() => this.router.navigateByUrl('/home')).catch(error => { console.log(error); this.girisHata = error.message; });
    }
};
SignupPage.ctorParameters = () => [
    { type: _firestore_service__WEBPACK_IMPORTED_MODULE_2__.FirestoreService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
SignupPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-signup',
        template: _Users_mustafaakdemir_Desktop_notbuk_node_modules_ngtools_webpack_src_loaders_direct_resource_js_signup_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_signup_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], SignupPage);



/***/ }),

/***/ 6497:
/*!********************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/signup/signup.page.html ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-icon  style=\"margin-left: 150px;\" name=\"person-add\"></ion-icon>\n    <ion-title style=\"margin-left: 20px;\">Kayıt Ol</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div id=\"hero\">\n    <video src=\"assets/background/logindAndSignupBackground.mp4\" autoplay loop muted></video>\n    <div id=\"content\">\n      <img style=\"margin-left: 100px; margin-top: 150px;\" src=\"assets/background/logo.png\" width=\"185px\" height=\"185px\">\n      <div class=\"container\" style=\"margin-top: 50px;\">\n      <ion-list inset>\n        <ion-item>\n          <ion-input type=\"text\" placeholder=\"E-Posta\" [(ngModel)]=\"eposta\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-input type=\"password\" placeholder=\"Parola\" [(ngModel)]=\"parola\"></ion-input>\n        </ion-item>\n      </ion-list>\n\n      <div class=\"ion-padding-horizontal\">\n        <div>{{girisHata}}</div>\n\n        <ion-button (click)=\"kayitOl()\">\n          <ion-icon  slot=\"start\" name=\"person-add\"></ion-icon>\n          Kayıt Ol\n        </ion-button>\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n        <ion-button ion-button icon-left block clear [routerLink]=\"['/login']\">\n          <ion-icon slot=\"start\" name=\"key\"></ion-icon>\n          Giriş Yap\n        </ion-button>\n      </div>\n        </div>\n      </div>\n    </div>\n</ion-content>\n");

/***/ }),

/***/ 5145:
/*!*****************************************!*\
  !*** ./src/app/signup/signup.page.scss ***!
  \*****************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  margin: 0;\n  padding: 0;\n}\n\n#hero {\n  position: relative;\n}\n\nvideo {\n  height: 100vh;\n  width: 100%;\n  background-position: absolute;\n  z-index: 10;\n  object-fit: cover;\n}\n\n#hero > #content {\n  height: 100%;\n  width: 100%;\n  z-index: 20;\n  position: absolute;\n  top: 0;\n  left: 0;\n  align-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBYyxTQUFBO0VBQVUsVUFBQTtBQUd4Qjs7QUFGQTtFQUNFLGtCQUFBO0FBS0Y7O0FBSEE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBTUY7O0FBSEE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EscUJBQUE7QUFNRiIsImZpbGUiOiJzaWdudXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQgeyBtYXJnaW46MDsgcGFkZGluZzowO31cbiNoZXJvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxudmlkZW8ge1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEwO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuI2hlcm8+I2NvbnRlbnQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAyMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_signup_signup_module_ts.js.map