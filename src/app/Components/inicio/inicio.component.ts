import { Component } from '@angular/core';
import { LoginComponent } from "../login/login.component";
import { VistaComponent } from '../vista/vista.component';

@Component({
    selector: 'app-inicio',
    standalone: true,
    templateUrl: './inicio.component.html',
    styleUrl: './inicio.component.css',
    imports: [VistaComponent,LoginComponent]
})
export class InicioComponent {

}
