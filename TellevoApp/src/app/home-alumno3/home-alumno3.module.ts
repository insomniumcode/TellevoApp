import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeAlumno3PageRoutingModule } from './home-alumno3-routing.module';

import { HomeAlumno3Page } from './home-alumno3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeAlumno3PageRoutingModule
  ],
  declarations: [HomeAlumno3Page]
})
export class HomeAlumno3PageModule {}
