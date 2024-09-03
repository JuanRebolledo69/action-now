import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';  // Importa Router


@Component({
  selector: 'app-ayuda',
  templateUrl: './ayuda.page.html',
  styleUrls: ['./ayuda.page.scss'],
})
export class AyudaPage implements OnInit {
  motivoSeleccionado: string = '';
  mensaje: string = '';


  constructor(
    private toastController: ToastController,
    private router: Router  // Agrega Router al constructor
  ) { }


  ngOnInit() { }


  enviarFormulario() {
    if (!this.mensaje.trim() || !this.motivoSeleccionado) {
      alert('Por favor, complete todos los campos.');
      return;
    }


    // Procesar y enviar el formulario
    const datosFormulario = {
      mensaje: this.mensaje,
      motivo: this.motivoSeleccionado
    };


    console.log('Datos del formulario:', datosFormulario);


    // Aquí puedes agregar la lógica para enviar los datos a un servidor, etc.


    // Limpiar formulario después de enviar
    this.mensaje = '';
    this.motivoSeleccionado = '';
  }


  irPagina() {
    this.presentToast('bottom'); // Mostrar el toast antes de redirigir
    this.router.navigate(['/agregar']);
  }


  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Mensaje enviado',
      duration: 2500,
      position: position,
    });


    await toast.present();
  }
}



