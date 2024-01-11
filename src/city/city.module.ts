import { Module } from '@nestjs/common';
import { CityController } from './city.controller';
import { CityService } from './city.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
    controllers:[CityController],
    providers:[CityService],
    exports:[CityService],
    imports:[AuthModule]
})
export class CityModule {}
