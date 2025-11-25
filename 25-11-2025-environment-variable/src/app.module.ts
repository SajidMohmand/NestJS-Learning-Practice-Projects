/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { EvService } from './ev/ev.service';
import { EvController } from './ev/ev.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
    isGlobal: true,
  })
],
  
  controllers: [AppController, EvController],
  providers: [AppService, EvService],
})
export class AppModule {}
