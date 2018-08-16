import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../../../data/admin';
import { AdminService } from '../admin.service';

@Component({
    selector: 'app-add-user',
    templateUrl: './add-user.component.html',
    styleUrls: ['./add-user.component.scss'],
    animations: [routerTransition()]
})
export class AddUserComponent implements OnInit {
    userFormGroup: FormGroup;
    constructor(private adminService: AdminService) {}
    ngOnInit() {
        this.creatUserFormGroup();
    }
    creatUserFormGroup() {
        this.userFormGroup = new FormGroup({
            name: new FormControl('', Validators.required),
            username: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required),
            email: new FormControl('', Validators.email),
            mobileNo: new FormControl(''),
            dateOfBirth: new FormControl(''),
            dateOfJoining: new FormControl(''),
            role: new FormControl('')
        });
    }

    registerUser() {
        console.log(this.userFormGroup.value);
        const user: User = <User>this.userFormGroup.value;
        this.adminService.addUser(user).subscribe(
            data => {
                alert('user added successfully !');
            },
            error => {
                console.log(error);
                alert('error occured while adding user');
            }
        );
        console.log(user);
    }
}
