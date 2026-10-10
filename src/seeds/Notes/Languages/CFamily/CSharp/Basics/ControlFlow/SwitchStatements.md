# Choosing Between Many Values with Switch

<hr class="dividerSection" />

## What a Switch Statement Does

<hr class="dividerSection" />

A <span class="emphasis">switch statement</span> compares <span class="secondEmphasis">one variable</span> against a list of possible values and runs the code for the value that matches.

It is another form of control flow, and it can replace an <span class="emphasis">else if chain</span> that checks the same variable over and over.

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/languages/c-family/c-sharp/basics/control-flow/if-statements" target="_blank" rel="noopener noreferrer">
    C# → Basics → Control Flow → If Statements (Else and Else If Statements)
  </a>
</div>

<hr class="dividerExample" />

#### Example: Animal Sounds with If Statements

<hr class="dividerExample" />

This program prints the sound an animal makes, using an else if chain.

```csharp
string animal = "Chicken";

if (animal == "Duck")
{
    Console.WriteLine("The duck says quack!");
}
else if (animal == "Cow")
{
    Console.WriteLine("The cow says moo!");
}
else if (animal == "Chicken")
{
    Console.WriteLine("The chicken says cluck!");
}
else if (animal == "Dog")
{
    Console.WriteLine("The dog says woof!");
}
else if (animal == "Horse")
{
    Console.WriteLine("The horse says neigh!");
}
```

This produces the output:

```shell
The chicken says cluck!
```

Every condition checks the same variable, <span class="codeSnip">animal</span>, against a different value.

<hr class="dividerSection" />

## Writing a Switch

<hr class="dividerSection" />

A switch has this structure:

```csharp
switch (variable)
{
    case value:
        // code to run
        break;
    default:
        // code to run when no case matches
        break;
}
```

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>The <span class="emphasis">variable</span> to examine goes inside the parentheses after <span class="codeSnip">switch</span>.</li>
    <li>Each <span class="emphasis">case</span> lists one value the variable might hold, followed by a <span class="secondEmphasis">colon</span> and the code to run.</li>
    <li><span class="codeSnip">break</span> ends the case, so the program skips the rest of the switch.</li>
    <li>The <span class="emphasis">default</span> case runs when no other case matches, the same way a final <span class="secondEmphasis">else</span> does.</li>
    <li>The default case is <span class="emphasis">optional</span>, and without it nothing runs when no case matches.</li>
  </ul>
</div>

<hr class="dividerExample" />

#### Example: Animal Sounds with a Switch

<hr class="dividerExample" />

The same program written as a switch:

```csharp
string animal = "Chicken";

switch (animal)
{
    case "Duck":
        Console.WriteLine("The duck says quack!");
        break;
    case "Cow":
        Console.WriteLine("The cow says moo!");
        break;
    case "Chicken":
        Console.WriteLine("The chicken says cluck!");
        break;
    case "Dog":
        Console.WriteLine("The dog says woof!");
        break;
    case "Horse":
        Console.WriteLine("The horse says neigh!");
        break;
}
```

This produces the same output:

```shell
The chicken says cluck!
```

Instead of writing <span class="codeSnip">animal == "Duck"</span>, each case lists only the <span class="emphasis">value</span>, such as <span class="codeSnip">"Duck"</span>.

This switch has no default case, so if <span class="codeSnip">animal</span> held a value that matches no case, such as <span class="codeSnip">"Cat"</span>, nothing would be printed.

<hr class="dividerSection" />

## Why Every Case Needs a Break

<hr class="dividerSection" />

Without a <span class="codeSnip">break</span>, the program would continue into the <span class="emphasis">next case</span> and run its code too, which is called <span class="secondEmphasis">fall-through</span>.

C# does not allow fall-through from a case that contains code, so a missing <span class="codeSnip">break</span> causes an error.

This rule prevents the mistake of one case accidentally running the code of the case below it.

<hr class="dividerExample" />

#### Example: A Missing Break

<hr class="dividerExample" />

This switch is missing the <span class="codeSnip">break</span> after the duck case.

```csharp
switch (animal)
{
    case "Duck":
        Console.WriteLine("The duck says quack!");
    default:
        break;
}
```

The code does not compile, and the <span class="emphasis">Error List</span> shows:

```shell
CS0163 Control cannot fall through from one case label ('case "Duck":') to another
```

Adding <span class="codeSnip">break</span> at the end of the duck case fixes the error.

```csharp
switch (animal)
{
    case "Duck":
        Console.WriteLine("The duck says quack!");
        break;
    default:
        break;
}
```

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/tools-and-testing/tools/visual-studio/basics/editor-features/error-list" target="_blank" rel="noopener noreferrer">
    Visual Studio → Basics → Editor Features → Error List & Error Indicators
  </a>
</div>

<hr class="dividerExample" />

#### Example: Switch Fall-Through in C# vs JavaScript

<hr class="dividerExample" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>In <span class="emphasis">C#</span>, a missing <span class="codeSnip">break</span> is an <span class="secondEmphasis">error</span>, so the program does not compile.</li>
    <li>In <span class="emphasis">JavaScript</span>, a missing <span class="codeSnip">break</span> is allowed, and the program silently runs the next case as well.</li>
  </ul>
</div>

```js
let animal = "Duck";

switch (animal) {
    case "Duck":
        console.log("The duck says quack!");
    case "Cow":
        console.log("The cow says moo!");
        break;
}
```

In JavaScript, this prints both messages, because the duck case has no <span class="codeSnip">break</span>.

<hr class="dividerSection" />

## Choosing Between a Switch and If Statements

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>A <span class="emphasis">switch</span> is the better choice when <span class="secondEmphasis">one variable</span> is checked against many possible values, because it is cleaner and easier to read.</li>
    <li><span class="emphasis">If statements</span> are the better choice when the conditions involve <span class="secondEmphasis">more than one variable</span>, ranges, or combined conditions with <span class="codeSnip">&amp;&amp;</span> and <span class="codeSnip">||</span>.</li>
  </ul>
</div>

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/languages/c-family/c-sharp/basics/control-flow/conditions-and-comparisons" target="_blank" rel="noopener noreferrer">
    C# → Basics → Control Flow → Conditions & Comparisons
  </a>
</div>

An else if chain checks each condition <span class="emphasis">in order</span>, so a match near the bottom has to wait for every check above it.

In the else if version, Duck and Cow are checked before Chicken is reached, and a match on the last value, Horse, would have to wait for all four checks above it.

Stepping through the switch in the debugger, the program moves straight from the <span class="codeSnip">switch</span> line to the matching case, without stopping on the cases above it.

Behind the scenes, the compiler decides how to find the matching case.

With many cases, it can build a <span class="emphasis">lookup</span>, such as a <span class="secondEmphasis">hash table</span> for strings, so the match is found without checking every case in order.

The difference is too small to notice in a small program, so readability is usually what decides between the two.

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/tools-and-testing/tools/visual-studio/advanced/debugging-tools/breakpoints-and-step-debugging" target="_blank" rel="noopener noreferrer">
    Visual Studio → Advanced → Debugging Tools → Breakpoints & Step Debugging
  </a>
</div>

<hr class="dividerSection" />

## Example Program: Character Creator

<hr class="dividerSection" />

This program builds a character by asking the user to pick a <span class="emphasis">faction</span>, <span class="emphasis">race</span>, <span class="emphasis">class</span>, and <span class="emphasis">gender</span> from numbered menus, then prints every choice at the end.

Each choice uses a <span class="emphasis">switch</span> to turn the number the user types into the matching text.

<hr class="dividerSubsection1" />

### Setting Up the Variables

<hr class="dividerSubsection1" />

Each choice is stored in its own string variable.

```csharp
string faction = string.Empty;
string race = string.Empty;
string cls = string.Empty;
string gender = string.Empty;
```

<span class="codeSnip">string.Empty</span> is an <span class="emphasis">empty string</span>, the same as <span class="codeSnip">""</span>.

The variables start empty because a switch with no default case might not assign them, and using a variable that was never assigned causes an error.

The class variable is named <span class="codeSnip">cls</span>, because <span class="codeSnip">class</span> is a <span class="secondEmphasis">keyword</span> and cannot be used as a name.

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/languages/c-family/c-sharp/basics/fundamentals/variables-and-data-types" target="_blank" rel="noopener noreferrer">
    C# → Basics → Fundamentals → Variables and Data Types (Declaring a Variable, Naming Variables)
  </a>
</div>

<hr class="dividerSubsection1" />

### Switching on a Number

<hr class="dividerSubsection1" />

Each menu prints numbered options, reads the user's choice, and converts it to an int.

```csharp
Console.WriteLine("Pick your faction");

Console.WriteLine("1. Horde\n2. Alliance");

int input = int.Parse(Console.ReadLine());

switch (input)
{
    case 1:
        faction = "Horde";
        break;
    case 2:
        faction = "Alliance";
        break;
}
```

A switch works on <span class="emphasis">numbers</span> as well as strings, so each case lists a number without quotation marks.

The <span class="codeSnip">\n</span> in the menu puts each option on its own line.

<span class="codeSnip">input</span> is declared once with <span class="codeSnip">int</span>, and the later menus reuse it by assigning a new value without <span class="codeSnip">int</span> in front.

Declaring it a second time with the same name in the same scope causes an error.

<div class="xrefBox">
  <span class="emphasis">See:</span><br />
  <a href="/languages/c-family/c-sharp/basics/fundamentals/variables-and-data-types" target="_blank" rel="noopener noreferrer">
    C# → Basics → Fundamentals → Variables and Data Types (Converting Input to Numbers)
  </a><br />
  <a href="/languages/c-family/c-sharp/basics/fundamentals/syntax-and-structure" target="_blank" rel="noopener noreferrer">
    C# → Basics → Fundamentals → Syntax & Structure (Line Breaks with the \n Escape Character)
  </a>
</div>

<hr class="dividerSubsection1" />

### The Full Program

<hr class="dividerSubsection1" />

```csharp
string faction = string.Empty;
string race = string.Empty;
string cls = string.Empty;
string gender = string.Empty;

Console.WriteLine("Pick your faction");

Console.WriteLine("1. Horde\n2. Alliance");

int input = int.Parse(Console.ReadLine());

switch (input)
{
    case 1:
        faction = "Horde";
        break;
    case 2:
        faction = "Alliance";
        break;
}
Console.Clear();
Console.WriteLine("Pick your race");

Console.WriteLine("1. Troll\n2. Human\n3. Orc\n4. Elf\n5. Gnome");

input = int.Parse(Console.ReadLine());

switch (input)
{
    case 1:
        race = "Troll";
        break;
    case 2:
        race = "Human";
        break;
    case 3:
        race = "Orc";
        break;
    case 4:
        race = "Elf";
        break;
    case 5:
        race = "Gnome";
        break;
}
Console.Clear();
Console.WriteLine("Pick your class");

Console.WriteLine("1. Hunter\n2. Warrior\n3. Rogue\n4. Paladin\n5. Monk");

input = int.Parse(Console.ReadLine());

switch (input)
{
    case 1:
        cls = "Hunter";
        break;
    case 2:
        cls = "Warrior";
        break;
    case 3:
        cls = "Rogue";
        break;
    case 4:
        cls = "Paladin";
        break;
    case 5:
        cls = "Monk";
        break;
}
Console.Clear();
Console.WriteLine("Pick your gender");

Console.WriteLine("1. Male\n2. Female");

input = int.Parse(Console.ReadLine());

switch (input)
{
    case 1:
        gender = "Male";
        break;
    case 2:
        gender = "Female";
        break;
}
Console.Clear();

Console.WriteLine($"You have successfully created your character. " +
    $"\nYour faction is {faction}" +
    $"\nYour race is {race}" +
    $"\nYour class is {cls}" +
    $"\nYour gender is {gender}");

Console.ReadLine();
```

<span class="codeSnip">Console.Clear()</span> runs after each choice is made, so only one menu is on screen at a time and the result appears on a clean console.

The final message uses <span class="emphasis">string interpolation</span>, with each variable written inside curly braces.

The message is split across several lines to keep it readable, so each piece is its own interpolated string with its own <span class="codeSnip">$</span>, and the pieces are joined with <span class="codeSnip">+</span>.

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/languages/c-family/c-sharp/basics/fundamentals/syntax-and-structure" target="_blank" rel="noopener noreferrer">
    C# → Basics → Fundamentals → Syntax & Structure (String Interpolation)
  </a>
</div>

Picking Alliance, Human, Warrior, and Female prints:

```shell
You have successfully created your character.
Your faction is Alliance
Your race is Human
Your class is Warrior
Your gender is Female
```

None of the switches have a default case, so typing a number that is not on the menu leaves that choice empty.

Typing a letter instead of a number stops the program, because <span class="codeSnip">int.Parse</span> cannot convert it.

<hr class="dividerExample" />

#### Example: Assigning the Wrong Variable

<hr class="dividerExample" />

Copying one switch to build the next is quick, but every variable name inside it must be changed too.

In this race switch, only the first case was changed to <span class="codeSnip">race</span>, and the rest still assign <span class="codeSnip">faction</span>.

```csharp
switch (input)
{
    case 1:
        race = "Troll";
        break;
    case 2:
        faction = "Human";
        break;
    case 3:
        faction = "Orc";
        break;
    case 4:
        faction = "Elf";
        break;
    case 5:
        faction = "Gnome";
        break;
}
```

The code still compiles, because assigning <span class="codeSnip">faction</span> is valid, so the mistake only shows up in the output.

If the class and gender switches have the same mistake, every choice overwrites <span class="codeSnip">faction</span>, and picking Alliance, Human, Rogue, and Female prints:

```shell
You have successfully created your character.
Your faction is Female
Your race is
Your class is
Your gender is
```

Each switch must assign the variable for its own menu: <span class="codeSnip">faction</span>, <span class="codeSnip">race</span>, <span class="codeSnip">cls</span>, and <span class="codeSnip">gender</span>.

<hr class="dividerSection" />

## Key Points to Remember

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>A <span class="emphasis">switch</span> checks <span class="secondEmphasis">one variable</span> against a list of values.</li>
    <li>Each <span class="emphasis">case</span> lists a value, a colon, the code to run, and a <span class="codeSnip">break</span>.</li>
    <li>The <span class="emphasis">default</span> case works like a final else and is optional.</li>
    <li>C# does not allow <span class="emphasis">fall-through</span>, so a case with code must end with <span class="codeSnip">break</span>.</li>
    <li>Use a switch for <span class="emphasis">one variable</span> with many values, and if statements for <span class="secondEmphasis">ranges or several variables</span>.</li>
    <li>A switch works on <span class="emphasis">numbers</span> as well as strings, and number cases are written without quotation marks.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Summary

<hr class="dividerSection" />

A switch statement offers a cleaner way to choose between many possible values of a single variable.

It works alongside if statements, with each suited to a different kind of decision.

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/languages/c-family/c-sharp/basics/control-flow/if-statements">← Back</a>
    <div class="xrefTitle">C# - Basics - Control Flow - If Statements</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/languages/c-family/c-sharp/basics/control-flow/loops">Next →</a>
    <div class="xrefTitle">C# - Basics - Control Flow - Loops</div>
  </div>
</div>