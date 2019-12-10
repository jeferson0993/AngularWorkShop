import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { LyTheme2, shadowBuilder, ThemeVariables } from '@alyle/ui';
import { Experiencia } from '../../models/experiencia';
import { Candidato } from '../../models/candidato';
import { ExperienciaService } from '../../services/experiencia.service';
import { CandidatoService } from '../../services/candidato.service';

const styles = (theme: ThemeVariables) => ({
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
  },
  item: {
    padding: '16px',
    textAlign: 'center',
    background: theme.background.secondary,
    boxShadow: shadowBuilder(1),
    borderRadius: '4px',
    height: '100%'
  }
});

@Component({
  selector: 'app-candidato-detail',
  templateUrl: './candidato-detail.component.html',
  styleUrls: ['./candidato-detail.component.css']
})
export class CandidatoDetailComponent implements OnInit {

  readonly classes = this.theme.addStyleSheet(styles);
  experiencias: Experiencia[];

  @Input() candidato: Candidato;
  @Input() experiencia: Experiencia;
  
  constructor(
    private route: ActivatedRoute,
    private experienciaService: ExperienciaService,
    private candidatoService: CandidatoService,
    private location: Location,
    private theme: LyTheme2
  ) {}

  ngOnInit(): void {
    this.getcandidato();
  }

  getcandidato(): void {
    const id = + this.route.snapshot.paramMap.get('id');
    this.candidatoService.getCandidato(id)
      .subscribe(candidato => {
        this.candidato = candidato;
        this.experiencias = candidato.experiencias;     
        console.log('candidato: ', this.candidato);
      });
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {   
    this.candidatoService.updateCandidato(this.candidato)
      .subscribe(() => this.goBack());
  }

  add(cargo: string): void {
    cargo = cargo.trim();
    let candidato_id = this.candidato.id;
    if (!cargo) { return; }
    this.experienciaService.addexperiencia({cargo} as Experiencia, candidato_id)
      .subscribe(experiencia => {
        this.getcandidato();
      });
  }

  delete(experiencia: Experiencia): void {
    this.experienciaService.deleteexperiencia(experiencia)
    .subscribe(experiencia => {
      this.getcandidato();
    });
  }

}
