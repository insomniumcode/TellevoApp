import { Component, OnInit, ViewChild } from '@angular/core';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-home-alumno',
  templateUrl: './home-alumno.page.html',
  styleUrls: ['./home-alumno.page.scss'],
})
export class HomeAlumnoPage implements OnInit {


  constructor(private animationCtrl: AnimationController) {}

  
  animarElemento(elemento: HTMLElement) {
    const animacion = this.animationCtrl.create()
      .addElement(elemento)
      .duration(1000) // Duración de la animación en milisegundos
      .fromTo('transform', 'translateY(0)', 'translateY(-100px)'); // Animación de desplazamiento hacia arriba

    animacion.play(); // Inicia la animación
  }

  ngOnInit() {
  }

}
