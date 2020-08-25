import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exerc4',
  templateUrl: './exerc4.component.html',
  styleUrls: ['./exerc4.component.scss']
})
export class Exerc4Component implements OnInit {

  public nome:string;
  public salario:number;
  public totalVenda:number;
  public resultado:number;
  constructor() { }

  ngOnInit(): void {
  }

  public calcular(){
    this.resultado = this.salario + (this.totalVenda * 0.15);
  }




}
