// Inheritance
// Product class - id: string, price: number, description: string, display(): void
// Book class - author: string, pages: number; inherits from Product
// Electronics class - manufacturer: string, model: string; inherits from Product

// Product class
class Product {
  constructor(
    public id: string,
    public price: number,
    public description: string,
  ) {}

  display(): void {
    console.log(`Product ID: ${this.id}`);
    console.log(`Price: $${this.price}`);
    console.log(`Description: ${this.description}`);
  }
}

// Book class
class Book extends Product {
  constructor(
    public id: string,
    public price: number,
    public description: string,
    public author: string,
    public pages: number,
  ) {
    super(id, price, description); // super instantiates constructor from the parent class
  }

  display(): void {
    super.display(); // super calls the display method called in the parent class
    console.log(`Author: ${this.author}`);
    console.log(`Pages: ${this.pages}`);
  }
}

// Electronics class
class Electronics extends Product {
  constructor(
    public id: string,
    public price: number,
    public description: string,
    public manufacturer: string,
    public model: string,
  ) {
    super(id, price, description);
  }

  display(): void {
    super.display();
    console.log(`Manufacturer: ${this.manufacturer}`);
    console.log(`Model: ${this.model}`);
  }
}

const book = new Book(
  '123',
  20,
  'A book about something',
  'John Doe',
  200,
);
const electronics = new Electronics(
  '456',
  500,
  'A cool gadget',
  'Apple',
  'iPhone 13',
);
book.display();
electronics.display();
