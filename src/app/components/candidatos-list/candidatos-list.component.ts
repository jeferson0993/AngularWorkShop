import { Component, OnInit } from '@angular/core';
import { LyTheme2 } from "@alyle/ui";
import { Candidato } from "../../models/candidato";
import { CandidatoService } from "../../services/candidato.service";

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
  selector: 'app-candidatos-list',
  templateUrl: './candidatos-list.component.html',
  styleUrls: ['./candidatos-list.component.css']
})
export class CandidatosListComponent implements OnInit {

  readonly classes = this.theme.addStyleSheet(styles);
  candidatos: Candidato[];

  constructor(
    private candidatoService: CandidatoService,
    private theme: LyTheme2
    ) { }

  ngOnInit() {
    this.getcandidatos();
  }

  getcandidatos(): void {
    this.candidatoService.getCandidatos()
    .subscribe(arrayCandidatos => {
      if (arrayCandidatos !== null) {
        this.candidatos = arrayCandidatos.candidato;
        console.log("candidatos:", this.candidatos);
      }
    });
  }

  add(nome: string): void {
    nome = nome.trim();
    if (!nome) { return; }
    this.candidatoService.addCandidato({ nome } as Candidato)
      .subscribe(candidato => {
        this.getcandidatos();
      });
  }

  delete(candidato: Candidato): void {
    this.candidatos = this.candidatos.filter(h => h !== candidato);
    this.candidatoService.deleteCandidato(candidato).subscribe();
  }
  
}
