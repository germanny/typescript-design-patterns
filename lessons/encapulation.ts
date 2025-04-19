// BankAccount
// Depositing
// Withdrawing
// Balance - hidden - encapsulated
// bank.balance = 200 - not allowed

class BankAccount {
  // encapsulate the balance
  private _balance: number = 0;

  constructor(initialBalance: number) {
    this._balance = initialBalance;
  }

  // Getter to get balance of bank account
  public get balance(): number {
    return this._balance;
  }

  deposit(amount: number): void {
    if (amount < 0) {
      console.error('Invalid deposit amount');
      return;
    }
    this._balance += amount;
  }

  // Method to withdraw money
  withdraw(amount: number): void {
    if (amount < 0) {
      console.error('Invalid withdraw amount');
      return;
    }
    if (this._balance - amount < 0) {
      console.error('Insufficient funds');
      return;
    }
    this._balance -= amount;
  }

  getBalance(): number {
    return this._balance;
  }
}

const myAccount = new BankAccount(1000);
console.log('Initial balance:', myAccount.balance);
myAccount.deposit(500);
myAccount.withdraw(200);
console.log('Final balance:', myAccount.balance);
