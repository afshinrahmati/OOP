interface Observer {
  update(subject: Subject): void;
}

interface Subject {
  registerObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObserver(): void;
}

class Subi implements Subject {
  private observer: Observer[] = [];
  private state: string = "";
  registerObserver(observer: Observer) {
    this.observer.push(observer);
  }
  removeObserver(observer: Observer) {
    this.observer.filter((o) => o !== observer);
  }
  notifyObserver() {
    for (const ob of this.observer) {
      ob.update(this);
    }
  }
  setState(state: string) {
    this.state = state;
  }

  getState(): string {
    return this.state;
  }
}
class observe implements Observer {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
  update(subject: Subi) {
    console.log(`${this.name} observed state change: ${subject.getState()}`);
  }
}

const sub = new Subi();
const ob1 = new observe("OB1");
const ob2 = new observe("OB2");
sub.registerObserver(ob1);
sub.registerObserver(ob2);
sub.setState("One");
sub.notifyObserver();

sub.removeObserver(ob1);
sub.setState("Two");

sub.notifyObserver();
