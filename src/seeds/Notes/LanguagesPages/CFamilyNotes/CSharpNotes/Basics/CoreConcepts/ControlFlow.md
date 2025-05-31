## Control Flow in C#

Control flow in programming refers to the order in which individual instructions, statements, or function calls are executed or evaluated. In C#, control flow is determined through conditional statements and loops, allowing programs to make decisions and repeat actions.

Understanding control flow is essential for writing programs that can react to different inputs and conditions.

---

## If Statements

The if statement allows a program to make a decision based on whether a condition is true or false. If the condition evaluates to true, the code inside the block runs.

```csharp
bool isGameOver = false;

if (!isGameOver)
{
    Console.WriteLine("Continue playing!");
}
```

- The condition is enclosed in parentheses ().
- The code to execute is enclosed in curly braces {} (a scope).

---

## Boolean Expressions

A boolean expression is an expression that evaluates to either true or false. It is typically used to control if statements and loops.

Common boolean values:
- true
- false

```csharp
bool isReady = true;
bool isPaused = false;
```

---

## Nested If Statements

if statements can be nested inside each other to check multiple conditions in a sequence.

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

---

## Comparison: If Statements in C# vs JavaScript

Both C# and JavaScript use similar syntax for if statements, but C# is strongly typed and requires boolean conditions.

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Feature</th>
      <th class="tableCellHeader">C#</th>
      <th class="tableCellHeader">JavaScript</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Type Checking</td>
      <td class="tableCell">Strict boolean required</td>
      <td class="tableCell">Truthy/Falsy values allowed</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Syntax</td>
      <td class="tableCell">if (condition) { /* code */ }</td>
      <td class="tableCell">if (condition) { /* code */ }</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Common Pitfalls</td>
      <td class="tableCell">Non-boolean expressions cause compile errors</td>
      <td class="tableCell">Non-boolean expressions are coerced into booleans</td>
    </tr>
  </tbody>
</table>

Example in C#:

```csharp
bool isActive = true;
if (isActive)
{
    Console.WriteLine("Active!");
}
```

Example in JavaScript:

```javascript
let isActive = true;
if (isActive) {
    console.log("Active!");
}
```

---

## Else and Else If Statements

The else statement specifies a block of code to run if the condition in the if statement is false. It acts as a default action when none of the previous if conditions are met.

C#

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

JavaScript

```javascript
let hasKey = false;

if (hasKey) {
    console.log("Door unlocked!");
} else {
    console.log("You need a key.");
}
```

---

The else if statement allows you to specify a new condition to test if the previous if was false. It creates a chain of conditions where only the first true condition will execute, and the rest will be ignored.

C#

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

JavaScript

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

---

### Key Points to Remember

- An if...else if...else chain evaluates conditions **in order**. Once a true condition is found, no further conditions are evaluated.
- The else block is optional but recommended when a default action is needed.
- Always use curly braces {} even for single-line statements. This improves code readability and prevents logical errors.
- Too many nested if...else if chains can make code hard to read. For complex conditions, consider using switch statements or refactoring logic.

---

### Common Pitfalls

- **Missing Braces**: Omitting {} can cause unexpected behavior when adding new lines.
- **Unreachable Code**: Placing code after an else block without careful logic can lead to code that is never executed.
- **Deep Nesting**: Excessive nesting of if...else if structures can make code difficult to maintain.

## Summary

Control flow allows a program to make decisions and execute different sections of code based on conditions. Understanding if, else, and boolean logic is essential for writing dynamic and responsive C# applications.

Future expansions of control flow include:
- switch statements
- for loops
- while loops
- do-while loops

These advanced control structures will allow even more powerful and flexible programming patterns.
