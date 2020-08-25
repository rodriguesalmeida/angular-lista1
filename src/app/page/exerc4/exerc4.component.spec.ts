import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exerc4Component } from './exerc4.component';

describe('Exerc4Component', () => {
  let component: Exerc4Component;
  let fixture: ComponentFixture<Exerc4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exerc4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exerc4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
