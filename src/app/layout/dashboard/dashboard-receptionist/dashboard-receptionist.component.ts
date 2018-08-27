import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
    selector: 'app-dashboard-receptionist',
    templateUrl: './dashboard-receptionist.component.html',
    styleUrls: ['./dashboard-receptionist.component.scss'],
    animations: [routerTransition()]
})
export class DashboardReceptionistComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
