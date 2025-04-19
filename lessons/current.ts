// require Logger class
import Logger from './singleton-pattern-lesson';

class MyApplication {
  // Now MyApplication class depends on the Logger class
  // Tight coupling because you usually end up with an instance of a singleton class inside another class
  constructor(private logger1: Logger) {}

  run(): void {
    this.logger1.log('MyApplication is running');
    this.logger1.log('MyApplication is shutting down');
  }
}

const logger3 = Logger.getInstance();
const application = new MyApplication(logger3);
application.run();
console.log(logger3.getLogs()); // [ 'MyApplication is running', 'MyApplication is shutting down' ]
