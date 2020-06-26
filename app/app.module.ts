import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { HttpClientModule } from '@angular/common/http';
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TNSFontIconModule } from 'nativescript-ngx-fonticon';

import { DrawerComponent } from "./shared/drawer/drawer.component";
import { MenuComponent } from './menu/menu.component';
import { DishService } from './services/dish.service';
import { ProcessHTTPMsgService } from './services/process-httpmsg.service';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { PromotionService } from './services/promotion.service';
import { LeaderService } from './services/leader.service';
import { FavoriteService } from './services/favorite.service';


import { baseURL } from './shared/baseurl';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptHttpModule,
        HttpClientModule,
        NativeScriptUISideDrawerModule,
        TNSFontIconModule.forRoot({
            'fa': './fonts/font-awesome.min.css'})
    ],
    declarations: [
        AppComponent,
        MenuComponent,
        DishdetailComponent,
        DrawerComponent,
        HomeComponent,
        AboutComponent,
        ContactComponent
    ],
    providers: [
        {provide: 'baseURL', useValue: baseURL},
        DishService,
        PromotionService,
        LeaderService,
        ProcessHTTPMsgService,
        FavoriteService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
