const Employee = require("../lib/Employee");

describe("Employee Class", () =>{
    describe("Initialization", ()=>{
        it("should make an object with name, id & email properties", () =>{
            // Arrange
            const employee = new Employee("Malvina", "1234", "employee@example.com");
            // Act
            // Assert
            expect(employee).toEqual({
                name: "Malvina",
                id: "1234",
                email: "employee@example.com"
            })
        })
    })
})