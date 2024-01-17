import { ApiProperty } from "@nestjs/swagger";

export class CreateCityDto {
    @ApiProperty({
        description:"The name of the city to add",
        example: "Pune",
        required: true
    })
    name: string;

    @ApiProperty({
        description:"The username of admin",
        example:"user",
        required: true
    })
    user: string;

    @ApiProperty({
        description:"The password of admin",
        example:"pass",
        required: true
    })
    pass: string;
}