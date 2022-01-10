const Employee = require('../lib/employee');
const Manager = require('../lib/manager');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');


describe("Employee", () => {
   
    describe("EmployeeRole", () =>{
        it("should verify class Employee with employee role", () => {
    
            const employeeRole = 'Employee'
    
            const execute = new Employee('Tom', 98, 'Tom@Test.com', 30).getRole(Employee);
            expect(execute).toEqual(employeeRole);
        })
    });

    describe("EmployeeName", () =>{
        it("should verify class Employee with employee name", () => {
    
            const employeeName = 'Jessica'
    
            const execute = new Employee('Jessica', 30, 'Jessica@Test.com', 30).getName(Employee);
            expect(execute).toEqual(employeeName);
        })
    });




});