import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./component/login/login.component";
import { RouterModule, Routes } from "@angular/router";
import { RoleComponent } from "./component/role/role.component";
import { FormsModule } from "@angular/forms";
import { AdminModule } from "./module/admin/admin.module";
import { ManagerModule } from "./module/manager/manager.module";
import { UserModule } from "./module/user/user.module";
import { TemplateModule } from './template/template.module';

const approuting: Routes = [
  { path: "", component: LoginComponent },
  {
    path: "role",
    component: RoleComponent,
    children: [
      { path: "admin", loadChildren: () => AdminModule },
      { path: "manager", loadChildren: () => ManagerModule },
      { path: "user", loadChildren: () => UserModule }
    ]
  }
];

@NgModule({
  declarations: [AppComponent, LoginComponent, RoleComponent],
  imports: [BrowserModule, RouterModule.forRoot(approuting), FormsModule, TemplateModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
