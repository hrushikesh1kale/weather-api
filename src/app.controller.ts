import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("/api")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/weather")
  getWeatherData() {
    let weatherData = {
      "city":"pune",
      "temp": 30
    };
    return weatherData;
  }
}