import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable()
export class DataService {
    constructor(private http: Http,private router: Router) { }

    authenticate(data: any) {
        const dt = `grant_type=password&username=${data.username}&password=${data.password}`;
        const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        const options = new RequestOptions({ headers: headers });

        return this.http
            .post(`${environment.serviceUrl}v1/authenticate/user`, dt, options)
            .map((res: Response) => res.json());
    }
    getOptions(): RequestOptions {
        const token = localStorage.getItem('macaw.token');
        console.log(token);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', `Bearer ${token}`);
        const options = new RequestOptions({ headers: headers });
        return options;
    }
    verifyAuth(httpResponse: any){
        httpResponse.subscribe( (data) => console.log(data),
            (err) => {
                if(err.status == 401){
                    localStorage.removeItem('macaw.token');
                    localStorage.removeItem('macaw.user');
                    localStorage.clear();
                    this.router.navigateByUrl('/');
                }
            });

            return httpResponse;
    }
    // Employee
    getProductList() {
        return this.verifyAuth(this.http
            .get(`${environment.serviceUrl}v1/get/products`, this.getOptions())
            .map((res: Response) => res.json()));
    }
    

    
}
