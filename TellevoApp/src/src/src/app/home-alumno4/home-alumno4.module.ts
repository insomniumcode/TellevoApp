import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeAlumno4PageRoutingModule } from './home-alumno4-routing.module';

import { HomeAlumno4Page } from './home-alumno4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeAlumno4PageRoutingModule
  ],
  declarations: [HomeAlumno4Page]
})
export class HomeAlumno4PageModule {}
