"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var native_shadow_directives_1 = require("./native-shadow.directives");
var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    core_1.NgModule({
        imports: [],
        declarations: [native_shadow_directives_1.NativeShadowDirective],
        exports: [native_shadow_directives_1.NativeShadowDirective],
        providers: []
    })
], SharedModule);
exports.SharedModule = SharedModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNoYXJlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFDekMsdUVBQW1FO0FBVW5FLElBQWEsWUFBWTtJQUF6QjtJQUE0QixDQUFDO0lBQUQsbUJBQUM7QUFBRCxDQUFDLEFBQTdCLElBQTZCO0FBQWhCLFlBQVk7SUFSeEIsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFLEVBQUU7UUFDWCxZQUFZLEVBQUUsQ0FBRSxnREFBcUIsQ0FBRTtRQUN2QyxPQUFPLEVBQUUsQ0FBQyxnREFBcUIsQ0FBQztRQUNoQyxTQUFTLEVBQUUsRUFFVjtLQUNGLENBQUM7R0FDVyxZQUFZLENBQUk7QUFBaEIsb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOYXRpdmVTaGFkb3dEaXJlY3RpdmUgfSBmcm9tICcuL25hdGl2ZS1zaGFkb3cuZGlyZWN0aXZlcyc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtdLFxyXG4gIGRlY2xhcmF0aW9uczogWyBOYXRpdmVTaGFkb3dEaXJlY3RpdmUgXSxcclxuICBleHBvcnRzOiBbTmF0aXZlU2hhZG93RGlyZWN0aXZlXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNoYXJlZE1vZHVsZSB7IH1cclxuIl19