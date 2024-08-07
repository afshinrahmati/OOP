{
  abstract class Car {
    constructor(
      protected model: string,
      protected year: number,
    ) {}

    abstract disPlayCarInfo(): string;
  }

  class Tiba extends Car {
    disPlayCarInfo(): string {
      return `Hi ${this.model} with ${this.year} year`;
    }
  }

  class LanCoruse extends Car {
    disPlayCarInfo(): string {
      return `Hi ${this.model} with ${this.year} year`;
    }
  }

  class Pride extends Car {
    disPlayCarInfo(): string {
      return `Hi ${this.model} with ${this.year} year`;
    }
  }

  class factory {
    constructor() {}

    public createCar(
      type: "Tiba" | "LanCoruse" | "Pride",
      model: string,
      year: number,
    ): Car {
      switch (type) {
        case "LanCoruse":
          return new LanCoruse(model, year);
          break;
        case "Pride":
          return new Pride(model, year);
          break;
        case "Tiba":
          return new Tiba(model, year);
          break;
      }
    }
  }

  const car = new factory();

  const pCar = car.createCar("Pride", "SIPA", 1398).disPlayCarInfo();
  const lCar = car.createCar("LanCoruse", "MoDia", 2020).disPlayCarInfo();
  const tCar = car.createCar("Tiba", "IRANKHODRO", 1399).disPlayCarInfo();

  console.log(pCar, lCar, tCar);
}
{
    abstract class Payment {
        constructor(protected amount: number) {
        }

        abstract payWith(): string;
    }

    class ByCash extends Payment {
        payWith(): string {
            return "cash" + this.amount;
        }
    }

    class ByCard extends Payment {
        payWith(): string {
            return "Card" + this.amount;
        }
    }

    class Factory2 {
        constructor() {
        }

        handle(methodPay: "cash" | "card", mount: number) {
            switch (methodPay) {
                case "cash":
                    return new ByCash(mount);
                case "card":
                    return new ByCard(mount);
            }
        }
    }

    const n = new Factory2();
    const a = n.handle("card", 31000);
    const b = n.handle("cash", 41000
});
