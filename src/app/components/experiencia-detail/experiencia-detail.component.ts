import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { LyTheme2 } from '@alyle/ui';

import { Experiencia }         from '../../models/experiencia';
import { ExperienciaService }  from '../../services/experiencia.service';

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
  selector: 'app-experiencia-detail',
  templateUrl: './experiencia-detail.component.html',
  styleUrls: ['./experiencia-detail.component.css']
})
export class ExperienciaDetailComponent implements OnInit {

  readonly classes = this.theme.addStyleSheet(styles);
  experiencia: Experiencia;

  constructor(
    private route: ActivatedRoute,
    private experienciaService: ExperienciaService,
    private location: Location,
    private theme: LyTheme2
  ) {}

  ngOnInit(): void {
    this.getexperiencia();
  }

  getexperiencia(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.experienciaService.getexperiencia(id)
      .subscribe(experiencia => this.experiencia = experiencia);
  }

  goBack(): void {
    this.location.back();
  }

 save(): void {
    this.experienciaService.updateexperiencia(this.experiencia)
      .subscribe(() => this.goBack());
  }

}
