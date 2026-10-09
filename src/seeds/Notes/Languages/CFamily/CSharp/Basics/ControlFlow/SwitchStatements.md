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
    default:
        Console.WriteLine("Unknown animal");
        break;
}
```

This produces the same output:

```shell
The chicken says cluck!
```

Instead of writing <span class="codeSnip">animal == "Duck"</span>, each case lists only the <span class="emphasis">value</span>, such as <span class="codeSnip">"Duck"</span>.

<hr class="dividerSection" />

## Why Every Case Needs a Break

<hr class="dividerSection" />

Without a <span class="codeSnip">break</span>, the program would continue into the <span class="emphasis">next case</span> and run its code too, which is called <span class="secondEmphasis">fall-through</span>.

C# does not allow fall-through from a case that contains code, so a missing <span class="codeSnip">break</span> causes an error.

Visual Studio reports it as <span class="codeSnip">Control cannot fall through from one case label to another</span>.

This rule prevents the mistake of one case accidentally running the code of the case below it.

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

A switch can also perform better when there are many cases.

An else if chain checks each condition <span class="emphasis">in order</span>, so a match near the bottom has to wait for every check above it.

With many cases, the compiler can build a <span class="emphasis">lookup</span>, such as a <span class="secondEmphasis">hash table</span> for strings, so the program jumps straight to the matching case.

Stepping through both versions in the debugger shows this, because the else if chain stops on each condition while the switch jumps directly to the matching case.

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

(Character Creator challenge goes here once the screenshots are in.)

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