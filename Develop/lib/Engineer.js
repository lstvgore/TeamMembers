// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, Id, Email, github){
        super(name, Id, Email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }
    getRole() {
        return "Engineer"
    }
}

module.exports = Engineer;