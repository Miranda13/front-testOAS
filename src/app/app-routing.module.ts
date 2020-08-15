import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarComponent } from "./components/registrar/registrar.component";
import { UpdateComponent } from "./components/update/update.component";
import { PrincipalComponent } from "./components/principal/principal.component";

const routes: Routes = [
  {path: '', redirectTo: '/principal', pathMatch: 'full'},
  {path: 'principal', component: PrincipalComponent},
  {path: 'registrar', component: RegistrarComponent, canActivate:[]},
  {path: 'update/:id', component: UpdateComponent, canActivate:[]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
