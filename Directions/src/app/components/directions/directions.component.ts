import { Component, OnInit } from '@angular/core';
import { DirectionsService } from '../../services/directions.service'; 
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-directions',
  standalone: true,
  templateUrl: './directions.component.html',
  styleUrls: ['./directions.component.css'],
  imports: [FormsModule, CommonModule], 
})
export class DirectionsComponent implements OnInit {
  from: string = 'BOSTON, MA'; 
  to: string = 'NEW YORK, NY';   
  directions: any;
  selectedStep: any;
  totalDistance: number = 0; // Variable to hold total distance
  totalTime: string = '00:00:00'; // Variable to hold total time

  constructor(private directionsService: DirectionsService) { }

  ngOnInit(): void {
    this.getDirections();
  }

  getDirections(): void {
    this.directionsService.getDirections(this.from, this.to).subscribe(data => {
      this.directions = data.route;
      this.calculateTotals(); 
    });
  }

  calculateTotals(): void {
    this.totalDistance = 0;
    let totalSeconds = 0; // Variable to hold total time in seconds

    // Calculate total distance and time
    if (this.directions && this.directions.legs) {
      const maneuvers = this.directions.legs[0].maneuvers;
      this.totalDistance = maneuvers.reduce((acc: number, step: any) => acc + step.distance, 0);
      totalSeconds = maneuvers.reduce((acc: number, step: any) => acc + step.time, 0); // Assuming time is provided in seconds for each step
    }

    // Convert total time in seconds to HH:MM:SS format
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    this.totalTime = `${this.padZero(hours)}:${this.padZero(minutes)}:${this.padZero(seconds)}`;
  }

  padZero(num: number): string {
    return num < 10 ? '0' + num : num.toString(); // Adds a leading zero if the number is less than 10
  }

  onStepSelect(step: any): void {
    this.selectedStep = step;
  }

  onLocationChange(): void {
    this.selectedStep = null;
    this.getDirections();
  }
}
