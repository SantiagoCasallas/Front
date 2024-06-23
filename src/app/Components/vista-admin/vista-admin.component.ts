import { Component } from '@angular/core';

@Component({
  selector: 'app-vista-admin',
  standalone: true,
  imports: [],
  templateUrl: './vista-admin.component.html',
  styleUrl: './vista-admin.component.css'
})
export class VistaAdminComponent {
  public table: Array<any>=Array(10).fill(0); 
}
