// Inheritance
// Animal class
// Dog class
// Method move - distance: number

class Animals {
  constructor(public name: string) {}

  move(distance: number = 0): void {
    console.log(`${this.name} moved ${distance}'.`);
  }
}

class Dogs extends Animals {
  constructor(name: string) {
    super(name);
  }

  bark(): void {
    console.log('Woof! Woof!');
  }

  // Override the move method from the parent class
  // Inheritance allows us to override methods from the parent class
  move(distance: number = 5): void {
    console.log('Running...');
    super.move(distance);
  }
}

const myDoggo = new Dogs('Artie');
myDoggo.bark();
myDoggo.move();
myDoggo.move(10);
