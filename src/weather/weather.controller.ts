import { Controller, Get } from "@nestjs/common";
import { CityService } from "src/city/city.service";
import { WeatherService } from "./weather.service";

@Controller("/api/weather")
export class WeatherController {
    constructor(private cityService: CityService, private weatherService: WeatherService) {}

    @Get()
    async getWeather() {
        const cityList: string[] = this.cityService.getAllCities();
        return this.weatherService.getWeather(cityList);
    }
}