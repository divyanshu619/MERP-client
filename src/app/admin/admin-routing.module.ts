import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ViewUserComponent } from './view-user/view-user.component';

const routes: Routes = [
    { path: 'add-user', component: AddUserComponent },
    { path: 'view-users', component: ViewUsersComponent },
    { path: 'edit-user', component: EditUserComponent },
    { path: 'view-user', component: ViewUserComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {}
