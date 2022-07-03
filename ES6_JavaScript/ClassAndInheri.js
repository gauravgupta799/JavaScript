// *** Class 

class Employee {
    constructor(Name, Experience, Division){
         this.name = Name;
         this.experience = Experience;
         this.division = Division;
    }
    
    slogan(){
        return `I am ${this.name} and this company is the best.`
    }
    joiningYear(){
        return 2022 - this.experience;
    }
    static add(num1, num2){
        return num1 + num2;
    }
}

// Inherit the Employee class
class Programmer extends Employee{
    constructor(Name, Experience, Division,Language, github){
        super(Name, Experience, Division);
         this.language = Language ;
         this.github = github;
    }
    
    favouriteLanguage(){
        if(this.language === "python"){
            return 'Python';
        }else{
            return 'JavaScript';
        }
    }
    
    static multiply(num1, num2){
         return num1 * num2;
    }
}

// harry =  new Employee("Harry", 88, "Division");
// console.log(harry.slogan());
// console.log(harry.joiningYear());
// console.log(Employee.add(47, 89))


rohan = new Programmer("Rohan",5, "Lays", "Kotlin", "rohan353");
console.log(rohan);
console.log(rohan.favouriteLanguage());
console.log(Programmer.multiply(87,43));
