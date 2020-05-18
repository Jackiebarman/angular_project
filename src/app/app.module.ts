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
import { ProfileComponent } from './profile/profile.component';
import { RulesComponent } from './rules/rules.component';
import { ExamComponent } from './exam/exam.component';
import { UsersService } from './services/users.service';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { EasyComponent } from './easy/easy.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    NotfoundComponent,
    ContactUsComponent,
    PrevYearsComponent,
    LoggedinuserComponent,
    HeaderComponent,
    HomeComponent,
    ProfileComponent,
    RulesComponent,
    ExamComponent,
    StudentlistComponent,
    EasyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ], 
  providers: [EnrollmentService,UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
