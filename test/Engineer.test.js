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

});