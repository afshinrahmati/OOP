{
  interface ShapeProperties {
    color: string;
    x: number;
    y: number;
  }

  abstract class Shape {
    constructor(public properties: ShapeProperties) {}

    abstract clone(): Shape;
  }

  class Rectangle extends Shape {
    constructor(
      public properties: ShapeProperties,
      public width: number,
      public height: number,
    ) {
      super(properties);
    }

    clone(): Shape {
      // Create a new ShapeProperties object with the same values as the original
      let cloneProperties: ShapeProperties = {
        color: this.properties.color,
        x: this.properties.x,
        y: this.properties.y,
      };

      // Return a new Rectangle instance with the cloned properties and original dimensions
      return new Rectangle(cloneProperties, this.width, this.height);
    }
  }

  // Creating an instance of Rectangle
  const rectangle: Shape = new Rectangle(
    { color: "yellow", x: 52, y: 60 },
    40,
    85,
  );

  // Cloning the rectangle
  const anotherRectangle = rectangle.clone();

  // Checking the properties of the cloned rectangle
  console.log(anotherRectangle); // Output: Rectangle { properties: { color: 'yellow', x: 52, y: 60 }, width: 40, height: 85 }
}
