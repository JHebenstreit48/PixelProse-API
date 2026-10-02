# How C# Code Is Structured

<hr class="dividerSection" />

C# syntax is structured and consistent, making it readable and developer-friendly.

This section introduces core rules and common constructs used to build programs in a clear and maintainable way.

<hr class="dividerSection" />

## Statements and Semicolons

<hr class="dividerSection" />

All executable statements in C# must end with a semicolon <span class="codeSnip">;</span>.

This tells the compiler that a complete instruction has been written.

Missing a semicolon will result in a syntax error.

Semicolons appear in everything from variable declarations to method calls.

```csharp
int number = 5;
Console.WriteLine(number);
```

<hr class="dividerSection" />

## Case Sensitivity

<hr class="dividerSection" />

C# is a <span class="emphasis">case-sensitive</span> language.

Identifiers such as <span class="codeSnip">score</span>, <span class="codeSnip">Score</span>, and <span class="codeSnip">SCORE</span> are treated as three distinct variables.

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

Comments are lines of text ignored by the compiler.

They are used to leave notes, explanations, or reminders without affecting how the program runs.

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

Single-line comments are commonly used for short notes above or beside code.

You can also use them to temporarily disable a line without deleting it.

```csharp
// int result = first + second; // This line is disabled
```

<hr class="dividerSubsection1" />

### Multi-Line Comments

<hr class="dividerSubsection1" />

C# supports multi-line comments using <span class="codeSnip">/* */</span> syntax.

Everything between the opening and closing markers is ignored by the compiler.

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

C# also supports XML documentation comments using <span class="codeSnip">///</span>.

These are recognized by IDEs for IntelliSense support and can be used to generate documentation.

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

In team projects, good commenting improves collaboration and long-term maintainability.

IDE tools like Visual Studio also allow you to select multiple lines and comment them all out at once using a keyboard shortcut, covered in <span class="emphasis">Tools → Visual Studio</span>.

<hr class="dividerSection" />

## Entry Point and the Main Method

<hr class="dividerSection" />

Every C# application must include a <span class="emphasis">Main</span> method.

This is the <span class="emphasis">entry point</span> of the program, the first thing that runs when the application starts.

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
  <a href="/languages/c-family/c-sharp/basics/core-concepts/console">
    C# → Basics → Core Concepts → Console
  </a>
</div>

<hr class="dividerSection" />

## Line Breaks with the \n Escape Character

<hr class="dividerSection" />

You can use <span class="codeSnip">\n</span> as an escape character inside a string to force a line break, splitting the output across two separate lines instead of one.

```csharp
Console.WriteLine("Hello \nWorld");
```

This produces the output:

```shell
Hello 
World
```

The <span class="codeSnip">\n</span> can be placed anywhere inside a string to break the output at that exact point.

<hr class="dividerSection" />

## Combining Strings (Concatenation)

<hr class="dividerSection" />

You can combine a variable's value with a string literal using the <span class="codeSnip">+</span> operator.

```csharp
Console.WriteLine("Hello " + name);
```

This writes the literal text <span class="codeSnip">"Hello "</span> (including a trailing space) to the console, then concatenates the value stored in <span class="emphasis">name</span> onto it.

Without the <span class="codeSnip">+</span> operator, placing a variable and a string literal next to each other results in a syntax error, since C# does not allow two separate values to sit side by side with nothing connecting them.

```csharp
Console.WriteLine(name + "that's a nice name");
```

This produces the output:

```shell
Kenneth that's a nice name
```

Notice that C# does not automatically add spacing between concatenated values.

If the string literal does not include a leading space, the output will run the variable's value and the literal text together with no space in between.

Any spacing you want in the final output must be included manually, either in the string literal itself or as a separate concatenated space.

<hr class="dividerSection" />

## Composite Formatting (Placeholders)

<hr class="dividerSection" />

When a string requires many concatenated variables, the repeated use of <span class="codeSnip">+</span> can become long and difficult to read.

Composite formatting offers a cleaner alternative using placeholders.

A <span class="emphasis">placeholder</span> is a number inside curly braces (e.g., <span class="codeSnip">{0}</span>) that marks where a variable's value should be inserted into the string.

```csharp
Console.WriteLine("Hello my name is {0} and I am {1} years old", name, age);
```

Placeholders are zero-indexed, meaning <span class="codeSnip">{0}</span> refers to the first variable listed after the string (<span class="emphasis">name</span>), and <span class="codeSnip">{1}</span> refers to the second (<span class="emphasis">age</span>).

<hr class="dividerExample" />

#### Example: Mismatched Placeholder Index

<hr class="dividerExample" />

If both placeholders are mistakenly set to <span class="codeSnip">{0}</span>, both will be replaced by the first variable instead of their intended values.

```csharp
Console.WriteLine("Hello my name is {0} and I am {0} years old", name, age);
```

This would incorrectly output:

```shell
Hello my name is Joe and I am Joe years old
```

Correcting the second placeholder to <span class="codeSnip">{1}</span> fixes the output:

```shell
Hello my name is Joe and I am 30 years old
```

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/languages/c-family/c-sharp/basics/fundamentals/introduction">← Back</a>
    <div class="xrefTitle">C# - Basics - Fundamentals - Introduction</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/languages/c-family/c-sharp/basics/fundamentals/variables-and-data-types">Next →</a>
    <div class="xrefTitle">C# - Basics - Fundamentals - Variables and Data Types</div>
  </div>
</div>