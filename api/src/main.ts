import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = process.env.PORT || 5000;

  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Work Share API')
    .setDescription('API routes')
    .setVersion('1.0')
    .addTag('Work Share')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);

  await app.listen(PORT);
}
bootstrap();
