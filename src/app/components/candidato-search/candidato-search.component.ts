import { Component, OnInit } from '@angular/core';
import { CandidatoService } from "../../services/candidato.service";
import { Candidato } from "../../models/candidato";

@Component({
  selector: 'app-candidato-search',
  templateUrl: './candidato-search.component.html',
  styleUrls: ['./candidato-search.component.css']
})
export class CandidatoSearchComponent implements OnInit {

  candidatos: Candidato[];

  constructor(private candidatoService: CandidatoService) { }

  ngOnInit() {
    this.candidatoService.getCandidatos().subscribe(
      result => this.candidatos = result
    );
  }

  searchByNome(nome: string) {
    console.log(nome)
    this.candidatoService.searchCandidatosByNome(nome).subscribe(
      result => { this.candidatos = result }
    );
  }

  searchBySexo(sexo: string) {
    this.candidatoService.searchCandidatosBySexo(sexo).subscribe(
      result => this.candidatos = result
    )
  }

  searchByEstadoCivil(estadoCivil: string) {
    this.candidatoService.searchCandidatosByEstadoCivil(estadoCivil).subscribe(
      result => this.candidatos = result
    )
  }  

}
