import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  gasto:number;
  distancia:number = 0;
  resultado:number = 0;

  public calcular(){
    this.resultado = this.distancia / this.gasto; 
  }
}
