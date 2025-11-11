/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {

  
  @Get()
  getUser() {
    return 'get message successfully runned!';
  }
}
