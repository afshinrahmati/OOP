// that class , make him their children class that implement those methods are abstract;
abstract class Person {
    name:string;
    family:string;
    age:number;
    constructor(name:string,family:string,age:number){
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
    abstract SumAge(n:number);
    abstract printId();
}

class Student extends Person {
    studentId:number;
    constructor(name:string,family:string,age:number,id:number) {
        super(name,family,age);
        this.studentId = id;
    }
    SumAge(n: number) {
        return n+this.age
    }

    printId() {
        console.log(this.studentId)
    }
}

class Teacher  extends Person {
    teacherId:number;
    constructor(name:string,family:string,age:number,id:number) {
        super(name,family,age);
        this.teacherId = id;
    }
    SumAge(n: number) {
        return n+this.age
    }
    printId() {
        console.log(this.teacherId);
    }
}

// const p1 = new Person("afshin","rahmati",45) //Cannot create an instance of an abstract class.ts(2511)

const t1 = new Teacher("mehdi","alei",27,1001);
t1.SumAge(5);
t1.printId();
const s1 = new Student("afshin","rahamti",25,2001);
s1.SumAge(5);
s1.printId();
