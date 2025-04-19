class Singleton {
  // use static because the constructor is private
  // since we cannot instantiate the class, we cannot use the `new` keyword to instantiate the class
  // and since we cannot use the `new` keyword because we only want one instance of teh class
  // we need some way to access this instance. uses `static` keyword allows us to access the property without instantiating the class
  private static instance: Singleton;
  // set value without instantiating the class
  private static _value: number;

  // no one can instantiate the class using the `new` keyword
  private constructor() {}

  // this is the only way to get the instance of the class
  // access method outside the class without instantiating the class
  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      // can only make a new instance of the class inside the class if the instance is not already created
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  set value(value: number) {
    Singleton._value = value;
  }

  get value() {
    return Singleton._value;
  }
}

let instance1 = Singleton.getInstance();
let instance2 = Singleton.getInstance();
instance1.value = 10;
instance2.value = 5;
console.log(instance1.value); // 10, but 5 after setting instance2.value
console.log(instance2.value); // 10, but 5 after setting instance1.value
console.log(instance1 === instance2); // true
