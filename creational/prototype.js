var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shape = /** @class */ (function () {
    function Shape(properties) {
        this.properties = properties;
    }
    return Shape;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(properties, width, height) {
        var _this = _super.call(this, properties) || this;
        _this.properties = properties;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Rectangle.prototype.clone = function () {
        // Create a new ShapeProperties object with the same values as the original
        var cloneProperties = {
            color: this.properties.color,
            x: this.properties.x,
            y: this.properties.y,
        };
        // Return a new Rectangle instance with the cloned properties and original dimensions
        return new Rectangle(cloneProperties, this.width, this.height);
    };
    return Rectangle;
}(Shape));
// Creating an instance of Rectangle
var rectangle = new Rectangle({ color: "yellow", x: 52, y: 60 }, 40, 85);
// Cloning the rectangle
var anotherRectangle = rectangle.clone();
// Checking the properties of the cloned rectangle
console.log(anotherRectangle); // Output: Rectangle { properties: { color: 'yellow', x: 52, y: 60 }, width: 40, height: 85 }
