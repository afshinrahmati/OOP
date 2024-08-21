var Subi = /** @class */ (function () {
    function Subi() {
        this.observer = [];
        this.state = "";
    }
    Subi.prototype.registerObserver = function (observer) {
        this.observer.push(observer);
    };
    Subi.prototype.removeObserver = function (observer) {
        this.observer.filter(function (o) { return o !== observer; });
    };
    Subi.prototype.notifyObserver = function () {
        for (var _i = 0, _a = this.observer; _i < _a.length; _i++) {
            var ob = _a[_i];
            ob.update(this);
        }
    };
    Subi.prototype.setState = function (state) {
        this.state = state;
    };
    Subi.prototype.getState = function () {
        return this.state;
    };
    return Subi;
}());
var observe = /** @class */ (function () {
    function observe(name) {
        this.name = name;
    }
    observe.prototype.update = function (subject) {
        console.log("".concat(this.name, " observed state change: ").concat(subject.getState()));
    };
    return observe;
}());
var sub = new Subi();
var ob1 = new observe("OB1");
var ob2 = new observe("OB2");
sub.registerObserver(ob1);
sub.registerObserver(ob2);
sub.setState("One");
sub.notifyObserver();
sub.removeObserver(ob1);
sub.setState("Two");
sub.notifyObserver();
