import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exerc5',
  templateUrl: './exerc5.component.html',
  styleUrls: ['./exerc5.component.scss']
})
export class Exerc5Component implements OnInit {

  public nome:string;
  public nota1:number;
  public nota2:number;
  public nota3:number;
  public media:number;

  constructor() { }

  ngOnInit(): void {
  }


  public calcular(){
    this.media = (this.nota1 + this.nota2+ this.nota3) / 3;
  }

}
