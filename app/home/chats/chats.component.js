"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var chats_service_1 = require("./chats.service");
var ChatsComponent = (function () {
    function ChatsComponent(chatsService) {
        this.chats = [];
        this.chats = chatsService.chats;
    }
    ChatsComponent.prototype.ngOnInit = function () {
    };
    return ChatsComponent;
}());
ChatsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'ns-chats',
        templateUrl: './chats.component.html',
        styleUrls: ['./chats.component.css'],
    }),
    __metadata("design:paramtypes", [chats_service_1.ChatsService])
], ChatsComponent);
exports.ChatsComponent = ChatsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2hhdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELGlEQUErQztBQVEvQyxJQUFhLGNBQWM7SUFFekIsd0JBQVksWUFBMEI7UUFEL0IsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUVoQixJQUFJLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUM7SUFDbEMsQ0FBQztJQUVELGlDQUFRLEdBQVI7SUFDQSxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBUkQsSUFRQztBQVJZLGNBQWM7SUFOMUIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsVUFBVTtRQUNwQixXQUFXLEVBQUUsd0JBQXdCO1FBQ3JDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO0tBQ3JDLENBQUM7cUNBRzBCLDRCQUFZO0dBRjNCLGNBQWMsQ0FRMUI7QUFSWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBDaGF0c1NlcnZpY2UgfSBmcm9tICcuL2NoYXRzLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ25zLWNoYXRzJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY2hhdHMuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NoYXRzLmNvbXBvbmVudC5jc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIENoYXRzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBwdWJsaWMgY2hhdHMgPSBbXTtcclxuICBjb25zdHJ1Y3RvcihjaGF0c1NlcnZpY2U6IENoYXRzU2VydmljZSkge1xyXG4gICAgdGhpcy5jaGF0cyA9IGNoYXRzU2VydmljZS5jaGF0cztcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gIH1cclxufVxyXG4iXX0=