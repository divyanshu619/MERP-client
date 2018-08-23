import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

    private baseUrl: string;
    private headers: HttpHeaders;
    constructor(private http: HttpClient) {
        this.baseUrl = environment.url;
        this.baseUrl += '/roles';
        this.headers = new HttpHeaders({
            'Authorization': localStorage.getItem('authToken')
        });
    }

    getRoles() {
        return this.http.get(this.baseUrl + '/get-all-roles', {
            headers: this.headers
        });
    }
}
