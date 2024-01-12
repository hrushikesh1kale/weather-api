import { Injectable } from "@nestjs/common";
import { readFileSync, writeFileSync } from "fs";
import { City } from "./city.schema";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class CityService {
    constructor(@InjectModel('City') private cityModel: Model<City>) {}

    getAllCities() {
        return this.cityModel.find();
    }
    async addCity(city: City) {
        this.cityModel.create(city)
    }
    async writeFile(fileName: string, data: string) {
        writeFileSync(fileName, data);
    }

}