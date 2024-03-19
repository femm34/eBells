import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { configureCloudinary } from './config/cloudinary.provider.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.enableCors();

  configureCloudinary();
  const config = new DocumentBuilder()
    .setTitle('eBells docs')
    .setDescription('The eBells API description')
    .setVersion('1.0')
    .addTag('eBells')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document, {
    swaggerOptions: {
      docExpansion: 'none',
      tagsSorter: 'alpha',
    },
  });
  await app.listen(3000);
}
bootstrap();
