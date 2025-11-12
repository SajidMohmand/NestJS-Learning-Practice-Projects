/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { UpercasePipe } from 'src/common/pipes/upercase/upercase.pipe';

@Controller('student')
export class StudentController {

    @Post("register")
    transformName(@Body("name", new UpercasePipe()) name: string) {
        return { message : `Hello ${name}` };
    }
}
