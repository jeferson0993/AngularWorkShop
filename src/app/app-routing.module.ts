import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./components/home/home.component";
import { EmpresasListComponent } from "./components/empresas-list/empresas-list.component";
import { EmpresaDetailComponent } from "./components/empresa-detail/empresa-detail.component";
import { VagaDetailComponent } from "./components/vaga-detail/vaga-detail.component";
import { CandidatosListComponent } from "./components/candidatos-list/candidatos-list.component";
import { CandidatoDetailComponent } from "./components/candidato-detail/candidato-detail.component";
import { ExperienciaDetailComponent } from "./components/experiencia-detail/experiencia-detail.component";
import { EmpresaSearchComponent } from './components/empresa-search/empresa-search.component';
import { VagaSearchComponent } from './components/vaga-search/vaga-search.component';
import { CandidatoSearchComponent } from './components/candidato-search/candidato-search.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'empresas', component: EmpresasListComponent },
  { path: 'empresa-detail/:id', component: EmpresaDetailComponent },
  { path: 'vaga-detail/:id', component: VagaDetailComponent },
  { path: 'candidatos', component: CandidatosListComponent },
  { path: 'candidato-detail/:id', component: CandidatoDetailComponent },
  { path: 'experiencia-detail/:id', component: ExperienciaDetailComponent },

  {path: 'empresas-search', component: EmpresaSearchComponent},
  {path: 'vagas-search', component: VagaSearchComponent},
  {path: 'candidatos-search', component: CandidatoSearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
