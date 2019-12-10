import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VagaSearchComponent } from './vaga-search.component';

describe('VagaSearchComponent', () => {
  let component: VagaSearchComponent;
  let fixture: ComponentFixture<VagaSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VagaSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VagaSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
