import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./components/home/home.component";
import { EmpresasListComponent } from "./components/empresas-list/empresas-list.component";
import { EmpresaDetailComponent } from "./components/empresa-detail/empresa-detail.component";
import { VagaDetailComponent } from "./components/vaga-detail/vaga-detail.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'empresas', component: EmpresasListComponent },
  { path: 'empresa-detail/:id', component: EmpresaDetailComponent },
  { path: 'vaga-detail/:id', component: VagaDetailComponent },

  /*{ path: 'candidatos', component: CandidatosComponent },
  { path: 'candidato-detail/:id', component: CandidatoDetailComponent },
  { path: 'experiencia-detail/:id', component: ExperienciaDetailComponent } */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
