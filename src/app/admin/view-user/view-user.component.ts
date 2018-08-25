import { Component, OnInit } from '@angular/core';
import { User } from '../../../data/admin';
import { AdminService } from '../admin.service';
import { ActivatedRoute } from '@angular/router';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-view-user',
    templateUrl: './view-user.component.html',
    styleUrls: ['./view-user.component.scss'],
    animations: [routerTransition()]
})
export class ViewUserComponent implements OnInit {
    userId: number;
    user: User = new User();
    constructor(private adminService: AdminService, private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
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
}
