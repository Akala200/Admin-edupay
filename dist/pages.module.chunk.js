webpackJsonp(["pages.module"],{

/***/ "../../../../../src/app/pages/blank/blank.component.html":
/***/ (function(module, exports) {

module.exports = "<div widget class=\"card border-0 box-shadow\">\r\n    <div class=\"card-header transparent border-0 text-muted\">\r\n        <h4 class=\"mb-0\">Users</h4>\r\n        <div class=\"widget-controls\"> \r\n            <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\r\n            <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a>\r\n            <a data-widgster=\"fullscreen\" href=\"#\" class=\"transition\"><i class=\"fa fa-expand\"></i></a>\r\n            <a data-widgster=\"restore\" href=\"#\" class=\"transition\"><i class=\"fa fa-compress\"></i></a>  \r\n        </div>        \r\n    </div>\r\n    <div class=\"card-body pt-0 widget-body\">\r\n        <div class=\"table-responsive\">\r\n            <ng2-smart-table  class=\"table table-hover\"\r\n                              [settings]=\"settings\" \r\n                              [source]=\"data\"\r\n                              (createConfirm)=\"onPostCall($event)\"\r\n                              (editConfirm)=\"onPutCall($event)\"\r\n                              (deleteConfirm)=\"onDeleteConfirm($event)\"\r\n                              (rowSelect)=\"onRowSelect($event)\" \r\n                              (userRowSelect)=\"onUserRowSelect($event)\"\r\n                              (rowHover)=\"onRowHover($event)\"></ng2-smart-table>\r\n        </div>          \r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/blank/blank.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/blank/blank.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlankComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_smart_table__ = __webpack_require__("../../../../ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BlankComponent = /** @class */ (function () {
    function BlankComponent(userService, http) {
        var _this = this;
        this.userService = userService;
        this.http = http;
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
                cancelButtonContent: '<i class="fa fa-times text-danger"></i>',
                confirmCreate: true
            },
            edit: {
                editButtonContent: '<i class="fa fa-pencil mr-3 text-primary"></i>',
                saveButtonContent: '<i class="fa fa-check mr-3 text-success"></i>',
                cancelButtonContent: '<i class="fa fa-times text-danger"></i>',
                confirmSave: true
            },
            delete: {
                deleteButtonContent: '<i class="fa fa-trash-o text-danger"></i>',
                confirmDelete: true
            },
            noDataMessage: 'No data found',
            columns: {
                firstName: {
                    title: 'First Name',
                    type: 'string',
                    filter: true
                },
                lastName: {
                    title: 'Last Name',
                    type: 'string'
                },
                email: {
                    title: 'E-mail',
                    type: 'string'
                },
                phoneNumber: {
                    title: 'Phone Number',
                    type: 'number'
                },
                role: {
                    title: 'Role',
                    type: 'html',
                    editor: {
                        type: 'list',
                        config: {
                            list: [{ value: 'Admin', title: 'Admin' }, { value: 'Agent', title: 'Agent' }, { value: 'User', title: 'User' }]
                        }
                    }
                },
                gender: {
                    title: 'Gender',
                    type: 'html',
                    editor: {
                        type: 'list',
                        config: {
                            list: [{ value: 'Male', title: 'Male' }, { value: 'Female', title: 'Female' }]
                        }
                    }
                }
            },
            pager: {
                display: true,
                perPage: 10
            }
        };
        this.source = new __WEBPACK_IMPORTED_MODULE_2_ng2_smart_table__["a" /* LocalDataSource */]();
        this.loadData(function (data) {
            _this.data = data;
        });
    }
    BlankComponent.prototype.loadData = function (data) {
        var req = new XMLHttpRequest();
        req.open('GET', 'http://edupay-api.azurewebsites.net/api/admin/user/get-all');
        req.onload = function () {
            data(JSON.parse(req.response));
        };
        req.send();
    };
    BlankComponent.prototype.onDeleteConfirm = function (event) {
        if (window.confirm('Are you sure you want to delete?')) {
            event.confirm.resolve();
        }
        else {
            event.confirm.reject();
            var req = this.http.delete('http://edupay-api.azurewebsites.net/api/Values/' + event.id).subscribe(function (res) {
                console.log(res);
                event.confirm.resolve(event.newData);
            }, function (err) {
                if (err.error instanceof Error) {
                    console.log('Client-side error occured.');
                }
                else {
                    console.log('Server-side error occured.');
                }
            });
        }
    };
    BlankComponent.prototype.onRowSelect = function (event) {
        // console.log(event);
    };
    BlankComponent.prototype.onUserRowSelect = function (event) {
        // console.log(event);   //this select return only one page rows
    };
    BlankComponent.prototype.onRowHover = function (event) {
        // console.log(event);
    };
    BlankComponent.prototype.onPostCall = function (event) {
        event.confirm.resolve(event.newData);
        var req = this.http.post('http://edupay-api.azurewebsites.net/user/create/', this.data).subscribe(function (res) {
            console.log(res);
            event.confirm.resolve(event.newData);
        }, function (err) {
            if (err.error instanceof Error) {
                console.log('Client-side error occured.');
            }
            else {
                console.log('Server-side error occured.');
            }
        });
    };
    BlankComponent.prototype.onPutCall = function (event) {
        event.confirm.resolve(event.newData);
        // console.log(event.newData); //this contains the new edited data
        // your post request goes here
        //    example
        var req = this.http.put('http://edupay-api.azurewebsites.net/api/Values/' + event.newData.id, this.data).subscribe(function (res) {
            console.log(res);
            event.confirm.resolve(event.newData);
        }, function (err) {
            if (err.error instanceof Error) {
                console.log('Client-side error occured.');
            }
            else {
                console.log('Server-side error occured.');
            }
        });
    };
    BlankComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-blank',
            template: __webpack_require__("../../../../../src/app/pages/blank/blank.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/blank/blank.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]])
    ], BlankComponent);
    return BlankComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/pages.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper-inner\" [ngClass]=\"{ 'vertical-menu-tooltip-place': (settings.theme.menuType == 'mini' && settings.theme.menu == 'vertical'),\r\n                                        'horizontal-menu-tooltip-place': (settings.theme.menuType == 'mini' && settings.theme.menu == 'horizontal') }\">\r\n    \r\n    <app-header></app-header>\r\n\r\n    <div class=\"d-flex h-100\" [ngClass]=\"{'flex-row': settings.theme.menu == 'vertical', 'flex-column': settings.theme.menu != 'vertical'}\">\r\n        <app-sidebar *ngIf=\"settings.theme.menu == 'vertical'\"></app-sidebar> \r\n        <div class=\"main-content\"> \r\n            <app-side-chat></app-side-chat>           \r\n            <app-breadcrumb></app-breadcrumb>            \r\n            <router-outlet></router-outlet>              \r\n        </div>\r\n    </div>   \r\n\r\n</div>\r\n<app-footer></app-footer>\r\n<app-back-top position=\"200\"></app-back-top>\r\n\r\n<div class=\"settings\" [ngClass]=\"{'show': showSetting}\">\r\n    <button class=\"btn btn-default toggle\" (click)=\"showSetting=!showSetting\"><i class=\"fa fa-spin fa-gear\"></i></button>\r\n    <div class=\"card\">\r\n        <div class=\"card-header text-center\">\r\n            Settings\r\n        </div>      \r\n        <div class=\"card-body mt-2\">\r\n            <h6>Choose menu</h6>  \r\n            <div class=\"form-group\">\r\n                <div *ngFor=\"let menu of menus; let i = index;\" class=\"custom-control custom-radio\">\r\n                    <input [attr.id]=\"'radio-'+i\" type=\"radio\" name=\"menus\" class=\"custom-control-input radio-dark-gray\"\r\n                        (change)=\"chooseMenu(menu)\" [checked]=\"menu === menuOption\" [value]=\"menu\">\r\n                    <label [attr.for]=\"'radio-'+i\" class=\"custom-control-label text-capitalize\">{{menu}}</label>\r\n                </div>\r\n            </div>\r\n        </div> \r\n        <div class=\"card-body\">\r\n            <h6>Choose menu type</h6>\r\n            <div class=\"form-group\">\r\n                <div *ngFor=\"let menuType of menuTypes; let i = index;\" class=\"custom-control custom-radio\">\r\n                    <input [attr.id]=\"'menuType-'+i\" type=\"radio\" name=\"menuTypes\" class=\"custom-control-input radio-dark-gray\"\r\n                        (change)=\"chooseMenuType(menuType)\" [checked]=\"menuType === menuTypeOption\" [value]=\"menuType\">\r\n                    <label [attr.for]=\"'menuType-'+i\" class=\"custom-control-label text-capitalize\">{{menuType}}</label>\r\n                </div>\r\n            </div> \r\n        </div> \r\n        <div class=\"card-body mb-3\">\r\n            <h6>Choose theme skin</h6>          \r\n            <div class=\"theme light\" (click)=\"changeTheme('light')\"></div>\r\n            <div class=\"theme dark\" (click)=\"changeTheme('dark')\"></div>\r\n            <div class=\"theme blue\" (click)=\"changeTheme('blue')\"></div>\r\n            <div class=\"theme green\" (click)=\"changeTheme('green')\"></div>\r\n            <div class=\"theme combined\" (click)=\"changeTheme('combined')\"></div>\r\n            <div class=\"theme purple\" (click)=\"changeTheme('purple')\"></div>\r\n            <div class=\"theme orange\" (click)=\"changeTheme('orange')\"></div>\r\n            <div class=\"theme brown\" (click)=\"changeTheme('brown')\"></div>\r\n            <div class=\"theme grey\" (click)=\"changeTheme('grey')\"></div>\r\n            <div class=\"theme pink\" (click)=\"changeTheme('pink')\"></div>\r\n        </div>  \r\n        <div class=\"card-body mb-2\">\r\n            <h6>Other theme options</h6> \r\n            <div class=\"custom-control custom-checkbox\">\r\n                <input type=\"checkbox\" class=\"custom-control-input checkbox-dark-gray\" id=\"navbarIsFixed\" [checked]=\"settings.theme.navbarIsFixed\" (change)=\"settings.theme.navbarIsFixed = !settings.theme.navbarIsFixed\">\r\n                <label class=\"custom-control-label\" for=\"navbarIsFixed\">Fixed header</label>\r\n            </div>\r\n            <div class=\"custom-control custom-checkbox\">\r\n                <input type=\"checkbox\" class=\"custom-control-input checkbox-dark-gray\" id=\"sidebarIsFixed\" [checked]=\"settings.theme.sidebarIsFixed\" (change)=\"settings.theme.sidebarIsFixed = !settings.theme.sidebarIsFixed\">\r\n                <label class=\"custom-control-label\" for=\"sidebarIsFixed\">Fixed sidebar</label>\r\n            </div>\r\n            <div class=\"custom-control custom-checkbox\">\r\n                <input type=\"checkbox\" class=\"custom-control-input checkbox-dark-gray\" id=\"footerIsFixed\" [checked]=\"settings.theme.footerIsFixed\" (change)=\"settings.theme.footerIsFixed = !settings.theme.footerIsFixed\">\r\n                <label class=\"custom-control-label\" for=\"footerIsFixed\">Fixed footer</label>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/pages.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**** General ****/\n.wrapper-inner {\n  min-height: 100%;\n  height: auto !important;\n  margin-bottom: -28px;\n  padding: 0 0 28px; }\n.main-content {\n  width: 100%;\n  padding: 25px;\n  -webkit-box-flex: 1;\n  min-height: calc(100vh - (46px + 28px));\n  overflow: hidden; }\n/*settings*/\n.settings {\n  position: fixed;\n  top: 80px;\n  right: -212px;\n  z-index: 995;\n  width: 210px;\n  -webkit-transition: all .2s;\n  transition: all .2s; }\n.settings.show {\n    right: -1px; }\n.settings .btn {\n    position: absolute;\n    left: -34px;\n    padding: 7px 12px 7px 10px;\n    z-index: 99;\n    background: #fff;\n    border-color: rgba(0, 0, 0, 0.125);\n    border-style: solid;\n    border-width: 1px 0px 1px 1px;\n    border-radius: 0;\n    border-bottom-left-radius: 4px;\n    border-top-left-radius: 4px;\n    cursor: pointer; }\n.settings .btn:focus {\n      -webkit-box-shadow: none;\n              box-shadow: none; }\n.settings .card {\n    border-top: none;\n    border-radius: 0; }\n.settings .card .card-header {\n      padding: 0.34rem 1.25rem;\n      background: #fff !important;\n      border-radius: 0;\n      text-transform: uppercase;\n      letter-spacing: 0.05em;\n      font-weight: bold;\n      border-top: 1px solid rgba(0, 0, 0, 0.125);\n      border-bottom: 0; }\n.settings .card-body {\n    padding: 2px 20px; }\n.settings .card-body h6 {\n      border-bottom: 1px solid #eceeef;\n      padding-bottom: 2px; }\n.settings .theme {\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    display: inline-block;\n    margin-right: 5px;\n    cursor: pointer; }\n.settings .theme.light {\n      background-color: #ececec; }\n.settings .theme.dark {\n      background-color: #262626; }\n.settings .theme.blue {\n      background-color: #1875D1; }\n.settings .theme.green {\n      background-color: #00786A; }\n.settings .theme.combined {\n      overflow: hidden;\n      background-color: #262626; }\n.settings .theme.combined:before {\n        content: \"\";\n        background-color: #f5f5f5;\n        width: 10px;\n        height: 20px;\n        display: inline-block; }\n.settings .theme.purple {\n      background-color: #7A1EA1; }\n.settings .theme.orange {\n      background-color: #F47B00; }\n.settings .theme.brown {\n      background-color: #5C3F36; }\n.settings .theme.grey {\n      background-color: #445963; }\n.settings .theme.pink {\n      background-color: #C1175A; }\n.settings .custom-control .custom-control-description {\n    margin-top: -1px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/pages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_settings__ = __webpack_require__("../../../../../src/app/app.settings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PagesComponent = /** @class */ (function () {
    function PagesComponent(appSettings, router) {
        this.appSettings = appSettings;
        this.router = router;
        this.showMenu = false;
        this.showSetting = false;
        this.menus = ['vertical', 'horizontal'];
        this.menuTypes = ['default', 'compact', 'mini'];
        this.settings = this.appSettings.settings;
        if (sessionStorage["skin"]) {
            this.settings.theme.skin = sessionStorage["skin"];
        }
    }
    PagesComponent.prototype.ngOnInit = function () {
        if (window.innerWidth <= 768) {
            this.settings.theme.showMenu = false;
            this.settings.theme.sideChatIsHoverable = false;
        }
        this.showMenu = this.settings.theme.showMenu;
        this.menuOption = this.settings.theme.menu;
        this.menuTypeOption = this.settings.theme.menuType;
    };
    PagesComponent.prototype.chooseMenu = function (menu) {
        this.settings.theme.menu = menu;
        this.router.navigate(['/']);
    };
    PagesComponent.prototype.chooseMenuType = function (menuType) {
        this.settings.theme.menuType = menuType;
        if (menuType == 'mini') {
            jQuery('.menu-item-link').tooltip('enable');
        }
        else {
            jQuery('.menu-item-link').tooltip('disable');
        }
    };
    PagesComponent.prototype.changeTheme = function (theme) {
        this.settings.theme.skin = theme;
        sessionStorage["skin"] = theme;
    };
    PagesComponent.prototype.ngAfterViewInit = function () {
        document.getElementById('preloader').classList.add('hide');
    };
    PagesComponent.prototype.onWindowResize = function () {
        var showMenu = !this._showMenu();
        if (this.showMenu !== showMenu) {
            this.showMenuStateChange(showMenu);
        }
        this.showMenu = showMenu;
    };
    PagesComponent.prototype.showMenuStateChange = function (showMenu) {
        this.settings.theme.showMenu = showMenu;
    };
    PagesComponent.prototype._showMenu = function () {
        return window.innerWidth <= 768;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PagesComponent.prototype, "onWindowResize", null);
    PagesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pages',
            template: __webpack_require__("../../../../../src/app/pages/pages.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/pages.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__app_settings__["a" /* AppSettings */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]])
    ], PagesComponent);
    return PagesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/pages.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_perfect_scrollbar__ = __webpack_require__("../../../../ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_2_dropdown_multiselect__ = __webpack_require__("../../../../angular-2-dropdown-multiselect/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__theme_pipes_pipes_module__ = __webpack_require__("../../../../../src/app/theme/pipes/pipes.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_routing__ = __webpack_require__("../../../../../src/app/pages/pages.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_component__ = __webpack_require__("../../../../../src/app/pages/pages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__theme_components_header_header_component__ = __webpack_require__("../../../../../src/app/theme/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__theme_components_footer_footer_component__ = __webpack_require__("../../../../../src/app/theme/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__theme_components_sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/theme/components/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__theme_components_menu_vertical_menu_vertical_menu_component__ = __webpack_require__("../../../../../src/app/theme/components/menu/vertical-menu/vertical-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__theme_components_menu_horizontal_menu_horizontal_menu_component__ = __webpack_require__("../../../../../src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__theme_components_breadcrumb_breadcrumb_component__ = __webpack_require__("../../../../../src/app/theme/components/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__theme_components_back_top_back_top_component__ = __webpack_require__("../../../../../src/app/theme/components/back-top/back-top.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__theme_components_fullscreen_fullscreen_component__ = __webpack_require__("../../../../../src/app/theme/components/fullscreen/fullscreen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__theme_components_applications_applications_component__ = __webpack_require__("../../../../../src/app/theme/components/applications/applications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__theme_components_messages_messages_component__ = __webpack_require__("../../../../../src/app/theme/components/messages/messages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__theme_components_user_menu_user_menu_component__ = __webpack_require__("../../../../../src/app/theme/components/user-menu/user-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__theme_components_flags_menu_flags_menu_component__ = __webpack_require__("../../../../../src/app/theme/components/flags-menu/flags-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__theme_components_side_chat_side_chat_component__ = __webpack_require__("../../../../../src/app/theme/components/side-chat/side-chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__theme_components_favorites_favorites_component__ = __webpack_require__("../../../../../src/app/theme/components/favorites/favorites.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__blank_blank_component__ = __webpack_require__("../../../../../src/app/pages/blank/blank.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__search_search_component__ = __webpack_require__("../../../../../src/app/pages/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_ng2_smart_table__ = __webpack_require__("../../../../ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__swimlane_ngx_datatable__ = __webpack_require__("../../../../@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_27__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__theme_directives_directives_module__ = __webpack_require__("../../../../../src/app/theme/directives/directives.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__login_login_module__ = __webpack_require__("../../../../../src/app/pages/login/login.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_create_service__ = __webpack_require__("../../../../../src/app/services/create.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__services_school_service__ = __webpack_require__("../../../../../src/app/services/school.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
































var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3_ngx_perfect_scrollbar__["b" /* PerfectScrollbarModule */],
                __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["b" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5_angular_2_dropdown_multiselect__["a" /* MultiselectDropdownModule */],
                __WEBPACK_IMPORTED_MODULE_6__theme_pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_7__pages_routing__["a" /* routing */], __WEBPACK_IMPORTED_MODULE_25__angular_common_http__["c" /* HttpClientModule */], __WEBPACK_IMPORTED_MODULE_26_ng2_smart_table__["b" /* Ng2SmartTableModule */], __WEBPACK_IMPORTED_MODULE_27__swimlane_ngx_datatable__["NgxDatatableModule"],
                __WEBPACK_IMPORTED_MODULE_28__theme_directives_directives_module__["a" /* DirectivesModule */],
                __WEBPACK_IMPORTED_MODULE_29__angular_router__["e" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_30__login_login_module__["routes"]), __WEBPACK_IMPORTED_MODULE_30__login_login_module__["LoginModule"], __WEBPACK_IMPORTED_MODULE_35__angular_http__["c" /* HttpModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__pages_component__["a" /* PagesComponent */],
                __WEBPACK_IMPORTED_MODULE_9__theme_components_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_10__theme_components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_11__theme_components_sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_12__theme_components_menu_vertical_menu_vertical_menu_component__["a" /* VerticalMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_13__theme_components_menu_horizontal_menu_horizontal_menu_component__["a" /* HorizontalMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_14__theme_components_breadcrumb_breadcrumb_component__["a" /* BreadcrumbComponent */],
                __WEBPACK_IMPORTED_MODULE_15__theme_components_back_top_back_top_component__["a" /* BackTopComponent */],
                __WEBPACK_IMPORTED_MODULE_16__theme_components_fullscreen_fullscreen_component__["a" /* FullScreenComponent */],
                __WEBPACK_IMPORTED_MODULE_17__theme_components_applications_applications_component__["a" /* ApplicationsComponent */],
                __WEBPACK_IMPORTED_MODULE_18__theme_components_messages_messages_component__["a" /* MessagesComponent */],
                __WEBPACK_IMPORTED_MODULE_19__theme_components_user_menu_user_menu_component__["a" /* UserMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_20__theme_components_flags_menu_flags_menu_component__["a" /* FlagsMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_21__theme_components_side_chat_side_chat_component__["a" /* SideChatComponent */],
                __WEBPACK_IMPORTED_MODULE_22__theme_components_favorites_favorites_component__["a" /* FavoritesComponent */],
                __WEBPACK_IMPORTED_MODULE_23__blank_blank_component__["a" /* BlankComponent */],
                __WEBPACK_IMPORTED_MODULE_24__search_search_component__["a" /* SearchComponent */],
            ],
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_3_ngx_perfect_scrollbar__["a" /* PERFECT_SCROLLBAR_CONFIG */],
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                }, __WEBPACK_IMPORTED_MODULE_33__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_32__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_34__services_school_service__["a" /* SchoolService */], __WEBPACK_IMPORTED_MODULE_31__services_create_service__["a" /* CreateService */],
            ]
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "../../../../../src/app/pages/pages.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_component__ = __webpack_require__("../../../../../src/app/pages/pages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blank_blank_component__ = __webpack_require__("../../../../../src/app/pages/blank/blank.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_search_component__ = __webpack_require__("../../../../../src/app/pages/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_guard__ = __webpack_require__("../../../../../src/app/auth.guard.ts");





var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__pages_component__["a" /* PagesComponent */],
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', loadChildren: 'app/pages/dashboard/dashboard.module#DashboardModule', data: { breadcrumb: 'Dashboard' }, canActivateChild: [__WEBPACK_IMPORTED_MODULE_4__auth_guard__["a" /* AuthGuard */]] },
            { path: 'membership', loadChildren: 'app/pages/membership/membership.module#MembershipModule', data: { breadcrumb: 'Membership' }, canActivate: [__WEBPACK_IMPORTED_MODULE_4__auth_guard__["a" /* AuthGuard */]] },
            { path: 'ui', loadChildren: 'app/pages/ui/ui.module#UiModule', data: { breadcrumb: 'UI' } },
            { path: 'form-elements', loadChildren: 'app/pages/form-elements/form-elements.module#FormElementsModule', data: { breadcrumb: 'Form Elements' }, canActivate: [__WEBPACK_IMPORTED_MODULE_4__auth_guard__["a" /* AuthGuard */]] },
            { path: 'tables', loadChildren: 'app/pages/tables/tables.module#TablesModule', data: { breadcrumb: 'Tables' }, canActivate: [__WEBPACK_IMPORTED_MODULE_4__auth_guard__["a" /* AuthGuard */]] },
            { path: 'tools', loadChildren: 'app/pages/tools/tools.module#ToolsModule', data: { breadcrumb: 'Tools' }, canActivate: [__WEBPACK_IMPORTED_MODULE_4__auth_guard__["a" /* AuthGuard */]] },
            { path: 'calendar', loadChildren: 'app/pages/calendar/app-calendar.module#AppCalendarModule', data: { breadcrumb: 'Calendar' }, canActivate: [__WEBPACK_IMPORTED_MODULE_4__auth_guard__["a" /* AuthGuard */]] },
            { path: 'mailbox', loadChildren: 'app/pages/mailbox/mailbox.module#MailboxModule', data: { breadcrumb: 'Mailbox' }, canActivate: [__WEBPACK_IMPORTED_MODULE_4__auth_guard__["a" /* AuthGuard */]] },
            { path: 'maps', loadChildren: 'app/pages/maps/maps.module#MapsModule', data: { breadcrumb: 'Maps' }, canActivate: [__WEBPACK_IMPORTED_MODULE_4__auth_guard__["a" /* AuthGuard */]] },
            { path: 'charts', loadChildren: 'app/pages/charts/charts.module#ChartsModule', data: { breadcrumb: 'Charts' }, canActivate: [__WEBPACK_IMPORTED_MODULE_4__auth_guard__["a" /* AuthGuard */]] },
            { path: 'dynamic-menu', loadChildren: 'app/pages/dynamic-menu/dynamic-menu.module#DynamicMenuModule', data: { breadcrumb: 'Dynamic Menu' }, canActivate: [__WEBPACK_IMPORTED_MODULE_4__auth_guard__["a" /* AuthGuard */]] },
            { path: 'blank', component: __WEBPACK_IMPORTED_MODULE_2__blank_blank_component__["a" /* BlankComponent */], data: { breadcrumb: 'Blank page' }, canActivate: [__WEBPACK_IMPORTED_MODULE_4__auth_guard__["a" /* AuthGuard */]] },
            { path: 'search', component: __WEBPACK_IMPORTED_MODULE_3__search_search_component__["a" /* SearchComponent */], data: { breadcrumb: 'Search' }, canActivate: [__WEBPACK_IMPORTED_MODULE_4__auth_guard__["a" /* AuthGuard */]] }
        ]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["e" /* RouterModule */].forChild(routes);


/***/ }),

/***/ "../../../../../src/app/pages/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<h4>Search results...</h4>"

/***/ }),

/***/ "../../../../../src/app/pages/search/search.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
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

var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-search',
            template: __webpack_require__("../../../../../src/app/pages/search/search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/search/search.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_share__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/share.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.loadData = function () {
        var url = 'assets/data/users.json'; /**http://edupay-api.azurewebsites.net/api/admin/user/get-all
        */
        return this.http.get(url);
    };
    UserService.prototype.postData = function () {
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/theme/components/applications/applications.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dropdown d-inline-block\">\r\n    <a class=\"dropdown-toggle no-caret pl-2 pr-2\" id=\"applications\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n        <i class=\"fa fa-th\" aria-hidden=\"true\"></i>\r\n    </a>\r\n\r\n    <div class=\"dropdown-menu dropdown-menu-right rounded-0 mt-3 box-shadow\" aria-labelledby=\"applications\">\r\n        <div class=\"applications text-center pt-1\" perfectScrollbar>\r\n            <h5>Applications</h5>\r\n            <hr>\r\n            <div class=\"row\">\r\n                <div class=\"col-4 p-1 mb-3 item\">\r\n                    <a href=\"javascript:void(0);\">\r\n                        <i class=\"fa fa-user text-success\" aria-hidden=\"true\"></i>\r\n                        <span class=\"d-block\">My account</span>\r\n                    </a>\r\n                </div>\r\n                <div class=\"col-4 p-1 mb-3 item transition\">\r\n                    <a href=\"javascript:void(0);\">\r\n                        <i class=\"fa fa-search text-info\" aria-hidden=\"true\"></i>\r\n                        <span class=\"d-block\">Search</span>\r\n                    </a>\r\n                </div>\r\n                <div class=\"col-4 p-1 mb-3 item transition\">\r\n                    <a href=\"javascript:void(0);\">\r\n                        <i class=\"fa fa-youtube-play text-danger\" aria-hidden=\"true\"></i>\r\n                        <span class=\"d-block\">Youtube</span>\r\n                    </a>\r\n                </div>\r\n                <div class=\"col-4 p-1 mb-3 item transition\">\r\n                    <a href=\"javascript:void(0);\">\r\n                        <i class=\"fa fa-wrench text-primary\" aria-hidden=\"true\"></i>\r\n                        <span class=\"d-block\">Settings</span>\r\n                    </a>\r\n                </div>\r\n                <div class=\"col-4 p-1 mb-3 item transition\">\r\n                    <a href=\"javascript:void(0);\">\r\n                        <i class=\"fa fa-calendar text-warning\" aria-hidden=\"true\"></i>\r\n                        <span class=\"d-block\">Calendar</span>\r\n                    </a>\r\n                </div>\r\n                <div class=\"col-4 p-1 mb-3 item transition\">\r\n                    <a href=\"javascript:void(0);\">\r\n                        <i class=\"fa fa-picture-o text-success\" aria-hidden=\"true\"></i>\r\n                        <span class=\"d-block\">Gallery</span>\r\n                    </a>\r\n                </div>\r\n                <div class=\"col-4 p-1 item transition\">\r\n                    <a href=\"javascript:void(0);\">\r\n                        <i class=\"fa fa-file-text-o text-danger\" aria-hidden=\"true\"></i>\r\n                        <span class=\"d-block\">Documents</span>\r\n                    </a>\r\n                </div>\r\n                <div class=\"col-4 p-1 item transition\">\r\n                    <a href=\"javascript:void(0);\">\r\n                        <i class=\"fa fa-envelope-o text-info\" aria-hidden=\"true\"></i>\r\n                        <span class=\"d-block\">Mail</span>\r\n                    </a>\r\n                </div>\r\n                <div class=\"col-4 p-1 item transition\">\r\n                    <a href=\"javascript:void(0);\">\r\n                        <i class=\"fa fa-globe text-primary\" aria-hidden=\"true\"></i>\r\n                        <span class=\"d-block\">Maps</span>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/theme/components/applications/applications.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dropdown-menu .applications {\n  height: 255px;\n  width: 270px;\n  padding: 0 22px; }\n  .dropdown-menu .applications h5 {\n    color: #666; }\n  .dropdown-menu .applications .item {\n    background: transparent;\n    border-radius: 5px; }\n  .dropdown-menu .applications .item:hover {\n      background: #f5f5f5; }\n  .dropdown-menu .applications .item i {\n      font-size: 28px; }\n  .dropdown-menu .applications .item span {\n      color: #666; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/components/applications/applications.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplicationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ApplicationsComponent = /** @class */ (function () {
    function ApplicationsComponent() {
    }
    ApplicationsComponent.prototype.ngOnInit = function () {
    };
    ApplicationsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-applications',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            styles: [__webpack_require__("../../../../../src/app/theme/components/applications/applications.component.scss")],
            template: __webpack_require__("../../../../../src/app/theme/components/applications/applications.component.html")
        })
    ], ApplicationsComponent);
    return ApplicationsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/theme/components/back-top/back-top.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".back-to-top {\n  position: fixed;\n  width: 40px;\n  height: 40px;\n  cursor: pointer;\n  z-index: 999999;\n  display: none;\n  text-decoration: none;\n  right: 40px;\n  bottom: 40px !important;\n  font-size: 28px;\n  text-align: center;\n  opacity: 0.5;\n  color: #fff;\n  background-color: rgba(0, 0, 0, 0.75);\n  border-radius: 4px;\n  line-height: 34px; }\n  .back-to-top:hover {\n    opacity: 1; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/components/back-top/back-top.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackTopComponent; });
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

var BackTopComponent = /** @class */ (function () {
    function BackTopComponent() {
        this.position = 400;
        this.showSpeed = 500;
        this.moveSpeed = 700;
    }
    BackTopComponent.prototype.ngAfterViewInit = function () {
        this._onWindowScroll();
    };
    BackTopComponent.prototype._onClick = function () {
        jQuery('html, body').animate({ scrollTop: 0 }, { duration: this.moveSpeed });
        return false;
    };
    BackTopComponent.prototype._onWindowScroll = function () {
        var el = this._selector.nativeElement;
        window.scrollY > this.position ? jQuery(el).fadeIn(this.showSpeed) : jQuery(el).fadeOut(this.showSpeed);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], BackTopComponent.prototype, "position", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], BackTopComponent.prototype, "showSpeed", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], BackTopComponent.prototype, "moveSpeed", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('backTop'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], BackTopComponent.prototype, "_selector", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Boolean)
    ], BackTopComponent.prototype, "_onClick", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:scroll'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], BackTopComponent.prototype, "_onWindowScroll", null);
    BackTopComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-back-top',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            styles: [__webpack_require__("../../../../../src/app/theme/components/back-top/back-top.component.scss")],
            template: "\n    <i #backTop class=\"fa fa-angle-up back-to-top transition\" title=\"Back to Top\"></i>\n  "
        })
    ], BackTopComponent);
    return BackTopComponent;
}());



/***/ }),

/***/ "../../../../../src/app/theme/components/breadcrumb/breadcrumb.component.html":
/***/ (function(module, exports) {

module.exports = "<ol class=\"breadcrumb\">  \r\n    <li *ngIf=\"router.url != '/pages/dashboard'\" class=\"breadcrumb-item\"><a routerLink=\"/\" (click)=\"closeSubMenus()\"><i class=\"fa fa-home mr-2\"></i>Home</a></li>\r\n    <li *ngFor=\"let breadcrumb of breadcrumbs; let i = index;\" class=\"breadcrumb-item\">\r\n        <a [hidden]=\"i == (breadcrumbs.length - 1)\" [routerLink]=\"[breadcrumb.url]\">{{breadcrumb.name}}</a>          \r\n        <span [hidden]=\"i != (breadcrumbs.length - 1)\"><i *ngIf=\"router.url == '/pages/dashboard'\" class=\"fa fa-home mr-2\"></i><b>{{breadcrumb.name}}</b></span>\r\n    </li>\r\n</ol>"

/***/ }),

/***/ "../../../../../src/app/theme/components/breadcrumb/breadcrumb.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreadcrumbComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__("../../../../../src/app/app.settings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent(appSettings, router, activatedRoute, title) {
        var _this = this;
        this.appSettings = appSettings;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.title = title;
        this.breadcrumbs = [];
        this.settings = this.appSettings.settings;
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]) {
                _this.breadcrumbs = [];
                _this.parseRoute(_this.router.routerState.snapshot.root);
                _this.pageTitle = "";
                _this.breadcrumbs.forEach(function (breadcrumb) {
                    _this.pageTitle += ' > ' + breadcrumb.name;
                });
                _this.title.setTitle(_this.settings.name + _this.pageTitle);
            }
        });
    }
    BreadcrumbComponent.prototype.parseRoute = function (node) {
        if (node.data['breadcrumb']) {
            if (node.url.length) {
                var urlSegments_1 = [];
                node.pathFromRoot.forEach(function (routerState) {
                    urlSegments_1 = urlSegments_1.concat(routerState.url);
                });
                var url = urlSegments_1.map(function (urlSegment) {
                    return urlSegment.path;
                }).join('/');
                this.breadcrumbs.push({
                    name: node.data['breadcrumb'],
                    url: '/' + url
                });
            }
        }
        if (node.firstChild) {
            this.parseRoute(node.firstChild);
        }
    };
    BreadcrumbComponent.prototype.closeSubMenus = function () {
        var menu = document.querySelector("#menu0");
        if (menu) {
            for (var i = 0; i < menu.children.length; i++) {
                var child = menu.children[i].children[1];
                if (child) {
                    if (child.classList.contains('show')) {
                        child.classList.remove('show');
                        menu.children[i].children[0].classList.add('collapsed');
                    }
                }
            }
        }
    };
    BreadcrumbComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-breadcrumb',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            template: __webpack_require__("../../../../../src/app/theme/components/breadcrumb/breadcrumb.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["Title"]])
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());

// import { Component, ViewEncapsulation } from '@angular/core';
// import { AppState } from "../../../app.state";
// @Component({
//     selector: 'az-breadcrumb',
//     encapsulation: ViewEncapsulation.None,
//     styleUrls: ['./breadcrumb.component.scss'],
//     templateUrl: './breadcrumb.component.html'
// })
// export class BreadcrumbComponent {
//     public activePageTitle:string = '';
//     constructor(private _state:AppState){
//         this._state.subscribe('menu.activeLink', (activeLink) => {
//             if (activeLink) {
//                 this.activePageTitle = activeLink;
//             }
//         });
//     }
//     public ngOnInit():void {
//         if (!this.activePageTitle) {
//             this.activePageTitle = 'dashboard';
//         }
//     }
// } 


/***/ }),

/***/ "../../../../../src/app/theme/components/favorites/favorites.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex justify-content-start favorites-container ml-5\" [class.show-list]=\"toggle\">\r\n    <ul *ngIf=\"favorites.length == 0\" class=\"list-inline mb-0\">\r\n        <li class=\"list-inline-item\"><span class=\"fs-13 font-italic\">Choose favorites <i id=\"arrow\" class=\"fa fa-long-arrow-right\"></i></span></li>\r\n    </ul> \r\n    <ul *ngIf=\"favorites.length > 0\" class=\"list-inline mb-0\">\r\n        <li *ngFor=\"let favorite of favorites\" class=\"list-inline-item\" placement=\"bottom\" [ngbTooltip]=\"favorite.name\">\r\n            <a *ngIf=\"favorite.href\" href=\"{{favorite.href}}\" target=\"{{favorite.target}}\"><i class=\"fa fa-{{favorite.icon}}\"></i></a>\r\n            <a *ngIf=\"favorite.routerLink\" [routerLink]=\"favorite.routerLink\"><i class=\"fa fa-{{favorite.icon}}\"></i></a>\r\n        </li>\r\n    </ul>    \r\n    <ss-multiselect-dropdown id=\"favorites\" class=\"custom-multiselect\"\r\n        [options]=\"favoriteOptions\" \r\n        [texts]=\"favoriteTexts\" \r\n        [settings]=\"favoriteSettings\"\r\n        (dropdownOpened)=\"onDropdownOpened()\"\r\n        (dropdownClosed)=\"onDropdownClosed()\" \r\n        [(ngModel)]=\"favoriteModel\"\r\n        (ngModelChange)=\"onChange()\">\r\n    </ss-multiselect-dropdown>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/theme/components/favorites/favorites.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".favorites-container {\n  position: relative;\n  padding: 0 20px 0 6px; }\n  .favorites-container:after {\n    font-family: FontAwesome;\n    content: \"\\F004\";\n    color: #DD1B16;\n    position: absolute;\n    right: 4px;\n    top: 1px;\n    pointer-events: none;\n    cursor: pointer; }\n  .favorites-container.show-list {\n    width: 242px;\n    border: none !important; }\n  .favorites-container ul.list-inline {\n    white-space: nowrap;\n    overflow: hidden; }\n  .favorites-container ul.list-inline .list-inline-item {\n      margin-right: 10px; }\n  #favorites .dropdown {\n  position: absolute;\n  right: 0;\n  top: -6px;\n  width: 18px;\n  height: 22px;\n  overflow: hidden; }\n  #favorites .dropdown .btn-block {\n    width: 242px;\n    opacity: 0;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    cursor: pointer;\n    position: relative;\n    z-index: 1;\n    border: 0;\n    padding-bottom: 13px; }\n  #favorites .dropdown .dropdown-menu li a {\n    color: #666; }\n  #favorites .dropdown .dropdown-menu li a i.fa-check {\n      color: #378D3B; }\n  #favorites .dropdown.open {\n    overflow: visible;\n    width: auto;\n    height: auto; }\n  #favorites .dropdown.open .btn-block {\n      opacity: 1; }\n  #favorites .dropdown .dropdown-toggle::after {\n    content: none; }\n  @-webkit-keyframes arrow-jump {\n  0% {\n    opacity: 0; }\n  50% {\n    opacity: 0.7;\n    -webkit-transform: translateX(10px); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(0); } }\n  @keyframes arrow-jump {\n  0% {\n    opacity: 0; }\n  50% {\n    opacity: 0.7;\n    -webkit-transform: translateX(10px);\n            transform: translateX(10px); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(0);\n            transform: translateX(0); } }\n  #arrow {\n  -webkit-animation: arrow-jump 2s infinite;\n  animation: arrow-jump 2s infinite; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/components/favorites/favorites.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menu_menu_service__ = __webpack_require__("../../../../../src/app/theme/components/menu/menu.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FavoritesComponent = /** @class */ (function () {
    function FavoritesComponent(menuService) {
        var _this = this;
        this.menuService = menuService;
        this.favoriteModel = [];
        this.favoriteSettings = {
            enableSearch: true,
            checkedStyle: 'fontawesome',
            buttonClasses: 'btn btn-secondary btn-block',
            dynamicTitleMaxItems: 0,
            displayAllSelectedText: true
        };
        this.favoriteTexts = {
            checkAll: 'Select all',
            uncheckAll: 'Unselect all',
            checked: 'menu item selected',
            checkedPlural: 'menu items selected',
            searchPlaceholder: 'Find menu item...',
            defaultTitle: 'Select favorite menu items',
            allSelected: 'All selected',
        };
        this.favoriteOptions = [];
        this.favorites = [];
        this.menuItems = this.menuService.getVerticalMenuItems().filter(function (menu) { return menu.routerLink != null || menu.href != null; });
        this.menuItems.forEach(function (item) {
            var menu = {
                id: item.id,
                name: item.title,
                routerLink: item.routerLink,
                href: item.href,
                icon: item.icon,
                target: item.target
            };
            _this.favoriteOptions.push(menu);
        });
        if (sessionStorage["favorites"]) {
            this.favorites = JSON.parse(sessionStorage.getItem("favorites"));
            this.favorites.forEach(function (favorite) {
                _this.favoriteModel.push(favorite.id);
            });
        }
    }
    FavoritesComponent.prototype.onDropdownOpened = function () {
        this.toggle = true;
    };
    FavoritesComponent.prototype.onDropdownClosed = function () {
        this.toggle = false;
    };
    FavoritesComponent.prototype.onChange = function () {
        var _this = this;
        this.favorites.length = 0;
        this.favoriteModel.forEach(function (i) {
            var favorite = _this.favoriteOptions.find(function (mail) { return mail.id === +i; });
            _this.favorites.push(favorite);
        });
        sessionStorage.setItem("favorites", JSON.stringify(this.favorites));
    };
    FavoritesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-favorites',
            template: __webpack_require__("../../../../../src/app/theme/components/favorites/favorites.component.html"),
            styles: [__webpack_require__("../../../../../src/app/theme/components/favorites/favorites.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            providers: [__WEBPACK_IMPORTED_MODULE_1__menu_menu_service__["a" /* MenuService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__menu_menu_service__["a" /* MenuService */]])
    ], FavoritesComponent);
    return FavoritesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/theme/components/flags-menu/flags-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dropdown d-inline-block\">\r\n    <a class=\"dropdown-toggle no-caret pl-2 pr-2\" id=\"flags-menu\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n        <span class=\"flag-icon flag-icon-gb\"></span>\r\n    </a>\r\n\r\n    <div class=\"dropdown-menu dropdown-menu-right rounded-0 mt-3 p-0 box-shadow\" aria-labelledby=\"flags-menu\">\r\n        <div class=\"flags-menu\">          \r\n            <a class=\"dropdown-item\" href=\"javascript:void(0);\"><span class=\"flag-icon flag-icon-gb mr-2\"></span> English</a> \r\n            <a class=\"dropdown-item\" href=\"javascript:void(0);\"><span class=\"flag-icon flag-icon-de mr-2\"></span> German</a>        \r\n            <a class=\"dropdown-item\" href=\"javascript:void(0);\"><span class=\"flag-icon flag-icon-fr mr-2\"></span> French</a>\r\n            <a class=\"dropdown-item\" href=\"javascript:void(0);\"><span class=\"flag-icon flag-icon-ru mr-2\"></span> Russian</a>                \r\n            <a class=\"dropdown-item\" href=\"javascript:void(0);\"><span class=\"flag-icon flag-icon-tr mr-2\"></span> Turkish</a>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/theme/components/flags-menu/flags-menu.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".flag-icon-background {\n  background-size: contain;\n  background-position: 50%;\n  background-repeat: no-repeat; }\n\n.flag-icon {\n  background-size: contain;\n  background-position: 50%;\n  background-repeat: no-repeat;\n  position: relative;\n  display: inline-block;\n  width: 1.33333333em;\n  line-height: 1em; }\n\n.flag-icon:before {\n  content: \"\\A0\"; }\n\n.flag-icon-gb {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 height%3D%22480%22 width%3D%22640%22 viewBox%3D%220 0 640 480%22%3E%0D  %3Cdefs%3E%0D    %3CclipPath id%3D%22a%22%3E%0D      %3Cpath fill-opacity%3D%22.67%22 d%3D%22M-85.333 0h682.67v512h-682.67z%22%2F%3E%0D    %3C%2FclipPath%3E%0D  %3C%2Fdefs%3E%0D  %3Cg clip-path%3D%22url(%23a)%22 transform%3D%22translate(80) scale(.94)%22%3E%0D    %3Cg stroke-width%3D%221pt%22%3E%0D      %3Cpath fill%3D%22%23006%22 d%3D%22M-256 0H768.02v512.01H-256z%22%2F%3E%0D      %3Cpath d%3D%22M-256 0v57.244l909.535 454.768H768.02V454.77L-141.515 0H-256zM768.02 0v57.243L-141.515 512.01H-256v-57.243L653.535 0H768.02z%22 fill%3D%22%23fff%22%2F%3E%0D      %3Cpath d%3D%22M170.675 0v512.01h170.67V0h-170.67zM-256 170.67v170.67H768.02V170.67H-256z%22 fill%3D%22%23fff%22%2F%3E%0D      %3Cpath d%3D%22M-256 204.804v102.402H768.02V204.804H-256zM204.81 0v512.01h102.4V0h-102.4zM-256 512.01L85.34 341.34h76.324l-341.34 170.67H-256zM-256 0L85.34 170.67H9.016L-256 38.164V0zm606.356 170.67L691.696 0h76.324L426.68 170.67h-76.324zM768.02 512.01L426.68 341.34h76.324L768.02 473.848v38.162z%22 fill%3D%22%23c00%22%2F%3E%0D    %3C%2Fg%3E%0D  %3C%2Fg%3E%0D%3C%2Fsvg%3E%0D\"); }\n\n.flag-icon-de {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 height%3D%22480%22 width%3D%22640%22 viewBox%3D%220 0 640 480%22%3E%0D  %3Cpath fill%3D%22%23ffce00%22 d%3D%22M0 320h640v160.002H0z%22%2F%3E%0D  %3Cpath d%3D%22M0 0h640v160H0z%22%2F%3E%0D  %3Cpath fill%3D%22%23d00%22 d%3D%22M0 160h640v160H0z%22%2F%3E%0D%3C%2Fsvg%3E%0D\"); }\n\n.flag-icon-fr {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 height%3D%22480%22 width%3D%22640%22 viewBox%3D%220 0 640 480%22%3E%0D  %3Cg fill-rule%3D%22evenodd%22 stroke-width%3D%221pt%22%3E%0D    %3Cpath fill%3D%22%23fff%22 d%3D%22M0 0h640v480H0z%22%2F%3E%0D    %3Cpath fill%3D%22%2300267f%22 d%3D%22M0 0h213.337v480H0z%22%2F%3E%0D    %3Cpath fill%3D%22%23f31830%22 d%3D%22M426.662 0H640v480H426.662z%22%2F%3E%0D  %3C%2Fg%3E%0D%3C%2Fsvg%3E%0D\"); }\n\n.flag-icon-ru {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 height%3D%22480%22 width%3D%22640%22 viewBox%3D%220 0 640 480%22%3E%0D  %3Cg fill-rule%3D%22evenodd%22 stroke-width%3D%221pt%22%3E%0D    %3Cpath fill%3D%22%23fff%22 d%3D%22M0 0h640v480H0z%22%2F%3E%0D    %3Cpath fill%3D%22%230039a6%22 d%3D%22M0 160.003h640V480H0z%22%2F%3E%0D    %3Cpath fill%3D%22%23d52b1e%22 d%3D%22M0 319.997h640V480H0z%22%2F%3E%0D  %3C%2Fg%3E%0D%3C%2Fsvg%3E%0D\"); }\n\n.flag-icon-tr {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 height%3D%22480%22 width%3D%22640%22 viewBox%3D%220 0 640 480%22%3E%0D  %3Cg fill-rule%3D%22evenodd%22%3E%0D    %3Cpath fill%3D%22%23f31930%22 d%3D%22M0 0h640v480H0z%22%2F%3E%0D    %3Cpath d%3D%22M406.977 247.473c0 66.215-54.606 119.89-121.97 119.89S163.04 313.686 163.04 247.472s54.606-119.89 121.968-119.89 121.97 53.677 121.97 119.89z%22 fill%3D%22%23fff%22%2F%3E%0D    %3Cpath d%3D%22M413.077 247.467c0 52.97-43.686 95.91-97.575 95.91s-97.574-42.94-97.574-95.91 43.686-95.91 97.574-95.91 97.575 42.94 97.575 95.91z%22 fill%3D%22%23f31830%22%2F%3E%0D    %3Cpath d%3D%22M430.726 191.465l-.985 44.318-41.345 11.225 40.756 14.514-.984 40.642 26.58-31.738 40.164 13.934-23.233-34.06 28.352-33.868-43.513 11.998-25.793-36.964z%22 fill%3D%22%23fff%22%2F%3E%0D  %3C%2Fg%3E%0D%3C%2Fsvg%3E%0D\"); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/components/flags-menu/flags-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlagsMenuComponent; });
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

var FlagsMenuComponent = /** @class */ (function () {
    function FlagsMenuComponent() {
    }
    FlagsMenuComponent.prototype.ngOnInit = function () {
    };
    FlagsMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-flags-menu',
            template: __webpack_require__("../../../../../src/app/theme/components/flags-menu/flags-menu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/theme/components/flags-menu/flags-menu.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], FlagsMenuComponent);
    return FlagsMenuComponent;
}());



/***/ }),

/***/ "../../../../../src/app/theme/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-footer d-flex align-items-center justify-content-between\" [class.fixed-bottom]=\"settings.theme.footerIsFixed\">\r\n    <span class=\"social-icons\">\r\n         <a href=\"https://www.facebook.com/themeseason\" target=\"_blank\"><i class=\"fa fa-facebook-square transition\" aria-hidden=\"true\"></i></a>\r\n         <a href=\"https://twitter.com/themeseason\" target=\"_blank\"><i class=\"fa fa-twitter-square transition\" aria-hidden=\"true\"></i></a>\r\n         <a href=\"https://www.instagram.com/themeseason\" target=\"_blank\"><i class=\"fa fa-instagram transition\" aria-hidden=\"true\"></i></a>\r\n         <a href=\"https://www.pinterest.com/themeseason\" target=\"_blank\"><i class=\"fa fa-pinterest-square transition\" aria-hidden=\"true\"></i></a>             \r\n    </span>\r\n    <span class=\"copyright\">Copyright © 2017 All Rights Reserved</span>    \r\n</div>"

/***/ }),

/***/ "../../../../../src/app/theme/components/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**** General ****/\n.app-footer {\n  width: 100%;\n  height: 28px;\n  padding: 0 25px; }\n.app-footer .copyright {\n    font-size: 12px; }\n.app-footer .social-icons {\n    font-size: 18px; }\n.app-footer .social-icons a {\n      color: inherit; }\n.app-footer .social-icons i {\n      margin-right: 4px;\n      opacity: 0.8; }\n.app-footer .social-icons i:hover {\n        opacity: 1; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
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


var FooterComponent = /** @class */ (function () {
    function FooterComponent(appSettings) {
        this.appSettings = appSettings;
        this.settings = this.appSettings.settings;
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/theme/components/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/theme/components/footer/footer.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_settings__["a" /* AppSettings */]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/theme/components/fullscreen/fullscreen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullScreenComponent; });
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

var FullScreenComponent = /** @class */ (function () {
    function FullScreenComponent() {
        this.toggle = false;
        // @HostListener('document:keydown', ['$event']) handleKeyboardEvent(event: KeyboardEvent) {
        //     if (event.keyCode === 122) {
        //         console.log('F11 pressed');
        //     }
        //     if (event.keyCode === 27) {
        //         console.log('Esc pressed');
        //     }
        // }
    }
    FullScreenComponent.prototype.requestFullscreen = function (elem) {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        }
        else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        }
        else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        }
        else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
        else {
            console.log('Fullscreen API is not supported.');
        }
    };
    ;
    FullScreenComponent.prototype.exitFullscreen = function () {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
        else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
        else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        }
        else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
        else {
            console.log('Fullscreen API is not supported.');
        }
    };
    ;
    FullScreenComponent.prototype.getFullscreen = function () {
        if (this.expand) {
            this.requestFullscreen(document.documentElement);
        }
        if (this.compress) {
            this.exitFullscreen();
        }
    };
    FullScreenComponent.prototype.onFullScreenChange = function () {
        var fullscreenElement = document.fullscreenElement || document.mozFullScreenElement ||
            document.webkitFullscreenElement || document.msFullscreenElement;
        if (fullscreenElement != null) {
            this.toggle = true;
        }
        else {
            this.toggle = false;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('expand'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], FullScreenComponent.prototype, "expand", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('compress'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], FullScreenComponent.prototype, "compress", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FullScreenComponent.prototype, "getFullscreen", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FullScreenComponent.prototype, "onFullScreenChange", null);
    FullScreenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-fullscreen',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            template: "\n    <span class=\"pl-2 pr-2\">\n        <i *ngIf=\"!toggle\" #expand class=\"fa fa-expand transition\"></i>\n        <i *ngIf=\"toggle\" #compress class=\"fa fa-compress transition\"></i>\n    </span>\n  "
        })
    ], FullScreenComponent);
    return FullScreenComponent;
}());



/***/ }),

/***/ "../../../../../src/app/theme/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar box-shadow app-header\" [class.fixed-top]=\"settings.theme.navbarIsFixed\" [class.logo-visible]=\"showInfoContent\">\r\n    <div class=\"d-flex flex-column w-100\">\r\n        <div class=\"d-flex justify-content-start align-items-center top-navbar\">                  \r\n            \r\n            <a class=\"logo\" routerLink=\"/\" (click)=\"closeSubMenus()\">\r\n                <span class=\"Edu\">Edu</span><span class=\"Pay\">Pay</span>\r\n            </a>\r\n\r\n            <span class=\"navbar-text menu-icon transition ml-3 mr-3\" [ngClass]=\"{'open': settings.theme.showMenu}\"\r\n                (click)=\"settings.theme.showMenu = !settings.theme.showMenu\">\r\n                <div class=\"line\"></div>\r\n                <div class=\"line\"></div>\r\n                <div class=\"line\"></div>\r\n                <div class=\"line\"></div>\r\n            </span>\r\n\r\n            <div class=\"ml-2 mr-2 d-none d-sm-block\">\r\n                 <a id=\"info-content-icon\" data-toggle=\"collapse\" href=\"#info-content\" (click)=\"showInfoContent = !showInfoContent\" class=\"d-flex\" [class.show]=\"showInfoContent\">\r\n                    <div [@showInfo]=\"showInfoContent\" class=\"triangle\"></div>\r\n                </a>\r\n            </div>\r\n\r\n\r\n\r\n            <div class=\"top-rigth-icons ml-auto\">                 \r\n                <span class=\"pl-2 pr-2\">\r\n                    <a routerLink=\"/login\">\r\n                        <i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i>\r\n                    </a>                   \r\n                </span> \r\n            </div> \r\n\r\n        </div>\r\n\r\n        <div class=\"horizontal-menu-outer\" *ngIf=\"settings.theme.menu == 'horizontal'\">                   \r\n            <app-horizontal-menu *ngIf=\"showHorizontalMenu\"  [menuItems]=\"menuItems\"></app-horizontal-menu>        \r\n            <app-vertical-menu *ngIf=\"!showHorizontalMenu\"  [menuItems]=\"menuItems\"></app-vertical-menu>\r\n        </div>\r\n\r\n    </div>\r\n</nav>"

/***/ }),

/***/ "../../../../../src/app/theme/components/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**** General ****/\n.navbar.app-header {\n  padding: 0;\n  z-index: 9;\n  -webkit-transition: z-index 0.5s linear;\n  transition: z-index 0.5s linear; }\n.navbar.app-header .top-navbar {\n    padding: 0 1rem;\n    height: 46px; }\n.navbar.app-header .top-navbar .logo {\n      width: 220px;\n      -webkit-transform: translate3d(0, 0, 0);\n      transform: translate3d(0, 0, 0); }\n.navbar.app-header.logo-visible {\n    z-index: 99999; }\n.top-navbar .app-search {\n  position: relative;\n  margin-left: 20px; }\n.top-navbar .app-search i {\n    position: absolute;\n    right: 2px;\n    font-size: 14px;\n    cursor: pointer;\n    z-index: 9; }\n.top-navbar .app-search .form-control {\n    border: none;\n    font-size: 12px;\n    height: 18px;\n    background: transparent;\n    padding: 0;\n    padding-right: 24px;\n    padding-left: 4px;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    width: 190px;\n    opacity: 0.7; }\n.top-navbar .app-search .form-control:focus {\n      opacity: 1; }\n.top-rigth-icons span {\n  font-size: 14px;\n  cursor: pointer; }\n.menu-icon {\n  position: relative;\n  width: 18px;\n  cursor: pointer; }\n.menu-icon .line {\n    width: 100%;\n    height: 2px;\n    position: absolute;\n    background-color: #ccc;\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n    -webkit-transition: .15s ease-in-out;\n    transition: .15s ease-in-out;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n    outline: 1px solid transparent; }\n.menu-icon .line:nth-child(1) {\n    top: 0; }\n.menu-icon .line:nth-child(2), .menu-icon .line:nth-child(3) {\n    top: 4px; }\n.menu-icon .line:nth-child(4) {\n    top: 8px; }\n.menu-icon.open {\n    -webkit-backface-visibility: hidden; }\n.menu-icon.open .line:nth-child(1), .menu-icon.open .line:nth-child(4) {\n      top: 4px;\n      width: 0%;\n      left: 50%; }\n.menu-icon.open .line:nth-child(2) {\n      -webkit-transform: rotate(-45deg);\n      transform: rotate(-45deg); }\n.menu-icon.open .line:nth-child(3) {\n      -webkit-transform: rotate(45deg);\n      transform: rotate(45deg); }\n.logo {\n  font-family: \"MoonHouse\";\n  padding: 0;\n  font-size: 27px;\n  display: inline-block;\n  width: 250px; }\n.logo:hover, .logo:focus {\n    text-decoration: none;\n    color: initial; }\n#info-content {\n  z-index: 1; }\n#info-content .info, #info-content .left-border {\n    opacity: 0;\n    -webkit-transition: opacity 0.5s ease-out;\n    transition: opacity 0.5s ease-out; }\n#info-content .close {\n    position: absolute;\n    right: 5px;\n    z-index: 1; }\n#info-content.show .info, #info-content.show .left-border {\n    opacity: 1; }\n#info-content .user-img {\n    width: 120px; }\n.triangle {\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 11px 10px 0 10px; }\n.horizontal-menu-outer {\n  height: auto; }\n.horizontal-menu-outer #menu0 {\n    height: 250px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_settings__ = __webpack_require__("../../../../../src/app/app.settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_menu_service__ = __webpack_require__("../../../../../src/app/theme/components/menu/menu.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(appSettings, menuService) {
        this.appSettings = appSettings;
        this.menuService = menuService;
        this.showHorizontalMenu = true;
        this.showInfoContent = false;
        this.settings = this.appSettings.settings;
        this.menuItems = this.menuService.getHorizontalMenuItems();
    }
    HeaderComponent.prototype.ngOnInit = function () {
        if (window.innerWidth <= 768) {
            this.showHorizontalMenu = false;
        }
    };
    HeaderComponent.prototype.closeSubMenus = function () {
        var menu = document.querySelector('#menu0');
        if (menu) {
            for (var i = 0; i < menu.children.length; i++) {
                var child = menu.children[i].children[1];
                if (child) {
                    if (child.classList.contains('show')) {
                        child.classList.remove('show');
                        menu.children[i].children[0].classList.add('collapsed');
                    }
                }
            }
        }
    };
    HeaderComponent.prototype.onWindowResize = function () {
        if (window.innerWidth <= 768) {
            this.showHorizontalMenu = false;
        }
        else {
            this.showHorizontalMenu = true;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HeaderComponent.prototype, "onWindowResize", null);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/theme/components/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/theme/components/header/header.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            providers: [__WEBPACK_IMPORTED_MODULE_3__menu_menu_service__["a" /* MenuService */]],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["trigger"])('showInfo', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["state"])('1', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({ transform: 'rotate(180deg)' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["state"])('0', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({ transform: 'rotate(0deg)' })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('1 => 0', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('400ms')),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('0 => 1', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('400ms'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__app_settings__["a" /* AppSettings */], __WEBPACK_IMPORTED_MODULE_3__menu_menu_service__["a" /* MenuService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"horizontal-menu\" class=\"menu-wrapper horizontal-menu-wrapper d-flex justify-content-start align-items-center\"></div>  \r\n"

/***/ }),

/***/ "../../../../../src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**** General ****/\n.horizontal-menu-wrapper {\n  min-height: 38px; }\n#navigation {\n  margin-left: auto;\n  margin-right: auto; }\n#navigation .menu {\n    margin-bottom: 0; }\n#navigation .menu li {\n      display: inline-block;\n      position: relative; }\n#navigation .menu li a {\n        font-size: 14px;\n        display: block;\n        padding: 0.6em 1em;\n        cursor: pointer; }\n#navigation .menu li a i {\n          margin-right: 10px; }\n#navigation .menu li.menu-item-has-children > a:after {\n        font-family: FontAwesome;\n        content: \"\\F107\";\n        margin-left: 10px;\n        font-size: 13px; }\n#navigation .menu .sub-menu {\n  display: none;\n  padding: 0;\n  position: absolute;\n  margin-top: 0;\n  left: 0;\n  z-index: 99999;\n  text-align: left; }\n#navigation ul.menu ul a,\n#navigation .menu ul ul a {\n  margin: 0;\n  font-size: 14px;\n  padding: 6px 10px;\n  min-width: 160px;\n  line-height: 20px; }\n#navigation ul.menu li:hover > ul,\n#navigation .menu ul li:hover > ul {\n  display: block; }\n#navigation .menu .sub-menu ul {\n  left: 100%;\n  top: 0; }\n#navigation ul.sub-menu > li.menu-item-has-children > a:after {\n  font-family: FontAwesome;\n  content: \"\\F105\";\n  float: right;\n  font-size: 13px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HorizontalMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_service__ = __webpack_require__("../../../../../src/app/theme/components/menu/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__("../../../../../src/app/app.settings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HorizontalMenuComponent = /** @class */ (function () {
    function HorizontalMenuComponent(appSettings, menuService, router, elementRef) {
        var _this = this;
        this.appSettings = appSettings;
        this.menuService = menuService;
        this.router = router;
        this.elementRef = elementRef;
        this.settings = this.appSettings.settings;
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]) {
                window.scrollTo(0, 0);
                var activeLink = _this.menuService.getActiveLink(_this.menuItems);
                _this.menuService.setActiveLink(_this.menuItems, activeLink);
                jQuery('.tooltip').tooltip('hide');
            }
        });
    }
    HorizontalMenuComponent.prototype.ngOnInit = function () {
        var menu_wrapper = this.elementRef.nativeElement.children[0];
        this.menuService.createMenu(this.menuItems, menu_wrapper, 'horizontal');
        if (this.settings.theme.menuType == 'mini')
            jQuery('.menu-item-link').tooltip();
    };
    HorizontalMenuComponent.prototype.ngAfterViewInit = function () {
        var activeLink = this.menuService.getActiveLink(this.menuItems);
        this.menuService.setActiveLink(this.menuItems, activeLink);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('menuItems'),
        __metadata("design:type", Object)
    ], HorizontalMenuComponent.prototype, "menuItems", void 0);
    HorizontalMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-horizontal-menu',
            template: __webpack_require__("../../../../../src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/theme/components/menu/horizontal-menu/horizontal-menu.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            providers: [__WEBPACK_IMPORTED_MODULE_2__menu_service__["a" /* MenuService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */],
            __WEBPACK_IMPORTED_MODULE_2__menu_service__["a" /* MenuService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], HorizontalMenuComponent);
    return HorizontalMenuComponent;
}());



/***/ }),

/***/ "../../../../../src/app/theme/components/menu/vertical-menu/vertical-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"vertical-menu\" class=\"menu-wrapper\" perfectScrollbar></div>"

/***/ }),

/***/ "../../../../../src/app/theme/components/menu/vertical-menu/vertical-menu.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".menu-wrapper {\n  height: 100%; }\n  .menu-wrapper .card {\n    border: 0;\n    border-radius: 0;\n    background: transparent; }\n  .menu-wrapper .card a {\n      cursor: pointer;\n      padding: 10px 0;\n      font-size: 14px;\n      display: inline-block;\n      width: 100%;\n      outline: none; }\n  .menu-wrapper .card a i {\n        padding: 0 12px; }\n  .menu-wrapper .card a b {\n        float: right;\n        margin-right: 15px;\n        margin-top: 4px;\n        -webkit-transition: -webkit-transform 0.2s linear;\n        transition: -webkit-transform 0.2s linear;\n        transition: transform 0.2s linear;\n        transition: transform 0.2s linear, -webkit-transform 0.2s linear; }\n  .menu-wrapper .card a.collapsed b {\n        -webkit-transform: rotate(-180deg);\n        transform: rotate(-180deg); }\n  .menu-wrapper .collapsing {\n    -webkit-transition: height .25s ease;\n    transition: height .25s ease; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/components/menu/vertical-menu/vertical-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerticalMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_service__ = __webpack_require__("../../../../../src/app/theme/components/menu/menu.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__("../../../../../src/app/app.settings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VerticalMenuComponent = /** @class */ (function () {
    function VerticalMenuComponent(appSettings, menuService, router, elementRef) {
        var _this = this;
        this.appSettings = appSettings;
        this.menuService = menuService;
        this.router = router;
        this.elementRef = elementRef;
        this.settings = this.appSettings.settings;
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]) {
                window.scrollTo(0, 0);
                var activeLink = _this.menuService.getActiveLink(_this.menuItems);
                _this.menuService.setActiveLink(_this.menuItems, activeLink);
                jQuery('.tooltip').tooltip('hide');
                if (window.innerWidth <= 768) {
                    _this.settings.theme.showMenu = false;
                }
            }
        });
    }
    VerticalMenuComponent.prototype.ngOnInit = function () {
        var menu_wrapper = this.elementRef.nativeElement.children[0];
        this.menuService.createMenu(this.menuItems, menu_wrapper, 'vertical');
        if (this.settings.theme.menuType == 'mini')
            jQuery('.menu-item-link').tooltip();
    };
    VerticalMenuComponent.prototype.ngAfterViewInit = function () {
        this.menuService.showActiveSubMenu(this.menuItems);
        var activeLink = this.menuService.getActiveLink(this.menuItems);
        this.menuService.setActiveLink(this.menuItems, activeLink);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('menuItems'),
        __metadata("design:type", Object)
    ], VerticalMenuComponent.prototype, "menuItems", void 0);
    VerticalMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-vertical-menu',
            template: __webpack_require__("../../../../../src/app/theme/components/menu/vertical-menu/vertical-menu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/theme/components/menu/vertical-menu/vertical-menu.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            providers: [__WEBPACK_IMPORTED_MODULE_2__menu_service__["a" /* MenuService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */],
            __WEBPACK_IMPORTED_MODULE_2__menu_service__["a" /* MenuService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], VerticalMenuComponent);
    return VerticalMenuComponent;
}());



/***/ }),

/***/ "../../../../../src/app/theme/components/messages/messages.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"messagesDropDown\" class=\"dropdown d-inline-block\">\r\n    <a class=\"dropdown-toggle no-caret pl-2 pr-2\" id=\"messages\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n        <i class=\"fa fa-bell-o\" aria-hidden=\"true\"></i>\r\n    </a>\r\n\r\n    <div class=\"dropdown-menu dropdown-menu-right rounded-0 p-0 mt-3 box-shadow\" aria-labelledby=\"messages\">    \r\n        <div class=\"clearfix\">            \r\n            <ul id=\"messagesTabs\" class=\"nav nav-tabs nav-justified border-0\">\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link active transition\" data-toggle=\"tab\" href=\"#comments\"><i class=\"fa fa-comment-o\" aria-hidden=\"true\"></i></a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link transition\" data-toggle=\"tab\" href=\"#files\"><i class=\"fa fa-file\" aria-hidden=\"true\"></i></a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link transition\" data-toggle=\"tab\" href=\"#meetings\"><i class=\"fa fa-calendar-check-o\" aria-hidden=\"true\"></i></a>\r\n                </li>                                            \r\n            </ul>\r\n        </div>\r\n        <div class=\"tab-content\" perfectScrollbar>\r\n            <div class=\"tab-pane active\" id=\"comments\">\r\n                <div class=\"list\">\r\n                    <a *ngFor=\"let message of messages\" href=\"javascript:void(0);\" class=\"transition\">\r\n                        <img src=\"{{ ( message.image || (message.name | profilePicture)) }}\">                    \r\n                        <div class=\"list-content\">\r\n                            <h3>{{message.name}} <span class=\"pull-right\"><i class=\"fa fa-clock-o\"></i> {{message.time}}</span></h3>\r\n                            <p>{{message.text}}</p>\r\n                        </div>\r\n                    </a>\r\n                </div> \r\n            </div>\r\n            <div class=\"tab-pane\" id=\"files\">\r\n                <div class=\"list\">\r\n                    <a *ngFor=\"let file of files\" href class=\"transition\">\r\n                        <h3>{{file.text}} <span class=\"pull-right\">{{file.size}}</span></h3>\r\n                        <div class=\"progress progress-sm\">\r\n                            <div class=\"progress-bar progress-bar-striped progress-bar-animated bg-{{file.class}}\" role=\"progressbar\" [style.width]=\"file.value\"  aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                        </div>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n            <div class=\"tab-pane\" id=\"meetings\">\r\n                <div class=\"list\">\r\n                    <a *ngFor=\"let meeting of meetings\" href=\"javascript:void(0);\" class=\"transition\">\r\n                        <div class=\"meeting-day bg-{{meeting.color}} pull-left\">\r\n                            <span>{{meeting.day}}</span>\r\n                            <span>{{meeting.month}}</span>\r\n                        </div>                   \r\n                        <div class=\"list-content\">\r\n                            <h2>{{meeting.title}}</h2>\r\n                            <p>{{meeting.text}}</p>\r\n                        </div>\r\n                    </a>\r\n                </div> \r\n            </div>\r\n        </div> \r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/theme/components/messages/messages.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#messagesDropDown .dropdown-menu {\n  width: 312px; }\n\n#messagesDropDown .nav-link {\n  color: #a6a6a6;\n  border: 0;\n  border-radius: 0;\n  border-bottom: 4px solid transparent; }\n\n#messagesDropDown .nav-link:hover {\n    background-color: #f5f5f5; }\n\n#messagesDropDown .tab-content {\n  height: 250px;\n  border: 0;\n  border-top: 1px solid #ccc; }\n\n#messagesDropDown .tab-content .tab-pane {\n    padding: 0; }\n\n#messagesDropDown .tab-content .tab-pane .list a {\n      float: left;\n      width: 100%;\n      display: block;\n      padding: 10px;\n      border-bottom: 1px solid rgba(0, 0, 0, 0.1); }\n\n#messagesDropDown .tab-content .tab-pane .list a:hover {\n        background: #f5f5f5; }\n\n#messagesDropDown .tab-content .tab-pane .list a h3, #messagesDropDown .tab-content .tab-pane .list a h2 {\n        padding: 0;\n        margin: 0 0 4px 0;\n        color: #666666; }\n\n#messagesDropDown .tab-content .tab-pane .list a h3 {\n        font-size: 12px; }\n\n#messagesDropDown .tab-content .tab-pane .list a h2 {\n        font-size: 14px; }\n\n#messagesDropDown .tab-content .tab-pane .list span {\n      font-size: 10px; }\n\n#messagesDropDown .tab-content .tab-pane .list .meeting-day {\n      width: 46px;\n      height: 42px;\n      border-radius: 4px;\n      color: #fff;\n      text-align: center; }\n\n#messagesDropDown .tab-content .tab-pane .list .meeting-day span {\n        font-size: 13px;\n        display: block;\n        font-style: italic; }\n\n#messagesDropDown .tab-content .tab-pane .list .list-content {\n      float: right;\n      width: 235px; }\n\n#messagesDropDown .tab-content .tab-pane .list img {\n      float: left;\n      width: 45px;\n      margin-right: 10px;\n      border-radius: 50%; }\n\n#messagesDropDown .tab-content .tab-pane .list p {\n      color: #7d7d7d;\n      font-size: 11px;\n      margin: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/components/messages/messages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__messages_service__ = __webpack_require__("../../../../../src/app/theme/components/messages/messages.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(messagesService) {
        this.messagesService = messagesService;
        this.messages = messagesService.getMessages();
        this.files = messagesService.getFiles();
        this.meetings = messagesService.getMeetings();
    }
    MessagesComponent.prototype.ngOnInit = function () {
        jQuery('#messagesTabs').on('click', '.nav-item a', function () {
            var _this = this;
            setTimeout(function () { return jQuery(_this).closest('.dropdown').addClass('show'); });
        });
    };
    MessagesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__("../../../../../src/app/theme/components/messages/messages.component.html"),
            styles: [__webpack_require__("../../../../../src/app/theme/components/messages/messages.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            providers: [__WEBPACK_IMPORTED_MODULE_1__messages_service__["a" /* MessagesService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__messages_service__["a" /* MessagesService */]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/theme/components/messages/messages.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MessagesService = /** @class */ (function () {
    function MessagesService() {
        this.messages = [
            {
                name: 'ashley',
                text: 'After you get up and running, you can place Font Awesome icons just about...',
                time: '1 min ago'
            },
            {
                name: 'michael',
                text: 'You asked, Font Awesome delivers with 40 shiny new icons in version 4.2.',
                time: '2 hrs ago'
            },
            {
                name: 'julia',
                text: 'Want to request new icons? Here\'s how. Need vectors or want to use on the...',
                time: '10 hrs ago'
            },
            {
                name: 'bruno',
                text: 'Explore your passions and discover new ones by getting involved. Stretch your...',
                time: '1 day ago'
            },
            {
                name: 'tereza',
                text: 'Get to know who we are - from the inside out. From our history and culture, to the...',
                time: '1 day ago'
            },
            {
                name: 'adam',
                text: 'Need some support to reach your goals? Apply for scholarships across a variety of...',
                time: '2 days ago'
            },
            {
                name: 'michael',
                text: 'Wrap the dropdown\'s trigger and the dropdown menu within .dropdown, or...',
                time: '1 week ago'
            }
        ];
        this.files = [
            {
                text: 'startng.zip',
                size: '~7.2 MB',
                value: '47%',
                class: 'danger'
            },
            {
                text: 'documentation.pdf',
                size: '~14.6 MB',
                value: '33%',
                class: 'info'
            },
            {
                text: 'wallpaper.jpg',
                size: '~558 KB',
                value: '60%',
                class: 'success'
            },
            {
                text: 'letter.doc',
                size: '~57 KB',
                value: '80%',
                class: 'warning'
            },
            {
                text: 'azimuth.zip',
                size: '~10.2 MB',
                value: '55%',
                class: 'primary'
            },
            {
                text: 'contacts.xlsx',
                size: '~96 KB',
                value: '75%',
                class: 'info'
            }
        ];
        this.meetings = [
            {
                day: '09',
                month: 'May',
                title: 'Meeting with Bruno',
                text: 'Fusce ut condimentum velit, quis egestas eros. Quisque sed condimentum neque.',
                color: 'danger'
            },
            {
                day: '15',
                month: 'May',
                title: 'Training course',
                text: 'Fusce arcu tortor, tempor aliquam augue vel, consectetur vehicula lectus.',
                color: 'primary'
            },
            {
                day: '12',
                month: 'June',
                title: 'Dinner with Ashley',
                text: 'Curabitur rhoncus facilisis augue sed fringilla.',
                color: 'info'
            },
            {
                day: '14',
                month: 'June',
                title: 'Sport time',
                text: 'Vivamus tristique enim eros, ac ultricies sem ultrices vitae.',
                color: 'warning'
            },
            {
                day: '29',
                month: 'July',
                title: 'Birthday of Julia',
                text: 'Nam porttitor justo nec elit efficitur vestibulum.',
                color: 'success'
            }
        ];
    }
    MessagesService.prototype.getMessages = function () {
        return this.messages;
    };
    MessagesService.prototype.getFiles = function () {
        return this.files;
    };
    MessagesService.prototype.getMeetings = function () {
        return this.meetings;
    };
    MessagesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], MessagesService);
    return MessagesService;
}());



/***/ }),

/***/ "../../../../../src/app/theme/components/side-chat/side-chat.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"side-chat h-100 transition\" [class.hoverable]=\"settings.theme.sideChatIsHoverable\" [class.show]=\"settings.theme.showSideChat\" [class.show-chat-item]=\"showHoverableChatItem\" [class.show-chat-window]=\"showChatWindow\">\r\n    <div [hidden]=\"showChatWindow\" class=\"media p-1 rounded-left transition person-search-media align-items-center\" (mouseenter)=\"showHoverableChatItem = true\" (mouseleave)=\"showHoverableChatItem = false\">\r\n        <i class=\"fa fa-search mr-1\" aria-hidden=\"true\"></i>\r\n        <div class=\"media-body\">\r\n            <input type=\"text\" [(ngModel)]=\"searchText\" class=\"form-control form-control-sm person-search\" placeholder=\"Search person...\">      \r\n        </div>\r\n    </div>      \r\n       \r\n    <div class=\"chat-list h-100\" [hidden]=\"showChatWindow\" perfectScrollbar>\r\n        <div *ngFor=\"let chat of chats | ChatPersonSearchPipe : searchText\" class=\"media p-1 rounded-left transition\" (mouseenter)=\"showHoverableChatItem = true\" (mouseleave)=\"showHoverableChatItem = false\" (click)=\"getChat(chat)\">\r\n            <img class=\"d-flex mr-3 rounded\" [src]=\"chat.image\">\r\n            <div class=\"media-body\">\r\n                <h6 class=\"mb-1 mt-1 text-white\">{{chat.author}}</h6>\r\n                <span [ngSwitch]=\"chat.authorStatus\">\r\n                    <i *ngSwitchCase=\"'Online'\" class=\"fa fa-check-circle text-success\" aria-hidden=\"true\"></i>\r\n                    <i *ngSwitchCase=\"'Offline'\" class=\"fa fa-times-circle text-danger\" aria-hidden=\"true\"></i> \r\n                    <i *ngSwitchCase=\"'Away'\" class=\"fa fa-clock-o text-info\" aria-hidden=\"true\"></i> \r\n                    <i *ngSwitchCase=\"'Do not disturb'\" class=\"fa fa-minus-circle text-warning\" aria-hidden=\"true\"></i>   \r\n                </span>              \r\n                <span class=\"status\">{{chat.authorStatus}}</span>\r\n            </div>\r\n        </div>\r\n    </div>      \r\n\r\n    <div class=\"chat-window\" [hidden]=\"!showChatWindow\">\r\n        <div class=\"d-flex justify-content-between align-items-center header\"> \r\n                <span class=\"pl-2 pr-2 back\" (click)=\"back()\"> \r\n                <i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i> \r\n            </span>               \r\n            <h6 class=\"text-white mb-0 mr-2\">{{interlocutor}}</h6>                \r\n        </div>\r\n\r\n        <div class=\"chat-talk-list pt-2\" perfectScrollbar>\r\n            <div *ngFor=\"let talk of talks\" class=\"media p-1 mb-1 border-0\"> \r\n                <img *ngIf=\"talk.side=='left'\" class=\"d-flex mr-3 rounded\" src=\"{{ talk.image }}\">        \r\n                <div class=\"media-body rounded pl-2 pr-2 {{talk.side}}\">\r\n                    <span class=\"d-block talk-text\">{{talk.text}}</span>\r\n                    <small class=\"mt-2 mb-1 pull-right\">{{talk.date | date:\"dd MMMM, yyyy 'at' HH:mm\"}}</small>  \r\n                </div>\r\n                <img *ngIf=\"talk.side=='right'\" class=\"d-flex ml-3 rounded\" src=\"{{ talk.image }}\">\r\n            </div>\r\n        </div>        \r\n        \r\n        <div class=\"d-flex align-items-center pl-1 pr-1 footer\">\r\n            <div class=\"input-group\">                    \r\n                <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Enter your text...\"\r\n                (keyup)=\"addChatItem($event)\" [(ngModel)]=\"newChatText\">\r\n                <div class=\"input-group-append\" (click)=\"addChatItem($event)\">\r\n                    <span class=\"input-group-text\"><i class=\"fa fa-paper-plane\"></i></span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>     \r\n</div>"

/***/ }),

/***/ "../../../../../src/app/theme/components/side-chat/side-chat.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**** General ****/\n.side-chat {\n  position: fixed;\n  right: -52px;\n  z-index: 999;\n  width: 0;\n  top: 47px; }\n.side-chat .person-search-media {\n    height: 32px; }\n.side-chat .person-search-media .fa-search {\n      font-size: 18px;\n      padding: 0px 16px 4px; }\n.side-chat .person-search-media .person-search {\n      border: none;\n      background: rgba(255, 255, 255, 0.15);\n      padding: 4px 6px 2px;\n      -webkit-box-shadow: none;\n              box-shadow: none;\n      border-radius: 0;\n      color: #fff; }\n.side-chat .media {\n    position: relative;\n    width: 230px;\n    right: 0;\n    z-index: 9999999;\n    color: #fff; }\n.side-chat .media img {\n      width: 45px; }\n.side-chat .media h6 {\n      font-weight: 400; }\n.side-chat .media .status {\n      font-size: 12px; }\n.side-chat .chat-list {\n    padding-bottom: 78px; }\n.side-chat .chat-list .ps__rail-y {\n      z-index: 9999999; }\n.side-chat .chat-list .media {\n      cursor: pointer; }\n.side-chat .chat-window {\n    position: absolute;\n    top: 0;\n    height: 100%;\n    display: block; }\n.side-chat .chat-window .header {\n      height: 30px; }\n.side-chat .chat-window .header .back {\n        font-size: 18px;\n        cursor: pointer; }\n.side-chat .chat-window .chat-talk-list {\n      height: calc(100vh - (46px + 30px + 46px)); }\n.side-chat .chat-window .chat-talk-list .talk-text {\n        width: 150px;\n        text-overflow: ellipsis;\n        overflow: hidden; }\n.side-chat .chat-window .chat-talk-list .ps__rail-y {\n        z-index: 9999999; }\n.side-chat .chat-window .media {\n      right: 0 !important; }\n.side-chat .chat-window .media .media-body {\n        background: rgba(255, 255, 255, 0.05); }\n.side-chat .chat-window .media .media-body.left:before {\n          content: \"\";\n          border: 7px solid transparent;\n          border-right-color: rgba(255, 255, 255, 0.05);\n          position: absolute;\n          top: 18px;\n          left: 49px; }\n.side-chat .chat-window .media .media-body.right:before {\n          content: \"\";\n          border: 7px solid transparent;\n          border-left-color: rgba(255, 255, 255, 0.05);\n          position: absolute;\n          top: 18px;\n          right: 48px; }\n.side-chat .chat-window .footer {\n      position: fixed;\n      bottom: 0;\n      height: 46px;\n      width: 230px; }\n.side-chat .chat-window .footer input[type='text'] {\n        border: 1px solid #fff; }\n.side-chat.show {\n    right: 0;\n    width: 230px; }\n.side-chat.show-chat-item {\n    width: 230px; }\n.side-chat.hoverable.show {\n    width: 52px; }\n.side-chat.hoverable.show.show-chat-window {\n      width: 230px !important; }\n.side-chat.hoverable.show-chat-item {\n    width: 230px; }\n.side-chat.hoverable.show-chat-item .media {\n      right: -178px; }\n.side-chat.hoverable.show-chat-item .media:hover {\n        right: 0; }\n.side-chat.hoverable .chat-list {\n    padding-bottom: 78px; }\n.side-chat.hoverable .chat-list .ps__rail-y {\n      z-index: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/components/side-chat/side-chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_settings__ = __webpack_require__("../../../../../src/app/app.settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__side_chat_service__ = __webpack_require__("../../../../../src/app/theme/components/side-chat/side-chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__side_chat_model__ = __webpack_require__("../../../../../src/app/theme/components/side-chat/side-chat.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SideChatComponent = /** @class */ (function () {
    function SideChatComponent(appSettings, sideChatService) {
        this.appSettings = appSettings;
        this.sideChatService = sideChatService;
        this.showHoverableChatItem = false;
        this.showChatWindow = false;
        this.newChatText = '';
        this.settings = this.appSettings.settings;
        this.chats = sideChatService.getChats();
        this.talks = this.sideChatService.getTalk();
    }
    SideChatComponent.prototype.ngOnInit = function () { };
    SideChatComponent.prototype.back = function () {
        this.showChatWindow = false;
        this.talks.shift();
        this.talks.length = 2;
    };
    SideChatComponent.prototype.getChat = function (chat) {
        this.searchText = '';
        this.showChatWindow = true;
        this.interlocutor = chat.author;
        this.talks.forEach(function (item) {
            if (item.side == 'left') {
                item.image = chat.image;
            }
        });
        this.talks.unshift(chat);
    };
    SideChatComponent.prototype.addChatItem = function ($event) {
        if (($event.which === 1 || $event.which === 13) && this.newChatText.trim() != '') {
            this.talks.push(new __WEBPACK_IMPORTED_MODULE_3__side_chat_model__["a" /* SideChat */]('assets/img/users/user.jpg', 'Emilio Verdines', 'online', this.newChatText, new Date(), 'right'));
            this.newChatText = '';
            var chatContainer_1 = document.querySelector('.chat-talk-list');
            setTimeout(function () {
                var nodes = chatContainer_1.querySelectorAll('.media');
                var newChatTextHeight = nodes[nodes.length - 1];
                chatContainer_1.scrollTop = chatContainer_1.scrollHeight + newChatTextHeight.clientHeight;
            });
        }
    };
    SideChatComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-side-chat',
            template: __webpack_require__("../../../../../src/app/theme/components/side-chat/side-chat.component.html"),
            styles: [__webpack_require__("../../../../../src/app/theme/components/side-chat/side-chat.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            providers: [__WEBPACK_IMPORTED_MODULE_2__side_chat_service__["a" /* SideChatService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_settings__["a" /* AppSettings */], __WEBPACK_IMPORTED_MODULE_2__side_chat_service__["a" /* SideChatService */]])
    ], SideChatComponent);
    return SideChatComponent;
}());



/***/ }),

/***/ "../../../../../src/app/theme/components/side-chat/side-chat.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideChat; });
var SideChat = /** @class */ (function () {
    function SideChat(image, author, authorStatus, text, date, side) {
        this.image = image;
        this.author = author;
        this.authorStatus = authorStatus;
        this.text = text;
        this.date = date;
        this.side = side;
    }
    return SideChat;
}());



/***/ }),

/***/ "../../../../../src/app/theme/components/side-chat/side-chat.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideChatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__side_chat_model__ = __webpack_require__("../../../../../src/app/theme/components/side-chat/side-chat.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var date = new Date(), day = date.getDate(), month = date.getMonth(), year = date.getFullYear(), hour = date.getHours(), minute = date.getMinutes();
var chats = [
    new __WEBPACK_IMPORTED_MODULE_1__side_chat_model__["a" /* SideChat */]('assets/img/profile/ashley.jpg', 'Ashley Ahlberg', 'Online', 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?', new Date(year, month, day - 2, hour, minute), 'left'),
    new __WEBPACK_IMPORTED_MODULE_1__side_chat_model__["a" /* SideChat */]('assets/img/profile/bruno.jpg', 'Bruno Vespa', 'Do not disturb', 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?', new Date(year, month, day - 2, hour, minute), 'left'),
    new __WEBPACK_IMPORTED_MODULE_1__side_chat_model__["a" /* SideChat */]('assets/img/avatars/avatar-3.png', 'Andy Warhol', 'Online', 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?', new Date(year, month, day - 2, hour, minute), 'left'),
    new __WEBPACK_IMPORTED_MODULE_1__side_chat_model__["a" /* SideChat */]('assets/img/profile/julia.jpg', 'Julia Aniston', 'Away', 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?', new Date(year, month, day - 2, hour, minute), 'left'),
    new __WEBPACK_IMPORTED_MODULE_1__side_chat_model__["a" /* SideChat */]('assets/img/profile/adam.jpg', 'Adam Sandler', 'Online', 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?', new Date(year, month, day - 2, hour, minute), 'left'),
    new __WEBPACK_IMPORTED_MODULE_1__side_chat_model__["a" /* SideChat */]('assets/img/avatars/avatar-7.png', 'Lusia Manuel', 'Online', 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?', new Date(year, month, day - 2, hour, minute), 'left'),
    new __WEBPACK_IMPORTED_MODULE_1__side_chat_model__["a" /* SideChat */]('assets/img/profile/tereza.jpg', 'Tereza Stiles', 'Offline', 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?', new Date(year, month, day - 2, hour, minute), 'left'),
    new __WEBPACK_IMPORTED_MODULE_1__side_chat_model__["a" /* SideChat */]('assets/img/users/default-user.jpg', 'unknown', 'Offline', 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?', new Date(year, month, day - 2, hour, minute), 'left'),
    new __WEBPACK_IMPORTED_MODULE_1__side_chat_model__["a" /* SideChat */]('assets/img/avatars/avatar-1.png', 'Jeremi Powell', 'Online', 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?', new Date(year, month, day - 2, hour, minute), 'left'),
    new __WEBPACK_IMPORTED_MODULE_1__side_chat_model__["a" /* SideChat */]('assets/img/avatars/avatar-8.png', 'Calico Jack', 'Online', 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?', new Date(year, month, day - 2, hour, minute), 'left'),
    new __WEBPACK_IMPORTED_MODULE_1__side_chat_model__["a" /* SideChat */]('assets/img/profile/michael.jpg', 'Michael Blair', 'Online', 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?', new Date(year, month, day - 2, hour, minute), 'left'),
    new __WEBPACK_IMPORTED_MODULE_1__side_chat_model__["a" /* SideChat */]('assets/img/avatars/avatar-5.png', 'Michelle Ormond', 'Away', 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?', new Date(year, month, day - 2, hour, minute), 'left'),
    new __WEBPACK_IMPORTED_MODULE_1__side_chat_model__["a" /* SideChat */]('assets/img/avatars/avatar-6.png', 'Sean Connery', 'Offline', 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?', new Date(year, month, day - 2, hour, minute), 'left')
];
var talks = [
    new __WEBPACK_IMPORTED_MODULE_1__side_chat_model__["a" /* SideChat */]('assets/img/users/user.jpg', 'Emilio Verdines', 'Online', 'Hi, StartNG is a fully responsive, organized folder structure, clean & customizable code, easy to use and much more...', new Date(year, month, day - 2, hour, minute + 2), 'right'),
    new __WEBPACK_IMPORTED_MODULE_1__side_chat_model__["a" /* SideChat */]('assets/img/profile/ashley.jpg', 'Ashley Ahlberg', 'Online', 'Great, then I\'ll definitely buy this theme. Thanks!', new Date(year, month, day - 2, hour, minute + 3), 'left'),
];
var SideChatService = /** @class */ (function () {
    function SideChatService() {
    }
    SideChatService.prototype.getChats = function () {
        return chats;
    };
    SideChatService.prototype.getTalk = function () {
        return talks;
    };
    SideChatService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], SideChatService);
    return SideChatService;
}());

// import {Injectable} from '@angular/core'
// let date = new Date(),
//     day = date.getDate(),
//     month = date.getMonth(),
//     year = date.getFullYear(),
//     hour = date.getHours(),
//     minute = date.getMinutes();
// @Injectable()
// export class SideChatService {
//     private chats = [
//         {
//             image: 'assets/img/profile/ashley.jpg',
//             author: 'Ashley Ahlberg', 
//             authorStatus: 'Online',
//             text: 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?',
//             date: new Date(year, month, day-2, hour, minute),
//             time: '1 min ago'
//         },
//         {
//             image: 'assets/img/profile/bruno.jpg',
//             author: 'Bruno Vespa', 
//             authorStatus: 'Do not disturb',
//             text: 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?',
//             date: new Date(year, month, day-2, hour, minute),
//             time: '1 min ago'
//         },
//         {
//             image: 'assets/img/profile/julia.jpg',
//             author: 'Julia Aniston', 
//             authorStatus: 'Away',
//             text: 'Hi, I\'m looking for admin template with bootstrap 4.  What do you think about StartNG Admin Template?',
//             date: new Date(year, month, day-2, hour, minute),
//             time: '1 min ago'
//         },
//         {
//             image: 'assets/img/users/default-user.jpg',
//             author: 'unknown',
//             authorStatus: 'Offline',
//             text: 'After you get up and running, you can place Font Awesome icons just about...',
//             time: '1 min ago'
//         },
//         // {
//         //     image: 'michael',
//         //     author: 'Michael Blair',
//         //     text: 'You asked, Font Awesome delivers with 40 shiny new icons in version 4.2.',
//         //     time: '2 hrs ago'
//         // },
//         // {
//         //     image: 'julia',
//         //     author: 'Julia Aniston',
//         //     text: 'Want to request new icons? Here\'s how. Need vectors or want to use on the...',
//         //     time: '10 hrs ago'
//         // },
//         // {
//         //     image: 'bruno',
//         //     author: 'Bruno Vespa',
//         //     text: 'Explore your passions and discover new ones by getting involved. Stretch your...',
//         //     time: '1 day ago'
//         // },
//         // {
//         //     image: 'tereza',
//         //     author: 'Tereza Stiles',
//         //     text: 'Get to know who we are - from the inside out. From our history and culture, to the...',
//         //     time: '1 day ago'
//         // },
//         // {
//         //     image: 'adam',
//         //     author: 'Adam Sandler',
//         //     text: 'Need some support to reach your goals? Apply for scholarships across a variety of...',
//         //     time: '2 days ago'
//         // },
//     ]; 
//     public getChats():Array<Object> {
//         return this.chats;
//     }
// } 


/***/ }),

/***/ "../../../../../src/app/theme/components/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar-outer\">\r\n    <a class=\"logo d-flex align-items-center\" routerLink=\"/\" (click)=\"closeSubMenus()\" *ngIf=\"settings.theme.sidebarIsFixed\">\r\n        <span class=\"start\">start</span><span class=\"ng\">NG</span>\r\n    </a>\r\n    <app-vertical-menu [menuItems]=\"menuItems\">></app-vertical-menu>    \r\n</div>"

/***/ }),

/***/ "../../../../../src/app/theme/components/sidebar/sidebar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**** General ****/\n.sidebar-outer {\n  height: 100%;\n  width: 250px; }\n.sidebar-outer .logo {\n    height: 46px;\n    padding: 0 14px;\n    width: 250px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/components/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_settings__ = __webpack_require__("../../../../../src/app/app.settings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_menu_service__ = __webpack_require__("../../../../../src/app/theme/components/menu/menu.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(appSettings, menuService) {
        this.appSettings = appSettings;
        this.menuService = menuService;
        this.settings = this.appSettings.settings;
        this.menuItems = this.menuService.getVerticalMenuItems();
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (sessionStorage["userMenuItems"]) {
            var ids = JSON.parse(sessionStorage.getItem("userMenuItems"));
            var newArr_1 = [];
            ids.forEach(function (id) {
                var newMenuItem = _this.menuItems.filter(function (mail) { return mail.id == id; });
                newArr_1.push(newMenuItem[0]);
            });
            this.menuItems = newArr_1;
        }
    };
    SidebarComponent.prototype.closeSubMenus = function () {
        var menu = document.querySelector("#menu0");
        for (var i = 0; i < menu.children.length; i++) {
            var child = menu.children[i].children[1];
            if (child) {
                if (child.classList.contains('show')) {
                    child.classList.remove('show');
                    menu.children[i].children[0].classList.add('collapsed');
                }
            }
        }
    };
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__("../../../../../src/app/theme/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/theme/components/sidebar/sidebar.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            providers: [__WEBPACK_IMPORTED_MODULE_2__menu_menu_service__["a" /* MenuService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_settings__["a" /* AppSettings */], __WEBPACK_IMPORTED_MODULE_2__menu_menu_service__["a" /* MenuService */]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/theme/components/user-menu/user-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dropdown d-inline-block\">\r\n    <a class=\"dropdown-toggle no-caret pl-2 pr-2\" id=\"user-menu\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n        <i class=\"fa fa-user-o\" aria-hidden=\"true\"></i>\r\n    </a>\r\n\r\n    <div class=\"dropdown-menu dropdown-menu-right rounded-0 mt-3 p-0 box-shadow\" aria-labelledby=\"user-menu\">\r\n        <div class=\"user-menu\">\r\n            <div class=\"user-info text-center p-3\">\r\n                <img src=\"assets/img/users/user.jpg\" alt=\"user-img\" class=\"user-img rounded-circle\">                    \r\n                <p class=\"mt-1 mb-0\"> \r\n                    Emilio Verdines - Web Developer\r\n                    <small>Member since May. 2016</small>\r\n                </p>\r\n            </div>\r\n            <a class=\"dropdown-item\" routerLink=\"profile\"><i class=\"fa fa-user mr-2\"></i>Profile</a>\r\n            <a class=\"dropdown-item\" routerLink=\"settings\"><i class=\"fa fa-cog mr-2\"></i>Settings</a>\r\n            <a class=\"dropdown-item\" routerLink=\"/\"><i class=\"fa fa-lock mr-2\"></i>Lock screen</a>\r\n            <a class=\"dropdown-item mb-1\" routerLink=\"/login\"><i class=\"fa fa-power-off mr-2\"></i>Log out</a>\r\n           \r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/theme/components/user-menu/user-menu.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dropdown-menu .user-menu {\n  width: 240px;\n  padding: 0; }\n  .dropdown-menu .user-menu .user-img {\n    width: 100px; }\n  .dropdown-menu .user-menu .dropdown-item {\n    color: #666 !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/theme/components/user-menu/user-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserMenuComponent; });
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

var UserMenuComponent = /** @class */ (function () {
    function UserMenuComponent() {
    }
    UserMenuComponent.prototype.ngOnInit = function () {
    };
    UserMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-menu',
            template: __webpack_require__("../../../../../src/app/theme/components/user-menu/user-menu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/theme/components/user-menu/user-menu.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], UserMenuComponent);
    return UserMenuComponent;
}());



/***/ })

});
//# sourceMappingURL=pages.module.chunk.js.map