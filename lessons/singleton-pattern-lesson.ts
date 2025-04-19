// Singleton Logger Class
// log method
// Can have multiple methods
// saves all the application logs

// This is a good use of a singleton pattern because:

// you want to have a single instance of the logger class that is shared across the application. You don't want to have multiple instances of the logger class because you want to have a single log file that contains all the logs from the application.

// accessing file system is a slow process, so we want to have a single instance accessing the file system only once

// single configuration for the logger class, if needed (good for database connections, etc.)
export default class Logger {
  private static instance: Logger;
  private static logs: string[] = [];

  // cannot instantiate the class with the `new` keyword
  private constructor() {}

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  public log(message: string): void {
    const timestamp = new Date();
    Logger.logs.push(
      `[${timestamp.toLocaleTimeString()}] - ${message}`,
    );
    // write log to the filesystem
  }

  public getLogs(): string[] {
    return Logger.logs;
  }
}

let logger1 = Logger.getInstance();
let logger2 = Logger.getInstance();
logger1.log('First log');
logger2.log('Second log');
console.log(logger1.getLogs()); // [ 'First log', 'Second log' ]
console.log(logger2.getLogs()); // [ 'First log', 'Second log' ]
