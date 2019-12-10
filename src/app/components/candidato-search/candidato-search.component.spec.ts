import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatoSearchComponent } from './candidato-search.component';

describe('CandidatoSearchComponent', () => {
  let component: CandidatoSearchComponent;
  let fixture: ComponentFixture<CandidatoSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidatoSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatoSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
