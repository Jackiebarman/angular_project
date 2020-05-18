import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let ServiceNameService = class ServiceNameService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
};
ServiceNameService = tslib_1.__decorate([
    Injectable({ providedIn: 'root' })
], ServiceNameService);
export { ServiceNameService };
let EnrollmentService = class EnrollmentService {
    constructor(_http) {
        this._http = _http;
        this._url = 'http://localhost:3000/enroll';
    }
    enroll(user) {
        return this._http.post(this._url, user);
    }
};
EnrollmentService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], EnrollmentService);
export { EnrollmentService };
//# sourceMappingURL=enrollment.service.js.map