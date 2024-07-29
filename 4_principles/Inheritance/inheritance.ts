class Animal {
  constructor(
    public name: string,
    private speaker: string,
  ) {}
  //new Animal().call() error just child can call it
  // private just use in self class
  // public can call new Animal.call()
  protected call() {
    return this.speaker;
  }
}

class Cat extends Animal {
  constructor(name: string = "Dog", speaker: string) {
    super(name, speaker);
  }
  speak() {
    return this.call();
  }
}

class Dog extends Animal {
  speak() {
    return this.call();
  }
}

const dogSound = new Dog("", "").speak();
const catSound = new Cat("Cat", "Meow").speak();
console.log(`Dog says: ${dogSound}`); // Output: Dog says: Bark
console.log(`Cat says: ${catSound}`); // Output: Cat says: Meow
