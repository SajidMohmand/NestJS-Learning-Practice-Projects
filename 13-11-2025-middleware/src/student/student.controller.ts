/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';

@Controller('student')
export class StudentController {

    @Get("login")
    getStudents(): string {
        return 'Student controller is working!';
    }
}
