/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
    private students = [
        { id: 1, name: 'Alice', age: 20 },
        { id: 2, name: 'Bob', age: 22 },
        { id: 3, name: 'Charlie', age: 23 },    
    ];

    // GET method to retrieve all students
    getAllStudents() {
        return this.students;
    }   
    getStudentById(id: number) {


        const student = this.students.find(student => student.id === id);

        if (!student) {
            throw new NotFoundException(`Student with id ${id} not found.`);
        }
        return student;
    }

    // POST method to add a new student
    addStudent(student: { name: string; age: number }) {
        const newStudent = { id: Date.now(), ...student };
        this.students.push(newStudent);
        console.log(this.students);
        return newStudent;
    }

    // DELETE method to remove a student by ID
    deleteStudent(id: number) {
        const stu = this.students.find(s => s.id === id);
        if (!stu) {
            throw new NotFoundException(`Student with id ${id} not found.`);
        }
        
        this.students = this.students.filter(student => student.id !== id);
        return { student: stu, message: `Student with id ${id} deleted.` };
    }

    // PUT method to update a student's information
    updateStudent(id: number, updatedInfo: { name: string; age: number }) {
        const index = this.students.findIndex(student => student.id === id);
        if (index === -1) throw new NotFoundException(`Student with id ${id} not found.`);
        
        this.students[index] = { id, ...updatedInfo };
        return this.students[index];
    }

    // PATCH method to partially update a student's information
    partiallyUpdateStudent(id: number, updatedInfo: Partial<{ name: string; age: number }>) {
        const student = this.students.find(student => student.id === id);
        if (student) {
            Object.assign(student, updatedInfo);
            return student;
        }
        throw new NotFoundException(`Student with id ${id} not found.`);
    }   
}
