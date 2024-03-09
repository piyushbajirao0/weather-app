import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  myApiKey: string = '208c916ce6ecc0f13c372c20a29c9e11';

  constructor(private http: HttpClient) { }

  getWeather(location: any): Observable<any> {
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&cnt=120&appid=${this.myApiKey}`);
  }
}
