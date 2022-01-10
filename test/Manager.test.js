
const Manager = require('../lib/manager');


describe("Manager", () =>{

    describe("OfficeNumber", () =>{
        it("should verify class Manager with specific office number", () => {
    
            const officeNumb = '30'
    
            const execute = new Manager('Tom', 98, 'Tom@Test.com', '30').getOfficeNumber(officeNumb);
            expect(execute).toEqual(officeNumb);
        })
    });

    describe("EmployeeRole", () =>{
        it("should verify class Manager with specific employee role", () => {
    
            const managerRole = 'Manager'
    
            const execute = new Manager('Tom', 98, 'Tom@Test.com', '30').getRole(Manager);
            expect(execute).toEqual(managerRole);
        })
    });

    describe("EmployeeName", () =>{
        it("should verify class Manager with employee name", () => {
    
            const employeeName = 'Jessica'
    
            const execute = new Manager('Jessica', '30', 'Jessica@Test.com', '30').getName(Manager);
            expect(execute).toEqual(employeeName);
        })
    });

    describe("EmployeeEmail", () =>{
        it("should verify class Manager with employee email", () => {
    
            const employeeEmail = 'Tom@Test.com'
    
            const execute = new Manager('Tom', '98', 'Tom@Test.com', '30').getEmail(Manager);
            expect(execute).toEqual(employeeEmail);
        })
    });

    describe("EmployeeId", () =>{
        it("should verify class Manager with employee ID", () => {
    
            const employeeId = '98'
    
            const execute = new Manager('Tom', '98', 'Tom@Test.com', '30').getId(Manager);
            expect(execute).toEqual(employeeId);
        })
    });

});