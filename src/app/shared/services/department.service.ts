import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

    private baseUrl: string;
    private headers: HttpHeaders;
    constructor(private http: HttpClient) {
        this.baseUrl = environment.url;
        this.baseUrl += '/department';
        this.headers = new HttpHeaders({
            'Authorization': localStorage.getItem('authToken')
        });
    }

    getDepartments() {
        return this.http.get(this.baseUrl + '/get-all-departments', {
            headers: this.headers
        });
    }
}
