# Learn OOP

1. oop<object-oriented-programming> is a computer programming paradigm<prdom%model> that organizes software design around the data. and it concept of the "object" and "class"

## Key Concepts of OOP

## Class

it is a Blueprint for creating object.it defines a set of attributes and method.

### \* Method

are functions that objects can perform. They are defined inside a class that describe the behaviors of an object.

### \* Attributes

Attributes represent the state of an object. In other words, they are the characteristics that distinguish classes.

## Object

An instance f a class created with specifically defined data

## interface

# Concept Of OOP

## 1.Encapsulation
Encapsulation is one of the fundamental principles of object-oriented programming (OOP) that is also applicable in 
TypeScript. It refers to the bundling of data (variables) and methods (functions) that operate on the data into a 
single unit or class. The primary goal of encapsulation is to restrict direct access to some of the 
object's components and protect the object's integrity by preventing outside interference and misuse.

* public: Members (properties and methods) are accessible from anywhere outside the class. By default, all members in a TypeScript class are public.
* private: Members are accessible only within the class they are defined in. They cannot be accessed from outside the class.
* protected: Members are accessible within the class and in subclasses that inherit from the class.
* Getters and Setters: TypeScript provides a way to define getter and setter methods, allowing controlled access to private properties.
* Readonly modifier ensures that a property can only be assigned a value at the time of declaration or in the constructor of the same class.
## 2.Abstraction
- Abstraction: hide some opreations detail from clients.and the child use them and it doesn't matter for them what happen in there and why exist this method.it is like interface but inerface 100% are Abstratins.
- no write to do this a scope for your abstrac class because it is assaginment for children.

```
    abstrac class parentClass {abstrac wrong() {return 3\*9}};
```
-Abstract method can not new.In most object-oriented programming languages that support abstract classes, you cannot directly instantiate an abstract class using the new keyword

## 3.Inheritance
Inheritance is a fundamental concept in object-oriented programming (OOP) that allows a class (often called a child class or subclass) to inherit attributes and methods from another class (called a parent class or superclass). This mechanism promotes code reuse and a hierarchical class structure, making it easier to maintain and extend software.
## 4.Polymorphism



# SOLID
SOLID is acronym that represents five key principle of object programming and design.
they can help us to created software with understandable,flexible,maintainable

## SRP<SINGLE RESPONSIBILITY PRINCIPLE>
this Principle define that each class has just one Responsible.
This principle helps in maintaining and understanding the code more efficiently. 
## OCP<OPEN/CLOSE PRINCIPLE>
Software entities (class,function,module) should be open for extensions and close for modification.
You should be able to extend a class's behavior without modifying its source code. // Polymorphism
## LSP<LISKOV SUBSITUTION PRINCIPLE>
that mean we have a method in parent class  and subclasses can use that method without change the name and ... just change the there operation
## ISP<INTERFACE SEGREGATION PRINCIPLE>
for each class we have an interface
## DIP<DEPENDENCY INVERSION PRINCIPLE>
: High-level modules should not depend on low-level modules. Both should depend on abstractions (e.g., interfaces). Abstractions should not depend on details. Details (concrete implementations) should depend on abstractions.
# dependency injection
--
In object-oriented programming, instead of creating a new instance of a service every time it is needed, we use dependency injection to manage these dependencies more efficiently. When the application starts, all the required objects are created and managed by a container. For example, in a dependency injection container, the instantiation would look like this: new Company(new Service(new Repository)). This approach allows for easy and efficient use of services throughout the application.
