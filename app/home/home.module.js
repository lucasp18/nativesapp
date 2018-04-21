"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var home_routing_module_1 = require("./home-routing.module");
var home_component_1 = require("./home.component");
var tabs_component_1 = require("./tabs/tabs.component");
var chats_component_1 = require("./chats/chats.component");
var chats_service_1 = require("./chats/chats.service");
var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    core_1.NgModule({
        imports: [
            nativescript_module_1.NativeScriptModule,
            forms_1.NativeScriptFormsModule,
            home_routing_module_1.HomeRoutingModule,
            nativescript_ngx_fonticon_1.TNSFontIconModule.forRoot({
                'mdi': 'material-design-icons.css'
            }),
        ],
        declarations: [
            home_component_1.HomeComponent,
            tabs_component_1.TabsComponent,
            chats_component_1.ChatsComponent
        ],
        schemas: [
            core_1.NO_ERRORS_SCHEMA
        ],
        providers: [
            chats_service_1.ChatsService
        ]
    })
], HomeModule);
exports.HomeModule = HomeModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxnRkFBOEU7QUFDOUUsb0RBQXFFO0FBQ3JFLHVFQUE4RDtBQUU5RCw2REFBMEQ7QUFDMUQsbURBQWlEO0FBQ2pELHdEQUFzRDtBQUN0RCwyREFBeUQ7QUFDekQsdURBQXFEO0FBdUJyRCxJQUFhLFVBQVU7SUFBdkI7SUFBMEIsQ0FBQztJQUFELGlCQUFDO0FBQUQsQ0FBQyxBQUEzQixJQUEyQjtBQUFkLFVBQVU7SUFyQnRCLGVBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLHdDQUFrQjtZQUNsQiwrQkFBdUI7WUFDdkIsdUNBQWlCO1lBQ2pCLDZDQUFpQixDQUFDLE9BQU8sQ0FBQztnQkFDeEIsS0FBSyxFQUFFLDJCQUEyQjthQUNuQyxDQUFDO1NBQ0g7UUFDRCxZQUFZLEVBQUU7WUFDWiw4QkFBYTtZQUNiLDhCQUFhO1lBQ2IsZ0NBQWM7U0FDZjtRQUNELE9BQU8sRUFBRTtZQUNQLHVCQUFnQjtTQUNqQjtRQUNELFNBQVMsRUFBRTtZQUNULDRCQUFZO1NBQ2I7S0FDRixDQUFDO0dBQ1csVUFBVSxDQUFJO0FBQWQsZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlJztcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFROU0ZvbnRJY29uTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LW5neC1mb250aWNvbic7XHJcblxyXG5pbXBvcnQgeyBIb21lUm91dGluZ01vZHVsZSB9IGZyb20gJy4vaG9tZS1yb3V0aW5nLm1vZHVsZSc7XHJcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tICcuL2hvbWUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVGFic0NvbXBvbmVudCB9IGZyb20gJy4vdGFicy90YWJzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENoYXRzQ29tcG9uZW50IH0gZnJvbSAnLi9jaGF0cy9jaGF0cy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDaGF0c1NlcnZpY2UgfSBmcm9tICcuL2NoYXRzL2NoYXRzLnNlcnZpY2UnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXHJcbiAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcclxuICAgIEhvbWVSb3V0aW5nTW9kdWxlLFxyXG4gICAgVE5TRm9udEljb25Nb2R1bGUuZm9yUm9vdCh7XHJcbiAgICAgICdtZGknOiAnbWF0ZXJpYWwtZGVzaWduLWljb25zLmNzcydcclxuICAgIH0pLFxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBIb21lQ29tcG9uZW50LFxyXG4gICAgVGFic0NvbXBvbmVudCxcclxuICAgIENoYXRzQ29tcG9uZW50XHJcbiAgXSxcclxuICBzY2hlbWFzOiBbXHJcbiAgICBOT19FUlJPUlNfU0NIRU1BXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIENoYXRzU2VydmljZVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWVNb2R1bGUgeyB9XHJcbiJdfQ==