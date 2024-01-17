import { Injectable } from "@nestjs/common";
import axios from "axios";
import { City } from "src/city/city.schema";
import { WeatherDto } from "./weather.dto";

@Injectable()
export class WeatherService {

    async getWeather(cityList: City[]): Promise<WeatherDto[]> {
        const weatherData: WeatherDto[] = [];
        for(let city of cityList) {
            try {
                const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city.name}&appid=${process.env.key}`);
                weatherData.push({
                    cityName: city.name,
                    weather: response.data.weather,
                    visibility: response.data.visibility,
                    wind: response.data.wind,
                    main: response.data.main,
                    clouds: response.data.clouds,
                    country: response.data.sys.country
                });
            } catch(exception) {
                console.log(exception);
            }
        }
        return weatherData;
    }
}