import { Injectable } from "@nestjs/common";
import { readFileSync, writeFileSync } from "fs";

@Injectable()
export class CityService {
    getAllCities(): string[] {
        let cityList: string[];
        try {
            cityList = JSON.parse(readFileSync('city-list.json', 'utf-8'));
        } catch(error) {
            console.log('cannot open file city-list.json');
        }
        return cityList;
    }
    async addCity(city: string) {
        let cityList: string[] = this.getAllCities();
        if(cityList.includes(city)) return;
        
        cityList.push(city);
        this.writeFile('city-list.json', JSON.stringify(cityList));
    }
    async writeFile(fileName: string, data: string) {
        writeFileSync(fileName, data);
    }
}