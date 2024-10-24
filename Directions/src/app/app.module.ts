import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http'; 
import { AppComponent } from './app.component';
import { DirectionsComponent } from './components/directions/directions.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectionsComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClient, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
