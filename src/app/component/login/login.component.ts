import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Employee } from "src/app/model/Employee.model";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  emp: Employee = {
    username: "",
    password: ""
  };

  ngOnInit() {}

  login(emp: Employee) {
    console.log(emp);
    if (emp.username === "admin" && emp.password === "admin") {
      sessionStorage.setItem("role", "admin");
      this.router.navigateByUrl("role/admin/admindash");
    } else if (emp.username === "manager" && emp.password === "manager") {
      sessionStorage.setItem("role", "manager");
      this.router.navigateByUrl("role/manager/managerdash");
    } else if (emp.username === "user" && emp.password === "user") {
      sessionStorage.setItem("role", "user");
      this.router.navigateByUrl("role/user/userdash");
    }
  }
}
