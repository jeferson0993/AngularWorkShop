import { Component, OnInit } from '@angular/core';
import { CandidatoService } from "../../services/candidato.service";

@Component({
  selector: 'app-candidato-search',
  templateUrl: './candidato-search.component.html',
  styleUrls: ['./candidato-search.component.css']
})
export class CandidatoSearchComponent implements OnInit {

  candidatos: any;

  constructor(private candidatoService: CandidatoService) { }

  ngOnInit() {
    this.candidatoService.getCandidatos().subscribe(
      result => this.candidatos = result.candidato
    );
  }

  searchByNome(nome: string) {
    console.log(nome)
    this.candidatoService.searchCandidatosByNome(nome).subscribe(
      result => { this.candidatos = result.candidato }
    );
  }

  searchBySexo(sexo: string) {
    this.candidatoService.searchCandidatosBySexo(sexo).subscribe(
      result => this.candidatos = result.candidato
    )
  }

  searchByEstadoCivil(estadoCivil: string) {
    this.candidatoService.searchCandidatosByEstadoCivil(estadoCivil).subscribe(
      result => this.candidatos = result.candidato
    )
  }  

}
