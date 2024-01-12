import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CityModule } from './city/city.module';
import { WeatherModule } from './weather/weather.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [CityModule, WeatherModule, AuthModule, MongooseModule.forRoot('mongodb://localhost/weather')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
