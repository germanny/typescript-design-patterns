// Open closed principle
// regular - 10, 1x (loyalty points)
// premium - 20, 2x (loyalty points)
// gold - 30, 3x (loyalty points)

// WRONG - what if we want to add a new customer type?
// class Discount {
//   giveDiscount(customerType: 'regular' | 'premium'): number {
//     if (customerType === 'regular') {
//       return 10;
//     } else if (customerType === 'premium') {
//       return 20;
//     } else {
//       return 10;
//     }
//   }
// }

// Make all the customer types classes open for extension but closed for modification
interface Customer {
  giveDiscount(): number;
  addLoyaltyPoints(amountSpent: number): number;
}

class RegularCustomer implements Customer {
  giveDiscount(): number {
    // encapsulate the discount logic
    return 10;
  }
  addLoyaltyPoints(amountSpent: number): number {
    return amountSpent;
  }
}

class PremiumCustomer implements Customer {
  giveDiscount(): number {
    // encapsulate the discount logic
    return 20;
  }

  addLoyaltyPoints(amountSpent: number): number {
    return amountSpent * 2;
  }
}

class GoldCustomer implements Customer {
  giveDiscount(): number {
    return 30;
  }

  addLoyaltyPoints(amountSpent: number): number {
    return amountSpent * 3;
  }
}

class Discount {
  giveDiscount(customer: Customer): number {
    return customer.giveDiscount();
  }
}

let discount: Discount = new Discount();
let goldCustomer: GoldCustomer = new GoldCustomer();

const finalValue = discount.giveDiscount(goldCustomer); // 20
const finalLoyaltyPoints = goldCustomer.addLoyaltyPoints(20); // 60
console.log(finalValue);
console.log(finalLoyaltyPoints);
