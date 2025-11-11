/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class EmployeeService {
    private employees = [
        { id: 1, name: 'John Doe', position: 'Developer' },
        { id: 2, name: 'Jane Smith', position: 'Designer' },
        { id: 3, name: 'Mike Johnson', position: 'Manager' },
    ];
    getAllEmployees() {
        return this.employees;
    }
    getEmployeeById(id: number) {
        return this.employees.find(employee => employee.id === id);
    }
}
