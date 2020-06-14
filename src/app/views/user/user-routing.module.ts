import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DetailComponent } from "./detail.component";

const routes: Routes = [
  { path: "detail", component: DetailComponent}
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class UserRoutingModule {

}