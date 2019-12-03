import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./components/home/home.component";
import { EmpresasListComponent } from "./components/empresas-list/empresas-list.component";
import { EmpresaDetailComponent } from "./components/empresa-detail/empresa-detail.component";
import { VagaDetailComponent } from "./components/vaga-detail/vaga-detail.component";
import { CandidatosListComponent } from "./components/candidatos-list/candidatos-list.component";
import { CandidatoDetailComponent } from "./components/candidato-detail/candidato-detail.component";
import { ExperienciaDetailComponent } from "./components/experiencia-detail/experiencia-detail.component";


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'empresas', component: EmpresasListComponent },
  { path: 'empresa-detail/:id', component: EmpresaDetailComponent },
  { path: 'vaga-detail/:id', component: VagaDetailComponent },
  { path: 'candidatos', component: CandidatosListComponent },
  { path: 'candidato-detail/:id', component: CandidatoDetailComponent },
  { path: 'experiencia-detail/:id', component: ExperienciaDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
