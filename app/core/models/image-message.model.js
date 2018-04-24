"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var message_model_1 = require("./message.model");
var ImageMessage = (function (_super) {
    __extends(ImageMessage, _super);
    function ImageMessage(text, created, url, thumbnail) {
        if (text === void 0) { text = ''; }
        if (created === void 0) { created = Date.now(); }
        if (url === void 0) { url = ''; }
        if (thumbnail === void 0) { thumbnail = ''; }
        var _this = _super.call(this, text, created) || this;
        _this.url = url;
        _this.thumbnail = thumbnail;
        return _this;
    }
    /**
     * Method overriden
     * @returns String
     */
    ImageMessage.prototype.toString = function () {
        return "Photo" + _super.prototype.toString.call(this) + " " +
            ("- Url: " + this.url + " ") +
            ("- Thumbnail: " + this.thumbnail);
    };
    return ImageMessage;
}(message_model_1.Message));
exports.ImageMessage = ImageMessage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtbWVzc2FnZS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImltYWdlLW1lc3NhZ2UubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBMEM7QUFFMUM7SUFBa0MsZ0NBQU87SUFFdkMsc0JBQVksSUFBUyxFQUNULE9BQW9CLEVBQ2IsR0FBZ0IsRUFDaEIsU0FBc0I7UUFIN0IscUJBQUEsRUFBQSxTQUFTO1FBQ1Qsd0JBQUEsRUFBQSxVQUFVLElBQUksQ0FBQyxHQUFHLEVBQUU7UUFDYixvQkFBQSxFQUFBLFFBQWdCO1FBQ2hCLDBCQUFBLEVBQUEsY0FBc0I7UUFIekMsWUFJRSxrQkFBTSxJQUFJLEVBQUUsT0FBTyxDQUFDLFNBQ3JCO1FBSGtCLFNBQUcsR0FBSCxHQUFHLENBQWE7UUFDaEIsZUFBUyxHQUFULFNBQVMsQ0FBYTs7SUFFekMsQ0FBQztJQUVEOzs7T0FHRztJQUNJLCtCQUFRLEdBQWY7UUFDRSxNQUFNLENBQUMsVUFBUSxpQkFBTSxRQUFRLFdBQUUsTUFBRzthQUMzQixZQUFVLElBQUksQ0FBQyxHQUFHLE1BQUcsQ0FBQTthQUNyQixrQkFBZ0IsSUFBSSxDQUFDLFNBQVcsQ0FBQSxDQUFDO0lBQzFDLENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUFsQkQsQ0FBa0MsdUJBQU8sR0FrQnhDO0FBbEJZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4vbWVzc2FnZS5tb2RlbCc7XHJcblxyXG5leHBvcnQgY2xhc3MgSW1hZ2VNZXNzYWdlIGV4dGVuZHMgTWVzc2FnZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHRleHQgPSAnJyxcclxuICAgICAgICAgICAgICBjcmVhdGVkID0gRGF0ZS5ub3coKSxcclxuICAgICAgICAgICAgICBwdWJsaWMgdXJsOiBzdHJpbmcgPSAnJyxcclxuICAgICAgICAgICAgICBwdWJsaWMgdGh1bWJuYWlsOiBzdHJpbmcgPSAnJykge1xyXG4gICAgc3VwZXIodGV4dCwgY3JlYXRlZCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNZXRob2Qgb3ZlcnJpZGVuXHJcbiAgICogQHJldHVybnMgU3RyaW5nXHJcbiAgICovXHJcbiAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gYFBob3RvJHtzdXBlci50b1N0cmluZygpfSBgICtcclxuICAgICAgICAgICBgLSBVcmw6ICR7dGhpcy51cmx9IGAgK1xyXG4gICAgICAgICAgIGAtIFRodW1ibmFpbDogJHt0aGlzLnRodW1ibmFpbH1gO1xyXG4gIH1cclxufVxyXG4iXX0=