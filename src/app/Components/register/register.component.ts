import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
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
