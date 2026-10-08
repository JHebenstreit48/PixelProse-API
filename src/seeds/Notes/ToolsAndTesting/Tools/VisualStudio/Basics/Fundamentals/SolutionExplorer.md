# Finding Your Way Around a Visual Studio Solution

<hr class="dividerSection" />

## What Solution Explorer Shows

<hr class="dividerSection" />

<span class="emphasis">Solution Explorer</span> lists every project in the solution, along with the files inside each project.

It works like a folder that holds all of your work.

The structure it shows matches the folders on disk, so a project folder in Solution Explorer is a project folder in the file system.

If Solution Explorer is not visible, open it from the <span class="emphasis">View</span> menu.

<hr class="dividerSection" />

## Solutions and Projects

<hr class="dividerSection" />

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Term</th>
      <th class="tableCellHeader">Meaning</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Solution</td>
      <td class="tableCell">The container that holds one or more projects, saved in a <span class="codeSnip">.sln</span> file</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Project</td>
      <td class="tableCell">A single program or library with its own code files</td>
    </tr>
  </tbody>
</table>

<hr class="dividerSection" />

## Adding a Project to a Solution

<hr class="dividerSection" />

<div class="centeredNumberedList">
  1. **Right-click the solution**

  <div class="centeredBullet">
    <ul class="diamondBullets fullWidthBullet">
      <li>Right-click the solution at the top of Solution Explorer.</li>
    </ul>
  </div>

  2. **Add a new project**

  <div class="centeredBullet">
    <ul class="diamondBullets fullWidthBullet">
      <li>Choose <span class="emphasis">Add</span>, then <span class="emphasis">New Project</span>.</li>
    </ul>
  </div>

  3. **Choose the template and name**

  <div class="centeredBullet">
    <ul class="diamondBullets fullWidthBullet">
      <li>Pick a template such as <span class="emphasis">Console App</span> and give the project a name.</li>
    </ul>
  </div>
</div>

Both projects now appear in Solution Explorer.

Pressing Start only runs one of them, the startup project.

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/tools-and-testing/tools/visual-studio/advanced/workflow-and-shortcuts/startup-projects" target="_blank" rel="noopener noreferrer">
    Visual Studio → Advanced → Workflow & Shortcuts → Startup Projects & Multi-Project Solutions
  </a>
</div>

<hr class="dividerSection" />

## Adding a File to a Project

<hr class="dividerSection" />

<div class="centeredNumberedList">
  1. **Right-click the project or a folder**

  <div class="centeredBullet">
    <ul class="diamondBullets fullWidthBullet">
      <li>Right-click it in Solution Explorer.</li>
    </ul>
  </div>

  2. **Choose Add, then New Item**

  <div class="centeredBullet">
    <ul class="diamondBullets fullWidthBullet">
      <li>The Add New Item window opens.</li>
    </ul>
  </div>

  3. **Choose Class**

  <div class="centeredBullet">
    <ul class="diamondBullets fullWidthBullet">
      <li>A class creates a <span class="codeSnip">.cs</span> file.</li>
    </ul>
  </div>

  4. **Name it and click Add**

  <div class="centeredBullet">
    <ul class="diamondBullets fullWidthBullet">
      <li>For example, name the file <span class="codeSnip">Player.cs</span>.</li>
    </ul>
  </div>
</div>

The shortcut for Add New Item is <span class="emphasis">Ctrl + Shift + A</span>.

Adding files through Solution Explorer keeps larger projects organized.

<hr class="dividerSection" />

## Reopening a Solution

<hr class="dividerSection" />

A closed solution can be opened again in two ways:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Choose it from the recent list in Visual Studio.</li>
    <li>Double-click the <span class="codeSnip">.sln</span> file in the solution folder.</li>
  </ul>
</div>

<hr class="dividerSection" />

## Summary

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Solution Explorer shows all projects and files, matching the folders on disk.</li>
    <li>A solution can hold several projects.</li>
    <li>Projects and files are added by right-clicking in Solution Explorer.</li>
  </ul>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/tools-and-testing/tools/visual-studio/basics/fundamentals/creating-and-running-a-project">← Back</a>
    <div class="xrefTitle">Visual Studio - Basics - Fundamentals - Creating & Running a Project</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/tools-and-testing/tools/visual-studio/basics/editor-features/intellisense">Next →</a>
    <div class="xrefTitle">Section: Visual Studio - Basics - Editor Features - IntelliSense</div>
  </div>
</div>