import * as tslib_1 from "tslib";
import { PrevYearsComponent } from './prev-years/prev-years.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoggedinuserComponent } from './loggedinuser/loggedinuser.component';
import { HomeComponent } from './home/home.component';
const routes = [
    { path: '', redirectTo: 'home', pathMatch: "full" },
    { path: 'home', component: HomeComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'contact-us', component: ContactUsComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'prev_years', component: PrevYearsComponent },
    { path: 'login/user', component: LoggedinuserComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', component: NotfoundComponent }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map