import { Body, Controller, Post } from "@nestjs/common";
import { CityService } from "./city.service";

@Controller('/api/city')
export class CityController {
    constructor(private cityService: CityService) {}

    @Post()
    async addCity(@Body() body:any) {
        this.cityService.addCity(body.name);
        return `${body.name} added to list of cities`;
    }
}