// Dependency Inversion Principle (DIP) Example
// // This module is directly dependent on the MySqlDatabase class - a low-level module
// // This violates the Dependency Inversion Principle
// class MySqlDatabase {
//   save(data: string): void {
//     console.log('Saved data to MySQL database');
//   }
// }

// class HighLevelModule {
//   constructor(private database: MySqlDatabase) {}
//   execute(data: string): void {
//     this.database.save(data);
//   }
// }

// GOOD DIP EXAMPLE
// Depend on abstraction, not on concretions
// Classes are dependent on abstractions, not on concretions
// Classes are not directly interacting with each other, but through an interface
interface IDatabase {
  save(data: string): void;
}

class MySqlDatabase implements IDatabase {
  save(data: string): void {
    console.log(`Saved data to MySQL database: ${data}`);
  }
}

// this class does not care about the database implementation as long as it implements the IDatabase interface
// can easily switch to another database implementation without changing the HighLevelModule class
class HighLevelModule {
  constructor(private database: IDatabase) {}
  execute(data: string): void {
    this.database.save(data);
  }
}

class MongoDBDatabase implements IDatabase {
  save(data: string): void {
    console.log(`Saved data to MongoDB database: ${data}`);
  }
}

let mysql: MySqlDatabase = new MySqlDatabase();
let mongo: MongoDBDatabase = new MongoDBDatabase();

let user = new HighLevelModule(mysql);
user.execute('User data');

let post = new HighLevelModule(mongo);
post.execute('Post data');
