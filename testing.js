// app.js - Person and Student classes

// Class representing a generic person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  }

  celebrateBirthday() {
    this.age += 1;
    console.log(`Happy birthday, ${this.name}! You are now ${this.age}.`);
  }
}

// Class representing a student, inherits from Person
class Student extends Person {
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
    this.courses = [];
  }

  enroll(course) {
    this.courses.push(course);
    console.log(`${this.name} enrolled in ${course}.`);
  }

  listCourses() {
    console.log(`${this.name}'s courses: ${this.courses.join(", ")}`);
  }
}

// Sample usage
const alice = new Person("Alice", 30);
alice.greet();
alice.celebrateBirthday();

const bob = new Student("Bob", 20, "S12345");
bob.greet();
bob.enroll("Mathematics");
bob.enroll("Physics");
bob.listCourses();
bob.celebrateBirthday();

// Create another student
const charlie = new Student("Charlie", 22, "S67890");
charlie.greet();
charlie.enroll("Computer Science");
charlie.listCourses();
