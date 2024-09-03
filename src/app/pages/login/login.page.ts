import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  datosLogin = {
    usuario: '',
    contrasena: ''
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
    if (!this.datosLogin.usuario) {
      this.mostrarAlerta('Por favor, ingrese un usuario válido.');
    } else if (this.datosLogin.contrasena.length < 8) {
      this.mostrarAlerta('La contraseña es incorrecta.');
    } else {
      this.router.navigate(['/home']);
    }
  }
}



