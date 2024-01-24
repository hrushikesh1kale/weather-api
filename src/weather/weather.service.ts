import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { City } from 'src/city/city.schema';

@Injectable()
export class WeatherService {
  async getWeather(cityList: City[]): Promise<any[]> {
    const weatherData: any[] = [];
    for (let city of cityList) {
      try {
        const response = await axios.get(
          `http://api.openweathermap.org/data/2.5/weather?q=${city.name}&appid=${process.env.key}`,
        );
        weatherData.push({
          cityName: city.name,
          weather: response.data.weather[0],
          visibility: response.data.visibility,
          wind: response.data.wind,
          main: response.data.main,
          clouds: response.data.clouds,
          country: response.data.sys.country,
        });
      } catch (exception) {
        weatherData.push({
          cityName: city.name,
          error:"Could not fetch data"
        });
      }
    }
    return weatherData;
  }
}
