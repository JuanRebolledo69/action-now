import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  datosRegistro = {
    usuario: '',
    contrasena: '',
    confirmarContrasena: ''
  };


  constructor(private router: Router, private alertController: AlertController) {}


  async mostrarAlerta(mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: mensaje,
      buttons: ['OK']
    });


    await alert.present();
  }


  enviarFormulario() {
    if (!this.datosRegistro.usuario) {
      this.mostrarAlerta('Por favor, ingrese un usuario válido.');
    } else if (this.datosRegistro.contrasena.length < 8) {
      this.mostrarAlerta('La contraseña debe tener al menos 8 caracteres.');
    } else if (this.datosRegistro.contrasena !== this.datosRegistro.confirmarContrasena) {
      this.mostrarAlerta('Las contraseñas no coinciden.');
    } else {
      this.router.navigate(['/login']);
    }
  }
}



