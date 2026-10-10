# Where C# Came From

<hr class="dividerSection" />

## The Birth of C#

<hr class="dividerSection" />

<span class="emphasis">C#</span> was created at <span class="emphasis">Microsoft</span> by a team led by <span class="emphasis">Anders Hejlsberg</span>.

It was <span class="secondEmphasis">announced in 2000</span> and <span class="secondEmphasis">first released in 2002</span> as <span class="emphasis">C# 1.0</span>, alongside the <span class="emphasis">.NET Framework</span>.

It was designed as a modern, <span class="emphasis">object-oriented</span> language for building applications on .NET.

C# uses <span class="emphasis">C-style syntax</span>, with curly braces, semicolons, and keywords like <span class="codeSnip">if</span>, <span class="codeSnip">for</span>, and <span class="codeSnip">switch</span>, which it shares with <span class="secondEmphasis">C</span>, <span class="secondEmphasis">C++</span>, <span class="secondEmphasis">Java</span>, and <span class="secondEmphasis">JavaScript</span>.

That shared syntax is why C# and JavaScript look alike, even though neither was based on the other, and C# is much closer to <span class="emphasis">Java</span> in how it works.

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="https://devscriptstax.netlify.app/javascript/basics/fundamentals/history" target="_blank" rel="noopener noreferrer">
    DevScriptStax → JavaScript → Basics → Fundamentals → History
  </a>
</div>

<hr class="dividerSection" />

## Versions, Open Source, and Standardization

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>C# has gone through versions <span class="emphasis">1 to 14</span>, with a new version released roughly every year alongside .NET.</li>
    <li>Microsoft made the C# compiler <span class="emphasis">open source in 2014</span>.</li>
    <li>C# is standardized through <span class="emphasis">Ecma International</span>, originally the <span class="secondEmphasis">European Computer Manufacturers Association</span>, and several versions have been published as the <span class="secondEmphasis">ECMA-334</span> standard.</li>
  </ul>
</div>

<hr class="dividerSection" />

## C# in Game Development

<hr class="dividerSection" />

C# is the main scripting language of the <span class="emphasis">Unity</span> engine.

It is also used with engines and frameworks such as <span class="secondEmphasis">Godot</span>, <span class="secondEmphasis">MonoGame</span>, and <span class="secondEmphasis">Stride</span>.

<hr class="dividerSection" />

## The Roslyn Compiler

<hr class="dividerSection" />

The <span class="emphasis">.NET</span> compiler for <span class="emphasis">C#</span> and <span class="secondEmphasis">Visual Basic</span> is called <span class="emphasis">Roslyn</span>.

<span class="emphasis">F#</span> has its own separate compiler and does not use Roslyn.

<hr class="dividerSection" />

## .NET SDK and C# Version Compatibility

<hr class="dividerSection" />

Each <span class="emphasis">.NET SDK</span> uses a <span class="secondEmphasis">default C# version</span> and ships with a specific version of the <span class="emphasis">Roslyn</span> compiler.

The tables below show how SDK versions map to their default C# version and Roslyn compiler.

<hr class="dividerSubsection1" />

### SDK to Default C# Version

<hr class="dividerSubsection1" />

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">.NET SDK</th>
      <th class="tableCellHeader">Default C# Version</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">1.0.4</td>
      <td class="tableCell">7.0</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">1.1.4</td>
      <td class="tableCell">7.1</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">2.1.2</td>
      <td class="tableCell">7.2</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">2.1.200</td>
      <td class="tableCell">7.3</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">3.0</td>
      <td class="tableCell">8.0</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">5.0</td>
      <td class="tableCell">9.0</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">6.0</td>
      <td class="tableCell">10.0</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">7.0</td>
      <td class="tableCell">11.0</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">8.0</td>
      <td class="tableCell">12.0</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">9.0</td>
      <td class="tableCell">13.0</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">10.0</td>
      <td class="tableCell">14.0</td>
    </tr>
  </tbody>
</table>

<hr class="dividerSubsection1" />

### SDK to Roslyn Compiler Version

<hr class="dividerSubsection1" />

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">.NET SDK</th>
      <th class="tableCellHeader">Roslyn Compiler</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">1.0.4</td>
      <td class="tableCell">2.0 to 2.2</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">1.1.4</td>
      <td class="tableCell">2.3 to 2.4</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">2.1.2</td>
      <td class="tableCell">2.6 to 2.7</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">2.1.200</td>
      <td class="tableCell">2.8 to 2.10</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">3.0</td>
      <td class="tableCell">3.0 to 3.4</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">5.0</td>
      <td class="tableCell">3.8</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">6.0</td>
      <td class="tableCell">4.0</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">7.0</td>
      <td class="tableCell">4.4</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">8.0</td>
      <td class="tableCell">4.8</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">9.0</td>
      <td class="tableCell">4.12</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">10.0</td>
      <td class="tableCell">5.0</td>
    </tr>
  </tbody>
</table>

<hr class="dividerSubsection1" />

### .NET Standard for Class Libraries

<hr class="dividerSubsection1" />

<span class="emphasis">Class libraries</span> can target <span class="emphasis">.NET Standard</span> instead, which has its own default C# versions.

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">.NET Standard</th>
      <th class="tableCellHeader">Default C# Version</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">2.0</td>
      <td class="tableCell">C# 7.3</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">2.1</td>
      <td class="tableCell">C# 8.0</td>
    </tr>
  </tbody>
</table>

<hr class="dividerSection" />

## Timeline Summary

<hr class="dividerSection" />

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Year</th>
      <th class="tableCellHeader">Event</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">2000</td>
      <td class="tableCell">Microsoft announces <span class="emphasis">C#</span></td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">2002</td>
      <td class="tableCell"><span class="emphasis">C# 1.0</span> is released with the .NET Framework</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">2014</td>
      <td class="tableCell">The C# compiler, <span class="emphasis">Roslyn</span>, becomes open source</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">2015</td>
      <td class="tableCell"><span class="emphasis">C# 6</span> adds string interpolation</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">2016</td>
      <td class="tableCell"><span class="emphasis">.NET Core</span> brings C# to Windows, macOS, and Linux</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">2020</td>
      <td class="tableCell"><span class="emphasis">C# 9</span> adds top-level statements</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">2025</td>
      <td class="tableCell"><span class="emphasis">C# 14</span> is released with .NET 10</td>
    </tr>
  </tbody>
</table>

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/languages/c-family/c-sharp/basics/fundamentals/syntax-and-structure" target="_blank" rel="noopener noreferrer">
    C# → Basics → Fundamentals → Syntax & Structure (String Interpolation, Entry Point and the Main Method)
  </a>
</div>

<hr class="dividerSection" />

## Summary

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>C# was announced in <span class="emphasis">2000</span> and first released in <span class="emphasis">2002</span>.</li>
    <li>It shares <span class="emphasis">C-style syntax</span> with JavaScript and is closest to <span class="secondEmphasis">Java</span>.</li>
    <li>It has reached <span class="emphasis">C# 14</span>, and its compiler became open source in <span class="secondEmphasis">2014</span>.</li>
    <li>The <span class="emphasis">Roslyn</span> compiler handles C# and Visual Basic, while F# uses its own compiler.</li>
    <li>Each <span class="emphasis">.NET SDK</span> has a default C# version.</li>
    <li>C# is standardized through <span class="emphasis">Ecma International</span>.</li>
  </ul>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/languages/c-family/c-sharp/basics/fundamentals/introduction">← Back</a>
    <div class="xrefTitle">C# - Basics - Fundamentals - Introduction</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/languages/c-family/c-sharp/basics/fundamentals/syntax-and-structure">Next →</a>
    <div class="xrefTitle">C# - Basics - Fundamentals - Syntax & Structure</div>
  </div>
</div>