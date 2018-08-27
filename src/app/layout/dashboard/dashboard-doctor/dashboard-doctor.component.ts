import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
    selector: 'app-dashboard-doctor',
    templateUrl: './dashboard-doctor.component.html',
    styleUrls: ['./dashboard-doctor.component.scss'],
    animations: [routerTransition()]
})
export class DashboardDoctorComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
