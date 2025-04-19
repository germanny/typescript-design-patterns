interface Printer {
  print(document: Document): void;
}

interface Scanner {
  scan(document: Document): void;
}

interface FaxMachine {
  fax(document: Document): void;
}

class SimplePrinter implements Printer {
  print(document: Document): void {
    console.log('The SimplePrinter is printing the document');
  }
}

class MultifunctionPrinter implements Printer, Scanner, FaxMachine {
  print(document: Document): void {
    console.log('The Machine is printing the document');
  }

  // violates the Interface Segregation Principle
  // this class is being forced to implement methods that it cannot perform
  // an old fashioned printer cannot fax a document
  fax(document: Document): void {
    console.log('The Machine is faxing a document');
  }

  // nor can it scan a document
  scan(document: Document): void {
    console.log('The Machine is scanning a document');
  }
}
