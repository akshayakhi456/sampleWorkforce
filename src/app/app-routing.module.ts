import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AddEmployeeComponent } from './component/add-employee/add-employee.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { EmployeeDetailComponent } from './component/employee-detail/employee-detail.component';
import { ListEmployeeComponent } from './component/list-employee/list-employee.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, children:[
    { path: 'add', component: AddEmployeeComponent, data: { title: 'Add Employee'} },
    { path: 'list', component: ListEmployeeComponent, data: { title: 'List Employee'} },
    { path: 'details/:id', component: EmployeeDetailComponent, data: { title: 'List Employee'} },
  ] },
  { path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
