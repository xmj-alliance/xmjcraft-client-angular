import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: "", redirectTo: "/index", pathMatch: 'full'},
  { path: "index", loadChildren: () => import("./views/home/home.module").then(m => m.HomeModule)},
  { path: "user", loadChildren: () => import("./views/user/user.module").then(m => m.UserModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
