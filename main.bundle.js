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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__social_social_component__ = __webpack_require__("./src/app/social/social.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__work_info_service__ = __webpack_require__("./src/app/work-info.service.ts");
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
                __WEBPACK_IMPORTED_MODULE_11__social_social_component__["a" /* SocialComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__work_info_service__["a" /* WorkInfoService */]
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

module.exports = "@media only screen and (max-width: 750px){\r\n\t.intro{\r\n\t\twidth: 100%; \r\n\t\tmargin-top:3%;\r\n\t}\r\n\r\n}\r\n\r\n@media only screen and (min-width: 751px){\r\n\t.intro{\r\n\t\twidth: 65%; \r\n\t\tmargin-top:3%;\r\n\t}\r\n}\r\n\r\n.lead{\r\n\ttext-align: left; \r\n\tfont-size: 15px;\r\n\tfont-family: Source code pro;\r\n\tfont-weight: 400;\r\n\tfont-style: normal;\r\n\tline-height: 1.8em;\r\n\tmargin-bottom: 5%;\r\n\tcolor: #575757;\r\n}"

/***/ }),

/***/ "./src/app/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  \n  <div class=\"intro\">\n\t  <p class=\"lead\">\n\t    Byunghwan(Phan) is a software engineer and an application developer. He is interested in how new technologies, like VR/AR, can help innovate education and enable new ways for people to learn.\n\t    <br />\n\t    <br />\n\t    He co-founded Music Everywhere, Inc. in which he successfully developed an award winning application. He is currently working on projects that pushes the boundary of music education through adapting Augmented Reality technology to physical instruments. \n\t    <br />\n\t    <br />\n\t    Phan received his Masters of Entertainment Technology from Carnegie Mellon University and his bachelor's degree from Ajou University(Republic of Korea) in Media Studies.  \n\t  </p>\n  </div>\n\n  <app-social></app-social>\n\n</div>\n\n<app-workgrid></app-workgrid>\n\n<app-footer></app-footer>"

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

module.exports = "\r\n@media only screen and (max-width: 750px){\r\n  \r\n  h1,\r\n  .nav {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n    vertical-align: top;\r\n    margin-top: 0 !important;\r\n    color: black;\r\n    text-align: center;\r\n  }\r\n\r\n  .link-button{\r\n    -webkit-box-pack: end!important;\r\n    -ms-flex-pack: center!important;\r\n        justify-content: center!important;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 751px){\r\n   \r\n  .page-header {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    border-bottom: 0px;\r\n  }\r\n\r\n  .link-button{\r\n    -webkit-box-pack: end!important;\r\n    -ms-flex-pack: end!important;\r\n        justify-content: flex-end!important;\r\n  }\r\n\r\n  h1,\r\n  .nav {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n    vertical-align: top;\r\n    margin-top: 0 !important;\r\n    color: black;\r\n  }\r\n\r\n  .nav>li>a{\r\n    margin-top: 20px;\r\n  }\r\n\r\n\r\n  .nav {  \r\n    text-align: right;\r\n  }\r\n\r\n  .nav.nav-pills>li {\r\n    float: none;\r\n    display: inline-block;\r\n  }\r\n}\r\n\r\nh1{\r\n  font-family: Source code Pro;\r\n  font-size: 42px;\r\n  font-weight: 400;\r\n  line-height: 0.8em;\r\n}\r\n\r\n.m-location{\r\n    font-family: Source code Pro; \r\n    font-size:12px;\r\n    color:#ddd;\r\n}\r\n\r\n.nav>li>a{\r\n    margin-top: 20px;\r\n}\r\n\r\n.nav-a{\r\n  color: #999 !important; \r\n}\r\n\r\n.nav-a:hover{\r\n  color: #111 !important;\r\n}\r\n\r\n.nav-a:active{\r\n  color: #111 !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<link href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" rel=\"stylesheet\" />\n\n<div class=\"container\" style=\"margin-top: 25px\">\n  <div class=\"page-header\">\n    <a href=\"/\" class=\"non-underline a-no-effect\"><h1>BYUNGHWAN LEE <br/> <p class=\"m-location\" >Pittsburgh, PA</p></h1>\n    </a>\n\n    <ul class=\"nav link-button\">\n      <li class=\"active\"><a class=\"nav-a\" href=\"index.html\">WORK</a></li>\n      <li><a class=\"nav-a\" href=\"https://drive.google.com/open?id=0B9359WX9yInyUlNnVHhOQWFzT0lzaWJ6QmMzMmU1U1drcU04\">RESUME</a></li>\n      \n    </ul>\n  </div>\n</div>"

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

module.exports = "@media only screen and (max-width: 750px){\r\n\t\r\n\t\r\n\r\n}\r\n\r\n@media only screen and (min-width: 751px){\r\n\r\n\t\r\n}\r\n\r\n.icon-black{\r\n\tcolor: #222 !Important;\r\n\tpadding-right: 12px;\r\n\tfont-size:23px\r\n}\r\n\r\n.icon-black:hover{\r\n\ttext-decoration: none;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/social/social.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"social-icon-box\">\n\t\n   \t<a href=\"http://www.linkedin.com/in/byunghwl\">\n   \t\t<i class=\"fa fa-linkedin icon-black\"></i>\n\t</a>\n\n\t<a href=\"https://github.com/byunghwl\">\n   \t\t<i class=\"fa fa-github icon-black\"></i>\n\t</a>\n\n\t<a href=\"mailto:byunghwlee@gmail.com\">\n   \t\t<i class=\"fa fa-envelope-o icon-black\"></i>\n\t</a>\n\t\n</nav>"

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
        this.maxWorkPageCount = __WEBPACK_IMPORTED_MODULE_2__workInfo__["d" /* WorlInfoOrder */].length;
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
    WorkInfoService.prototype.getFocusedWorkUrlIndex = function (id) {
        return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(__WEBPACK_IMPORTED_MODULE_2__workInfo__["d" /* WorlInfoOrder */].findIndex(function (workInfoUrl) { return workInfoUrl == id; }));
    };
    WorkInfoService.prototype.getWorkUrlByIndex = function (idx) {
        return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(__WEBPACK_IMPORTED_MODULE_2__workInfo__["d" /* WorlInfoOrder */][idx]);
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

module.exports = "\r\n\r\n.content-box{\r\n\tmargin-top:50px;\r\n\tmargin-bottom: 10px;\r\n}\r\n\r\n.iframe-container {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 0;\r\n  padding-bottom: 56.25%;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.iframe-container iframe {\r\n   position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n@media only screen and (max-width: 750px){\r\n  .text-box{\r\n    width: 100%;\r\n   \r\n    padding-top: 10px;\r\n    margin-bottom: 10px;\r\n    position: relative; \r\n    font-size: 16px;\r\n    font-weight: 400;\r\n    line-height: 1.8em;\r\n    color: #555;\r\n    font-family: Source Code Pro;\r\n    text-align: left;\r\n  }\r\n\r\n  .iframe-container-60 img{\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n\r\n  .content-box-center{\r\n     display: -webkit-box;\r\n     display: -ms-flexbox;\r\n     display: flex;\r\n     -webkit-box-pack: start;\r\n         -ms-flex-pack: start;\r\n             justify-content: flex-start;\r\n   }\r\n}\r\n\r\n@media only screen and (min-width: 751px){\r\n   \r\n\r\n\r\n   .content-box-center{\r\n     display: -webkit-box;\r\n     display: -ms-flexbox;\r\n     display: flex;\r\n     -webkit-box-pack: center;\r\n         -ms-flex-pack: center;\r\n             justify-content: center;\r\n   }\r\n\r\n   .text-box{\r\n      width: 60%;\r\n      margin: auto;   \r\n      padding-top: 10px;\r\n      margin-bottom: 10px;\r\n      position: relative; \r\n      font-size: 16px;\r\n      padding-right: 17px;\r\n      line-height: 1.8em;\r\n      padding-left: 17px;\r\n      font-weight: 400;\r\n      color: #555;\r\n      text-align: left;\r\n      font-family: Source Code Pro;\r\n    }\r\n\r\n    .iframe-container-60 img{\r\n      width: 60%;\r\n      height: 100%;\r\n    }\r\n  \r\n}\r\n\r\n.iframe-container-60{\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  padding-top: 40px;\r\n}\r\n\r\n.title-text{\r\n\tfont-family:  Source Code Pro;\r\n\tcolor: #222;\r\n\tfont-weight: 300;\r\n    font-style: normal;\r\n    line-height: 1.5em;\r\n    font-size: 2em;\r\n    text-transform: uppercase;\r\n    text-decoration: none;\r\n    letter-spacing: .06em;\r\n\r\n    margin-bottom: 100px;\r\n}\r\n\r\n.text-align-center{\r\n\ttext-align: center;\t\r\n}\r\n\r\n.gifImage{\r\n  margin-bottom: 10px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n\r\n.award-box{\r\n  margin-bottom: 100px;\r\n}\r\n\r\n.prizeIcon{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center; \r\n  margin-bottom: 10px;\r\n}\r\n\r\n.award-header{\r\n  color:#d1d1d1;\r\n  font-size: 18px;\r\n  letter-spacing: .06em;\r\n  margin-bottom: 25px;\r\n}\r\n\r\n.award-text{\r\n  font-family: Source Code Pro;\r\n  font-size: 18px;\r\n  font-weight: 400;\r\n  margin: auto;\r\n  display: block;\r\n  color: #111;\r\n\r\n  \r\n}\r\n\r\n.text-header-box{\r\n  font-family: Source Code Pro;\r\n  font-weight: 300;\r\n  font-size: 2em;\r\n  letter-spacing: .06em;\r\n\tposition: relative;\r\n\tpadding-top: 17px;\r\n\tpadding-bottom: 17px;\r\n}\r\n\r\n.githubLink\r\n{\r\n  width: 200px;\r\n  height: 50px;\r\n  margin: auto;\r\n  padding-top: 50px;\r\n  padding-bottom: 100px;\r\n   \r\n}\r\n\r\n.githubLink>a{\r\n  padding: 21px 34px;\r\n  font-size: 15px;\r\n  text-transform: uppercase;\r\n  letter-spacing: 1px;\r\n  font-weight: 600;\r\n  font-style: normal;\r\n  color: #fff;\r\n  background-color: #272727;\r\n  border-color: #272727;\r\n}"

/***/ }),

/***/ "./src/app/work/work.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf= \"workInfo\" class=\"container content-box\">\n\n\t<h1 class=\"text-align-center title-text\">\n\t  \t{{workInfo.title | uppercase}} \n\t</h1>\n\n\n\t<!-- Awards -->\n\t<div class=\"award-box\" *ngIf= \"workInfo.awards.length > 0\">\n\t\t<h2 class=\"text-align-center award-header\">\n\t\t     AWARD\n\t\t</h2>\n\n\t\t<div class=\"prizeIcon\" *ngFor=\"let award of workInfo.awards\">\n\t\t\t<img [src] = \"transform(award.iconUrl)\" width=\"150px\" height=\"150px\">\n\t\t</div>\n\n\t\t<a class=\"text-align-center award-text\" \n\t\tstyle=\"white-space: pre-line\" \n\t\t*ngFor=\"let award of workInfo.awards\"\n\t\t\t[href]=\"transform(award.linksUrl)\">\n\t\t\t{{ award.caption || uppercase }}\n\t\t</a>\n\t</div>\n\n\t<!--Presented \n\t<div class=\"award-box\" *ngIf= \"workInfo.presented.length > 0\">\n\t\t<h2 class=\"text-align-center award-header\">\n\t\t     PRESENTED\n\t\t</h2>\n\n\t\t<img [src] = \"transform(workInfo.presented[0].iconUrl)\">\n\t</div>\n\t-->\n\n\t<div class=\"iframe-container\" *ngIf= \"workInfo.videoURL.length > 0\">\n\t\t<!--<div>-->\n\t\t\t<iframe [src]=\"transform(workInfo.videoURL)\" width=\"1045\" height=\"588\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen  ></iframe>\n\t\t<!--</div>-->\n\t</div>\n\n\t<h3 class=\"text-align-center text-header-box\">ABOUT</h3>\n\n\t<div class=\"text-box content-box-center\" *ngFor=\"let text of workInfo.texts\">\n\t\t<p style=\"line-height: 1.8em;\">\n\t\t\t{{text}}\n\t\t</p>\n\t</div>\n\n\t<!-- Audio Cloud -->\n\t<div *ngIf=\"workInfo.audioClouds.length > 0\" class=\"content-box-center\">\n\t\t<ul>\n\t\t\t<li *ngFor=\"let audioCloud of workInfo.audioClouds\">\n\n\t\t\t\t<h4>\n\t\t\t\t\t{{audioCloud.caption}}\n\t\t\t\t</h4>\n\t\t\t\t<audio controls controlsList=\"nodownload\" >\n\t\t\t\t \t<source \n\t\t\t\t  \t[src]=\"transform(audioCloud.url)\" type=\"audio/mp3\">\n\t\t\t\t</audio>\n\t\t\t<li>\n\t\t</ul>\n\t</div>\n\n\t<h3 *ngIf=\"workInfo.ingredients.length > 0\" class=\"text-align-center text-header-box\">DETAILS</h3>\n\n\t<div class=\"text-box content-box-center ingredient\">\n\t\t<ul>\n\t\t\t<li *ngFor=\"let ingredient of workInfo.ingredients\"> {{ingredient}} </li>\n\t\t</ul>\t\n\t</div>\n\n\t<!-- Github page link -->\n\t<div class=\"githubLink\" *ngIf=\"workInfo.futherLink\" >\n\t\t<a [href]=\"transform(workInfo.futherLink.url)\">\n\t\t\t{{workInfo.futherLink.caption | uppercase }}\n\t\t</a>\n\t</div>\n\n\t<!-- Show GIF -->\n\t<div class=\"iframe-container-60\" style=\"\">\n\t\t<div class=\"gifImage\" *ngFor=\"let imgGif of workInfo.imgGifs\">\n\t\t\t\n\t\t\t\t<!--\n\t\t\t\t<iframe [src]=\"transform(imgGif.url)\" width=\"{{imgGif.width}}\" height=\"{{imgGif.height}}\" frameBorder=\"0\" class=\"giphy-embed\" allowFullScreen></iframe>\n\t\t\t\t-->\n\t\t\t\t<img [src] = \"transform(imgGif.url)\">\n\t\t</div>\n\t</div>\n\t\t\n</div>\n\n\n\n<app-workgrid></app-workgrid>\n\n<app-footer></app-footer>"

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
/* unused harmony export FurtherLink */
/* unused harmony export PressReleased */
/* unused harmony export AudioClouds */
/* unused harmony export ImageGifs */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return WorkInfomation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return WorkThumbList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return WorlInfoOrder; });
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

var FurtherLink = /** @class */ (function () {
    function FurtherLink() {
    }
    return FurtherLink;
}());

var PressReleased = /** @class */ (function () {
    function PressReleased() {
    }
    return PressReleased;
}());

var AudioClouds = /** @class */ (function () {
    function AudioClouds() {
    }
    return AudioClouds;
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
    { title: 'Campfire: Responsive storytelling agent', url: 'campfire', imgSrc: "assets\\img\\alexa.png" },
    { title: 'World Builder: VR Interaction Research', url: 'world-builder', imgSrc: "assets\\img\\autodesk.png" },
    { title: 'vr rehearsal: Public speech practice tool', url: 'vr-rehearsal', imgSrc: "assets\\img\\vr_rehearsal1.png" },
    //{ title: 'Gadgets: Physical prototypes Study', url: 'vr-rehearsal', imgSrc: "assets\\img\\gadget.jpg" },
    { title: 'Buiding Virtual Worlds: Game Prototypes', url: 'bvw', imgSrc: "assets\\img\\asasdads.png" },
    { title: 'Game Engine: Writing a Game Engine from Scratch', url: 'gameEngine', imgSrc: "assets\\img\\bear.png" },
    { title: 'Hoorai: 3D Animation Pipeline study', url: 'hoorai', imgSrc: "assets\\img\\1123.png" },
];
var WorlInfoOrder = [
    "music-everywhere",
    "campfire",
    "world-builder",
    "vr-rehearsal",
    "bvw",
    "gameEngine",
    "hoorai"
];
var WorkInfoList = [
    {
        awards: [
            {
                iconUrl: "assets\\img\\holoContest.png",
                linksUrl: "https://unity3d.com/partners/microsoft/hololens-contest",
                caption: "1st Grand Prize in the Microsoft Unity HoloLens developer contest 2017."
            }
        ],
        presented: [
            { iconUrl: "assets\\img\\me-presented.PNG" }
        ],
        title: 'music everywhere: AR Piano Learning experience', url: 'music-everywhere',
        texts: [
            "Music Everywhere is an augmented reality piano learning system using the Microsoft Hololens.\
			It won the 2017 Microsoft Unity Hololens Contest and is currently available on the Microsoft Store.\
			This was also presented in GDC, SIGGRAPH, NIME 2017.",
            "The interface is overlayed directly on to the piano and this enables the user to easily follow the directions.\
			A virtual band interacts with the user by playing a jam session together or by simply explaining the music concepts in a friendly manner.\
			There are lessons provided in the software which includes interactive theory lessons, live practice sessions, and animated hand demonstrations which the user can follow to explore various genre of music.",
            "The application supports different sizes of keyboards ranging from 56 keys to 88 keys.\
			It communicates with the piano via MIDI-over-Bluetooth.",
            "This project started as an academic project in the Fall semester, 2016 in CMU and our team founded the company and commercialized the product in 2017."
        ],
        videoURL: "https://www.youtube.com/embed/QdlJMc5ek_8",
        imgGifs: [
            { width: 480, height: 270, url: "assets\\img\\me-3.png" },
            { width: 480, height: 270, url: "assets\\img\\me-2.png" },
            { width: 480, height: 270, url: "assets\\img\\me-1.png" }
        ],
        ingredients: [
            "Platform - Microsoft HoloLens",
            "Game Engine - Unity3D with C#",
            "Music score importer - self written",
            "Piano roll interface - self written",
            "Bluetooth MIDI Connection - self written with Windows10 API",
            "HoloLens Native plug-in - self written",
            "Virtual Band system - self written",
            "GUI Lesson Builder - self written",
        ],
        futherLink: {
            url: "www.music-everywhere.co",
            caption: "Go to website"
        },
        audioClouds: []
    },
    {
        awards: [], presented: [],
        title: 'Campfire: responsive storytelling agent', url: 'campfire',
        texts: [
            'Campfire is an interactive storytelling agent which reacts to the user’s answers and questions.\
			 The motivation behind this project was to find a way to help users play with Amazon Alexa, a voice user interface (VUI) driven device.\
			 We wanted to push the boundaries of what Alexa can do to entertain people.',
            "Our team built several prototypes demonstrating new interactions which the Alexa could not do at that time.(Alexa API version: v20160207)\
			For example, we implemented a syllable based voice recognition, which means that the Alexa was able to understand languages we created(e.g. Alien language).\
			Also, through using Machine Learning, we were able to create a prototype in which the Alexa was able to understand different types of answers other than a simple “Yes” or “No”.",
            "In order to build these kinds of new interactions, we built our own customized python based NLP framework using NLTK and Scikit-learn and connected it to our own server.\
			Also, to set up an effective content production pipeline, we built a web editor tool which let our narrative writer easily import, arrange and modify audio clips and interaction components into the experience.\
			These input were directly sent to Alexa.",
            "This was an academic project that was done during the semester of Spring 2017, CMU in a team of four."
        ],
        videoURL: "https://www.youtube.com/embed/qDGRh7nCgAU",
        imgGifs: [
            { width: 480, height: 270, url: "assets\\img\\campfire-1.gif" },
        ],
        ingredients: [
            "Platform - Amazon Alexa",
            "Web Client - HTML5 & JQuery",
            "Server framework & Hosting - Node.js with pyBridge, Heroku",
            "NLP & Machine Learning Package - NLTK and Scikit-learn",
        ],
        futherLink: null,
        audioClouds: [
            {
                url: "assets\\audio\\Interactions_Navigation.mp3",
                caption: "Open-ended answer"
            },
            {
                url: "assets\\audio\\Interactions_OpenEnded.mp3",
                caption: "Audio navigation"
            }
        ]
    },
    {
        awards: [], presented: [],
        title: 'World Builder: VR Interaction Research', url: 'world-builder',
        texts: [
            "World builder is a capstone project I worked on during my summer internship in Autodesk.\
	  		It was about researching and building UI prototypes for 3d modeling, drawing and placing objects in the virtual reality environment.",
            "I worked in a team of four (two designers, two engineers) and we performed a thorough research and ideation on how VR can useful to designers.\
			Through rapid prototyping and iteration, we were able to build several prototypes which show the optimized user interface for moving and interacting with objects in the VR space."
        ],
        imgGifs: [
            { width: 480, height: 270, url: "assets\\img\\worldBuilder-0.gif" },
            { width: 480, height: 270, url: "assets\\img\\worldBuilder-2.gif" },
            { width: 480, height: 270, url: "assets\\img\\worldBuilder-3.gif" },
            { width: 480, height: 270, url: "assets\\img\\worldBuilder-4.gif" }
        ],
        videoURL: "https://www.youtube.com/embed/xUZXFbeTskI",
        ingredients: [
            "Platform - HTC Vive",
            "3D Engine - Autodesk Stingray Engine with Lua and C++"
        ],
        futherLink: null,
        audioClouds: []
    },
    {
        awards: [
            {
                iconUrl: "assets\\img\\award-icon.png",
                linksUrl: "https://createpgh.org/best-of-the-creative-industries/",
                caption: "Top 10 Education + Gaming Projects in Pittsburgh Creative Festival 2016"
            }
        ],
        presented: [],
        title: 'vr rehearsal: Public speech practice tool', url: 'vr-rehearsal',
        texts: [
            "VR Rehearsal is a mobile VR application which was designed for people who suffers from public speech anxiety.\
			It provides a simulation of a virtual audience  which reacts to the user’s voice and gaze. \
			Users can upload their own slides on Google Drive or Dropbox.",
            "By tracking your head rotation(gaze) and the sound level of your voice, the app measures your performance and provides feedback.\
			The feedback is given in two ways. During the presentation, the virtual audience reacts to your performance. \
			For example, if you are not looking at the audience, they start to look at their phone or fall asleep. \
			After the presentation, the app shows a heat map of where you were looking at and also a record file of your voice synced to each page of the slide.",
            "This was an academic project that was done during the semester of Spring 2016, CMU in a team of five."
        ],
        videoURL: "https://www.youtube.com/embed/08QAXv06yYo",
        imgGifs: [
            /* {width:480, height:270, url:"assets\\img\\vrRhearsal-1.gif"}, */
            { width: 480, height: 270, url: "assets\\img\\vrRhearsal-2.gif" },
            { width: 480, height: 270, url: "assets\\img\\vrRhearsal-3.gif" }
        ],
        ingredients: [
            "Platform - Android phone with Google Cardboard",
            "Game Engine - Unity3D with C#",
            "Cloud Storage - GoogleDrive API & Dropbox API",
            "Android native plugin - self written"
        ],
        futherLink: {
            url: "https://www.etc.cmu.edu/projects/vr-rehearsal/",
            caption: "Go to website"
        },
        audioClouds: []
    },
    {
        awards: [], presented: [],
        title: 'Buiding Virtual Worlds: Game Prototypes', url: 'bvw',
        texts: [
            "BVW is a course in which the students have to create five games within a semester.\
	  		 I worked in different teams creating a game every two weeks.",
            "Through this course,\
			 I learned how to communicate with people with different background\
			 and was able to practice rapid prototyping and user playtesting."
        ],
        videoURL: "https://www.youtube.com/embed/CxOcDayI88Y",
        imgGifs: [
            { width: 480, height: 270, url: "assets\\img\\bvw-r-0.gif" },
            { width: 480, height: 270, url: "assets\\img\\bvw-r-1.gif" },
            { width: 480, height: 270, url: "assets\\img\\bvw-r-2.gif" },
            { width: 480, height: 270, url: "assets\\img\\bvw-r-4.gif" },
            { width: 480, height: 270, url: "assets\\img\\bvw-r-5.gif" }
        ],
        ingredients: [
            "Platforms - Oculus Lift, Kinect, LeapMotion, Makey-Makey",
            "Game Engine - Unity3D with C#"
        ],
        futherLink: null,
        audioClouds: []
    },
    {
        awards: [], presented: [],
        title: 'Game Engine: Writing a Game Engine from Scratch', url: 'gameEngine',
        texts: [
            "SHEngine was a project in which I built a 3D game engine from scratch.\
			It includes a programmable shader pipeline (HLSL), forward-kinematics animation system, a simple collision detection(AABB) algorithm and uses Lua library to support simple logic scripting functionality.\
			The project is built using C++ and DirectX 9.\
			In order to build a game engine with better performance, I studied various topics such as data-oriented design and A* pathfinder algorithm.",
            "This project was a capstone project for the KOCCA Academy.\
			The engine developed in a team of two and we created a game using this game engine as a demo by collaboration with two 3D artists."
        ],
        videoURL: "https://www.youtube.com/embed/F4OaWtVeZH4",
        imgGifs: [
            { width: 480, height: 270, url: "assets\\img\\b3d-game_hit.gif" },
            { width: 480, height: 270, url: "assets\\img\\b3d-test.gif" }
        ],
        ingredients: [
            "Platform - Windows 7",
            "Library - DirectX9 & Windows API",
            "Model importer - self written",
            "Animation System(FK only) - self written",
            "Lua Script Binding for basic game data - LuaBridge",
            "Demo Game Play - self written",
            "Programmed by C++ and Lua"
        ],
        futherLink: {
            url: "https://github.com/byunghwl/GameEngineDemo",
            caption: "Go to git repo"
        },
        audioClouds: []
    },
    {
        awards: [], presented: [],
        title: 'Hoorai: 3D Animation Pipeline study', url: 'hoorai',
        texts: [
            "Hoorai is a personal animation project I worked on to have a better understanding of 3D animation production.\
			 I created a 5-minute 3d animation in which I did all the 3D modeling, rigging, lighting and rendering.\
			 Through this study, I learned the basics of 3d art and a deep understanding of the art pipeline which was helpful when working with artists and designers.\
			 I worked on this project for 4 weeks."
        ],
        videoURL: "https://www.youtube.com/embed/mBQj0xAq6a0",
        imgGifs: [
            { width: 480, height: 270, url: "assets\\img\\hoorai-2.png" },
            { width: 480, height: 270, url: "assets\\img\\hoorai-3.png" },
            { width: 480, height: 270, url: "assets\\img\\hoorai-1.png" },
        ],
        ingredients: [
            "3D Edit Tool - Blender and ZBrush",
            "2D Texture - Photoshop",
            "Video Edit Tool - Premiere"
        ],
        futherLink: null,
        audioClouds: []
    }
];


/***/ }),

/***/ "./src/app/workgrid/workgrid.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n@media only screen and (max-width: 750px){\r\n\t\r\n\t\t\r\n\r\n\t.card-deck{\r\n\t  display: -ms-grid;\r\n\t  display: grid;\r\n\t  width: 100%;\r\n\t  -ms-grid-columns: (50%)[2];\r\n\t      grid-template-columns: repeat(2, 50%);\r\n\t  -ms-grid-rows: (50%)[2];\r\n\t      grid-template-rows: repeat(2, 50%);\r\n\t  grid-column-gap: 1rem;\r\n\t}\r\n\r\n\t.card{\r\n\t\t border: 0px !Important;\r\n\t\t background-color:#fcfcfc;\t\r\n\t}\r\n\t\r\n\t.card-body{\r\n\t\tbackground-color:#fcfcfc;\r\n\t\ttext-align: center;\r\n\t\tcolor: #404040;\r\n\t}\r\n}\r\n@media only screen and (min-width: 751px){\r\n\r\n\t.card-deck{\r\n\t  display: -ms-grid;\r\n\t  display: grid;\r\n\t  width: 100%;\r\n\t  -ms-grid-columns: (33.3%)[3];\r\n\t      grid-template-columns: repeat(3, 33.3%);\r\n\t  -ms-grid-rows: (33.3%)[3];\r\n\t      grid-template-rows: repeat(3, 33.3%);\r\n\t  grid-column-gap: 1rem;\r\n\t}\r\n\r\n\t.card{\r\n\t\tborder: 0px !Important;\r\n\t\tbackground-color:#fcfcfc;\t\r\n\t}\r\n\r\n\t.card-body{\r\n\t\tbackground-color:#fcfcfc;\r\n\t\ttext-align: center;\r\n\t\tcolor: #404040;\r\n\t}\r\n\r\n\t\r\n}\r\n.work-grid-wrapper{\r\n\tmargin-top: 95px;\r\n}\r\n.img-fluid{\r\n\t-webkit-transition: opacity .3s ease-out;\r\n\ttransition: opacity .3s ease-out;\r\n}\r\n.card:hover .img-fluid {\r\n  opacity: 0.7;\r\n}\r\n.card-body{\r\n\tbackground-color:#fcfcfc;\r\n\tfont-size: 14px;\r\n\ttext-align: center;\r\n\tcolor: #404040;\r\n}\r\n.card-title{\r\n\tfont-family: Source Code Pro;\r\n\tfont-weight: 400;\r\n    font-size: 14px;\r\n    line-height: 1.6em;\r\n    text-transform: uppercase;\r\n    text-decoration: none;\r\n    letter-spacing: .06em;\r\n    text-align: center;\r\n    font-weight: 300;\r\n    font-style: normal;\r\n    text-transform: none;\r\n    color: #404040;\r\n}\r\n.grid-control-box{\r\n    clear: both;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n    margin-bottom: 2%;\r\n}\r\n#nav-button-box > span{\r\n\tcursor: pointer;\r\n \tcolor: #575757;\r\n}\r\n.back-button{\r\n  color: #575757; \r\n  text-decoration: none;\r\n \r\n  \r\n  \r\n}"

/***/ }),

/***/ "./src/app/workgrid/workgrid.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container work-grid-wrapper\" id=\"wgrid\" >\n\t\n\t<div class=\"grid-control-box\" *ngIf = \"activateNavMenu\">\n\t\t\t\n\t\t\t<div>\n\t\t\t\t<a class=\"back-button\" href=\"#\" >\n\t\t\t\t\t\tBACK TO HOME\n\t\t\t\t</a>\n\t\t\t</div>\n\n\t\t\t<div id=\"nav-button-box\">\n\t\t\t\t<span (click)=\"OnNavSpanClick(false)\"> PREV    </span>\n\t\t\t\t  / \n\t\t\t\t<span (click)=\"OnNavSpanClick(true)\">   NEXT </span>\n\t\t\t</div>\n\t</div>\n\n\t<div class=\"card-deck\">\n\t\t <div class=\"card\"  *ngFor=\"let card of workThumbnails\" >\n\t\t  \t<a routerLink=\"/work/{{card.url}}\" class=\"non-underline\">\n\t\t\t    \n\t\t\t    <img class=\"img-fluid\" width=\"100%\" src={{card.imgSrc}} alt=\"Card image cap\">\t\n\t\t\t    \n\t\t\t    <div class=\"card-body\">\n\t\t\t      <div class=\"card-title\">{{card.title | uppercase }}</div>\n\t\t\t    </div>\n\t\t     </a>\n\t\t</div>\n\t</div>\n\t\n</div>"

/***/ }),

/***/ "./src/app/workgrid/workgrid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkgridComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__work_info_service__ = __webpack_require__("./src/app/work-info.service.ts");
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
    function WorkgridComponent(workInfoService, router) {
        this.workInfoService = workInfoService;
        this.router = router;
    }
    WorkgridComponent.prototype.getWorkThumbnails = function () {
        var _this = this;
        this.workInfoService.getWorkThumbnails()
            .subscribe(function (workArray) { return _this.workThumbnails = workArray; });
    };
    WorkgridComponent.prototype.getPageInfo = function (url) {
        var _this = this;
        this.workInfoService.getFocusedWorkUrlIndex(url).
            subscribe(function (idx) { return _this.currentWorkPageIndex = idx; });
    };
    WorkgridComponent.prototype.OnNavSpanClick = function (isNext) {
        var _this = this;
        if (isNext)
            this.currentWorkPageIndex++;
        else
            this.currentWorkPageIndex--;
        var newPageIdx = Math.min(Math.max(this.currentWorkPageIndex, 0), this.workInfoService.maxWorkPageCount - 1);
        this.workInfoService.getWorkUrlByIndex(newPageIdx).
            subscribe(function (pageUrl) {
            _this.router.navigate(['/work/', pageUrl]);
        });
    };
    WorkgridComponent.prototype.ngOnInit = function () {
        var hrefLink = window.location.href.split('#/').pop();
        this.activateNavMenu = ("" != hrefLink);
        var linkName = hrefLink.split('work/').pop();
        if (linkName != "") {
            this.getPageInfo(linkName);
        }
        this.getWorkThumbnails();
    };
    WorkgridComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-workgrid',
            template: __webpack_require__("./src/app/workgrid/workgrid.component.html"),
            styles: [__webpack_require__("./src/app/workgrid/workgrid.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__work_info_service__["a" /* WorkInfoService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
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