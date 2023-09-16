import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeAlumno2Page } from './home-alumno2.page';

const routes: Routes = [
  {
    path: '',
    component: HomeAlumno2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeAlumno2PageRoutingModule {}
