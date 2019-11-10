import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { SidenavComponent } from "./sidenav/sidenav.component";
import { FooterComponent } from "./footer/footer.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [HeaderComponent, SidenavComponent, FooterComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, SidenavComponent, FooterComponent]
})
export class TemplateModule {}
