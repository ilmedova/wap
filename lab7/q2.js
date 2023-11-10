function Student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = [];
  
    this.inputNewGrade = function (newGrade) {
      this.grades.push(newGrade);
    };
  
    this.computeAverage = function () {
      if (this.grades.length === 0) {
        return 0;
      }
      const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
      return sum / this.grades.length;
    };
}

let john = new Student('John', 'Smith');
let jane = new Student('Jane', 'Smith');

john.inputNewGrade(90);
john.inputNewGrade(85);
john.inputNewGrade(92);

jane.inputNewGrade(88);
jane.inputNewGrade(95);
jane.inputNewGrade(89);

console.log(`${john.firstName} ${john.lastName}'s Average Grade: ${john.computeAverage()}`);
console.log(`${jane.firstName} ${jane.lastName}'s Average Grade: ${jane.computeAverage()}`);
