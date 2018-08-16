import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../../data/admin';

@Injectable({
    providedIn: 'root'
})
export class AdminService {
    baseUrl: string;
    headers: HttpHeaders;
    constructor(private http: HttpClient) {
        this.baseUrl = environment.url;
        this.headers = new HttpHeaders({
            'Authorization': localStorage.getItem('authToken')
        });
    }

    addUser(user: User) {
        return this.http.post(this.baseUrl + '/users/sign-up', user, {
            headers: this.headers,
            responseType: 'text'
        });
    }
}
