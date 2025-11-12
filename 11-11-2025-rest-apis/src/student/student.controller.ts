/* eslint-disable prettier/prettier */
import { Controller, Delete, Get, Param, Post, Body, Put, Patch } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
    constructor(private readonly studentService: StudentService) {}

    @Get()
    getAllStudents() {
        return this.studentService.getAllStudents();
    }

    @Get(':id')
    getStudentById(@Param('id') id: number) {
        return this.studentService.getStudentById(Number(id));
    }

    @Post()
    addStudent(@Body() student: { name: string; age: number }) {
        return this.studentService.addStudent(student);
    }

    @Delete(':id')
    deleteStudent(@Param('id') id: number) {
        return this.studentService.deleteStudent(Number(id));
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() body: { name: string; age: number },
    ) {
        return this.studentService.updateStudent(Number(id), body);
    }

    @Patch(':id')
    partiallyUpdate(@Param('id') id: string, @Body() body: Partial<{ name: string; age: number }>,
    ) {
        return this.studentService.partiallyUpdateStudent(Number(id), body);
    }

    

}
