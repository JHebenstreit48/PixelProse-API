# Making Decisions with If Statements

<hr class="dividerSection" />

## How an If Statement Works

<hr class="dividerSection" />

The if statement allows a program to make a decision based on whether a condition is true or false.

If the condition evaluates to true, the code inside the block runs.

```csharp
bool isGameOver = false;

if (!isGameOver)
{
    Console.WriteLine("Continue playing!");
}
```

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>The condition is enclosed in parentheses <span class="codeSnip">()</span>.</li>
    <li>The code to execute is enclosed in curly braces <span class="codeSnip">{}</span> (a scope).</li>
  </ul>
</div>

How to write the condition itself, using comparisons and combined checks, is covered on its own page.

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/languages/c-family/c-sharp/basics/control-flow/conditions-and-comparisons" target="_blank" rel="noopener noreferrer">
    C# → Basics → Control Flow → Conditions & Comparisons
  </a>
</div>

<hr class="dividerExample" />

#### Example: Condition True vs False

<hr class="dividerExample" />

When the condition is true, the code inside the curly braces runs.

```csharp
bool example = true;

if (example)
{
    Console.WriteLine("Attack Player");
}
```

This produces the output:

```shell
Attack Player
```

When the condition is false, the code inside the curly braces is skipped and nothing is printed.

```csharp
bool example2 = false;

if (example2)
{
    Console.WriteLine("Attack Player");
}
```

<hr class="dividerSection" />

## Nested If Statements

<hr class="dividerSection" />

If statements can be nested inside each other to check multiple conditions in a sequence.

```csharp
bool isLoggedIn = true;
bool hasAccess = true;

if (isLoggedIn)
{
    if (hasAccess)
    {
        Console.WriteLine("Access granted.");
    }
}
```

Nested conditions allow programs to make more complex decisions based on multiple factors.

<hr class="dividerSection" />

## Comparison: If Statements in C# vs JavaScript

<hr class="dividerSection" />

Both C# and JavaScript use similar syntax for if statements, but C# is strongly typed and requires boolean conditions.

<div class="tablePairSideBySide">
  <div class="tableWrapper">
    <table class="notesTable">
      <thead>
        <tr class="tableHeader">
          <th class="tableCellHeader">Feature</th>
          <th class="tableCellHeader">C#</th>
        </tr>
      </thead>
      <tbody>
        <tr class="tableRow">
          <td class="tableCell">Type Checking</td>
          <td class="tableCell">Strict boolean required</td>
        </tr>
        <tr class="tableRow">
          <td class="tableCell">Syntax</td>
          <td class="tableCell"><span class="codeSnip">if (condition) { /* code */ }</span></td>
        </tr>
        <tr class="tableRow">
          <td class="tableCell">Common Pitfalls</td>
          <td class="tableCell">Non-boolean expressions cause compile errors</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="tableWrapper">
    <table class="notesTable">
      <thead>
        <tr class="tableHeader">
          <th class="tableCellHeader">Feature</th>
          <th class="tableCellHeader">JavaScript</th>
        </tr>
      </thead>
      <tbody>
        <tr class="tableRow">
          <td class="tableCell">Type Checking</td>
          <td class="tableCell">Truthy/Falsy values allowed</td>
        </tr>
        <tr class="tableRow">
          <td class="tableCell">Syntax</td>
          <td class="tableCell"><span class="codeSnip">if (condition) { /* code */ }</span></td>
        </tr>
        <tr class="tableRow">
          <td class="tableCell">Common Pitfalls</td>
          <td class="tableCell">Non-boolean expressions are coerced into booleans</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<hr class="dividerExample" />

#### Example: If Statement in C#

<hr class="dividerExample" />

```csharp
bool isActive = true;
if (isActive)
{
    Console.WriteLine("Active!");
}
```

<hr class="dividerExample" />

#### Example: If Statement in JavaScript

<hr class="dividerExample" />

```js
let isActive = true;
if (isActive) {
    console.log("Active!");
}
```

<hr class="dividerSection" />

## Else and Else If Statements

<hr class="dividerSection" />

The else statement specifies a block of code to run if the condition in the if statement is false.

It acts as a default action when none of the previous if conditions are met.

An else has no condition of its own.

An else cannot stand alone, so it must come directly after an if statement, and without one the code causes an error.

An else pairs with the if statement directly above it, and it ignores any other if statements further up.

When the if condition is true, the else block is skipped.

When the if condition is false, the program jumps to the else block.

An else is a better choice than a second if for the opposite case, because a second if would still be checked even when the first one was true.

<hr class="dividerExample" />

#### Example: Else Statement in C#

<hr class="dividerExample" />

```csharp
bool hasKey = false;

if (hasKey)
{
    Console.WriteLine("Door unlocked!");
}
else
{
    Console.WriteLine("You need a key.");
}
```

<hr class="dividerExample" />

#### Example: Else Statement in JavaScript

<hr class="dividerExample" />

```js
let hasKey = false;

if (hasKey) {
    console.log("Door unlocked!");
} else {
    console.log("You need a key.");
}
```

When an if and else only choose between two values, the <span class="emphasis">ternary operator</span> can do the same thing in one line.

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/languages/c-family/c-sharp/basics/core-concepts/operators" target="_blank" rel="noopener noreferrer">
    C# → Basics → Core Concepts → Operators (Ternary Operator)
  </a>
</div>

The else if statement allows you to specify a new condition to test if the previous if was false.

It creates a chain of conditions where only the first true condition will execute, and the rest will be ignored.

<hr class="dividerExample" />

#### Example: Else If Statement in C#

<hr class="dividerExample" />

```csharp
int score = 75;

if (score >= 90)
{
    Console.WriteLine("Grade: A");
}
else if (score >= 80)
{
    Console.WriteLine("Grade: B");
}
else
{
    Console.WriteLine("Keep studying!");
}
```

<hr class="dividerExample" />

#### Example: Else If Statement in JavaScript

<hr class="dividerExample" />

```js
let score = 75;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else {
    console.log("Keep studying!");
}
```

<hr class="dividerExample" />

#### Example: Else If Chain for the Warning System

<hr class="dividerExample" />

The health warning system, built with separate if statements and ranges, can be written as an else if chain.

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/languages/c-family/c-sharp/basics/control-flow/conditions-and-comparisons" target="_blank" rel="noopener noreferrer">
    C# → Basics → Control Flow → Conditions & Comparisons (Health Warning System)
  </a>
</div>

```csharp
if (health == 100)
{
    Console.WriteLine("You have full health!");
}
else if (health >= 75 && health <= 99)
{
    Console.WriteLine("You are almost at full health");
}
else if (health >= 50 && health <= 74)
{
    Console.WriteLine("You are at medium health");
}
else if (health >= 25 && health <= 49)
{
    Console.WriteLine("Your health is low");
}
else if (health >= 1 && health <= 24)
{
    Console.WriteLine("Your health is critical");
}
else if (health <= 0)
{
    Console.WriteLine("You are dead");
}
```

The output is the same as with separate if statements.

With a health of 100, the first condition is true, so the other five conditions are never checked.

Skipping them is safe, because each of them can only be true when the first one is false.

<hr class="dividerSection" />

## Multiple If Statements

<hr class="dividerSection" />

A program can have more than one if statement.

Each if statement is checked on its own, so every condition is tested in turn.

Combined with user input, this lets a program react to different commands.

<hr class="dividerExample" />

#### Example: Reading a Command

<hr class="dividerExample" />

```csharp
Console.WriteLine("Enter your command: Run, Attack");
string command = Console.ReadLine();

if (command == "Attack")
{
    Console.WriteLine("Attack Player");
}

if (command == "Run")
{
    Console.WriteLine("Run away");
}

Console.ReadLine();
```

If the user types Attack, the program prints:

```shell
Enter your command: Run, Attack
Attack
Attack Player
```

If the user types Run, the program prints:

```shell
Enter your command: Run, Attack
Run
Run away
```

Text that matches neither condition, such as jump, prints nothing.

The typed text must match exactly, including capital letters, so typing attack in lowercase also prints nothing.

The final <span class="codeSnip">Console.ReadLine()</span> pauses the program so the output stays on screen until Enter is pressed.

Unlike an else if chain, separate if statements are all checked, so if more than one condition is true, more than one block runs.

<hr class="dividerSection" />

## Example Program: Even or Odd Checker

<hr class="dividerSection" />

This program generates <span class="emphasis">two random numbers</span> from 1 to 10, prints them, and tells the user whether each one is <span class="emphasis">even</span> or <span class="emphasis">odd</span>.

It prints one of these results:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Both numbers are even</li>
    <li>Both numbers are odd</li>
    <li>The first number is even and the second number is odd</li>
    <li>The first number is odd and the second number is even</li>
  </ul>
</div>

The two numbers are generated with the <span class="codeSnip">Random</span> class, using <span class="codeSnip">Next(1, 11)</span> for a number from 1 to 10.

Checking for even numbers is normally done with the <span class="emphasis">modulus operator</span> <span class="codeSnip">%</span>.

This program avoids it on purpose and checks each possible value with <span class="codeSnip">||</span> instead, to practice combining conditions.

<div class="xrefBox">
  <span class="emphasis">See:</span><br />
  <a href="/languages/c-family/c-sharp/basics/fundamentals/variables-and-data-types" target="_blank" rel="noopener noreferrer">
    C# → Basics → Fundamentals → Variables and Data Types (Generating a Random Number)
  </a><br />
  <a href="/languages/c-family/c-sharp/basics/core-concepts/operators" target="_blank" rel="noopener noreferrer">
    C# → Basics → Core Concepts → Operators (Arithmetic Operators)
  </a><br />
  <a href="/languages/c-family/c-sharp/basics/control-flow/conditions-and-comparisons" target="_blank" rel="noopener noreferrer">
    C# → Basics → Control Flow → Conditions & Comparisons (Checking Whether Either Condition Is True)
  </a>
</div>

```csharp
Random rnd = new Random();

int first = rnd.Next(1, 11);
int second = rnd.Next(1, 11);

Console.WriteLine($"The first random number is {first}");
Console.WriteLine($"The second random number is {second}");

if ((first == 2 || first == 4 || first == 6 || first == 8 || first == 10) && (second == 2 || second == 4 || second == 6 || second == 8 || second == 10))
{
    Console.WriteLine("Both numbers are even");
}
else if ((first == 1 || first == 3 || first == 5 || first == 7 || first == 9) && (second == 1 || second == 3 || second == 5 || second == 7 || second == 9))
{
    Console.WriteLine("Both numbers are odd");
}
else
{
    if (first == 2 || first == 4 || first == 6 || first == 8 || first == 10)
    {
        Console.WriteLine("The first number is even");
    }
    else
    {
        Console.WriteLine("The first number is odd");
    }

    if (second == 2 || second == 4 || second == 6 || second == 8 || second == 10)
    {
        Console.WriteLine("The second number is even");
    }
    else
    {
        Console.WriteLine("The second number is odd");
    }
}
```

The <span class="codeSnip">$</span> in front of the string turns on <span class="emphasis">string interpolation</span>, which inserts the value of the variable inside the curly braces.

Without the <span class="codeSnip">$</span>, the curly braces are printed as plain text, so the output would read The first random number is {first}.

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/languages/c-family/c-sharp/basics/fundamentals/syntax-and-structure" target="_blank" rel="noopener noreferrer">
    C# → Basics → Fundamentals → Syntax &amp; Structure (String Interpolation)
  </a>
</div>

Each <span class="codeSnip">||</span> chain is wrapped in its own <span class="emphasis">parentheses</span>, so it is evaluated as <span class="secondEmphasis">one condition</span> before the <span class="codeSnip">&amp;&amp;</span> joins the two chains.

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/languages/c-family/c-sharp/basics/control-flow/conditions-and-comparisons" target="_blank" rel="noopener noreferrer">
    C# → Basics → Control Flow → Conditions & Comparisons (Grouping Conditions with Parentheses)
  </a>
</div>

The results for some example numbers:

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Numbers Generated</th>
      <th class="tableCellHeader">Message Printed</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">2</span> and <span class="codeSnip">4</span></td>
      <td class="tableCell">Both numbers are even</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">3</span> and <span class="codeSnip">7</span></td>
      <td class="tableCell">Both numbers are odd</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">2</span> and <span class="codeSnip">7</span></td>
      <td class="tableCell">The first number is even, The second number is odd</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">5</span> and <span class="codeSnip">4</span></td>
      <td class="tableCell">The first number is odd, The second number is even</td>
    </tr>
  </tbody>
</table>

<hr class="dividerExample" />

#### Example: Why the Individual Checks Sit Inside the Else

<hr class="dividerExample" />

If the individual checks were placed after the else if chain instead of inside the final else, they would always run.

With the numbers 2 and 4, the program would then print:

```shell
Both numbers are even
The first number is even
The second number is even
```

The last two lines repeat what the first line already said.

Placing the individual checks inside the else means they only run when the numbers are <span class="emphasis">not</span> both even and <span class="emphasis">not</span> both odd.

<hr class="dividerExample" />

#### Example: Testing with Fixed Numbers

<hr class="dividerExample" />

Random numbers make it hard to test every case, because the needed combination may take many runs to appear.

Replacing the random values with <span class="emphasis">fixed values</span> makes each case easy to test.

```csharp
int first = 2;
int second = 4;
```

Changing the two values to 3 and 7, 2 and 7, or 5 and 4 tests each of the other results.

Once every case prints the correct message, the random values can be put back.

<hr class="dividerSection" />

## Key Points to Remember

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>An <span class="emphasis">if...else if...else</span> chain evaluates conditions in order. Once a true condition is found, no further conditions are evaluated.</li>
    <li>The <span class="emphasis">else</span> block is optional but recommended when a default action is needed.</li>
    <li>Always use curly braces <span class="codeSnip">{}</span> even for single-line statements. This improves code readability and prevents logical errors.</li>
    <li>Too many nested <span class="emphasis">if...else if</span> chains can make code hard to read. For complex conditions, consider using switch statements or refactoring logic.</li>
  </ul>
</div>

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/languages/c-family/c-sharp/basics/control-flow/switch-statements" target="_blank" rel="noopener noreferrer">
    C# → Basics → Control Flow → Switch Statements
  </a>
</div>

<hr class="dividerSection" />

## Common Pitfalls

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">Missing Braces</span>, omitting <span class="codeSnip">{}</span> can cause unexpected behavior when adding new lines.</li>
    <li><span class="emphasis">Unreachable Code</span>, placing code after an else block without careful logic can lead to code that is never executed.</li>
    <li><span class="emphasis">Deep Nesting</span>, excessive nesting of if...else if structures can make code difficult to maintain.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Summary

<hr class="dividerSection" />

Control flow allows a program to make decisions and execute different sections of code based on conditions.

Understanding if, else, and boolean logic is essential for writing dynamic and responsive C# applications.

Future expansions of control flow include:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Switch statements</li>
    <li>For loops</li>
    <li>While loops</li>
    <li>Do-while loops</li>
  </ul>
</div>

These advanced control structures will allow even more powerful and flexible programming patterns.

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/languages/c-family/c-sharp/basics/control-flow/conditions-and-comparisons">← Back</a>
    <div class="xrefTitle">C# - Basics - Control Flow - Conditions & Comparisons</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/languages/c-family/c-sharp/basics/control-flow/switch-statements">Next →</a>
    <div class="xrefTitle">C# - Basics - Control Flow - Switch Statements</div>
  </div>
</div>