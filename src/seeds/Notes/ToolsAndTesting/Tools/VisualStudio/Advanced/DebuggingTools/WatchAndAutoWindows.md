i# Watching Variables While You Debug

<hr class="dividerSection" />

## What These Windows Show

<hr class="dividerSection" />

Hovering over one variable at a time works for a quick check.

The debugger windows show many values at once and keep them on screen while stepping.

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Window</th>
      <th class="tableCellHeader">What It Shows</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Autos</td>
      <td class="tableCell">Variables used on the current line and the line before it</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Locals</td>
      <td class="tableCell">All the local variables in the current scope</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Watch</td>
      <td class="tableCell">Variables and expressions that are typed in by hand</td>
    </tr>
  </tbody>
</table>

<hr class="dividerSection" />

## Opening the Windows

<hr class="dividerSection" />

These windows are only available while the program is paused in the debugger.

They are opened from the <span class="emphasis">Debug</span> menu, under <span class="emphasis">Windows</span>.

<hr class="dividerSection" />

## Using the Watch Window

<hr class="dividerSection" />

A variable name or an expression can be typed into the Watch window.

The window shows its current value and updates it as the code is stepped through.

```csharp
age >= 18
```

With <span class="codeSnip">age</span> set to 17, the Watch window shows <span class="codeSnip">false</span> for this expression.

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/tools-and-testing/tools/visual-studio/advanced/debugging-tools/breakpoints-and-step-debugging" target="_blank" rel="noopener noreferrer">
    Visual Studio → Advanced → Debugging Tools → Breakpoints & Step Debugging
  </a>
</div>

<hr class="dividerSection" />

## Summary

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Autos shows the variables near the current line, and Locals shows all variables in scope.</li>
    <li>Watch shows any variable or expression that is typed in.</li>
    <li>These windows are available while the program is paused.</li>
  </ul>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/tools-and-testing/tools/visual-studio/advanced/debugging-tools/breakpoints-and-step-debugging">← Back</a>
    <div class="xrefTitle">Visual Studio - Advanced - Debugging Tools - Breakpoints & Step Debugging</div>
  </div>
</div>