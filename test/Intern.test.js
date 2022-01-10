const Intern = require('../lib/intern');


describe("Intern", () =>{

    describe("School", () =>{
        it("should verify class Intern with specific school", () => {
    
            const school = 'SCHOOL'
    
            const execute = new Intern('Tom', 98, 'Tom@Test.com', 'SCHOOL').getSchool(school);
            expect(execute).toEqual(school);
        })
    });

    describe("EmployeeRole", () =>{
        it("should verify class Intern with specific employee role", () => {
    
            const internRole = 'Intern'
    
            const execute = new Intern('Tom', 98, 'Tom@Test.com', 'SCHOOL').getRole(Intern);
            expect(execute).toEqual(internRole);
        })
    });

    describe("EmployeeName", () =>{
        it("should verify class Intern with employee name", () => {
    
            const employeeName = 'Jessica'
    
            const execute = new Intern('Jessica', '30', 'Jessica@Test.com', 'SCHOOL').getName(Intern);
            expect(execute).toEqual(employeeName);
        })
    });

    describe("EmployeeEmail", () =>{
        it("should verify class Intern with employee email", () => {
    
            const employeeEmail = 'Tom@Test.com'
    
            const execute = new Intern('Tom', '98', 'Tom@Test.com', 'SCHOOL').getEmail(Intern);
            expect(execute).toEqual(employeeEmail);
        })
    });

    describe("EmployeeId", () =>{
        it("should verify class Intern with employee ID", () => {
    
            const employeeId = '98'
    
            const execute = new Intern('Tom', '98', 'Tom@Test.com', 'SCHOOL').getId(Intern);
            expect(execute).toEqual(employeeId);
        })
    });

});