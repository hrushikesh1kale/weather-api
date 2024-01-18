import { Body, Controller, HttpCode, Post, UseGuards } from '@nestjs/common';
import { CityService } from './city.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { ApiBasicAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateCityDto } from './create.city.dto';

@ApiTags('City')
@Controller('/city')
export class CityController {
  constructor(private cityService: CityService) {}

  @UseGuards(AuthGuard)
  @ApiBasicAuth('basic')
  @ApiResponse({
    status: 200,
    description: 'Name of the added city',
    type: String,
  })
  @Post()
  async addCity(@Body() body: CreateCityDto) {
    this.cityService.addCity({ name: body.name });
    return `${body.name} added to list of cities`;
  }
}
