// shapes
// Area, Perimeter
// simple - single function calculateTotalArea

// Interface for PShape
interface PShape {
  area(): number;
  perimeter(): number;
}

// Class Circle
class PolymorphismCircle implements PShape {
  constructor(private radius: number) {}

  area(): number {
    return Math.PI * this.radius ** 2;
  }

  perimeter(): number {
    return 2 * Math.PI * this.radius;
  }
}

// Class Rectangle
class PolymorphismRectangle implements PShape {
  constructor(private width: number, private height: number) {}

  area(): number {
    return this.width * this.height;
  }

  perimeter(): number {
    return 2 * (this.width + this.height);
  }
}

function pcalculateTotalArea(shape: PShape): number {
  return shape.area();
}

const pcircle = new PolymorphismCircle(5);
const prectangle = new PolymorphismRectangle(2, 3);

console.log(`Area of circle: ${pcalculateTotalArea(circle)}`); // 78.54
console.log(`Area of rectangle: ${pcalculateTotalArea(rectangle)}`); // 6
