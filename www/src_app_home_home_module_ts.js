"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 3949:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 7464);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 8245:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 7464);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 3949);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 7464:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _Users_mustafaakdemir_Desktop_notbuk_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./home.page.html */ 2056);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 968);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _firestore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firestore.service */ 2788);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ 6829);







let HomePage = class HomePage {
    constructor(firestoreservis, router, afAuth) {
        this.firestoreservis = firestoreservis;
        this.router = router;
        this.afAuth = afAuth;
        this.afAuth.authState.subscribe(user => {
            if (user) {
                this.userID = user.uid;
                console.log(this.userID);
                this.listele();
            }
            else {
                this.router.navigateByUrl('/login');
            }
        });
    }
    listele() {
        this.firestoreservis.notlariListele(this.userID).subscribe(data => { this.kayitlar = data; console.log(data); }, error => { });
    }
    notOlustur() {
        const kayit = {};
        // eslint-disable-next-line @typescript-eslint/dot-notation
        kayit['not'] = this.not;
        this.firestoreservis.notOlustur(kayit, this.userID).then(sonuc => {
            this.not = null;
            console.log(sonuc);
        })
            .catch(error => {
            console.log(error);
        });
    }
    cikis() {
        this.afAuth.signOut();
        this.router.navigateByUrl('/login');
    }
    notuGuncelle(secilenKayit) {
        // eslint-disable-next-line prefer-const
        let kayit = {};
        // eslint-disable-next-line @typescript-eslint/dot-notation
        kayit['not'] = secilenKayit.gNot;
        // eslint-disable-next-line @typescript-eslint/dot-notation
        this.firestoreservis.notuGuncelle(secilenKayit.payload.doc.id, kayit, this.userID);
        secilenKayit.guncelleniyor = false;
    }
    notuSil(id) {
        this.firestoreservis.notuSil(id, this.userID);
    }
    notuDuzenle(kayit) {
        kayit.guncelleniyor = true;
        kayit.gNot = kayit.payload.doc.data().not;
    }
};
HomePage.ctorParameters = () => [
    { type: _firestore_service__WEBPACK_IMPORTED_MODULE_2__.FirestoreService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__.AngularFireAuth }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-home',
        template: _Users_mustafaakdemir_Desktop_notbuk_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 2056:
/*!****************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/home/home.page.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <img style=\"margin-left: 150px;\" src=\"assets/background/logo.png\" width=\"25\" height=\"25\">\n    <ion-title style=\"margin-left: 20px;\">Notbük</ion-title>\n    <ion-buttons slot=\"primary\">\n        <ion-button (click)=\"cikis()\">\n          <ion-icon slot=\"icon-only\" name=\"exit\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<div id=\"hero\">\n  <video src=\"assets/background/homePageBackground.mp4\" autoplay loop muted></video>\n  <div id=\"content\">\n    <div class=\"container\">\n      <ion-grid fixed>\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-input #inputId placeholder=\"Yeni Not\" [(ngModel)]=\"not\" autofocus ></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class=\"ion-text-center\">\n            <ion-button (click)=\"notOlustur()\" [disabled]=\"!not\">\n              <ion-icon size=\"small\" slot=\"icon-only\" name=\"add\"></ion-icon>\n              &nbsp;Yeni Not Ekle\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-card *ngFor=\"let item of kayitlar\">\n        <span *ngIf=\"!item.guncelleniyor; else duzenleAc\">\n          <ion-card-header>\n            <ion-card-title>{{ item.payload.doc.data().not }}</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-button shape=\"round\" color=\"primary\" size=\"small\" (click)=\"notuDuzenle(item)\">\n              <ion-icon size=\"small\" slot=\"icon-only\" name=\"create\"></ion-icon>\n            </ion-button>\n            <ion-button shape=\"round\" color=\"primary\" size=\"small\" (click)=\"notuSil(item.payload.doc.id)\">\n              <ion-icon size=\"small\" slot=\"icon-only\" name=\"trash\"></ion-icon>\n            </ion-button>\n          </ion-card-content>\n        </span>\n        <ng-template #duzenleAc>\n          <ion-card-header>\n            <ion-card-title>\n              <ion-grid>\n                <ion-row>\n                  <ion-col>\n                    Düzenle\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-item>\n              <ion-label><strong>Not:</strong></ion-label>\n              <ion-input type=\"text\" [(ngModel)]=\"item.gNot\"></ion-input>\n            </ion-item>\n          </ion-card-content>\n          <ion-card-subtitle>\n              <ion-grid fixed>\n                  <ion-row>\n              <ion-col class=\"ion-padding\">\n                  <ion-button fill=\"clear\" color=\"medium\" size=\"small\" (click)=\"item.guncelleniyor = false\">\n                    İptal\n                  </ion-button>\n                </ion-col>\n                <ion-col class=\"ion-padding\">\n                  <ion-button style=\"float: right;\" fill=\"outline\" color=\"success\" size=\"small\" (click)=\"notuGuncelle(item)\">\n                    Güncelle\n                  </ion-button>\n                </ion-col>\n              </ion-row>\n              </ion-grid>\n          </ion-card-subtitle>\n        </ng-template>\n      </ion-card>\n    </div>\n  </div>\n</div>\n</ion-content>\n");

/***/ }),

/***/ 968:
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/***/ ((module) => {

module.exports = "[ion-content] {\n  margin: 0;\n  padding: 0;\n}\n\n#hero {\n  position: relative;\n}\n\nvideo {\n  height: 100vh;\n  width: 100%;\n  background-position: absolute;\n  z-index: 10;\n  object-fit: cover;\n}\n\n#hero > #content {\n  height: 100vh;\n  width: 100%;\n  z-index: 20;\n  position: absolute;\n  top: 0;\n  left: 0;\n  align-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQWdCLFNBQUE7RUFBVSxVQUFBO0FBRzFCOztBQUZBO0VBQ0Usa0JBQUE7QUFLRjs7QUFIQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFNRjs7QUFIQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxxQkFBQTtBQU1GIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiW2lvbi1jb250ZW50XSB7IG1hcmdpbjowOyBwYWRkaW5nOjA7fVxuI2hlcm8ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG52aWRlbyB7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTA7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4jaGVybz4jY29udGVudCB7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAyMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLy8gI2NvbnRhaW5lciB7XG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgIGxlZnQ6IDA7XG4vLyAgIHJpZ2h0OiAwO1xuLy8gICB0b3A6IDUwJTtcbi8vICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuLy8gfVxuXG4vLyAjY29udGFpbmVyIHN0cm9uZyB7XG4vLyAgIGZvbnQtc2l6ZTogMjBweDtcbi8vICAgbGluZS1oZWlnaHQ6IDI2cHg7XG4vLyB9XG5cbi8vICNjb250YWluZXIgcCB7XG4vLyAgIGZvbnQtc2l6ZTogMTZweDtcbi8vICAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbi8vICAgY29sb3I6ICM4YzhjOGM7XG5cbi8vICAgbWFyZ2luOiAwO1xuLy8gfVxuXG4vLyAjY29udGFpbmVyIGEge1xuLy8gICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4vLyB9XG5cblxuXG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map