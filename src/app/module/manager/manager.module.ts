import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ManagerDashComponent } from "./manager-dash/manager-dash.component";
import { RouterModule, Routes } from "@angular/router";
import { ShowEmployeeComponent } from "./show-employee/show-employee.component";

const managerrouting: Routes = [
  { path: "managerdash", component: ManagerDashComponent },
  { path: "showemp", component: ShowEmployeeComponent }
];

@NgModule({
  declarations: [ManagerDashComponent, ShowEmployeeComponent],
  imports: [CommonModule, RouterModule.forChild(managerrouting)]
})
export class ManagerModule {}
