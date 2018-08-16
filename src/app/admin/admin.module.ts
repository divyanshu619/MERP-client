import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddUserComponent } from './add-user/add-user.component';
import { PageHeaderModule } from '../shared';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminService } from './admin.service';

@NgModule({
    imports: [CommonModule, AdminRoutingModule, PageHeaderModule, ReactiveFormsModule],
    declarations: [AddUserComponent],
    providers: [AdminService]
})
export class AdminModule {}
