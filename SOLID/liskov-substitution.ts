class Shape {
  calculateArea() {
    console.log("main");
  }
}
class Circle extends Shape {
  calculateArea() {
    console.log("Circle");
  }
}

class Square extends Shape {
  calculateArea() {
    console.log("Square");
  }
}

// client
function area(Shape: Shape) {
  //  method is const but the operation in there can change
  return Shape.calculateArea();
}

let b1 = new Square();
let b2 = new Circle();

area(b1);
area(b2);
