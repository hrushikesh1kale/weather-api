import { Test } from '@nestjs/testing';
import { CityModule } from '../city/city.module';
import { INestApplication } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CityService } from '../city/city.service';
import axios from 'axios';

let app: INestApplication;

beforeAll(async () => {
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
      }),
    ],
  }).compile();

  app = moduleRef.createNestApplication();
  await app.listen(3000);
});

afterAll(async () => {
  await app.close();
});

describe('WeatherController', () => {
  it('/city POST should return unauthorized',async () => {
    const cityDto = {
      name: "Pune",
      user: "user",
      pass: "dslfjlkdsf"
    };

    try {
      const response  = await axios.post('http://nginx/city', cityDto);
      expect(response).toBeUndefined();
    } catch(error) {
      expect(error.response.status).toBe(403);
    }
  });

  it('/city POST should add city to citylist',async () => {
    const cityDto = {
      name: "Pune",
      user: "user",
      pass: "pass"
    };

    try {
      const response  = await axios.post('http://nginx/city', cityDto);
      expect(response.status).toBe(201);
    } catch(error) {
      expect(error.response.status).toBe(201);
    }
  });
});
