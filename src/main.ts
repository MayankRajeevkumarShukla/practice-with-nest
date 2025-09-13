import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger config
  const config = new DocumentBuilder()
    .setTitle('Nest API Playground')
    .setDescription('Test your routes here')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // UI at /api

  await app.listen(3000);
}
bootstrap();
