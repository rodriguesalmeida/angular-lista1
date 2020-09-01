import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exerc7Component } from './exerc7.component';

describe('Exerc7Component', () => {
  let component: Exerc7Component;
  let fixture: ComponentFixture<Exerc7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exerc7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exerc7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
