import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatosListComponent } from './candidatos-list.component';

describe('CandidatosListComponent', () => {
  let component: CandidatosListComponent;
  let fixture: ComponentFixture<CandidatosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidatosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
