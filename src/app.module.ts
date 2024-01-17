import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CityModule } from './city/city.module';
import { WeatherModule } from './weather/weather.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [CityModule, WeatherModule, AuthModule, MongooseModule.forRoot(process.env.DB_URI, {
    dbName:process.env.DB_NAME,
    auth: {
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
    },
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
