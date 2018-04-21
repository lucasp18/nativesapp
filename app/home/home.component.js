"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var HomeComponent = (function () {
    function HomeComponent(platform) {
        this.platform = platform;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'ns-home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.css']
    }),
    __param(0, core_1.Inject('platform')),
    __metadata("design:paramtypes", [Object])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwRDtBQVExRCxJQUFhLGFBQWE7SUFDeEIsdUJBQzZCLFFBQVE7UUFBUixhQUFRLEdBQVIsUUFBUSxDQUFBO0lBQ2xDLENBQUM7SUFFSixnQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQyxBQVBELElBT0M7QUFQWSxhQUFhO0lBTnpCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLFNBQVM7UUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtRQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztLQUN0QyxDQUFDO0lBR0csV0FBQSxhQUFNLENBQUMsVUFBVSxDQUFDLENBQUE7O0dBRlYsYUFBYSxDQU96QjtBQVBZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6ICducy1ob21lJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9ob21lLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2hvbWUuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBJbmplY3QoJ3BsYXRmb3JtJykgcHVibGljIHBsYXRmb3JtXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICB9XHJcbn1cclxuIl19