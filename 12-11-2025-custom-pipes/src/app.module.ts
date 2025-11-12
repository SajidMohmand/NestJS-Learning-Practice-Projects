import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MynameController } from './myname./myname..controller';
import { StudentController } from './student/student.controller';

@Module({
  imports: [],
  controllers: [AppController, MynameController, StudentController],
  providers: [AppService],
})
export class AppModule {}
