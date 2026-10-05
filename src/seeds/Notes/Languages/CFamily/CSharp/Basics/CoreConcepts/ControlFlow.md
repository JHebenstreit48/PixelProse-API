# What Control Flow Does

<hr class="dividerSection" />

Control flow in programming refers to the order in which individual instructions, statements, or function calls are executed or evaluated.

In C#, control flow is determined through conditional statements and loops, allowing programs to make decisions and repeat actions.

Understanding control flow is essential for writing programs that can react to different inputs and conditions.

For example, in a game an enemy should only attack the player when it is close enough to hit.

Control flow lets the attack code run only under that condition.

Without it, the enemy would attack constantly, no matter how close it is.

<hr class="dividerSection" />

## If Statements

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

## Boolean Expressions

<hr class="dividerSection" />

A boolean expression is an expression that evaluates to either true or false.

It is typically used to control if statements and loops.

Common boolean values:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="codeSnip">true</span></li>
    <li><span class="codeSnip">false</span></li>
  </ul>
</div>

```csharp
bool isReady = true;
bool isPaused = false;
```

<hr class="dividerSection" />

## Comparing Values in a Condition

<hr class="dividerSection" />

A condition does not have to be a bool variable.

It can be any expression that results in true or false, such as a comparison between two values.

The <span class="codeSnip">==</span> operator checks whether two values are equal.

A single <span class="codeSnip">=</span> assigns a value instead of comparing, so conditions use two.

```csharp
string command = "attack";

if (command == "attack")
{
    Console.WriteLine("Attack Player");
}
```

This produces the output:

```shell
Attack Player
```

The condition is true because <span class="codeSnip">command</span> holds the value <span class="codeSnip">"attack"</span>.

If <span class="codeSnip">command</span> held a different value, such as <span class="codeSnip">"run"</span>, the condition would be false and the code would be skipped.

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/languages/c-family/c-sharp/basics/core-concepts/operators" target="_blank" rel="noopener noreferrer">
    C# → Basics → Core Concepts → Operators (Comparison Operators)
  </a>
</div>

<hr class="dividerExample" />

#### Example: Capital Letters in String Comparisons

<hr class="dividerExample" />

String comparisons are <span class="emphasis">case-sensitive</span>.

Capital and lowercase letters count as different characters, so <span class="codeSnip">"attack"</span> and <span class="codeSnip">"Attack"</span> are not equal.

```csharp
string command = "attack";

if (command == "Attack")
{
    Console.WriteLine("Attack Player");  // Never runs
}
```

Nothing is printed, because the two strings are not equal.

<hr class="dividerSection" />

## Comparing Numbers in a Condition

<hr class="dividerSection" />

Conditions can compare numbers as well as strings.

The comparison operators work on numbers.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="codeSnip">&gt;</span>, greater than</li>
    <li><span class="codeSnip">&gt;=</span>, greater than or equal to</li>
    <li><span class="codeSnip">&lt;</span>, less than</li>
    <li><span class="codeSnip">&lt;=</span>, less than or equal to</li>
  </ul>
</div>

A number typed into the console must be converted with <span class="codeSnip">int.Parse</span> before it can be stored in an int.

```csharp
Console.WriteLine("Please enter your age");

int age = int.Parse(Console.ReadLine());

Console.Clear();

Console.WriteLine("Your age is " + age);

if (age >= 18)
{
    Console.WriteLine("Welcome to the program");
}

if (age <= 17)
{
    Console.WriteLine("You are not old enough");
}
```

Joining text and a number with <span class="codeSnip">+</span> converts the number to text, so the age is printed as part of the message.

Entering 21 prints:

```shell
Your age is 21
Welcome to the program
```

Entering 17 prints:

```shell
Your age is 17
You are not old enough
```

<div class="xrefBox">
  <span class="emphasis">See:</span><br />
  <a href="/languages/c-family/c-sharp/basics/core-concepts/operators" target="_blank" rel="noopener noreferrer">
    C# → Basics → Core Concepts → Operators (Comparison Operators)
  </a><br />
  <a href="/languages/c-family/c-sharp/basics/fundamentals/variables-and-data-types" target="_blank" rel="noopener noreferrer">
    C# → Basics → Fundamentals → Variables and Data Types (Converting Input to Numbers)
  </a>
</div>

<hr class="dividerExample" />

#### Example: Why == and != Do Not Work for a Range

<hr class="dividerExample" />

The <span class="codeSnip">==</span> operator only matches one exact value, so it does not cover everyone who is 18 or older.

```csharp
if (age == 18)
{
    Console.WriteLine("Welcome to the program");
}

if (age != 18)
{
    Console.WriteLine("You are not old enough");
}
```

Entering 18 prints the welcome message.

Entering 17 prints the not old enough message, which is correct.

Entering 21 also prints the not old enough message, which is wrong, because 21 is old enough.

<span class="codeSnip">!=</span> matches every number except 18, including all the numbers above it.

<hr class="dividerExample" />

#### Example: Greater Than vs Greater Than or Equal To

<hr class="dividerExample" />

```csharp
if (age > 18)
{
    Console.WriteLine("Welcome to the program");
}
```

With <span class="codeSnip">&gt;</span>, entering 18 prints nothing, because 18 is not greater than 18.

Changing it to <span class="codeSnip">&gt;=</span> includes 18.

<hr class="dividerExample" />

#### Example: Equivalent Conditions

<hr class="dividerExample" />

Different conditions can mean the same thing for whole numbers.

The same program can use <span class="codeSnip">&gt; 17</span> and <span class="codeSnip">&lt; 18</span> instead of <span class="codeSnip">&gt;= 18</span> and <span class="codeSnip">&lt;= 17</span>.

```csharp
if (age > 17)
{
    Console.WriteLine("Welcome to the program");
}

if (age < 18)
{
    Console.WriteLine("You are not old enough");
}
```

Entering 17 prints the not old enough message, and entering 18 prints the welcome message, the same as before.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="codeSnip">age &gt;= 18</span> and <span class="codeSnip">age &gt; 17</span> give the same result.</li>
    <li><span class="codeSnip">age &lt;= 17</span> and <span class="codeSnip">age &lt; 18</span> give the same result.</li>
  </ul>
</div>

Which one to use is a matter of preference, and the one that reads most clearly is usually the better choice.

This only holds for whole numbers, because a value such as 17.5 is less than 18 but not less than or equal to 17.

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

```javascript
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

```javascript
let hasKey = false;

if (hasKey) {
    console.log("Door unlocked!");
} else {
    console.log("You need a key.");
}
```

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

```javascript
let score = 75;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else {
    console.log("Keep studying!");
}
```

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

Separate if statements are different from an else if chain.

In an else if chain, once one condition is true the rest are skipped.

With separate if statements, every condition is still checked, so if more than one is true, more than one block runs.  

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
    <a class="xrefBtn" href="/languages/c-family/c-sharp/basics/core-concepts/operators">← Back</a>
    <div class="xrefTitle">C# - Basics - Core Concepts - Operators</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/languages/c-family/c-sharp/advanced/linq">Next →</a>
    <div class="xrefTitle">Section: C# - Advanced - Modern Features - LINQ</div>
  </div>
</div>