import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { LoginService } from './login.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Credentials } from '../../data/admin';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    creds: Credentials;
    constructor(public router: Router, private loginService: LoginService) {}

    ngOnInit() {
        this.creds = new Credentials();
        this.loginForm = new FormGroup({
            username: new FormControl(this.creds.username, Validators.required),
            password: new FormControl(this.creds.password, Validators.required)
        });
    }

    onLoggedin() {
        // localStorage.setItem('isLoggedin', 'true');
        this.creds = <Credentials>this.loginForm.value;
        this.loginService.login(this.creds).subscribe(
            data => {
                localStorage.setItem('isLoggedin', 'true');
                localStorage.setItem('authToken', data);
                localStorage.setItem('username', this.creds.username);
                this.router.navigateByUrl('/dashboard');
            },
            error => {
                alert('An error occured while logging in !');
            }
        );
    }
}
