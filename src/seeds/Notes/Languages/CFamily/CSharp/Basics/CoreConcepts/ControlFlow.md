# What Control Flow Does

<hr class="dividerSection" />

## Why Programs Need Control Flow

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

## Combining Conditions in One If Statement

<hr class="dividerSection" />

A condition can test more than one thing at once.

The <span class="codeSnip">&amp;&amp;</span> operator means and, so the combined condition is true only when both sides are true.

This makes it possible to check that a value falls inside a range.

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/languages/c-family/c-sharp/basics/core-concepts/operators" target="_blank" rel="noopener noreferrer">
    C# → Basics → Core Concepts → Operators (Logical Operators)
  </a>
</div>

<hr class="dividerExample" />

#### Example: Overlapping Conditions

<hr class="dividerExample" />

A warning system should print one message that matches the player's health.

```csharp
int health = 100;

if (health == 100)
{
    Console.WriteLine("You have full health!");
}

if (health >= 75)
{
    Console.WriteLine("You are almost at full health");
}
```

With a health of 100, this prints both messages:

```shell
You have full health!
You are almost at full health
```

100 is equal to 100 and also greater than or equal to 75, so both conditions are true and both blocks run.

<hr class="dividerExample" />

#### Example: Fixing It with a Range

<hr class="dividerExample" />

Adding a second condition with <span class="codeSnip">&amp;&amp;</span> limits the second block to health from 75 to 99.

```csharp
if (health == 100)
{
    Console.WriteLine("You have full health!");
}

if (health >= 75 && health <= 99)
{
    Console.WriteLine("You are almost at full health");
}
```

The second condition is true only when health is 75 or more and 99 or less.

A health of 100 fails the <span class="codeSnip">health &lt;= 99</span> test, so only the first message prints.

A health of 90 passes both tests, so only the second message prints.

Any number of conditions can be combined this way.

<hr class="dividerExample" />

#### Example: Health Warning System

<hr class="dividerExample" />

This program deals damage to the player and then reports the health range.

```csharp
int health = 100;

Console.WriteLine("Enter amount of damage to deal");

int damage = int.Parse(Console.ReadLine());

Console.Clear();

Console.WriteLine("Original Health: {0}", health);

Console.WriteLine("We are dealing: {0} damage", damage);

//health = health - damage;

health -= damage;

Console.WriteLine("we have {0} health left", health);

//WARNING SYSTEM
Console.WriteLine("****WARNING SYSTEM****");

if (health == 100)
{
    Console.WriteLine("You have full health!");
}

if (health >= 75 && health <= 99)
{
    Console.WriteLine("You are almost at full health");
}

if (health >= 50 && health <= 74)
{
    Console.WriteLine("You are at medium health");
}

if (health >= 25 && health <= 49)
{
    Console.WriteLine("Your health is low");
}

if (health >= 1 && health <= 24)
{
    Console.WriteLine("Your health is critical");
}

if (health <= 0)
{
    Console.WriteLine("You are dead");
}

Console.ReadLine();
```

<span class="codeSnip">Console.Clear()</span> runs after the damage is read, so the console shows only the lines printed after it.

The commented line and the line below it do the same thing, since each subtracts the damage from the health.

The shorthand also works with the other math operators, such as multiplication and addition.

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/languages/c-family/c-sharp/basics/core-concepts/operators" target="_blank" rel="noopener noreferrer">
    C# → Basics → Core Concepts → Operators (Compound Assignment Operators)
  </a>
</div>

With a damage of 10, the console shows:

```shell
Original Health: 100
We are dealing: 10 damage
we have 90 health left
****WARNING SYSTEM****
You are almost at full health
```

The warning printed depends on the damage entered:

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Damage Entered</th>
      <th class="tableCellHeader">Message Printed</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">0</span></td>
      <td class="tableCell">You have full health!</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">10</span></td>
      <td class="tableCell">You are almost at full health</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">50</span></td>
      <td class="tableCell">You are at medium health</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">75</span></td>
      <td class="tableCell">Your health is low</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">95</span></td>
      <td class="tableCell">Your health is critical</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">100</span></td>
      <td class="tableCell">You are dead</td>
    </tr>
  </tbody>
</table>

Each range has a lower and an upper limit, so the ranges do not overlap and only one message prints.

<hr class="dividerSection" />

## Checking Whether Either Condition Is True

<hr class="dividerSection" />

The <span class="codeSnip">||</span> operator means <span class="emphasis">or</span>, so the combined condition is true when <span class="emphasis">at least one</span> side is true.

With <span class="codeSnip">&amp;&amp;</span>, <span class="emphasis">every</span> condition must be true for the block to run.

With <span class="codeSnip">||</span>, only <span class="secondEmphasis">one</span> of the conditions needs to be true.

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/languages/c-family/c-sharp/basics/core-concepts/operators" target="_blank" rel="noopener noreferrer">
    C# → Basics → Core Concepts → Operators (Logical Operators)
  </a>
</div>

<hr class="dividerExample" />

#### Example: Keys and Doors

<hr class="dividerExample" />

A player can hold a <span class="emphasis">red</span>, <span class="emphasis">blue</span>, and <span class="emphasis">green</span> key, and each door checks for the keys it needs.

```csharp
bool redKey = false;
bool blueKey = true;
bool greenKey = false;

if (redKey)
{
    Console.WriteLine("You can enter the red door!");
}

if (blueKey)
{
    Console.WriteLine("You can enter the blue door!");
}

if (greenKey)
{
    Console.WriteLine("You can enter the green door!");
}

if (blueKey && redKey && greenKey)
{
    Console.WriteLine("You can enter the rainbow door!");
}

if (redKey || blueKey || greenKey)
{
    Console.WriteLine("You can enter the universal door!");
}
```

With only the blue key, this produces the output:

```shell
You can enter the blue door!
You can enter the universal door!
```

The <span class="emphasis">rainbow door</span> uses <span class="codeSnip">&amp;&amp;</span>, so it needs <span class="secondEmphasis">all three</span> keys, and even two out of three is not enough.

The <span class="emphasis">universal door</span> uses <span class="codeSnip">||</span>, so <span class="secondEmphasis">any one</span> key opens it.

Each door uses its own <span class="emphasis">if statement</span>, because every door needs to be checked, not just the first one that matches.

The doors that open depend on the keys held:

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Keys Held</th>
      <th class="tableCellHeader">Doors Opened</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">None</td>
      <td class="tableCell">None, nothing is printed</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Blue</td>
      <td class="tableCell">Blue, Universal</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Blue and Green</td>
      <td class="tableCell">Blue, Green, Universal</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Red, Blue, and Green</td>
      <td class="tableCell">Red, Blue, Green, Rainbow, Universal</td>
    </tr>
  </tbody>
</table>

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

The health warning system can be written as an else if chain.

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

## Generating a Random Number

<hr class="dividerSection" />

A program can generate a <span class="emphasis">random number</span> using the <span class="codeSnip">Random</span> class.

```csharp
Random random = new Random();

int number = random.Next(1, 11);

Console.WriteLine(number);
```

The first line creates a <span class="emphasis">Random object</span> named <span class="codeSnip">random</span>, which is used to generate the numbers.

The name <span class="codeSnip">random</span> is just an <span class="secondEmphasis">identifier</span>, so any valid variable name works, and the example below uses <span class="codeSnip">rnd</span>.

How objects are created with <span class="codeSnip">new</span> is covered with classes and objects, so for now this line can be used as is.

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/languages/c-family/c-sharp/basics/core-concepts/oop" target="_blank" rel="noopener noreferrer">
    C# → Basics → Core Concepts → OOP in C#
  </a>
</div>

The <span class="codeSnip">Next</span> method takes a <span class="emphasis">minimum value</span> and a <span class="emphasis">maximum value</span>.

The minimum value is <span class="secondEmphasis">inclusive</span>, so it can be generated.

The maximum value is <span class="secondEmphasis">exclusive</span>, so it is never generated.

To generate a number from 1 to 10, the maximum must be <span class="codeSnip">11</span>.

Each run prints a different number, for example 1 the first time, then 9, then 6.

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

Checking for even numbers is normally done with the <span class="emphasis">modulus operator</span> <span class="codeSnip">%</span>.

This program avoids it on purpose and checks each possible value with <span class="codeSnip">||</span> instead, to practice combining conditions.

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/languages/c-family/c-sharp/basics/core-concepts/operators" target="_blank" rel="noopener noreferrer">
    C# → Basics → Core Concepts → Operators
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

Without them, <span class="codeSnip">&amp;&amp;</span> is evaluated before <span class="codeSnip">||</span>, and the condition would not check what was intended.

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
    <li><span class="codeSnip">&amp;&amp;</span> requires <span class="emphasis">every</span> condition to be true, while <span class="codeSnip">||</span> requires <span class="secondEmphasis">at least one</span>.</li>
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