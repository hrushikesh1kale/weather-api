import { Test } from '@nestjs/testing';
import { CityModule } from '../city/city.module';
import { INestApplication } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CityService } from '../city/city.service';
import { WeatherModule } from './weather.module';
import axios from 'axios';

let app: INestApplication;
let cityService: CityService;

beforeAll(async () => {
  const moduleRef = await Test.createTestingModule({
    imports: [
      AuthModule,
      CityModule,
      WeatherModule,
      MongooseModule.forRoot(process.env.DB_URI, {
        dbName: process.env.DB_NAME,
        auth: {
          username: process.env.DB_USERNAME,
          password: process.env.DB_PASSWORD,
        },
      }),
    ],
  }).compile();

  app = moduleRef.createNestApplication();
  await app.listen(3000);
  cityService = app.get<CityService>(CityService);
});

afterAll(async () => {
  await app.close();
});

describe('WeatherController', () => {
  it('/weather GET', async () => {
    await cityService.addCity({ name: 'Pune' });
    await cityService.addCity({ name: 'dsfsdfsdf' });

    const response = await axios.get('http://nginx/weather');
    expect(response).toBeDefined();
    expect(response.status).toBe(200);
    expect(response.data.length).toBe(2);
    

    const w1 = response.data[0];
    const w2 = response.data[1];

    expect(w1).toBeDefined();
    expect(w1).toStrictEqual({
      cityName: expect.any(String),
      weather: {
        id: expect.any(Number),
        main: expect.any(String),
        description: expect.any(String),
        icon: expect.any(String)
      },
      visibility: expect.any(Number),
      wind: {
        speed: expect.any(Number),
        deg: expect.any(Number),
        gust: expect.any(Number)
      },
      main: {
        temp:expect.any(Number),
        feels_like: expect.any(Number),
        temp_min: expect.any(Number),
        temp_max: expect.any(Number),
        pressure: expect.any(Number),
        humidity: expect.any(Number),
        sea_level: expect.any(Number),
        grnd_level: expect.any(Number)
      },
      clouds: expect.any(Object),
      country: 'IN'
    });

    expect(w2).toBeDefined();
    expect(w2.error).toBeDefined();

  });
});
