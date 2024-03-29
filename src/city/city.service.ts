import { Injectable } from '@nestjs/common';
import { City } from './city.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CityService {
  constructor(@InjectModel('City') private cityModel: Model<City>) {}

  async getAllCities(): Promise<City[]> {
    return this.cityModel.find();
  }
  async addCity(city: City) {
    return this.cityModel.create(city);
  }
}
