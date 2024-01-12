import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { CityService } from "./city.service";
import { AuthGuard } from "src/auth/auth.guard";
import { City } from "./city.schema";

@Controller('/api/city')
export class CityController {
    constructor(private cityService: CityService) {}

    @UseGuards(AuthGuard)
    @Post() 
    async addCity(@Body() body:any) {
        this.cityService.addCity({"name": body.name});
        return `${body.name} added to list of cities`;
    }
}