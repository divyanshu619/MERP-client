import { Component, OnInit } from '@angular/core';
import { Department, Patient, User } from '../../../data/admin';
import { AdminService } from '../../admin/admin.service';
import { DepartmentService } from '../../shared/services/department.service';
import { routerTransition } from '../../router.animations';
import { PatientService } from '../patient.service';

@Component({
    selector: 'app-add-patient',
    templateUrl: './add-patient.component.html',
    styleUrls: ['./add-patient.component.scss'],
    animations: [routerTransition()]
})
export class AddPatientComponent implements OnInit {
    patient: Patient = new Patient();
    departments: Array<Department>;
    doctors: Array<User>;
    receptionists: Array<User>;
    constructor(
        private adminService: AdminService,
        private departmentService: DepartmentService,
        private patientService: PatientService
    ) {}

    ngOnInit() {
        this.departmentService.getDepartments().subscribe(
            (response: any) => {
                this.departments = response;
                console.log('DEPARTMENTS', response);
            },
            (error: any) => {
                console.log(error);
            }
        );

        this.adminService.getUsersByRoleName('DOCTOR').subscribe(
            (response: any) => {
                this.doctors = response;
                console.log('DOCTORS', response);
            },
            (error: any) => {
                console.log(error);
            }
        );

        this.adminService.getUsersByRoleName('RECEPTIONIST').subscribe(
            (response: any) => {
                this.receptionists = response;
                console.log('RECEPTIONIST', response);
            },
            (error: any) => {
                console.log(error);
            }
        );
    }

    addPatient() {
        this.patientService.addPatient(this.patient).subscribe(
            (response: any) => {
                alert('Patient added successfully');
            },
            (error: any) => {
                alert('Error adding patient');
            }
        );
    }
}
