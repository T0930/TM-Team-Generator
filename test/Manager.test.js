
const Manager = require('../lib/manager');


describe("Manager", () =>{

    describe("OfficeNumber", () =>{
        it("should verify class Manager with specific office number", () => {
    
            const officeNumb = 30
    
            const execute = new Manager('Tom', 98, 'Tom@Test.com', 30).getOfficeNumber(officeNumb);
            expect(execute).toEqual(officeNumb);
        })
    });

    describe("EmployeeRole", () =>{
        it("should verify class Manager with specific employee role", () => {
    
            const managerRole = 'Manager'
    
            const execute = new Manager('Tom', 98, 'Tom@Test.com', 30).getRole(Manager);
            expect(execute).toEqual(managerRole);
        })
    });

});