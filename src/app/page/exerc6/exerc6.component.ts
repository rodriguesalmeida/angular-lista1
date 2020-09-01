import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exerc6',
  templateUrl: './exerc6.component.html',
  styleUrls: ['./exerc6.component.scss']
})
export class Exerc6Component implements OnInit {

  public a:string;
  public b:string;
  public auxiliar:string;

  constructor() { }

  ngOnInit(): void {
  }

  public alternar(){
    this.auxiliar = this.b;
    this.b = this.a;
    this.a = this.auxiliar;
  }

}
