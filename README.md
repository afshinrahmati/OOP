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
behind the  is not important for subclass what happen.
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
children can change behavior parent and operation bud they can not change the method name ,... .
Polymorphism is one of the core principles of object-oriented programming (OOP). It allows methods to do different things based on the object it is acting upon, even though they share the same name. This is typically achieved through method overriding.

# SOLID
SOLID is acronym that represents five key principle of object programming and design.
they can help us to created software with understandable,flexible,maintainable

## 1. SRP<SINGLE_RESPONSIBILITY_PRINCIPLE>
this Principle define that each class has just one Responsible.
This principle helps in maintaining and understanding the code more efficiently. 
## 2. OCP<OPEN/CLOSE PRINCIPLE>
Software entities (class,function,module) should be open for extensions and close for modification.
You should be able to extend a class's behavior without modifying its source code. // Polymorphism
## 3. LSP<LISKOV_SUBSITUTION_PRINCIPLE>
that mean we have a method in parent class  and subclasses can use that method without change the name and ... just change the there operation
## 4. ISP<INTERFACE_SEGREGATION_PRINCIPLE>
for each class we have an interface
## 5. DIP<DEPENDENCY_INVERSION_PRINCIPLE>
High-level modules should not depend on low-level modules. Both should depend on abstractions (e.g., interfaces). Abstractions should not depend on details. Details (concrete implementations) should depend on abstractions.



# Creational Design patterb
are those pattern that focused on object creation mechanism and aiming to simplify the process of creating an object.

### 1.singleton-pattern
<h4>one time create an object(new ...) and use it every want.<br>
1.instance a class just created one time.<br>
2.instead of we create new new,new one time we create new and use it all environment we want.<br>
3.what happen if we create new,new a lot from one class: you create a class before why you want to create that again and The work is expensive and non-optimal in terms of resource consumption .<br>
4.use: like connected to databases one time.<br>
5.singleton !=  AntiPattern<br>
6.bad: not support single-responsibility,language multi-threading that happened Race-Condition
that mean crate multi class

### 2.factory-pattern    
allow to superclass that decided what they want with intity
The factory method pattern provides an interface for creating objects in a superclass but allows subclasses to alter the type of objects that will be created. The key idea is to delegate the object creation to subclasses.
This pattern promotes loose coupling by eliminating the need to bind application-specific classes into the code.
single responsibility
### 3.prototype-pattern<clone>
if we want to have several instance of an object(copy) if we want to each time new, new .... and if our code request to database and find it has a big cost on cpu and ...
when we create an object we store that on a variable and check if i create we do not create again.
* it is good for  Dependency injection.
### 4.Builder<return this>
create an object step by step we return the this and it is good for query builder.
find().select().where(),....
### 5.Abstract-factory-pattern<same structure but different operation samsung and apple factory>
Aggregation is a group of separate factories that have a similar structure but are composed of different classes and operation


# Structural Design Patterns
this pattern explain how to assemble and design an object or class into large structure,these structures flexible and efficient.
### 1.Adapter<wrapper>
it is look like Adapter  in wall we have 2 port but in 3 port and Adapter come and solves for us this problem,
imagine we want to use a library and it structure is not appropriate for our project so we create a class and there we implment a structre that is good for our project.
a method that send in there can send sms or email ,... 
****
### 2.Facade
this is look like a garson ,he takes our older and we do not see behind the kitchen for make the food.
facaade give us a simple inteface and hide the flexible.
in code all the library are face they just give us a method and tehre do some operation and client can not see them.<hide complex>
### 3.Bridge
connect interface to abstrac class.
 that lets you split a large class or a set of closely related classes into two separate hierarchies—abstraction and implementation which can be developed independently of each other.
 it has a Abstraction that client can use it.
 when we use it that we have a lof of class that they wan tto work eache other like inhrentnet

### 4.Composite
some objects combine in structure like tree that can work alone and work together.
we have 3 role in company developer and designer and manager ==> designer and developer have a same interface but manage plus the designer and developer interface has a interface
for manager the employee
# dependency injection
--
In object-oriented programming, instead of creating a new instance of a service every time it is needed, we use dependency injection to manage these dependencies more efficiently. When the application starts, all the required objects are created and managed by a container. For example, in a dependency injection container, the instantiation would look like this: new Company(new Service(new Repository)). This approach allows for easy and efficient use of services throughout the application.
