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

A variable must be assigned a value before it is used.

Using a variable that has not been assigned a value causes an error.

```csharp
int result;

Console.WriteLine("The result is: {0}", result);  // Error: use of unassigned local variable
```

Assigning a starting value fixes the error.

For numbers, 0 is a common starting value.

```csharp
int result = 0;

Console.WriteLine("The result is: {0}", result);
```

This produces the output:

```shell
The result is: 0
```

The same rule applies to every variable that is used in a calculation.

```csharp
int first;
int second;

int result = first + second;  // Error: use of unassigned local variable
```

Giving <span class="codeSnip">first</span> and <span class="codeSnip">second</span> starting values fixes it.

```csharp
int first = 0;
int second = 0;

int result = first + second;
```

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

An <span class="codeSnip">int</span> stores <span class="emphasis">whole numbers</span>, such as 1, 2, 3, and 4.

A <span class="codeSnip">float</span> stores numbers with a <span class="emphasis">decimal part</span>, such as 1.5.

A <span class="codeSnip">double</span> also stores decimal numbers, but with more precision than a float, meaning more digits after the decimal point.

If a number does not need decimals, use an <span class="codeSnip">int</span>.

If it does, use a <span class="codeSnip">float</span>.

A float is usually enough for values like a character's speed, where a value between 1 and 2, such as 1.5, may be needed.

A double is the better choice when extra precision matters.

<hr class="dividerExample" />

#### Example: Adding Strings vs Integers

<hr class="dividerExample" />

The <span class="codeSnip">+</span> operator joins strings together, but adds numbers.

Adding two strings joins them instead of adding them as numbers.

```csharp
string first = "1";
string second = "2";

string result = first + second;

Console.WriteLine("Result {0}", result);
```

This produces the output:

```shell
Result 12
```

To add them as numbers, change the type to <span class="codeSnip">int</span> on all three variables and remove the quotation marks around the values.

```csharp
int first = 1;
int second = 2;

int result = first + second;

Console.WriteLine("Result {0}", result);
```

This produces the output:

```shell
Result 3
```

Quotation marks create text, so a value written inside them is a string even when it looks like a number.

Strings also cannot be subtracted, multiplied, or divided, which causes an error.

```csharp
Console.WriteLine("4" / "2");  // Error: operator / cannot be applied to strings
```

<hr class="dividerExample" />

#### Example: Dividing Integers vs Floats

<hr class="dividerExample" />

Dividing two ints gives an int, so the decimal part of the answer is discarded.

```csharp
int first = 1;
int second = 2;

int result = first / second;

Console.WriteLine("Result {0}", result);
```

This produces the output:

```shell
Result 0
```

Changing the variables to floats keeps the decimal part of the answer.

```csharp
float first = 1;
float second = 2;

float result = first / second;

Console.WriteLine("Result {0}", result);
```

This produces the output:

```shell
Result 0.5
```

The <span class="codeSnip">result</span> variable is a float too, so it can hold the decimal part.

<hr class="dividerSubsection1" />

### Comparison: Strings and Numbers in C# vs JavaScript

<hr class="dividerSubsection1" />

Both languages join strings with the <span class="codeSnip">+</span> operator, but they differ when other math is used on strings and when numbers are divided.

<div class="tablePairSideBySide">
  <div class="tableWrapper">
    <table class="notesTable">
      <thead>
        <tr class="tableHeader">
          <th class="tableCellHeader">Expression</th>
          <th class="tableCellHeader">C#</th>
        </tr>
      </thead>
      <tbody>
        <tr class="tableRow">
          <td class="tableCell"><span class="codeSnip">"1" + "2"</span></td>
          <td class="tableCell"><span class="codeSnip">12</span> (joined)</td>
        </tr>
        <tr class="tableRow">
          <td class="tableCell"><span class="codeSnip">1 + 2</span></td>
          <td class="tableCell"><span class="codeSnip">3</span></td>
        </tr>
        <tr class="tableRow">
          <td class="tableCell"><span class="codeSnip">"4" / "2"</span></td>
          <td class="tableCell">Error</td>
        </tr>
        <tr class="tableRow">
          <td class="tableCell"><span class="codeSnip">1 / 2</span></td>
          <td class="tableCell"><span class="codeSnip">0</span> (two ints)</td>
        </tr>
        <tr class="tableRow">
          <td class="tableCell">Number types</td>
          <td class="tableCell"><span class="codeSnip">int</span>, <span class="codeSnip">float</span>, <span class="codeSnip">double</span></td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="tableWrapper">
    <table class="notesTable">
      <thead>
        <tr class="tableHeader">
          <th class="tableCellHeader">Expression</th>
          <th class="tableCellHeader">JavaScript</th>
        </tr>
      </thead>
      <tbody>
        <tr class="tableRow">
          <td class="tableCell"><span class="codeSnip">"1" + "2"</span></td>
          <td class="tableCell"><span class="codeSnip">12</span> (joined)</td>
        </tr>
        <tr class="tableRow">
          <td class="tableCell"><span class="codeSnip">1 + 2</span></td>
          <td class="tableCell"><span class="codeSnip">3</span></td>
        </tr>
        <tr class="tableRow">
          <td class="tableCell"><span class="codeSnip">"4" / "2"</span></td>
          <td class="tableCell"><span class="codeSnip">2</span> (converted)</td>
        </tr>
        <tr class="tableRow">
          <td class="tableCell"><span class="codeSnip">1 / 2</span></td>
          <td class="tableCell"><span class="codeSnip">0.5</span></td>
        </tr>
        <tr class="tableRow">
          <td class="tableCell">Number types</td>
          <td class="tableCell">One number type</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

In JavaScript, only the <span class="codeSnip">+</span> operator joins strings.

For subtraction, multiplication, and division, JavaScript converts the strings to numbers first.

```js
console.log("1" + "2");  // 12
console.log("4" / "2");  // 2
```

C# never converts a string to a number for math, so the same division is an error.

```csharp
Console.WriteLine("4" / "2");  // Error: operator / cannot be applied to strings
```

JavaScript also has a single number type, so <span class="codeSnip">1 / 2</span> gives <span class="codeSnip">0.5</span>.

In C#, dividing two ints gives an int, so the result is <span class="codeSnip">0</span> unless the values are floats.

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
      <td class="tableCell"><span class="codeSnip">float</span></td>
      <td class="tableCell">Single-precision floating point (decimal number)</td>
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
      <td class="tableCell"><span class="codeSnip">float</span></td>
      <td class="tableCell"><span class="codeSnip">float speed = 1.5f;</span></td>
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

A decimal number written in code is a <span class="codeSnip">double</span> by default.

A float value therefore ends with <span class="codeSnip">f</span>, as in <span class="codeSnip">1.5f</span>, and without it assigning the value to a float causes an error.

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

## Converting Input to Numbers

<hr class="dividerSection" />

The <span class="codeSnip">ReadLine</span> method always returns a string.

To store the input in a numeric variable, the text must be converted to a number first.

Assigning the result of <span class="codeSnip">ReadLine</span> directly to an int causes an error.

```csharp
int first = 0;
int second = 0;

Console.WriteLine("Enter the first number");

first = Console.ReadLine();  // Error: cannot implicitly convert type 'string' to 'int'
```

The <span class="codeSnip">ReadLine</span> method takes a string from the console and tries to send it to the variable on the left side of the <span class="codeSnip">=</span>.

A string cannot be stored in an int, so this is the same as assigning quoted text to an int.

```csharp
first = "5";  // Error: cannot implicitly convert type 'string' to 'int'
```

The <span class="codeSnip">Parse</span> method fixes this by converting a string into a number.

<span class="codeSnip">int.Parse</span> takes a string and converts it into an int.

As with <span class="codeSnip">WriteLine</span>, the value the method works on goes inside the parentheses, so <span class="codeSnip">Console.ReadLine()</span> can be placed there directly.

```csharp
first = int.Parse(Console.ReadLine());
```

Each numeric type has its own <span class="codeSnip">Parse</span>, such as <span class="codeSnip">float.Parse</span> for a float.

If the text cannot be turned into a number, such as when a letter is typed, the program stops with an exception when it reaches that line.

<hr class="dividerExample" />

#### Example: Adding Two Numbers

<hr class="dividerExample" />

```csharp
int first = 0;
int second = 0;

Console.WriteLine("Enter the first number");

// int.Parse takes the text from the console and turns it
// into an int
first = int.Parse(Console.ReadLine());

Console.Clear();

Console.WriteLine("Enter the second number");

second = int.Parse(Console.ReadLine());

int result = first + second;

Console.Clear();

Console.WriteLine("The result is: {0}", result);

Console.ReadLine();
```

After the second answer, the console shows only the result:

```shell
The result is: 10
```

This example was run with 5 and 5.

The separate <span class="codeSnip">result</span> variable is not required.

The sum can be calculated directly inside <span class="codeSnip">WriteLine</span>, which removes one variable.

```csharp
Console.WriteLine("The result of first + second is {0}", first + second);
```

With 5 and 6, this produces the output:

```shell
The result of first + second is 11
```

<hr class="dividerExample" />

#### Example: Calculator with Floats

<hr class="dividerExample" />

The same approach works for every math operation.

Using <span class="codeSnip">float</span> and <span class="codeSnip">float.Parse</span> keeps the decimal part of the division.

```csharp
float first = 0;
float second = 0;

Console.WriteLine("Enter the first number");
first = float.Parse(Console.ReadLine());
Console.Clear();

Console.WriteLine("Enter the second number");
second = float.Parse(Console.ReadLine());
Console.Clear();

Console.WriteLine("The result of first + second is {0}", first + second);
Console.WriteLine("The result of first - second is {0}", first - second);
Console.WriteLine("The result of first / second is {0}", first / second);
Console.WriteLine("The result of first * second is {0}", first * second);

Console.ReadLine();
```

After the second answer, the console shows only the results:

```shell
The result of first + second is 14
The result of first - second is 6
The result of first / second is 2.5
The result of first * second is 40
```

This example was run with 10 and 4.

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