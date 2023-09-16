import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeAlumno3Page } from './home-alumno3.page';

const routes: Routes = [
  {
    path: '',
    component: HomeAlumno3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeAlumno3PageRoutingModule {}
