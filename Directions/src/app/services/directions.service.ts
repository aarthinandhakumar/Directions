import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DirectionsService {

  private apiKey: string = 'mHGsqhtDWG5unslZx4A0FmCHvrneL3Ns';

  constructor(private http: HttpClient) { }

  getDirections(from: string, to: string): Observable<any> {
    // Construct the URL dynamically
    let url: string = `http://www.mapquestapi.com/directions/v2/route?key=${this.apiKey}&from=${from}&to=${to}&manMaps=true`;
    
    // Return the HTTP GET request
    return this.http.get(url);
  }
}