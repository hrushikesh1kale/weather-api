import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { configDotenv } from 'dotenv';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
declare const module: any;

async function bootstrap() {
  console.log(process.env.DB_URI);
  console.log();
  console.log();
  console.log();
  console.log();
  console.log();
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
    .build();


  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);

  console.log(document);

}
bootstrap();
