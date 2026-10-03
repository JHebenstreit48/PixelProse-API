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

Several variables of the same data type can also be declared on one line by separating the identifiers with commas.

<hr class="dividerExample" />

#### Example: Separate Lines vs One Line

<hr class="dividerExample" />

Each variable declared on its own line:

```csharp
string firstName;
string lastName;
string street;
string city;
string country;
string zip;
```

The same variables declared on one line:

```csharp
string firstName, lastName, street, city, country, zip;
```

Both versions behave exactly the same when the code runs, so it only changes how the code reads.

One line takes up less space, but a long line can be harder to read, so separate lines may suit a long list better.

<hr class="dividerSection" />

## Naming Variables

<hr class="dividerSection" />

An identifier cannot be a <span class="emphasis">keyword</span>.

A keyword is a word that already has a special meaning in C#, such as <span class="codeSnip">class</span>, <span class="codeSnip">int</span>, and <span class="codeSnip">string</span>.

Using a keyword as a variable name causes an error, so a different name must be chosen.

```csharp
string class;    // Error: class is a keyword
string myClass;  // Valid
```

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

## Storing User Input in a Variable

<hr class="dividerSection" />

The <span class="codeSnip">Console.ReadLine()</span> method returns the text the user types as a string.

Because it returns a value, the result can be assigned directly to a string variable.

The program pauses on that line until the user presses Enter.

```csharp
Console.WriteLine("Hello and welcome. Please enter your name:");
string name = Console.ReadLine();
Console.WriteLine("Hello " + name + ". Nice to meet you.");
```

Example interaction:

```shell
Hello and welcome. Please enter your name:
Kenneth
Hello Kenneth. Nice to meet you.
```

The variable is declared on the line where it is first needed, so it does not have to be declared at the top of the program.

<hr class="dividerExample" />

#### Example: Character Creator

<hr class="dividerExample" />

Each value to collect needs its own variable.

Variables can also be declared together at the top and assigned later as each answer comes in.

This program asks for each value, clears the console after every answer, and then prints a character sheet.

```csharp
string name, race, myClass, strength, intellect, stamina, health, mana;

// Read the user input
Console.WriteLine("Hello and welcome to the character creator.");
Console.WriteLine("Please enter your name:");
name = Console.ReadLine();
Console.Clear();

Console.WriteLine("Please enter your race:");
race = Console.ReadLine();
Console.Clear();

Console.WriteLine("Please enter your class:");
myClass = Console.ReadLine();
Console.Clear();

Console.WriteLine("Please enter your strength:");
strength = Console.ReadLine();
Console.Clear();

Console.WriteLine("Please enter your intellect:");
intellect = Console.ReadLine();
Console.Clear();

Console.WriteLine("Please enter your stamina:");
stamina = Console.ReadLine();
Console.Clear();

Console.WriteLine("Please enter your health:");
health = Console.ReadLine();
Console.Clear();

Console.WriteLine("Please enter your mana:");
mana = Console.ReadLine();
Console.Clear();

// Print the message
Console.WriteLine("** CHARACTER SHEET **");

Console.WriteLine("Name: {0}", name);
Console.WriteLine("Race: {0}", race);
Console.WriteLine("Class: {0}", myClass);
Console.WriteLine("Strength: {0}", strength);
Console.WriteLine("Intellect: {0}", intellect);
Console.WriteLine("Stamina: {0}", stamina);
Console.WriteLine("Health: {0}", health);
Console.WriteLine("Mana: {0}", mana);

Console.ReadLine();
```
The two comments mark the two halves of the program, reading the input and printing the result.

Each line of the character sheet uses a placeholder, so <span class="codeSnip">{0}</span> is replaced by the one variable listed after the string.

Placeholders are counted separately for each <span class="codeSnip">WriteLine</span> call, so every line here uses <span class="codeSnip">{0}</span>.

After the last answer, the console shows only the character sheet:

```shell
** CHARACTER SHEET **
Name: Kenneth
Race: Human
Class: Wizard
Strength: 3
Intellect: 20
Stamina: 10
Health: 100
Mana: 80
```

The final <span class="codeSnip">Console.ReadLine()</span> pauses the program so the character sheet stays on screen until Enter is pressed.

The same three lines repeat for every value, which makes the code repetitive.

Every value is stored as a string here to keep the example simple, because <span class="codeSnip">ReadLine</span> returns text and storing a typed number in a numeric type needs an extra conversion step.

Numbers such as strength and health are normally stored in numeric types such as <span class="codeSnip">int</span>, which allow math to be done on them.  

<div class="xrefBox">
  <span class="emphasis">See:</span><br />
  <a href="/languages/c-family/c-sharp/basics/core-concepts/console" target="_blank" rel="noopener noreferrer">
    C# → Basics → Core Concepts → Console
  </a><br />
  <a href="/languages/c-family/c-sharp/basics/fundamentals/syntax-and-structure" target="_blank" rel="noopener noreferrer">
    C# → Basics → Fundamentals → Syntax & Structure (composite formatting placeholders)
  </a>
</div>

<hr class="dividerSection" />

## Example: Mailing Label

<hr class="dividerSection" />

A common practice exercise is storing a set of related values, such as a mailing address, in separate string variables, then combining them into a single formatted output.

<hr class="dividerSubsection1" />

### Method 1: Concatenation

<hr class="dividerSubsection1" />

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

<hr class="dividerSubsection1" />

### Method 2: Composite Formatting

<hr class="dividerSubsection1" />

The same mailing label can also be written using composite formatting placeholders combined with the <span class="codeSnip">\n</span> escape character, producing the entire label from a single <span class="codeSnip">Console.WriteLine()</span> call.

```csharp
string firstName = "John";
string lastName = "Smith";
string address = "1234 Maple Street";
string city = "Springfield";
string country = "USA";
string zip = "12345";

Console.WriteLine("First name: {0} \nLast name: {1} \nAddress: {2} \nCity: {3} \nCountry: {4} \nZip: {5}", firstName, lastName, address, city, country, zip);
```

This produces the output:

```shell
First name: John
Last name: Smith
Address: 1234 Maple Street
City: Springfield
Country: USA
Zip: 12345
```

<hr class="dividerSubsection1" />

### Choosing a Method

<hr class="dividerSubsection1" />

Each piece of the mailing label is stored in its own variable, making it easy to update any individual value without affecting the rest of the output, regardless of which method is used to display it.

Concatenation can be simpler for a small number of values, while composite formatting keeps the output readable as more variables are added.

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/languages/c-family/c-sharp/basics/fundamentals/syntax-and-structure" target="_blank" rel="noopener noreferrer">
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