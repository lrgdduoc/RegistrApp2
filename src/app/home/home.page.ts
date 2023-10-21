import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  email: string = '';
  password: string = '';
  

  constructor(private alertController: AlertController, private router: Router) {}

  
  async iniciarSesion() {

    const usuariosJSON = localStorage.getItem('usuarios');
   
    if (usuariosJSON) {
      const usuarios = JSON.parse(usuariosJSON);
      // Ahora tienes tu arreglo de usuarios y contraseñas de vuelta

      // Buscar el usuario en el arreglo de usuarios
      const usuarioEncontrado = usuarios.find((user: { username: string; password: string; }) => user.username === this.email && user.password === this.password);

    }
  

    // Realiza la autenticación aquí, por ejemplo, con la comprobación del correo.
    if (this.email.endsWith('@docente.duoc.cl') || this.email.endsWith('@duoc.cl')) {
      // Inicio de sesión exitoso
      // Almacena un indicador de inicio de sesión en el almacenamiento local
      localStorage.setItem('loggedIn', 'true'); // Añade esta línea
      localStorage.setItem('email', this.email);

      // Redirige al usuario a la página deseada
      if (this.email.endsWith('@docente.duoc.cl')) {
        this.router.navigate(['/accesodocente1']);
      } else if (this.email.endsWith('@duoc.cl')) {
        this.router.navigate(['/accesousuario']);
      }
    } else {
      // El inicio de sesión falló, muestra un mensaje de error o realiza alguna otra acción.
      //console.log('Correo no válido');

      const alert = await this.alertController.create({
        header: 'Datos incorrectos',
        message: 'Los datos que ingresaste son incorrectos.',
        buttons: ['Aceptar']
      });
  
      await alert.present();


    }
  }

  
  setCorreoElectronico(email: string) {
    throw new Error('Method not implemented.');
  }

  async mostrarPopupBienvenida(email: string) {
    const alert = await this.alertController.create({
      header: 'Bienvenido',
      message: `¡Bienvenido ${email}!`,
      buttons: ['OK']
    });

    await alert.present();
  }


  ngOnInit() {
    // Recuperar valores almacenados en localStorage, si existen

  } 


  
}
