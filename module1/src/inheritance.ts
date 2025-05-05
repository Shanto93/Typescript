class Parent {
  constructor(
    public name: string,
    public age: number,
    public address: string
  ) {}
  getSleep(numOfHourn: number): string {
    return `${this.name} sleeps for ${numOfHourn} hours`;
  }
}

class Student extends Parent {
  constructor(name: string, age: number, address: string) {
    super(name, age, address);
  }
}

class Teacher extends Parent {
  constructor(
    name: string,
    age: number,
    address: string,
    public designtion: string
  ) {
    super(name, age, address);
  }

  takeClass(noOfClass: number): string {
    return `${this.name} takes ${noOfClass} classes`;
  }
}

const teacher1 = new Teacher("Sanallah Sir", 45, "Chattogram", "Teacher");
const student1 = new Student("Shanta", 26, "Narsingdi");

console.log(student1.getSleep(8));
console.log(teacher1.takeClass(3));
