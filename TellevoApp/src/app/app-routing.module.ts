import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./users/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./users/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'home-alumno',
    loadChildren: () => import('./home-alumno/home-alumno.module').then( m => m.HomeAlumnoPageModule)
  },
  {
    path: 'home-alumno2',
    loadChildren: () => import('./home-alumno2/home-alumno2.module').then( m => m.HomeAlumno2PageModule)
  },
  {
    path: 'home-alumno3',
    loadChildren: () => import('./home-alumno3/home-alumno3.module').then( m => m.HomeAlumno3PageModule)
  },
  {
    path: 'home-alumno4',
    loadChildren: () => import('./home-alumno4/home-alumno4.module').then( m => m.HomeAlumno4PageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
