import { Component, OnInit } from '@angular/core';
import { User, Role, Department } from '../../../data/admin';
import { AdminService } from '../admin.service';
import { RoleService } from '../../shared/services/role.service';
import { DepartmentService } from '../../shared/services/department.service';
import { ActivatedRoute } from '@angular/router';
import { log } from 'util';
import { routerTransition } from '../../router.animations';
import { Utils } from '../../../data/common';

@Component({
    selector: 'app-edit-user',
    templateUrl: './edit-user.component.html',
    styleUrls: ['./edit-user.component.scss'],
    animations: [routerTransition()]
})
export class EditUserComponent implements OnInit {
    userId: number;
    user: User = new User();
    roles: Array<Role>;
    departments: Array<Department>;
    utils: Utils = new Utils();
    constructor(
        private adminService: AdminService,
        private roleService: RoleService,
        private departmentService: DepartmentService,
        private activatedRoute: ActivatedRoute
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
        this.userId = this.activatedRoute.snapshot.queryParams['id'];
        this.adminService.getUserById(this.userId).subscribe(
            (response: any) => {
                this.user = response;
            },
            (error: any) => {
                console.log(error);
            }
        );
    }

    updateUser() {
        this.adminService.updateUser(this.user).subscribe(
            data => {
                alert('user udpated successfully !');
            },
            error => {
                console.log(error);
                alert('error occured while adding user');
            }
        );
        console.log(this.user);
    }
}
