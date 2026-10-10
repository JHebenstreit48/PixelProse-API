# Repeating Code with While Loops

<hr class="dividerSection" />

## How a While Loop Works

<hr class="dividerSection" />

A <span class="emphasis">while loop</span> runs its code <span class="secondEmphasis">as long as a condition is true</span>.

A for loop runs a set number of times, while a while loop keeps going until its condition becomes false, however many iterations that takes.

```csharp
while (condition)
{
    // code to repeat
}
```

The condition can be anything that evaluates to <span class="codeSnip">true</span> or <span class="codeSnip">false</span>, the same as the condition in an if statement.

<div class="xrefBox">
  <span class="emphasis">See:</span><br />
  <a href="/languages/c-family/c-sharp/basics/control-flow/conditions-and-comparisons" target="_blank" rel="noopener noreferrer">
    C# → Basics → Control Flow → Conditions & Comparisons
  </a><br />
  <a href="/languages/c-family/c-sharp/basics/loops/for-loops" target="_blank" rel="noopener noreferrer">
    C# → Basics → Loops → For Loops
  </a>
</div>

<hr class="dividerExample" />

#### Example: An Infinite Loop

<hr class="dividerExample" />

```csharp
bool run = true;

while (run)
{
    Console.WriteLine("We are running!");
}
```

Because <span class="codeSnip">run</span> is always true, this loop never ends, which is called an <span class="emphasis">infinite loop</span>.

The console fills with <span class="codeSnip">We are running!</span> until the program is stopped.

If <span class="codeSnip">run</span> starts as <span class="codeSnip">false</span>, the condition is false from the start, so the code inside the loop never runs at all.

Writing <span class="codeSnip">true</span> directly as the condition does the same thing without a variable.

```csharp
while (true)
{
    Console.WriteLine("Hello!");
}
```

This also runs forever, printing <span class="codeSnip">Hello!</span> over and over.

<hr class="dividerSection" />

## Counting with a While Loop

<hr class="dividerSection" />

A while loop can count by changing a variable inside the loop and using it in the condition.

```csharp
int number = 10;

while (number > 0)
{
    Console.WriteLine(number);
    number--;
}

Console.WriteLine("We are done with the loop!");
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
We are done with the loop!
```

This works like a for loop, but the counter is created <span class="secondEmphasis">before</span> the loop and changed <span class="secondEmphasis">inside</span> it.

If the line that changes the counter is left out, the condition never becomes false, and the loop runs forever.

<hr class="dividerSection" />

## Stopping a While Loop with break

<hr class="dividerSection" />

A loop written as <span class="codeSnip">while (true)</span> never ends on its own, because its condition is always true.

<span class="codeSnip">break</span> can end it from inside, the same way it ends a for loop.

```csharp
int number = 0;

while (true)
{
    number++;

    if (number == 100)
    {
        break;
    }

    Console.WriteLine(number);
}
```

This counts from 1 to <span class="emphasis">99</span>, not 100.

When <span class="codeSnip">number</span> reaches 100, the check runs <span class="secondEmphasis">before</span> the <span class="codeSnip">WriteLine</span>, so the loop ends before 100 is printed.

Moving the <span class="codeSnip">WriteLine</span> above the check prints the number first, so the count includes 100.

```csharp
int number = 0;

while (true)
{
    number++;
    Console.WriteLine(number);

    if (number == 100)
    {
        break;
    }
}
```

This counts from 1 to 100, then <span class="codeSnip">break</span> ends the loop.

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/languages/c-family/c-sharp/basics/loops/for-loops" target="_blank" rel="noopener noreferrer">
    C# → Basics → Loops → For Loops (Skipping and Stopping a Loop)
  </a>
</div>

<hr class="dividerSection" />

## Do-While Loops

<hr class="dividerSection" />

A <span class="emphasis">do-while loop</span> runs its code <span class="secondEmphasis">first</span> and checks the condition <span class="secondEmphasis">after</span>.

This means it always runs <span class="emphasis">at least once</span>, even if the condition is false from the start.

```csharp
bool alive = false;

while (alive)
{
    Console.WriteLine("The player is alive");
}

do
{
    Console.WriteLine("The player is alive");
} while (alive);
```

This produces the output:

```shell
The player is alive
```

The while loop prints nothing, because <span class="codeSnip">alive</span> is false before it starts.

The do-while loop prints the message once, then checks <span class="codeSnip">alive</span>, finds it false, and stops.

A do-while loop ends with a <span class="emphasis">semicolon</span> after the condition, which a while loop does not have.

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Loop</th>
      <th class="tableCellHeader">When the Condition Is Checked</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">while</span></td>
      <td class="tableCell"><span class="emphasis">Before</span> each iteration, so it may run 0 times</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">do-while</span></td>
      <td class="tableCell"><span class="emphasis">After</span> each iteration, so it always runs at least once</td>
    </tr>
  </tbody>
</table>

A do-while loop fits code that must run once and then may need to repeat, such as showing a menu before asking whether to show it again.

<hr class="dividerSection" />

## Example Program: Number Counter

<hr class="dividerSection" />

This program asks for a number to count <span class="emphasis">from</span> and a number to count <span class="emphasis">to</span>, counts up or down between them, and then asks whether to <span class="emphasis">try again</span>.

<hr class="dividerSubsection1" />

### Counting in Either Direction

<hr class="dividerSubsection1" />

```csharp
Console.WriteLine("Enter the number to count from");

int from = int.Parse(Console.ReadLine());

Console.WriteLine("Enter the number to count to");

int to = int.Parse(Console.ReadLine());

Console.WriteLine("Counting");

while (from != to)
{
    Console.WriteLine(from);

    if (from < to)
    {
        from++;
    }
    else
    {
        from--;
    }
}

Console.WriteLine(from);
```

The loop runs as long as <span class="codeSnip">from</span> and <span class="codeSnip">to</span> are <span class="emphasis">not equal</span>.

If <span class="codeSnip">from</span> is smaller, it counts <span class="secondEmphasis">up</span>, and otherwise it counts <span class="secondEmphasis">down</span>.

The loop stops as soon as <span class="codeSnip">from</span> equals <span class="codeSnip">to</span>, before that last number is printed.

The extra <span class="codeSnip">WriteLine</span> after the loop prints that final number, so counting from 1 to 10 includes the 10.

<hr class="dividerSubsection1" />

### Trying Again

<hr class="dividerSubsection1" />

Wrapping the whole program in a <span class="codeSnip">while (true)</span> loop keeps it running until the user chooses to stop.

```csharp
while (true)
{
    Console.WriteLine("Enter the number to count from");

    int from = int.Parse(Console.ReadLine());

    Console.WriteLine("Enter the number to count to");

    int to = int.Parse(Console.ReadLine());

    Console.WriteLine("Counting");

    while (from != to)
    {
        Console.WriteLine(from);

        if (from < to)
        {
            from++;
        }
        else
        {
            from--;
        }
    }

    Console.WriteLine(from);

    Console.WriteLine("Do you want to try again?");

    string answer = Console.ReadLine();

    if (answer.ToLower() == "yes")
    {
        Console.Clear();
    }
    else
    {
        break;
    }
}
```

Typing yes clears the console and starts again, and typing anything else ends the loop with <span class="codeSnip">break</span>, which closes the program.

<span class="codeSnip">ToLower()</span> turns every letter in the answer into lowercase before it is compared, so <span class="codeSnip">yes</span>, <span class="codeSnip">Yes</span>, and <span class="codeSnip">YES</span> all match.

Without it, only the exact lowercase <span class="codeSnip">yes</span> would match, because string comparisons are case-sensitive.

Typing a letter when a number is expected stops the program, because <span class="codeSnip">int.Parse</span> cannot convert it.

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/languages/c-family/c-sharp/basics/control-flow/conditions-and-comparisons" target="_blank" rel="noopener noreferrer">
    C# → Basics → Control Flow → Conditions & Comparisons (Capital Letters in String Comparisons)
  </a>
</div>

<hr class="dividerSection" />

## Key Points to Remember

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>A <span class="emphasis">while loop</span> runs as long as its condition is true, and may run 0 times.</li>
    <li>A <span class="emphasis">do-while loop</span> checks its condition after running, so it always runs <span class="secondEmphasis">at least once</span>.</li>
    <li>If nothing inside the loop changes the condition, the loop becomes an <span class="emphasis">infinite loop</span>.</li>
    <li><span class="codeSnip">while (true)</span> runs until <span class="codeSnip">break</span> ends it from inside.</li>
    <li><span class="codeSnip">ToLower()</span> makes text comparisons ignore capital letters.</li>
  </ul>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/languages/c-family/c-sharp/basics/loops/for-loops">← Back</a>
    <div class="xrefTitle">C# - Basics - Loops - For Loops</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/languages/c-family/c-sharp/basics/loops/nested-loops">Next →</a>
    <div class="xrefTitle">C# - Basics - Loops - Nested Loops</div>
  </div>
</div>