/* eslint-disable prettier/prettier */
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './middleware/logger/logger.middleware';
import { StudentController } from './student/student.controller';

@Module({
  imports: [],
  controllers: [AppController, StudentController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {

    
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
