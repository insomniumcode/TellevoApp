import { Component, OnInit,  ViewChild } from '@angular/core';
import { AnimationController } from '@ionic/angular';


@Component({
  selector: 'app-home-alumno2',
  templateUrl: './home-alumno2.page.html',
  styleUrls: ['./home-alumno2.page.scss'],
})
export class HomeAlumno2Page implements OnInit {

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
