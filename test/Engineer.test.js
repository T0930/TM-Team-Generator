const Engineer = require('../lib/engineer');


describe("Engineer", () =>{

    describe("github", () =>{
        it("should verify class Engineer with github profile name", () => {
    
            const eGithub = 'git-Engineer-hub'
    
            const execute = new Engineer('Tom', 98, 'Tom@Test.com', 'git-Engineer-hub').getGithub(eGithub);
            expect(execute).toEqual(eGithub);
        })
    });

    describe("EngineerRole", () =>{
        it("should verify class Engineer with specific employee role", () => {
    
            const engineerRole = 'Engineer'
    
            const execute = new Engineer('Tom', 98, 'Tom@Test.com', 'git-Engineer-hub').getRole(Engineer);
            expect(execute).toEqual(engineerRole);
        })
    });

    describe("EmployeeName", () =>{
        it("should verify class Engineer with employee name", () => {
    
            const employeeName = 'Jessica'
    
            const execute = new Engineer('Jessica', '30', 'Jessica@Test.com', 'git-Engineer-hub').getName(Engineer);
            expect(execute).toEqual(employeeName);
        })
    });

    describe("EmployeeEmail", () =>{
        it("should verify class Engineer with employee email", () => {
    
            const employeeEmail = 'Tom@Test.com'
    
            const execute = new Engineer('Tom', '98', 'Tom@Test.com', 'git-Engineer-hub').getEmail(Engineer);
            expect(execute).toEqual(employeeEmail);
        })
    });

    describe("EmployeeId", () =>{
        it("should verify class Engineer with employee ID", () => {
    
            const employeeId = '98'
    
            const execute = new Engineer('Tom', '98', 'Tom@Test.com', 'git-Engineer-hub').getId(Engineer);
            expect(execute).toEqual(employeeId);
        })
    });

});