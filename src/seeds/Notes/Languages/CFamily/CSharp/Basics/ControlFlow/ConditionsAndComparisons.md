# How Programs Decide What Is True

<hr class="dividerSection" />

## Why Programs Need Control Flow

<hr class="dividerSection" />

Control flow in programming refers to the order in which individual instructions, statements, or function calls are executed or evaluated.

In C#, control flow is determined through conditional statements and loops, allowing programs to make decisions and repeat actions.

Understanding control flow is essential for writing programs that can react to different inputs and conditions.

For example, in a game an enemy should only attack the player when it is close enough to hit.

Control flow lets the attack code run only under that condition.

Without it, the enemy would attack constantly, no matter how close it is.

Every one of these decisions starts with a <span class="emphasis">condition</span>, an expression that is either <span class="secondEmphasis">true</span> or <span class="secondEmphasis">false</span>.

<hr class="dividerSection" />

## Boolean Expressions

<hr class="dividerSection" />

A <span class="emphasis">boolean expression</span> is an expression that evaluates to either <span class="codeSnip">true</span> or <span class="codeSnip">false</span>.

It is used to control if statements and loops.

The simplest condition is a <span class="codeSnip">bool</span> variable on its own.

```csharp
bool isReady = true;
bool isPaused = false;
```

<div class="xrefBox">
  <span class="emphasis">See:</span><br />
  <a href="/languages/c-family/c-sharp/basics/fundamentals/variables-and-data-types" target="_blank" rel="noopener noreferrer">
    C# → Basics → Fundamentals → Variables and Data Types (Common Data Types)
  </a><br />
  <a href="/languages/c-family/c-sharp/basics/core-concepts/operators" target="_blank" rel="noopener noreferrer">
    C# → Basics → Core Concepts → Operators (Comparison Operators, Logical Operators)
  </a>
</div>

The examples on this page use <span class="emphasis">if statements</span>, which run the code inside their curly braces only when the condition is <span class="secondEmphasis">true</span>.

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/languages/c-family/c-sharp/basics/control-flow/if-statements" target="_blank" rel="noopener noreferrer">
    C# → Basics → Control Flow → If Statements
  </a>
</div>

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

The comparison operators, such as <span class="codeSnip">&gt;</span>, <span class="codeSnip">&gt;=</span>, <span class="codeSnip">&lt;</span>, and <span class="codeSnip">&lt;=</span>, all work on numbers.

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

The same warning system can also be written as an <span class="emphasis">else if chain</span>.

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/languages/c-family/c-sharp/basics/control-flow/if-statements" target="_blank" rel="noopener noreferrer">
    C# → Basics → Control Flow → If Statements (Else If Chain for the Warning System)
  </a>
</div>

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

## Grouping Conditions with Parentheses

<hr class="dividerSection" />

When <span class="codeSnip">&amp;&amp;</span> and <span class="codeSnip">||</span> appear in the same condition, <span class="codeSnip">&amp;&amp;</span> is evaluated <span class="emphasis">first</span>, the same way multiplication happens before addition in math.

<span class="emphasis">Parentheses</span> group part of a condition so it is evaluated as <span class="secondEmphasis">one condition</span> before the rest.

```csharp
bool hasKey = true;
bool hasPass = false;
bool isOpen = false;

bool canEnter = (hasKey || hasPass) && isOpen;
```

With the parentheses, <span class="codeSnip">canEnter</span> is <span class="codeSnip">false</span>, because the door is not open.

Without them, the same condition is read as <span class="codeSnip">hasKey || (hasPass &amp;&amp; isOpen)</span>.

```csharp
bool canEnter = hasKey || hasPass && isOpen;
```

This version is <span class="codeSnip">true</span>, because <span class="codeSnip">hasKey</span> alone is enough, even though the door is closed.

Adding parentheses whenever <span class="codeSnip">&amp;&amp;</span> and <span class="codeSnip">||</span> are mixed makes the intended order clear and avoids this mistake.

<hr class="dividerSection" />

## Key Points to Remember

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>A <span class="emphasis">condition</span> is any expression that evaluates to <span class="codeSnip">true</span> or <span class="codeSnip">false</span>.</li>
    <li><span class="codeSnip">==</span> <span class="emphasis">compares</span> two values, while a single <span class="codeSnip">=</span> <span class="secondEmphasis">assigns</span> a value.</li>
    <li>String comparisons are <span class="emphasis">case-sensitive</span>.</li>
    <li><span class="codeSnip">==</span> and <span class="codeSnip">!=</span> match only <span class="emphasis">one exact value</span>, so ranges need <span class="codeSnip">&gt;</span>, <span class="codeSnip">&gt;=</span>, <span class="codeSnip">&lt;</span>, or <span class="codeSnip">&lt;=</span>.</li>
    <li><span class="codeSnip">&amp;&amp;</span> requires <span class="emphasis">every</span> condition to be true, while <span class="codeSnip">||</span> requires <span class="secondEmphasis">at least one</span>.</li>
    <li>When <span class="codeSnip">&amp;&amp;</span> and <span class="codeSnip">||</span> are mixed, <span class="codeSnip">&amp;&amp;</span> is evaluated first, so <span class="emphasis">parentheses</span> are used to group conditions.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Summary

<hr class="dividerSection" />

Conditions are the true or false expressions that every control flow decision is built on.

Comparison operators check values against each other, and <span class="codeSnip">&amp;&amp;</span> and <span class="codeSnip">||</span> combine several checks into one condition.

The next page uses these conditions to make decisions with if, else, and else if.

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/languages/c-family/c-sharp/basics/core-concepts/operators">← Back</a>
    <div class="xrefTitle">Section: C# - Basics - Core Concepts - Operators</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/languages/c-family/c-sharp/basics/control-flow/if-statements">Next →</a>
    <div class="xrefTitle">C# - Basics - Control Flow - If Statements</div>
  </div>
</div>