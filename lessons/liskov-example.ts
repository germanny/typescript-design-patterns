// Liskov Substitution Principle Example
// Each example below can use the PaymentProcessor class interchangeably.
// Payment Processor
// This is a simple payment processor that processes payments for a company.
// Credit Card
// Debit Card
// PayPal

// using an abstract class here because the rest of teh classes will inherit from it.
// no concrete implementation. don't want user of class to create a new instance of PaymentProcessor.
// This is a binding contract that all classes that inherit from it must implement the processPayment method.
// Yes, this could be an interface, but we're using an abstract class here to show how the liskov sub. principle works here.
// Additionally, tomorrow you could have some static methods called from within the PaymentProcessor class that all the child classes could use.
abstract class PaymentProcessor {
  // this method is abstract because while all the processPayment methods for each child class could be different,
  // they all have to have the same signature. no contrete implementation.
  // just a binding contract telling other classes that they must implement this method.
  abstract processPayment(amount: number): void;
}

class CreditCardProcessor extends PaymentProcessor {
  processPayment(amount: number): void {
    console.log(
      `Processing payment of $${amount} using a credit card`,
    );
  }
}

class DebitCardProcessor extends PaymentProcessor {
  processPayment(amount: number): void {
    console.log(
      `Processing payment of $${amount} using a debit card`,
    );
  }
}

class PayPalProcessor extends PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Processing payment of $${amount} using PayPal`);
  }
}

function processPayment(
  paymentProcessor: PaymentProcessor,
  amount: number,
): void {
  paymentProcessor.processPayment(amount);
}

const creditCardProcessor = new CreditCardProcessor();
const debitCardProcessor = new DebitCardProcessor();
const payPalProcessor = new PayPalProcessor();

processPayment(creditCardProcessor, 300);
processPayment(debitCardProcessor, 200);
processPayment(payPalProcessor, 100);
