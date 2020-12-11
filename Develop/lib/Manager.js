// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const = require("./Employee");
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, Id, Email, OfficeNumber) {
        super(name, Id, Email);
        this.OfficeNumber = OfficeNumber;
    }

    getOfficeNumber() {
        return this.OfficeNumber;
    }
    getRole() {
        return "Manager";
    }
}
module.exports = Manager;

