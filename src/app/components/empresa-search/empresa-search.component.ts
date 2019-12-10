import { Component, OnInit } from '@angular/core';
import { EmpresaService } from "../../services/empresa.service";

@Component({
  selector: 'app-empresa-search',
  templateUrl: './empresa-search.component.html',
  styleUrls: ['./empresa-search.component.css']
})
export class EmpresaSearchComponent implements OnInit {

  empresas: any;

  constructor(private empresaService: EmpresaService) { }

  ngOnInit() {
    this.empresaService.getEmpresas().subscribe(
      result => this.empresas = result.empresa
    );
  }

  searchByRazaoSocial(razaoSocial: string) {
    this.empresaService.searchEmpresasByRazaoSocial(razaoSocial).subscribe(
      result => this.empresas = result.empresa
    )
  }

  searchByBairro(bairro: string): void {
    console.log(`searchByCidade ${bairro}`);
    this.empresaService.searchEmpresasByCidade(bairro).subscribe(
      result => {
        this.empresas = result.empresa;
      }
    )
  }

  searchByCidade(cidade: string): void {
    console.log(`searchByCidade ${cidade}`);
    this.empresaService.searchEmpresasByCidade(cidade).subscribe(
      result => {
        this.empresas = result.empresa;
      }
    )
  }

  searchByEstado(estado: string): void {
    console.log(`searchByEstado ${estado}`);
    this.empresaService.searchEmpresasByEstado(estado).subscribe(
      result => {
        this.empresas = result.empresa;
      }
    )
  }

}
