import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User, Role, Department } from '../../../data/admin';
import { AdminService } from '../admin.service';
import { RoleService } from '../../shared/services/role.service';
import { DepartmentService } from '../../shared/services/department.service';

@Component({
    selector: 'app-add-user',
    templateUrl: './add-user.component.html',
    styleUrls: ['./add-user.component.scss'],
    animations: [routerTransition()]
})
export class AddUserComponent implements OnInit {
    user: User = new User();
    roles: Array<Role>;
    departments: Array<Department>;
    constructor(
        private adminService: AdminService,
        private roleService: RoleService,
        private departmentService: DepartmentService
    ) {}
    ngOnInit() {
        this.roleService.getRoles().subscribe(
            (response: any) => {
                this.roles = response;
                console.log('ROLES', response);
            },
            (error: any) => {
                console.log(error);
            }
        );
        this.departmentService.getDepartments().subscribe(
            (response: any) => {
                this.departments = response;
                console.log('DEPARTMENTS', response);
            },
            (error: any) => {
                console.log(error);
            }
        );
    }

    registerUser() {
        this.adminService.addUser(this.user).subscribe(
            data => {
                alert('user added successfully !');
            },
            error => {
                console.log(error);
                alert('error occured while adding user');
            }
        );
        console.log(this.user);
    }
}
