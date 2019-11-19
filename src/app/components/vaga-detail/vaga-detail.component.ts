import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { LyTheme2 } from '@alyle/ui';

import { Vaga }         from '../../models/vaga';
import { VagaService }  from '../../services/vaga.service';

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
  selector: 'app-vaga-detail',
  templateUrl: './vaga-detail.component.html',
  styleUrls: ['./vaga-detail.component.css']
})
export class VagaDetailComponent implements OnInit {

  readonly classes = this.theme.addStyleSheet(styles);
  vaga: Vaga;

  constructor(
    private route: ActivatedRoute,
    private vagaService: VagaService,
    private location: Location,
    private theme: LyTheme2
  ) {}

  ngOnInit(): void {
    this.getVaga();
  }

  getVaga(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.vagaService.getVaga(id)
      .subscribe(vaga => this.vaga = vaga);
  }

  goBack(): void {
    this.location.back();
  }

 save(): void {
    this.vagaService.updateVaga(this.vaga)
      .subscribe(() => this.goBack());
  }

}
