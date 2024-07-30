// for each class we have an interface

// Wrong
interface One {
  eat(): string;
  timeWork(): number;
}
class Robot implements One {
  eat(): string {
    return "robot do not eat Food";
  }
  timeWork(): number {
    return 12;
  }
}

// Correct

interface RobotInterface {
  timeWork(): number;
}
class Robot1 implements RobotInterface {
  timeWork(): number {
    return 45;
  }
}
class Human implements One {
  eat(): string {
    return "eat food";
  }
  timeWork(): number {
    return 12;
  }
}
