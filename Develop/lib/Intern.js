// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, Id, Email, School){
        super(name, Id, Email);
        this.School = School;
    }

    getSchool() {
        return this.School;
    }
    getRole() {
        return "Intern"
    }
}

module.exports = Intern;