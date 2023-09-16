import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Iniciar sesion', url: 'login', icon: 'happy' },
    { title: 'Direcciones', url: '/folder/direcciones', icon: 'home' },
    { title: 'Ingresa tu vehiculo', url: '/folder/vehiculos', icon: 'car' },
    { title: 'Metodos de pago', url: '/folder/pagos', icon: 'card' },
    { title: 'Calificaciones', url: '/folder/calificaciones', icon: 'star-half' },
    { title: 'Mesa de soporte', url: '/folder/soporte', icon: 'help-circle' },
  ];
  public labels = ['Promociones', 'Descuentos'];
  constructor() {}
}
