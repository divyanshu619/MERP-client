import { Injectable } from '@angular/core';
import { Patient } from '../../data/admin';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

    private baseUrl: string;
    private headers: HttpHeaders;
    constructor(private http: HttpClient) {
        this.baseUrl = environment.url;
        this.baseUrl += '/patient';
        this.headers = new HttpHeaders({
            'Authorization': localStorage.getItem('authToken')
        });
    }

    addPatient(patient: Patient) {
        return this.http.post(this.baseUrl + '/add-patient', patient, {
            headers: this.headers,
            responseType: 'text'
        });
    }
}
