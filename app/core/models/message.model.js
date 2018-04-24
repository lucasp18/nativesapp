"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Message = (function () {
    function Message(text, created) {
        if (text === void 0) { text = ''; }
        if (created === void 0) { created = Date.now(); }
        this.text = text;
        this.created = created;
    }
    Message.prototype.toString = function () {
        var _a = this, created = _a.created, text = _a.text;
        return "Message created at: " + created + " - Text: " + text;
    };
    return Message;
}());
exports.Message = Message;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1lc3NhZ2UubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtJQUNFLGlCQUFtQixJQUFpQixFQUNSLE9BQTRCO1FBRHJDLHFCQUFBLEVBQUEsU0FBaUI7UUFDUix3QkFBQSxFQUFBLFVBQWtCLElBQUksQ0FBQyxHQUFHLEVBQUU7UUFEckMsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUNSLFlBQU8sR0FBUCxPQUFPLENBQXFCO0lBQ3hELENBQUM7SUFDTSwwQkFBUSxHQUFmO1FBQ1EsSUFBQSxTQUF3QixFQUF0QixvQkFBTyxFQUFFLGNBQUksQ0FBVTtRQUMvQixNQUFNLENBQUMseUJBQXVCLE9BQU8saUJBQVksSUFBTSxDQUFDO0lBQzFELENBQUM7SUFDSCxjQUFDO0FBQUQsQ0FBQyxBQVJELElBUUM7QUFSWSwwQkFBTyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBNZXNzYWdlIHtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgdGV4dDogc3RyaW5nID0gJycsXHJcbiAgICAgICAgICAgICAgcHVibGljIHJlYWRvbmx5IGNyZWF0ZWQ6IG51bWJlciA9IERhdGUubm93KCkpIHtcclxuICB9XHJcbiAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCB7IGNyZWF0ZWQsIHRleHQgfSA9IHRoaXM7XHJcbiAgICByZXR1cm4gYE1lc3NhZ2UgY3JlYXRlZCBhdDogJHtjcmVhdGVkfSAtIFRleHQ6ICR7dGV4dH1gO1xyXG4gIH1cclxufVxyXG4iXX0=