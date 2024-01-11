import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CityModule } from './city/city.module';
import { WeatherModule } from './weather/weather.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [CityModule, WeatherModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
