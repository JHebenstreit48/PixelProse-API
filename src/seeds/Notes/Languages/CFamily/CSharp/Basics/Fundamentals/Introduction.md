# What is C#?

<hr class="dividerSection" />

<span class="emphasis">C#</span> (pronounced <span class="emphasis">"C-Sharp"</span>) is a modern, object-oriented programming language developed by <span class="emphasis">Microsoft</span> as part of its <span class="emphasis">.NET</span> platform. It is designed to be both powerful and developer-friendly, supporting a wide range of application types that run on the <span class="emphasis">.NET Framework</span> and <span class="emphasis">.NET Core</span> (now unified under <span class="emphasis">.NET</span>).

C# is widely used to build everything from console applications and web services to video games and enterprise systems.

<hr class="dividerSection" />

## Why Use C#?

<hr class="dividerSection" />

<span class="emphasis">C#</span> provides a clear and consistent structure for programs, enabling maintainable and reusable code. It supports modern programming features like asynchronous programming, pattern matching, and strong type safety.

It is versatile and used to create:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Mobile applications</li>
    <li>Desktop applications</li>
    <li>Web applications and services</li>
    <li>Websites</li>
    <li>Games</li>
    <li>VR applications</li>
    <li>Cloud-native and database applications</li>
  </ul>
</div>

<hr class="dividerSection" />

## History & Versioning

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>C# has gone through versions <span class="emphasis">1–13</span>.</li>
    <li>Microsoft made C# <span class="emphasis">open-source in 2014</span>.</li>
    <li>C# is standardized through <span class="emphasis">ECMA International</span> (European Computer Manufacturers Association) — multiple versions have been submitted to them.</li>
  </ul>
</div>

<hr class="dividerSection" />

### The Roslyn Compiler

<hr class="dividerSection" />

The <span class="emphasis">.NET</span> compiler for <span class="emphasis">C#</span> and <span class="emphasis">Visual Basic</span> is called <span class="emphasis">Roslyn</span>.

<span class="emphasis">F#</span> has its own separate compiler and does not use Roslyn.

<hr class="dividerSection" />

#### .NET SDK & C# Version Compatibility

<hr class="dividerSection" />

Specific <span class="emphasis">.NET SDKs</span> must be used with specific <span class="emphasis">C# versions</span> at minimum. The tables below show how SDK versions map to their default C# version and corresponding Roslyn compiler.

<hr class="dividerSubsection1" />

#### SDK to Default C# Version

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
  </tbody>
</table>

<hr class="dividerSubsection1" />

#### SDK to Roslyn Compiler Version

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
      <td class="tableCell">2.0–2.2</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">1.1.4</td>
      <td class="tableCell">2.3–2.4</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">2.1.2</td>
      <td class="tableCell">2.6–2.7</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">2.1.200</td>
      <td class="tableCell">2.8–2.10</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">3.0</td>
      <td class="tableCell">3.0–3.4</td>
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
  </tbody>
</table>

<hr class="dividerSection" />

### .NET Standard for Class Libraries

<hr class="dividerSection" />

For <span class="emphasis">class libraries</span>, you can target <span class="emphasis">.NET Standard</span> instead, which has its own default C# versions:

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

### Program Execution

<hr class="dividerSection" />

Every C# application must include a <span class="emphasis">Main</span> method. This method serves as the <span class="emphasis">entry point</span> of the program — when the application starts, execution begins with <span class="emphasis">Main()</span>.

Think of the <span class="emphasis">Main</span> method as the front door to your application. It is the starting location where logic begins running, and it is required even for simple console programs.

```csharp
using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Hello, world!");
    }
}
```

<hr class="dividerSection" />

### Summary

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>C# is a modern, object-oriented language developed by <span class="emphasis">Microsoft</span>.</li>
    <li>It has evolved through <span class="emphasis">versions 1–13</span> and became open-source in <span class="emphasis">2014</span>.</li>
    <li>The <span class="emphasis">Roslyn</span> compiler handles C# and VB; F# uses its own compiler.</li>
    <li>Specific <span class="emphasis">.NET SDKs</span> are tied to specific C# versions.</li>
    <li>C# is standardized through <span class="emphasis">ECMA International</span>.</li>
    <li>It is versatile enough for games, apps, web services, and enterprise systems.</li>
  </ul>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/cplusplus/testing/integration/unit-testing">← Back</a>
    <div class="xrefTitle">Topic: C++ - Testing - Engine Integration - Unit Testing in Game Engines</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/c-family/c-sharp/basics/fundamentals/syntax">Next →</a>
    <div class="xrefTitle">C# - Basics - Fundamentals - Syntax and Types</div>
  </div>
</div>