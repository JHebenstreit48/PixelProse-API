# Your First C# Project in Visual Studio

<hr class="dividerSection" />

## Creating a New Project

<hr class="dividerSection" />

Steps to start a new C# project:

<div class="centeredNumberedList">
  1. **Open Visual Studio**

  <div class="centeredBullet">
    <ul class="diamondBullets fullWidthBullet">
      <li>Start from the <span class="emphasis">start window</span>.</li>
    </ul>
  </div>

  2. **Choose Create a new project**

  <div class="centeredBullet">
    <ul class="diamondBullets fullWidthBullet">
      <li>This opens the list of project templates.</li>
    </ul>
  </div>

  3. **Choose Console App**

  <div class="centeredBullet">
    <ul class="diamondBullets fullWidthBullet">
      <li>Pick the C# <span class="emphasis">Console App</span> template for basic applications.</li>
      <li>Other C# project templates are available for other kinds of applications.</li>
    </ul>
  </div>

  4. **Name the project**

  <div class="centeredBullet">
    <ul class="diamondBullets fullWidthBullet">
      <li>Click <span class="emphasis">Next</span>, then enter the project <span class="emphasis">name</span> and <span class="emphasis">location</span>.</li>
    </ul>
  </div>

  5. **Choose the .NET version**

  <div class="centeredBullet">
    <ul class="diamondBullets fullWidthBullet">
      <li>Click <span class="emphasis">Next</span> to reach the Additional information page.</li>
      <li>Choose the latest LTS version if possible.</li>
    </ul>
  </div>

  6. **Click Create**

  <div class="centeredBullet">
    <ul class="diamondBullets fullWidthBullet">
      <li>Visual Studio generates a starter project with a code file ready for editing.</li>
    </ul>
  </div>
</div>

<hr class="dividerSection" />

## The Starter Code

<hr class="dividerSection" />

The current Console App template generates <span class="emphasis">top-level statements</span>.

The compiler creates the class and the <span class="codeSnip">Main</span> method behind the scenes.

```csharp
// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");
```

Older templates, including .NET Framework projects, generate the full structure instead.

```csharp
using System;

namespace MyProject
{
    class Program
    {
        static void Main(string[] args)
        {
        }
    }
}
```

The Additional information page also has a <span class="emphasis">Do not use top-level statements</span> check box.

Checking it generates the full structure with an explicit <span class="codeSnip">Main</span> method.

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/languages/c-family/c-sharp/basics/fundamentals/syntax-and-structure" target="_blank" rel="noopener noreferrer">
    C# → Basics → Fundamentals → Syntax & Structure (Entry Point and the Main Method)
  </a>
</div>

<hr class="dividerSection" />

## Running the Project

<hr class="dividerSection" />

Both run commands are in the <span class="emphasis">Debug</span> menu.

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Command</th>
      <th class="tableCellHeader">Shortcut</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Start Debugging</td>
      <td class="tableCell"><span class="emphasis">F5</span></td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Start Without Debugging</td>
      <td class="tableCell"><span class="emphasis">Ctrl + F5</span></td>
    </tr>
  </tbody>
</table>

<span class="emphasis">Start Debugging</span> runs the program with the debugger attached, so breakpoints can pause it.

<span class="emphasis">Start Without Debugging</span> runs the program without the debugger.

The green <span class="emphasis">Start</span> button in the toolbar runs the program the same way as F5.

The first run takes longer than later runs, because the project has to be compiled first.

<hr class="dividerSection" />

## When the Console Window Closes Immediately

<hr class="dividerSection" />

A console program closes its window as soon as it finishes running.

In .NET Framework projects, starting with F5 closes the window immediately, so the output cannot be read.

There are a few ways to keep the window open:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Run with <span class="emphasis">Ctrl + F5</span>, which keeps the window open and shows a <span class="codeSnip">Press any key to continue</span> message.</li>
    <li>Add <span class="codeSnip">Console.ReadLine()</span> to the end of the code, which pauses the program until Enter is pressed.</li>
  </ul>
</div>

In current .NET projects, Visual Studio keeps the console open by default after the program ends.

This is controlled by the <span class="emphasis">Automatically close the console when debugging stops</span> option under <span class="emphasis">Tools, Options, Debugging, General</span>.

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/languages/c-family/c-sharp/basics/core-concepts/console" target="_blank" rel="noopener noreferrer">
    C# → Basics → Core Concepts → Console (Console.ReadLine)
  </a>
</div>

<hr class="dividerSection" />

## Running the Wrong Project

<hr class="dividerSection" />

If a solution has more than one project, the Start button only runs the startup project.

When the output is not what the code should produce, check which project is set as the startup project.

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/tools-and-testing/tools/visual-studio/advanced/workflow-and-shortcuts/startup-projects" target="_blank" rel="noopener noreferrer">
    Visual Studio → Advanced → Workflow & Shortcuts → Startup Projects & Multi-Project Solutions
  </a>
</div>

<hr class="dividerSection" />

## Summary

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>A Console App project is created from the start window, and the template sets up the starter code.</li>
    <li>F5 starts with debugging, and Ctrl + F5 starts without it.</li>
    <li>Ctrl + F5 keeps the console window open after the program finishes.</li>
  </ul>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/tools-and-testing/tools/visual-studio/basics/fundamentals/solution-explorer">Next →</a>
    <div class="xrefTitle">Visual Studio - Basics - Fundamentals - Solution Explorer</div>
  </div>
</div>