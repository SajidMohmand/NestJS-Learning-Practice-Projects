/* eslint-disable prettier/prettier */
import { Controller, Get, Param } from '@nestjs/common';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
    constructor(private employeeService: EmployeeService) { }

    @Get()
    getAllEmployees() {
        return this.employeeService.getAllEmployees();
    }
    @Get(':id')
    getEmployeeById(@Param('id') id: number) {
        return this.employeeService.getEmployeeById(Number(id));
    }
}
