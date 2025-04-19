// Single responsibility principle
class User {
  constructor(public name: string, public age: number) {}

  // BAD!!!! This is not a good practice
  // This is a bad practice because it is not a good idea to have a method that is not related to the class
  // userAuthentication(): void {
  //   console.log(`User: ${this.name}`);
  //   console.log(`Age: ${this.age}`);
  // }
}

// Single responsibility principle
// Better practice
class UserAuthentication {
  constructor(public user: User) {}

  authenticate(password: string): void {
    console.log(`User: ${this.user.name}`);
    console.log(`Age: ${this.user.age}`);
    console.log(`Password: ${password}`);
  }
}
