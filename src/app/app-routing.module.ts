import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherComponent } from './components/weather/weather.component';

var pre_url = 'weather-app/';
const routes: Routes = [
  {
    path: '',
    redirectTo: pre_url + 'weather',
    pathMatch: 'full',
  },
  { path: pre_url + 'weather', component: WeatherComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
