// this pattern fo not create repeat class or object

// Flyweight interface
interface Shape {
  draw(x: number, y: number): void;
}

// Concrete Flyweight
class Circle implements Shape {
  private color: string;

  constructor(color: string) {
    this.color = color;
  }

  draw(x: number, y: number): void {
    console.log(`Drawing a ${this.color} circle at (${x}, ${y})`);
  }
}

// Flyweight Factory
class ShapeFactory {
  private static circleMap: { [key: string]: Circle } = {};

  static getCircle(color: string): Circle {
    let circle = this.circleMap[color];

    if (!circle) {
      circle = new Circle(color);
      this.circleMap[color] = circle;
      console.log(`Created a new ${color} circle`);
    }

    return circle;
  }
}

// Client code
const colors = ["Red", "Green", "Blue", "Red", "Green"];

for (let i = 0; i < colors.length; i++) {
  const circle = ShapeFactory.getCircle(colors[i]);
  circle.draw(i * 10, i * 10);
}
