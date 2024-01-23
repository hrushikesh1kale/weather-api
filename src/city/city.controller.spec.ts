import { Test } from "@nestjs/testing";
import { CityController } from "./city.controller"
import { AuthModule } from "../auth/auth.module";
import { MongooseModule } from "@nestjs/mongoose";
import { INestApplication } from "@nestjs/common";
import { CityModule } from "./city.module";
import { CreateCityDto } from "./create.city.dto";
import axios from "axios";

describe('CityController', () => {
  let cityController: CityController;
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
      })
    ]
    }).compile();

    app = moduleRef.createNestApplication();
    await app.listen(3001);

    cityController = app.get<CityController>(CityController);
  });


  it('CityController should be defined', async () => {
    expect(cityController).toBeDefined();
  });

  it('/city POST - Add city to database',async () => {
    const cityDto: CreateCityDto = {
      name: "Pune",
      user: "user",
      pass: "pass"
    }
    try{
      const response = await axios.post('http://app:3001/city', cityDto);
      expect(response).toBeDefined();
      expect(response.status).toBe(201);
    } catch(exception) {

    }
  });

  it('/city POST - should return unauthorized',async () => {
    const cityDto: CreateCityDto = {
      name: "Pune",
      user: "user",
      pass: "p"
    }

    try {
      const response = await axios.post('http://app:3001/city', cityDto);
      expect(response.status).toBe(403);
    } catch(exception) {
      
    }
  });

  it('/city POST - should return bad request',async () => {
    const cityDto: CreateCityDto = {
      name: "",
      user: "user",
      pass: "pass"
    }

    try {
      const response = await axios.post('http://app:3001/city', cityDto);
      expect(response.status).toBe(400);
    } catch(exception) {

    }
  })
});