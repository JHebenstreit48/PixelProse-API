# What Control Flow Does

<hr class="dividerSection" />

Control flow in programming refers to the order in which individual instructions, statements, or function calls are executed or evaluated.

In C#, control flow is determined through conditional statements and loops, allowing programs to make decisions and repeat actions.

Understanding control flow is essential for writing programs that can react to different inputs and conditions.

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