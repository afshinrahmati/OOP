class Person {
    private _name: string;
    private _age: number;

    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }

    // Getter for name
    public getName(): string {
        return this._name;
    }

    // Setter for name
    public setName(name: string): void {
        this._name = name;
    }

    // Getter for age
    public getAge(): number {
        return this._age;
    }

    // Setter for age
    public setAge(age: number): void {
        if (age > 0) {
            this._age = age;
        } else {
            throw new Error("Age must be a positive number");
        }
    }
}

const person = new Person("John Doe", 30);
console.log(person.getName()); // Output: John Doe
person.setAge(31);
console.log(person.getAge()); // Output: 31
