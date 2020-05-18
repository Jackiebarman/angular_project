import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { User } from '../user';
let LoginComponent = class LoginComponent {
    constructor(_http) {
        this._http = _http;
        this.userModel = new User('bob', 'rob@test.com', 9950480580, '12345678');
        this.verify = 0;
        // onSubmit(){
        //   //console.log(this.userModel);
        //   this._enrollmentServices.enroll(this.userModel).subscribe(
        //     data => console.log('Success',data),
        //     error => console.error('Error',error) 
        //   )
        // }
        //   onSubmit(){
        //   //console.log(this.userModel);
        //   this.enroll(this.userModel).subscribe(
        //     data => console.log('Success',data),
        //     error => console.error('Error',error) 
        //   )
        // }
        // enroll(user:User){
        //   return this._http.post<any>('http://localhost:3000/enroll',user);
        //  }
        this.clicked = 0;
    }
    geturl() {
        return "url('assets/scholar.jpg')";
    }
    getsize() {
        return "100%";
    }
    Submit() {
        this.clicked = 1;
    }
    onSubmit() {
        this._http.post('http://localhost:3000/login', this.userModel)
            .subscribe((data) => { console.log("success data received", data.EXIST); this.verify = data.EXIST; }, (error) => console.log('error in loginComp', error));
    }
    ngOnInit() {
    }
};
LoginComponent = tslib_1.__decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map