webpackJsonp(["dashboard.module"],{

/***/ "../../../../../src/app/pages/dashboard/cost/cost.component.html":
/***/ (function(module, exports) {

module.exports = "<div widget class=\"card border-0\">\r\n    <div class=\"card-header transparent border-0 text-muted\">\r\n        <h5 class=\"mb-0\">Real time cost</h5>\r\n        <div class=\"widget-controls\"> \r\n            <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\r\n            <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>                         \r\n            <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\r\n        </div>        \r\n    </div>\r\n    <div class=\"card-body pt-0 pl-2 pr-2 pb-2 widget-body\">\r\n        <div class=\"text-center mb-2\">\r\n            <div class=\"custom-control custom-checkbox custom-control-inline\">\r\n                <input type=\"checkbox\" class=\"custom-control-input checkbox-dark-gray\" id=\"checkboxCostGradient\" [checked]=\"gradient\" (change)=\"gradient = !gradient\">\r\n                <label class=\"custom-control-label\" for=\"checkboxCostGradient\">Gradient</label>\r\n            </div>\r\n            <div class=\"custom-control custom-checkbox custom-control-inline\">\r\n                <input type=\"checkbox\" class=\"custom-control-input checkbox-dark-gray\" id=\"checkboxCostTooltip\" [checked]=\"tooltipDisabled\" (change)=\"tooltipDisabled = !tooltipDisabled\">\r\n                <label class=\"custom-control-label\" for=\"checkboxCostTooltip\">Tooltip Disabled</label>\r\n            </div>\r\n        </div>\r\n        <div class=\"w-100 h-300p\">\r\n            <ngx-charts-area-chart\r\n                [scheme]=\"colorScheme\"\r\n                [results]=\"cost\"\r\n                [gradient]=\"gradient\"\r\n                [tooltipDisabled]=\"tooltipDisabled\"\r\n                [xAxis]=\"showXAxis\"\r\n                [yAxis]=\"showYAxis\"\r\n                [legend]=\"showLegend\"\r\n                [showXAxisLabel]=\"showXAxisLabel\"\r\n                [showYAxisLabel]=\"showYAxisLabel\"\r\n                [xAxisLabel]=\"xAxisLabel\"\r\n                [yAxisLabel]=\"yAxisLabel\"\r\n                [autoScale]=\"autoScale\"\r\n                (select)=\"onSelect($event)\">\r\n            </ngx-charts-area-chart>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/cost/cost.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_settings__ = __webpack_require__("../../../../../src/app/app.settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_data__ = __webpack_require__("../../../../../src/app/pages/dashboard/dashboard.data.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



function getNewTime(d) {
    var h = (d.getHours() < 10 ? '0' : '') + d.getHours(), m = (d.getMinutes() < 10 ? '0' : '') + d.getMinutes(), s = (d.getSeconds() < 10 ? '0' : '') + d.getSeconds(), time = h + ":" + m + ":" + s;
    return time;
}
var CostComponent = /** @class */ (function () {
    function CostComponent(appSettings) {
        var _this = this;
        this.appSettings = appSettings;
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = true;
        this.tooltipDisabled = false;
        this.showLegend = false;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Time';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'Cost';
        this.colorScheme = {
            domain: ['#0096A6', '#D22E2E']
        };
        this.autoScale = true;
        this.settings = this.appSettings.settings;
        this.initPreviousSettings();
        setInterval(function () {
            _this.cost = _this.addRandomValue().slice();
        }, 3000);
    }
    CostComponent.prototype.ngOnInit = function () {
        this.cost = __WEBPACK_IMPORTED_MODULE_2__dashboard_data__["a" /* cost */];
    };
    CostComponent.prototype.onSelect = function (event) {
        console.log(event);
    };
    CostComponent.prototype.addRandomValue = function () {
        var value1 = Math.random() * 1000000;
        this.cost[0].series.push({ "name": getNewTime(new Date()), "value": value1 });
        var value2 = Math.random() * 1000000;
        this.cost[1].series.push({ "name": getNewTime(new Date()), "value": value2 });
        if (this.cost[0].series.length > 5)
            this.cost[0].series.splice(0, 1);
        if (this.cost[1].series.length > 5)
            this.cost[1].series.splice(0, 1);
        return this.cost;
    };
    CostComponent.prototype.ngOnDestroy = function () {
        this.cost[0].series.length = 0;
    };
    CostComponent.prototype.ngDoCheck = function () {
        var _this = this;
        if (this.checkAppSettingsChanges()) {
            setTimeout(function () { return _this.cost = __WEBPACK_IMPORTED_MODULE_2__dashboard_data__["a" /* cost */].slice(); });
            this.initPreviousSettings();
        }
    };
    CostComponent.prototype.checkAppSettingsChanges = function () {
        if (this.previousShowMenuOption != this.settings.theme.showMenu ||
            this.previousMenuOption != this.settings.theme.menu ||
            this.previousMenuTypeOption != this.settings.theme.menuType) {
            return true;
        }
        return false;
    };
    CostComponent.prototype.initPreviousSettings = function () {
        this.previousShowMenuOption = this.settings.theme.showMenu;
        this.previousMenuOption = this.settings.theme.menu;
        this.previousMenuTypeOption = this.settings.theme.menuType;
    };
    CostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-cost',
            template: __webpack_require__("../../../../../src/app/pages/dashboard/cost/cost.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_settings__["a" /* AppSettings */]])
    ], CostComponent);
    return CostComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<app-info-panels></app-info-panels>\r\n\r\n<app-info-cards></app-info-cards>\r\n\r\n<div class=\"row mb-2\">\r\n    <div class=\"col-lg-6 mb-4\">\r\n        <app-visitors></app-visitors>\r\n    </div>  \r\n    <div class=\"col-lg-6 mb-4\">\r\n        <app-cost></app-cost>\r\n    </div>   \r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-lg-5 mb-4\">\r\n        <app-disk-space></app-disk-space>\r\n    </div>  \r\n    <div class=\"col-lg-7 mb-4\">\r\n        <app-todo></app-todo>\r\n    </div>   \r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/pages/dashboard/dashboard.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/dashboard/dashboard.data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return countries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return orders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return products; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return customers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return refunds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return disk_space; });
var countries = [
    {
        "name": "Germany",
        "value": 8940000
    },
    {
        "name": "Great Britain",
        "value": 5120000
    },
    {
        "name": "France",
        "value": 7200000
    }
];
var d = new Date(), h = (d.getHours() < 10 ? '0' : '') + d.getHours(), m = (d.getMinutes() < 10 ? '0' : '') + d.getMinutes(), s = (d.getSeconds() < 10 ? '0' : '') + d.getSeconds();
var time = h + ":" + m + ":" + s;
var cost = [
    {
        name: 'Product 1',
        series: [
            {
                name: time,
                value: 21632
            }
        ]
    },
    {
        name: 'Product 2',
        series: [
            {
                name: time,
                value: 32632
            }
        ]
    }
];
var orders = [
    {
        name: 'Orders',
        series: [
            {
                name: "1980",
                value: 21632
            }
        ]
    }
];
var products = [
    {
        "name": "Product-1",
        "value": 69400
    },
    {
        "name": "Product-2",
        "value": 59400
    },
    {
        "name": "Product-3",
        "value": 82400
    },
    {
        "name": "Product-4",
        "value": 73400
    },
    {
        "name": "Product-5",
        "value": 25400
    },
    {
        "name": "Product-6",
        "value": 23400
    },
    {
        "name": "Product-7",
        "value": 49300
    },
    {
        "name": "Product-8",
        "value": 55400
    },
    {
        "name": "Product-9",
        "value": 37400
    },
    {
        "name": "Product-10",
        "value": 65220
    },
    {
        "name": "Product-11",
        "value": 79400
    },
    {
        "name": "Product-12",
        "value": 58400
    },
    {
        "name": "Product-13",
        "value": 41400
    },
    {
        "name": "Product-14",
        "value": 37400
    },
    {
        "name": "Product-15",
        "value": 33700
    },
    {
        "name": "Product-16",
        "value": 42700
    },
    {
        "name": "Product-17",
        "value": 52700
    },
    {
        "name": "Product-18",
        "value": 62700
    }
];
var customers = [
    {
        name: 'Customers',
        series: [
            {
                name: "2000",
                value: 34502
            }
        ]
    }
];
var refunds = [
    {
        "name": "Item-1",
        "value": 23701
    },
    {
        "name": "Item-2",
        "value": 33701
    },
    {
        "name": "Item-3",
        "value": 63701
    },
    {
        "name": "Item-4",
        "value": 52701
    },
    {
        "name": "Item-5",
        "value": 73701
    },
    {
        "name": "Item-6",
        "value": 43701
    },
    {
        "name": "Item-7",
        "value": 83701
    },
    {
        "name": "Item-8",
        "value": 29701
    },
    {
        "name": "Item-9",
        "value": 69701
    },
    {
        "name": "Item-10",
        "value": 58701
    },
    {
        "name": "Item-11",
        "value": 65701
    },
    {
        "name": "Item-12",
        "value": 47701
    },
    {
        "name": "Item-13",
        "value": 41701
    },
    {
        "name": "Item-14",
        "value": 25701
    },
    {
        "name": "Item-15",
        "value": 35701
    }
];
var disk_space = [
    {
        "name": "Disk C:",
        "value": 178
    },
    {
        "name": "Disk D:",
        "value": 340
    },
    {
        "name": "Disk E:",
        "value": 280
    }
];


/***/ }),

/***/ "../../../../../src/app/pages/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_perfect_scrollbar__ = __webpack_require__("../../../../ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_charts__ = __webpack_require__("../../../../@swimlane/ngx-charts/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__theme_directives_directives_module__ = __webpack_require__("../../../../../src/app/theme/directives/directives.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__info_panels_info_panels_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/info-panels/info-panels.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__visitors_visitors_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/visitors/visitors.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__cost_cost_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/cost/cost.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__info_cards_info_cards_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/info-cards/info-cards.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__disk_space_disk_space_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/disk-space/disk-space.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__todo_todo_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/todo/todo.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__dashboard_component__["a" /* DashboardComponent */], pathMatch: 'full' }
];
var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_4_ngx_perfect_scrollbar__["b" /* PerfectScrollbarModule */],
                __WEBPACK_IMPORTED_MODULE_5__swimlane_ngx_charts__["NgxChartsModule"],
                __WEBPACK_IMPORTED_MODULE_6__theme_directives_directives_module__["a" /* DirectivesModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_8__info_panels_info_panels_component__["a" /* InfoPanelsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__visitors_visitors_component__["a" /* VisitorsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__cost_cost_component__["a" /* CostComponent */],
                __WEBPACK_IMPORTED_MODULE_11__info_cards_info_cards_component__["a" /* InfoCardsComponent */],
                __WEBPACK_IMPORTED_MODULE_12__disk_space_disk_space_component__["a" /* DiskSpaceComponent */],
                __WEBPACK_IMPORTED_MODULE_13__todo_todo_component__["a" /* TodoComponent */]
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "../../../../../src/app/pages/dashboard/disk-space/disk-space.component.html":
/***/ (function(module, exports) {

module.exports = "<div widget class=\"card border-0\">\r\n    <div class=\"card-header transparent border-0 text-muted\">\r\n        <h5 class=\"mb-0\">Disk Space</h5>\r\n        <div class=\"widget-controls\"> \r\n            <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\r\n            <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>                         \r\n            <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\r\n        </div>        \r\n    </div>\r\n    <div class=\"card-body pt-0 pl-2 pr-2 pb-2 widget-body\">\r\n        <div class=\"text-center mb-2 fs-13\">\r\n            <div class=\"custom-control custom-checkbox custom-control-inline\">\r\n                <input type=\"checkbox\" class=\"custom-control-input checkbox-dark-gray\" id=\"checkboxExplodeSlices\" [checked]=\"explodeSlices\" (change)=\"explodeSlices = !explodeSlices\">\r\n                <label class=\"custom-control-label\" for=\"checkboxExplodeSlices\">Explode Slices</label>\r\n            </div>\r\n            <div class=\"custom-control custom-checkbox custom-control-inline\">\r\n                <input type=\"checkbox\" class=\"custom-control-input checkbox-dark-gray\" id=\"checkboxShowLabels\" [checked]=\"showLabels\" (change)=\"showLabels = !showLabels\">\r\n                <label class=\"custom-control-label\" for=\"checkboxShowLabels\">Show Labels</label>\r\n            </div>\r\n        </div>\r\n        <div class=\"w-100 h-300p\">\r\n            <ngx-charts-pie-chart\r\n                [scheme]=\"colorScheme\"\r\n                [results]=\"data\"\r\n                [legend]=\"showLegend\"\r\n                [explodeSlices]=\"explodeSlices\"\r\n                [labels]=\"showLabels\"\r\n                [doughnut]=\"doughnut\"\r\n                [gradient]=\"gradient\"\r\n                (select)=\"onSelect($event)\">\r\n            </ngx-charts-pie-chart>   \r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/disk-space/disk-space.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiskSpaceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_settings__ = __webpack_require__("../../../../../src/app/app.settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_data__ = __webpack_require__("../../../../../src/app/pages/dashboard/dashboard.data.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DiskSpaceComponent = /** @class */ (function () {
    function DiskSpaceComponent(appSettings) {
        this.appSettings = appSettings;
        this.showLegend = false;
        this.gradient = true;
        this.colorScheme = {
            domain: ['#2F3E9E', '#D22E2E', '#378D3B']
        };
        this.showLabels = true;
        this.explodeSlices = true;
        this.doughnut = false;
        this.settings = this.appSettings.settings;
        this.initPreviousSettings();
    }
    DiskSpaceComponent.prototype.ngOnInit = function () {
        this.data = __WEBPACK_IMPORTED_MODULE_2__dashboard_data__["d" /* disk_space */];
    };
    DiskSpaceComponent.prototype.onSelect = function (event) {
        console.log(event);
    };
    DiskSpaceComponent.prototype.ngDoCheck = function () {
        var _this = this;
        if (this.checkAppSettingsChanges()) {
            setTimeout(function () { return _this.data = __WEBPACK_IMPORTED_MODULE_2__dashboard_data__["d" /* disk_space */].slice(); });
            this.initPreviousSettings();
        }
    };
    DiskSpaceComponent.prototype.checkAppSettingsChanges = function () {
        if (this.previousShowMenuOption != this.settings.theme.showMenu ||
            this.previousMenuOption != this.settings.theme.menu ||
            this.previousMenuTypeOption != this.settings.theme.menuType) {
            return true;
        }
        return false;
    };
    DiskSpaceComponent.prototype.initPreviousSettings = function () {
        this.previousShowMenuOption = this.settings.theme.showMenu;
        this.previousMenuOption = this.settings.theme.menu;
        this.previousMenuTypeOption = this.settings.theme.menuType;
    };
    DiskSpaceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-disk-space',
            template: __webpack_require__("../../../../../src/app/pages/dashboard/disk-space/disk-space.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_settings__["a" /* AppSettings */]])
    ], DiskSpaceComponent);
    return DiskSpaceComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/dashboard/info-cards/info-cards.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row mb-3\">\r\n    <div class=\"col-xl-3 col-lg-6 col-md-6 mb-4\">\r\n        <div class=\"card border-0 bg-info\">\r\n            <div class=\"card-header border-0 transparent text-white d-flex justify-content-between\">\r\n                <span>Total orders</span>\r\n                <span><i class=\"fa fa-long-arrow-up mr-1\"></i>16%</span>\r\n            </div>\r\n            <div class=\"card-body p-0\">\r\n                <div class=\"w-100 h-100p\">\r\n                    <ngx-charts-line-chart\r\n                        [scheme]=\"colorScheme\"\r\n                        [results]=\"orders\"                      \r\n                        [autoScale]=\"autoScale\"\r\n                        (select)=\"onSelect($event)\">\r\n                    </ngx-charts-line-chart>                  \r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-xl-3 col-lg-6 col-md-6 mb-4\">\r\n        <div class=\"card border-0 bg-warning\">\r\n            <div class=\"card-header border-0 transparent text-white d-flex justify-content-between\">\r\n                <span>Products profit</span>\r\n                <span><i class=\"fa fa-long-arrow-up mr-1\"></i>38%</span>\r\n            </div>\r\n            <div class=\"card-body p-0\">\r\n                <div class=\"w-100 h-100p\">\r\n                    <ngx-charts-bar-vertical\r\n                        [scheme]=\"colorScheme\"\r\n                        [results]=\"products\"                      \r\n                        (select)=\"onSelect($event)\">\r\n                    </ngx-charts-bar-vertical>                 \r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-xl-3 col-lg-6 col-md-6 mb-4\">\r\n        <div class=\"card border-0 bg-danger\">\r\n            <div class=\"card-header border-0 transparent text-white d-flex justify-content-between\">\r\n                <span>Customers</span>\r\n                <span><i class=\"fa fa-long-arrow-down mr-1\"></i>-7%</span>\r\n            </div>\r\n            <div class=\"card-body p-0\">\r\n                <div class=\"w-100 h-100p\">\r\n                    <ngx-charts-line-chart\r\n                        [scheme]=\"colorScheme\"\r\n                        [results]=\"customers\"                      \r\n                        [autoScale]=\"autoScale\"\r\n                        (select)=\"onSelect($event)\">\r\n                    </ngx-charts-line-chart>                  \r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-xl-3 col-lg-6 col-md-6 mb-4\">\r\n        <div class=\"card border-0 bg-primary\">\r\n            <div class=\"card-header border-0 transparent text-white d-flex justify-content-between\">\r\n                <span>Refunds</span>\r\n                <span><i class=\"fa fa-long-arrow-up mr-1\"></i>12%</span>\r\n            </div>\r\n            <div class=\"card-body p-0\">\r\n                <div class=\"w-100 h-100p\">\r\n                    <ngx-charts-bar-vertical\r\n                        [scheme]=\"colorScheme\"\r\n                        [results]=\"refunds\"                      \r\n                        (select)=\"onSelect($event)\">\r\n                    </ngx-charts-bar-vertical>                 \r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/info-cards/info-cards.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoCardsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_settings__ = __webpack_require__("../../../../../src/app/app.settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_data__ = __webpack_require__("../../../../../src/app/pages/dashboard/dashboard.data.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InfoCardsComponent = /** @class */ (function () {
    function InfoCardsComponent(appSettings) {
        this.appSettings = appSettings;
        this.colorScheme = {
            domain: ['#FFFFFF']
        };
        this.autoScale = true;
        this.settings = this.appSettings.settings;
        this.initPreviousSettings();
    }
    InfoCardsComponent.prototype.ngOnInit = function () {
        this.orders = __WEBPACK_IMPORTED_MODULE_2__dashboard_data__["e" /* orders */];
        this.products = __WEBPACK_IMPORTED_MODULE_2__dashboard_data__["f" /* products */];
        this.customers = __WEBPACK_IMPORTED_MODULE_2__dashboard_data__["c" /* customers */];
        this.refunds = __WEBPACK_IMPORTED_MODULE_2__dashboard_data__["g" /* refunds */];
        this.orders = this.addRandomValue('orders');
        this.customers = this.addRandomValue('customers');
    };
    InfoCardsComponent.prototype.onSelect = function (event) {
        console.log(event);
    };
    InfoCardsComponent.prototype.addRandomValue = function (param) {
        switch (param) {
            case 'orders':
                for (var i = 1; i < 30; i++) {
                    this.orders[0].series.push({ "name": 1980 + i, "value": Math.ceil(Math.random() * 1000000) });
                }
                return this.orders;
            case 'customers':
                for (var i = 1; i < 15; i++) {
                    this.customers[0].series.push({ "name": 2000 + i, "value": Math.ceil(Math.random() * 1000000) });
                }
                return this.customers;
            default:
                return this.orders;
        }
    };
    InfoCardsComponent.prototype.ngOnDestroy = function () {
        this.orders[0].series.length = 0;
        this.customers[0].series.length = 0;
    };
    InfoCardsComponent.prototype.ngDoCheck = function () {
        var _this = this;
        if (this.checkAppSettingsChanges()) {
            setTimeout(function () { return _this.orders = __WEBPACK_IMPORTED_MODULE_2__dashboard_data__["e" /* orders */].slice(); });
            setTimeout(function () { return _this.products = __WEBPACK_IMPORTED_MODULE_2__dashboard_data__["f" /* products */].slice(); });
            setTimeout(function () { return _this.customers = __WEBPACK_IMPORTED_MODULE_2__dashboard_data__["c" /* customers */].slice(); });
            setTimeout(function () { return _this.refunds = __WEBPACK_IMPORTED_MODULE_2__dashboard_data__["g" /* refunds */].slice(); });
            this.initPreviousSettings();
        }
    };
    InfoCardsComponent.prototype.checkAppSettingsChanges = function () {
        if (this.previousShowMenuOption != this.settings.theme.showMenu ||
            this.previousMenuOption != this.settings.theme.menu ||
            this.previousMenuTypeOption != this.settings.theme.menuType) {
            return true;
        }
        return false;
    };
    InfoCardsComponent.prototype.initPreviousSettings = function () {
        this.previousShowMenuOption = this.settings.theme.showMenu;
        this.previousMenuOption = this.settings.theme.menu;
        this.previousMenuTypeOption = this.settings.theme.menuType;
    };
    InfoCardsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-info-cards',
            template: __webpack_require__("../../../../../src/app/pages/dashboard/info-cards/info-cards.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_settings__["a" /* AppSettings */]])
    ], InfoCardsComponent);
    return InfoCardsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/dashboard/info-panels/info-panels.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-xl-2 col-lg-4 col-md-4 col-sm-6 pl-2 pr-2 mb-4\">\r\n      <div class=\"w-100 h-100p\">\r\n          <ngx-charts-number-card\r\n              [scheme]=\"salesBgColor\"\r\n              [textColor]=\"'#fff'\"\r\n              [innerPadding]=\"0\"\r\n              [results]=\"sales\"\r\n              [valueFormatting]=\"infoValueFormat\"\r\n              [labelFormatting]=\"infoLabelFormat\"\r\n              (select)=\"onSelect($event)\">\r\n          </ngx-charts-number-card>     \r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-2 col-lg-4 col-md-4 col-sm-6 pl-2 pr-2 mb-4\">\r\n      <div class=\"w-100 h-100p\">\r\n          <ngx-charts-number-card\r\n              [scheme]=\"likesBgColor\"\r\n              [textColor]=\"'#fff'\"\r\n              [innerPadding]=\"0\"\r\n              [results]=\"likes\"\r\n              [valueFormatting]=\"infoValueFormat\"\r\n              [labelFormatting]=\"infoLabelFormat\"\r\n              (select)=\"onSelect($event)\">\r\n          </ngx-charts-number-card>     \r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-2 col-lg-4 col-md-4 col-sm-6 pl-2 pr-2 mb-4\">\r\n      <div class=\"w-100 h-100p\">\r\n          <ngx-charts-number-card\r\n              [scheme]=\"downloadsBgColor\"\r\n              [textColor]=\"'#fff'\"\r\n              [innerPadding]=\"0\"\r\n              [results]=\"downloads\"\r\n              [valueFormatting]=\"infoValueFormat\"\r\n              [labelFormatting]=\"infoLabelFormat\"\r\n              (select)=\"onSelect($event)\">\r\n          </ngx-charts-number-card>     \r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-2 col-lg-4 col-md-4 col-sm-6 pl-2 pr-2 mb-4\">\r\n      <div class=\"w-100 h-100p\">\r\n          <ngx-charts-number-card\r\n              [scheme]=\"profitBgColor\"\r\n              [textColor]=\"'#fff'\"\r\n              [innerPadding]=\"0\"\r\n              [results]=\"profit\"\r\n              [valueFormatting]=\"infoValueFormat\"\r\n              [labelFormatting]=\"infoLabelFormat\"\r\n              (select)=\"onSelect($event)\">\r\n          </ngx-charts-number-card>     \r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-2 col-lg-4 col-md-4 col-sm-6 pl-2 pr-2 mb-4\">\r\n      <div class=\"w-100 h-100p\">\r\n          <ngx-charts-number-card\r\n              [scheme]=\"messagesBgColor\"\r\n              [textColor]=\"'#fff'\"\r\n              [innerPadding]=\"0\"\r\n              [results]=\"messages\"\r\n              [valueFormatting]=\"infoValueFormat\"\r\n              [labelFormatting]=\"infoLabelFormat\"\r\n              (select)=\"onSelect($event)\">\r\n          </ngx-charts-number-card>     \r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-2 col-lg-4 col-md-4 col-sm-6 pl-2 pr-2 mb-4\">\r\n      <div class=\"w-100 h-100p\">\r\n          <ngx-charts-number-card\r\n              [scheme]=\"membersBgColor\"\r\n              [textColor]=\"'#fff'\"\r\n              [innerPadding]=\"0\"\r\n              [results]=\"members\"\r\n              [valueFormatting]=\"infoValueFormat\"\r\n              [labelFormatting]=\"infoLabelFormat\"\r\n              (select)=\"onSelect($event)\">\r\n          </ngx-charts-number-card>     \r\n      </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/info-panels/info-panels.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoPanelsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_settings__ = __webpack_require__("../../../../../src/app/app.settings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InfoPanelsComponent = /** @class */ (function () {
    function InfoPanelsComponent(appSettings) {
        this.appSettings = appSettings;
        this.sales = [{ name: 'sales', value: 0.81, extra: { format: 'percent' } }];
        this.salesBgColor = { domain: ['#2F3E9E'] };
        this.likes = [{ name: 'likes', value: 47588 }];
        this.likesBgColor = { domain: ['#D22E2E'] };
        this.downloads = [{ name: 'downloads', value: 189730 }];
        this.downloadsBgColor = { domain: ['#378D3B'] };
        this.profit = [{ name: 'profit', value: 52470, extra: { format: 'currency' } }];
        this.profitBgColor = { domain: ['#0096A6'] };
        this.messages = [{ name: 'messages', value: 75296 }];
        this.messagesBgColor = { domain: ['#606060'] };
        this.members = [{ name: 'members', value: 216279 }];
        this.membersBgColor = { domain: ['#F47B00'] };
        this.settings = this.appSettings.settings;
        this.initPreviousSettings();
    }
    InfoPanelsComponent.prototype.infoLabelFormat = function (c) {
        switch (c.data.name) {
            case 'sales':
                return "<i class=\"fa fa-shopping-cart mr-2\"></i>" + c.label;
            case 'likes':
                return "<i class=\"fa fa-thumbs-o-up mr-2\"></i>" + c.label;
            case 'downloads':
                return "<i class=\"fa fa-download mr-2\"></i>" + c.label;
            case 'profit':
                return "<i class=\"fa fa-money mr-2\"></i>" + c.label;
            case 'messages':
                return "<i class=\"fa fa-comment-o mr-2\"></i>" + c.label;
            case 'members':
                return "<i class=\"fa fa-user mr-2\"></i>" + c.label;
            default:
                return c.label;
        }
    };
    InfoPanelsComponent.prototype.infoValueFormat = function (c) {
        switch (c.data.extra ? c.data.extra.format : '') {
            case 'currency':
                return "$" + Math.round(c.value).toLocaleString();
            case 'percent':
                return Math.round(c.value * 100) + "%";
            default:
                return c.value.toLocaleString();
        }
    };
    InfoPanelsComponent.prototype.onSelect = function (event) {
        console.log(event);
    };
    InfoPanelsComponent.prototype.ngDoCheck = function () {
        var _this = this;
        if (this.checkAppSettingsChanges()) {
            setTimeout(function () { return _this.sales = _this.sales.slice(); });
            setTimeout(function () { return _this.likes = _this.likes.slice(); });
            setTimeout(function () { return _this.downloads = _this.downloads.slice(); });
            setTimeout(function () { return _this.profit = _this.profit.slice(); });
            setTimeout(function () { return _this.messages = _this.messages.slice(); });
            setTimeout(function () { return _this.members = _this.members.slice(); });
            this.initPreviousSettings();
        }
    };
    InfoPanelsComponent.prototype.checkAppSettingsChanges = function () {
        if (this.previousShowMenuOption != this.settings.theme.showMenu ||
            this.previousMenuOption != this.settings.theme.menu ||
            this.previousMenuTypeOption != this.settings.theme.menuType) {
            return true;
        }
        return false;
    };
    InfoPanelsComponent.prototype.initPreviousSettings = function () {
        this.previousShowMenuOption = this.settings.theme.showMenu;
        this.previousMenuOption = this.settings.theme.menu;
        this.previousMenuTypeOption = this.settings.theme.menuType;
    };
    InfoPanelsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-info-panels',
            template: __webpack_require__("../../../../../src/app/pages/dashboard/info-panels/info-panels.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_settings__["a" /* AppSettings */]])
    ], InfoPanelsComponent);
    return InfoPanelsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/dashboard/todo/todo.component.html":
/***/ (function(module, exports) {

module.exports = "<div widget class=\"card border-0\">\r\n    <div class=\"card-header transparent border-0 text-muted\">\r\n        <h5 class=\"mb-0\">To Do List</h5>\r\n        <div class=\"widget-controls\"> \r\n            <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\r\n            <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>                         \r\n            <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\r\n        </div>        \r\n    </div>\r\n    <div class=\"card-body widget-body\">  \r\n        <div class=\"task-todo-container\">\r\n        <div class=\"row header\">\r\n            <div class=\"col-sm-12\">\r\n                <div class=\"input-group\">                    \r\n                    <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Task to do...\"\r\n                        (keyup)=\"addToDoItem($event)\" [(ngModel)]=\"newTodoText\"/>\r\n                    <div class=\"input-group-append\">\r\n                        <button class=\"btn btn-primary\" type=\"button\" (click)=\"addToDoItem($event)\">\r\n                            <i class=\"fa fa-plus add-item-icon\"></i>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </div>            \r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n                <ul class=\"todo-list\" perfectScrollbar>\r\n                    <li *ngFor=\"let item of getNotDeleted()\" [ngClass]=\"{checked: item.isChecked, active: item.isActive}\"\r\n                        (mouseenter)=\"item.isActive=true\" (mouseleave)=\"item.isActive=false\">\r\n                        <input type=\"checkbox\" [(ngModel)]=\"item.isChecked\">\r\n                        <span class=\"cut-with-dots\">{{ item.text }}</span>\r\n                        <i class=\"fa fa-trash text-danger\" (click)=\"item.deleted = true\"></i>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/todo/todo.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".task-todo-container .header {\n  border-bottom: 1px solid #ccc;\n  padding-bottom: 20px; }\n\n.task-todo-container i.add-item-icon {\n  font-size: 18px; }\n\n.task-todo-container .todo-list {\n  height: 234px;\n  padding: 0;\n  margin-top: 10px;\n  margin-bottom: 0; }\n\n.task-todo-container .todo-list li {\n    list-style: none;\n    width: 100%;\n    line-height: 0;\n    position: relative; }\n\n.task-todo-container .todo-list li.checked span:before {\n      content: \"\\F00C\";\n      color: #378D3B; }\n\n.task-todo-container .todo-list li.active > i {\n      opacity: 1; }\n\n.task-todo-container .todo-list li input[type='checkbox'] {\n      position: absolute;\n      opacity: 0;\n      z-index: 1;\n      cursor: pointer;\n      width: 100%;\n      height: 28px;\n      line-height: 28px; }\n\n.task-todo-container .todo-list li span {\n      width: 100%;\n      height: 28px;\n      line-height: 28px;\n      display: inline-block;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      padding-left: 26px;\n      padding-right: 46px;\n      position: relative; }\n\n.task-todo-container .todo-list li span:before {\n        font-family: FontAwesome;\n        content: \"\\F1DB\";\n        margin-left: -26px;\n        position: absolute;\n        font-size: 13px; }\n\n.task-todo-container .todo-list li i {\n      position: absolute;\n      top: 4px;\n      right: 10px;\n      font-size: 20px;\n      opacity: 0;\n      z-index: 2;\n      cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/todo/todo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__todo_service__ = __webpack_require__("../../../../../src/app/pages/dashboard/todo/todo.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodoComponent = /** @class */ (function () {
    function TodoComponent(_todoService) {
        this._todoService = _todoService;
        this.newTodoText = '';
        this.todoList = this._todoService.getTodoList();
    }
    TodoComponent.prototype.getNotDeleted = function () {
        return this.todoList.filter(function (item) {
            return !item.deleted;
        });
    };
    TodoComponent.prototype.addToDoItem = function ($event) {
        if (($event.which === 1 || $event.which === 13) && this.newTodoText.trim() != '') {
            this.todoList.unshift({
                text: this.newTodoText
            });
            this.newTodoText = '';
        }
    };
    TodoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-todo',
            template: __webpack_require__("../../../../../src/app/pages/dashboard/todo/todo.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/dashboard/todo/todo.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            providers: [__WEBPACK_IMPORTED_MODULE_1__todo_service__["a" /* TodoService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__todo_service__["a" /* TodoService */]])
    ], TodoComponent);
    return TodoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/dashboard/todo/todo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TodoService = /** @class */ (function () {
    function TodoService() {
        this._todoList = [
            { text: 'Check me out' },
            { text: 'Curabitur dignissim nunc a tellus euismod, quis pretium ipsum convallis' },
            { text: 'Vivamus dapibus pulvinar ipsum, sit amet elementum sapien tincidunt non' },
            { text: 'Praesent viverra nisl a pharetra viverra' },
            { text: 'Lorem ipsum dolor sit amet, possit denique oportere at his, etiam corpora deseruisse te pro' },
            { text: 'Ex has semper alterum, expetenda dignissim' },
            { text: 'Nulla nisl urna, lobortis in leo vel, porta faucibus nulla' },
            { text: 'Simul erroribus ad usu' }
        ];
    }
    TodoService.prototype.getTodoList = function () {
        return this._todoList;
    };
    TodoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], TodoService);
    return TodoService;
}());



/***/ }),

/***/ "../../../../../src/app/pages/dashboard/visitors/visitors.component.html":
/***/ (function(module, exports) {

module.exports = "<div widget class=\"card border-0\">\r\n    <div class=\"card-header transparent border-0 text-muted\">\r\n        <h5 class=\"mb-0\">Visitors</h5>\r\n        <div class=\"widget-controls\"> \r\n            <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\r\n            <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>                         \r\n            <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\r\n        </div>        \r\n    </div>\r\n    <div class=\"card-body pt-0 pl-2 pr-2 pb-2 widget-body\">\r\n        <div class=\"text-center mb-2\">\r\n            <div class=\"custom-control custom-checkbox custom-control-inline\">\r\n                <input type=\"checkbox\" class=\"custom-control-input checkbox-dark-gray\" id=\"checkboxGradient\" [checked]=\"gradient\" (change)=\"gradient = !gradient\">\r\n                <label class=\"custom-control-label\" for=\"checkboxGradient\">Gradient</label>\r\n            </div>\r\n            <div class=\"custom-control custom-checkbox custom-control-inline\">\r\n                <input type=\"checkbox\" class=\"custom-control-input checkbox-dark-gray\" id=\"checkboxTooltip\" [checked]=\"tooltipDisabled\" (change)=\"tooltipDisabled = !tooltipDisabled\">\r\n                <label class=\"custom-control-label\" for=\"checkboxTooltip\">Tooltip Disabled</label>\r\n            </div>\r\n        </div>    \r\n        <div class=\"w-100 h-300p visitors\">\r\n            <ngx-charts-tree-map\r\n              [scheme]=\"colorScheme\"        \r\n              [gradient]=\"gradient\"\r\n              [tooltipDisabled]=\"tooltipDisabled\"       \r\n              [labelFormatting]=\"visitorsLabelFormat\"\r\n              [results]=\"countries\"\r\n              (select)=\"onSelect($event)\">\r\n            </ngx-charts-tree-map>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/visitors/visitors.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".visitors .ngx-charts .label {\n  font-size: 14px; }\n  .visitors .ngx-charts .label p {\n    color: #fff !important; }\n  .visitors .ngx-charts .label p .treemap-label {\n      font-size: 20px; }\n  .visitors .ngx-charts .label p .treemap-label .flag-icon {\n        position: inherit;\n        font-size: 18px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/visitors/visitors.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisitorsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_settings__ = __webpack_require__("../../../../../src/app/app.settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_data__ = __webpack_require__("../../../../../src/app/pages/dashboard/dashboard.data.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VisitorsComponent = /** @class */ (function () {
    function VisitorsComponent(appSettings) {
        this.appSettings = appSettings;
        this.colorScheme = {
            domain: ['#378D3B', '#D22E2E', '#F47B00', '#AAAAAA']
        };
        this.gradient = true;
        this.tooltipDisabled = false;
        this.settings = this.appSettings.settings;
        this.initPreviousSettings();
    }
    VisitorsComponent.prototype.visitorsLabelFormat = function (c) {
        switch (c.label) {
            case 'Germany':
                return "<span class=\"flag-icon flag-icon-de mr-2\"></span>" + c.label;
            case 'France':
                return "<span class=\"flag-icon flag-icon-fr mr-2\"></span>" + c.label;
            case 'Great Britain':
                return "<span class=\"flag-icon flag-icon-gb mr-2\"></span>" + c.label;
            default:
                return c.label;
        }
    };
    VisitorsComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { return _this.countries = __WEBPACK_IMPORTED_MODULE_2__dashboard_data__["b" /* countries */]; });
        this.countries = __WEBPACK_IMPORTED_MODULE_2__dashboard_data__["b" /* countries */];
    };
    VisitorsComponent.prototype.onSelect = function (event) {
        console.log(event);
    };
    VisitorsComponent.prototype.ngDoCheck = function () {
        var _this = this;
        if (this.checkAppSettingsChanges()) {
            setTimeout(function () { return _this.countries = __WEBPACK_IMPORTED_MODULE_2__dashboard_data__["b" /* countries */].slice(); });
            this.initPreviousSettings();
        }
    };
    VisitorsComponent.prototype.checkAppSettingsChanges = function () {
        if (this.previousShowMenuOption != this.settings.theme.showMenu ||
            this.previousMenuOption != this.settings.theme.menu ||
            this.previousMenuTypeOption != this.settings.theme.menuType) {
            return true;
        }
        return false;
    };
    VisitorsComponent.prototype.initPreviousSettings = function () {
        this.previousShowMenuOption = this.settings.theme.showMenu;
        this.previousMenuOption = this.settings.theme.menu;
        this.previousMenuTypeOption = this.settings.theme.menuType;
    };
    VisitorsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-visitors',
            template: __webpack_require__("../../../../../src/app/pages/dashboard/visitors/visitors.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/dashboard/visitors/visitors.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_settings__["a" /* AppSettings */]])
    ], VisitorsComponent);
    return VisitorsComponent;
}());



/***/ })

});
//# sourceMappingURL=dashboard.module.chunk.js.map