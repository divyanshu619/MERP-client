import { Component, OnInit } from '@angular/core';
import { User } from '../../../data/admin';
import { AdminService } from '../admin.service';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-view-users',
    templateUrl: './view-users.component.html',
    styleUrls: ['./view-users.component.scss'],
    animations: [routerTransition()]
})
export class ViewUsersComponent implements OnInit {
    users: Array<User>;
    constructor(private adminService: AdminService) {}

    ngOnInit() {
        this.getAllUsers();
    }

    getAllUsers() {
        this.adminService.getAllUsers().subscribe(
            (response: any) => {
                this.users = response;
                console.log(response);
            },
            (error: any) => {
                console.log(error);
            }
        );
    }

    removeUser(id: number) {
        this.adminService.removeUser(id).subscribe(
            (response: any) => {
                alert('User removed successfully');
                this.getAllUsers();
            },
            (error: any) => {
                console.log(error);
            }
        );
    }
}
