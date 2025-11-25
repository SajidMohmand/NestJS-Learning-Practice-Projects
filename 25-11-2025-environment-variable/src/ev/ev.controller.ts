/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { EvService } from './ev.service';

@Controller('ev')
export class EvController {

    constructor(private evService: EvService) {}

    @Get('db-url')
    getUrl(){
        return {
            url: this.evService.getDbUrl()
        }
    }
}
