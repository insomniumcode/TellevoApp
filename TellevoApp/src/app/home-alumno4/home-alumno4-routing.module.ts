import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeAlumno4Page } from './home-alumno4.page';

const routes: Routes = [
  {
    path: '',
    component: HomeAlumno4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeAlumno4PageRoutingModule {}
