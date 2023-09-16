import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    user: string = '';
    pass: string = '';
  
    constructor(private alertController: AlertController, private router: Router) { }
    
    ngOnInit(){

    }

    validarAlumno() {
      if (this.pass=='1234' && this.user=='cr.guzmanl' || this.pass=='1234' && this.user=='ma.lopezd') {
        this.router.navigate(['/home-alumno']);
       
      } else {
        this.mostrarAlerta();
      }
    }
  
    async mostrarAlerta() {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Correo y/o contraseña invalidos, intente nuevamente.',
        buttons: ['OK']
      });
  
      await alert.present();
  
    }

    
  }

