import { Component, OnInit } from '@angular/core';
import { registerPlugin } from '@capacitor/core';
import { Platform } from '@ionic/angular';
import { AlumnosbdComponent } from '../alumnosbd/alumnosbd.component';






@Component({
  selector: 'app-ingresodocente',
  templateUrl: './ingresodocente.component.html',
  styleUrls: ['./ingresodocente.component.scss'],
  
})
export class IngresodocenteComponent  implements OnInit {
  nombreUsuario: string | undefined;
  isExpanded = false;

  
  toggleSection() {
    this.isExpanded = !this.isExpanded;
  }
  
  ngOnInit() {
    // Escuchar el Subject para recibir el valor del correo electrónico
    this.nombreUsuario = window.localStorage.getItem('email') || '';

  // Método para establecer el correo electrónico en localStorage

  
  }
  
}


