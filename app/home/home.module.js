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
var short_when_pipe_1 = require("./chats/short-when.pipe");
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
            chats_component_1.ChatsComponent,
            short_when_pipe_1.ShortWhenPipe
        ],
        schemas: [
            core_1.NO_ERRORS_SCHEMA
        ]
    })
], HomeModule);
exports.HomeModule = HomeModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxnRkFBOEU7QUFDOUUsb0RBQXFFO0FBQ3JFLHVFQUE4RDtBQUU5RCw2REFBMEQ7QUFDMUQsbURBQWlEO0FBQ2pELHdEQUFzRDtBQUN0RCwyREFBeUQ7QUFDekQsMkRBQXdEO0FBcUJ4RCxJQUFhLFVBQVU7SUFBdkI7SUFBMEIsQ0FBQztJQUFELGlCQUFDO0FBQUQsQ0FBQyxBQUEzQixJQUEyQjtBQUFkLFVBQVU7SUFuQnRCLGVBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLHdDQUFrQjtZQUNsQiwrQkFBdUI7WUFDdkIsdUNBQWlCO1lBQ2pCLDZDQUFpQixDQUFDLE9BQU8sQ0FBQztnQkFDeEIsS0FBSyxFQUFFLDJCQUEyQjthQUNuQyxDQUFDO1NBQ0g7UUFDRCxZQUFZLEVBQUU7WUFDWiw4QkFBYTtZQUNiLDhCQUFhO1lBQ2IsZ0NBQWM7WUFDZCwrQkFBYTtTQUNkO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsdUJBQWdCO1NBQ2pCO0tBQ0YsQ0FBQztHQUNXLFVBQVUsQ0FBSTtBQUFkLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZSc7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBUTlNGb250SWNvbk1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZ3gtZm9udGljb24nO1xyXG5cclxuaW1wb3J0IHsgSG9tZVJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2hvbWUtcm91dGluZy5tb2R1bGUnO1xyXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9ob21lLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRhYnNDb21wb25lbnQgfSBmcm9tICcuL3RhYnMvdGFicy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDaGF0c0NvbXBvbmVudCB9IGZyb20gJy4vY2hhdHMvY2hhdHMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2hvcnRXaGVuUGlwZSB9IGZyb20gJy4vY2hhdHMvc2hvcnQtd2hlbi5waXBlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxyXG4gICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXHJcbiAgICBIb21lUm91dGluZ01vZHVsZSxcclxuICAgIFROU0ZvbnRJY29uTW9kdWxlLmZvclJvb3Qoe1xyXG4gICAgICAnbWRpJzogJ21hdGVyaWFsLWRlc2lnbi1pY29ucy5jc3MnXHJcbiAgICB9KSxcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgSG9tZUNvbXBvbmVudCxcclxuICAgIFRhYnNDb21wb25lbnQsXHJcbiAgICBDaGF0c0NvbXBvbmVudCxcclxuICAgIFNob3J0V2hlblBpcGVcclxuICBdLFxyXG4gIHNjaGVtYXM6IFtcclxuICAgIE5PX0VSUk9SU19TQ0hFTUFcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIb21lTW9kdWxlIHsgfVxyXG4iXX0=