import * as tslib_1 from "tslib";
import { EnrollmentService } from './enrollment.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { NotfoundComponent } from './notfound/notfound.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PrevYearsComponent } from './prev-years/prev-years.component';
import { LoggedinuserComponent } from './loggedinuser/loggedinuser.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            AppComponent,
            RegisterComponent,
            LoginComponent,
            NotfoundComponent,
            ContactUsComponent,
            PrevYearsComponent,
            LoggedinuserComponent,
            HeaderComponent,
            HomeComponent
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            FormsModule,
            HttpClientModule
        ],
        providers: [EnrollmentService],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map