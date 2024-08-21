var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
{
    var SimpleCoffee = /** @class */ (function () {
        function SimpleCoffee() {
        }
        SimpleCoffee.prototype.description = function () {
            return "this is a simple coffee";
        };
        SimpleCoffee.prototype.cost = function () {
            return 2;
        };
        return SimpleCoffee;
    }());
    var CoffeeDecorator = /** @class */ (function () {
        function CoffeeDecorator(coffee) {
            this.coffee = coffee;
        }
        return CoffeeDecorator;
    }());
    var MilkDecorator = /** @class */ (function (_super) {
        __extends(MilkDecorator, _super);
        function MilkDecorator(coffee) {
            return _super.call(this, coffee) || this;
        }
        MilkDecorator.prototype.description = function () {
            return this.coffee.description() + " with Milk";
        };
        MilkDecorator.prototype.cost = function () {
            return this.coffee.cost() + 10;
        };
        return MilkDecorator;
    }(CoffeeDecorator));
    var coffee = new SimpleCoffee();
    coffee = new MilkDecorator(coffee);
    console.log(coffee.description());
    console.log(coffee.cost());
}
var BaseServerRequest = /** @class */ (function () {
    function BaseServerRequest() {
    }
    BaseServerRequest.prototype.handle = function (req) {
        return "i recieved it";
    };
    return BaseServerRequest;
}());
var ServerRequestDecorator = /** @class */ (function () {
    function ServerRequestDecorator(baseServerRequest) {
        this.baseServerRequest = baseServerRequest;
    }
    return ServerRequestDecorator;
}());
var AuthMiddleware = /** @class */ (function (_super) {
    __extends(AuthMiddleware, _super);
    function AuthMiddleware(baseServerRequest) {
        return _super.call(this, baseServerRequest) || this;
    }
    AuthMiddleware.prototype.handle = function (req) {
        return this.baseServerRequest.handle(req) + "/Auth";
    };
    return AuthMiddleware;
}(ServerRequestDecorator));
var LoggingMiddleware = /** @class */ (function (_super) {
    __extends(LoggingMiddleware, _super);
    function LoggingMiddleware(baseServerRequest) {
        return _super.call(this, baseServerRequest) || this;
    }
    LoggingMiddleware.prototype.handle = function (req) {
        return this.baseServerRequest.handle(req) + "/Logger";
    };
    return LoggingMiddleware;
}(ServerRequestDecorator));
var base = new BaseServerRequest();
base = new LoggingMiddleware(base);
console.log(base.handle("Logg"));
base = new AuthMiddleware(base);
console.log(base.handle("Auth"));
