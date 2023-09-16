import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeAlumno2PageRoutingModule } from './home-alumno2-routing.module';

import { HomeAlumno2Page } from './home-alumno2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeAlumno2PageRoutingModule
  ],
  declarations: [HomeAlumno2Page]
})
export class HomeAlumno2PageModule {}
