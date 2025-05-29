## Object-Oriented Programming in C#

<span class="emphasis">C#</span> is a fully object-oriented language. OOP allows developers to model real-world entities and design reusable, organized code.

---

## Core Principles of OOP

1. <span class="emphasis">Encapsulation</span> – Bundling data and methods into classes, hiding internal details.  
2. <span class="emphasis">Inheritance</span> – Creating new classes from existing ones, reusing functionality.  
3. <span class="emphasis">Polymorphism</span> – Methods with the same name behaving differently based on context.

---

## Defining a Class

A class defines a template for objects.

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

---

## Access Modifiers

C# uses access modifiers to control visibility:

- public – accessible from anywhere  
- private – accessible only within the class  
- protected – accessible in the class and derived classes  
- internal – accessible within the same assembly

---

## Instantiating Objects

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

---
