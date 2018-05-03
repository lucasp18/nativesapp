"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("../../core");
var MessagesAreaComponent = (function () {
    function MessagesAreaComponent() {
    }
    MessagesAreaComponent.prototype.ngOnInit = function () {
        this.messages = this.messages.slice(0, 50);
    };
    MessagesAreaComponent.prototype.ngAfterViewInit = function () {
    };
    MessagesAreaComponent.prototype.isContinuation = function (idx) {
        return (!this.messages[idx].sender && this.messages[idx - 1] &&
            !this.messages[idx - 1].sender) ||
            (this.messages[idx].sender && this.messages[idx - 1] &&
                this.messages[idx - 1].sender);
    };
    MessagesAreaComponent.prototype.getIcon = function (message) {
        switch (message.sent) {
            case core_2.SentStatus.NOT_SENT:
                return 'mdi-access-time';
            case core_2.SentStatus.SENT:
                return 'mdi-done';
            default:
                return 'mdi-done-all';
        }
    };
    MessagesAreaComponent.prototype.isViewed = function (message) {
        return message.sent === core_2.SentStatus.VIEWED;
    };
    return MessagesAreaComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], MessagesAreaComponent.prototype, "messages", void 0);
MessagesAreaComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "ns-messages-area",
        templateUrl: "./messages-area.component.html",
        styleUrls: ["./messages-area.component.css"]
    })
], MessagesAreaComponent);
exports.MessagesAreaComponent = MessagesAreaComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZXMtYXJlYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtZXNzYWdlcy1hcmVhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRjtBQUNoRixtQ0FBaUQ7QUFRakQsSUFBYSxxQkFBcUI7SUFBbEM7SUErQkEsQ0FBQztJQTVCQyx3Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELCtDQUFlLEdBQWY7SUFDQSxDQUFDO0lBRUQsOENBQWMsR0FBZCxVQUFlLEdBQVc7UUFDeEIsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBQyxDQUFDLENBQUM7WUFDbEQsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDOUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBQyxDQUFDLENBQUM7Z0JBQ2pELElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCx1Q0FBTyxHQUFQLFVBQVEsT0FBZ0I7UUFDdEIsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDckIsS0FBSyxpQkFBVSxDQUFDLFFBQVE7Z0JBQ3RCLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQztZQUMzQixLQUFLLGlCQUFVLENBQUMsSUFBSTtnQkFDbEIsTUFBTSxDQUFDLFVBQVUsQ0FBQztZQUNwQjtnQkFDRSxNQUFNLENBQUMsY0FBYyxDQUFDO1FBQzFCLENBQUM7SUFDSCxDQUFDO0lBRUQsd0NBQVEsR0FBUixVQUFTLE9BQWdCO1FBQ3ZCLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLGlCQUFVLENBQUMsTUFBTSxDQUFDO0lBQzVDLENBQUM7SUFDSCw0QkFBQztBQUFELENBQUMsQUEvQkQsSUErQkM7QUE5QlU7SUFBUixZQUFLLEVBQUU7O3VEQUE0QjtBQUR6QixxQkFBcUI7SUFOakMsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsa0JBQWtCO1FBQzVCLFdBQVcsRUFBRSxnQ0FBZ0M7UUFDN0MsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7S0FDN0MsQ0FBQztHQUNXLHFCQUFxQixDQStCakM7QUEvQlksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBBZnRlclZpZXdJbml0LCBJbmplY3QsIElucHV0LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBNZXNzYWdlLCBTZW50U3RhdHVzIH0gZnJvbSBcIi4uLy4uL2NvcmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6IFwibnMtbWVzc2FnZXMtYXJlYVwiLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vbWVzc2FnZXMtYXJlYS5jb21wb25lbnQuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi9tZXNzYWdlcy1hcmVhLmNvbXBvbmVudC5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VzQXJlYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgQElucHV0KCkgcHVibGljIG1lc3NhZ2VzOiBNZXNzYWdlW107XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5tZXNzYWdlcyA9IHRoaXMubWVzc2FnZXMuc2xpY2UoMCw1MCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgfVxyXG5cclxuICBpc0NvbnRpbnVhdGlvbihpZHg6IG51bWJlcikge1xyXG4gICAgcmV0dXJuICghdGhpcy5tZXNzYWdlc1tpZHhdLnNlbmRlciAmJiB0aGlzLm1lc3NhZ2VzW2lkeC0xXSAmJlxyXG4gICAgICAgICAgICAhdGhpcy5tZXNzYWdlc1tpZHgtMV0uc2VuZGVyKSB8fFxyXG4gICAgICAgICAgICh0aGlzLm1lc3NhZ2VzW2lkeF0uc2VuZGVyICYmIHRoaXMubWVzc2FnZXNbaWR4LTFdICYmXHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZXNbaWR4LTFdLnNlbmRlcik7XHJcbiAgfVxyXG5cclxuICBnZXRJY29uKG1lc3NhZ2U6IE1lc3NhZ2UpIHtcclxuICAgIHN3aXRjaCAobWVzc2FnZS5zZW50KSB7XHJcbiAgICAgIGNhc2UgU2VudFN0YXR1cy5OT1RfU0VOVDpcclxuICAgICAgICByZXR1cm4gJ21kaS1hY2Nlc3MtdGltZSc7XHJcbiAgICAgIGNhc2UgU2VudFN0YXR1cy5TRU5UOlxyXG4gICAgICAgIHJldHVybiAnbWRpLWRvbmUnO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiAnbWRpLWRvbmUtYWxsJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlzVmlld2VkKG1lc3NhZ2U6IE1lc3NhZ2UpIHtcclxuICAgIHJldHVybiBtZXNzYWdlLnNlbnQgPT09IFNlbnRTdGF0dXMuVklFV0VEO1xyXG4gIH1cclxufVxyXG4iXX0=