import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class City {
  @Prop({ required: true })
  name: string;
}

export const CitySchema = SchemaFactory.createForClass(City);
