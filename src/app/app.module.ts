import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button'; 
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';



import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, BrowserModule,BrowserAnimationsModule,MatButtonModule],
  providers: [ { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
   ],
  bootstrap: [AppComponent],
  
})
export class AppModule {}
