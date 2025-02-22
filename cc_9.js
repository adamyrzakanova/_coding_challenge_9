//Task 1 - Created Employee Class

class Employee { //Creating class Employee
    constructor(name, id, department, salary) { //Constructor setting up specified properties
        this.name = name;
        this.id = id;
        this.department = department;
        this.salary = salary;
    };
    
    getDetails() { //Setting up getDetails method
        return `Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}`; //Returning employee details formatted in a template literal
    };
    
    calculateAnnualSalary() { //Setting up calculateAnnualSalary method
        return this.salary * 12; //Returning employee's salary times twelve months
    };
};

const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000); //Creating a new employee assigned to emp1

console.log(emp1.getDetails()); //Logging
console.log(emp1.calculateAnnualSalary()); //Logging
