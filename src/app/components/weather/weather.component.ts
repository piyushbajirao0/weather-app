import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WeatherService } from 'src/app/service/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  public weatherSearchForm: any = FormGroup;
  public weatherData: any = null;
  isTempInCelsius: any = 'celsius';

  constructor(
    private formBuilder: FormBuilder,
    private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherSearchForm = this.formBuilder.group({
      location: ['', Validators.required],
      isCelsius: ['celsius', Validators.required],
    });
    this.weatherData = null;
  }

  onInput() {
    this.weatherData = null
  }

  onClickTemp(value: string): void{
    this.isTempInCelsius = value;
  }

  getWeatherData(locationValue: any) {
    this.weatherData = null;
    this.isTempInCelsius = 'celsius';
    this.weatherSearchForm.get('isCelsius').setValue('celsius');
    this.weatherService.getWeather(locationValue.location).subscribe(data => {
      this.weatherData = data;
    });
  }
}
