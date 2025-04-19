abstract class Shape {
  abstract calculateArea(): number;
}

class Rectangle extends Shape {
  constructor(public width: number, public height: number) {
    super();
  }

  public calculateArea(): number {
    return this.width * this.height;
  }
}

class Square extends Shape {
  constructor(public side: number) {
    super();
  }

  public calculateArea(): number {
    return this.side * this.side;
  }
}

// ====== Client Code
function area(shape: Shape) {
  return shape.calculateArea();
}

let rectangle = new Rectangle(10, 12);
let square = new Square(8);

console.log(area(rectangle)); // 120
console.log(area(square)); // 64
