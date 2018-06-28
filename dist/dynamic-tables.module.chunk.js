webpackJsonp(["dynamic-tables.module"],{

/***/ "../../../../../src/app/pages/tables/dynamic-tables/dynamic-tables.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicTablesModule", function() { return DynamicTablesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_smart_table__ = __webpack_require__("../../../../ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_datatable__ = __webpack_require__("../../../../@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__theme_directives_directives_module__ = __webpack_require__("../../../../../src/app/theme/directives/directives.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__smart_smart_component__ = __webpack_require__("../../../../../src/app/pages/tables/dynamic-tables/smart/smart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_ngx_component__ = __webpack_require__("../../../../../src/app/pages/tables/dynamic-tables/ngx/ngx.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', redirectTo: 'smart', pathMatch: 'full' },
    { path: 'smart', component: __WEBPACK_IMPORTED_MODULE_6__smart_smart_component__["a" /* SmartComponent */], data: { breadcrumb: 'Smart DataTable' } },
    { path: 'ngx', component: __WEBPACK_IMPORTED_MODULE_7__ngx_ngx_component__["a" /* NgxComponent */], data: { breadcrumb: 'NGX DataTable' } }
];
var DynamicTablesModule = /** @class */ (function () {
    function DynamicTablesModule() {
    }
    DynamicTablesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_3_ng2_smart_table__["b" /* Ng2SmartTableModule */],
                __WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_datatable__["NgxDatatableModule"],
                __WEBPACK_IMPORTED_MODULE_5__theme_directives_directives_module__["a" /* DirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* RouterModule */].forChild(routes)
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__smart_smart_component__["a" /* SmartComponent */],
                __WEBPACK_IMPORTED_MODULE_7__ngx_ngx_component__["a" /* NgxComponent */]
            ]
        })
    ], DynamicTablesModule);
    return DynamicTablesModule;
}());



/***/ }),

/***/ "../../../../../src/app/pages/tables/dynamic-tables/ngx/ngx.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Ngx datatable</h2>\r\n<p class=\"text-muted\">Editable, filterable and sortable table made with <a href=\"https://github.com/swimlane/ngx-datatable\" target=\"_blank\" class=\"font-weight-bold transition\">ngx-datatable</a>.</p>\r\n\r\n<div class=\"input-group mb-2\">\r\n    <span class=\"input-group-prepend\"><span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span></span>\r\n    <input class=\"form-control\" type=\"text\" placeholder=\"Type to filter the name column...\" (keyup)=\"updateFilter($event)\"/>\r\n</div>\r\n\r\n<ngx-datatable\r\n    #table\r\n    class=\"material\"\r\n    [headerHeight]=\"40\"\r\n    [limit]=\"10\"\r\n    [columnMode]=\"'force'\"\r\n    [footerHeight]=\"50\"\r\n    [rowHeight]=\"'auto'\"\r\n    [rows]=\"rows\"\r\n    [loadingIndicator]=\"loadingIndicator\"\r\n    [selected]=\"selected\"\r\n    [selectionType]=\"'checkbox'\"\r\n    (activate)=\"onActivate($event)\"\r\n    (select)='onSelect($event)'>\r\n    <ngx-datatable-column\r\n        [width]=\"30\"\r\n        [sortable]=\"false\"\r\n        [canAutoResize]=\"false\"\r\n        [draggable]=\"true\"\r\n        [resizeable]=\"false\"\r\n        [headerCheckboxable]=\"true\"\r\n        [checkboxable]=\"true\">\r\n      </ngx-datatable-column>\r\n    <ngx-datatable-column name=\"Name\">\r\n      <ng-template ngx-datatable-cell-template let-value=\"value\" let-row=\"row\">\r\n        <span\r\n          title=\"Double click to edit\"\r\n          (dblclick)=\"editing[row.$$index + '-name'] = true\"\r\n          *ngIf=\"!editing[row.$$index + '-name']\">\r\n          {{value}}\r\n        </span>\r\n        <input\r\n          autofocus\r\n          (blur)=\"updateValue($event, 'name', value, row)\"\r\n          *ngIf=\"editing[row.$$index + '-name']\"\r\n          type=\"text\"\r\n          [value]=\"value\"\r\n        />\r\n      </ng-template>\r\n    </ngx-datatable-column>\r\n    <ngx-datatable-column name=\"Gender\">\r\n      <ng-template ngx-datatable-cell-template let-row=\"row\" let-value=\"value\">\r\n        <span\r\n          title=\"Double click to edit\"\r\n          (dblclick)=\"editing[row.$$index + '-gender'] = true\"\r\n          *ngIf=\"!editing[row.$$index + '-gender']\">\r\n          {{value}}\r\n        </span>\r\n        <select\r\n          *ngIf=\"editing[row.$$index + '-gender']\"\r\n          (change)=\"updateValue($event, 'gender', value, row)\"\r\n          [value]=\"value\">\r\n          <option value=\"male\">Male</option>\r\n          <option value=\"female\">Female</option>\r\n        </select>\r\n      </ng-template>\r\n    </ngx-datatable-column>\r\n    <ngx-datatable-column name=\"Company\">\r\n      <ng-template ngx-datatable-cell-template let-value=\"value\">\r\n        {{value}}\r\n      </ng-template>\r\n    </ngx-datatable-column>\r\n</ngx-datatable>   "

/***/ }),

/***/ "../../../../../src/app/pages/tables/dynamic-tables/ngx/ngx.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_datatable__ = __webpack_require__("../../../../@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_datatable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgxComponent = /** @class */ (function () {
    function NgxComponent() {
        var _this = this;
        this.editing = {};
        this.rows = [];
        this.temp = [];
        this.selected = [];
        this.loadingIndicator = true;
        this.reorderable = true;
        this.columns = [
            { prop: 'name' },
            { name: 'Gender' },
            { name: 'Company' }
        ];
        this.fetch(function (data) {
            _this.temp = data.slice();
            _this.rows = data;
            setTimeout(function () { _this.loadingIndicator = false; }, 1500);
        });
    }
    NgxComponent.prototype.fetch = function (data) {
        var req = new XMLHttpRequest();
        req.open('GET', 'assets/data/company.json');
        req.onload = function () {
            data(JSON.parse(req.response));
        };
        req.send();
    };
    NgxComponent.prototype.updateFilter = function (event) {
        var val = event.target.value.toLowerCase();
        var temp = this.temp.filter(function (d) {
            return d.name.toLowerCase().indexOf(val) !== -1 || !val;
        });
        this.rows = temp;
        this.table.offset = 0;
    };
    NgxComponent.prototype.updateValue = function (event, cell, cellValue, row) {
        this.editing[row.$$index + '-' + cell] = false;
        this.rows[row.$$index][cell] = event.target.value;
    };
    NgxComponent.prototype.onSelect = function (_a) {
        var selected = _a.selected;
        console.log('Select Event', selected, this.selected);
        this.selected.splice(0, this.selected.length);
        (_b = this.selected).push.apply(_b, selected);
        var _b;
    };
    NgxComponent.prototype.onActivate = function (event) {
        console.log('Activate Event', event);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_datatable__["DatatableComponent"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_datatable__["DatatableComponent"])
    ], NgxComponent.prototype, "table", void 0);
    NgxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ngx',
            template: __webpack_require__("../../../../../src/app/pages/tables/dynamic-tables/ngx/ngx.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], NgxComponent);
    return NgxComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/tables/dynamic-tables/smart/smart.component.html":
/***/ (function(module, exports) {

module.exports = "<div widget class=\"card border-0 box-shadow\">\r\n    <div class=\"card-header transparent border-0 text-muted\">\r\n        <h5 class=\"mb-0\">ng2-smart-table</h5>\r\n        <div class=\"widget-controls\"> \r\n            <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\r\n            <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\r\n            <a data-widgster=\"fullscreen\" href=\"#\" class=\"transition\"><i class=\"fa fa-expand\"></i></a>\r\n            <a data-widgster=\"restore\" href=\"#\" class=\"transition\"><i class=\"fa fa-compress\"></i></a>  \r\n            <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\r\n        </div>        \r\n    </div>\r\n    <div class=\"card-body pt-0 widget-body\">\r\n        <p class=\"text-left fs-13 text-gray\">Simple table component with editing, sorting, filtering and pagination for Angular. Built with <a href=\"https://github.com/akveo/ng2-smart-table\" target=\"_blank\" class=\"font-weight-bold transition\">ng2-smart-table</a>.</p>\r\n        <div class=\"table-responsive\">\r\n            <ng2-smart-table  class=\"table table-hover\"\r\n                              [settings]=\"settings\" \r\n                              [source]=\"data\" \r\n                              (deleteConfirm)=\"onDeleteConfirm($event)\"\r\n                              (rowSelect)=\"onRowSelect($event)\" \r\n                              (userRowSelect)=\"onUserRowSelect($event)\"\r\n                              (rowHover)=\"onRowHover($event)\"></ng2-smart-table>\r\n        </div>          \r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/tables/dynamic-tables/smart/smart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmartComponent; });
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

var SmartComponent = /** @class */ (function () {
    function SmartComponent() {
        var _this = this;
        this.data = [];
        this.settings = {
            selectMode: 'single',
            hideHeader: false,
            hideSubHeader: false,
            actions: {
                columnTitle: 'Actions',
                add: true,
                edit: true,
                delete: true,
                custom: [],
                position: 'right' // left|right
            },
            add: {
                addButtonContent: '<h4 class="mb-1"><i class="fa fa-plus ml-3 text-success"></i></h4>',
                createButtonContent: '<i class="fa fa-check mr-3 text-success"></i>',
                cancelButtonContent: '<i class="fa fa-times text-danger"></i>'
            },
            edit: {
                editButtonContent: '<i class="fa fa-pencil mr-3 text-primary"></i>',
                saveButtonContent: '<i class="fa fa-check mr-3 text-success"></i>',
                cancelButtonContent: '<i class="fa fa-times text-danger"></i>'
            },
            delete: {
                deleteButtonContent: '<i class="fa fa-trash-o text-danger"></i>',
                confirmDelete: true
            },
            noDataMessage: 'No data found',
            columns: {
                id: {
                    title: 'ID',
                    editable: false,
                    width: '60px',
                    type: 'html',
                    valuePrepareFunction: function (value) { return '<div class="text-center">' + value + '</div>'; }
                },
                firstName: {
                    title: 'First Name',
                    type: 'string',
                    filter: true
                },
                lastName: {
                    title: 'Last Name',
                    type: 'string'
                },
                username: {
                    title: 'Username',
                    type: 'string'
                },
                email: {
                    title: 'E-mail',
                    type: 'string'
                },
                age: {
                    title: 'Age',
                    type: 'number'
                }
            },
            pager: {
                display: true,
                perPage: 10
            }
        };
        this.getData(function (data) {
            _this.data = data;
        });
    }
    SmartComponent.prototype.getData = function (data) {
        var req = new XMLHttpRequest();
        req.open('GET', 'assets/data/users.json');
        req.onload = function () {
            data(JSON.parse(req.response));
        };
        req.send();
    };
    SmartComponent.prototype.onDeleteConfirm = function (event) {
        if (window.confirm('Are you sure you want to delete?')) {
            event.confirm.resolve();
        }
        else {
            event.confirm.reject();
        }
    };
    SmartComponent.prototype.onRowSelect = function (event) {
        // console.log(event);
    };
    SmartComponent.prototype.onUserRowSelect = function (event) {
        //console.log(event);   //this select return only one page rows
    };
    SmartComponent.prototype.onRowHover = function (event) {
        //console.log(event);
    };
    SmartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-smart',
            template: __webpack_require__("../../../../../src/app/pages/tables/dynamic-tables/smart/smart.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], SmartComponent);
    return SmartComponent;
}());



/***/ })

});
//# sourceMappingURL=dynamic-tables.module.chunk.js.map