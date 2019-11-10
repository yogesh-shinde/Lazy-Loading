import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { AdminDashComponent } from "./admin-dash/admin-dash.component";
import { AddEmployeeComponent } from "./add-employee/add-employee.component";
import { ShowEmployeeComponent } from "./show-employee/show-employee.component";

const adminrouting: Routes = [
  { path: "admindash", component: AdminDashComponent },
  { path: "addemp", component: AddEmployeeComponent },
  { path: "showemp", component: ShowEmployeeComponent }
];

@NgModule({
  declarations: [
    AdminDashComponent,
    AddEmployeeComponent,
    ShowEmployeeComponent
  ],
  imports: [CommonModule, RouterModule.forChild(adminrouting)]
})
export class AdminModule {}
