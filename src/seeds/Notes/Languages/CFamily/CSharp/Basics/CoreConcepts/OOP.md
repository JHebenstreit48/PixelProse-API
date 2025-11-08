## Object-Oriented Programming in C#

C# is a fully object-oriented programming language. Object-Oriented Programming (OOP) allows developers to model real-world entities and design reusable, organized, and maintainable code.

---

## Core Principles of OOP

Object-Oriented Programming in C# is based on four core principles:

- **Encapsulation** — Bundling data and methods that operate on that data into a single unit (class) and restricting access to some of the object's components.
- **Inheritance** — Enabling a new class (child) to inherit members (fields, methods, properties) from an existing class (parent).
- **Polymorphism** — Allowing objects of different types to be treated as objects of a common base type, enabling methods to behave differently based on the object's actual type.
- **Abstraction** — Hiding complex implementation details and showing only the essential features of an object.

Encapsulation, Inheritance, and Polymorphism are the most emphasized in beginner and intermediate OOP learning, but all four are important pillars.

---

## Defining a Class

A class defines a blueprint or template for creating objects. Classes encapsulate data for the object and methods to operate on that data.

```csharp
class ExampleClass
{
    int exampleField;

    public void ExampleMethod()
    {
        // Method logic
    }
}
```

Here:
- exampleField is a field (variable) belonging to the class.
- ExampleMethod is a method (function) belonging to the class.

---

## Access Modifiers

C# provides several access modifiers to control the visibility and accessibility of class members:

- **public** — Accessible from anywhere.
- **private** — Accessible only within the class where it is declared.
- **protected** — Accessible within the class and by derived classes.
- **internal** — Accessible only within the same assembly (project).

Proper use of access modifiers helps enforce encapsulation and protect the internal state of objects.

---

## Instantiating Objects

Once a class is defined, you can create (instantiate) objects from it. An object is a specific instance of a class, containing real values instead of placeholders.

```csharp
class Car
{
    public string Model;

    public void Drive()
    {
        Console.WriteLine("Driving...");
    }
}

class Program
{
    static void Main()
    {
        Car myCar = new Car();
        myCar.Model = "Mustang";
        myCar.Drive();
    }
}
```

In this example:
- Car is the class.
- myCar is an instance (object) of the Car class.
- myCar.Model is accessing a field.
- myCar.Drive() is calling a method.

---

## Summary

Object-Oriented Programming allows developers to design applications that are modular, reusable, and easy to maintain. Mastering OOP principles in C# is essential for building scalable and robust software, whether you're working with simple applications or large enterprise systems.
