import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router'; // Importa Router en lugar de 'router'


@Component({
  selector: 'app-reestablecercontrasenna',
  templateUrl: './reestablecercontrasenna.component.html',
  styleUrls: ['./reestablecercontrasenna.component.scss'],
})
export class ReestablecercontrasennaComponent implements OnInit {
  email: string = '';

  constructor(private alertController: AlertController, private router: Router) {}

  ngOnInit() {}

  async mostrarAlerta() {
    const alert = await this.alertController.create({
      header: 'Reestablecimiento de Contraseña',
      message: 'Revise su correo electrónico',
      buttons: ['OK']

    });


    const usuarios = [
      { usuario: 'lg@docente.duoc.cl', password: '1234' },
      { usuario: 'hf@duoc.cl', password: '5678' },
      
    ];
    
    const usuariosJSON = JSON.stringify(usuarios);

    localStorage.setItem('usuarios', usuariosJSON);

    
    await alert.present();
    this.router.navigate(['/home']);
  }
}
