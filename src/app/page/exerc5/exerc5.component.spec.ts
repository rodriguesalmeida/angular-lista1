import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exerc5Component } from './exerc5.component';

describe('Exerc5Component', () => {
  let component: Exerc5Component;
  let fixture: ComponentFixture<Exerc5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exerc5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exerc5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
