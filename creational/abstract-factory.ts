// apple and samsung have same structure<product><phone and apple-watch> but the operation of theme are diffrent so we define the interface for products
// then we define for each product and company create the operation
// Abstract Product Interfaces

interface Phone {
  model(): string;
}

interface Watch {
  color(): "yellow" | "green" | "red";
  model(): string;
}

// Concrete Product Classes
class ApplePhone implements Phone {
  model(): string {
    return "iPhone SE2020";
  }
}

class AppleWatch implements Watch {
  model(): string {
    return "Apple Watch SE2020";
  }
  color(): "yellow" | "green" | "red" {
    return "red";
  }
}

class SamsungPhone implements Phone {
  model(): string {
    return "Samsung Galaxy Note9";
  }
}

class SamsungWatch implements Watch {
  model(): string {
    return "Samsung Galaxy Watch S1";
  }
  color(): "yellow" | "green" | "red" {
    return "yellow";
  }
}

// Abstract Factory Interface
interface IAbstractFactory {
  createPhone(): Phone;
  createWatch(): Watch;
}

// Concrete Factory Classes
class AppleFactory implements IAbstractFactory {
  createPhone(): Phone {
    return new ApplePhone();
  }
  createWatch(): Watch {
    return new AppleWatch();
  }
}

class SamsungFactory implements IAbstractFactory {
  createPhone(): Phone {
    return new SamsungPhone();
  }
  createWatch(): Watch {
    return new SamsungWatch();
  }
}

// Example usage
const appleFactory: IAbstractFactory = new AppleFactory();
const samsungFactory: IAbstractFactory = new SamsungFactory();

const applePhone = appleFactory.createPhone();
console.log(applePhone.model()); // Output: iPhone SE2020

const appleWatch = appleFactory.createWatch();
console.log(appleWatch.model()); // Output: Apple Watch SE2020
console.log(appleWatch.color()); // Output: red

const samsungPhone = samsungFactory.createPhone();
console.log(samsungPhone.model()); // Output: Samsung Galaxy Note9

const samsungWatch = samsungFactory.createWatch();
console.log(samsungWatch.model()); // Output: Samsung Galaxy Watch S1
console.log(samsungWatch.color()); // Output: yellow
