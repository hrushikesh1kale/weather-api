import { Test } from '@nestjs/testing';
import { CityModule } from '../city/city.module';
import { INestApplication } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import axios from 'axios';
import { CityService } from '../city/city.service';

describe('WeatherService', () => {
  let app: INestApplication;
  let cityService: CityService;

  beforeAll( async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [
        AuthModule,
        CityModule,
        MongooseModule.forRoot(process.env.DB_URI, {
        dbName: process.env.DB_NAME,
        auth: {
          username: process.env.DB_USERNAME,
          password: process.env.DB_PASSWORD,
        },
      })
    ]
    }).compile();

    app = moduleRef.createNestApplication();
    cityService = app.get<CityService>(CityService);
    await app.listen(3000);
  })
  
  it('/weather GET - should return weather data from openweathermap',async () => {
    cityService.addCity({name: "Pune"});
    cityService.addCity({name: "sdlfjslfd"});
    cityService.addCity({name: "Mumabai"});

    try {
      const response = await axios.get('app:3000/weather');

      expect(response.status).toBe(200);
      console.log(response);
    } catch(exception) {

    }
    
  });
});
