import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { CityService } from "./city.service";
import { AuthGuard } from "src/auth/auth.guard";

@Controller('/api/city')
export class CityController {
    constructor(private cityService: CityService) {}

    @UseGuards(AuthGuard)
    @Post() 
    async addCity(@Body() body:any) {
        this.cityService.addCity(body.name);
        return `${body.name} added to list of cities`;
    }
}