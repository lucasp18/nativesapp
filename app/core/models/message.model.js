"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Message = (function () {
    function Message() {
        this.text = '';
        this.created = Date.now();
    }
    Message.prototype.toString = function () {
        var _a = this, created = _a.created, text = _a.text;
        return "Message created at: " + created + " - Text: " + text;
    };
    return Message;
}());
exports.Message = Message;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1lc3NhZ2UubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFJQTtJQUFBO1FBRVMsU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUdULFlBQU8sR0FBVyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFPL0MsQ0FBQztJQUpRLDBCQUFRLEdBQWY7UUFDUSxJQUFBLFNBQXdCLEVBQXRCLG9CQUFPLEVBQUUsY0FBSSxDQUFVO1FBQy9CLE1BQU0sQ0FBQyx5QkFBdUIsT0FBTyxpQkFBWSxJQUFNLENBQUM7SUFDMUQsQ0FBQztJQUNILGNBQUM7QUFBRCxDQUFDLEFBWkQsSUFZQztBQVpZLDBCQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhdCB9IGZyb20gJy4vY2hhdC5tb2RlbCc7XHJcbmltcG9ydCB7IENvbnRhY3QgfSBmcm9tICcuL2NvbnRhY3QubW9kZWwnO1xyXG5pbXBvcnQgeyBTZW50U3RhdHVzIH0gZnJvbSAnLi9zZW50LXN0YXR1cy5tb2RlbCc7XHJcblxyXG5leHBvcnQgY2xhc3MgTWVzc2FnZSB7XHJcbiAgcHVibGljIGlkPzogbnVtYmVyO1xyXG4gIHB1YmxpYyB0ZXh0OiBzdHJpbmcgPSAnJztcclxuICBwdWJsaWMgY2hhdDogQ2hhdDtcclxuICBwdWJsaWMgc2VuZGVyOiBDb250YWN0O1xyXG4gIHB1YmxpYyByZWFkb25seSBjcmVhdGVkOiBudW1iZXIgPSBEYXRlLm5vdygpO1xyXG4gIHB1YmxpYyBzZW50OiBTZW50U3RhdHVzO1xyXG5cclxuICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IHsgY3JlYXRlZCwgdGV4dCB9ID0gdGhpcztcclxuICAgIHJldHVybiBgTWVzc2FnZSBjcmVhdGVkIGF0OiAke2NyZWF0ZWR9IC0gVGV4dDogJHt0ZXh0fWA7XHJcbiAgfVxyXG59XHJcbiJdfQ==