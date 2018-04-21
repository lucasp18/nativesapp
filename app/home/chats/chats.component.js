"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var chats_service_1 = require("./chats.service");
var ChatsComponent = (function () {
    function ChatsComponent(chatsService, routerExtensions) {
        this.routerExtensions = routerExtensions;
        this.chats = [];
        this.chats = chatsService.chats;
    }
    ChatsComponent.prototype.ngOnInit = function () {
    };
    ChatsComponent.prototype.goToChat = function (args) {
        var extras = {
            queryParams: {
                name: this.chats[args.index].contact.name
            }
        };
        this.routerExtensions.navigate(['/chat', args.index], extras);
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
    __metadata("design:paramtypes", [chats_service_1.ChatsService,
        router_1.RouterExtensions])
], ChatsComponent);
exports.ChatsComponent = ChatsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2hhdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHNEQUErRDtBQUcvRCxpREFBK0M7QUFRL0MsSUFBYSxjQUFjO0lBRXpCLHdCQUNFLFlBQTBCLEVBQ2xCLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBSHJDLFVBQUssR0FBRyxFQUFFLENBQUM7UUFLaEIsSUFBSSxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxpQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVELGlDQUFRLEdBQVIsVUFBUyxJQUFJO1FBQ1gsSUFBTSxNQUFNLEdBQW9CO1lBQzVCLFdBQVcsRUFBRTtnQkFDWCxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUk7YUFFMUM7U0FDSixDQUFDO1FBRUYsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsTUFBTSxDQUFFLENBQUM7SUFFbEUsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQXZCRCxJQXVCQztBQXZCWSxjQUFjO0lBTjFCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsV0FBVyxFQUFFLHdCQUF3QjtRQUNyQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztLQUNyQyxDQUFDO3FDQUlnQiw0QkFBWTtRQUNBLHlCQUFnQjtHQUpqQyxjQUFjLENBdUIxQjtBQXZCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uRXh0cmFzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IENoYXRzU2VydmljZSB9IGZyb20gJy4vY2hhdHMuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAnbnMtY2hhdHMnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGF0cy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY2hhdHMuY29tcG9uZW50LmNzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hhdHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHB1YmxpYyBjaGF0cyA9IFtdO1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgY2hhdHNTZXJ2aWNlOiBDaGF0c1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnNcclxuICApIHtcclxuICAgIHRoaXMuY2hhdHMgPSBjaGF0c1NlcnZpY2UuY2hhdHM7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICB9XHJcblxyXG4gIGdvVG9DaGF0KGFyZ3MpIHtcclxuICAgIGNvbnN0IGV4dHJhczpOYXZpZ2F0aW9uRXh0cmFzID0ge1xyXG4gICAgICAgIHF1ZXJ5UGFyYW1zIDp7XHJcbiAgICAgICAgICBuYW1lOiB0aGlzLmNoYXRzW2FyZ3MuaW5kZXhdLmNvbnRhY3QubmFtZVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbICcvY2hhdCcsIGFyZ3MuaW5kZXhdLCBleHRyYXMgKTtcclxuXHJcbiAgfVxyXG59XHJcbiJdfQ==