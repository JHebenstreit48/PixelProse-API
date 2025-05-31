## Syntax and Types in C#

C# syntax is structured and consistent, making it readable and developer-friendly. This section introduces core rules and common constructs used to build programs in a clear and maintainable way.

---

## Statements and Semicolons

All executable statements in C# must end with a semicolon (;). This punctuation tells the compiler that a complete instruction has been written. Missing a semicolon will result in a syntax error.

Semicolons are one of the most basic building blocks of C# syntax and are used in everything from variable declarations to method calls.

```csharp
int number = 5;
Console.WriteLine(number);
```

---

## Case Sensitivity

C# is a case-sensitive language. This means that identifiers such as score, Score, and SCORE are treated as three distinct variables.

Being case-sensitive helps prevent naming conflicts but also requires attention to capitalization throughout your code.

```csharp
int score = 10;
int Score = 20;

Console.WriteLine(score); // Outputs: 10
Console.WriteLine(Score); // Outputs: 20
```

---

## Comments in C#

Comments are lines of text in your code that are ignored by the compiler. They are used to leave notes, explanations, or reminders inside your codebase without affecting how the program runs.

Comments are extremely useful for:
- Documenting what your code is doing
- Making your code easier to understand later
- Communicating with teammates who might work on the same code

---

### Single-Line Comments

To create a comment that spans a single line, use two forward slashes `//`.

```csharp
// This is a single-line comment
```

Single-line comments are commonly used for short notes above or beside code.

---

### Commenting Out Code

You can also use comments to temporarily disable (or "comment out") lines of code without deleting them. This is helpful when testing or debugging.

```csharp
// int result = first + second; // This line is disabled
```

This technique can be useful when you want to prevent code from running without removing it entirely.

---

### Best Practices for Comments

- Write comments that explain *why* something is done, not just *what* is done.
- Keep comments up to date when code changes.
- Avoid redundant comments that simply restate what the code says.

Bad:

```csharp
// Set x to 5
int x = 5;
```

Better:

```csharp
// Initialize x with the default player health
int x = 5;
```

---

### Comments for Collaboration

In team projects, comments help other developers understand the purpose of the code. Good commenting practices improve teamwork and code maintainability over time.

---

## Quick Note on Multi-Line Comments (IDE Tools)

While C# itself does not have multi-line comment syntax like some other languages, Visual Studio and many editors allow you to select multiple lines of code and comment them out all at once using a shortcut or a toolbar button.

These tools are covered in the Tools → Visual Studio section.


---

## Entry Point and the Main Method

Every C# application must include a Main method. This method is the entry point of the program — the first thing that runs when the application starts.

You can think of the Main method as the front door to your program. It marks where the program begins execution and is required even for simple console apps.

Additionally, Main is a method like any other — it can return void or int, and it can accept parameters (usually an array of strings for command-line arguments).

```csharp
using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Welcome to C#!");
    }
}
```

---

## Input and Output (See Console Page)

Console input and output functions such as WriteLine, Write, and ReadLine are covered in detail on the Console page under Core Concepts.

---

## Common Data Types

C# includes several built-in data types that cover numbers, text, logical values, and characters. Below is a summary of some of the most frequently used:

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Type</th>
      <th class="tableCellHeader">Description</th>
      <th class="tableCellHeader">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">int</td>
      <td class="tableCell">Integer (whole number)</td>
      <td class="tableCell">int x = 100;</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">double</td>
      <td class="tableCell">Double-precision floating point</td>
      <td class="tableCell">double pi = 3.14;</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">char</td>
      <td class="tableCell">Single character</td>
      <td class="tableCell">char grade = 'A';</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">string</td>
      <td class="tableCell">Text string</td>
      <td class="tableCell">string name = "Jane";</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">bool</td>
      <td class="tableCell">True or false value</td>
      <td class="tableCell">bool isReady = true;</td>
    </tr>
  </tbody>
</table>

---
