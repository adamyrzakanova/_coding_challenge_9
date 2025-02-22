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

//Task 2 - Created Manager Class with Inheritance

class Manager extends Employee{ //Creating class Mangager extending from Employee
    constructor(name, id, department, salary, teamSize) { //Constructor setting up specified properties
        super(name, id, department, salary); //Inheriting from Employee using super
        this.teamSize = teamSize; //Adding teamSize
    };

    getDetails() { //Setting up new getDetails method including teamSize
        return `Manager: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}, Team Size: ${this.teamSize}`; //Returning employee details, including teamSize, formatted in a template literal
    };

    calculateBonus() { //Setting up calculateBonus method
        return super.calculateAnnualSalary() * 0.1; //Calculating bonus as ten percent of annual salary
    };

    calculateAnnualSalary() { //Task 4 - Modifying calculateAnnualSalary() to consider bonuses for managers.
        return super.calculateAnnualSalary() + this.calculateBonus(); //Returning employee's annual salary + calculateBonus()
    };
}

const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5); //Creating a new manager assigned to mgr1

console.log(mgr1.getDetails()); //Logging
console.log(mgr1.calculateBonus()); //Logging

//Task 3 - Created Company Class

class Company { //Creating class Company
    constructor(name, employees) { //Constructor setting up specified properties
        this.name = name;
        this.employees = []; //Initializing empty employees array
    };
    
    addEmployee(employee) { //Setting up addEmployee method
        this.employees.push(employee); //.push() employee to the employees array
    }

    listEmployees() { //Setting up listEmployees method
        this.employees.forEach(employee => {console.log(employee.getDetails())}); //console.log the getDetails method forEach employee in employees array
    }

    calculateTotalPayroll() { //Task 4 - Add a method calculateTotalPayroll() to the Company class
        return this.employees.reduce((total, employee) => total + employee.calculateAnnualSalary(), 0); //Task 4 - returns the sum of all employee salaries (including managers)
    }

    promoteToManager (employee, teamSize) { //Task 5 - Add a method promoteToManager(employee, teamSize) in the Company class.
        const index = this.employees.indexOf(employee); //Finding employee position in employees array as index
        this.employees[index] = new Manager(employee.name, employee.id, employee.department, employee.salary, teamSize); //Creating a Manager with the properties of employee saved at index
    }
}

const company = new Company("TechCorp"); //Test case
company.addEmployee(emp1); //Adding emp1 using addEmployee method
company.addEmployee(mgr1); //Adding mgr1 using addEmployee method
company.listEmployees(); //Logging
