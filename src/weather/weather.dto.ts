import { ApiProperty } from '@nestjs/swagger';

export class WeatherDto {
  @ApiProperty({
    description: 'name of the city',
    example: 'Pune',
  })
  cityName: string;

  @ApiProperty({
    description: 'Country code',
    example: 'IN',
  })
  country: string;

  @ApiProperty({
    description: 'Weather information',
    example: {
      id: 800,
      main: 'Clear',
      description: 'clear sky',
      icon: '01d',
    },
  })
  weather: Object;

  @ApiProperty({
    description: 'Data about temperature',
    example: {
      temp: 301.84,
      feels_like: 300.72,
      temp_min: 301.84,
      temp_max: 301.84,
      pressure: 1008,
      humidity: 29,
      sea_level: 1008,
      grnd_level: 948,
    },
  })
  main: Object;

  @ApiProperty({
    description: 'Information about wind',
    example: {
      speed: 4.91,
      deg: 252,
      gust: 3.93,
    },
  })
  wind: Object;

  @ApiProperty({
    description: 'Information about clouds',
    example: {
      all: 5,
    },
  })
  clouds: Object;

  @ApiProperty({
    description: 'Visibility index',
    example: 10000,
  })
  visibility: number;
}
