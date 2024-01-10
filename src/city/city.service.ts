import { Injectable } from "@nestjs/common";

@Injectable()
export class CityService {
    getAllCities(): string[] {
        const cityList: string[] = [];
        cityList.push('mumbai');
        cityList.push('pune');
        cityList.push('chennai');
        return cityList;
    }
}