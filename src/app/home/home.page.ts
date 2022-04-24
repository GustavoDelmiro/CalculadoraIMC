import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  peso : number;
  altura : number;
  imc : number;
  resultado : string;

  constructor() {}

  CalculandoImc() {
    this.imc = this.peso / (this.altura * this.altura);

      if(this.imc < 18.5) {
      this.resultado = "Abaixo do peso";
      }
      {
      if (this.imc > 18.5) 
      this.resultado ="Normal";
      }
      {
      if (this.imc > 25.0) 
      this.resultado ="Sobrepeso";
      }
      {
      if (this.imc > 30.0)
      this.resultado ="Obesidade";
      } 
      {
      if (this.imc > 40.0)
      this.resultado ="Obesidade grave";
      } 
  
  }
}
