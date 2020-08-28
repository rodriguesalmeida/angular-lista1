import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exerc6Component } from './exerc6.component';

describe('Exerc6Component', () => {
  let component: Exerc6Component;
  let fixture: ComponentFixture<Exerc6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exerc6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exerc6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
