import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Credentials } from '../../data/admin';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    baseUrl: string;
    constructor(private http: HttpClient) {
        this.baseUrl = environment.url;
    }
    login(creds: Credentials) {
        return this.http.post(this.baseUrl + '/login', creds, {
            responseType: 'text'
        });
    }
}
