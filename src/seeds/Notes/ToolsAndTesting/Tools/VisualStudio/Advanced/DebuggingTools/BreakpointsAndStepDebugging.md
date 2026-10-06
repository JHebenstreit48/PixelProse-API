# Pausing Your Program to See What Is Happening

<hr class="dividerSection" />

## What a Breakpoint Is

<hr class="dividerSection" />

A <span class="emphasis">breakpoint</span> marks a line where the program should pause.

When the program reaches that line, it stops before running it.

This makes it possible to see the values of variables and the order in which code runs.

<hr class="dividerSection" />

## Setting a Breakpoint

<hr class="dividerSection" />

<div class="centeredNumberedList">
  1. **Click in the margin**

  <div class="centeredBullet">
    <ul class="diamondBullets fullWidthBullet">
      <li>Click in the left margin next to the line.</li>
      <li>A red dot appears.</li>
    </ul>
  </div>

  2. **Run with the debugger**

  <div class="centeredBullet">
    <ul class="diamondBullets fullWidthBullet">
      <li>Start the program with <span class="emphasis">F5</span>.</li>
    </ul>
  </div>

  3. **Wait for the pause**

  <div class="centeredBullet">
    <ul class="diamondBullets fullWidthBullet">
      <li>When the program reaches the line, the line turns yellow and the program pauses.</li>
    </ul>
  </div>
</div>

Clicking the dot again removes the breakpoint.

<hr class="dividerSection" />

## Inspecting Values

<hr class="dividerSection" />

While the program is paused, hovering over a variable shows its current value.

For example, hovering over <span class="codeSnip">age</span> shows the number that was entered.

<hr class="dividerSection" />

## Stepping Through Code

<hr class="dividerSection" />

Stepping runs the code one line at a time from a breakpoint.

Watching which line is highlighted next shows which code runs and which code is skipped.

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Command</th>
      <th class="tableCellHeader">Shortcut</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Step Over</td>
      <td class="tableCell"><span class="emphasis">F10</span></td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Step Into</td>
      <td class="tableCell"><span class="emphasis">F11</span></td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Continue</td>
      <td class="tableCell"><span class="emphasis">F5</span></td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Stop Debugging</td>
      <td class="tableCell"><span class="emphasis">Shift + F5</span></td>
    </tr>
  </tbody>
</table>

<hr class="dividerExample" />

#### Example: Stepping Through an If and Else

<hr class="dividerExample" />

```csharp
if (age >= 18)
{
    Console.WriteLine("Welcome to the program");
}
else
{
    Console.WriteLine("You are not old enough");
}
```

With a breakpoint on the <span class="codeSnip">if</span> line and an age of 18, hovering over <span class="codeSnip">age</span> shows 18, and the condition is true.

Stepping once moves into the welcome message line.

The else block is skipped, because the if condition was true.

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/languages/c-family/c-sharp/basics/core-concepts/control-flow" target="_blank" rel="noopener noreferrer">
    C# → Basics → Core Concepts → Control Flow (Else and Else If Statements)
  </a>
</div>

<hr class="dividerSection" />

## Summary

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Click the margin to set a breakpoint, and run with F5 to pause there.</li>
    <li>Hover over a variable to see its value while paused.</li>
    <li>Stepping shows which lines run and which are skipped.</li>
  </ul>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/tools-and-testing/tools/visual-studio/advanced/workflow-and-shortcuts/commenting-shortcuts">← Back</a>
    <div class="xrefTitle">Section: Visual Studio - Advanced - Workflow & Shortcuts - Commenting Shortcuts</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/tools-and-testing/tools/visual-studio/advanced/debugging-tools/watch-and-autos-windows">Next →</a>
    <div class="xrefTitle">Visual Studio - Advanced - Debugging Tools - Watch & Autos Windows</div>
  </div>
</div>