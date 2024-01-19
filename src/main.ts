import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { configDotenv } from 'dotenv';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
declare const module: any;

async function bootstrap() {
  configDotenv()
  const app = await NestFactory.create(AppModule);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }

  const config = new DocumentBuilder()
    .setTitle('Weather API')
    .setDescription('Add cities to database and fetch weather of configured cities from openweathermap.org')
    .addTag('weather')
    .setBasePath('/swagger')
    .addBasicAuth()
    .build();


  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/openapi', app, document);

  await app.listen(3000);

}
bootstrap();

