import { Component } from '@angular/core';


@Component({
  selector: 'app-cal-imc',
  templateUrl: './cal-imc.page.html',
  styleUrls: ['./cal-imc.page.scss'],
})
export class CalImcPage {
  altura: number = 0;
  peso: number = 0;  


  imc: number | null = null;  


  calcularIMC() {
    if (this.altura > 0 && this.peso > 0) {
      // convertir altura de cm a metros
      const alturaEnMetros = this.altura / 100;


      // calcular IMC
      this.imc = this.peso / (alturaEnMetros * alturaEnMetros);
    } else {
      this.imc = null;
    }
  }
}



