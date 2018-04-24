"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var application = require("application");
var TabsComponent = (function () {
    function TabsComponent(platform, changeDetectorRef) {
        this.platform = platform;
        this.changeDetectorRef = changeDetectorRef;
    }
    TabsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selectedIndex = this.platform.isAndroid ? 1 : 3;
        if (this.platform.isAndroid) {
            application.android.on(application.AndroidApplication.activityBackPressedEvent, function (args) {
                if (_this.selectedIndex !== 1) {
                    _this.selectedIndex = 1;
                    args.cancel = true;
                    _this.changeDetectorRef.detectChanges();
                }
            });
        }
    };
    return TabsComponent;
}());
TabsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'ns-tabs',
        templateUrl: './tabs.component.html',
        styleUrls: ['./tabs.component.css']
    }),
    __param(0, core_1.Inject('platform')),
    __metadata("design:paramtypes", [Object, core_1.ChangeDetectorRef])
], TabsComponent);
exports.TabsComponent = TabsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YWJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUE2RTtBQUM3RSx5Q0FBMkM7QUFRM0MsSUFBYSxhQUFhO0lBRXhCLHVCQUM2QixRQUFRLEVBQzNCLGlCQUFtQztRQURoQixhQUFRLEdBQVIsUUFBUSxDQUFBO1FBQzNCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7SUFDMUMsQ0FBQztJQUVKLGdDQUFRLEdBQVI7UUFBQSxpQkFnQkM7UUFmQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFdEQsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQSxDQUFDO1lBQzNCLFdBQVcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUNyQixXQUFXLENBQUMsa0JBQWtCLENBQUMsd0JBQXdCLEVBQ3ZELFVBQUMsSUFBUTtnQkFDUixFQUFFLENBQUEsQ0FBQyxLQUFJLENBQUMsYUFBYSxLQUFLLENBQUMsQ0FBQyxDQUFBLENBQUM7b0JBQzVCLEtBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO29CQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztvQkFDbkIsS0FBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUN4QyxDQUFDO1lBQ0YsQ0FBQyxDQUNELENBQUM7UUFDSCxDQUFDO0lBRUYsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQyxBQXhCRCxJQXdCQztBQXhCWSxhQUFhO0lBTnpCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLFNBQVM7UUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtRQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztLQUN0QyxDQUFDO0lBSUcsV0FBQSxhQUFNLENBQUMsVUFBVSxDQUFDLENBQUE7NkNBQ08sd0JBQWlCO0dBSmxDLGFBQWEsQ0F3QnpCO0FBeEJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgYXBwbGljYXRpb24gZnJvbSAnYXBwbGljYXRpb24nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6ICducy10YWJzJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi90YWJzLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL3RhYnMuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYWJzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBwdWJsaWMgc2VsZWN0ZWRJbmRleDogbnVtYmVyO1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgQEluamVjdCgncGxhdGZvcm0nKSBwdWJsaWMgcGxhdGZvcm0sXHJcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOkNoYW5nZURldGVjdG9yUmVmXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IHRoaXMucGxhdGZvcm0uaXNBbmRyb2lkID8gMSA6IDM7XHJcbiAgXHRcclxuICBcdGlmKHRoaXMucGxhdGZvcm0uaXNBbmRyb2lkKXtcclxuICBcdFx0YXBwbGljYXRpb24uYW5kcm9pZC5vbihcclxuICBcdFx0XHRhcHBsaWNhdGlvbi5BbmRyb2lkQXBwbGljYXRpb24uYWN0aXZpdHlCYWNrUHJlc3NlZEV2ZW50LCBcclxuICBcdFx0XHQoYXJnczphbnkpID0+IHtcclxuICBcdFx0XHRcdGlmKHRoaXMuc2VsZWN0ZWRJbmRleCAhPT0gMSl7XHJcbiAgXHRcdFx0XHRcdHRoaXMuc2VsZWN0ZWRJbmRleCA9IDE7XHJcbiAgXHRcdFx0XHRcdGFyZ3MuY2FuY2VsID0gdHJ1ZTtcclxuICBcdFx0XHRcdFx0dGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgXHRcdFx0XHR9XHJcbiAgXHRcdFx0fVxyXG4gIFx0XHQpO1xyXG4gIFx0fVxyXG5cclxuICB9XHJcbn1cclxuIl19