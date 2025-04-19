// shapes
// Area, Perimeter
// simple - single function calculateTotalArea

// Interface for Shape
interface Shape {
  area(): number;
  perimeter(): number;
}

// Class Circle
class Circle implements Shape {
  constructor(private radius: number) {}

  area(): number {
    return Math.PI * this.radius ** 2;
  }

  perimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

// Class Rectangle
class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}

  area(): number {
    return this.width * this.height;
  }

  perimeter(): number {
    return 2 * (this.width + this.height);
  }
}

function calculateTotalArea(shape: Shape): number {
  return shape.area();
}

const circle = new Circle(5);
const rectangle = new Rectangle(2, 3);

console.log(`Area of circle: ${calculateTotalArea(circle)}`); // 78.54
console.log(`Area of rectangle: ${calculateTotalArea(rectangle)}`); // 6
