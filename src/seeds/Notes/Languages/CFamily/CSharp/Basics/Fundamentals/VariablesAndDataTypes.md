# Understanding Variables and Data Types

<hr class="dividerSection" />

## What Are Variables?

<hr class="dividerSection" />

<span class="emphasis">Variables</span> are <span class="emphasis">containers</span> for <span class="emphasis">storing</span> <span class="secondEmphasis">data values</span>.

A variable stores a value, it has a type, it does not store a type itself.

An <span class="emphasis">identifier</span> is used when we need to access this memory later in the game or program.

<hr class="dividerSection" />

## Declaring a Variable

<hr class="dividerSection" />

To create a variable in C#, you write the data type first.

After the data type, you need to create an identifier.

An <span class="emphasis">identifier</span> is the unique name that identifies a variable, so it can be referenced later in the program by that name.

Once the variable is declared, you can assign data to it.

```csharp
string name;
name = "Kenneth";
```

You can also declare and assign a variable on a single line.

```csharp
string name = "Kenneth";
```

Both approaches produce the exact same result, there is no functional difference between them.

In some cases, you may want to declare a variable without assigning data right away, which requires the two-line approach.

Otherwise, it comes down to personal preference and code readability.

<hr class="dividerSection" />

## Choosing the Right Data Type

<hr class="dividerSection" />

Different kinds of data require different data types.

For example, health and a name are different kinds of data, health is a number, while a name is text (letters).

To store text, such as a name, you use a <span class="emphasis">string</span> variable.

To store a number, such as health, you use an <span class="emphasis">integer</span> variable, since numbers support mathematical operations that a string cannot.

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

## Example: Mailing Label

<hr class="dividerSection" />

A common practice exercise is storing a set of related values, such as a mailing address, in separate string variables, then combining them into a single formatted output.

```csharp
string firstName = "John";
string lastName = "Smith";
string street = "1234 Maple Street";
string city = "Springfield";
string country = "USA";
string zip = "12345";

Console.WriteLine(firstName + " " + lastName);
Console.WriteLine(street);
Console.WriteLine(city + ", " + zip);
Console.WriteLine(country);
```

This produces the output:

```shell
John Smith
1234 Maple Street
Springfield, 12345
USA
```

Each piece of the mailing label is stored in its own variable, making it easy to update any individual value without affecting the rest of the output.

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/languages/c-family/c-sharp/basics/fundamentals/syntax-and-structure">
    C# → Basics → Fundamentals → Syntax & Structure (concatenation and composite formatting)
  </a>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/languages/c-family/c-sharp/basics/fundamentals/syntax-and-structure">← Back</a>
    <div class="xrefTitle">C# - Basics - Fundamentals - Syntax & Structure</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/languages/c-family/c-sharp/basics/core-concepts/oop">Next →</a>
    <div class="xrefTitle">Section: C# - Basics - Core Concepts - OOP in C#</div>
  </div>
</div>