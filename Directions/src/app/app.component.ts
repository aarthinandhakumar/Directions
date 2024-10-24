import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DirectionsComponent } from './components/directions/directions.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DirectionsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Directions App';
}
