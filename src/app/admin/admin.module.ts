import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddUserComponent } from './add-user/add-user.component';
import { PageHeaderModule } from '../shared';
import { FormsModule } from '@angular/forms';
import { AdminService } from './admin.service';
import { RoleService } from '../shared/services/role.service';
import { DepartmentService } from '../shared/services/department.service';

@NgModule({
    imports: [CommonModule, AdminRoutingModule, PageHeaderModule, FormsModule],
    declarations: [AddUserComponent],
    providers: [AdminService, RoleService, DepartmentService]
})
export class AdminModule {}
