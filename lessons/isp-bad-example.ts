interface Machine {
  print(document: Document): void;
  fax(document: Document): void;
  scan(document: Document): void;
}

class OldFashionedPrinter implements Machine {
  print(document: Document): void {
    console.log('The OldFashionedPrinter is printing the document');
  }

  // violates the Interface Segregation Principle
  // this class is being forced to implement methods that it cannot perform
  // an old fashioned printer cannot fax a document
  fax(document: Document): void {
    console.log('But the OldFashionedPrinter cannot fax a document');
  }

  // nor can it scan a document
  scan(document: Document): void {
    console.log('But the OldFashionedPrinter cannot scan a document');
  }
}
