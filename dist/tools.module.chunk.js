webpackJsonp(["tools.module"],{

/***/ "../../../../../src/app/pages/tools/drag-drop/drag-drop.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row mb-5\">\r\n    <div class=\"col-12\">\r\n        <div widget class=\"card border-0 box-shadow\">\r\n            <div class=\"card-header transparent border-0 text-muted\">\r\n                <h5 class=\"mb-0\">Draggable elements around in the same container</h5>\r\n                <div class=\"widget-controls\"> \r\n                    <a data-widgster=\"expand\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-down\"></i></a>\r\n                    <a data-widgster=\"collapse\" href=\"#\" class=\"transition\"><i class=\"fa fa-chevron-up\"></i></a> \r\n                    <a data-widgster=\"close\" href=\"#\" class=\"transition\"><i class=\"fa fa-times\"></i></a>\r\n                </div>       \r\n            </div>\r\n            <div class=\"card-body widget-body pt-0\">\r\n               <p class=\"text-left fs-13 text-gray\">Ng2 Dragula - Drag and drop so simple it hurts. Built with <a href=\"https://github.com/valor-software/ng2-dragula\" target=\"_blank\" class=\"font-weight-bold transition\">ng2-dragula</a></p>\r\n             \r\n                <div class=\"row\" [dragula]=\"'bag-container'\">\r\n                   <div class=\"col-lg-4 col-md-6 mb-4 draggable\">\r\n                        <div class=\"card text-white text-center bg-gray\">\r\n                            <div class=\"card-body\">\r\n                                <h4 class=\"card-title\">Drag me!</h4>\r\n                                <p class=\"card-text\">There's also the possibility of moving elements around in the same container, changing their position.</p>\r\n                            </div>\r\n                        </div> \r\n                    </div>\r\n                    <div class=\"col-lg-4 col-md-6 mb-4 draggable\">\r\n                        <div class=\"card card-success text-white text-center\">\r\n                            <div class=\"card-body\">\r\n                                <h4 class=\"card-title\">Drag me!</h4>\r\n                                <p class=\"card-text\">There's also the possibility of moving elements around in the same container, changing their position.</p>\r\n                            </div>\r\n                        </div> \r\n                    </div>\r\n                    <div class=\"col-lg-4 col-md-6 mb-4 draggable\">\r\n                        <div class=\"card card-primary text-white text-center\">\r\n                            <div class=\"card-body\">\r\n                                <h4 class=\"card-title\">Drag me!</h4>\r\n                                <p class=\"card-text\">There's also the possibility of moving elements around in the same container, changing their position.</p>\r\n                            </div>\r\n                        </div> \r\n                    </div>\r\n                    <div class=\"col-lg-4 col-md-6 mb-4 draggable\">\r\n                        <div class=\"card card-danger text-white text-center\">\r\n                            <div class=\"card-body\">\r\n                                <h4 class=\"card-title\">Drag me!</h4>\r\n                                <p class=\"card-text\">There's also the possibility of moving elements around in the same container, changing their position.</p>\r\n                            </div>\r\n                        </div> \r\n                    </div>\r\n                    <div class=\"col-lg-4 col-md-6 mb-4 draggable\">\r\n                        <div class=\"card card-info text-white text-center\">\r\n                            <div class=\"card-body\">\r\n                                <h4 class=\"card-title\">Drag me!</h4>\r\n                                <p class=\"card-text\">There's also the possibility of moving elements around in the same container, changing their position.</p>\r\n                            </div>\r\n                        </div> \r\n                    </div>\r\n                    <div class=\"col-lg-4 col-md-6 mb-4 draggable\">\r\n                        <div class=\"card card-warning text-white text-center\">\r\n                            <div class=\"card-body\">\r\n                                <h4 class=\"card-title\">Drag me!</h4>\r\n                                <p class=\"card-text\">There's also the possibility of moving elements around in the same container, changing their position.</p>\r\n                            </div>\r\n                        </div> \r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"row text-center\">\r\n    <div class=\"col-6\"  [dragula]=\"'bag-1'\">\r\n        <h4>First Container</h4>\r\n        <div class=\"card card-primary text-white rounded-0 draggable\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Move me!</h4>\r\n                <p class=\"card-text\">You can move these elements between these two containers.</p>\r\n            </div>\r\n        </div>\r\n        <div class=\"card card-danger text-white rounded-0 draggable\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Move me!</h4>\r\n                <p class=\"card-text\">You can move these elements between these two containers.</p>\r\n            </div>\r\n        </div>\r\n        <div class=\"card card-success text-white rounded-0 draggable\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Move me!</h4>\r\n                <p class=\"card-text\">You can move these elements between these two containers.</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-6\"  [dragula]=\"'bag-1'\">\r\n       <h4>Second Container</h4>\r\n       <div class=\"card card-warning text-white rounded-0 draggable\">\r\n          <div class=\"card-body\">\r\n              <h4 class=\"card-title\">Move me!</h4>\r\n              <p class=\"card-text\">You can move these elements between these two containers.</p>\r\n          </div>\r\n      </div>\r\n      <div class=\"card card-info text-white rounded-0 draggable\">\r\n          <div class=\"card-body\">\r\n              <h4 class=\"card-title\">Move me!</h4>\r\n              <p class=\"card-text\">You can move these elements between these two containers.</p>\r\n          </div>\r\n      </div>\r\n      <div class=\"card bg-gray text-white rounded-0 draggable\">\r\n          <div class=\"card-body\">\r\n              <h4 class=\"card-title\">Move me!</h4>\r\n              <p class=\"card-text\">You can move these elements between these two containers.</p>\r\n          </div>\r\n      </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/tools/drag-drop/drag-drop.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".draggable {\n  cursor: move;\n  cursor: grab;\n  cursor: -webkit-grab; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/tools/drag-drop/drag-drop.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DragDropComponent; });
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

var DragDropComponent = /** @class */ (function () {
    function DragDropComponent() {
    }
    DragDropComponent.prototype.ngOnInit = function () {
    };
    DragDropComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-drag-drop',
            template: __webpack_require__("../../../../../src/app/pages/tools/drag-drop/drag-drop.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/tools/drag-drop/drag-drop.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], DragDropComponent);
    return DragDropComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/tools/resizable/resizable.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Angular resizable element</h2>\r\n<p class=\"text-muted\">An angular 4.0+ directive that allows an element to be resized. Built with <a href=\"https://github.com/mattlewis92/angular-resizable-element\" target=\"_blank\"  class=\"font-weight-bold transition\">angular-resizable-element</a></p>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col\">\r\n        <div class=\"card resizable-card\"  [ngStyle]=\"style\" \r\n                                          mwlResizable\r\n                                          [validateResize]=\"validate\"\r\n                                          [resizeEdges]=\"{bottom: true, right: true, top: true, left: true}\"\r\n                                          [enableGhostResize]=\"true\"\r\n                                          [resizeSnapGrid]=\"{left: 50, right: 50}\"\r\n                                          (resizeEnd)=\"onResizeEnd($event)\">\r\n            <div class=\"card-header transparent border-0 text-muted\">\r\n                <h5 class=\"mb-0\">Resize me! <i class=\"fa fa-arrows-h ml-2 mr-2\"></i> <i class=\"fa fa-arrows-v\"></i></h5>      \r\n            </div>\r\n            <div class=\"card-body h-100\" perfectScrollbar>\r\n                <img src=\"assets/img/profile/adam.jpg\" alt=\"adam\" class=\"mr-4 mb-4\">\r\n                <img src=\"assets/img/profile/ashley.jpg\" alt=\"ashley\" class=\"mr-4 mb-4\">\r\n                <img src=\"assets/img/profile/bruno.jpg\" alt=\"bruno\" class=\"mr-4 mb-4\">\r\n                <img src=\"assets/img/profile/julia.jpg\" alt=\"julia\" class=\"mr-4 mb-4\">              \r\n            </div>\r\n        </div>\r\n    </div>\r\n</div> "

/***/ }),

/***/ "../../../../../src/app/pages/tools/resizable/resizable.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".resizable-card {\n  z-index: 9999; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/tools/resizable/resizable.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResizableComponent; });
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

var ResizableComponent = /** @class */ (function () {
    function ResizableComponent() {
        this.style = {};
    }
    ResizableComponent.prototype.ngOnInit = function () {
    };
    ResizableComponent.prototype.validate = function (event) {
        var MIN_DIMENSIONS_PX = 50;
        if (event.rectangle.width < MIN_DIMENSIONS_PX || event.rectangle.height < MIN_DIMENSIONS_PX) {
            return false;
        }
        return true;
    };
    ResizableComponent.prototype.onResizeEnd = function (event) {
        this.style = {
            position: 'fixed',
            left: event.rectangle.left + "px",
            top: event.rectangle.top + "px",
            width: event.rectangle.width + "px",
            height: event.rectangle.height + "px"
        };
    };
    ResizableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-resizable',
            template: __webpack_require__("../../../../../src/app/pages/tools/resizable/resizable.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/tools/resizable/resizable.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], ResizableComponent);
    return ResizableComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/tools/toaster/toaster.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Angular Toaster</h2>\r\n<p class=\"text-muted\">Built with <a href=\"https://github.com/scttcper/ngx-toastr\" target=\"_blank\" class=\"font-weight-bold transition\">ngx-toastr</a>.</p>\r\n  \r\n<div class=\"row justify-content-center\">            \r\n  <div class=\"col\">\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-5\">\r\n            <div class=\"form-group\">\r\n              <label for=\"toastTitle\">Title</label>\r\n              <input [(ngModel)]=\"title\" type=\"text\" class=\"form-control\" id=\"toastTitle\" placeholder=\"Toast title\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"toastMessage\">Message</label>\r\n              <textarea [(ngModel)]=\"message\" rows=\"3\" class=\"form-control\" id=\"toastMessage\" placeholder=\"Toast message\"></textarea>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <div class=\"custom-control custom-checkbox\">\r\n                    <input type=\"checkbox\" class=\"custom-control-input\" id=\"checkboxEnableHtml\" [(ngModel)]=\"options.enableHtml\">\r\n                    <label class=\"custom-control-label\" for=\"checkboxEnableHtml\">Enable Html</label>\r\n                </div>\r\n                <div class=\"custom-control custom-checkbox\">\r\n                    <input type=\"checkbox\" class=\"custom-control-input\" id=\"checkboxDismiss\" [(ngModel)]=\"options.tapToDismiss\">\r\n                    <label class=\"custom-control-label\" for=\"checkboxDismiss\">Tap to dismiss</label>\r\n                </div>\r\n                <div class=\"custom-control custom-checkbox\">\r\n                    <input type=\"checkbox\" class=\"custom-control-input\" id=\"checkboxCloseButton\" [(ngModel)]=\"options.closeButton\">\r\n                    <label class=\"custom-control-label\" for=\"checkboxCloseButton\">Close button</label>\r\n                </div>\r\n                <div class=\"custom-control custom-checkbox\">\r\n                    <input type=\"checkbox\" class=\"custom-control-input\" id=\"checkboxPreventDuplicates\" [(ngModel)]=\"options.preventDuplicates\">\r\n                    <label class=\"custom-control-label\" for=\"checkboxPreventDuplicates\">Prevent duplicates</label>\r\n                </div>\r\n                <div class=\"custom-control custom-checkbox\">\r\n                    <input type=\"checkbox\" class=\"custom-control-input\" id=\"checkboxNewToasts\" [(ngModel)]=\"options.newestOnTop\">\r\n                    <label class=\"custom-control-label\" for=\"checkboxNewToasts\">New toasts on top</label>\r\n                </div>\r\n                <div class=\"custom-control custom-checkbox\">\r\n                    <input type=\"checkbox\" class=\"custom-control-input\" id=\"checkboxProgressBar\" [(ngModel)]=\"options.progressBar\">\r\n                    <label class=\"custom-control-label\" for=\"checkboxProgressBar\">Progress bar</label>\r\n                </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <div class=\"form-group\">\r\n              <label for=\"toastTimeout\">Timeout</label>\r\n              <input [(ngModel)]=\"options.timeOut\" type=\"text\" class=\"form-control\" id=\"toastTimeout\" aria-describedby=\"toastTimeoutHelp\">\r\n              <small id=\"toastTimeoutHelp\" class=\"form-text text-muted\">0 never expires</small>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"maxNumberToasts\">Maximum Toasts</label>\r\n              <input [(ngModel)]=\"toastrService.toastrConfig.maxOpened\" type=\"text\" class=\"form-control\" id=\"maxNumberToasts\" aria-describedby=\"maxNumberToastsHelp\">\r\n              <small id=\"maxNumberToastsHelp\" class=\"form-text text-muted\">0 is no limit</small>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"toastExtendedTimeout\">Extended Timeout</label>\r\n              <input type=\"text\" [(ngModel)]=\"toastrService.toastrConfig.extendedTimeOut\" class=\"form-control\" id=\"toastExtendedTimeout\">\r\n            </div>\r\n            <div class=\"custom-control custom-checkbox\">\r\n                <input type=\"checkbox\" class=\"custom-control-input checkbox-dark-gray\" id=\"checkboxAutoDismiss\" [(ngModel)]=\"toastrService.toastrConfig.autoDismiss\">\r\n                <label class=\"custom-control-label\" for=\"checkboxAutoDismiss\">Auto dismiss on max</label>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-3\">\r\n            <fieldset class=\"form-group\">\r\n                <label>Toast type</label>\r\n                <div class=\"custom-control custom-radio\">\r\n                    <input type=\"radio\" name=\"typeRadios\" class=\"custom-control-input radio-success\" id=\"radioSuccess\" [(ngModel)]=\"type\" value=\"success\">\r\n                    <label class=\"custom-control-label\" for=\"radioSuccess\">Success</label>\r\n                </div>\r\n                <div class=\"custom-control custom-radio\">\r\n                    <input type=\"radio\" name=\"typeRadios\" class=\"custom-control-input radio-info\" id=\"radioInfo\" [(ngModel)]=\"type\" value=\"info\">\r\n                    <label class=\"custom-control-label\" for=\"radioInfo\">Info</label>\r\n                </div>\r\n                <div class=\"custom-control custom-radio\">\r\n                    <input type=\"radio\" name=\"typeRadios\" class=\"custom-control-input radio-warning\" id=\"radioWarning\" [(ngModel)]=\"type\" value=\"warning\">\r\n                    <label class=\"custom-control-label\" for=\"radioWarning\">Warning</label>\r\n                </div>\r\n                <div class=\"custom-control custom-radio\">\r\n                    <input type=\"radio\" name=\"typeRadios\" class=\"custom-control-input radio-danger\" id=\"radioDanger\" [(ngModel)]=\"type\" value=\"error\">\r\n                    <label class=\"custom-control-label\" for=\"radioDanger\">Error</label>\r\n                </div>\r\n            </fieldset>\r\n            <fieldset class=\"form-group\">\r\n                <label>Toast position</label>\r\n                <div class=\"custom-control custom-radio\">\r\n                    <input type=\"radio\" name=\"positionRadio\" class=\"custom-control-input radio-dark-gray\" id=\"toast-top-right\" [(ngModel)]=\"options.positionClass\" value=\"toast-top-right\">\r\n                    <label class=\"custom-control-label\" for=\"toast-top-right\">Top Right</label>\r\n                </div>\r\n                <div class=\"custom-control custom-radio\">\r\n                    <input type=\"radio\" name=\"positionRadio\" class=\"custom-control-input radio-dark-gray\" id=\"toast-bottom-right\" [(ngModel)]=\"options.positionClass\" value=\"toast-bottom-right\">\r\n                    <label class=\"custom-control-label\" for=\"toast-bottom-right\">Bottom Right</label>\r\n                </div>\r\n                <div class=\"custom-control custom-radio\">\r\n                    <input type=\"radio\" name=\"positionRadio\" class=\"custom-control-input radio-dark-gray\" id=\"toast-bottom-left\" [(ngModel)]=\"options.positionClass\" value=\"toast-bottom-left\">\r\n                    <label class=\"custom-control-label\" for=\"toast-bottom-left\">Bottom Left</label>\r\n                </div>\r\n                <div class=\"custom-control custom-radio\">\r\n                    <input type=\"radio\" name=\"positionRadio\" class=\"custom-control-input radio-dark-gray\" id=\"toast-top-left\" [(ngModel)]=\"options.positionClass\" value=\"toast-top-left\">\r\n                    <label class=\"custom-control-label\" for=\"toast-top-left\">Top Left</label>\r\n                </div>\r\n                <div class=\"custom-control custom-radio\">\r\n                    <input type=\"radio\" name=\"positionRadio\" class=\"custom-control-input radio-dark-gray\" id=\"toast-top-full-width\" [(ngModel)]=\"options.positionClass\" value=\"toast-top-full-width\">\r\n                    <label class=\"custom-control-label\" for=\"toast-top-full-width\">Top Full Width</label>\r\n                </div>\r\n                <div class=\"custom-control custom-radio\">\r\n                    <input type=\"radio\" name=\"positionRadio\" class=\"custom-control-input radio-dark-gray\" id=\"toast-bottom-full-width\" [(ngModel)]=\"options.positionClass\" value=\"toast-bottom-full-width\">\r\n                    <label class=\"custom-control-label\" for=\"toast-bottom-full-width\">Top Bottom Width</label>\r\n                </div>\r\n                <div class=\"custom-control custom-radio\">\r\n                    <input type=\"radio\" name=\"positionRadio\" class=\"custom-control-input radio-dark-gray\" id=\"toast-top-center\" [(ngModel)]=\"options.positionClass\" value=\"toast-top-center\">\r\n                    <label class=\"custom-control-label\" for=\"toast-top-center\">Top Center</label>\r\n                </div>\r\n                <div class=\"custom-control custom-radio\">\r\n                    <input type=\"radio\" name=\"positionRadio\" class=\"custom-control-input radio-dark-gray\" id=\"toast-bottom-center\" [(ngModel)]=\"options.positionClass\" value=\"toast-bottom-center\">\r\n                    <label class=\"custom-control-label\" for=\"toast-bottom-center\">Bottom Center</label>\r\n                </div>\r\n            </fieldset>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col text-center\">\r\n            <p class=\"mb-0 mt-1\">Toast Controls:</p>\r\n            <button (click)=\"openToast()\" type=\"button\" role=\"button\" class=\"btn btn-primary\">Open Toast</button>\r\n            <button (click)=\"clearLastToast()\" type=\"button\" role=\"button\" class=\"btn btn-secondary\">Clear Last Toast</button>\r\n            <button (click)=\"clearToasts()\" type=\"button\" role=\"button\" class=\"btn btn-secondary\">Clear All Toasts</button>\r\n          </div>\r\n        </div>\r\n        \r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/tools/toaster/toaster.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToasterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_toastr__ = __webpack_require__("../../../../ngx-toastr/esm5/ngx-toastr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var quotes = [
    {
        title: 'Title',
        message: 'Message'
    },
    {
        title: '😃',
        message: 'Supports Emoji'
    },
    {
        title: null,
        message: 'My name is Inigo Montoya. You killed my father. Prepare to die!',
    },
    {
        title: null,
        message: 'Titles are not always needed'
    },
    {
        title: 'Title only 👊',
        message: null,
    },
    {
        title: '',
        message: "Supports Angular " + __WEBPACK_IMPORTED_MODULE_0__angular_core__["VERSION"].full,
    },
];
var types = ['success', 'error', 'info', 'warning'];
var ToasterComponent = /** @class */ (function () {
    function ToasterComponent(toastrService) {
        this.toastrService = toastrService;
        this.title = '';
        this.type = types[0];
        this.message = '';
        this.version = __WEBPACK_IMPORTED_MODULE_0__angular_core__["VERSION"];
        this.lastInserted = [];
        this.options = this.toastrService.toastrConfig;
    }
    ToasterComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.toastrService.success('Welcome to toaster page!', 'Toastr fun!');
        });
    };
    ToasterComponent.prototype.openToast = function () {
        var m = this.message;
        var t = this.title;
        if (!this.title.length && !this.message.length) {
            var randomMessage = quotes[Math.floor(Math.random() * quotes.length)];
            m = randomMessage.message;
            t = randomMessage.title;
        }
        var opt = JSON.parse(JSON.stringify(this.options));
        var inserted = this.toastrService[this.type](m, t, opt);
        if (inserted) {
            this.lastInserted.push(inserted.toastId);
        }
        return inserted;
    };
    ToasterComponent.prototype.clearToasts = function () {
        this.toastrService.clear();
    };
    ToasterComponent.prototype.clearLastToast = function () {
        this.toastrService.clear(this.lastInserted.pop());
    };
    ToasterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-toaster',
            template: __webpack_require__("../../../../../src/app/pages/tools/toaster/toaster.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_toastr__["b" /* ToastrService */]])
    ], ToasterComponent);
    return ToasterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/tools/tools.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolsModule", function() { return ToolsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_perfect_scrollbar__ = __webpack_require__("../../../../ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_dragula__ = __webpack_require__("../../../../ng2-dragula/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_resizable_element__ = __webpack_require__("../../../../angular-resizable-element/esm5/angular-resizable-element.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__theme_directives_directives_module__ = __webpack_require__("../../../../../src/app/theme/directives/directives.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__drag_drop_drag_drop_component__ = __webpack_require__("../../../../../src/app/pages/tools/drag-drop/drag-drop.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__toaster_toaster_component__ = __webpack_require__("../../../../../src/app/pages/tools/toaster/toaster.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__resizable_resizable_component__ = __webpack_require__("../../../../../src/app/pages/tools/resizable/resizable.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: '', redirectTo: 'drag-drop', pathMatch: 'full' },
    { path: 'drag-drop', component: __WEBPACK_IMPORTED_MODULE_8__drag_drop_drag_drop_component__["a" /* DragDropComponent */], data: { breadcrumb: 'Drag and Drop' } },
    { path: 'resizable', component: __WEBPACK_IMPORTED_MODULE_10__resizable_resizable_component__["a" /* ResizableComponent */], data: { breadcrumb: 'Resizable' } },
    { path: 'toaster', component: __WEBPACK_IMPORTED_MODULE_9__toaster_toaster_component__["a" /* ToasterComponent */], data: { breadcrumb: 'Toaster' } }
];
var ToolsModule = /** @class */ (function () {
    function ToolsModule() {
    }
    ToolsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* RouterModule */].forChild(routes),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_4_ngx_perfect_scrollbar__["b" /* PerfectScrollbarModule */],
                __WEBPACK_IMPORTED_MODULE_5_ng2_dragula__["DragulaModule"],
                __WEBPACK_IMPORTED_MODULE_6_angular_resizable_element__["a" /* ResizableModule */],
                __WEBPACK_IMPORTED_MODULE_7__theme_directives_directives_module__["a" /* DirectivesModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__drag_drop_drag_drop_component__["a" /* DragDropComponent */],
                __WEBPACK_IMPORTED_MODULE_9__toaster_toaster_component__["a" /* ToasterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__resizable_resizable_component__["a" /* ResizableComponent */]
            ]
        })
    ], ToolsModule);
    return ToolsModule;
}());



/***/ }),

/***/ "../../../../atoa/atoa.js":
/***/ (function(module, exports) {

module.exports = function atoa (a, n) { return Array.prototype.slice.call(a, n); }


/***/ }),

/***/ "../../../../contra/debounce.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ticky = __webpack_require__("../../../../ticky/ticky-browser.js");

module.exports = function debounce (fn, args, ctx) {
  if (!fn) { return; }
  ticky(function run () {
    fn.apply(ctx || null, args || []);
  });
};


/***/ }),

/***/ "../../../../contra/emitter.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var atoa = __webpack_require__("../../../../atoa/atoa.js");
var debounce = __webpack_require__("../../../../contra/debounce.js");

module.exports = function emitter (thing, options) {
  var opts = options || {};
  var evt = {};
  if (thing === undefined) { thing = {}; }
  thing.on = function (type, fn) {
    if (!evt[type]) {
      evt[type] = [fn];
    } else {
      evt[type].push(fn);
    }
    return thing;
  };
  thing.once = function (type, fn) {
    fn._once = true; // thing.off(fn) still works!
    thing.on(type, fn);
    return thing;
  };
  thing.off = function (type, fn) {
    var c = arguments.length;
    if (c === 1) {
      delete evt[type];
    } else if (c === 0) {
      evt = {};
    } else {
      var et = evt[type];
      if (!et) { return thing; }
      et.splice(et.indexOf(fn), 1);
    }
    return thing;
  };
  thing.emit = function () {
    var args = atoa(arguments);
    return thing.emitterSnapshot(args.shift()).apply(this, args);
  };
  thing.emitterSnapshot = function (type) {
    var et = (evt[type] || []).slice(0);
    return function () {
      var args = atoa(arguments);
      var ctx = this || thing;
      if (type === 'error' && opts.throws !== false && !et.length) { throw args.length === 1 ? args[0] : args; }
      et.forEach(function emitter (listen) {
        if (opts.async) { debounce(listen, args, ctx); } else { listen.apply(ctx, args); }
        if (listen._once) { thing.off(type, listen); }
      });
      return thing;
    };
  };
  return thing;
};


/***/ }),

/***/ "../../../../crossvent/src/crossvent.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var customEvent = __webpack_require__("../../../../custom-event/index.js");
var eventmap = __webpack_require__("../../../../crossvent/src/eventmap.js");
var doc = global.document;
var addEvent = addEventEasy;
var removeEvent = removeEventEasy;
var hardCache = [];

if (!global.addEventListener) {
  addEvent = addEventHard;
  removeEvent = removeEventHard;
}

module.exports = {
  add: addEvent,
  remove: removeEvent,
  fabricate: fabricateEvent
};

function addEventEasy (el, type, fn, capturing) {
  return el.addEventListener(type, fn, capturing);
}

function addEventHard (el, type, fn) {
  return el.attachEvent('on' + type, wrap(el, type, fn));
}

function removeEventEasy (el, type, fn, capturing) {
  return el.removeEventListener(type, fn, capturing);
}

function removeEventHard (el, type, fn) {
  var listener = unwrap(el, type, fn);
  if (listener) {
    return el.detachEvent('on' + type, listener);
  }
}

function fabricateEvent (el, type, model) {
  var e = eventmap.indexOf(type) === -1 ? makeCustomEvent() : makeClassicEvent();
  if (el.dispatchEvent) {
    el.dispatchEvent(e);
  } else {
    el.fireEvent('on' + type, e);
  }
  function makeClassicEvent () {
    var e;
    if (doc.createEvent) {
      e = doc.createEvent('Event');
      e.initEvent(type, true, true);
    } else if (doc.createEventObject) {
      e = doc.createEventObject();
    }
    return e;
  }
  function makeCustomEvent () {
    return new customEvent(type, { detail: model });
  }
}

function wrapperFactory (el, type, fn) {
  return function wrapper (originalEvent) {
    var e = originalEvent || global.event;
    e.target = e.target || e.srcElement;
    e.preventDefault = e.preventDefault || function preventDefault () { e.returnValue = false; };
    e.stopPropagation = e.stopPropagation || function stopPropagation () { e.cancelBubble = true; };
    e.which = e.which || e.keyCode;
    fn.call(el, e);
  };
}

function wrap (el, type, fn) {
  var wrapper = unwrap(el, type, fn) || wrapperFactory(el, type, fn);
  hardCache.push({
    wrapper: wrapper,
    element: el,
    type: type,
    fn: fn
  });
  return wrapper;
}

function unwrap (el, type, fn) {
  var i = find(el, type, fn);
  if (i) {
    var wrapper = hardCache[i].wrapper;
    hardCache.splice(i, 1); // free up a tad of memory
    return wrapper;
  }
}

function find (el, type, fn) {
  var i, item;
  for (i = 0; i < hardCache.length; i++) {
    item = hardCache[i];
    if (item.element === el && item.type === type && item.fn === fn) {
      return i;
    }
  }
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("../../../../webpack/buildin/global.js")))

/***/ }),

/***/ "../../../../crossvent/src/eventmap.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var eventmap = [];
var eventname = '';
var ron = /^on/;

for (eventname in global) {
  if (ron.test(eventname)) {
    eventmap.push(eventname.slice(2));
  }
}

module.exports = eventmap;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("../../../../webpack/buildin/global.js")))

/***/ }),

/***/ "../../../../custom-event/index.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
var NativeCustomEvent = global.CustomEvent;

function useNative () {
  try {
    var p = new NativeCustomEvent('cat', { detail: { foo: 'bar' } });
    return  'cat' === p.type && 'bar' === p.detail.foo;
  } catch (e) {
  }
  return false;
}

/**
 * Cross-browser `CustomEvent` constructor.
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent.CustomEvent
 *
 * @public
 */

module.exports = useNative() ? NativeCustomEvent :

// IE >= 9
'function' === typeof document.createEvent ? function CustomEvent (type, params) {
  var e = document.createEvent('CustomEvent');
  if (params) {
    e.initCustomEvent(type, params.bubbles, params.cancelable, params.detail);
  } else {
    e.initCustomEvent(type, false, false, void 0);
  }
  return e;
} :

// IE <= 8
function CustomEvent (type, params) {
  var e = document.createEventObject();
  e.type = type;
  if (params) {
    e.bubbles = Boolean(params.bubbles);
    e.cancelable = Boolean(params.cancelable);
    e.detail = params.detail;
  } else {
    e.bubbles = false;
    e.cancelable = false;
    e.detail = void 0;
  }
  return e;
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("../../../../webpack/buildin/global.js")))

/***/ }),

/***/ "../../../../dragula/classes.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cache = {};
var start = '(?:^|\\s)';
var end = '(?:\\s|$)';

function lookupClass (className) {
  var cached = cache[className];
  if (cached) {
    cached.lastIndex = 0;
  } else {
    cache[className] = cached = new RegExp(start + className + end, 'g');
  }
  return cached;
}

function addClass (el, className) {
  var current = el.className;
  if (!current.length) {
    el.className = className;
  } else if (!lookupClass(className).test(current)) {
    el.className += ' ' + className;
  }
}

function rmClass (el, className) {
  el.className = el.className.replace(lookupClass(className), ' ').trim();
}

module.exports = {
  add: addClass,
  rm: rmClass
};


/***/ }),

/***/ "../../../../dragula/dragula.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var emitter = __webpack_require__("../../../../contra/emitter.js");
var crossvent = __webpack_require__("../../../../crossvent/src/crossvent.js");
var classes = __webpack_require__("../../../../dragula/classes.js");
var doc = document;
var documentElement = doc.documentElement;

function dragula (initialContainers, options) {
  var len = arguments.length;
  if (len === 1 && Array.isArray(initialContainers) === false) {
    options = initialContainers;
    initialContainers = [];
  }
  var _mirror; // mirror image
  var _source; // source container
  var _item; // item being dragged
  var _offsetX; // reference x
  var _offsetY; // reference y
  var _moveX; // reference move x
  var _moveY; // reference move y
  var _initialSibling; // reference sibling when grabbed
  var _currentSibling; // reference sibling now
  var _copy; // item used for copying
  var _renderTimer; // timer for setTimeout renderMirrorImage
  var _lastDropTarget = null; // last container item was over
  var _grabbed; // holds mousedown context until first mousemove

  var o = options || {};
  if (o.moves === void 0) { o.moves = always; }
  if (o.accepts === void 0) { o.accepts = always; }
  if (o.invalid === void 0) { o.invalid = invalidTarget; }
  if (o.containers === void 0) { o.containers = initialContainers || []; }
  if (o.isContainer === void 0) { o.isContainer = never; }
  if (o.copy === void 0) { o.copy = false; }
  if (o.copySortSource === void 0) { o.copySortSource = false; }
  if (o.revertOnSpill === void 0) { o.revertOnSpill = false; }
  if (o.removeOnSpill === void 0) { o.removeOnSpill = false; }
  if (o.direction === void 0) { o.direction = 'vertical'; }
  if (o.ignoreInputTextSelection === void 0) { o.ignoreInputTextSelection = true; }
  if (o.mirrorContainer === void 0) { o.mirrorContainer = doc.body; }

  var drake = emitter({
    containers: o.containers,
    start: manualStart,
    end: end,
    cancel: cancel,
    remove: remove,
    destroy: destroy,
    canMove: canMove,
    dragging: false
  });

  if (o.removeOnSpill === true) {
    drake.on('over', spillOver).on('out', spillOut);
  }

  events();

  return drake;

  function isContainer (el) {
    return drake.containers.indexOf(el) !== -1 || o.isContainer(el);
  }

  function events (remove) {
    var op = remove ? 'remove' : 'add';
    touchy(documentElement, op, 'mousedown', grab);
    touchy(documentElement, op, 'mouseup', release);
  }

  function eventualMovements (remove) {
    var op = remove ? 'remove' : 'add';
    touchy(documentElement, op, 'mousemove', startBecauseMouseMoved);
  }

  function movements (remove) {
    var op = remove ? 'remove' : 'add';
    crossvent[op](documentElement, 'selectstart', preventGrabbed); // IE8
    crossvent[op](documentElement, 'click', preventGrabbed);
  }

  function destroy () {
    events(true);
    release({});
  }

  function preventGrabbed (e) {
    if (_grabbed) {
      e.preventDefault();
    }
  }

  function grab (e) {
    _moveX = e.clientX;
    _moveY = e.clientY;

    var ignore = whichMouseButton(e) !== 1 || e.metaKey || e.ctrlKey;
    if (ignore) {
      return; // we only care about honest-to-god left clicks and touch events
    }
    var item = e.target;
    var context = canStart(item);
    if (!context) {
      return;
    }
    _grabbed = context;
    eventualMovements();
    if (e.type === 'mousedown') {
      if (isInput(item)) { // see also: https://github.com/bevacqua/dragula/issues/208
        item.focus(); // fixes https://github.com/bevacqua/dragula/issues/176
      } else {
        e.preventDefault(); // fixes https://github.com/bevacqua/dragula/issues/155
      }
    }
  }

  function startBecauseMouseMoved (e) {
    if (!_grabbed) {
      return;
    }
    if (whichMouseButton(e) === 0) {
      release({});
      return; // when text is selected on an input and then dragged, mouseup doesn't fire. this is our only hope
    }
    // truthy check fixes #239, equality fixes #207
    if (e.clientX !== void 0 && e.clientX === _moveX && e.clientY !== void 0 && e.clientY === _moveY) {
      return;
    }
    if (o.ignoreInputTextSelection) {
      var clientX = getCoord('clientX', e);
      var clientY = getCoord('clientY', e);
      var elementBehindCursor = doc.elementFromPoint(clientX, clientY);
      if (isInput(elementBehindCursor)) {
        return;
      }
    }

    var grabbed = _grabbed; // call to end() unsets _grabbed
    eventualMovements(true);
    movements();
    end();
    start(grabbed);

    var offset = getOffset(_item);
    _offsetX = getCoord('pageX', e) - offset.left;
    _offsetY = getCoord('pageY', e) - offset.top;

    classes.add(_copy || _item, 'gu-transit');
    renderMirrorImage();
    drag(e);
  }

  function canStart (item) {
    if (drake.dragging && _mirror) {
      return;
    }
    if (isContainer(item)) {
      return; // don't drag container itself
    }
    var handle = item;
    while (getParent(item) && isContainer(getParent(item)) === false) {
      if (o.invalid(item, handle)) {
        return;
      }
      item = getParent(item); // drag target should be a top element
      if (!item) {
        return;
      }
    }
    var source = getParent(item);
    if (!source) {
      return;
    }
    if (o.invalid(item, handle)) {
      return;
    }

    var movable = o.moves(item, source, handle, nextEl(item));
    if (!movable) {
      return;
    }

    return {
      item: item,
      source: source
    };
  }

  function canMove (item) {
    return !!canStart(item);
  }

  function manualStart (item) {
    var context = canStart(item);
    if (context) {
      start(context);
    }
  }

  function start (context) {
    if (isCopy(context.item, context.source)) {
      _copy = context.item.cloneNode(true);
      drake.emit('cloned', _copy, context.item, 'copy');
    }

    _source = context.source;
    _item = context.item;
    _initialSibling = _currentSibling = nextEl(context.item);

    drake.dragging = true;
    drake.emit('drag', _item, _source);
  }

  function invalidTarget () {
    return false;
  }

  function end () {
    if (!drake.dragging) {
      return;
    }
    var item = _copy || _item;
    drop(item, getParent(item));
  }

  function ungrab () {
    _grabbed = false;
    eventualMovements(true);
    movements(true);
  }

  function release (e) {
    ungrab();

    if (!drake.dragging) {
      return;
    }
    var item = _copy || _item;
    var clientX = getCoord('clientX', e);
    var clientY = getCoord('clientY', e);
    var elementBehindCursor = getElementBehindPoint(_mirror, clientX, clientY);
    var dropTarget = findDropTarget(elementBehindCursor, clientX, clientY);
    if (dropTarget && ((_copy && o.copySortSource) || (!_copy || dropTarget !== _source))) {
      drop(item, dropTarget);
    } else if (o.removeOnSpill) {
      remove();
    } else {
      cancel();
    }
  }

  function drop (item, target) {
    var parent = getParent(item);
    if (_copy && o.copySortSource && target === _source) {
      parent.removeChild(_item);
    }
    if (isInitialPlacement(target)) {
      drake.emit('cancel', item, _source, _source);
    } else {
      drake.emit('drop', item, target, _source, _currentSibling);
    }
    cleanup();
  }

  function remove () {
    if (!drake.dragging) {
      return;
    }
    var item = _copy || _item;
    var parent = getParent(item);
    if (parent) {
      parent.removeChild(item);
    }
    drake.emit(_copy ? 'cancel' : 'remove', item, parent, _source);
    cleanup();
  }

  function cancel (revert) {
    if (!drake.dragging) {
      return;
    }
    var reverts = arguments.length > 0 ? revert : o.revertOnSpill;
    var item = _copy || _item;
    var parent = getParent(item);
    var initial = isInitialPlacement(parent);
    if (initial === false && reverts) {
      if (_copy) {
        if (parent) {
          parent.removeChild(_copy);
        }
      } else {
        _source.insertBefore(item, _initialSibling);
      }
    }
    if (initial || reverts) {
      drake.emit('cancel', item, _source, _source);
    } else {
      drake.emit('drop', item, parent, _source, _currentSibling);
    }
    cleanup();
  }

  function cleanup () {
    var item = _copy || _item;
    ungrab();
    removeMirrorImage();
    if (item) {
      classes.rm(item, 'gu-transit');
    }
    if (_renderTimer) {
      clearTimeout(_renderTimer);
    }
    drake.dragging = false;
    if (_lastDropTarget) {
      drake.emit('out', item, _lastDropTarget, _source);
    }
    drake.emit('dragend', item);
    _source = _item = _copy = _initialSibling = _currentSibling = _renderTimer = _lastDropTarget = null;
  }

  function isInitialPlacement (target, s) {
    var sibling;
    if (s !== void 0) {
      sibling = s;
    } else if (_mirror) {
      sibling = _currentSibling;
    } else {
      sibling = nextEl(_copy || _item);
    }
    return target === _source && sibling === _initialSibling;
  }

  function findDropTarget (elementBehindCursor, clientX, clientY) {
    var target = elementBehindCursor;
    while (target && !accepted()) {
      target = getParent(target);
    }
    return target;

    function accepted () {
      var droppable = isContainer(target);
      if (droppable === false) {
        return false;
      }

      var immediate = getImmediateChild(target, elementBehindCursor);
      var reference = getReference(target, immediate, clientX, clientY);
      var initial = isInitialPlacement(target, reference);
      if (initial) {
        return true; // should always be able to drop it right back where it was
      }
      return o.accepts(_item, target, _source, reference);
    }
  }

  function drag (e) {
    if (!_mirror) {
      return;
    }
    e.preventDefault();

    var clientX = getCoord('clientX', e);
    var clientY = getCoord('clientY', e);
    var x = clientX - _offsetX;
    var y = clientY - _offsetY;

    _mirror.style.left = x + 'px';
    _mirror.style.top = y + 'px';

    var item = _copy || _item;
    var elementBehindCursor = getElementBehindPoint(_mirror, clientX, clientY);
    var dropTarget = findDropTarget(elementBehindCursor, clientX, clientY);
    var changed = dropTarget !== null && dropTarget !== _lastDropTarget;
    if (changed || dropTarget === null) {
      out();
      _lastDropTarget = dropTarget;
      over();
    }
    var parent = getParent(item);
    if (dropTarget === _source && _copy && !o.copySortSource) {
      if (parent) {
        parent.removeChild(item);
      }
      return;
    }
    var reference;
    var immediate = getImmediateChild(dropTarget, elementBehindCursor);
    if (immediate !== null) {
      reference = getReference(dropTarget, immediate, clientX, clientY);
    } else if (o.revertOnSpill === true && !_copy) {
      reference = _initialSibling;
      dropTarget = _source;
    } else {
      if (_copy && parent) {
        parent.removeChild(item);
      }
      return;
    }
    if (
      (reference === null && changed) ||
      reference !== item &&
      reference !== nextEl(item)
    ) {
      _currentSibling = reference;
      dropTarget.insertBefore(item, reference);
      drake.emit('shadow', item, dropTarget, _source);
    }
    function moved (type) { drake.emit(type, item, _lastDropTarget, _source); }
    function over () { if (changed) { moved('over'); } }
    function out () { if (_lastDropTarget) { moved('out'); } }
  }

  function spillOver (el) {
    classes.rm(el, 'gu-hide');
  }

  function spillOut (el) {
    if (drake.dragging) { classes.add(el, 'gu-hide'); }
  }

  function renderMirrorImage () {
    if (_mirror) {
      return;
    }
    var rect = _item.getBoundingClientRect();
    _mirror = _item.cloneNode(true);
    _mirror.style.width = getRectWidth(rect) + 'px';
    _mirror.style.height = getRectHeight(rect) + 'px';
    classes.rm(_mirror, 'gu-transit');
    classes.add(_mirror, 'gu-mirror');
    o.mirrorContainer.appendChild(_mirror);
    touchy(documentElement, 'add', 'mousemove', drag);
    classes.add(o.mirrorContainer, 'gu-unselectable');
    drake.emit('cloned', _mirror, _item, 'mirror');
  }

  function removeMirrorImage () {
    if (_mirror) {
      classes.rm(o.mirrorContainer, 'gu-unselectable');
      touchy(documentElement, 'remove', 'mousemove', drag);
      getParent(_mirror).removeChild(_mirror);
      _mirror = null;
    }
  }

  function getImmediateChild (dropTarget, target) {
    var immediate = target;
    while (immediate !== dropTarget && getParent(immediate) !== dropTarget) {
      immediate = getParent(immediate);
    }
    if (immediate === documentElement) {
      return null;
    }
    return immediate;
  }

  function getReference (dropTarget, target, x, y) {
    var horizontal = o.direction === 'horizontal';
    var reference = target !== dropTarget ? inside() : outside();
    return reference;

    function outside () { // slower, but able to figure out any position
      var len = dropTarget.children.length;
      var i;
      var el;
      var rect;
      for (i = 0; i < len; i++) {
        el = dropTarget.children[i];
        rect = el.getBoundingClientRect();
        if (horizontal && (rect.left + rect.width / 2) > x) { return el; }
        if (!horizontal && (rect.top + rect.height / 2) > y) { return el; }
      }
      return null;
    }

    function inside () { // faster, but only available if dropped inside a child element
      var rect = target.getBoundingClientRect();
      if (horizontal) {
        return resolve(x > rect.left + getRectWidth(rect) / 2);
      }
      return resolve(y > rect.top + getRectHeight(rect) / 2);
    }

    function resolve (after) {
      return after ? nextEl(target) : target;
    }
  }

  function isCopy (item, container) {
    return typeof o.copy === 'boolean' ? o.copy : o.copy(item, container);
  }
}

function touchy (el, op, type, fn) {
  var touch = {
    mouseup: 'touchend',
    mousedown: 'touchstart',
    mousemove: 'touchmove'
  };
  var pointers = {
    mouseup: 'pointerup',
    mousedown: 'pointerdown',
    mousemove: 'pointermove'
  };
  var microsoft = {
    mouseup: 'MSPointerUp',
    mousedown: 'MSPointerDown',
    mousemove: 'MSPointerMove'
  };
  if (global.navigator.pointerEnabled) {
    crossvent[op](el, pointers[type], fn);
  } else if (global.navigator.msPointerEnabled) {
    crossvent[op](el, microsoft[type], fn);
  } else {
    crossvent[op](el, touch[type], fn);
    crossvent[op](el, type, fn);
  }
}

function whichMouseButton (e) {
  if (e.touches !== void 0) { return e.touches.length; }
  if (e.which !== void 0 && e.which !== 0) { return e.which; } // see https://github.com/bevacqua/dragula/issues/261
  if (e.buttons !== void 0) { return e.buttons; }
  var button = e.button;
  if (button !== void 0) { // see https://github.com/jquery/jquery/blob/99e8ff1baa7ae341e94bb89c3e84570c7c3ad9ea/src/event.js#L573-L575
    return button & 1 ? 1 : button & 2 ? 3 : (button & 4 ? 2 : 0);
  }
}

function getOffset (el) {
  var rect = el.getBoundingClientRect();
  return {
    left: rect.left + getScroll('scrollLeft', 'pageXOffset'),
    top: rect.top + getScroll('scrollTop', 'pageYOffset')
  };
}

function getScroll (scrollProp, offsetProp) {
  if (typeof global[offsetProp] !== 'undefined') {
    return global[offsetProp];
  }
  if (documentElement.clientHeight) {
    return documentElement[scrollProp];
  }
  return doc.body[scrollProp];
}

function getElementBehindPoint (point, x, y) {
  var p = point || {};
  var state = p.className;
  var el;
  p.className += ' gu-hide';
  el = doc.elementFromPoint(x, y);
  p.className = state;
  return el;
}

function never () { return false; }
function always () { return true; }
function getRectWidth (rect) { return rect.width || (rect.right - rect.left); }
function getRectHeight (rect) { return rect.height || (rect.bottom - rect.top); }
function getParent (el) { return el.parentNode === doc ? null : el.parentNode; }
function isInput (el) { return el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT' || isEditable(el); }
function isEditable (el) {
  if (!el) { return false; } // no parents were editable
  if (el.contentEditable === 'false') { return false; } // stop the lookup
  if (el.contentEditable === 'true') { return true; } // found a contentEditable element in the chain
  return isEditable(getParent(el)); // contentEditable is set to 'inherit'
}

function nextEl (el) {
  return el.nextElementSibling || manually();
  function manually () {
    var sibling = el;
    do {
      sibling = sibling.nextSibling;
    } while (sibling && sibling.nodeType !== 1);
    return sibling;
  }
}

function getEventHost (e) {
  // on touchend event, we have to use `e.changedTouches`
  // see http://stackoverflow.com/questions/7192563/touchend-event-properties
  // see https://github.com/bevacqua/dragula/issues/34
  if (e.targetTouches && e.targetTouches.length) {
    return e.targetTouches[0];
  }
  if (e.changedTouches && e.changedTouches.length) {
    return e.changedTouches[0];
  }
  return e;
}

function getCoord (coord, e) {
  var host = getEventHost(e);
  var missMap = {
    pageX: 'clientX', // IE8
    pageY: 'clientY' // IE8
  };
  if (coord in missMap && !(coord in host) && missMap[coord] in host) {
    coord = missMap[coord];
  }
  return host[coord];
}

module.exports = dragula;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("../../../../webpack/buildin/global.js")))

/***/ }),

/***/ "../../../../ng2-dragula/components/dragula.class.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dragulaExpt = __webpack_require__("../../../../dragula/dragula.js");
exports.dragula = dragulaExpt.default || dragulaExpt;


/***/ }),

/***/ "../../../../ng2-dragula/components/dragula.directive.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var dragula_provider_1 = __webpack_require__("../../../../ng2-dragula/components/dragula.provider.js");
var dragula_class_1 = __webpack_require__("../../../../ng2-dragula/components/dragula.class.js");
var DragulaDirective = (function () {
    function DragulaDirective(el, dragulaService) {
        this.el = el;
        this.dragulaService = dragulaService;
        this.container = el.nativeElement;
    }
    DragulaDirective.prototype.ngOnInit = function () {
        var _this = this;
        // console.log(this.bag);
        var bag = this.dragulaService.find(this.dragula);
        var checkModel = function () {
            if (_this.dragulaModel) {
                if (_this.drake.models) {
                    _this.drake.models.push(_this.dragulaModel);
                }
                else {
                    _this.drake.models = [_this.dragulaModel];
                }
            }
        };
        if (bag) {
            this.drake = bag.drake;
            checkModel();
            this.drake.containers.push(this.container);
        }
        else {
            this.drake = dragula_class_1.dragula([this.container], Object.assign({}, this.dragulaOptions));
            checkModel();
            this.dragulaService.add(this.dragula, this.drake);
        }
    };
    DragulaDirective.prototype.ngOnChanges = function (changes) {
        // console.log('dragula.directive: ngOnChanges');
        // console.log(changes);
        if (changes && changes.dragulaModel) {
            if (this.drake) {
                if (this.drake.models) {
                    var modelIndex = this.drake.models.indexOf(changes.dragulaModel.previousValue);
                    this.drake.models.splice(modelIndex, 1, changes.dragulaModel.currentValue);
                }
                else {
                    this.drake.models = [changes.dragulaModel.currentValue];
                }
            }
        }
    };
    return DragulaDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DragulaDirective.prototype, "dragula", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DragulaDirective.prototype, "dragulaModel", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DragulaDirective.prototype, "dragulaOptions", void 0);
DragulaDirective = __decorate([
    core_1.Directive({ selector: '[dragula]' }),
    __metadata("design:paramtypes", [core_1.ElementRef, dragula_provider_1.DragulaService])
], DragulaDirective);
exports.DragulaDirective = DragulaDirective;


/***/ }),

/***/ "../../../../ng2-dragula/components/dragula.provider.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var dragula_class_1 = __webpack_require__("../../../../ng2-dragula/components/dragula.class.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var DragulaService = (function () {
    function DragulaService() {
        this.cancel = new core_1.EventEmitter();
        this.cloned = new core_1.EventEmitter();
        this.drag = new core_1.EventEmitter();
        this.dragend = new core_1.EventEmitter();
        this.drop = new core_1.EventEmitter();
        this.out = new core_1.EventEmitter();
        this.over = new core_1.EventEmitter();
        this.remove = new core_1.EventEmitter();
        this.shadow = new core_1.EventEmitter();
        this.dropModel = new core_1.EventEmitter();
        this.removeModel = new core_1.EventEmitter();
        this.events = [
            'cancel', 'cloned', 'drag', 'dragend', 'drop', 'out', 'over',
            'remove', 'shadow', 'dropModel', 'removeModel'
        ];
        this.bags = [];
    }
    DragulaService.prototype.add = function (name, drake) {
        var bag = this.find(name);
        if (bag) {
            throw new Error('Bag named: "' + name + '" already exists.');
        }
        bag = { name: name, drake: drake };
        this.bags.push(bag);
        if (drake.models) {
            this.handleModels(name, drake);
        }
        if (!bag.initEvents) {
            this.setupEvents(bag);
        }
        return bag;
    };
    DragulaService.prototype.find = function (name) {
        for (var _i = 0, _a = this.bags; _i < _a.length; _i++) {
            var bag = _a[_i];
            if (bag.name === name) {
                return bag;
            }
        }
    };
    DragulaService.prototype.destroy = function (name) {
        var bag = this.find(name);
        var i = this.bags.indexOf(bag);
        this.bags.splice(i, 1);
        bag.drake.destroy();
    };
    DragulaService.prototype.setOptions = function (name, options) {
        var bag = this.add(name, dragula_class_1.dragula(options));
        this.handleModels(name, bag.drake);
    };
    DragulaService.prototype.handleModels = function (name, drake) {
        var _this = this;
        var dragElm;
        var dragIndex;
        var dropIndex;
        var sourceModel;
        drake.on('remove', function (el, source) {
            if (!drake.models) {
                return;
            }
            sourceModel = drake.models[drake.containers.indexOf(source)];
            sourceModel.splice(dragIndex, 1);
            // console.log('REMOVE');
            // console.log(sourceModel);
            _this.removeModel.emit([name, el, source]);
        });
        drake.on('drag', function (el, source) {
            dragElm = el;
            dragIndex = _this.domIndexOf(el, source);
        });
        drake.on('drop', function (dropElm, target, source) {
            if (!drake.models || !target) {
                return;
            }
            dropIndex = _this.domIndexOf(dropElm, target);
            sourceModel = drake.models[drake.containers.indexOf(source)];
            // console.log('DROP');
            // console.log(sourceModel);
            if (target === source) {
                sourceModel.splice(dropIndex, 0, sourceModel.splice(dragIndex, 1)[0]);
            }
            else {
                var notCopy = dragElm === dropElm;
                var targetModel = drake.models[drake.containers.indexOf(target)];
                var dropElmModel = notCopy ? sourceModel[dragIndex] : JSON.parse(JSON.stringify(sourceModel[dragIndex]));
                if (notCopy) {
                    sourceModel.splice(dragIndex, 1);
                }
                targetModel.splice(dropIndex, 0, dropElmModel);
                target.removeChild(dropElm); // element must be removed for ngFor to apply correctly
            }
            _this.dropModel.emit([name, dropElm, target, source]);
        });
    };
    DragulaService.prototype.setupEvents = function (bag) {
        bag.initEvents = true;
        var that = this;
        var emitter = function (type) {
            function replicate() {
                var args = Array.prototype.slice.call(arguments);
                that[type].emit([bag.name].concat(args));
            }
            bag.drake.on(type, replicate);
        };
        this.events.forEach(emitter);
    };
    DragulaService.prototype.domIndexOf = function (child, parent) {
        return Array.prototype.indexOf.call(parent.children, child);
    };
    return DragulaService;
}());
DragulaService = __decorate([
    core_1.Injectable()
], DragulaService);
exports.DragulaService = DragulaService;


/***/ }),

/***/ "../../../../ng2-dragula/components/dragular.module.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var dragula_directive_1 = __webpack_require__("../../../../ng2-dragula/components/dragula.directive.js");
var dragula_provider_1 = __webpack_require__("../../../../ng2-dragula/components/dragula.provider.js");
var DragulaModule = (function () {
    function DragulaModule() {
    }
    return DragulaModule;
}());
DragulaModule = __decorate([
    core_1.NgModule({
        exports: [dragula_directive_1.DragulaDirective],
        declarations: [dragula_directive_1.DragulaDirective],
        providers: [dragula_provider_1.DragulaService]
    })
], DragulaModule);
exports.DragulaModule = DragulaModule;


/***/ }),

/***/ "../../../../ng2-dragula/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dragula_class_1 = __webpack_require__("../../../../ng2-dragula/components/dragula.class.js");
exports.dragula = dragula_class_1.dragula;
var dragula_directive_1 = __webpack_require__("../../../../ng2-dragula/components/dragula.directive.js");
exports.DragulaDirective = dragula_directive_1.DragulaDirective;
var dragula_provider_1 = __webpack_require__("../../../../ng2-dragula/components/dragula.provider.js");
exports.DragulaService = dragula_provider_1.DragulaService;
var dragular_module_1 = __webpack_require__("../../../../ng2-dragula/components/dragular.module.js");
exports.DragulaModule = dragular_module_1.DragulaModule;


/***/ }),

/***/ "../../../../ticky/ticky-browser.js":
/***/ (function(module, exports) {

var si = typeof setImmediate === 'function', tick;
if (si) {
  tick = function (fn) { setImmediate(fn); };
} else {
  tick = function (fn) { setTimeout(fn, 0); };
}

module.exports = tick;

/***/ })

});
//# sourceMappingURL=tools.module.chunk.js.map