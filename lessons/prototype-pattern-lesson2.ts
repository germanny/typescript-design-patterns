interface ShapePrototypeProperties {
  color: string;
  x: number;
  y: number;
}

abstract class ShapePrototype implements ShapePrototypeProperties {
  constructor(
    public color: string,
    public x: number,
    public y: number,
  ) {}
  abstract clone(): ShapePrototype;
}

class CirclePrototype extends ShapePrototype {
  constructor(
    color: string,
    x: number,
    y: number,
    public radius: number,
  ) {
    super(color, x, y);
  }
  public clone(): ShapePrototype {
    return new CirclePrototype(
      this.color,
      this.x,
      this.y,
      this.radius,
    );
  }
}

class RectanglePrototype extends ShapePrototype {
  constructor(
    color: string,
    x: number,
    y: number,
    public width: number,
    public height: number,
  ) {
    super(color, x, y);
  }
  public clone(): ShapePrototype {
    return new RectanglePrototype(
      this.color,
      this.x,
      this.y,
      this.width,
      this.height,
    );
  }
}

function cloneShape(shape: ShapePrototype): ShapePrototype {
  return shape.clone();
}

const circlePrototype = new CirclePrototype('red', 10, 10, 20);
const rectanglePrototype = new RectanglePrototype(
  'blue',
  20,
  20,
  10,
  10,
);

const clonedCircle = cloneShape(circlePrototype);
const clonedRectangle = cloneShape(rectanglePrototype);

console.log(clonedCircle);
console.log(clonedRectangle);
