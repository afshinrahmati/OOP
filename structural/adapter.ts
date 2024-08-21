{
  // Foreign Library
  class PaymentGateway {
    makePayment(): string {
      return "foreign library";
    }
  }

  // Adapter Pattern
  interface Payment {
    processPayment(): string;
  }

  class PaymentAdapter implements Payment {
    constructor(private paymentGateway: PaymentGateway) {}

    processPayment(): string {
      const result = this.paymentGateway.makePayment();
      return `${result} "hahaha"`;
    }
  }

  // Client code
  const paymentGateway = new PaymentGateway();
  const payment: Payment = new PaymentAdapter(paymentGateway);

  // The client can now use the adapter to process the payment
  console.log(payment.processPayment()); // Output: "foreign library "hahaha""
}
class LibSql {
  constructor() {}
  connectToDb(uri: string) {
    return uri;
  }
}
//
interface SqlInterFace {
  connect(): string;
}
class SqlAdapter implements SqlInterFace {
  constructor(private sql: LibSql) {}
  connect(): string {
    return this.sql.connectToDb("conne3ct");
  }
}
