webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__building_permits_building_permits_component__ = __webpack_require__("../../../../../src/app/building-permits/building-permits.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stormwater_permits_stormwater_permits_component__ = __webpack_require__("../../../../../src/app/stormwater-permits/stormwater-permits.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__openspace_permits_openspace_permits_component__ = __webpack_require__("../../../../../src/app/openspace-permits/openspace-permits.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__thoroughfare_permits_thoroughfare_permits_component__ = __webpack_require__("../../../../../src/app/thoroughfare-permits/thoroughfare-permits.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var appRoutes = [
    // {
    //     path:'home',
    //     component:MainComponent
    // },
    //   {
    //     path: '',
    //     redirectTo: '/home',
    //     pathMatch: 'full'
    //   },
    {
        path: 'building',
        component: __WEBPACK_IMPORTED_MODULE_2__building_permits_building_permits_component__["a" /* BuildingPermitsComponent */]
    },
    {
        path: 'stormwater',
        component: __WEBPACK_IMPORTED_MODULE_3__stormwater_permits_stormwater_permits_component__["a" /* StormwaterPermitsComponent */]
    },
    {
        path: 'openspace',
        component: __WEBPACK_IMPORTED_MODULE_4__openspace_permits_openspace_permits_component__["a" /* OpenspacePermitsComponent */]
    },
    {
        path: 'thoroughfare',
        component: __WEBPACK_IMPORTED_MODULE_5__thoroughfare_permits_thoroughfare_permits_component__["a" /* ThoroughfarePermitsComponent */]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(appRoutes, {
                    enableTracing: true
                })
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ],
            providers: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-toolbar-row {\n    height: 64px;\n    width: 100%;\n    white-space: normal !important;\n}\n\nimg {\n    max-width: 50px;\n    margin-right: 20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-main></app-main>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__calculator_output_calculator_output_component__ = __webpack_require__("../../../../../src/app/calculator-output/calculator-output.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__development_entry_development_entry_component__ = __webpack_require__("../../../../../src/app/development-entry/development-entry.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__help_dialog_help_dialog_component__ = __webpack_require__("../../../../../src/app/help-dialog/help-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__splash_dialog_splash_dialog_component__ = __webpack_require__("../../../../../src/app/splash-dialog/splash-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__construction_type_pipe__ = __webpack_require__("../../../../../src/app/construction-type.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__building_type_pipe__ = __webpack_require__("../../../../../src/app/building-type.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__main_main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__building_permits_building_permits_component__ = __webpack_require__("../../../../../src/app/building-permits/building-permits.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__stormwater_permits_stormwater_permits_component__ = __webpack_require__("../../../../../src/app/stormwater-permits/stormwater-permits.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__openspace_permits_openspace_permits_component__ = __webpack_require__("../../../../../src/app/openspace-permits/openspace-permits.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__thoroughfare_permits_thoroughfare_permits_component__ = __webpack_require__("../../../../../src/app/thoroughfare-permits/thoroughfare-permits.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__landuse_pipe__ = __webpack_require__("../../../../../src/app/landuse.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__shared_service__ = __webpack_require__("../../../../../src/app/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__stormwater_service__ = __webpack_require__("../../../../../src/app/stormwater.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__openspace_service__ = __webpack_require__("../../../../../src/app/openspace.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__thoroughfare_service__ = __webpack_require__("../../../../../src/app/thoroughfare.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__calculation_service__ = __webpack_require__("../../../../../src/app/calculation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__building_service__ = __webpack_require__("../../../../../src/app/building.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__thoroughfare_pipe__ = __webpack_require__("../../../../../src/app/thoroughfare.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__stormwater_map_stormwater_map_component__ = __webpack_require__("../../../../../src/app/stormwater-map/stormwater-map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__openspace_dialog_openspace_dialog_component__ = __webpack_require__("../../../../../src/app/openspace-dialog/openspace-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__calculator_output_calculator_output_component__["a" /* CalculatorOutputComponent */],
                __WEBPACK_IMPORTED_MODULE_10__development_entry_development_entry_component__["a" /* DevelopmentEntryComponent */],
                __WEBPACK_IMPORTED_MODULE_11__help_dialog_help_dialog_component__["a" /* HelpDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_12__splash_dialog_splash_dialog_component__["a" /* SplashDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_13__construction_type_pipe__["a" /* ConstructionTypePipe */],
                __WEBPACK_IMPORTED_MODULE_14__building_type_pipe__["a" /* BuildingTypePipe */],
                __WEBPACK_IMPORTED_MODULE_15__main_main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_16__building_permits_building_permits_component__["a" /* BuildingPermitsComponent */],
                __WEBPACK_IMPORTED_MODULE_17__stormwater_permits_stormwater_permits_component__["a" /* StormwaterPermitsComponent */],
                __WEBPACK_IMPORTED_MODULE_18__openspace_permits_openspace_permits_component__["a" /* OpenspacePermitsComponent */],
                __WEBPACK_IMPORTED_MODULE_19__thoroughfare_permits_thoroughfare_permits_component__["a" /* ThoroughfarePermitsComponent */],
                __WEBPACK_IMPORTED_MODULE_20__landuse_pipe__["a" /* LandusePipe */],
                __WEBPACK_IMPORTED_MODULE_27__thoroughfare_pipe__["a" /* ThoroughfarePipe */],
                __WEBPACK_IMPORTED_MODULE_28__stormwater_map_stormwater_map_component__["a" /* StormwaterMapComponent */],
                __WEBPACK_IMPORTED_MODULE_29__openspace_dialog_openspace_dialog_component__["a" /* OpenspaceDialogComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["j" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["l" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MatCheckboxModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MatGridListModule */]
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_12__splash_dialog_splash_dialog_component__["a" /* SplashDialogComponent */], __WEBPACK_IMPORTED_MODULE_11__help_dialog_help_dialog_component__["a" /* HelpDialogComponent */], __WEBPACK_IMPORTED_MODULE_28__stormwater_map_stormwater_map_component__["a" /* StormwaterMapComponent */], __WEBPACK_IMPORTED_MODULE_29__openspace_dialog_openspace_dialog_component__["a" /* OpenspaceDialogComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_21__shared_service__["a" /* SharedService */], __WEBPACK_IMPORTED_MODULE_22__stormwater_service__["a" /* StormwaterService */], __WEBPACK_IMPORTED_MODULE_23__openspace_service__["a" /* OpenspaceService */], __WEBPACK_IMPORTED_MODULE_24__thoroughfare_service__["a" /* ThoroughfareService */], __WEBPACK_IMPORTED_MODULE_26__building_service__["a" /* BuildingService */], __WEBPACK_IMPORTED_MODULE_25__calculation_service__["a" /* CalculationService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/building-permits/building-permits.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-toolbar-row {\n    height: 64px;\n    width: 100%;\n    white-space: normal !important;\n}\nimg {\n   max-width: 50px;\n   margin-right: 20px;\n\n}\n.mat-headline {\n    text-align: center;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/building-permits/building-permits.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <h1 class=\"mat-headline\">Building Permit Fee Calculator</h1>\n\n<development-entry style=\"width:80%\" (isResidentialUpdates)=\"handleIsResidentialUpdated($event)\"></development-entry>"

/***/ }),

/***/ "../../../../../src/app/building-permits/building-permits.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuildingPermitsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BuildingPermitsComponent = /** @class */ (function () {
    function BuildingPermitsComponent(dialog) {
        this.dialog = dialog;
        this.isResidential = false;
        this.title = 'Building and Trade Permit Fee Calculator';
    }
    BuildingPermitsComponent.prototype.handleIsResidentialUpdated = function (isResidential) {
        this.isResidential = isResidential;
    };
    ;
    BuildingPermitsComponent.prototype.ngOnInit = function () {
        //  window.setTimeout(() => {
        //     this.dialog.open(SplashDialogComponent);
        //   }, 500);
    };
    BuildingPermitsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-building-permits',
            template: __webpack_require__("../../../../../src/app/building-permits/building-permits.component.html"),
            styles: [__webpack_require__("../../../../../src/app/building-permits/building-permits.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatDialog */]])
    ], BuildingPermitsComponent);
    return BuildingPermitsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/building-type.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuildingTypePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BuildingTypePipe = /** @class */ (function () {
    function BuildingTypePipe() {
    }
    BuildingTypePipe.prototype.transform = function (buildings, construction) {
        if (!construction) {
            return buildings;
        }
        else if ((construction != 'IIIB' && construction != 'VB')) {
            return buildings;
        }
        else {
            console.log(construction);
            var retVals_1 = [];
            buildings.forEach(function (building) {
                if ((construction === 'IIIB' || construction === 'VB') && building.group.indexOf('I-2') === -1) {
                    retVals_1.push(building);
                }
            });
            return retVals_1;
        }
    };
    BuildingTypePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
            name: 'buildingType'
        })
    ], BuildingTypePipe);
    return BuildingTypePipe;
}());



/***/ }),

/***/ "../../../../../src/app/building.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuildingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BuildingService = /** @class */ (function () {
    function BuildingService() {
    }
    BuildingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], BuildingService);
    return BuildingService;
}());



/***/ }),

/***/ "../../../../../src/app/calculation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalculationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CalculationService = /** @class */ (function () {
    function CalculationService() {
        this.minFee = 106;
    }
    CalculationService.prototype.calcValuation = function (card) {
        debugger;
        var meansLocationFactor = 0.8381; //0.838137101;
        var valuation = 0;
        if (card.constructScope && card.squareFeet && card.construction) {
            valuation = meansLocationFactor * card.constructScope.percent * card.squareFeet * card.construction.value;
        }
        return Promise.resolve(valuation);
    };
    CalculationService.prototype.calcReviewFee = function (fee, cards, tiers) {
        var _this = this;
        return new Promise(function (resolve) {
            var valuation = 0;
            fee.value = 0;
            cards.forEach(function (card) {
                if (card.constructScope.name === 'New Construction') {
                    valuation += card.calculations.valuation;
                }
            });
            if (valuation === 0) {
                resolve(fee);
            }
            else {
                _this.calcBldgPermit(valuation, tiers, true).then(function (building) {
                    fee.value = Math.round(building * fee.residential);
                    fee.tech = _this.calcTechFee(fee.value);
                    resolve(fee);
                });
            }
        });
    };
    CalculationService.prototype.getFees = function (building, isResidential, fee, cards, tiers) {
        fee.value = 0;
        if (building > 0) {
            fee.value = building * fee.commercial;
            if (isResidential) {
                fee.value = building * fee.residential;
                if (fee.name === "Plan Review") {
                    this.calcReviewFee(fee, cards, tiers);
                }
            }
            if ((fee.value < this.minFee || building <= this.minFee) && fee.name != "Plan Review") {
                fee.value = this.minFee;
            }
        }
        fee.tech = this.calcTechFee(fee.value);
        fee.value = Math.round(fee.value);
        return fee;
    };
    CalculationService.prototype.calcFees = function (calculations, cards, tiers) {
        if (calculations.building.value > 0) {
            calculations.review = this.getFees(calculations.building.value, calculations.isResidential, calculations.review, cards, tiers);
            calculations.electrical = this.getFees(calculations.building.value, calculations.isResidential, calculations.electrical);
            calculations.mechanical = this.getFees(calculations.building.value, calculations.isResidential, calculations.mechanical);
            calculations.plumbing = this.getFees(calculations.building.value, calculations.isResidential, calculations.plumbing);
        }
        return Promise.resolve(calculations);
    };
    CalculationService.prototype.calcBldgPermit = function (valuation, tiers, isResidential) {
        var costper = 0;
        var bldgPermit = 0;
        var BreakException = {};
        if (valuation > 0 && !isResidential) {
            var i = 0;
            var tier = null;
            for (; i < tiers.length; i++) {
                tier = tiers[i];
                if ((valuation > tier.min && valuation < tier.max) || !tier.max) {
                    if (i === 0) {
                        bldgPermit = (valuation / 1000) * tier['costper'];
                    }
                    else {
                        bldgPermit = (((valuation - tiers[i - 1]['max']) / 1000) * tier['costper']) + tiers[i - 1]['cumulative'];
                    }
                    break;
                }
            }
        }
        if (isResidential) {
            bldgPermit = valuation * 0.0026;
        }
        if (bldgPermit < this.minFee) {
            bldgPermit = this.minFee;
        }
        return Promise.resolve(bldgPermit);
    };
    CalculationService.prototype.calcTechFee = function (fee) {
        return Math.round(Math.round(fee) * 0.04);
    };
    CalculationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], CalculationService);
    return CalculationService;
}());



/***/ }),

/***/ "../../../../../src/app/calculations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Calculations; });
var Calculations = /** @class */ (function () {
    function Calculations() {
        this.isResidential = false;
        this.valuation = 0;
        this.total = 0;
    }
    return Calculations;
}());



/***/ }),

/***/ "../../../../../src/app/calculator-output/calculator-output.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-card {\n    margin: 10px;\n}\n\n.total .mat-line{\n    font-weight: bold;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/calculator-output/calculator-output.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card\">\n  <mat-card-header>\n      <mat-card-title><h3>Fee Details *</h3></mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n      <mat-list>\n          <mat-list-item>\n              <h3 mat-line>Valuation</h3>\n              <p mat-line *ngIf=\"calculationService.calculations.valuation > 0\">\n                  {{calculationService.calculations.valuation | currency:'USD':true:'1.0-0'}}\n              </p>\n              <p mat-line *ngIf=\"calculationService.calculations.valuation === 0\">\n                  --\n              </p>                \n          </mat-list-item>\n          <mat-list-item>\n              <h3 mat-line>Building Permit</h3>\n              <p mat-line *ngIf=\"calculationService.calculations.valuation > 0\">\n                  {{calculationService.calculations.building.value + calculationService.calculations.building.tech | currency:'USD':true:'1.0-0'}}\n              </p>\n              <p mat-line *ngIf=\"calculationService.calculations.valuation > 0\">\n                  <small><em>({{calculationService.calculations.building.value | currency:'USD':true:'1.0-0'}} + {{calculationService.calculations.building.tech | currency:'USD':true:'1.0-0'}} Technology Fee)</em></small>\n              </p>                     \n              <p mat-line *ngIf=\"calculationService.calculations.valuation === 0\">\n                  --\n              </p>                   \n          </mat-list-item>\n          <mat-list-item>\n              <h3 mat-line>Electrical Permit</h3>\n              <p mat-line *ngIf=\"calculationService.calculations.valuation > 0\">\n                  {{calculationService.calculations.electrical.value + calculationService.calculations.electrical.tech | currency:'USD':true:'1.0-0'}}\n              </p>\n              <p mat-line *ngIf=\"calculationService.calculations.valuation > 0\">\n                  <small><em>({{calculationService.calculations.electrical.value | currency:'USD':true:'1.0-0'}} + {{calculationService.calculations.electrical.tech | currency:'USD':true:'1.0-0'}} Technology Fee)</em></small>\n              </p>                        \n              <p mat-line *ngIf=\"calculationService.calculations.valuation === 0\">\n                  --\n              </p>                   \n          </mat-list-item>\n          <mat-list-item>\n              <h3 mat-line>Mechanical Permit</h3>\n              <p mat-line *ngIf=\"calculationService.calculations.valuation > 0\">\n                  {{calculationService.calculations.mechanical.value + calculationService.calculations.mechanical.tech | currency:'USD':true:'1.0-0'}}\n              </p>\n              <p mat-line *ngIf=\"calculationService.calculations.valuation > 0\">\n                  <small><em>({{calculationService.calculations.mechanical.value | currency:'USD':true:'1.0-0'}} + {{calculationService.calculations.mechanical.tech | currency:'USD':true:'1.0-0'}} Technology Fee)</em></small>\n              </p>                \n              <p mat-line *ngIf=\"calculationService.calculations.valuation === 0\">\n                  --\n              </p>                   \n          </mat-list-item>            \n          <mat-list-item>\n              <h3 mat-line>Plumbing Permit</h3>\n              <p mat-line *ngIf=\"calculationService.calculations.valuation > 0\">\n                  {{calculationService.calculations.plumbing.value + calculationService.calculations.plumbing.tech | currency:'USD':true:'1.0-0'}}\n              </p>\n              <p mat-line *ngIf=\"calculationService.calculations.valuation > 0\">\n                  <small><em>({{calculationService.calculations.plumbing.value | currency:'USD':true:'1.0-0'}} + {{calculationService.calculations.plumbing.tech | currency:'USD':true:'1.0-0'}} Technology Fee)</em></small>\n              </p>                     \n              <p mat-line *ngIf=\"calculationService.calculations.valuation === 0\">\n                  --\n              </p>                   \n          </mat-list-item>\n          <mat-list-item>\n              <h3 mat-line>Plan Review Fee</h3>\n              <p mat-line *ngIf=\"calculationService.calculations.valuation > 0\">\n                  {{calculationService.calculations.review.value + calculationService.calculations.review.tech | currency:'USD':true:'1.0-0'}}\n              </p>\n              <p mat-line *ngIf=\"calculationService.calculations.valuation > 0\">\n                  <small><em>({{calculationService.calculations.review.value | currency:'USD':true:'1.0-0'}} + {{calculationService.calculations.review.tech | currency:'USD':true:'1.0-0'}} Technology Fee)</em></small>\n              </p>                     \n              <p mat-line *ngIf=\"calculationService.calculations.valuation === 0\">\n                  --\n              </p>                   \n          </mat-list-item>            \n          <mat-list-item class=\"total\">\n              <h3 mat-line>Total Permit</h3>\n              <p mat-line *ngIf=\"calculationService.calculations.valuation > 0\">\n                  <strong>{{getTotal() | currency:'USD':true:'1.0-0'}}</strong>\n              </p>\n              <p mat-line *ngIf=\"calculationService.calculations.valuation === 0\">\n                  --\n              </p>                   \n          </mat-list-item>\n*<small><em> only represents Building and Trade permit fees</em></small>\n\n      </mat-list>\n  </mat-card-content>\n  <mat-card-actions style=\"margin:0 auto;\">\n\n  </mat-card-actions>\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/calculator-output/calculator-output.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalculatorOutputComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__development_card__ = __webpack_require__("../../../../../src/app/development-card.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calculations__ = __webpack_require__("../../../../../src/app/calculations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tiers_service__ = __webpack_require__("../../../../../src/app/tiers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__calculation_service__ = __webpack_require__("../../../../../src/app/calculation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fee__ = __webpack_require__("../../../../../src/app/fee.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_service__ = __webpack_require__("../../../../../src/app/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__building_service__ = __webpack_require__("../../../../../src/app/building.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CalculatorOutputComponent = /** @class */ (function () {
    function CalculatorOutputComponent(differs, tiersService, calculationService, sharedService, buildingService) {
        this.differs = differs;
        this.tiersService = tiersService;
        this.calculationService = calculationService;
        this.sharedService = sharedService;
        this.buildingService = buildingService;
        this.differ = differs.find({}).create();
        this.cardDiffer = differs.find({}).create();
    }
    CalculatorOutputComponent.prototype.ngOnInit = function () {
        if (!this.calculationService.calculations) {
            this.calculationService.calculations = new __WEBPACK_IMPORTED_MODULE_2__calculations__["a" /* Calculations */]();
            this.calculationService.calculations.valuation = 0;
            this.calculationService.calculations.building = new __WEBPACK_IMPORTED_MODULE_5__fee__["a" /* Fee */]("Building", 0, 0, 0.0026);
            this.calculationService.calculations.electrical = new __WEBPACK_IMPORTED_MODULE_5__fee__["a" /* Fee */]("Electrical", 0, 1.01, 0.67);
            this.calculationService.calculations.review = new __WEBPACK_IMPORTED_MODULE_5__fee__["a" /* Fee */]("Plan Review", 0, 0.55, 0.72);
            this.calculationService.calculations.plumbing = new __WEBPACK_IMPORTED_MODULE_5__fee__["a" /* Fee */]("Plumbing", 0, 0.55, 0.22);
            this.calculationService.calculations.mechanical = new __WEBPACK_IMPORTED_MODULE_5__fee__["a" /* Fee */]("Mechanical", 0, 0.78, 0.31);
        }
        if (!this.tiers) {
            this.getTiers();
        }
    };
    CalculatorOutputComponent.prototype.beforeunloadHandler = function (event) {
        if (this.calculationService.calculations.valuation > 0) {
            this.cards.forEach(function (card) {
                ga('send', 'event', 'Parameters', 'Building Type', card.building.group);
                ga('send', 'event', 'Parameters', 'Construction Type', card.construction.key);
                ga('send', 'event', 'Parameters', 'Construction Scope', card.constructScope);
                ga('send', 'event', 'Parameters', 'Square Feet', card.squareFeet);
            });
            ga('send', 'event', 'Calculations', 'Total Valuation', this.calculationService.calculations.valuation);
            ga('send', 'event', 'Calculations', 'Total Building Fee', this.calculationService.calculations.building);
            ga('send', 'event', 'Calculations', 'Total Electrical Fee', this.calculationService.calculations.electrical);
            ga('send', 'event', 'Calculations', 'Total Mechanical Fee', this.calculationService.calculations.mechanical);
            ga('send', 'event', 'Calculations', 'Total Plumbing Fee', this.calculationService.calculations.plumbing);
            ga('send', 'event', 'Calculations', 'Total Review Fee', this.calculationService.calculations.review);
            ga('send', 'event', 'Calculations', 'Total Permit Fee', this.calculationService.calculations.total);
        }
    };
    CalculatorOutputComponent.prototype.getTotal = function () {
        var total = (this.calculationService.calculations.building.value + this.calculationService.calculations.building.tech) + (this.calculationService.calculations.review.value + this.calculationService.calculations.review.tech) + (this.calculationService.calculations.electrical.value + this.calculationService.calculations.electrical.tech) + (this.calculationService.calculations.plumbing.value + this.calculationService.calculations.plumbing.tech) + (this.calculationService.calculations.mechanical.value + this.calculationService.calculations.mechanical.tech);
        this.sharedService.emitChange({ total: total, calculator: 'building' });
        return total;
    };
    CalculatorOutputComponent.prototype.getTiers = function () {
        var _this = this;
        this.tiersService.getTiers().subscribe(function (tiers) {
            _this.tiers = tiers;
            _this.calculationService.calculations.tiers = tiers;
        }, function (err) {
            console.log(err);
        });
    };
    CalculatorOutputComponent.prototype.sumValuation = function () {
        var valuation = 0;
        this.cards.forEach(function (card) {
            valuation += card.calculations.valuation;
        });
        this.calculationService.calculations.valuation = valuation;
        this.sumBldgPermit();
    };
    CalculatorOutputComponent.prototype.sumBldgPermit = function () {
        var _this = this;
        var bldgPermit = 0;
        this.calculationService.calcBldgPermit(this.calculationService.calculations.valuation, this.calculationService.calculations.tiers, this.calculationService.calculations.isResidential).then(function (building) {
            _this.calculationService.calculations.building.value = building;
            _this.calculationService.calculations.building.tech = Math.round(Math.round(building) * 0.04);
            // this.calculationService.calculations = this.calcTechAdder(this.calculationService.calculations);
            _this.calculationService.calcFees(_this.calculationService.calculations, _this.cards, _this.tiers).then(function (calculations) {
                _this.calculationService.calculations = calculations;
                _this.calculationService.calculations.building.value = Math.round(_this.calculationService.calculations.building.value);
            });
        });
    };
    CalculatorOutputComponent.prototype.ngDoCheck = function () {
        var _this = this;
        var card = this.cards[this.cardIndex];
        var changes = this.differ.diff(card.calculations);
        if (changes) {
            changes.forEachChangedItem(function (r) {
                if ((r.key === 'valuation') && r.currentValue != r.previousValue && r.currentValue > 0 && _this.cardIndex === card.cardindex) {
                    _this.calculationService.calculations.isResidential = card.calculations.isResidential;
                    _this.sumValuation();
                }
            });
        }
        //added to determine change of R-3 construction scope from New Construction to Alteration since valuation does not change
        if (card.building.group.indexOf('R-3') > -1) {
            console.log('test');
            var cardChanges = this.cardDiffer.diff(card);
            if (cardChanges) {
                cardChanges.forEachChangedItem(function (r) {
                    if ((r.key === 'constructScope') && ((r.currentValue.name === 'Addition' && r.previousValue.name === 'New Construction') || (r.currentValue.name === 'New Construction' && r.previousValue.name === 'Addition'))) {
                        _this.calculationService.calculations.isResidential = card.calculations.isResidential;
                        _this.sumValuation();
                    }
                });
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__development_card__["a" /* DevelopmentCard */])
    ], CalculatorOutputComponent.prototype, "card", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('window:beforeunload', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], CalculatorOutputComponent.prototype, "beforeunloadHandler", null);
    CalculatorOutputComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'calculator-output',
            inputs: ['cards', 'cardIndex', 'calculations'],
            template: __webpack_require__("../../../../../src/app/calculator-output/calculator-output.component.html"),
            styles: [__webpack_require__("../../../../../src/app/calculator-output/calculator-output.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__tiers_service__["a" /* TiersService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* KeyValueDiffers */], __WEBPACK_IMPORTED_MODULE_3__tiers_service__["a" /* TiersService */], __WEBPACK_IMPORTED_MODULE_4__calculation_service__["a" /* CalculationService */], __WEBPACK_IMPORTED_MODULE_6__shared_service__["a" /* SharedService */], __WEBPACK_IMPORTED_MODULE_7__building_service__["a" /* BuildingService */]])
    ], CalculatorOutputComponent);
    return CalculatorOutputComponent;
}());



/***/ }),

/***/ "../../../../../src/app/construction-type.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConstructionTypePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ConstructionTypePipe = /** @class */ (function () {
    function ConstructionTypePipe() {
    }
    ConstructionTypePipe.prototype.transform = function (values, args) {
        var retVals = [];
        values.forEach(function (value) {
            if (value.value > 0) {
                retVals.push(value);
            }
        });
        return retVals;
    };
    ConstructionTypePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
            name: 'constructionType'
        })
    ], ConstructionTypePipe);
    return ConstructionTypePipe;
}());



/***/ }),

/***/ "../../../../../src/app/development-card.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DevelopmentCard; });
var DevelopmentCard = /** @class */ (function () {
    function DevelopmentCard() {
    }
    return DevelopmentCard;
}());



/***/ }),

/***/ "../../../../../src/app/development-entry/development-entry.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "form {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n  }\n  \nmat-form-field{\n    width: 100%;\n  }\n  \nmat-card {\n    margin: 10px;\n}\n  \nmat-select {\n    width: 100%;\n}\n  \nmat-select{\n    margin-bottom: 10px;\n}\n  \nmat-input-container {\n    width: 100%;\n}\n  \nmat-card-header button {\n  margin-left: auto;\n}\n  \nmat-card-header {\n    width: 100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/development-entry/development-entry.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayout.gt-xs=\"row\">\n  <div fxFlex=\"50%\">\n    <ng-container *ngFor=\"let card of buildingService.cards; let i = index\">\n      <mat-card *ngIf=\"i === buildingService.cardIndex\" class=\"example-card\">\n        <mat-card-header class=\"wrap\">\n          <mat-card-title>\n            <h3>Building Occupancy {{card.cardindex + 1}}</h3>\n          </mat-card-title>\n          <button mat-button mat-icon-button (click)=\"showHelp()\"><mat-icon>help_outline</mat-icon></button>\n        </mat-card-header>\n        <mat-card-content>\n          <form>\n            <mat-form-field color=\"accent\">\n              <mat-select placeholder=\"Building Type\" [(ngModel)]=\"card.building\" name=\"building\" (ngModelChange)=\"buildingTypeChanged(card)\">\n                <mat-option *ngFor=\"let building of getBuildingTypes(buildingService.iccbvd, isResidential, buildingService.cards.length, card.construction.key) | buildingType: card.construction.key\"\n                  [value]=\"building\">\n                  {{building.group}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n\n            <mat-form-field color=\"accent\">\n\n              <mat-select [disabled]=\"card.building.values.length === 0\" placeholder=\"Construction Type\" [(ngModel)]=\"card.construction\"\n                name=\"construction\" (ngModelChange)=\"calcValuation(card.construction.value, card)\">\n                <mat-option *ngFor=\"let value of card.building.values | constructionType: value\" [value]=\"value\">\n                  {{value.key}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n\n            <mat-form-field color=\"accent\">\n\n              <mat-select placeholder=\"Construction Scope\" [(ngModel)]=\"card.constructScope\" name=\"scope\" (ngModelChange)=\"calcValuation(card.construction.value, card)\">\n                <mat-option *ngFor=\"let scope of buildingService.scopes\" [value]=\"scope\">\n                  {{scope.name}}\n                </mat-option>\n              </mat-select>\n            </mat-form-field>\n\n            <mat-form-field color=\"accent\">\n\n                <input matInput type=\"number\" min=\"0\" max=\"9999999\" matInput maxlength=\"7\" placeholder=\"Square Feet\" [(ngModel)]=\"card.squareFeet\"\n                  name=\"squareFeet\" (ngModelChange)=\"calcValuation(card.construction.value, card)\">\n            </mat-form-field>\n          </form>\n        </mat-card-content>\n        <mat-card-actions style=\"margin:0 auto;\">\n          <button mat-icon-button (click)=\"getPreviousCard()\" *ngIf=\"buildingService.cards.length > 1 && buildingService.cardIndex > 0\" matTooltip=\"Previous Building Type\">\n            <mat-icon>keyboard_arrow_left</mat-icon>\n          </button>\n          <button mat-icon-button (click)=\"getNextCard()\" *ngIf=\"buildingService.cards.length > 1 && buildingService.cardIndex != buildingService.cards.length - 1\" matTooltip=\"Next Building Type\">\n            <mat-icon>keyboard_arrow_right</mat-icon>\n          </button>\n          <button mat-button mat-raised-button color=\"accent\" (click)=\"addCard()\" mdTooltip=\"Add Building Type\" *ngIf=\"card.building && card.construction && card.constructScope && card.squareFeet && buildingService.cardIndex === buildingService.cards.length - 1\">ADD</button>\n          <button mat-button mat-raised-button color=\"accent\"(click)=\"removeCard(buildingService.cards, i)\" *ngIf=\"buildingService.cards.length > 1\" mdTooltip=\"Remove Building Type\">REMOVE</button>\n        </mat-card-actions>\n      </mat-card>\n    </ng-container>\n  </div>\n  <div fxFlex=\"50%\">\n    <calculator-output [cards]=\"buildingService.cards\" [cardIndex]=\"buildingService.cardIndex\" ></calculator-output>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/development-entry/development-entry.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DevelopmentEntryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__iccbvd_service__ = __webpack_require__("../../../../../src/app/iccbvd.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calculation_service__ = __webpack_require__("../../../../../src/app/calculation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__development_card__ = __webpack_require__("../../../../../src/app/development-card.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tiers_service__ = __webpack_require__("../../../../../src/app/tiers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__calculations__ = __webpack_require__("../../../../../src/app/calculations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__help_dialog_help_dialog_component__ = __webpack_require__("../../../../../src/app/help-dialog/help-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__building_service__ = __webpack_require__("../../../../../src/app/building.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var DevelopmentEntryComponent = /** @class */ (function () {
    function DevelopmentEntryComponent(iccbvdService, calculationService, tiersService, dialog, buildingService) {
        this.iccbvdService = iccbvdService;
        this.calculationService = calculationService;
        this.tiersService = tiersService;
        this.dialog = dialog;
        this.buildingService = buildingService;
        this.isResidentialUpdated = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    DevelopmentEntryComponent.prototype.ngOnInit = function () {
        if (!this.buildingService.cards) {
            this.buildingService.cardIndex = 0;
            var devcard = new __WEBPACK_IMPORTED_MODULE_3__development_card__["a" /* DevelopmentCard */]();
            devcard.cardindex = 0;
            devcard.building = { group: "", values: [] };
            devcard.construction = { key: "", value: 0 };
            devcard.calculations = new __WEBPACK_IMPORTED_MODULE_5__calculations__["a" /* Calculations */]();
            devcard.constructScope = { name: "", percent: 0 };
            this.buildingService.cards = [devcard];
            this.buildingService.selectedBuilding = { values: [] };
            this.buildingService.selectedConstruction = { value: 0 };
            this.buildingService.scopes = [{ name: 'New Construction', percent: 1 }, { name: 'Level 1 Alteration', percent: 0.25 }, { name: 'Level 2 Alteration', percent: 0.5 }, { name: 'Level 3 Alteration', percent: 0.75 }, { name: 'Addition', percent: 1 }];
            this.getIccbvd();
        }
    };
    DevelopmentEntryComponent.prototype.showHelp = function () {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__help_dialog_help_dialog_component__["a" /* HelpDialogComponent */]);
    };
    DevelopmentEntryComponent.prototype.calcValuation = function (value, card) {
        this.calculationService.calcValuation(card).then(function (valuation) {
            card.calculations.valuation = valuation;
        });
    };
    DevelopmentEntryComponent.prototype.getIccbvd = function () {
        var _this = this;
        this.iccbvdService.getIccBvd().subscribe(function (iccbvd) { return _this.buildingService.iccbvd = iccbvd; }, function (err) {
        });
    };
    DevelopmentEntryComponent.prototype.checkConstructionPermitted = function (buildings, construction) {
        if (buildings) {
            buildings.forEach(function (building, index) {
                if ((construction === 'IIIB' || construction === 'VB') && building.group.indexOf('I-2') > -1) {
                    buildings.splice(index, 1);
                }
            });
            return buildings;
        }
        else {
            return null;
        }
    };
    DevelopmentEntryComponent.prototype.getBuildingTypes = function (buildings, isResidential, numCards, construction) {
        var types = new Array();
        if (buildings) {
            if (numCards <= 1) {
                types = buildings;
            }
            else {
                buildings.forEach(function (type) {
                    if (isResidential && type.group.indexOf('R-3') > -1) {
                        types.push(type);
                    }
                    else if (!isResidential && type.group.indexOf('R-3') < 0) {
                        types.push(type);
                    }
                });
            }
        }
        return types;
    };
    DevelopmentEntryComponent.prototype.addCard = function () {
        debugger;
        var devcard = new __WEBPACK_IMPORTED_MODULE_3__development_card__["a" /* DevelopmentCard */]();
        devcard.building = { group: "", values: [] };
        devcard.construction = { key: "", value: 0 };
        devcard.cardindex = this.buildingService.cards.length;
        devcard.calculations = new __WEBPACK_IMPORTED_MODULE_5__calculations__["a" /* Calculations */]();
        this.buildingService.cards.push(devcard);
        this.buildingService.cardIndex = devcard.cardindex;
    };
    DevelopmentEntryComponent.prototype.removeCard = function (cards, index) {
        var card = cards[this.buildingService.cardIndex];
        if (this.buildingService.cardIndex === 0) {
            cards.shift();
            this.buildingService.cardIndex = 0;
            cards.forEach(function (card) {
                card.cardindex -= 1;
            });
        }
        else {
            cards.splice(index, 1);
            this.buildingService.cardIndex -= 1;
        }
    };
    DevelopmentEntryComponent.prototype.getPreviousCard = function () {
        this.buildingService.cardIndex -= 1;
    };
    DevelopmentEntryComponent.prototype.getNextCard = function () {
        this.buildingService.cardIndex += 1;
    };
    DevelopmentEntryComponent.prototype.buildingTypeChanged = function (card) {
        var _this = this;
        var key = card.construction.key;
        this.isResidential = false;
        if (card.building.group === "R-3 Residential, one- and two-family") {
            card.calculations.isResidential = true;
            this.isResidential = true;
        }
        else {
            card.calculations.isResidential = false;
        }
        this.isResidentialUpdated.emit(this.isResidential);
        var timeoutId = setTimeout(function () {
            card.building.values.forEach(function (type) {
                if (type.key === card.construction.key) {
                    card.construction = type;
                }
            });
            _this.calcValuation(card.construction.value, card);
        }, 100);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean)
    ], DevelopmentEntryComponent.prototype, "isResidential", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], DevelopmentEntryComponent.prototype, "isResidentialUpdated", void 0);
    DevelopmentEntryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'development-entry',
            template: __webpack_require__("../../../../../src/app/development-entry/development-entry.component.html"),
            styles: [__webpack_require__("../../../../../src/app/development-entry/development-entry.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__iccbvd_service__["a" /* IccbvdService */], __WEBPACK_IMPORTED_MODULE_4__tiers_service__["a" /* TiersService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__iccbvd_service__["a" /* IccbvdService */], __WEBPACK_IMPORTED_MODULE_2__calculation_service__["a" /* CalculationService */], __WEBPACK_IMPORTED_MODULE_4__tiers_service__["a" /* TiersService */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["d" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_8__building_service__["a" /* BuildingService */]])
    ], DevelopmentEntryComponent);
    return DevelopmentEntryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/fee.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Fee; });
var Fee = /** @class */ (function () {
    function Fee(name, value, commercial, residential, tech) {
        this.name = name;
        this.value = value;
        this.commercial = commercial;
        this.residential = residential;
        this.tech = tech;
    }
    return Fee;
}());



/***/ }),

/***/ "../../../../../src/app/help-dialog/help-dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2,  mat-dialog-content {\n    font-family: Roboto,\"Helvetica Neue\",sans-serif;\n}\n\nh2,  mat-dialog-content {\n    font-family: Roboto,\"Helvetica Neue\",sans-serif;\n    text-align: center;\n}\n\n.mat-dialog-actions {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -ms-flex-line-pack: center;\n        align-content: center;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/help-dialog/help-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Instructions</h2>\n<mat-dialog-content>\n<p>This calculator is intended to provide fee estimates for building permits, trades permits and plan review fees for both commercial and residential construction projects. Please note that this calculator is for informational purposes only and the final calculation of fees will be provided by the Development Services Customer Services Center.</p>\n<p>In order to calculate an estimate please select from the drop downs a Building Type, Construction Type, Construction Scope and square feet of the project. Note that mixed use projects can be calculated by adding additional occupancies with the “Add” button which appears once all fields have values.</p>\n <p>If you have questions about how these fees are calculated please visit our <a href=\"http://dsinsider.com/images/Site/Documents/FAQ_New_Fee_Structure.pdf\" target=\"_blank\">FAQ</a> for more information. If you need additional assistance please feel free to email us at <a href=\"mailto:ds.help@raleighnc.gov\">ds.help@raleighnc.gov</a>.</p>\n</mat-dialog-content>\n<mat-dialog-actions>\n  <!--<button mat-button mat-dialog-close>No</button>-->\n  <!-- Can optionally provide a result for the closing dialog. -->\n  <button mat-button mat-raised-button color=\"accent\" [mat-dialog-close]=\"true\">OK</button>\n</mat-dialog-actions>"

/***/ }),

/***/ "../../../../../src/app/help-dialog/help-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelpDialogComponent = /** @class */ (function () {
    function HelpDialogComponent() {
    }
    HelpDialogComponent.prototype.ngOnInit = function () {
    };
    HelpDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-help-dialog',
            template: __webpack_require__("../../../../../src/app/help-dialog/help-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/help-dialog/help-dialog.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HelpDialogComponent);
    return HelpDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/iccbvd.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IccbvdService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IccbvdService = /** @class */ (function () {
    function IccbvdService(http) {
        this.http = http;
    }
    IccbvdService.prototype.getIccBvd = function () {
        return this.http.get('./assets/iccbvd.json');
    };
    IccbvdService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], IccbvdService);
    return IccbvdService;
}());



/***/ }),

/***/ "../../../../../src/app/landuse.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandusePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LandusePipe = /** @class */ (function () {
    function LandusePipe() {
    }
    LandusePipe.prototype.transform = function (value, args) {
        var result = value.filter(function (v, i) { return args.selected.indexOf(i) === -1; });
        return result;
        // value.forEach((v,i) => {
        //   if (args.selected.indexOf(i) === -1) {
        //     return v;
        //   }
        // });
    };
    LandusePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
            name: 'landuse'
        })
    ], LandusePipe);
    return LandusePipe;
}());



/***/ }),

/***/ "../../../../../src/app/landuse.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Landuse; });
var Landuse = /** @class */ (function () {
    function Landuse(category, landuse, measure, measureLabel, selected, value, total, per, thresholds) {
        this.category = category;
        this.landuse = landuse;
        this.per = per;
        this.measure = measure;
        this.measureLabel = measureLabel;
        this.selected = selected;
        this.thresholds = thresholds;
        this.total = total;
        this.value = value;
    }
    return Landuse;
}());



/***/ }),

/***/ "../../../../../src/app/main/main.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".button-row {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    margin-bottom: 1em;\n    margin-top: 1em;\n  }\n\n  .title-row{\n    height: 100px !important;\n    width: 100% !important;\n    white-space: normal !important;\n}\n\n  img {\n   max-width: 100px;\n   margin-right: 10px;\n\n}\n\n  .mat-title {\n    text-align: center;\n}\n\n  mat-form-field, .mat-headline {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n\n  .calculator-row .mat-form-field{\n    font-size: initial;\n    width: 100%\n}\n\n  .calculator-row {\n    padding: 10px 10px 10px 10px;\n}\n\n  .mat-headline {\n    padding: 10px 0 0 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n\n        <mat-toolbar-row class=\"title-row\">\n            <img alt=\"seal\" src=\"https://www.raleighnc.gov/content/static/images/City-Seal-BW.png\" />\n\n          <span>RALEIGH FEE CALCULATOR</span>\n        </mat-toolbar-row>\n\n      </mat-toolbar>\n      <div class=\"dark-class calculator-row\">\n          <mat-form-field>\n              <mat-select placeholder=\"Select Calculator\" (change)=\"go($event)\" [value]=\"selectedCalculator\" >\n                <mat-option *ngFor=\"let calculator of calculators\" [value]=\"calculator.route\">\n                  {{ calculator.label }}\n                </mat-option>\n              </mat-select>\n            </mat-form-field> \n            \n      </div>\n\n        <!-- <h1 class=\"mat-title\">Permit Fee Calculators</h1>\n        <div class=\"button-row\" *ngFor=\"let calculator of calculators\">\n            <button mat-raised-button color=\"primary\" [routerLink]=\"calculator.route\">{{calculator.label}}</button>\n        </div> -->\n        <h1 class=\"mat-headline\">Total Fees: {{total | currency}}</h1>\n\n        <router-outlet (onTotal)=\"onTotal($event)\"></router-outlet>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_service__ = __webpack_require__("../../../../../src/app/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__splash_dialog_splash_dialog_component__ = __webpack_require__("../../../../../src/app/splash-dialog/splash-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MainComponent = /** @class */ (function () {
    function MainComponent(router, dialog, sharedService) {
        var _this = this;
        this.router = router;
        this.dialog = dialog;
        this.sharedService = sharedService;
        this.calculators = [
            {
                label: "Building Permit Fees",
                route: "building"
            }, {
                label: "Stormwater Fees",
                route: "stormwater"
            },
            {
                label: "Open Space Fees",
                route: "openspace"
            }, {
                label: "Thoroughfare Fees",
                route: "thoroughfare"
            }
        ];
        this.total = 0;
        this.fees = [];
        this.selectedCalculator = null;
        if (localStorage.getItem('total')) {
            this;
        }
        sharedService.changeEmitted$.subscribe(function (fee) {
            var matches = _this.fees.filter(function (f) {
                return fee.calculator === f.calculator;
            });
            if (matches.length === 0) {
                _this.fees.push(fee);
            }
            else {
                matches[0].total = fee.total;
            }
            _this.getTotal();
        });
    }
    MainComponent.prototype.getTotal = function () {
        var _this = this;
        this.total = 0;
        this.fees.forEach(function (fee) {
            _this.total += fee.total;
        });
    };
    // @HostListener('window:unload', ['$event'])
    // unloadHandler(event) {
    //  localStorage.setItem('feeTotal', JSON.stringify(this.fees));
    // }  
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.setTimeout(function () {
            _this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__splash_dialog_splash_dialog_component__["a" /* SplashDialogComponent */]);
            _this.selectedCalculator = _this.router.url.replace('/', '');
            // if (localStorage.getItem('feeTotal')) {
            //   this.fees = JSON.parse(localStorage.getItem('feeTotal'));
            //   this.getTotal();
            // }
        }, 500);
    };
    MainComponent.prototype.go = function (event) {
        this.selectedCalculator = event.value;
        this.router.navigate([event.value]);
    };
    MainComponent.prototype.onTotal = function (event) {
        this.getTotal();
    };
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main',
            template: __webpack_require__("../../../../../src/app/main/main.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_3__shared_service__["a" /* SharedService */]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "../../../../../src/app/openspace-dialog/openspace-dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-caption {\n    padding-left: 2em;\n}\n\n.mat-body-2, .mat-body-1 {\n    padding-left: 1em;\n}\n\n.mat-title {\n    margin: 0;\n}\n\n.mat-dialog-actions {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -ms-flex-line-pack: center;\n        align-content: center;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/openspace-dialog/openspace-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Definitions</h2>\n<mat-dialog-content>\n<h2 class=\"mat-title\">Single-family Development</h2>\n<div class=\"mat-body-2\">Detached Dwelling</div>\n<div class=\"mat-caption\">A structure containing one dwelling unit on its own lot.</div>\n<div class=\"mat-body-2\">Townhouses</div>\n<div class=\"mat-caption\">A project consisting of two or more single-family dwelling units, where land underneath each dwelling\n    unit is sold with that dwelling unit. Most townhouse units are attached; however, a townhouse\n    development may contain stand-alone detached townhouse units.</div>\n<h2 class=\"mat-title\">Multi-family Development</h2>\n<div class=\"mat-body-1\">Housing in which more than one dwelling unit is located in the same structure. Multifamily\n    development includes duplexes, apartments and residential condominiums.</div>\n<div class=\"mat-body-2\">Duplex</div>\n<div class=\"mat-caption\">A multi-family residence containing two dwelling units on one lot, each a separate, independent unit\n    with its own independent entrance. A dwelling with two units, each unit on its own lot, is not a duplex;\n    attached cluster housing and two attached townhouses are not a duplex.</div>\n<div class=\"mat-body-2\">Apartments</div>\n<div class=\"mat-caption\">Any dwelling containing three or more rented dwelling units.</div>    \n<div class=\"mat-body-2\">Condominiums</div>\n<div class=\"mat-caption\">Dwelling units or other building spaces in which the owner of the dwelling or space owns only the\n    air space of the dwelling and not the structure or land on which the structure sits. Condominiums are\n    often in multistory buildings.</div>    \n\n\n\n\n</mat-dialog-content>\n<mat-dialog-actions>\n  <!--<button mat-button mat-dialog-close>No</button>-->\n  <!-- Can optionally provide a result for the closing dialog. -->\n  <button mat-button mat-raised-button color=\"accent\" [mat-dialog-close]=\"true\">OK</button>\n</mat-dialog-actions>"

/***/ }),

/***/ "../../../../../src/app/openspace-dialog/openspace-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpenspaceDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OpenspaceDialogComponent = /** @class */ (function () {
    function OpenspaceDialogComponent() {
    }
    OpenspaceDialogComponent.prototype.ngOnInit = function () {
    };
    OpenspaceDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-openspace-dialog',
            template: __webpack_require__("../../../../../src/app/openspace-dialog/openspace-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/openspace-dialog/openspace-dialog.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OpenspaceDialogComponent);
    return OpenspaceDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/openspace-permits/openspace-permits.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@import url('https://js.arcgis.com/4.6/esri/css/main.css');\n.esri-view {\n    width: 100%;\n    height: 300px;\n}\nmat-toolbar-row {\n    height: 64px;\n    width: 100%;\n    white-space: normal !important;\n}\nimg {\n   max-width: 50px;\n   margin-right: 20px;\n\n}\n.mat-icon {\n    cursor: pointer;\n}\nmat-form-field, .mat-subheading-1, .mat-subheading-2, .mat-body-1 {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    margin-bottom: 1em;\n    margin-top: 1em;\n  }\nmat-card {\n    margin-left: auto;\n    margin-right: auto;\n    max-width: 800px;\n    margin-top: 1em;\n    margin-bottom: 1em;\n}\n.mat-card-header, .mat-card-actions {\n    display:-webkit-box;\n    display:-ms-flexbox;\n    display:flex;\n    -webkit-box-pack:center;\n        -ms-flex-pack:center;\n            justify-content:center;\n}\n.mat-headline {\n    text-align: center;\n}\n.mat-form-field-wrapper {\n    width: 100% !important;\n}\n.mat-card-title {\n    font-size: 24px;\n}\n.mat-card-subtitle {\n    font-size: 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/openspace-permits/openspace-permits.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-header>\n    <mat-card-title>Open Space Facility Fee Calculator</mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n    <h1 class=\"mat-headline\"></h1>\n    <div #mapViewNode></div>\n\n    <div class=\"mat-body-1\">\n      The Open Space Facility Fee varies depending on which zone your project falls in. Enter an address in the search box on the\n      map, click on a location on the map, or select from the dropdown list.\n    </div>\n    <form>\n\n      <mat-form-field class=\"full-width\" color=\"accent\">\n        <mat-select placeholder=\"Open Space Zone\" ([ngModel])=\"openspace.zone\" [value]=\"selectedZone\" name=\"zone\" (change)=\"zoneChanged($event)\">\n          <mat-option *ngFor=\"let zone of zones\" [value]=\"zone.zone\">\n            {{zone.zone}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <mat-form-field class=\"full-width\" color=\"accent\">\n\n        <input matInput type=\"number\" min=\"0\" max=\"9999999\" matInput maxlength=\"7\" placeholder=\"# of Single-Family Dwelling Units\"\n          [(ngModel)]=\"openspace.single\" name=\"single\">\n          <mat-icon matSuffix aria-label=\"help icon\" (click)=\"showDefinitions()\">help_outline</mat-icon> \n\n      </mat-form-field>\n\n      <mat-form-field class=\"full-width\" color=\"accent\">\n\n        <input class=\"full-width\" matInput type=\"number\" min=\"0\" max=\"9999999\" matInput maxlength=\"7\" placeholder=\"# of Mult-Family Dwelling Units\"\n          [(ngModel)]=\"openspace.multi\" name=\"multi\">\n          <mat-icon matSuffix aria-label=\"help icon\" (click)=\"showDefinitions()\">help_outline</mat-icon> \n\n      </mat-form-field>\n   \n    </form>\n  </mat-card-content>\n  <mat-card-actions>\n    <mat-card-subtitle *ngIf=\"openspace.zone\">Total Fee: {{getTotal() | currency}}</mat-card-subtitle>\n    <mat-card-subtitle *ngIf=\"!openspace.zone\">Total Fee: --</mat-card-subtitle>\n\n</mat-card-actions>  \n</mat-card>\n\n"

/***/ }),

/***/ "../../../../../src/app/openspace-permits/openspace-permits.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpenspacePermitsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_service__ = __webpack_require__("../../../../../src/app/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__openspace_service__ = __webpack_require__("../../../../../src/app/openspace.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__openspace_dialog_openspace_dialog_component__ = __webpack_require__("../../../../../src/app/openspace-dialog/openspace-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_esri_loader__ = __webpack_require__("../../../../esri-loader/dist/umd/esri-loader.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_esri_loader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_esri_loader__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OpenspacePermitsComponent = /** @class */ (function () {
    function OpenspacePermitsComponent(sharedService, openspace, dialog) {
        this.sharedService = sharedService;
        this.openspace = openspace;
        this.dialog = dialog;
        this.zones = [{
                zone: 1,
                single: 1385,
                multi: 1031
            },
            {
                zone: 2,
                single: 1424,
                multi: 1031
            },
            {
                zone: 3,
                single: 1165,
                multi: 847
            },
            {
                zone: 4,
                single: 1170,
                multi: 859
            }
        ];
    }
    OpenspacePermitsComponent.prototype.getTotal = function () {
        var total = this.openspace.multi * this.openspace.zone.multi + this.openspace.single * this.openspace.zone.single;
        this.sharedService.emitChange({ total: total, calculator: 'openspace' });
        return total;
    };
    // @HostListener('window:unload', ['$event'])
    // unloadHandler(event) {
    //  localStorage.setItem('openspace', JSON.stringify(this.openspace));
    // }  
    OpenspacePermitsComponent.prototype.showDefinitions = function () {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__openspace_dialog_openspace_dialog_component__["a" /* OpenspaceDialogComponent */]);
    };
    OpenspacePermitsComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.setTimeout(function () {
            if (_this.openspace.zone) {
                _this.selectedZone = _this.openspace.zone.zone;
            }
        }, 500);
        // if (localStorage.getItem('openspace')) {
        //   this.openspace = JSON.parse(localStorage.getItem('openspace'));
        // }
        return Object(__WEBPACK_IMPORTED_MODULE_5_esri_loader__["loadModules"])(['esri/WebMap', 'esri/views/MapView', 'esri/widgets/Search', 'esri/layers/FeatureLayer', 'esri/tasks/support/Query', "esri/geometry/geometryEngine", "esri/layers/GraphicsLayer", "esri/Graphic"])
            .then(function (_a) {
            var WebMap = _a[0], MapView = _a[1], Search = _a[2], FeatureLayer = _a[3], Query = _a[4], geometryEngine = _a[5], GraphicsLayer = _a[6], Graphic = _a[7];
            var webmap = new WebMap({
                portalItem: {
                    id: "47a467200a2a41a8b1bacef6a30b86ae"
                }
            });
            _this.mapView = new MapView({
                map: webmap,
                container: _this.mapViewEl.nativeElement
            });
            _this.mapView.when(function () {
                var layer = _this.mapView.map.allLayers.find(function (layer) {
                    return layer.title === "Open Space Facility Fee Zones";
                });
                _this.mapView.map.reorder(layer, 0);
                var query = new Query();
                query.outSpatialReference = _this.mapView.spatialReference;
                query.returnGeometry = true;
                query.outFields = ['ZONE_NUMBER'];
                query.where = "1=1";
                layer.queryFeatures(query).then(function (results) {
                    var geoms = [];
                    var ts = {
                        type: "text",
                        color: "white",
                        haloColor: "black",
                        haloSize: "1px",
                        xoffset: 3,
                        yoffset: 3,
                        text: '',
                        font: {
                            size: 12,
                            family: "sans-serif",
                            weight: "bolder"
                        }
                    };
                    var g = null;
                    results.features.forEach(function (feature) {
                        geoms.push(feature.geometry);
                        ts.text = feature.attributes.ZONE_NUMBER;
                        g = new Graphic();
                        g.symbol = ts;
                        g.geometry = feature.geometry.centroid;
                        textLabels.graphics.add(g);
                    });
                    var union = geometryEngine.union(geoms);
                    _this.search.sources.items[0].filter = {
                        geometry: union
                    };
                });
            });
            _this.mapView.on('click', function (event) {
                _this.search.search(event.mapPoint);
            });
            var textLabels = new GraphicsLayer();
            _this.mapView.map.add(textLabels);
            _this.search = new Search({
                view: _this.mapView
            });
            _this.search.on('search-complete', function (event) {
                //this.located.emit(event.results[0]);
                var layer = _this.mapView.map.allLayers.find(function (layer) {
                    return layer.title === "Open Space Facility Fee Zones";
                });
                if (layer) {
                    var query = new Query();
                    query.geometry = event.results[0].results[0].feature.geometry;
                    query.returnGeometry = false;
                    query.outFields = ['ZONE_NUMBER'];
                    layer.queryFeatures(query).then(function (results) {
                        // prints the array of result graphics to the console
                        if (results.features.length > 0) {
                            var zoneNum_1 = results.features[0].attributes.ZONE_NUMBER;
                            _this.zones.forEach(function (zone) {
                                if (zone.zone === zoneNum_1) {
                                    _this.openspace.zone = zone;
                                    _this.selectedZone = zone.zone;
                                }
                            });
                        }
                        else {
                            _this.openspace.zone = null;
                            _this.selectedZone = null;
                        }
                    });
                }
            });
            _this.mapView.ui.add(_this.search, {
                position: 'top-left',
                index: 0
            });
        });
    };
    OpenspacePermitsComponent.prototype.zoneChanged = function (event) {
        var i = this.zones.filter(function (zone) {
            return zone.zone === event.value;
        });
        if (i.length > 0) {
            this.openspace.zone = i[0];
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('mapViewNode'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], OpenspacePermitsComponent.prototype, "mapViewEl", void 0);
    OpenspacePermitsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-openspace-permits',
            template: __webpack_require__("../../../../../src/app/openspace-permits/openspace-permits.component.html"),
            styles: [__webpack_require__("../../../../../src/app/openspace-permits/openspace-permits.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_service__["a" /* SharedService */], __WEBPACK_IMPORTED_MODULE_3__openspace_service__["a" /* OpenspaceService */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatDialog */]])
    ], OpenspacePermitsComponent);
    return OpenspacePermitsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/openspace.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpenspaceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OpenspaceService = /** @class */ (function () {
    function OpenspaceService() {
        this.multi = null;
        this.single = null;
        this.zone = null;
    }
    OpenspaceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], OpenspaceService);
    return OpenspaceService;
}());



/***/ }),

/***/ "../../../../../src/app/shared.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SharedService = /** @class */ (function () {
    function SharedService() {
        // Observable string sources
        this.emitChangeSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        // Observable string streams
        this.changeEmitted$ = this.emitChangeSource.asObservable();
    }
    // Service message commands
    SharedService.prototype.emitChange = function (change) {
        this.emitChangeSource.next(change);
    };
    SharedService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], SharedService);
    return SharedService;
}());



/***/ }),

/***/ "../../../../../src/app/splash-dialog/splash-dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2,  mat-dialog-content {\n    font-family: Roboto,\"Helvetica Neue\",sans-serif;\n    text-align: center;\n}\n\n.mat-dialog-actions {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -ms-flex-line-pack: center;\n        align-content: center;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/splash-dialog/splash-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Disclaimer</h2>\n<mat-dialog-content>\n  This calculator is made available by the City of Raleigh for informational and planning purposes only and may not reflect the final cost to obtain plan review, building and trade permits. By using this calculator you understand that the fee details provided are estimates based on the information entered and the final calculation of fees will be provided by the Development Services Customer Services Center.  \n</mat-dialog-content>\n<mat-dialog-actions>\n  <!--<button mat-button mat-dialog-close>No</button>-->\n  <!-- Can optionally provide a result for the closing dialog. -->\n  <button mat-button mat-raised-button color=\"accent\" [mat-dialog-close]=\"true\">Agree</button>\n</mat-dialog-actions>"

/***/ }),

/***/ "../../../../../src/app/splash-dialog/splash-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplashDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SplashDialogComponent = /** @class */ (function () {
    function SplashDialogComponent() {
    }
    SplashDialogComponent.prototype.ngOnInit = function () {
    };
    SplashDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-splash-dialog',
            template: __webpack_require__("../../../../../src/app/splash-dialog/splash-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/splash-dialog/splash-dialog.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SplashDialogComponent);
    return SplashDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/stormwater-map/stormwater-map.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@import url('https://js.arcgis.com/4.6/esri/css/main.css');\n.esri-view {\n    width: 100%;\n    height: 300px;\n}\n.mat-dialog-content {\n    max-width: none !important;\n    width: 50vw !important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/stormwater-map/stormwater-map.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Check if Site is in Floodplain</h2>\n<mat-dialog-content>\n    <div #mapViewNode></div></mat-dialog-content>\n<mat-dialog-actions>\n  <!--<button mat-button mat-dialog-close>No</button>-->\n  <!-- Can optionally provide a result for the closing dialog. -->\n  <button mat-button mat-raised-button color=\"accent\" [mat-dialog-close]=\"true\">Close</button>\n</mat-dialog-actions>"

/***/ }),

/***/ "../../../../../src/app/stormwater-map/stormwater-map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StormwaterMapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stormwater_service__ = __webpack_require__("../../../../../src/app/stormwater.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_service__ = __webpack_require__("../../../../../src/app/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_esri_loader__ = __webpack_require__("../../../../esri-loader/dist/umd/esri-loader.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_esri_loader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_esri_loader__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StormwaterMapComponent = /** @class */ (function () {
    function StormwaterMapComponent(stormwaterService, sharedService) {
        this.stormwaterService = stormwaterService;
        this.sharedService = sharedService;
    }
    StormwaterMapComponent.prototype.ngOnInit = function () {
        this.loadMap();
    };
    StormwaterMapComponent.prototype.loadMap = function () {
        var _this = this;
        return Object(__WEBPACK_IMPORTED_MODULE_3_esri_loader__["loadModules"])(['esri/WebMap', 'esri/views/MapView', 'esri/widgets/Search', 'esri/layers/FeatureLayer', 'esri/tasks/support/Query', "esri/geometry/geometryEngine", "esri/layers/GraphicsLayer", "esri/Graphic"])
            .then(function (_a) {
            var WebMap = _a[0], MapView = _a[1], Search = _a[2], FeatureLayer = _a[3], Query = _a[4], geometryEngine = _a[5], GraphicsLayer = _a[6], Graphic = _a[7];
            var webmap = new WebMap({
                portalItem: {
                    id: "6184901db24d4ac48eaa70ea721e5eb2"
                }
            });
            _this.mapView = new MapView({
                map: webmap,
                container: _this.mapViewEl.nativeElement
            });
            _this.mapView.when(function () {
                var layer = _this.mapView.map.allLayers.find(function (layer) {
                    return layer.title === "Property";
                });
                _this.mapView.map.reorder(layer, 0);
                var query = new Query();
                query.outSpatialReference = _this.mapView.spatialReference;
                query.returnGeometry = true;
                query.outFields = ['ZONE_NUMBER'];
                query.where = "1=1";
                // layer.queryFeatures(query).then(results => {
                //   let geoms = [];
                //   let ts = {
                //     type: "text", // autocasts as new TextSymbol()
                //     color: "white",
                //     haloColor: "black",
                //     haloSize: "1px",
                //     xoffset: 3,
                //     yoffset: 3,
                //     text: '',
                //     font: { // autocast as new Font()
                //       size: 12,
                //       family: "sans-serif",
                //       weight: "bolder"
                //     }
                //   };
                // let g = null;
                // results.features.forEach(feature => {
                //   geoms.push(feature.geometry);
                //   ts.text = feature.attributes.ZONE_NUMBER;
                //   g = new Graphic();
                //   g.symbol = ts;
                //   g.geometry = feature.geometry.centroid;
                //   textLabels.graphics.add(g);
                // });
                // let union = geometryEngine.union(geoms);
                // this.search.sources.items[0].filter = {
                //   geometry: union
                // };
                // });
                var sources = [
                    {
                        featureLayer: layer,
                        searchFields: ['SITE_ADDRESS', 'PIN_NUM'],
                        displayField: "SITE_ADDRESS",
                        exactMatch: false,
                        outFields: ['SITE_ADDRESS'],
                        name: "Property",
                        placeholder: "Search by site address or PIN",
                        maxResults: 6,
                        maxSuggestions: 6,
                        suggestionsEnabled: true,
                        minSuggestCharacters: 2,
                        popupEnabled: false,
                        resultGraphicEnabled: true,
                        resultSymbol: {
                            type: "simple-fill",
                            outline: {
                                width: 4,
                                color: [255, 255, 0, 1]
                            },
                            color: [255, 255, 255, 0]
                        }
                    }
                ];
                _this.search.sources = sources;
            });
            _this.mapView.on('click', function (event) {
                _this.search.search(event.mapPoint);
            });
            var textLabels = new GraphicsLayer();
            _this.mapView.map.add(textLabels);
            _this.search = new Search({
                view: _this.mapView
            });
            _this.search.on('search-complete', function (event) {
                //this.located.emit(event.results[0]);
                debugger;
                var layer = _this.mapView.map.allLayers.find(function (layer) {
                    return layer.title === "Floodplain";
                });
                if (layer) {
                    var query = new Query();
                    query.geometry = event.results[0].results[0].feature.geometry;
                    query.returnGeometry = false;
                    query.outFields = ['ZONE_IMAPS'];
                    layer.queryFeatures(query).then(function (results) {
                        // prints the array of result graphics to the console
                        var item = _this.stormwaterService.checkBoxes.find(function (item) { return item.name === 'Flood Permit Required?'; });
                        if (results.features.length > 0) {
                            item.selected = true;
                            _this.checkboxChanged({ selected: true }, item);
                        }
                        else {
                            item.selected = false;
                            _this.checkboxChanged({ selected: false }, item);
                        }
                    });
                }
            });
            _this.mapView.ui.add(_this.search, {
                position: 'top-left',
                index: 0
            });
        });
    };
    StormwaterMapComponent.prototype.checkboxChanged = function (event, fee) {
        fee.selected = event.selected;
        fee.total = (event.selected) ? fee.trueValue : fee.falseValue;
        this.getTotalFees();
    };
    StormwaterMapComponent.prototype.getTotalFees = function () {
        var _this = this;
        this.stormwaterService.total = 0;
        this.stormwaterService.fees.forEach(function (fee) {
            if (fee.selected) {
                _this.stormwaterService.total += fee.total;
            }
        });
        this.stormwaterService.checkBoxes.forEach(function (fee) {
            if (fee.selected) {
                _this.stormwaterService.total += fee.total;
            }
        });
        this.sharedService.emitChange({ total: this.stormwaterService.total, calculator: 'stormwater' });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('mapViewNode'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], StormwaterMapComponent.prototype, "mapViewEl", void 0);
    StormwaterMapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-stormwater-map',
            template: __webpack_require__("../../../../../src/app/stormwater-map/stormwater-map.component.html"),
            styles: [__webpack_require__("../../../../../src/app/stormwater-map/stormwater-map.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__stormwater_service__["a" /* StormwaterService */], __WEBPACK_IMPORTED_MODULE_2__shared_service__["a" /* SharedService */]])
    ], StormwaterMapComponent);
    return StormwaterMapComponent;
}());



/***/ }),

/***/ "../../../../../src/app/stormwater-permits/stormwater-permits.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nmat-toolbar-row {\n  height: 64px;\n  width: 100%;\n  white-space: normal !important;\n}\n\nimg {\n  max-width: 50px;\n  margin-right: 20px;\n}\n\nmat-form-field,\n.mat-subheading-1,\n.mat-subheading-2,\nmat-checkbox,\n.more-info,\n.min-message{\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  margin-bottom: 1em;\n  margin-top: 1em;\n}\n\nform {\n  width: 100%\n}\n\nmat-card {\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 800px;\n  margin-top: 1em;\n  margin-bottom: 1em;\n}\n\n.mat-card-header, .mat-card-actions {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n.mat-headline {\n  text-align: center;\n}\n\n.mat-form-field-wrapper {\n  width: 100% !important;\n}\n\n.mat-card-title {\n    font-size: 24px;\n}\n\n.mat-card-subtitle {\n  font-size: 20px;\n}\n\n.feeCheckLabel {\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.links {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/stormwater-permits/stormwater-permits.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-header>\n    <mat-card-title>Stormwater Fee Calculator</mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n    Check all boxes that apply to your project\n    <form>\n      <div *ngFor=\"let fee of stormwaterService.fees\">\n        <mat-list>\n          <mat-selection-list>\n            <mat-list-option checkboxPosition=\"before\" (selectionChange)=\"listCheckBoxChanged($event, fee)\" [selected]=\"fee.selected\">\n              <div class=\"feeCheckLabel\">\n                <div class=\"feeLabel\">{{fee.name}}\n                  <a mat-icon-button  *ngIf=\"fee.url\" [href]=\"fee.url\" target=\"_blank\" (click)=\"$event.stopPropagation()\">\n                    <mat-icon>help_outline</mat-icon>\n                  </a>\n                </div>\n                <div [ngStyle]=\"{'padding-top':fee.url ? '10px' : '' }\" class=\"cost\">{{fee.total| currency}}</div>\n              </div>\n            </mat-list-option>\n          </mat-selection-list>\n\n          <mat-list-item *ngIf=\"fee.selected\">\n            <mat-form-field *ngIf=\"fee.multiplier\" matLine color=\"accent\">\n              <span *ngIf=\"fee.units === 'Construction Cost'\" matPrefix>$&nbsp;</span>\n              <input matInput type=\"number\" min=\"0\" max=\"9999999\" matInput maxlength=\"7\" [placeholder]=\"fee.units\" [value]=\"fee.cost\" name=\"cost\"\n                (input)=\"calculateTotal($event, fee)\">\n\n            </mat-form-field>\n            <div matLine *ngIf=\"fee.note\">{{fee.note}}</div>\n            <div matLine *ngIf=\"fee.minimum\">*minimum fee of {{fee.minimum | currency}}</div>\n            <div matLine *ngIf=\"fee.units === 'Acres'\">*rounded to nearest 1/10 acre</div>\n          </mat-list-item>\n\n        </mat-list>\n      </div>\n      <mat-selection-list>\n        <mat-list-option checkboxPosition=\"before\" *ngFor=\"let fee of stormwaterService.checkBoxes\" (selectionChange)=\"checkboxChanged($event, fee)\" [selected]=\"fee.selected\">\n          <div class=\"feeCheckLabel\">\n            <div class=\"feeLabel\">{{fee.name}}\n              <button *ngIf=\"fee.map\" mat-icon-button (click)=\"showMap($event)\">\n                  <mat-icon aria-label=\"map icon\">map</mat-icon>\n                </button>\n              <a mat-icon-button *ngIf=\"fee.url\" [href]=\"fee.url\" target=\"_blank\" (click)=\"$event.stopPropagation()\">\n                <mat-icon>help_outline</mat-icon>\n              </a>\n            </div>\n            <div [ngStyle]=\"{'padding-top':fee.url ? '10px' : '' }\" class=\"cost\">{{fee.total| currency}}</div>\n          </div>\n        </mat-list-option>\n      </mat-selection-list>\n    </form>\n\n  </mat-card-content>\n  <mat-card-actions>\n    <mat-card-subtitle>Total Fee: {{stormwaterService.total|currency}}</mat-card-subtitle>\n  </mat-card-actions>\n\n</mat-card>\n"

/***/ }),

/***/ "../../../../../src/app/stormwater-permits/stormwater-permits.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StormwaterPermitsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_service__ = __webpack_require__("../../../../../src/app/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stormwater_service__ = __webpack_require__("../../../../../src/app/stormwater.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stormwater_map_stormwater_map_component__ = __webpack_require__("../../../../../src/app/stormwater-map/stormwater-map.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StormwaterPermitsComponent = /** @class */ (function () {
    function StormwaterPermitsComponent(dialog, sharedService, stormwaterService) {
        this.dialog = dialog;
        this.sharedService = sharedService;
        this.stormwaterService = stormwaterService;
        this.cost = 0;
    }
    StormwaterPermitsComponent.prototype.ngOnInit = function () {
        //this.loadMap();
        // window.setTimeout(() => {
        //    this.dialog.open(SplashDialogComponent);
        //  }, 500);
        // if (localStorage.getItem('stormwater')) {
        //   this.stormwaterService = JSON.parse(localStorage.getItem('stormwater'));
        // }
        //  this.getTotalFees();
    };
    //  @HostListener('window:unload', ['$event'])
    //  unloadHandler(event) {
    //   localStorage.setItem('stormwater', JSON.stringify(this.stormwaterService));
    //  }
    StormwaterPermitsComponent.prototype.calculateTotal = function (event, fee) {
        if (event) {
            if (event.target.value) {
                fee.cost = parseFloat(event.target.value);
            }
            else {
                fee.cost = null;
            }
        }
        if (fee.cost && fee.selected) {
            if (fee.units === 'Acres') {
                fee.total = fee.multiplier * fee.cost.toFixed(1);
            }
            else if (fee.multiplier) {
                fee.total = fee.multiplier * fee.cost;
            }
            if (fee.minimum && fee.cost != "" && fee.cost > 0) {
                if (fee.total < fee.minimum) {
                    fee.total = fee.minimum;
                }
            }
        }
        else {
            if (fee.minimum && fee.cost) {
                fee.total = fee.minimum;
            }
            else {
                fee.total = 0;
            }
        }
        this.getTotalFees();
    };
    StormwaterPermitsComponent.prototype.checkboxChanged = function (event, fee) {
        fee.selected = event.selected;
        fee.total = (event.selected) ? fee.trueValue : fee.falseValue;
        this.getTotalFees();
    };
    StormwaterPermitsComponent.prototype.listCheckBoxChanged = function (event, fee, help) {
        fee.selected = event.selected;
        debugger;
        if (!event.selected) {
            fee.total = 0;
        }
        this.calculateTotal(null, fee);
    };
    StormwaterPermitsComponent.prototype.getTotalFees = function () {
        var _this = this;
        this.stormwaterService.total = 0;
        this.stormwaterService.fees.forEach(function (fee) {
            if (fee.selected) {
                _this.stormwaterService.total += fee.total;
            }
        });
        this.stormwaterService.checkBoxes.forEach(function (fee) {
            if (fee.selected) {
                _this.stormwaterService.total += fee.total;
            }
        });
        this.sharedService.emitChange({ total: this.stormwaterService.total, calculator: 'stormwater' });
    };
    StormwaterPermitsComponent.prototype.showMap = function (event) {
        event.stopPropagation();
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__stormwater_map_stormwater_map_component__["a" /* StormwaterMapComponent */]);
    };
    StormwaterPermitsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-stormwater-permits',
            template: __webpack_require__("../../../../../src/app/stormwater-permits/stormwater-permits.component.html"),
            styles: [__webpack_require__("../../../../../src/app/stormwater-permits/stormwater-permits.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_2__shared_service__["a" /* SharedService */], __WEBPACK_IMPORTED_MODULE_3__stormwater_service__["a" /* StormwaterService */]])
    ], StormwaterPermitsComponent);
    return StormwaterPermitsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/stormwater.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StormwaterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StormwaterService = /** @class */ (function () {
    function StormwaterService() {
        this.total = 0;
        this.fees = [
            {
                name: 'Stormwater Device Fee',
                units: 'Construction cost of all stormwater devices',
                multiplier: 0.24,
                total: 0,
                url: 'https://www.raleighnc.gov/business/content/PlanDev/Articles/DevServ/StormwaterReplacementFund.html',
                selected: false
            },
            {
                name: 'Land Disturbing Plan Review Fees',
                units: 'Disturbed acres',
                multiplier: 142,
                total: 0,
                url: 'https://www.raleighnc.gov/content/extra/Books/PlanDev/DevelopmentFeeSchedule/14/',
                selected: false
            },
            {
                name: 'Land Disturbing Permit Fees',
                units: 'Disturbed acres',
                multiplier: 286,
                total: 0,
                url: 'https://www.raleighnc.gov/content/extra/Books/PlanDev/DevelopmentFeeSchedule/14/',
                selected: false
            },
            {
                name: 'Stormwater Control Permit',
                units: 'Disturbed acres',
                multiplier: 197,
                minimum: 194,
                url: 'https://www.raleighnc.gov/content/extra/Books/PlanDev/DevelopmentFeeSchedule/14/',
                total: 0
            },
        ];
        this.checkBoxes = [
            {
                name: 'Flood Permit Required?',
                falseValue: 0,
                trueValue: 197,
                url: 'https://www.raleighnc.gov/content/extra/Books/PlanDev/DevelopmentFeeSchedule/14/',
                total: 0,
                map: true
            },
            {
                name: 'Flood Study Required?',
                falseValue: 0,
                trueValue: 1191,
                url: 'https://www.raleighnc.gov/content/extra/Books/PlanDev/DevelopmentFeeSchedule/14/',
                total: 0
            },
            {
                name: 'Watercourse Buffer Permit Required?',
                trueValue: 176,
                falseValue: 0,
                url: 'https://www.raleighnc.gov/content/extra/Books/PlanDev/DevelopmentFeeSchedule/14/',
                total: 0
            },
            {
                name: 'Watershed Permit Required?',
                trueValue: 176,
                falseValue: 0,
                url: 'https://www.raleighnc.gov/content/extra/Books/PlanDev/DevelopmentFeeSchedule/14/',
                total: 0
            }
        ];
    }
    StormwaterService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], StormwaterService);
    return StormwaterService;
}());



/***/ }),

/***/ "../../../../../src/app/tFareCategory.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TFareCategory; });
var TFareCategory = /** @class */ (function () {
    function TFareCategory(category, landuses) {
        this.category = category;
        this.landuses = landuses;
    }
    return TFareCategory;
}());



/***/ }),

/***/ "../../../../../src/app/thoroughfare-permits/thoroughfare-permits.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nmat-toolbar-row {\n    height: 64px;\n    width: 100%;\n    white-space: normal !important;\n}\nimg {\n   max-width: 50px;\n   margin-right: 20px;\n\n}\n#single-fam-areas {\n    margin-left: 3em;\n}\n/* mat-card, .mat-title {\n    margin-left: auto;\n    margin-right: auto;\n    max-width: 800px;\n    margin-top: 1em;\n    margin-bottom: 1em;\n}\n\n.mat-card-header {\n    display:flex;\n    justify-content:center;\n}\n\n  .mat-headline {\n    text-align: center;\n}\n\n.mat-form-field-wrapper {\n    width: 100% !important;\n} */\n.mat-button {\n    margin-top:1em;\n}\nmat-form-field {\n    min-width: 220px;\n    margin-top: 1em;\n    margin-right: 2em;\n}\nmat-card {\n    margin-left: auto;\n    margin-right: auto;\n    max-width: 800px;\n    margin-top: 1em;\n    margin-bottom: 1em;\n}\n.mat-card-header, .mat-card-actions {\n    display:-webkit-box;\n    display:-ms-flexbox;\n    display:flex;\n    -webkit-box-pack:center;\n        -ms-flex-pack:center;\n            justify-content:center;\n}\n.mat-headline {\n    text-align: center;\n}\n.mat-form-field-wrapper {\n    width: 100% !important;\n}\n.mat-card-title {\n    font-size: 24px;\n}\n.mat-card-subtitle {\n    font-size: 20px;\n}\n.threshold-label {\n    text-align: right;\n    max-width: 100px;\n    margin-right: 2em;\n}\n.threshold-container {\n    display:-webkit-box;\n    display:-ms-flexbox;\n    display:flex;\n    \n}\n.mat-tab-header {\n    margin-bottom: 2em;\n}\n.feeCheckLabel {\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n  }\n.instructions {\n      padding-top: 1em;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/thoroughfare-permits/thoroughfare-permits.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-header>\n    <mat-card-title>Thoroughfare Facility Fee Calculator</mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n  \n    <mat-tab-group color=\"accent\">\n        <mat-tab [label]=\"category.category\" *ngFor=\"let category of thoroughfare.categories\">\n          <div class=\"instructions\">Check all boxes next to the landuse(s) that apply to your project</div>       \n          <div *ngFor=\"let landuse of category.landuses\">\n            <mat-list>\n              <mat-selection-list  >\n                <mat-list-option checkboxPosition=\"before\" (selectionChange)=\"landuseSelected($event, landuse)\" [selected]=\"landuse.selected\">\n                  <div class=\"feeCheckLabel\">\n                      <div class=\"feeLabel\">{{landuse.landuse}}\n                        <a mat-icon-button *ngIf=\"landuse.url\" [href]=\"landuse.url\" target=\"_blank\" (click)=\"$event.stopPropagation()\">\n                          <mat-icon>help_outline</mat-icon>\n                        </a>\n                      </div>\n                      <div [ngStyle]=\"{'padding-top':landuse.url ? '10px' : '' }\" class=\"cost\">{{landuse.total| currency}}</div>\n                    </div>\n                </mat-list-option>\n              </mat-selection-list>\n              <mat-list-item *ngIf=\"landuse.selected && landuse.per\">\n                  <mat-form-field matLine color=\"accent\">\n                    <input matInput type=\"number\" min=\"0\" max=\"9999999\" matInput maxlength=\"7\" [placeholder]=\"landuse.measureLabel\"  name=\"value\" [(ngModel)]=\"landuse.value\" (ngModelChange)=\"valueChanged(landuse, null, $event)\">\n                  </mat-form-field>         \n              </mat-list-item>\n\n              <div *ngIf=\"landuse.thresholds && landuse.selected\">\n                  <mat-list-item *ngFor=\"let threshold of landuse.thresholds\">\n                      <mat-form-field matLine color=\"accent\">\n                          <input matInput type=\"number\" min=\"0\" max=\"9999999\" matInput maxlength=\"7\" [placeholder]=\"threshold.label\" [(ngModel)]=\"threshold.value\" (ngModelChange)=\"valueChanged(landuse, threshold, $event)\">\n                        </mat-form-field>                \n                  </mat-list-item>  \n              </div>\n            </mat-list>\n          </div>              \n\n\n\n            <!-- <div *ngFor=\"let record of category.records\">\n              {{category.records|json}}\n                <mat-divider [inset]=\"true\"></mat-divider>\n                <mat-form-field>\n                    <mat-select placeholder=\"Select land use\" [(value)]=\"record.landuse\" (selectionChange)=\"landuseChanged($event, category)\">\n                      <mat-option *ngFor=\"let landuse of thoroughfare.landuses | thoroughfare: category.category\" [value]=\"landuse\">\n                        {{landuse.landuse}}\n                      </mat-option>\n                    </mat-select>\n                  </mat-form-field>\n                  <mat-form-field *ngIf=\"record.landuse != 'Single Family' && record.landuse\">\n                      <input matInput type=\"number\" min=\"0\" max=\"9999999\" matInput maxlength=\"7\" [placeholder]=\"record.landuse.measureLabel\" name=\"value\" [(ngModel)]=\"record.value\">\n                    </mat-form-field>                  \n            </div>\n            <button mat-button mat-raised-button color=\"accent\" (click)=\"addRecord(category)\">ADD</button>  -->\n\n\n\n\n\n\n\n<!--           \n            <div *ngFor=\"let record of fee.records;\">\n                <mat-divider [inset]=\"true\"></mat-divider>\n\n                <mat-form-field>\n                  <mat-select placeholder=\"Select land use\" [(ngModel)]=\"record.landuse\" [value]=\"record.landuse\" (selectionChange)=\"landuseChanged(fee, record, $event)\">\n                    <mat-option *ngFor=\"let fee1 of fee.fees | landuse:fee;\" [value]=\"fee1\">\n                      {{fee1.landuse}}\n                    </mat-option>\n                  </mat-select>\n                </mat-form-field>\n  \n                <mat-form-field *ngIf=\"!record?.landuse?.thresholds && record.landuse\">\n                  <input matInput type=\"number\" min=\"0\" max=\"9999999\" matInput maxlength=\"7\" [placeholder]=\"record.landuse?.measureLabel\" name=\"value\"\n                    [ngModel]=\"record.value\" (ngModelChange)=\"recordValueChanged(record, $event)\">\n                </mat-form-field>\n                {{record.total|currency}}\n                <div *ngIf=\"record?.landuse?.thresholds\" id=\"single-fam-areas\">\n                  <div class=\"threshold-container\" *ngFor=\"let threshold of record.landuse.thresholds\">\n                    <mat-form-field>\n                      <input matInput type=\"number\" min=\"0\" max=\"9999999\" matInput maxlength=\"7\" [placeholder]=\"threshold.label\" name=\"value\"\n                        [ngModel]=\"threshold.value\" (ngModelChange)=\"thresholdValueChanged(threshold, record, $event)\">\n                    </mat-form-field>\n                    \n                  </div>\n                </div>\n          \n              </div>      \n              <button mat-button mat-raised-button color=\"accent\" (click)=\"addRecord(fee)\">ADD</button> -->\n    \n        </mat-tab>\n      </mat-tab-group>\n  </mat-card-content>\n  <mat-card-actions>\n      <mat-card-subtitle>Total Fee: {{thoroughfare.total|currency}}</mat-card-subtitle>\n\n  </mat-card-actions>\n</mat-card>\n"

/***/ }),

/***/ "../../../../../src/app/thoroughfare-permits/thoroughfare-permits.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThoroughfarePermitsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service__ = __webpack_require__("../../../../../src/app/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__thoroughfare_service__ = __webpack_require__("../../../../../src/app/thoroughfare.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ThoroughfarePermitsComponent = /** @class */ (function () {
    function ThoroughfarePermitsComponent(sharedService, thoroughfare) {
        this.sharedService = sharedService;
        this.thoroughfare = thoroughfare;
        this.total = 0;
    }
    ThoroughfarePermitsComponent.prototype.ngOnInit = function () {
    };
    ThoroughfarePermitsComponent.prototype.landuseSelected = function (event, landuse) {
        landuse.selected = event.selected;
        if (!event.selected) {
            landuse.total = null;
        }
        else if (!landuse.thresholds) {
            landuse.total = landuse.value * landuse.per;
        }
        else {
            this.totalThresholds(landuse);
        }
        this.getTotal();
    };
    ThoroughfarePermitsComponent.prototype.valueChanged = function (landuse, threshold, event) {
        if (!threshold) {
            landuse.total = event * landuse.per;
        }
        else {
            threshold.total = event * threshold.per;
            this.totalThresholds(landuse);
        }
        this.getTotal();
    };
    ThoroughfarePermitsComponent.prototype.totalThresholds = function (landuse) {
        landuse.total = 0;
        landuse.thresholds.forEach(function (t) {
            if (t.total) {
                landuse.total += t.total;
            }
        });
    };
    ThoroughfarePermitsComponent.prototype.getTotal = function () {
        var _this = this;
        this.thoroughfare.total = 0;
        this.thoroughfare.categories.forEach(function (category) {
            category.landuses.forEach(function (landuse) {
                _this.thoroughfare.total += landuse.total;
            });
        });
        this.sharedService.emitChange({ total: this.thoroughfare.total, calculator: 'thoroughfare' });
    };
    ThoroughfarePermitsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-thoroughfare-permits',
            template: __webpack_require__("../../../../../src/app/thoroughfare-permits/thoroughfare-permits.component.html"),
            styles: [__webpack_require__("../../../../../src/app/thoroughfare-permits/thoroughfare-permits.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_service__["a" /* SharedService */], __WEBPACK_IMPORTED_MODULE_2__thoroughfare_service__["a" /* ThoroughfareService */]])
    ], ThoroughfarePermitsComponent);
    return ThoroughfarePermitsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/thoroughfare.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThoroughfarePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ThoroughfarePipe = /** @class */ (function () {
    function ThoroughfarePipe() {
    }
    ThoroughfarePipe.prototype.transform = function (value, args) {
        var result = value.filter(function (v, i) { return !v.selected && args === v.category; });
        return result;
    };
    ThoroughfarePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
            name: 'thoroughfare'
        })
    ], ThoroughfarePipe);
    return ThoroughfarePipe;
}());



/***/ }),

/***/ "../../../../../src/app/thoroughfare.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThoroughfareService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__landuse__ = __webpack_require__("../../../../../src/app/landuse.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__threshold__ = __webpack_require__("../../../../../src/app/threshold.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tFareCategory__ = __webpack_require__("../../../../../src/app/tFareCategory.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ThoroughfareService = /** @class */ (function () {
    function ThoroughfareService() {
        this.categories = [
            new __WEBPACK_IMPORTED_MODULE_3__tFareCategory__["a" /* TFareCategory */]("Residential", [
                new __WEBPACK_IMPORTED_MODULE_1__landuse__["a" /* Landuse */]("Residential", "Single Family", "unit", "# of units", false, null, null, null, [
                    new __WEBPACK_IMPORTED_MODULE_2__threshold__["a" /* Threshold */](0, 999, 1364, "# of units less than 1,000 sq. ft.", null, null),
                    new __WEBPACK_IMPORTED_MODULE_2__threshold__["a" /* Threshold */](1000, 1999, 1620, "# of units 1,000 – 1,999 sq. ft.", null, null),
                    new __WEBPACK_IMPORTED_MODULE_2__threshold__["a" /* Threshold */](2000, 2999, 1798, "# of units 2,000 – 2,999 sq. ft.", null, null),
                    new __WEBPACK_IMPORTED_MODULE_2__threshold__["a" /* Threshold */](3000, 3999, 1934, "# of units 3,000 – 3,999 sq. ft.", null, null),
                    new __WEBPACK_IMPORTED_MODULE_2__threshold__["a" /* Threshold */](4000, 4999, 2042, "# of units 4,000 – 4,999 sq. ft.", null, null),
                    new __WEBPACK_IMPORTED_MODULE_2__threshold__["a" /* Threshold */](5000, null, 2184, "# of units greater than 5,000 sq. ft.", null, null)
                ]),
                new __WEBPACK_IMPORTED_MODULE_1__landuse__["a" /* Landuse */]("Residential", "Multi-Family", "unit", "# of units", false, null, null, 1202),
                new __WEBPACK_IMPORTED_MODULE_1__landuse__["a" /* Landuse */]("Residential", "Group Living, Social Service", "unit", "# of units", false, null, null, 504)
            ]),
            new __WEBPACK_IMPORTED_MODULE_3__tFareCategory__["a" /* TFareCategory */]("Commercial", [
                new __WEBPACK_IMPORTED_MODULE_1__landuse__["a" /* Landuse */]("Commercial", "Hotel/Motel", "unit", "Rooms", false, null, null, 1715),
                new __WEBPACK_IMPORTED_MODULE_1__landuse__["a" /* Landuse */]("Commercial", "Retail/Commercial", "area", "Gross Floor Area (sq. ft.)", false, null, null, 2918),
                new __WEBPACK_IMPORTED_MODULE_1__landuse__["a" /* Landuse */]("Commercial", "Retail uses that include the sale of motor fuels to public", "unit", "Fueling Stations", false, null, null, 6483),
                new __WEBPACK_IMPORTED_MODULE_1__landuse__["a" /* Landuse */]("Commercial", "Office", "area", "Gross Floor Area (sq. ft.)", false, null, null, 2225),
                new __WEBPACK_IMPORTED_MODULE_1__landuse__["a" /* Landuse */]("Commercial", "Industrial/manufacturing/agricultural", "area", "Gross Floor Area (sq. ft.)", false, null, null, 1407),
                new __WEBPACK_IMPORTED_MODULE_1__landuse__["a" /* Landuse */]("Commercial", "Warehouse", "area", "Gross Floor Area (sq. ft.)", false, null, null, 809),
                new __WEBPACK_IMPORTED_MODULE_1__landuse__["a" /* Landuse */]("Commercial", "Mini warehousing", "area", "Gross Floor Area (sq. ft.)", false, null, null, 408)
            ]),
            new __WEBPACK_IMPORTED_MODULE_3__tFareCategory__["a" /* TFareCategory */]("Public & Institutional", [
                new __WEBPACK_IMPORTED_MODULE_1__landuse__["a" /* Landuse */]("Public & Institutional", "Churches/Synagogues", "unit", "Square Feet", false, null, null, 1122),
                new __WEBPACK_IMPORTED_MODULE_1__landuse__["a" /* Landuse */]("Public & Institutional", "Elementary, Middle and High Schools", "area", "Gross Floor Area (sq. ft.)", false, null, null, 409),
                new __WEBPACK_IMPORTED_MODULE_1__landuse__["a" /* Landuse */]("Public & Institutional", "College/University", "unit", "Gross Floor Area (sq. ft.)", false, null, null, 4478),
                new __WEBPACK_IMPORTED_MODULE_1__landuse__["a" /* Landuse */]("Public & Institutional", "Daycare facilities", "area", "Gross Floor Area (sq. ft.)", false, null, null, 3097),
                new __WEBPACK_IMPORTED_MODULE_1__landuse__["a" /* Landuse */]("Public & Institutional", "Hospitals/medical care facilities", "area", "Gross Floor Area (sq. ft.)", false, null, null, 3553),
                new __WEBPACK_IMPORTED_MODULE_1__landuse__["a" /* Landuse */]("Public & Institutional", "Nursing Home/Group Quarters", "area", "Gross Floor Area (sq. ft.)", false, null, null, 999),
                new __WEBPACK_IMPORTED_MODULE_1__landuse__["a" /* Landuse */]("Public & Institutional", "Cemetery", "area", "Acres", false, null, null, 771),
                new __WEBPACK_IMPORTED_MODULE_1__landuse__["a" /* Landuse */]("Public & Institutional", "Passenger Transportation facility", "area", "Gross Floor Area (sq. ft.)", false, null, null, 809),
                new __WEBPACK_IMPORTED_MODULE_1__landuse__["a" /* Landuse */]("Public & Institutional", "Emergency Service facility", "area", "Gross Floor Area (sq. ft.)", false, null, null, 809)
            ]),
            new __WEBPACK_IMPORTED_MODULE_3__tFareCategory__["a" /* TFareCategory */]("Recreational", [
                new __WEBPACK_IMPORTED_MODULE_1__landuse__["a" /* Landuse */]("Recreational", "Golf course", "unit", "Holes", false, null, null, 5822),
                new __WEBPACK_IMPORTED_MODULE_1__landuse__["a" /* Landuse */]("Recreational", "Public parks", "unit", "Acres", false, null, null, 2918),
                new __WEBPACK_IMPORTED_MODULE_1__landuse__["a" /* Landuse */]("Recreational", "Stadiums/coliseums/race tracks", "unit", "Seats", false, null, null, 101),
                new __WEBPACK_IMPORTED_MODULE_1__landuse__["a" /* Landuse */]("Recreational", "General recreation/all other", "unit", "Parking Spaces", false, null, null, 273)
            ]),
        ];
        // thresholds:Array<Threshold> = [
        //   new Threshold(0, 999, 1364,"# of units less than 1,000 sq. ft.", null, null),
        //   new Threshold(1000, 1999, 1620,"# of units 1,000 – 1,999 sq. ft.", null, null),
        //   new Threshold(2000, 2999, 1798,"# of units 2,000 – 2,999 sq. ft.", null, null),
        //   new Threshold(3000, 3999, 1934,"# of units 3,000 – 3,999 sq. ft.", null, null),
        //   new Threshold(4000, 4999, 2042,"# of units 4,000 – 4,999 sq. ft.", null, null),
        //   new Threshold(5000, null, 2184,"# of units greater than 5,000 sq. ft.", null, null)
        // ];
        // landuses:Array<Landuse> = [
        //   new Landuse("Residential", "Single Family", "unit", "# of units", false, null, this.thresholds),
        //   new Landuse("Residential", "Multi-Family", "unit", "# of units", false, 1202),
        //   new Landuse("Residential", "Group Living, Social Service", "unit", "# of units", false, 504),
        //   new Landuse("Commercial", "Hotel/Motel", "unit", "Rooms", false, 1715),
        //   new Landuse("Commercial", "Retail/Commercial", "area", "Gross Floor Area (sq. ft.)", false, 2918),
        //   new Landuse("Commercial", "Retail uses that include the sale of motor fuels to public", "unit", "Fueling Stations", false, 6483),
        //   new Landuse("Commercial", "Office", "area", "Gross Floor Area (sq. ft.)", false, 2225),
        //   new Landuse("Commercial", "Industrial/manufacturing/agricultural", "area", "Gross Floor Area (sq. ft.)", false, 1407),
        //   new Landuse("Commercial", "Warehouse", "area", "Gross Floor Area (sq. ft.)", false, 809),
        //   new Landuse("Commercial", "Mini warehousing", "area", "Gross Floor Area (sq. ft.)", false, 408),
        //   new Landuse("Public & Institutional", "Churches/Synagogues", "unit", "Square Feet", false, 1122),
        //   new Landuse("Public & Institutional", "Elementary, Middle and High Schools", "area", "Gross Floor Area (sq. ft.)", false, 409),
        //   new Landuse("Public & Institutional", "College/University", "unit", "Gross Floor Area (sq. ft.)", false, 4478),
        //   new Landuse("Public & Institutional", "Daycare facilities", "area", "Gross Floor Area (sq. ft.)", false, 3097),
        //   new Landuse("Public & Institutional", "Hospitals/medical care facilities", "area", "Gross Floor Area (sq. ft.)", false, 3553),
        //   new Landuse("Public & Institutional", "Nursing Home/Group Quarters", "area", "Gross Floor Area (sq. ft.)", false, 999),
        //   new Landuse("Public & Institutional", "Cemetery", "area", "Acres", false, 771),
        //   new Landuse("Public & Institutional", "Passenger Transportation facility", "area", "Gross Floor Area (sq. ft.)", false, 809),
        //   new Landuse("Public & Institutional", "Emergency Service facility", "area", "Gross Floor Area (sq. ft.)", false, 809),
        //   new Landuse("Recreational", "Golf course", "unit", "Holes", false, 5822),
        //   new Landuse("Recreational", "Public parks", "unit", "Acres", false, 2918),
        //   new Landuse("Recreational", "Stadiums/coliseums/race tracks", "unit", "Seats", false, 101),
        //   new Landuse("Recreational", "General recreation/all other", "unit", "Parking Spaces", false, 273)];
        this.total = 0;
    }
    ThoroughfareService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ThoroughfareService);
    return ThoroughfareService;
}());



/***/ }),

/***/ "../../../../../src/app/threshold.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Threshold; });
var Threshold = /** @class */ (function () {
    function Threshold(min, max, per, label, value, total) {
        this.min = min;
        this.max = max;
        this.per = per;
        this.label = label;
        this.value = value;
        this.total = total;
    }
    return Threshold;
}());



/***/ }),

/***/ "../../../../../src/app/tiers.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TiersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TiersService = /** @class */ (function () {
    function TiersService(http) {
        this.http = http;
    }
    TiersService.prototype.getTiers = function () {
        return this.http.get('./assets/tiers.json');
    };
    TiersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], TiersService);
    return TiersService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map