import { Injectable } from "@nestjs/common";
import axios from "axios";
import { City } from "src/city/city.schema";

@Injectable()
export class WeatherService {

    async getWeather(cityList: City[]) {
        const weatherData: any = [];
        for(let city of cityList) {
            const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city.name}&appid=${process.env.key}`);
            weatherData.push(response.data);
        }
        return weatherData;
    }
}