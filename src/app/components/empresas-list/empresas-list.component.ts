import { Component, OnInit, Input } from '@angular/core';
import { LyTheme2 } from "@alyle/ui";
import { Empresa } from "../../models/empresa";
import { EmpresaService } from "../../services/empresa.service";

const styles = () => ({
  root: {
    button: {
      marginAfter: '1em',
      marginTop: '.5em',
      marginBottom: '.5em'
    }
  },
  row: {
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: '.5em',
    alignItems: 'center'
  }
});
@Component({
  selector: 'app-empresas-list',
  templateUrl: './empresas-list.component.html',
  styleUrls: ['./empresas-list.component.css']
})
export class EmpresasListComponent implements OnInit {

  readonly classes = this.theme.addStyleSheet(styles);
  empresas: Empresa[];

  @Input() empresa: Empresa;
  
  constructor(
    private empresaService: EmpresaService, 
    private theme: LyTheme2
    ) { }

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
        this.getempresas();
      });
  }

  delete(empresa: Empresa): void {
    this.empresas = this.empresas.filter(h => h !== empresa);
    this.empresaService.deleteEmpresa(empresa).subscribe();
  }

}