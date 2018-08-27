import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
    selector: 'app-dashboard-admin',
    templateUrl: './dashboard-admin.component.html',
    styleUrls: ['./dashboard-admin.component.scss'],
    animations: [routerTransition()]
})
export class DashboardAdminComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
