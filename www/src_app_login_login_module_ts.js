"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_login_login_module_ts"],{

/***/ 2359:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 955);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 9549:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 2359);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 955);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 955:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _Users_mustafaakdemir_Desktop_notbuk_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./login.page.html */ 9403);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 6051);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _firestore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firestore.service */ 2788);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 8099);







let LoginPage = class LoginPage {
    constructor(alertController, firestoreservis, router) {
        this.alertController = alertController;
        this.firestoreservis = firestoreservis;
        this.router = router;
    }
    ngOnInit() {
    }
    login() {
        if (!this.eposta) {
            return;
        }
        // eslint-disable-next-line prefer-const
        let kullanici = {
            parola: this.parola,
            eposta: this.eposta
        };
        // eslint-disable-next-line max-len
        this.firestoreservis.GirisYap(kullanici).then(() => this.router.navigateByUrl('/home')).catch(error => { console.log(error); this.girisHata = error.message; });
    }
    sifreHatirlat(eposta) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.firestoreservis.sifreyiSifirla(eposta).then(() => true).catch(() => false);
        });
    }
    presentAlertPrompt() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Şifre Hatırlat',
                inputs: [
                    {
                        name: 'email',
                        type: 'text',
                        value: this.eposta ? this.eposta : '',
                        placeholder: this.eposta ? '' : 'eposta adresinizi giriniz'
                    },
                ],
                buttons: [
                    {
                        text: 'Vazgeç',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Vazgeç');
                        }
                    }, {
                        text: 'Tamam',
                        handler: (value) => {
                            if (value.email.length >= 6) {
                                if (this.sifreHatirlat(value.email)) {
                                    console.log(value.email + ' adresine gönderildi');
                                }
                                else {
                                    console.log('Şifre Sıfırlama Hatası');
                                }
                            }
                            else {
                                console.log('Geçersiz e-posta adresi');
                            }
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController },
    { type: _firestore_service__WEBPACK_IMPORTED_MODULE_2__.FirestoreService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-login',
        template: _Users_mustafaakdemir_Desktop_notbuk_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 9403:
/*!******************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/login/login.page.html ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <img style=\"margin-left: 150px;\" src=\"assets/background/logo.png\" width=\"25\" height=\"25\">\n    <ion-title style=\"margin-left: 20px;\">Notbük</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div id=\"hero\">\n  <video src=\"assets/background/logindAndSignupBackground.mp4\" autoplay loop muted></video>\n  <div id=\"content\">\n    <img style=\"margin-left: 100px; margin-top: 150px;\" src=\"assets/background/logo.png\" width=\"185px\" height=\"185px\">\n    <div class=\"container\" style=\"margin-top: 50px;\">\n\t\t<ion-list inset>\n\t\t\t<ion-item>\n\t\t\t\t<ion-input type=\"text\" placeholder=\"E-Posta\" [(ngModel)]=\"eposta\"></ion-input>\n\t\t\t</ion-item>\n\t\t\t<ion-item>\n\t\t\t\t<ion-input type=\"password\" placeholder=\"Parola\" [(ngModel)]=\"parola\"></ion-input>\n\t\t\t</ion-item>\n\t\t</ion-list>\n\n\t\t<div class=\"ion-padding-horizontal\">\n\t\t\t<div>{{ girisHata }}</div>\n\n      <div class=\"login-footer\">\n        <div><ion-button size=\"small\" fill=\"outline\" (click)=\"presentAlertPrompt()\">Şifremi Unuttum</ion-button></div>\n\n\t\t\t<ion-button color=\"primary\" (click)=\"login()\">\n        <ion-icon slot=\"start\" name=\"key\"></ion-icon>\n        Giriş Yap\n      </ion-button>\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n      <ion-button id=\"kayitol\" ion-button icon-left block clear [routerLink]=\"['/signup']\">\n        <ion-icon  slot=\"start\" name=\"person-add\"></ion-icon>\n        Kayıt Ol\n      </ion-button>\n\t\t\t</div>\n\t\t    </div>\n      </div>\n    </div>\n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ 6051:
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  margin: 0;\n  padding: 0;\n}\n\n#hero {\n  position: relative;\n}\n\nvideo {\n  height: 100vh;\n  width: 100%;\n  background-position: absolute;\n  z-index: 10;\n  object-fit: cover;\n}\n\n#hero > #content {\n  height: 100%;\n  width: 100%;\n  z-index: 20;\n  position: absolute;\n  top: 0;\n  left: 0;\n  align-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFjLFNBQUE7RUFBVSxVQUFBO0FBR3hCOztBQUZBO0VBQ0Usa0JBQUE7QUFLRjs7QUFIQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFNRjs7QUFIQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxxQkFBQTtBQU1GIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHsgbWFyZ2luOjA7IHBhZGRpbmc6MDt9XG4jaGVybyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbnZpZGVvIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxMDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbiNoZXJvPiNjb250ZW50IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMjA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map