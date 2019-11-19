import { Component, OnInit } from '@angular/core';

import { Empresa } from "../../models/empresa";
import { EmpresaService } from "../../services/empresa.service";

@Component({
  selector: 'app-empresas-list',
  templateUrl: './empresas-list.component.html',
  styleUrls: ['./empresas-list.component.css']
})
export class EmpresasListComponent implements OnInit {

  empresas: Empresa[];

  constructor(private empresaService: EmpresaService) { }

  ngOnInit() {
    this.getempresas();
  }

  getempresas(): void {
    this.empresaService.getEmpresas()
    .subscribe(arrayEmpresa => {
      if (arrayEmpresa !== null) {
        this.empresas = arrayEmpresa.empresa;
        console.log("this.empresas:", this.empresas);
      }
    });
  }

  add(razaoSocial: string): void {
    razaoSocial = razaoSocial.trim();
    if (!razaoSocial) { return; }
    this.empresaService.addEmpresa({ razaoSocial } as Empresa)
      .subscribe(empresa => {
        this.empresas.push(empresa);
      });
  }

  delete(empresa: Empresa): void {
    this.empresas = this.empresas.filter(h => h !== empresa);
    this.empresaService.deleteEmpresa(empresa).subscribe();
  }

}