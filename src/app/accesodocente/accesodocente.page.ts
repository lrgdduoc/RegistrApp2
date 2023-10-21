import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-accesodocente',
  templateUrl: './accesodocente.page.html',
  styleUrls: ['./accesodocente.page.scss'],
})
export class AccesodocentePage implements OnInit {

  userEmail: string | undefined;

  constructor(private route: ActivatedRoute) { }

  qrData = null;
  createdCode = null;

  createCode () {
    this.createdCode = this.qrData;
    console.log(this.createdCode);
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params && params['user']) {
        this.userEmail = params['user'];
      }
    });
  }



}
