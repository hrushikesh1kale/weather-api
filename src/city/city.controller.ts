import { Body, Controller, HttpCode, HttpException, HttpStatus, Post, UseGuards } from '@nestjs/common';
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
    if(body.name == undefined || body.name == "") {
      throw new HttpException("Please specify a city name", HttpStatus.BAD_REQUEST);
    }
    try {
      this.cityService.addCity({name: body.name});
      return `${body.name} added to list of cities`;
    } catch (exception) {
      throw new HttpException('Could not add city to database', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
