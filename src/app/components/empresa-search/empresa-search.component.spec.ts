import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaSearchComponent } from './empresa-search.component';

describe('EmpresaSearchComponent', () => {
  let component: EmpresaSearchComponent;
  let fixture: ComponentFixture<EmpresaSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpresaSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresaSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
