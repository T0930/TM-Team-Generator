const Employee = require('../lib/employee');
const Manager = require('../lib/manager');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');


describe("Employee", () => {
   
    describe("EmployeeRole", () =>{
        it("should verify class Employee with employee role", () => {
    
            const employeeRole = 'Employee'
    
            const execute = new Employee('Tim', '98', 'Tim@Test.com').getRole(Employee);
            expect(execute).toEqual(employeeRole);
        })
    });

    describe("EmployeeName", () =>{
        it("should verify class Employee with employee name", () => {
    
            const employeeName = 'Jessica'
    
            const execute = new Employee('Jessica', '30', 'Jessica@Test.com').getName(Employee);
            expect(execute).toEqual(employeeName);
        })
    });

    describe("EmployeeEmail", () =>{
        it("should verify class Employee with employee email", () => {
    
            const employeeEmail = 'Tom@Test.com'
    
            const execute = new Employee('Tom', '98', 'Tom@Test.com').getEmail(Employee);
            expect(execute).toEqual(employeeEmail);
        })
    });

    describe("EmployeeId", () =>{
        it("should verify class Employee with employee ID", () => {
    
            const employeeId = '98'
    
            const execute = new Employee('Tom', '98', 'Tom@Test.com').getId(Employee);
            expect(execute).toEqual(employeeId);
        })
    });

});