import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  mContrasena(): void {
    const passwordField = document.getElementById('contraseña') as HTMLInputElement;
    const showPasswordCheckbox = document.getElementById('mostContraseña') as HTMLInputElement;
    if (showPasswordCheckbox.checked) {
      passwordField.type = 'text';
    } else {
      passwordField.type = 'password';
    }
  }
 

}
