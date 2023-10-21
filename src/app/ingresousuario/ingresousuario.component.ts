import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { ViewChild, ElementRef, AfterViewInit } from '@angular/core';
//import { Camera, CameraOptions } from '@ionic-native/camera/ngx';


@Component({
  selector: 'app-ingresousuario',
  templateUrl: './ingresousuario.component.html',
  styleUrls: ['./ingresousuario.component.scss'],
})
export class IngresousuarioComponent implements OnInit {
  nombreUsuario: string | undefined;

  private emailSubject = new Subject<string>();
  optionZbar:any;
  scannedOutput:any;
  qrScanner: any;
  scannedText: string | undefined;
  camera: any;
  stream: any;
  cameraActive: boolean = false;


  constructor(
  ) {

  }


  openCamera() {
    const video = document.getElementById('camera-preview') as HTMLVideoElement;

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          this.stream = stream; // Guarda la referencia al stream
          video.srcObject = stream;
          video.play();
          this.cameraActive = true; // Activa la bandera
        })
        .catch((error) => {
          console.error('Error al abrir la cámara: ' + error);
        });
    }
  }

  closeCamera() {
    if (this.stream) {
      this.stream.getTracks().forEach((track: { stop: () => any; }) => track.stop());
      const video = document.getElementById('camera-preview') as HTMLVideoElement;
      video.srcObject = null; // Limpia la fuente del video
      this.cameraActive = false; // Desactiva la bandera
    }
  }
  scanQRCode() {
    this.qrScanner.show();
  }



  ngOnInit() {
    // Escuchar el Subject para recibir el valor del correo electrónico
    this.nombreUsuario = window.localStorage.getItem('email') || '';


  // Método para establecer el correo electrónico en localStorage

  
  }



}
