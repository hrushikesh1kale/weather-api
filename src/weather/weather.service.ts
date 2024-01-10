import { Injectable } from "@nestjs/common";
import axios from "axios";

@Injectable()
export class WeatherService {

    async getWeather(cityList: string[]) {
        const weatherData: any = [];
        for(let city of cityList) {
            const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.key}`);
            weatherData.push(response.data);
        }
        return weatherData;
    }
}