import { Injectable } from '@nestjs/common';
import { of } from 'rxjs';
import axios from 'axios';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getCityList(): string[] {
    let cityList: string[] = [];
    cityList.push("pune");
    return cityList;
  }

  async getCityWeather(city: string) {
    const key = "";
    let url = `http://api.openweathermap.org/data/2.5/weather?q=city&appid=${key}`;
    
    let response = await axios.get(url);
    return response.data;
  }
  async getWeatherData(cityList: string[]) {
    let weatherData = [];
    for(let city of cityList) {
      const response = await this.getCityWeather(city);
      const weather = {
        "city": city,
        "weather": response
      };
      weatherData.push(weather);
    }
    return weatherData;
  }
}
