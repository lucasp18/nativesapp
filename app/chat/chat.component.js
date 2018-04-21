"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ChatComponent = (function () {
    function ChatComponent(route) {
        this.route = route;
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.chatIndex = params['index'];
        });
        this.route.queryParams.subscribe(function (params) { return _this.name = params['name']; });
    };
    return ChatComponent;
}());
ChatComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'ns-chat',
        templateUrl: './chat.component.html',
        styleUrls: ['./chat.component.css'],
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute])
], ChatComponent);
exports.ChatComponent = ChatComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGF0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBaUQ7QUFRakQsSUFBYSxhQUFhO0lBR3hCLHVCQUFvQixLQUFxQjtRQUFyQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtJQUV6QyxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUFBLGlCQUtDO1FBSkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTTtZQUNoQyxLQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBRSxVQUFBLE1BQU0sSUFBSSxPQUFBLEtBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUExQixDQUEwQixDQUFFLENBQUM7SUFDM0UsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQyxBQWJELElBYUM7QUFiWSxhQUFhO0lBTnpCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLFNBQVM7UUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtRQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztLQUNwQyxDQUFDO3FDQUkyQix1QkFBYztHQUg5QixhQUFhLENBYXpCO0FBYlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gIHNlbGVjdG9yOiAnbnMtY2hhdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NoYXQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NoYXQuY29tcG9uZW50LmNzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hhdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgcHVibGljIGNoYXRJbmRleDpudW1iZXI7XHJcbiAgcHVibGljIG5hbWU6c3RyaW5nO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcbiAgICAgIHRoaXMuY2hhdEluZGV4ID0gcGFyYW1zWydpbmRleCddO1xyXG4gICAgfSlcclxuICAgIHRoaXMucm91dGUucXVlcnlQYXJhbXMuc3Vic2NyaWJlKCBwYXJhbXMgPT4gdGhpcy5uYW1lID0gcGFyYW1zWyduYW1lJ10gKTtcclxuICB9XHJcbn1cclxuIl19