# How C# Implements Object-Oriented Programming

<hr class="dividerSection" />

C# is a fully object-oriented programming language.

Object-Oriented Programming (OOP) allows developers to model real-world entities and design reusable, organized, and maintainable code.

<hr class="dividerSection" />

## Core Principles of OOP

<hr class="dividerSection" />

Object-Oriented Programming in C# is based on four core principles.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">Encapsulation</span>, bundling data and methods that operate on that data into a single unit (class) and restricting access to some of the object's components.</li>
    <li><span class="emphasis">Inheritance</span>, enabling a new class (child) to inherit members (fields, methods, properties) from an existing class (parent).</li>
    <li><span class="emphasis">Polymorphism</span>, allowing objects of different types to be treated as objects of a common base type, enabling methods to behave differently based on the object's actual type.</li>
    <li><span class="emphasis">Abstraction</span>, hiding complex implementation details and showing only the essential features of an object.</li>
  </ul>
</div>

Encapsulation, Inheritance, and Polymorphism are the most emphasized in beginner and intermediate OOP learning, but all four are important pillars.

<hr class="dividerSection" />

## Defining a Class

<hr class="dividerSection" />

A class is a user-defined blueprint or prototype from which objects are created.

It combines fields and methods (member functions that define actions) into a single unit.

Classes encapsulate data for the object and methods to operate on that data.

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

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="codeSnip">exampleField</span> is a field (variable) belonging to the class.</li>
    <li><span class="codeSnip">ExampleMethod</span> is a method (function) belonging to the class.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Access Modifiers

<hr class="dividerSection" />

C# provides several access modifiers to control the visibility and accessibility of class members.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="codeSnip">public</span>, accessible from anywhere.</li>
    <li><span class="codeSnip">private</span>, accessible only within the class where it is declared.</li>
    <li><span class="codeSnip">protected</span>, accessible within the class and by derived classes.</li>
    <li><span class="codeSnip">internal</span>, accessible only within the same assembly (project).</li>
  </ul>
</div>

Proper use of access modifiers helps enforce encapsulation and protect the internal state of objects.

<hr class="dividerSection" />

## Instantiating Objects

<hr class="dividerSection" />

Once a class is defined, you can create (instantiate) objects from it.

An object is a specific instance of a class, containing real values instead of placeholders.

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

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="codeSnip">Car</span> is the class.</li>
    <li><span class="codeSnip">myCar</span> is an instance (object) of the <span class="codeSnip">Car</span> class.</li>
    <li><span class="codeSnip">myCar.Model</span> is accessing a field.</li>
    <li><span class="codeSnip">myCar.Drive()</span> is calling a method.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Summary

<hr class="dividerSection" />

Object-Oriented Programming allows developers to design applications that are modular, reusable, and easy to maintain.

Mastering OOP principles in C# is essential for building scalable and robust software, whether you're working with simple applications or large enterprise systems.

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/languages/c-family/c-sharp/basics/fundamentals/variables-and-data-types">← Back</a>
    <div class="xrefTitle">Section: C# - Basics - Fundamentals - Variables & Data Types</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/languages/c-family/c-sharp/basics/core-concepts/collections">Next →</a>
    <div class="xrefTitle">C# - Basics - Core Concepts - Collections</div>
  </div>
</div>