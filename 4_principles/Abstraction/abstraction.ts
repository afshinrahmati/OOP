// that class , make him their children class that implement those methods are abstract;
// it is like interface. both abstract classes and interfaces are used to define the structure of objects and enforce certain contracts.
// An abstract class is a class that cannot be instantiated on its own and is meant to be subclassed. I
// method can be extra method that they are not in abstract class but in interface just use that class are in there or static class
// we can not call abstract class.
// Abstract classes are used when you want to provide a common base class with some shared implementation that can be inherited by derived classes.s
// we can not full the abstract method on parent.
// best way:
// 1) it is good for write pagination.
// 2) it is good for query builder on database.
// advantage:
// 1) hide complex details.

abstract class Person {
  name: string;
  family: string;
  age: number;
  constructor(name: string, family: string, age: number) {
    this.name = name;
    this.family = family;
    this.age = age;
  }

  printPersonInfo() {
    console.log(this.name + " " + this.family + " " + this.age);
  }
  // Wrong
  // abstract SumAge(n:number) {
  //    return n*8
  // };
  abstract SumAge(n: number);
  abstract printId();
}

class Student extends Person {
  studentId: number;
  constructor(name: string, family: string, age: number, id: number) {
    super(name, family, age);
    this.studentId = id;
  }
  SumAge(n: number) {
    return n + this.age;
  }

  printId() {
    console.log(this.studentId);
  }
}

class Teacher extends Person {
  teacherId: number;
  constructor(name: string, family: string, age: number, id: number) {
    super(name, family, age);
    this.teacherId = id;
  }
  SumAge(n: number) {
    return n + this.age;
  }
  printId() {
    console.log(this.teacherId);
  }
}

// const p1 = new Person("afshin","rahmati",45) //Cannot create an instance of an abstract class.ts(2511)

const t1 = new Teacher("mehdi", "alei", 27, 1001);
t1.SumAge(5);
t1.printId();
const s1 = new Student("afshin", "rahamti", 25, 2001);
s1.SumAge(5);
s1.printId();
