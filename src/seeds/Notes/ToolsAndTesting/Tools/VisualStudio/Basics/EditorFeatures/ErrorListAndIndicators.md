# Finding and Fixing Errors in Visual Studio

<hr class="dividerSection" />

## Error Indicators in the Editor

<hr class="dividerSection" />

Visual Studio checks your code as you type and marks problems with colored squiggly lines.

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Squiggle</th>
      <th class="tableCellHeader">Meaning</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Red</td>
      <td class="tableCell">An <span class="emphasis">error</span>, so the code cannot be compiled and the program cannot run</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Green</td>
      <td class="tableCell">A <span class="emphasis">warning</span>, so the program still runs but something may be wrong</td>
    </tr>
  </tbody>
</table>

A common warning is a variable that is declared but never used.

Hovering over a squiggly line shows a description of the problem and any quick fixes.

Many code editors mark errors this way.

<hr class="dividerSection" />

## The Error List Window

<hr class="dividerSection" />

The <span class="emphasis">Error List</span> collects every error and warning in one place.

It can be opened from the <span class="emphasis">View</span> menu, or from the Error List tab at the bottom of the window.

Double-clicking an error or warning jumps to the exact line in the code.

It is a good habit to keep the Error List open while coding, so problems are easy to see.

<hr class="dividerSection" />

## Running Code with Errors

<hr class="dividerSection" />

A program with errors cannot be run.

When Start is pressed, Visual Studio shows a message that there were build errors and asks whether to run the last successful build.

Choose <span class="emphasis">No</span>.

Choosing Yes runs the last version that worked, which does not include the new code.

<hr class="dividerSection" />

## Reading Error Messages

<hr class="dividerSection" />

Error messages are written in plain English, so reading them carefully usually shows what to fix.

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Message</th>
      <th class="tableCellHeader">Usual Cause</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">; expected</span></td>
      <td class="tableCell">A semicolon is missing at the end of a statement</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">The name does not exist in the current context</span></td>
      <td class="tableCell">A name is misspelled, has the wrong capitalization, or is used outside its scope</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell"><span class="codeSnip">Use of unassigned local variable</span></td>
      <td class="tableCell">A variable is used before it has been given a value</td>
    </tr>
  </tbody>
</table>

<div class="xrefBox">
  <span class="emphasis">See:</span><br />
  <a href="/languages/c-family/c-sharp/basics/fundamentals/syntax-and-structure" target="_blank" rel="noopener noreferrer">
    C# → Basics → Fundamentals → Syntax & Structure (Statements and Semicolons, Case Sensitivity, Scopes)
  </a><br />
  <a href="/languages/c-family/c-sharp/basics/fundamentals/variables-and-data-types" target="_blank" rel="noopener noreferrer">
    C# → Basics → Fundamentals → Variables and Data Types (Declaring a Variable)
  </a>
</div>

<hr class="dividerSection" />

## Summary

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Red squiggles are errors, and green squiggles are warnings.</li>
    <li>The Error List shows every problem, and double-clicking one jumps to it.</li>
    <li>When asked to run the last successful build after an error, choose No.</li>
  </ul>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/tools-and-testing/tools/visual-studio/basics/editor-features/intellisense">← Back</a>
    <div class="xrefTitle">Visual Studio - Basics - Editor Features - IntelliSense</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/tools-and-testing/tools/visual-studio/advanced/workflow-and-shortcuts/startup-projects">Next →</a>
    <div class="xrefTitle">Section: Visual Studio - Advanced - Workflow & Shortcuts - Startup Projects & Multi-Project Solutions</div>
  </div>
</div>