import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../../data/admin';

@Injectable({
    providedIn: 'root'
})
export class AdminService {
    private baseUrl: string;
    private headers: HttpHeaders;
    constructor(private http: HttpClient) {
        this.baseUrl = environment.url;
        this.baseUrl += '/users';
        this.headers = new HttpHeaders({
            'Authorization': localStorage.getItem('authToken')
        });
    }

    addUser(user: User) {
        return this.http.post(this.baseUrl + '/sign-up', user, {
            headers: this.headers,
            responseType: 'text'
        });
    }

    getUsersByRoleName(roleName: string) {
        const url = this.baseUrl + '/get-users-by-role?roleName=' + roleName;
        return this.http.get(url, {
            headers: this.headers
        });
    }

    getAllUsers() {
        const url = this.baseUrl + '/get-users';
        return this.http.get(url, {
            headers: this.headers
        });
    }

    getUserById(id: number) {
        const url = this.baseUrl + '/get-user-by-id?id=' + id;
        return this.http.get(url, {
            headers: this.headers
        });
    }

    updateUser(user: User) {
        const url = this.baseUrl + '/update-user';
        return this.http.post(url, user, {
            headers: this.headers,
            responseType: 'text'
        });
    }

    removeUser(id: number) {
        const url = this.baseUrl + '/remove-user?id=' + id;
        return this.http.get(url, {
            headers: this.headers,
            responseType: 'text'
        });
    }
}
