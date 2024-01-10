import { Module } from '@nestjs/common';
import { WeatherController } from './weather.controller';
import { WeatherService } from './weather.service';
import { CityModule } from 'src/city/city.module';

@Module({
    controllers:[WeatherController],
    providers:[WeatherService],
    imports:[CityModule]
})
export class WeatherModule {}
