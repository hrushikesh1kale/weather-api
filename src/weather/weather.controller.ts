import { Controller, Get } from '@nestjs/common';
import { CityService } from '../city/city.service';
import { WeatherService } from './weather.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { WeatherDto } from './weather.dto';
import { City } from 'src/city/city.schema';

@ApiTags('Weather')
@Controller('/weather')
export class WeatherController {
  constructor(
    private cityService: CityService,
    private weatherService: WeatherService,
  ) {}

  @ApiResponse({
    status: 200,
    description: 'Weather data of all configured cities',
    type: WeatherDto,
    isArray: true,
  })
  @Get()
  async getWeather(): Promise<WeatherDto[]> {
    const cityList: City[] = await this.cityService.getAllCities();
    return await this.weatherService.getWeather(cityList);
  }
}
