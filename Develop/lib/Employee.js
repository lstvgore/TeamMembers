// TODO: Write code to define and export the Employee class
class Employee{
    constructor(name, Id, Email){
        this.name = name;
        this.Id = Id;
        this.Email = Email;
    }

    getName (){
        return this.name;
    }
    getId (){
        return this.Id;
    }
    getEmail(){
        return this.Email;
    }
    getRole(){
        return "Employee";
        }
}

module.exports = Employee;
