import { Module } from '@nestjs/common';
import { CityController } from './city.controller';
import { CityService } from './city.service';
import { AuthModule } from 'src/auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { City, CitySchema } from './city.schema';

@Module({
  controllers: [CityController],
  providers: [CityService],
  exports: [CityService],
  imports: [
    AuthModule,
    MongooseModule.forFeature([{ name: City.name, schema: CitySchema }]),
  ],
})
export class CityModule {}
