const Employee = require("../lib/Employee")

class Intern extends Employee {
    constructor(name,id,email,school) {
        // using the super syntax to call on parent constructor 
        super(name, id, email); 

        this.school = school; 
    }
    getSchool() {
        return this.school; 
    }

    getRole() {
        return "Intern"; 
    }
}

module.exports = Intern; 