# Putting Loops Inside Loops

<hr class="dividerSection" />

## What a Nested Loop Is

<hr class="dividerSection" />

A <span class="emphasis">nested loop</span> is a loop written <span class="secondEmphasis">inside the scope</span> of another loop.

The loop on the outside is the <span class="emphasis">outer loop</span>, and the loop inside it is the <span class="emphasis">inner loop</span>.

The two loops do not have to be the same type, so a while loop can sit inside a for loop, or the other way around.

```csharp
for (int y = 0; y < 10; y++)
{
    for (int x = 0; x < 10; x++)
    {
        // This code will run a total of 100 times
    }
}
```

<div class="xrefBox">
  <span class="emphasis">See:</span><br />
  <a href="/languages/c-family/c-sharp/basics/loops/for-loops" target="_blank" rel="noopener noreferrer">
    C# → Basics → Loops → For Loops
  </a><br />
  <a href="/languages/c-family/c-sharp/basics/loops/while-loops" target="_blank" rel="noopener noreferrer">
    C# → Basics → Loops → While Loops
  </a>
</div>

<hr class="dividerSection" />

## Naming the Counters

<hr class="dividerSection" />

Each loop needs its <span class="emphasis">own counter name</span>.

The inner loop is inside the outer loop's scope, so it can already see the outer counter.

Declaring a second counter with the <span class="secondEmphasis">same name</span> inside it causes an error, because that name is already in use.

Here the outer counter is named <span class="codeSnip">y</span> and the inner counter is named <span class="codeSnip">x</span>, which also matches how grids are usually described.

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/languages/c-family/c-sharp/basics/fundamentals/syntax-and-structure" target="_blank" rel="noopener noreferrer">
    C# → Basics → Fundamentals → Syntax & Structure (Scopes and Curly Braces)
  </a>
</div>

<hr class="dividerSection" />

## How Many Times the Inner Code Runs

<hr class="dividerSection" />

When both loops run 10 times, the code inside the inner loop runs <span class="emphasis">100</span> times, not 20.

The inner loop runs <span class="secondEmphasis">all 10</span> of its iterations every time the outer loop runs once.

<div class="centeredNumberedList">
  1. **The outer loop starts**

  <div class="centeredBullet">
    <ul class="diamondBullets fullWidthBullet">
      <li><span class="codeSnip">y</span> is 0.</li>
    </ul>
  </div>

  2. **The inner loop runs completely**

  <div class="centeredBullet">
    <ul class="diamondBullets fullWidthBullet">
      <li><span class="codeSnip">x</span> goes from 0 to 9, so the inner code runs 10 times.</li>
    </ul>
  </div>

  3. **The outer loop increases**

  <div class="centeredBullet">
    <ul class="diamondBullets fullWidthBullet">
      <li><span class="codeSnip">y</span> becomes 1.</li>
    </ul>
  </div>

  4. **The inner loop starts over**

  <div class="centeredBullet">
    <ul class="diamondBullets fullWidthBullet">
      <li><span class="codeSnip">int x = 0</span> runs again, so <span class="codeSnip">x</span> resets to 0 and the inner code runs 10 more times.</li>
    </ul>
  </div>
</div>

This repeats until <span class="codeSnip">y</span> reaches 10, so the total is 10 × 10, which is <span class="emphasis">100</span>.

Stepping through the loops in the debugger shows <span class="codeSnip">x</span> reset to 0 each time <span class="codeSnip">y</span> increases.

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/tools-and-testing/tools/visual-studio/advanced/debugging-tools/breakpoints-and-step-debugging" target="_blank" rel="noopener noreferrer">
    Visual Studio → Advanced → Debugging Tools → Breakpoints & Step Debugging
  </a>
</div>

<hr class="dividerSection" />

## Why Use Nested Loops

<hr class="dividerSection" />

For a simple message, a nested loop and a single loop can do the same thing.

```csharp
for (int y = 0; y < 10; y++)
{
    for (int x = 0; x < 10; x++)
    {
        // This code will run a total of 100 times
        Console.WriteLine("Hello");
    }
}

for (int i = 0; i < 100; i++)
{
    Console.WriteLine("Hello");
}
```

Both print <span class="codeSnip">Hello</span> 100 times, and the output looks exactly the same.

Nested loops become useful when the work has <span class="emphasis">two directions</span>, like the rows and columns of a <span class="secondEmphasis">grid</span>.

In games, grids are everywhere, such as chess and checkers boards, tile maps, and inventory slots.

Each square on a grid has an <span class="emphasis">x</span> coordinate and a <span class="emphasis">y</span> coordinate.

The <span class="emphasis">x axis</span> runs <span class="secondEmphasis">horizontally</span>, so x counts the columns, and the <span class="emphasis">y axis</span> runs <span class="secondEmphasis">vertically</span>, so y counts the rows.

A chessboard works this way, with every square named by its column and row.

A nested loop visits every square by going through each row and then each column in that row, which is why the counters are named <span class="codeSnip">y</span> and <span class="codeSnip">x</span>.

<hr class="dividerSection" />

## Example Program: Drawing a Game Board

<hr class="dividerSection" />

This program draws a game board in the console, building it up one step at a time.

<hr class="dividerSubsection1" />

### Listing Every Coordinate

<hr class="dividerSubsection1" />

Printing both counters inside the inner loop lists every coordinate on a 10 by 10 grid.

```csharp
for (int y = 0; y < 10; y++)
{
    for (int x = 0; x < 10; x++)
    {
        Console.WriteLine($"x: {x} y: {y}");
    }
}
```

The output begins:

```shell
x: 0 y: 0
x: 1 y: 0
x: 2 y: 0
x: 3 y: 0
x: 4 y: 0
x: 5 y: 0
x: 6 y: 0
x: 7 y: 0
x: 8 y: 0
x: 9 y: 0
x: 0 y: 1
x: 1 y: 1
```

It continues the same way until <span class="codeSnip">x: 9 y: 9</span>, for 100 lines in total.

<span class="codeSnip">x</span> changes on <span class="emphasis">every</span> line, while <span class="codeSnip">y</span> only changes after <span class="codeSnip">x</span> has gone all the way from 0 to 9.

The inner counter always changes <span class="secondEmphasis">fastest</span>, because the inner loop finishes completely before the outer loop moves on.

<hr class="dividerSubsection1" />

### Drawing the Squares

<hr class="dividerSubsection1" />

To draw the board, each square is printed with <span class="codeSnip">Console.Write</span> instead of <span class="codeSnip">Console.WriteLine</span>.

<span class="codeSnip">Write</span> prints text <span class="emphasis">without</span> moving to a new line, so the squares in a row sit next to each other.

```csharp
for (int y = 0; y < 10; y++)
{
    for (int x = 0; x < 10; x++)
    {
        Console.Write("[ ]");
    }

    Console.WriteLine();
}
```

This produces the output:

```shell
[ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]
[ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]
[ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]
[ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]
[ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]
[ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]
[ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]
[ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]
[ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]
[ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]
```

The inner loop draws one <span class="emphasis">row</span> of 10 squares.

The empty <span class="codeSnip">Console.WriteLine()</span> sits <span class="secondEmphasis">after</span> the inner loop but still inside the outer loop, so it runs once per row and moves the next row onto a new line.

Without it, every square would be printed on the same line, and the console would wrap them wherever it ran out of space.

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/languages/c-family/c-sharp/basics/core-concepts/console" target="_blank" rel="noopener noreferrer">
    C# → Basics → Core Concepts → Console
  </a>
</div>

<hr class="dividerSubsection1" />

### Numbering the Top Row

<hr class="dividerSubsection1" />

An if statement inside the inner loop can print a <span class="emphasis">number</span> instead of an empty square along the top row.

```csharp
for (int y = 0; y < 10; y++)
{
    for (int x = 0; x < 10; x++)
    {
        if (y == 0 && x != 0)
        {
            Console.Write($"[{x}]");
        }
        else
        {
            Console.Write("[ ]");
        }
    }

    Console.WriteLine();
}
```

This produces the output:

```shell
[ ][1][2][3][4][5][6][7][8][9]
[ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]
[ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]
[ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]
[ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]
[ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]
[ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]
[ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]
[ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]
[ ][ ][ ][ ][ ][ ][ ][ ][ ][ ]
```

<span class="codeSnip">y == 0</span> means the square is in the <span class="emphasis">top row</span>, and <span class="codeSnip">x != 0</span> skips the first square, so the numbers run from 1 to 9.

<hr class="dividerSubsection1" />

### Numbering the Left Column

<hr class="dividerSubsection1" />

An <span class="codeSnip">else if</span> adds the same numbering down the left side.

```csharp
if (y == 0 && x != 0)
{
    Console.Write($"[{x}]");
}
else if (x == 0 && y != 0)
{
    Console.Write($"[{y}]");
}
else
{
    Console.Write("[ ]");
}
```

This produces the output:

```shell
[ ][1][2][3][4][5][6][7][8][9]
[1][ ][ ][ ][ ][ ][ ][ ][ ][ ]
[2][ ][ ][ ][ ][ ][ ][ ][ ][ ]
[3][ ][ ][ ][ ][ ][ ][ ][ ][ ]
[4][ ][ ][ ][ ][ ][ ][ ][ ][ ]
[5][ ][ ][ ][ ][ ][ ][ ][ ][ ]
[6][ ][ ][ ][ ][ ][ ][ ][ ][ ]
[7][ ][ ][ ][ ][ ][ ][ ][ ][ ]
[8][ ][ ][ ][ ][ ][ ][ ][ ][ ]
[9][ ][ ][ ][ ][ ][ ][ ][ ][ ]
```

<span class="codeSnip">x == 0</span> means the square is in the <span class="emphasis">left column</span>, and <span class="codeSnip">y != 0</span> skips the top row, which already has its numbers.

The square in the <span class="secondEmphasis">top left corner</span> stays empty, because at 0, 0 neither condition is true, so it falls through to the <span class="codeSnip">else</span>.

The board now has <span class="emphasis">coordinates</span> from 1 to 9 in both directions, so every square can be found by its column number and row number.

<hr class="dividerSubsection1" />

### Placing an X

<hr class="dividerSubsection1" />

The program asks the user for a position, then draws an <span class="emphasis">X</span> on the square that matches it.

```csharp
Console.WriteLine("Please enter the x coordinate to place an X on");
int xPos = int.Parse(Console.ReadLine());

Console.WriteLine("Please enter the y coordinate to place an X on");
int yPos = int.Parse(Console.ReadLine());

for (int y = 0; y < 10; y++)
{
    for (int x = 0; x < 10; x++)
    {
        if (y == 0 && x != 0)
        {
            Console.Write($"[{x}]");
        }
        else if (x == 0 && y != 0)
        {
            Console.Write($"[{y}]");
        }
        else if (x == xPos && y == yPos)
        {
            Console.Write("[X]");
        }
        else
        {
            Console.Write("[ ]");
        }
    }

    Console.WriteLine();
}
```

As the loops draw each square, the new check compares the square being drawn right now with the position the user entered.

When <span class="codeSnip">x</span> matches <span class="codeSnip">xPos</span> and <span class="codeSnip">y</span> matches <span class="codeSnip">yPos</span>, that square is drawn as <span class="codeSnip">[X]</span> instead of an empty square.

Entering 5 for x and 8 for y produces the output:

```shell
Please enter the x coordinate to place an X on
5
Please enter the y coordinate to place an X on
8
[ ][1][2][3][4][5][6][7][8][9]
[1][ ][ ][ ][ ][ ][ ][ ][ ][ ]
[2][ ][ ][ ][ ][ ][ ][ ][ ][ ]
[3][ ][ ][ ][ ][ ][ ][ ][ ][ ]
[4][ ][ ][ ][ ][ ][ ][ ][ ][ ]
[5][ ][ ][ ][ ][ ][ ][ ][ ][ ]
[6][ ][ ][ ][ ][ ][ ][ ][ ][ ]
[7][ ][ ][ ][ ][ ][ ][ ][ ][ ]
[8][ ][ ][ ][ ][X][ ][ ][ ][ ]
[9][ ][ ][ ][ ][ ][ ][ ][ ][ ]
```

The X appears in column 5 of row 8.

The order of the checks matters, because only the <span class="emphasis">first</span> true condition in an else if chain runs.

The number checks come first, so entering 0 for either coordinate never shows an X, because those squares are always drawn as numbers.

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/languages/c-family/c-sharp/basics/control-flow/if-statements" target="_blank" rel="noopener noreferrer">
    C# → Basics → Control Flow → If Statements (Else and Else If Statements)
  </a>
</div>

Arrays make boards like this much more useful, because each square can store what is on it instead of only being drawn.

<hr class="dividerSection" />

## Key Points to Remember

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>A <span class="emphasis">nested loop</span> is a loop inside another loop, and the two can be different types.</li>
    <li>Each loop needs its <span class="emphasis">own counter name</span>, such as <span class="codeSnip">y</span> and <span class="codeSnip">x</span>.</li>
    <li>The inner loop runs <span class="secondEmphasis">completely</span> for every single iteration of the outer loop.</li>
    <li>The total number of runs is the outer count <span class="emphasis">times</span> the inner count, so 10 and 10 gives 100.</li>
    <li>Nested loops are the standard way to work with <span class="emphasis">grids</span>, such as game boards.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Summary

<hr class="dividerSection" />

A nested loop repeats a whole loop over and over, which makes it the natural tool for anything laid out in rows and columns.

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/languages/c-family/c-sharp/basics/loops/while-loops">← Back</a>
    <div class="xrefTitle">C# - Basics - Loops - While Loops</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/languages/c-family/c-sharp/basics/loops/foreach-loops">Next →</a>
    <div class="xrefTitle">C# - Basics - Loops - Foreach Loops</div>
  </div>
</div>