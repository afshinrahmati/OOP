{
  interface Coffee {
    cost(): number;

    description(): string;
  }

  class SimpleCoffee implements Coffee {
    description(): string {
      return "this is a simple coffee";
    }

    cost(): number {
      return 2;
    }
  }

  abstract class CoffeeDecorator implements Coffee {
    constructor(protected coffee: Coffee) {}

    abstract description(): string;

    abstract cost(): number;
  }

  class MilkDecorator extends CoffeeDecorator {
    constructor(coffee: Coffee) {
      super(coffee);
    }

    description(): string {
      return this.coffee.description() + " with Milk";
    }

    cost(): number {
      return this.coffee.cost() + 10;
    }
  }

  let coffee: Coffee = new SimpleCoffee();
  coffee = new MilkDecorator(coffee);

  console.log(coffee.description());
  console.log(coffee.cost());
}

interface ServerRequest {
  handle(req: any): any;
}

class BaseServerRequest implements ServerRequest {
  handle(req: any): any {
    return "i recieved it";
  }
}

abstract class ServerRequestDecorator implements ServerRequest {
  constructor(protected baseServerRequest: BaseServerRequest) {}
  abstract handle(req: any): any;
}

class AuthMiddleware extends ServerRequestDecorator {
  constructor(baseServerRequest: BaseServerRequest) {
    super(baseServerRequest);
  }

  handle(req: any): any {
    return this.baseServerRequest.handle(req) + "/Auth";
  }
}

class LoggingMiddleware extends ServerRequestDecorator {
  constructor(baseServerRequest: BaseServerRequest) {
    super(baseServerRequest);
  }
  handle(req: any): any {
    return this.baseServerRequest.handle(req) + "/Logger";
  }
}

let base: ServerRequest = new BaseServerRequest();
base = new LoggingMiddleware(base);

console.log(base.handle("Logg"));
base = new AuthMiddleware(base);

console.log(base.handle("Auth"));
