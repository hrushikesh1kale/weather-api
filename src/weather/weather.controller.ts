import { Controller, Get } from "@nestjs/common";
import { CityService } from "src/city/city.service";
import { WeatherService } from "./weather.service";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { WeatherDto } from "./weather.dto";

@ApiTags('Weather')
@Controller("/weather")
export class WeatherController {
    constructor(private cityService: CityService, private weatherService: WeatherService) {}

    @ApiResponse({
        status:200,
        description: "Weather data of all configured cities",
        type: WeatherDto,
        isArray: true
    })
    @Get()
    async getWeather(): Promise<WeatherDto[]> {
        return this.weatherService.getWeather(await this.cityService.getAllCities());
    }
}