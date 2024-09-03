import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contador-calorias',
  templateUrl: './contador-calorias.page.html',
  styleUrls: ['./contador-calorias.page.scss'],
})
export class ContadorCaloriasPage implements OnInit {
  alimentos = [
    { nombre: 'Manzana', caloriasPor100g: 52 },
    { nombre: 'Plátano', caloriasPor100g: 89 },
    { nombre: 'Pollo', caloriasPor100g: 165 },
    { nombre: 'Arroz', caloriasPor100g: 130 },
    { nombre: 'Brócoli', caloriasPor100g: 34 },
    { nombre: 'Almendras', caloriasPor100g: 579 }
  ];
 
  alimentoSeleccionado: any = null;
  cantidadGramos: number = 0;
  totalCalorias: number = 0;


  constructor() { }


  ngOnInit() { }


  calcularCalorias() {
    if (this.alimentoSeleccionado && this.cantidadGramos > 0) {
      const caloriasPor100g = this.alimentoSeleccionado.caloriasPor100g;
      this.totalCalorias = (caloriasPor100g * this.cantidadGramos) / 100;
    } else {
      this.totalCalorias = 0;
    }
  }
}



