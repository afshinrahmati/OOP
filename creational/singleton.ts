// Wrong
class a {
  A() {
    console.log("Hi a");
  }
}

const aa1 = new a();
const aa2 = new a();
console.log(aa2 == aa1); // false
// Correct
class b {
  private static instance: b;

  public static getInstance(): b {
    if (!b.instance) {
      b.instance = new b();
    }
    return b.instance;
  }
}
const singleton1 = b.getInstance();
const singleton2 = b.getInstance();
console.log(singleton1 == singleton2); // true
