import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ResponseFormatInterceptor } from './response-format/response-format.interceptor';
import { AllExceptionsFilter } from './all-exceptions/all-exceptions.filter';

async function bootstrap() {
  console.log('|||||||||||||||||||||||||||||||||||||||||||||||||')
  console.log('||||||||yes the fucking server is running||||||||')
  console.log('|||||||||||||||||||||||||||||||||||||||||||||||||')
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new ResponseFormatInterceptor());
  app.useGlobalFilters(new AllExceptionsFilter());
  await app.listen(3000);
}
bootstrap();
