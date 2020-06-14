import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from "./user-routing.module";

import { ComponentsModule } from "../../components/components.module";
import { DetailComponent } from './detail.component';

@NgModule({
  declarations: [
    DetailComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ComponentsModule,
  ]
})
export class UserModule { }
