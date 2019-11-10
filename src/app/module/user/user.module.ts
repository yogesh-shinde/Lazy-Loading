import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserDashComponent } from "./user-dash/user-dash.component";
import { RouterModule, Routes } from "@angular/router";
const userrouting: Routes = [
  { path: "userdash", component: UserDashComponent }
];

@NgModule({
  declarations: [UserDashComponent],
  imports: [CommonModule, RouterModule.forChild(userrouting)]
})
export class UserModule {}
