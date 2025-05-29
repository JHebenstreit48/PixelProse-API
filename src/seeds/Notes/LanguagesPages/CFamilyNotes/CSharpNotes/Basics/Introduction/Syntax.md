## Syntax and Types in C#

C# syntax is structured and consistent, making it readable and developer-friendly. This section introduces core rules and common constructs.

---

## Statements and Semicolons

All statements in C# must end with a semicolon (<span class="punctuationSymbol">;</span>).

```csharp  
int number = 5;  
Console.WriteLine(number);
```

---

## Case Sensitivity

C# is a case-sensitive language. The identifiers score, Score, and SCORE are treated as different variables.

```csharp  
int score = 10;  
int Score = 20;  

Console.WriteLine(score); // Outputs: 10  
Console.WriteLine(Score); // Outputs: 20
```

---

## Entry Point and the Main Method

Every application must include a Main() method, which acts as the starting point.

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

## Console Input and Output

The Console class is commonly used for terminal-based input and output.

```csharp  
Console.WriteLine("What is your name?");  
string name = Console.ReadLine();  

Console.WriteLine($"Hello, {name}!");
```

---

## Common Data Types

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
