import { Component } from '@angular/core';

@Component({
  selector: 'app-vista',
  standalone: true,
  imports: [],
  templateUrl: './vista.component.html',
  styleUrl: './vista.component.css'
})
export class VistaComponent {
  public table: Array<any>=Array(10).fill(0); 
}
