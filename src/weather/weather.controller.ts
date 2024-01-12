import { Controller, Get } from "@nestjs/common";
import { CityService } from "src/city/city.service";
import { WeatherService } from "./weather.service";

@Controller("/api/weather")
export class WeatherController {
    constructor(private cityService: CityService, private weatherService: WeatherService) {}

    @Get()
    async getWeather() {
        return this.weatherService.getWeather(await this.cityService.getAllCities());
    }
}