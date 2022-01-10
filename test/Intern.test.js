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

});