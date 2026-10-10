# Repeating Code with Loops

<hr class="dividerSection" />

## What a Loop Does

<hr class="dividerSection" />

A <span class="emphasis">loop</span> runs the same block of code <span class="secondEmphasis">more than once</span>, instead of the same lines being written out over and over.

Each time a loop runs its code is called an <span class="emphasis">iteration</span>.

Loops use the same kind of <span class="emphasis">conditions</span> as if statements to decide whether to keep running.

C# has several kinds of loops, and this page starts with the <span class="emphasis">for loop</span>.

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/languages/c-family/c-sharp/basics/control-flow/conditions-and-comparisons" target="_blank" rel="noopener noreferrer">
    C# → Basics → Control Flow → Conditions & Comparisons
  </a>
</div>

<hr class="dividerSection" />

## For Loops

<hr class="dividerSection" />

A <span class="emphasis">for loop</span> runs its code a set number of times, using a <span class="secondEmphasis">counter variable</span> and a <span class="secondEmphasis">condition</span>.

```csharp
for (int i = 0; i < 10; i++)
{
    // code to repeat
}
```

The parentheses hold three parts, separated by semicolons:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="codeSnip">int i = 0</span> creates the <span class="emphasis">counter</span> and gives it a starting value, and it runs only once, before the loop starts.</li>
    <li><span class="codeSnip">i &lt; 10</span> is the <span class="emphasis">condition</span>, checked before every iteration, and the loop keeps running while it is true.</li>
    <li><span class="codeSnip">i++</span> increases the counter by 1 after every iteration.</li>
  </ul>
</div>

Like an if statement, the condition goes in parentheses and the code to run goes in curly braces, but a for loop repeats that code instead of running it once.

The counter is usually named <span class="codeSnip">i</span>, which is a common convention for loop counters.

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/languages/c-family/c-sharp/basics/core-concepts/operators" target="_blank" rel="noopener noreferrer">
    C# → Basics → Core Concepts → Operators (Increment and Decrement Operators)
  </a>
</div>

<hr class="dividerExample" />

#### Example: Running Code 10 Times

<hr class="dividerExample" />

```csharp
for (int i = 0; i < 10; i++)
{
    Console.WriteLine("Hello World");
}
```

This prints <span class="codeSnip">Hello World</span> 10 times, once for each iteration.

Changing the condition to <span class="codeSnip">i &lt; 3</span> runs the code only 3 times.

<hr class="dividerSubsection1" />

### The Order a For Loop Runs In

<hr class="dividerSubsection1" />

<div class="centeredNumberedList">
  1. **Create the counter**

  <div class="centeredBullet">
    <ul class="diamondBullets fullWidthBullet">
      <li><span class="codeSnip">int i = 0</span> runs once, so <span class="codeSnip">i</span> starts at 0.</li>
    </ul>
  </div>

  2. **Check the condition**

  <div class="centeredBullet">
    <ul class="diamondBullets fullWidthBullet">
      <li>If <span class="codeSnip">i &lt; 10</span> is true, the loop continues.</li>
      <li>If it is false, the loop ends and the program moves on.</li>
    </ul>
  </div>

  3. **Run the code**

  <div class="centeredBullet">
    <ul class="diamondBullets fullWidthBullet">
      <li>The code inside the curly braces runs once.</li>
    </ul>
  </div>

  4. **Increase the counter**

  <div class="centeredBullet">
    <ul class="diamondBullets fullWidthBullet">
      <li><span class="codeSnip">i++</span> adds 1 to <span class="codeSnip">i</span>, and the loop goes back to step 2.</li>
    </ul>
  </div>
</div>

The code runs while <span class="codeSnip">i</span> is 0 through 9, which is 10 iterations.

When <span class="codeSnip">i</span> reaches 10, the condition <span class="codeSnip">10 &lt; 10</span> is false, so the loop ends.

Setting a breakpoint on the <span class="codeSnip">for</span> line and stepping through it shows each of these steps, along with the value of <span class="codeSnip">i</span> each time.

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/tools-and-testing/tools/visual-studio/advanced/debugging-tools/breakpoints-and-step-debugging" target="_blank" rel="noopener noreferrer">
    Visual Studio → Advanced → Debugging Tools → Breakpoints & Step Debugging
  </a>
</div>

<hr class="dividerSection" />

## Counting with a For Loop

<hr class="dividerSection" />

The counter can be printed inside the loop to count.

<hr class="dividerExample" />

#### Example: Counting from 0 to 9

<hr class="dividerExample" />

```csharp
for (int i = 0; i < 10; i++)
{
    Console.WriteLine(i);
}
```

This produces the output:

```shell
0
1
2
3
4
5
6
7
8
9
```

The loop runs 10 times, but because <span class="codeSnip">i</span> starts at 0, the last number printed is 9.

Starting the counter at <span class="emphasis">0</span> is the standard way to write a for loop.

It matches how <span class="emphasis">arrays</span> are numbered, since the first item in an array is at position 0, which is covered with arrays.

<hr class="dividerExample" />

#### Example: Counting from 1 to 10

<hr class="dividerExample" />

To count from 1 to 10, the counter starts at 1 and the condition must include 10.

```csharp
for (int i = 1; i <= 10; i++)
{
    Console.WriteLine(i);
}
```

Writing <span class="codeSnip">i &lt; 11</span> instead of <span class="codeSnip">i &lt;= 10</span> gives the same result.

The operator is written <span class="codeSnip">&lt;=</span>, with the less than sign first.

Writing it the other way around, as <span class="codeSnip">=&lt;</span>, causes an error.

<hr class="dividerExample" />

#### Example: Counting Down from 10 to 1

<hr class="dividerExample" />

To count down, the counter starts high, the condition checks that it is still above the end value, and <span class="codeSnip">i--</span> decreases it by 1 each time.

```csharp
for (int i = 10; i > 0; i--)
{
    Console.WriteLine(i);
}
```

This produces the output:

```shell
10
9
8
7
6
5
4
3
2
1
```

The loop stops after 1, because when <span class="codeSnip">i</span> reaches 0, the condition <span class="codeSnip">0 &gt; 0</span> is false.

<hr class="dividerSection" />

## Using a Variable for the Count

<hr class="dividerSection" />

The condition can use a <span class="emphasis">variable</span> instead of a fixed number, so the number of iterations can change while the program runs.

```csharp
Random random = new Random();

int amount = random.Next(0, 11);

for (int i = 0; i < amount; i++)
{
    Console.WriteLine(i);
}

Console.WriteLine($"Your loop just ran {amount} times");
```

If <span class="codeSnip">amount</span> is 3, this produces the output:

```shell
0
1
2
Your loop just ran 3 times
```

Because <span class="codeSnip">amount</span> is declared <span class="secondEmphasis">outside</span> the loop, it can still be used after the loop ends.

Printing <span class="codeSnip">amount</span> inside the loop instead of <span class="codeSnip">i</span> is an easy mistake, and it prints the same number on every line instead of counting.

<div class="xrefBox">
  <span class="emphasis">See:</span><br />
  <a href="/languages/c-family/c-sharp/basics/fundamentals/variables-and-data-types" target="_blank" rel="noopener noreferrer">
    C# → Basics → Fundamentals → Variables and Data Types (Generating a Random Number)
  </a><br />
  <a href="/languages/c-family/c-sharp/basics/fundamentals/syntax-and-structure" target="_blank" rel="noopener noreferrer">
    C# → Basics → Fundamentals → Syntax & Structure (String Interpolation)
  </a>
</div>

<hr class="dividerSection" />

## Skipping and Stopping a Loop

<hr class="dividerSection" />

Two keywords change how a loop runs from inside it.

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="codeSnip">continue</span> <span class="emphasis">skips</span> the rest of the current iteration and moves on to the next one.</li>
    <li><span class="codeSnip">break</span> <span class="emphasis">stops</span> the loop completely, and the program moves on to the code after it.</li>
  </ul>
</div>

Both work in every kind of loop, not just for loops.

<hr class="dividerExample" />

#### Example: Skipping a Number with continue

<hr class="dividerExample" />

```csharp
for (int i = 0; i < 10; i++)
{
    if (i == 5)
    {
        continue;
    }

    Console.WriteLine(i);
}
```

This produces the output:

```shell
0
1
2
3
4
6
7
8
9
```

When <span class="codeSnip">i</span> is 5, <span class="codeSnip">continue</span> skips the <span class="codeSnip">WriteLine</span>, so 5 is never printed, and the loop carries on with 6.

<hr class="dividerExample" />

#### Example: Stopping Early with break

<hr class="dividerExample" />

```csharp
for (int i = 0; i < 10; i++)
{
    if (i == 5)
    {
        break;
    }

    Console.WriteLine(i);
}
```

This produces the output:

```shell
0
1
2
3
4
```

When <span class="codeSnip">i</span> is 5, <span class="codeSnip">break</span> ends the loop, so nothing from 5 onward is printed.

The check comes before the <span class="codeSnip">WriteLine</span>, so it runs before the number would be printed.

<span class="codeSnip">break</span> is the same keyword that ends a case in a switch statement.

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/languages/c-family/c-sharp/basics/control-flow/switch-statements" target="_blank" rel="noopener noreferrer">
    C# → Basics → Control Flow → Switch Statements (Why Every Case Needs a Break)
  </a>
</div>

<hr class="dividerSection" />

## Example Program: Combat Simulator

<hr class="dividerSection" />

(Combat Simulator challenge goes here once the screenshots are in.)

<hr class="dividerSection" />

## Key Points to Remember

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>A <span class="emphasis">for loop</span> has three parts: the <span class="secondEmphasis">counter</span>, the <span class="secondEmphasis">condition</span>, and the <span class="secondEmphasis">increase</span>.</li>
    <li>The condition is checked <span class="emphasis">before</span> every iteration, and the loop ends as soon as it is false.</li>
    <li>Starting the counter at <span class="emphasis">0</span> is the standard, and <span class="codeSnip">i &lt; 10</span> then runs 10 times.</li>
    <li><span class="codeSnip">i--</span> counts down, and the condition must check the lower limit.</li>
    <li><span class="codeSnip">continue</span> skips one iteration, while <span class="codeSnip">break</span> stops the loop completely.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Summary

<hr class="dividerSection" />

Loops repeat code without writing it out again, and a for loop repeats it a set number of times.

The counter, the condition, and the increase together decide how many times the loop runs and what values the counter takes along the way.

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/languages/c-family/c-sharp/basics/control-flow/switch-statements">← Back</a>
    <div class="xrefTitle">C# - Basics - Control Flow - Switch Statements</div>
  </div>
</div>