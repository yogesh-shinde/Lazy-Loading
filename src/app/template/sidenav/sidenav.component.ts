import { Component, OnInit } from "@angular/core";
import { Menu } from "src/app/model/Menu.model";

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.css"]
})
export class SidenavComponent implements OnInit {
  role: string;
  menu: Array<any>;

  constructor() {
    this.role = sessionStorage.getItem("role");
    console.log(this.role);
    this.menu = Menu.menu;
    console.log(this.menu);
    console.log(this.role);
  }

  ngOnInit() {}
}
