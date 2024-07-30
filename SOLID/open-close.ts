// You should be able to extend a class's behavior without modifying its source code. // Polymorphism
// !!!!! WRONG <Violation of SRP> !!!!
class Shape {
  type;
  constructor(public types: string) {
    this.type = types;
  }

  draw() {
    if (this.type == "circle") {
      console.log("Hi Circles");
    }
    if (this.type == "ellipse") {
      console.log("Hi Ellipse");
    }
  }
}

// following Close/Open

class Shape1 {
  draw() {
    console.log("overridden Method");
  }
}

class Circle extends Shape1 {
  draw() {
    console.log("Hi Circle1");
  }
}
class Ellipse extends Shape1 {
  draw() {
    console.log("Hi Ellipse");
  }
}
