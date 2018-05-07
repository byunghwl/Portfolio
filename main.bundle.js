webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_main_component__ = __webpack_require__("./src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__work_work_component__ = __webpack_require__("./src/app/work/work.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__main_main_component__["a" /* MainComponent */] },
    { path: 'work/:id', component: __WEBPACK_IMPORTED_MODULE_3__work_work_component__["a" /* WorkComponent */] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(routes, { useHash: true })]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Portfolio';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nav_nav_component__ = __webpack_require__("./src/app/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__ = __webpack_require__("./src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__workgrid_workgrid_component__ = __webpack_require__("./src/app/workgrid/workgrid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__main_main_component__ = __webpack_require__("./src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__work_work_component__ = __webpack_require__("./src/app/work/work.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__work_info_service__ = __webpack_require__("./src/app/work-info.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__social_social_component__ = __webpack_require__("./src/app/social/social.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













// 1. followed this NGB tutorial
// https://medium.com/codingthesmartway-com-blog/using-bootstrap-with-angular-c83c3cee3f4a
//2. page transition
// https://blog.reactiveconf.com/angular-supercharge-your-router-transitions-using-new-animation-features-v4-3-dbc10ac8ee53
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__nav_nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_8__workgrid_workgrid_component__["a" /* WorkgridComponent */],
                __WEBPACK_IMPORTED_MODULE_9__main_main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_10__work_work_component__["a" /* WorkComponent */],
                __WEBPACK_IMPORTED_MODULE_12__social_social_component__["a" /* SocialComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__work_info_service__["a" /* WorkInfoService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-bottom navbar-expand navbar-light\">\n  <div class=\"navbar-text m-auto\">\n    Made by Phan, with Angular\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  \n  <div class=\"intro\" style=\"width: 65%; margin-top:3%;\">\n  <p class=\"lead\" style=\"text-align: left; font-size: 16px\">\n    Byunghwan(Phan) is a software engineer and interaction designer. He researches and develops innovative education tools, using Virtual and Augmented reality(VR/AR) technology, and machine learning algorithms, that will allow people to enhance their ability in a variety of new ways.\n    <br />\n    <br />\n    As a Software engineer, Phan started  for almost 5 years in the start-up industry, most notably for HoloLens, built award winning application.\n    <br />\n    <br />\n    Phan received his bachelor's degree from The college of Social Science, Ajou University (Rebulic of Korea) in Media studies, Interactive Media and Human-Computer Interactions, and he currently studies for a master's degree at Carnegie Mellon University’s Entertainment Technology program (MET).  \n    <br />\n    <br />\n  </p>\n  </div>\n\n  <app-social></app-social>\n</div>\n\n<app-workgrid></app-workgrid>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("./src/router.animations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main',
            template: __webpack_require__("./src/app/main/main.component.html"),
            styles: [__webpack_require__("./src/app/main/main.component.css")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])(),],
            host: { '[@routerTransition]': '' }
        })
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/***/ (function(module, exports) {

module.exports = ".page-header {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  border-bottom: 0px;\r\n}\r\n\r\nh1,\r\n.nav {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1;\r\n          flex: 1;\r\n  vertical-align: top;\r\n  margin-top: 0 !important;\r\n  color: black;\r\n}\r\n\r\n.nav>li>a{\r\n\tmargin-top: 20px;\r\n}\r\n\r\n.nav-a{\r\n\r\n\tcolor: #999 !important;\t\r\n}\r\n\r\n.nav-a:hover{\r\n\tcolor: #111 !important;\r\n}\r\n\r\n.nav-a:active{\r\n\tcolor: #111 !important;\r\n}\r\n\r\n.nav {  \r\n  text-align: right;\r\n}\r\n\r\n.nav.nav-pills>li {\r\n  float: none;\r\n  display: inline-block;\r\n}"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<link href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" rel=\"stylesheet\" />\n\n<div class=\"container\" style=\"margin-top: 4%\">\n  <div class=\"page-header\">\n    <a href=\"/\" class=\"non-underline a-no-effect\"><h1>BYUNGHWAN LEE <br/> <p style=\"margin-top:5px; font-size:12px; color:gray;\">Pittsburgh, PA</p></h1>\n    </a>\n\n    <ul class=\"nav justify-content-end\">\n      <li class=\"active\"><a class=\"nav-a\" href=\"index.html\">WORK</a></li>\n      <li><a class=\"nav-a\" href=\"#\">RESUME</a></li>\n      \n    </ul>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nav',
            template: __webpack_require__("./src/app/nav/nav.component.html"),
            styles: [__webpack_require__("./src/app/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/social/social.component.css":
/***/ (function(module, exports) {

module.exports = ".icon-black{\r\n\tcolor: #222 !Important;\r\n\tpadding-right: 12px;\r\n\tfont-size:23px\r\n}\r\n\r\n.icon-black:hover{\r\n\ttext-decoration: none;\r\n}"

/***/ }),

/***/ "./src/app/social/social.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"\">\n   \t<a href=\"\">\n   \t\t<i class=\"fa fa-linkedin icon-black\"></i>\n\t</a>\n\n\t<a href=\"\">\n   \t\t<i class=\"fa fa-github icon-black\"></i>\n\t</a>\n\n\t<a href=\"\">\n   \t\t<i class=\"fa fa-envelope-o icon-black\"></i>\n\t</a>\n\t\n</nav>"

/***/ }),

/***/ "./src/app/social/social.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SocialComponent = /** @class */ (function () {
    function SocialComponent() {
    }
    SocialComponent.prototype.ngOnInit = function () {
    };
    SocialComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-social',
            template: __webpack_require__("./src/app/social/social.component.html"),
            styles: [__webpack_require__("./src/app/social/social.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SocialComponent);
    return SocialComponent;
}());



/***/ }),

/***/ "./src/app/work-info.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkInfoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__workInfo__ = __webpack_require__("./src/app/workInfo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WorkInfoService = /** @class */ (function () {
    function WorkInfoService() {
    }
    WorkInfoService.prototype.getWorkThumbnails = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(__WEBPACK_IMPORTED_MODULE_2__workInfo__["c" /* WorkThumbList */]);
    };
    WorkInfoService.prototype.getWorkInfos = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(__WEBPACK_IMPORTED_MODULE_2__workInfo__["a" /* WorkInfoList */]);
    };
    WorkInfoService.prototype.getWorkInfo = function (id) {
        return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(__WEBPACK_IMPORTED_MODULE_2__workInfo__["a" /* WorkInfoList */].find(function (workI) { return workI.url == id; }));
    };
    WorkInfoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], WorkInfoService);
    return WorkInfoService;
}());



/***/ }),

/***/ "./src/app/work/work.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.content-box{\r\n\tmargin-top:5%;\r\n\tmargin-bottom: 17%;\r\n}\r\n\r\n.auto-resizable-iframe {\r\n  max-width: 100%;\r\n  margin: 0px auto;\r\n}\r\n\r\n.auto-resizable-iframe-60 {\r\n  max-width: 60%;\r\n  margin: 0px auto;\t\r\n}\r\n\r\n.auto-resizable-iframe > div,\r\n.auto-resizable-iframe-60 > div,\r\n{\r\n  position: relative;\r\n  padding-bottom: 65%;\r\n  height: 0px;\r\n}\r\n\r\n.auto-resizable-iframe iframe,\r\n.auto-resizable-iframe-60 iframe,\r\n.auto-resizable-iframe-60 img,\r\n{\r\n  position: absolute;\r\n  top: 0px;\r\n  left: 0px;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.title-text{\r\n\tfont-family:  Source Code Pro;\r\n\tcolor: #222;\r\n\tfont-weight: 300;\r\n    font-style: normal;\r\n    line-height: 1.5em;\r\n    font-size: 2em;\r\n    text-transform: uppercase;\r\n    text-decoration: none;\r\n    letter-spacing: .06em;\r\n\r\n    margin-bottom: 10%;\r\n}\r\n\r\n.content-box-center{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n\r\n.text-align-center{\r\n\ttext-align: center;\t\r\n}\r\n\r\n.text-box{\r\n\twidth: 60%;\r\n\tmargin: auto;\r\n\tpadding-top: 10px;\r\n\tposition: relative;\t\r\n\tfont-size: 15px;\r\n\tpadding-right: 17px;\r\n\tpadding-left: 17px;\r\n}\r\n\r\n.text-header-box{\r\n\tposition: relative;\r\n\tpadding-top: 17px;\r\n\tpadding-bottom: 17px;\r\n}"

/***/ }),

/***/ "./src/app/work/work.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf= \"workInfo\" class=\"container content-box\">\n\n\t<h1 class=\"text-align-center title-text\">\n\t  \t{{workInfo.title | uppercase}} \n\t</h1>\n\n\t<div class=\"auto-resizable-iframe\">\n\t\t<div>\n\t\t\t<iframe [src]=\"transform(workInfo.videoURL)\" width=\"1045\" height=\"588\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n\t\t</div>\n\t</div>\n\t<h3 class=\"text-align-center text-header-box\">ABOUT</h3>\n\n\t<div class=\"text-box content-box-center\" *ngFor=\"let text of workInfo.texts\">\n\t\t<p>\n\t\t\t{{text}}\n\t\t</p>\n\t</div>\n\n\t<h3 *ngIf=\"workInfo.ingredients.length > 0\" class=\"text-align-center .text-header-box\">INGREDIENTS</h3>\n\n\t<div class=\"text-box content-box-center\">\n\t\t<ul>\n\t\t\t<li *ngFor=\"let ingredient of workInfo.ingredients\"> {{ingredient}} </li>\n\t\t</ul>\t\n\t</div>\n\n\t<div class=\"auto-resizable-iframe-60\" style=\"\">\n\t\t<div class=\"\" *ngFor=\"let imgGif of workInfo.imgGifs\">\n\t\t\t<div>\n\t\t\t\t<!--\n\t\t\t\t<iframe [src]=\"transform(imgGif.url)\" width=\"{{imgGif.width}}\" height=\"{{imgGif.height}}\" frameBorder=\"0\" class=\"giphy-embed\" allowFullScreen></iframe>\n\t\t\t\t-->\n\t\t\t\t<img [src] = \"transform(imgGif.url)\">\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t\n\t<a href=\"#\">Back to work</a>\n</div>\n\n<app-workgrid></app-workgrid>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/work/work.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_animations__ = __webpack_require__("./src/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__workInfo__ = __webpack_require__("./src/app/workInfo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__work_info_service__ = __webpack_require__("./src/app/work-info.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var WorkComponent = /** @class */ (function () {
    function WorkComponent(activateRoute, router, workInfoService, sanitizer) {
        var _this = this;
        this.activateRoute = activateRoute;
        this.router = router;
        this.workInfoService = workInfoService;
        this.sanitizer = sanitizer;
        // override the route reuse strategy
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
        this.router.events.subscribe(function (evt) {
            if (evt instanceof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* NavigationEnd */]) {
                // trick the Router into believing it's last link wasn't previously loaded
                _this.router.navigated = false;
                // if you need to scroll back to top, here is the right place
                //window.scrollTo(0, 0);
            }
        });
    }
    WorkComponent.prototype.getWorkInfo = function () {
        var _this = this;
        var title = this.activateRoute.snapshot.paramMap.get('id');
        this.workInfoService.getWorkInfo(title)
            .subscribe(function (workInfo) { return _this.workInfo = workInfo; });
    };
    WorkComponent.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    WorkComponent.prototype.ngOnInit = function () {
        this.getWorkInfo();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__workInfo__["b" /* WorkInfomation */])
    ], WorkComponent.prototype, "workInfo", void 0);
    WorkComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Pipe */])({ name: 'safe' }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-work',
            template: __webpack_require__("./src/app/work/work.component.html"),
            styles: [__webpack_require__("./src/app/work/work.component.css")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_1__router_animations__["a" /* routerTransition */])()],
            host: { '[@routerTransition]': '' }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__work_info_service__["a" /* WorkInfoService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
    ], WorkComponent);
    return WorkComponent;
}());



/***/ }),

/***/ "./src/app/workInfo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export WorkThumbnail */
/* unused harmony export Presented */
/* unused harmony export Awarded */
/* unused harmony export PressReleased */
/* unused harmony export ImageGifs */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return WorkInfomation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return WorkThumbList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkInfoList; });
var WorkThumbnail = /** @class */ (function () {
    function WorkThumbnail() {
    }
    return WorkThumbnail;
}());

var Presented = /** @class */ (function () {
    function Presented() {
    }
    return Presented;
}());

var Awarded = /** @class */ (function () {
    function Awarded() {
    }
    return Awarded;
}());

var PressReleased = /** @class */ (function () {
    function PressReleased() {
    }
    return PressReleased;
}());

var ImageGifs = /** @class */ (function () {
    function ImageGifs() {
    }
    return ImageGifs;
}());

var WorkInfomation = /** @class */ (function () {
    function WorkInfomation() {
    }
    return WorkInfomation;
}());

var WorkThumbList = [
    { title: 'music everywhere: AR Piano Learning experience', url: 'music-everywhere', imgSrc: "assets\\img\\me_thumb.gif" },
    { title: 'Campfire: Responsive storytelling agent', url: 'vr-rehearsal', imgSrc: "assets\\img\\alexa.png" },
    { title: 'World Builder: VR Interaction Research', url: 'world-builder', imgSrc: "assets\\img\\autodesk.png" },
    { title: 'vr rehearsal: Public speech practice tool', url: 'vr-rehearsal', imgSrc: "assets\\img\\vr_rehearsal1.png" },
    //{ title: 'Gadgets: Physical prototypes Study', url: 'vr-rehearsal', imgSrc: "assets\\img\\gadget.jpg" },
    { title: 'Buiding Virtual Worlds: Game Prototypes', url: 'bvw', imgSrc: "assets\\img\\asasdads.png" },
    { title: 'B3D Engine: Writing a Game Engine from Scratch', url: 'b3d', imgSrc: "assets\\img\\bear.png" },
    { title: 'Hoorai: 3D Animation Pipeline study', url: 'hoorai', imgSrc: "assets\\img\\1123.png" },
];
var WorkInfoList = [
    {
        title: 'music everywhere: AR Piano Learning experience', url: 'music-everywhere',
        texts: [
            "my main work is building web tool which directly\
	  		 connected Alexa machine. so it can directly portable to \
	  		 ddddorofkdakk",
            "Yoyo ladkfo"
        ],
        videoURL: "https://www.youtube.com/embed/QdlJMc5ek_8",
        imgGifs: [
            { width: 480, height: 270, url: "https://giphy.com/embed/OqFJJXyIuSorQ4KP9W" },
            { width: 480, height: 270, url: "https://giphy.com/embed/OqFJJXyIuSorQ4KP9W" },
            { width: 480, height: 270, url: "https://giphy.com/embed/OqFJJXyIuSorQ4KP9W" }
        ],
        ingredients: [
            "Recurrent Neural Network (RNN) model - Madmom",
            "Recurrent Neural Network (RNN) model - Madmom",
            "Database - PostgreSQL"
        ]
    },
    {
        title: 'World Builder: VR Interaction Research', url: 'world-builder',
        texts: [
            "Autodesk interaction research program",
        ],
        imgGifs: [
            { width: 480, height: 270, url: "assets\\img\\worldBuilder-0.gif" },
            { width: 480, height: 270, url: "assets\\img\\worldBuilder-2.gif" },
            { width: 480, height: 270, url: "assets\\img\\worldBuilder-3.gif" },
            { width: 480, height: 270, url: "assets\\img\\worldBuilder-4.gif" }
        ],
        videoURL: "https://www.youtube.com/embed/xUZXFbeTskI",
        ingredients: [
            "Platform - HTC Vive & Autodesk Stingray Engine",
            "Programed by Lua and C++"
        ]
    },
    {
        title: 'vr rehearsal: Public speech practice tool', url: 'vr-rehearsal',
        texts: [
            "my main work is building web tool which directly\
	  		 connected Alexa machine. so it can directly portable to \
	  		 ddddorofkdakk",
            "Yoyo ladkfo"
        ],
        videoURL: "https://www.youtube.com/embed/08QAXv06yYo",
        imgGifs: [
            /* {width:480, height:270, url:"assets\\img\\vrRhearsal-1.gif"}, */
            { width: 480, height: 270, url: "assets\\img\\vrRhearsal-2.gif" },
            { width: 480, height: 270, url: "assets\\img\\vrRhearsal-3.gif" }
        ],
        ingredients: [
            "Recurrent Neural Network (RNN) model - Madmom",
            "Recurrent Neural Network (RNN) model - Madmom",
            "Database - PostgreSQL"
        ]
    },
    {
        title: 'Buiding Virtual Worlds: Game Prototypes', url: 'bvw',
        texts: [
            "my main work is building web tool which directly\
	  		 connected Alexa machine. so it can directly portable to \
	  		 ddddorofkdakk",
            "Yoyo ladkfo"
        ],
        videoURL: "https://www.youtube.com/embed/qDGRh7nCgAU",
        imgGifs: [
            { width: 480, height: 270, url: "assets\\img\\bvw-r-0.gif" },
            { width: 480, height: 270, url: "assets\\img\\bvw-r-1.gif" },
            { width: 480, height: 270, url: "assets\\img\\bvw-r-2.gif" },
            { width: 480, height: 270, url: "assets\\img\\bvw-r-4.gif" },
            { width: 480, height: 270, url: "assets\\img\\bvw-r-5.gif" }
        ],
        ingredients: [
            "Hardwares - Oculus Lift, Kinect, LeapMotion, Makey-Makey",
            "Platform - Unity3D with C#"
        ]
    },
    {
        title: 'B3D Engine: Writing a Game Engine from Scratch', url: 'b3d',
        texts: [
            "my main work is building web tool which directly\
	  		 connected Alexa machine. so it can directly portable to \
	  		 ddddorofkdakk",
            "Yoyo ladkfo"
        ],
        videoURL: "https://www.youtube.com/embed/F4OaWtVeZH4",
        imgGifs: [
            { width: 480, height: 270, url: "assets\\img\\b3d-test.gif" },
            { width: 480, height: 270, url: "assets\\img\\b3d-game_hit.gif" },
        ],
        ingredients: [
            "Platform - Windows 7",
            "Library - DirectX9 & Windows API",
            "Model importer - .ASE data format parser (self-built)",
            "Shader Render Pipeline - Self written",
            "Animation System (Forward Kinematics only) - Self written",
            "Collision Algorithm(AABB, OBB, Sphere) - Self written",
            "Lua Script Binding for Game Logic - LuaBridge",
            "Programmed by C++ and Lua"
        ]
    },
    {
        title: 'Hoorai: 3D Animation Pipeline study', url: 'hoorai',
        texts: [
            "my main work is building web tool which directly\
	  		 connected Alexa machine. so it can directly portable to \
	  		 ddddorofkdakk",
            "Yoyo ladkfo"
        ],
        videoURL: "https://www.youtube.com/embed/mBQj0xAq6a0",
        imgGifs: [
            { width: 480, height: 270, url: "assets\\img\\b3d-test.gif" },
            { width: 480, height: 270, url: "assets\\img\\b3d-game_hit.gif" },
        ],
        ingredients: [
            "3D Edit Tool - Blender and ZBrush",
            "2D Texture - Photoshop",
            "Video Edit Tool - Premiere"
        ]
    }
];


/***/ }),

/***/ "./src/app/workgrid/workgrid.component.css":
/***/ (function(module, exports) {

module.exports = ".card{\r\n\tborder: 0px !Important;\r\n\tmin-width: 30%; \r\n\tmax-width: 30%;\r\n\tmargin-bottom: 4rem;\r\n\tbackground-color:#fcfcfc;\t\r\n}\r\n\r\n.img-fluid{\r\n\t-webkit-transition: opacity .3s ease-out;\r\n\ttransition: opacity .3s ease-out;\r\n}\r\n\r\n.card:hover .img-fluid {\r\n  opacity: 0.7;\r\n}\r\n\r\n.card-body{\r\n\tbackground-color:#fcfcfc;\r\n\tfont-size: 14px;\r\n\ttext-align: center;\r\n\tcolor: #404040;\r\n\r\n}"

/***/ }),

/***/ "./src/app/workgrid/workgrid.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\" id=\"wgrid\" style=\"margin-top: 3.5%\">\n\t<div class=\"card-deck\">\n\t\t <div class=\"card\"  *ngFor=\"let card of workThumbnails\" >\n\t\t  \t<a routerLink=\"/work/{{card.url}}\" class=\"non-underline\">\n\t\t\t    \n\t\t\t    <img class=\"img-fluid\" width=\"100%\" src={{card.imgSrc}} alt=\"Card image cap\">\t\n\t\t\t    \n\t\t\t    <div class=\"card-body\">\n\t\t\t      <h5 class=\"card-title\">{{card.title | uppercase }}</h5>\n\t\t\t    </div>\n\t\t     </a>\n\t\t</div>\n\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/workgrid/workgrid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkgridComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__work_info_service__ = __webpack_require__("./src/app/work-info.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WorkgridComponent = /** @class */ (function () {
    function WorkgridComponent(workInfoService) {
        this.workInfoService = workInfoService;
    }
    WorkgridComponent.prototype.getWorkThumbnails = function () {
        var _this = this;
        this.workInfoService.getWorkThumbnails()
            .subscribe(function (workArray) { return _this.workThumbnails = workArray; });
    };
    WorkgridComponent.prototype.ngOnInit = function () {
        this.getWorkThumbnails();
    };
    WorkgridComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-workgrid',
            template: __webpack_require__("./src/app/workgrid/workgrid.component.html"),
            styles: [__webpack_require__("./src/app/workgrid/workgrid.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__work_info_service__["a" /* WorkInfoService */]])
    ], WorkgridComponent);
    return WorkgridComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/router.animations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = routerTransition;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");

function routerTransition() {
    return slideToLeft();
}
function slideToRight() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* trigger */])('routerTransition', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* state */])('void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ position: 'fixed', width: '100%' })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ position: 'fixed', width: '100%' })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])(':enter', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateX(-100%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateX(0%)' }))
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])(':leave', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateX(0%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateX(100%)' }))
        ])
    ]);
}
function slideToLeft() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* trigger */])('routerTransition', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* state */])('void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ position: 'relative', width: '100%' })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ position: 'relative', width: '100%' })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])(':enter', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ position: 'fixed', transform: 'translateX(100%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* group */])([
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateX(0%)' })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.2s', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ opacity: 1 }))
                //,animate('0.5s 1s', style({ position:'relative'}))
            ])
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])(':leave', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ position: 'fixed', transform: 'translateX(0%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* group */])([
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateX(-100%)' })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.2s', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ opacity: 0 }))
                //animate('0.5s 1s', style({ position:'relative'}))
            ])
        ])
    ]);
}
function slideToBottom() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* trigger */])('routerTransition', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* state */])('void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ position: 'fixed', width: '100%', height: '100%' })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ position: 'fixed', width: '100%', height: '100%' })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])(':enter', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateY(-100%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateY(0%)' }))
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])(':leave', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateY(0%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateY(100%)' }))
        ])
    ]);
}
function slideToTop() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* trigger */])('routerTransition', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* state */])('void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ position: 'fixed', width: '100%', height: '100%' })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ position: 'fixed', width: '100%', height: '100%' })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])(':enter', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateY(100%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateY(0%)' }))
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])(':leave', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateY(0%)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({ transform: 'translateY(-100%)' }))
        ])
    ]);
}


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map