import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Vaga } from '../../models/vaga';
import { Empresa } from '../../models/empresa';
import { VagaService } from "../../services/vaga.service";
import { EmpresaService } from '../../services/empresa.service';

@Component({
  selector: 'app-empresa-detail',
  templateUrl: './empresa-detail.component.html',
  styleUrls: ['./empresa-detail.component.css']
})
export class EmpresaDetailComponent implements OnInit {

  Vagas: Vaga[];

  @Input() empresa: Empresa;
  @Input() vaga: Vaga;
  
  constructor(
    private route: ActivatedRoute,
    private vagaService: VagaService,
    private empresaService: EmpresaService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getEmpresa();
  }

  getEmpresa(): void {
    const id = + this.route.snapshot.paramMap.get('id');
    this.empresaService.getEmpresa(id)
      .subscribe(empresa => {
        this.empresa = empresa;
        this.Vagas = empresa.vagas;     
        console.log('empresa: ', this.empresa);
      });
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {   
    this.empresaService.updateEmpresa(this.empresa)
      .subscribe(() => this.goBack());
  }

  add(nome: string): void {
    nome = nome.trim();
    let empresa_id = this.empresa.id;
    if (!nome) { return; }
    this.vagaService.addVaga({ nome } as Vaga, empresa_id)
      .subscribe(vaga => {
        console.info(this.Vagas);
        console.warn(vaga);
        this.Vagas.push(vaga);
      });
  }

  delete(vaga: Vaga): void {
    this.Vagas = this.Vagas.filter(h => h !== vaga);
    this.vagaService.deleteVaga(vaga).subscribe();
  }

}
