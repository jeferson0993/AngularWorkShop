import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaDetailComponent } from './experiencia-detail.component';

describe('ExperienciaDetailComponent', () => {
  let component: ExperienciaDetailComponent;
  let fixture: ComponentFixture<ExperienciaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienciaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienciaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
