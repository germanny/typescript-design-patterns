interface UserDetails {
  name: string;
  age: number;
  email: string;
}

// this is tightly coupled with UserDetails
interface Prototype {
  clone(): Prototype;
  getUserDetails(): UserDetails;
}

class ConcretePrototype implements Prototype {
  constructor(private user: UserDetails) {}

  public clone(): Prototype {
    const clone = Object.create(this);
    clone.user = { ...this.user };
    return clone;
  }

  public getUserDetails(): UserDetails {
    return this.user;
  }
}

const user1 = new ConcretePrototype({
  name: 'John Doe',
  age: 25,
  email: '',
});

let user2 = user1.clone();
if (user1 === user2) {
  console.log('user1 and user2 are the same');
} else {
  console.log('user1 and user2 are different');
}
