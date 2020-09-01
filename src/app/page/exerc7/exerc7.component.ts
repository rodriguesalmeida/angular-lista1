import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exerc7',
  templateUrl: './exerc7.component.html',
  styleUrls: ['./exerc7.component.scss']
})
export class Exerc7Component implements OnInit {
  public temperatura:number;
  public fahrenheit:number;
  constructor() { }

  ngOnInit(): void {
  }

  public calcular(){
    this.fahrenheit = (9 * this.temperatura + 160) / 5;
  }

}
