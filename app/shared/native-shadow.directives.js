"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var NativeShadowDirective = (function () {
    function NativeShadowDirective(el) {
        this.el = el;
    }
    NativeShadowDirective.prototype.onLoaded = function () {
        var tnsView = this.el.nativeElement;
        if (tnsView.android) {
            var shape = new android.graphics.drawable.GradientDrawable();
            shape.setShape(android.graphics.drawable.GradientDrawable.RECTANGLE);
            shape.setColor(android.graphics.Color.WHITE);
            shape.setCornerRadius(18);
            tnsView.android.setBackgroundDrawable(shape);
            tnsView.android.setElevation(2);
        }
    };
    return NativeShadowDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], NativeShadowDirective.prototype, "nsShadow", void 0);
__decorate([
    core_1.HostListener('loaded'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], NativeShadowDirective.prototype, "onLoaded", null);
NativeShadowDirective = __decorate([
    core_1.Directive({ selector: '[nsShadow]' }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], NativeShadowDirective);
exports.NativeShadowDirective = NativeShadowDirective;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF0aXZlLXNoYWRvdy5kaXJlY3RpdmVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmF0aXZlLXNoYWRvdy5kaXJlY3RpdmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJFO0FBSzNFLElBQWEscUJBQXFCO0lBRWpDLCtCQUFvQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtJQUVsQyxDQUFDO0lBQ3VCLHdDQUFRLEdBQVI7UUFDdkIsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUM7UUFDdEMsRUFBRSxDQUFBLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFBLENBQUM7WUFDbkIsSUFBTSxLQUFLLEdBQUcsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQy9ELEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDckUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM3QyxLQUFLLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzFCLE9BQU8sQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDN0MsT0FBTyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakMsQ0FBQztJQUNGLENBQUM7SUFDRiw0QkFBQztBQUFELENBQUMsQUFoQkQsSUFnQkM7QUFmUztJQUFSLFlBQUssRUFBRTs7dURBQWtCO0FBSUY7SUFBdkIsbUJBQVksQ0FBQyxRQUFRLENBQUM7Ozs7cURBVXRCO0FBZlcscUJBQXFCO0lBRGpDLGdCQUFTLENBQUMsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFDLENBQUM7cUNBR1osaUJBQVU7R0FGdEIscUJBQXFCLENBZ0JqQztBQWhCWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmRlY2xhcmUgY29uc3QgYW5kcm9pZDphbnk7XHJcblxyXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbbnNTaGFkb3ddJ30pXHJcbmV4cG9ydCBjbGFzcyBOYXRpdmVTaGFkb3dEaXJlY3RpdmUge1xyXG5cdEBJbnB1dCgpIG5zU2hhZG93OiBzdHJpbmc7XHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZil7XHJcblx0XHRcclxuXHR9XHJcblx0QEhvc3RMaXN0ZW5lcignbG9hZGVkJykgb25Mb2FkZWQoKXtcclxuXHRcdGNvbnN0IHRuc1ZpZXcgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XHJcblx0XHRpZih0bnNWaWV3LmFuZHJvaWQpe1xyXG5cdFx0XHRjb25zdCBzaGFwZSA9IG5ldyBhbmRyb2lkLmdyYXBoaWNzLmRyYXdhYmxlLkdyYWRpZW50RHJhd2FibGUoKTtcclxuXHRcdFx0c2hhcGUuc2V0U2hhcGUoYW5kcm9pZC5ncmFwaGljcy5kcmF3YWJsZS5HcmFkaWVudERyYXdhYmxlLlJFQ1RBTkdMRSk7XHJcblx0XHRcdHNoYXBlLnNldENvbG9yKGFuZHJvaWQuZ3JhcGhpY3MuQ29sb3IuV0hJVEUpO1xyXG5cdFx0XHRzaGFwZS5zZXRDb3JuZXJSYWRpdXMoMTgpO1xyXG5cdFx0XHR0bnNWaWV3LmFuZHJvaWQuc2V0QmFja2dyb3VuZERyYXdhYmxlKHNoYXBlKTtcclxuXHRcdFx0dG5zVmlldy5hbmRyb2lkLnNldEVsZXZhdGlvbigyKTtcclxuXHRcdH1cclxuXHR9XHJcbn0iXX0=