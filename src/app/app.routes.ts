import { Routes } from '@angular/router';
import { InicioComponent } from './Components/inicio/inicio.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { VistaComponent } from './Components/vista/vista.component';
import { VistaAdminComponent } from './Components/vista-admin/vista-admin.component';

export const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'vista', component: VistaComponent },
    { path: 'vista-admin', component: VistaAdminComponent },
  ];
