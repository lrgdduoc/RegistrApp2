import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creacionqr',
  templateUrl: './creacionqr.page.html',
  styleUrls: ['./creacionqr.page.scss'],
})
export class CreacionqrPage implements OnInit {
  codigoQR = 'https://api.qrserver.com/v1/create-qr-code/?data=duocqr&size=720x720'; // URL inicial


  segundosRestantes: number;
  interval: any;

  constructor() {
    this.segundosRestantes = 60; // Establece el valor inicial del contador a 60 segundos

    // Inicia un temporizador que disminuye el contador cada segundo
    this.interval = setInterval(() => {
      this.segundosRestantes--;
      if (this.segundosRestantes === 0) {
        // Reinicia el contador si llega a cero
        this.segundosRestantes = 60;
      }
    }, 1000);
    this.actualizarCodigoQR(); // Llama a la función para actualizar el código QR

  }

  actualizarCodigoQR() {
    setInterval(() => {
      // Genera una cadena aleatoria (código QR)
      const codigoAleatorio = Math.random().toString(36).substr(2, 8);

      // Actualiza la propiedad del código QR
      this.codigoQR = `https://api.qrserver.com/v1/create-qr-code/?data=${codigoAleatorio}&size=720x720`;
    }, 60000); // Actualiza cada 60 segundos (60,000 milisegundos)
  }
  
  ngOnDestroy() {
    // Limpia el intervalo cuando se destruye el componente
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  ngOnInit() {
  }

}
