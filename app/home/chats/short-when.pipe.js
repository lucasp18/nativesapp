"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var platform_1 = require("platform");
var parse = require("date-fns/parse");
var isToday = require("date-fns/is_today");
var isYesterday = require("date-fns/is_yesterday");
var ShortWhenPipe = (function () {
    function ShortWhenPipe() {
    }
    ShortWhenPipe.prototype.transform = function (value) {
        var language = platform_1.device.language;
        if (platform_1.device.region) {
            language += "-" + platform_1.device.region;
        }
        var datePipe = new common_1.DatePipe(language);
        var parsedDate = parse(value);
        if (isToday(parsedDate)) {
            return datePipe.transform(parsedDate, 'shortTime');
        }
        if (isYesterday(parsedDate)) {
            return 'yesterday';
        }
        return datePipe.transform(parsedDate, 'shortDate');
    };
    return ShortWhenPipe;
}());
ShortWhenPipe = __decorate([
    core_1.Pipe({
        name: 'shortWhen',
        pure: true
    })
], ShortWhenPipe);
exports.ShortWhenPipe = ShortWhenPipe;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcnQtd2hlbi5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2hvcnQtd2hlbi5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW9EO0FBQ3BELDBDQUEyQztBQUMzQyxxQ0FBa0M7QUFFbEMsc0NBQXdDO0FBQ3hDLDJDQUE2QztBQUM3QyxtREFBcUQ7QUFNckQsSUFBYSxhQUFhO0lBQTFCO0lBb0JBLENBQUM7SUFsQkMsaUNBQVMsR0FBVCxVQUFVLEtBQTZCO1FBQ3JDLElBQUksUUFBUSxHQUFHLGlCQUFNLENBQUMsUUFBUSxDQUFDO1FBQy9CLEVBQUUsQ0FBQyxDQUFDLGlCQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNsQixRQUFRLElBQUksTUFBSSxpQkFBTSxDQUFDLE1BQVEsQ0FBQztRQUNsQyxDQUFDO1FBQ0QsSUFBTSxRQUFRLEdBQUcsSUFBSSxpQkFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hDLElBQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVoQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLE1BQU0sQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUNyRCxDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QixNQUFNLENBQUMsV0FBVyxDQUFDO1FBQ3JCLENBQUM7UUFFRCxNQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQyxBQXBCRCxJQW9CQztBQXBCWSxhQUFhO0lBSnpCLFdBQUksQ0FBQztRQUNKLElBQUksRUFBRSxXQUFXO1FBQ2pCLElBQUksRUFBRSxJQUFJO0tBQ1gsQ0FBQztHQUNXLGFBQWEsQ0FvQnpCO0FBcEJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEYXRlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IGRldmljZSB9IGZyb20gJ3BsYXRmb3JtJztcclxuXHJcbmltcG9ydCAqIGFzIHBhcnNlIGZyb20gJ2RhdGUtZm5zL3BhcnNlJztcclxuaW1wb3J0ICogYXMgaXNUb2RheSBmcm9tICdkYXRlLWZucy9pc190b2RheSc7XHJcbmltcG9ydCAqIGFzIGlzWWVzdGVyZGF5IGZyb20gJ2RhdGUtZm5zL2lzX3llc3RlcmRheSc7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ3Nob3J0V2hlbicsXHJcbiAgcHVyZTogdHJ1ZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2hvcnRXaGVuUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG5cclxuICB0cmFuc2Zvcm0odmFsdWU6IG51bWJlciB8IHN0cmluZyB8IERhdGUpOiBzdHJpbmcge1xyXG4gICAgbGV0IGxhbmd1YWdlID0gZGV2aWNlLmxhbmd1YWdlO1xyXG4gICAgaWYgKGRldmljZS5yZWdpb24pIHtcclxuICAgICAgbGFuZ3VhZ2UgKz0gYC0ke2RldmljZS5yZWdpb259YDtcclxuICAgIH1cclxuICAgIGNvbnN0IGRhdGVQaXBlID0gbmV3IERhdGVQaXBlKGxhbmd1YWdlKTtcclxuICAgIGNvbnN0IHBhcnNlZERhdGUgPSBwYXJzZSh2YWx1ZSk7XHJcblxyXG4gICAgaWYgKGlzVG9kYXkocGFyc2VkRGF0ZSkpIHtcclxuICAgICAgcmV0dXJuIGRhdGVQaXBlLnRyYW5zZm9ybShwYXJzZWREYXRlLCAnc2hvcnRUaW1lJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzWWVzdGVyZGF5KHBhcnNlZERhdGUpKSB7XHJcbiAgICAgIHJldHVybiAneWVzdGVyZGF5JztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGF0ZVBpcGUudHJhbnNmb3JtKHBhcnNlZERhdGUsICdzaG9ydERhdGUnKTtcclxuICB9XHJcbn1cclxuIl19