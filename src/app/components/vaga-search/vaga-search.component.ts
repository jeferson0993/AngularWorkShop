import { Component, OnInit } from '@angular/core';
import { VagaService } from '../../services/vaga.service';

@Component({
  selector: 'app-vaga-search',
  templateUrl: './vaga-search.component.html',
  styleUrls: [ './vaga-search.component.css' ]
})
export class VagaSearchComponent implements OnInit {
  
  vagas: any;

  constructor(private vagaService: VagaService) {}

  searchByCargo(cargo: string): void {
    console.log(`searchByCargo ${cargo}`);
    this.vagaService.searchVagasByCargo(cargo).subscribe(
      result => {
        console.log(result.vaga);
        this.vagas = result.vaga;
      }
    );
  }

  searchByCidade(cidade: string): void {
    console.log(`searchByCidade ${cidade}`);
    this.vagaService.searchVagasByCidade(cidade).subscribe(
      result => {
        this.vagas = result.vaga;
      }
    )
  }

  searchByEstado(estado: string): void {
    console.log(`searchByEstado ${estado}`);
    this.vagaService.searchVagasByEstado(estado).subscribe(
      result => {
        this.vagas = result.vaga;
      }
    )
  }

  ngOnInit(): void {
    this.vagaService.getVagas().subscribe(
      result => this.vagas = result.vaga
    );
  }

}