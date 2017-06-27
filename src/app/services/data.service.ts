import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Injectable()
export class DataService {
    constructor(private http: Http) { }

    authenticate(data: any) {
        const dt = `grant_type=password&username=${data.username}&password=${data.password}`;
        const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        const options = new RequestOptions({ headers: headers });
        return this.http
            .post(`${environment.serviceUrl}/authenticate`, dt, options)
            .map((res: Response) => res.json());
    }
    getOptions(): RequestOptions {
        const token = localStorage.getItem('macaw.token');
        const headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', `Bearer ${token}`);
        const options = new RequestOptions({ headers: headers });
        return options;
    }
    // Employee
    getEmployeeList() {
        return this.http
            .get(`${environment.serviceUrl}/employee`, this.getOptions())
            .map((res: Response) => res.json());
    }
    
}
