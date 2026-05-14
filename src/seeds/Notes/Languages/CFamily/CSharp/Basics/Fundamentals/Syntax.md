# How C# Code Is Structured

<hr class="dividerSection" />

C# syntax is structured and consistent, making it readable and developer-friendly. This section introduces core rules and common constructs used to build programs in a clear and maintainable way.

<hr class="dividerSection" />

## Statements and Semicolons

<hr class="dividerSection" />

All executable statements in C# must end with a semicolon <span class="codeSnip">;</span>. This tells the compiler that a complete instruction has been written. Missing a semicolon will result in a syntax error.

Semicolons appear in everything from variable declarations to method calls.

```csharp
int number = 5;
Console.WriteLine(number);
```

<hr class="dividerSection" />

## Case Sensitivity

<hr class="dividerSection" />

C# is a <span class="emphasis">case-sensitive</span> language. Identifiers such as <span class="codeSnip">score</span>, <span class="codeSnip">Score</span>, and <span class="codeSnip">SCORE</span> are treated as three distinct variables.

Being case-sensitive helps prevent naming conflicts but also requires attention to capitalization throughout your code.

```csharp
int score = 10;
int Score = 20;

Console.WriteLine(score); // Outputs: 10
Console.WriteLine(Score); // Outputs: 20
```

<hr class="dividerSection" />

## Comments in C#

<hr class="dividerSection" />

Comments are lines of text ignored by the compiler. They are used to leave notes, explanations, or reminders without affecting how the program runs.

Comments are useful for:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Documenting what your code is doing</li>
    <li>Making your code easier to understand later</li>
    <li>Communicating with teammates who work on the same codebase</li>
  </ul>
</div>

<hr class="dividerSubsection1" />

### Single-Line Comments

<hr class="dividerSubsection1" />

To create a comment that spans a single line, use two forward slashes <span class="codeSnip">//</span>.

```csharp
// This is a single-line comment
```

Single-line comments are commonly used for short notes above or beside code. You can also use them to temporarily disable a line without deleting it.

```csharp
// int result = first + second; // This line is disabled
```

<hr class="dividerSubsection1" />

### Multi-Line Comments

<hr class="dividerSubsection1" />

C# supports multi-line comments using <span class="codeSnip">/* */</span> syntax. Everything between the opening and closing markers is ignored by the compiler.

```csharp
/* This is a
   multi-line comment */
```

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">Ideal for</span>: detailed documentation, explaining complex logic, or commenting out large sections of code during debugging.</li>
    <li><span class="emphasis">Limitation</span>: C# does <span class="emphasis">not</span> support nested multi-line comments — placing one <span class="codeSnip">/* */</span> block inside another will cause a syntax error.</li>
  </ul>
</div>

<hr class="dividerSubsection1" />

### XML Documentation Comments

<hr class="dividerSubsection1" />

C# also supports XML documentation comments using <span class="codeSnip">///</span>. These are recognized by IDEs for IntelliSense support and can be used to generate documentation.

```csharp
/// <summary>
/// Describes what this method does
/// </summary>
```

<hr class="dividerSubsection1" />

### Best Practices for Comments

<hr class="dividerSubsection1" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Write comments that explain <span class="emphasis">why</span> something is done, not just what is done.</li>
    <li>Keep comments up to date when code changes.</li>
    <li>Avoid redundant comments that simply restate what the code already says.</li>
  </ul>
</div>

Instead of this:

```csharp
// Set x to 5
int x = 5;
```

Prefer this:

```csharp
// Initialize x with the default player health
int x = 5;
```

In team projects, good commenting improves collaboration and long-term maintainability. IDE tools like Visual Studio also allow you to select multiple lines and comment them all out at once using a keyboard shortcut, covered in <span class="emphasis">Tools → Visual Studio</span>.

<hr class="dividerSection" />

## Entry Point and the Main Method

<hr class="dividerSection" />

Every C# application must include a <span class="emphasis">Main</span> method. This is the <span class="emphasis">entry point</span> of the program — the first thing that runs when the application starts.

<span class="emphasis">Main</span> can return <span class="codeSnip">void</span> or <span class="codeSnip">int</span>, and it can accept parameters such as a string array for command-line arguments.

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

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/c-family/c-sharp/basics/core-concepts/console">
    C# → Basics → Core Concepts → Console
  </a>
</div>

<hr class="dividerSection" />

## Common Data Types

<hr class="dividerSection" />

C# includes several built-in data types covering numbers, text, logical values, and characters.

<hr class="dividerSubsection1" />

#### Type Descriptions

<hr class="dividerSubsection1" />

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Type</th>
      <th class="tableCellHeader">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">int</span></td>
      <td class="tableCell">Integer (whole number)</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">double</span></td>
      <td class="tableCell">Double-precision floating point</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">char</span></td>
      <td class="tableCell">Single character</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">string</span></td>
      <td class="tableCell">Text string</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">bool</span></td>
      <td class="tableCell">True or false value</td>
    </tr>
  </tbody>
</table>

<hr class="dividerSubsection1" />

#### Type Examples

<hr class="dividerSubsection1" />

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Type</th>
      <th class="tableCellHeader">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">int</span></td>
      <td class="tableCell"><span class="codeSnip">int x = 100;</span></td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">double</span></td>
      <td class="tableCell"><span class="codeSnip">double pi = 3.14;</span></td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">char</span></td>
      <td class="tableCell"><span class="codeSnip">char grade = 'A';</span></td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">string</span></td>
      <td class="tableCell"><span class="codeSnip">string name = "Jane";</span></td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">bool</span></td>
      <td class="tableCell"><span class="codeSnip">bool isReady = true;</span></td>
    </tr>
  </tbody>
</table>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/c-family/c-sharp/basics/fundamentals/introduction">← Back</a>
    <div class="xrefTitle">C# - Basics - Fundamentals - Introduction</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/c-family/c-sharp/basics/core-concepts/oop">Next →</a>
    <div class="xrefTitle">Section: C# - Basics - Core Concepts - OOP in C#</div>
  </div>
</div>