import * as tslib_1 from "tslib";
import { User } from './../user';
import { Component } from '@angular/core';
let RegisterComponent = class RegisterComponent {
    constructor(_http) {
        this._http = _http;
        this.userModel = new User('bob', 'rob@test.com', 9950480580, '12345678');
        this.exist = false;
        this.submitted = false;
    }
    geturl() {
        return "url('assets/.jpg')";
    }
    getsize() {
        return "100%";
    }
    onSubmit() {
        this.exist = false;
        this._http.post('http://localhost:3000/register', this.userModel)
            .subscribe((data) => { console.log("registration successful"); this.submitted = true; }, (error) => this.exist = true);
    }
    ngOnInit() {
    }
};
RegisterComponent = tslib_1.__decorate([
    Component({
        selector: 'app-register',
        templateUrl: './register.component.html',
        styleUrls: ['./register.component.css']
    })
], RegisterComponent);
export { RegisterComponent };
//# sourceMappingURL=register.component.js.map