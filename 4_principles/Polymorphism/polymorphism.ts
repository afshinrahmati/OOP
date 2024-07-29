// we have a class animal and there we have a method move that behavior is run with foot
// but some child with different move and they can change that behavior that called polymorphism

// children can change behavior parent
// Parent class Animal with a default move behavior
class Animal {
  move() {
    console.log("The animal moves in a general way.");
  }
}

// Child class Cat overriding the move method to provide specific behavior
class Cat extends Animal {
  move() {
    console.log("The cat gracefully walks on its paws.");
  }
}

// Another child class Bird with its own specific move behavior
class Bird extends Animal {
  move() {
    console.log("The bird flies through the sky.");
  }
}

// Create instances of each class
const genericAnimal = new Animal();
const cat = new Cat();
const bird = new Bird();

// Demonstrate polymorphism by calling the move method on each instance
genericAnimal.move(); // Output: The animal moves in a general way.
cat.move(); // Output: The cat gracefully walks on its paws.
bird.move(); // Output: The bird flies through the sky.
