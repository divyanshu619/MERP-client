import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { PageHeaderModule } from '../shared';
import { FormsModule } from '@angular/forms';
import { AdminService } from '../admin/admin.service';
import { RoleService } from '../shared/services/role.service';
import { DepartmentService } from '../shared/services/department.service';
import { PatientRoutingModule } from './patient-routing.module';

@NgModule({
  imports: [
      CommonModule,
      PageHeaderModule,
      PatientRoutingModule,
      FormsModule
  ],
    declarations: [AddPatientComponent],
    providers: [AdminService, RoleService, DepartmentService]
})
export class PatientModule { }
