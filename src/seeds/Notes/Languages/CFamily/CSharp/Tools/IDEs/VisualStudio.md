<br>

---
## Creating a New C# Project
---

Steps to start a new C# project:

1. Open <span class="emphasis">Visual Studio</span>.
2. Click <span class="emphasis">Create a new project</span>.
3. Choose <span class="emphasis">Console App</span> (for basic applications) or select other C# project templates.
4. Click <span class="emphasis">Next</span>.
5. Enter your project <span class="emphasis">name</span> and <span class="emphasis">location</span>.
6. Choose the <span class="emphasis">.NET version</span> (recommend using the latest LTS version if possible).
7. Click <span class="emphasis">Create</span>.

Visual Studio will generate a starter project structure with a Program.cs file ready to begin coding.

---
## Setting the Startup Project (C# Context)
---

In a C# solution with multiple projects, you must set which project should be the default to run:

- In **Solution Explorer**, right-click the project.
- Choose **Set as Startup Project**.

This ensures that when you run the solution (Ctrl + F5), Visual Studio executes the correct C# project.

---
## Adding New C# Files to Your Project
---

To add new C# class files or other components:

1. In **Solution Explorer**, right-click on the project or folder.
2. Select **Add** > **New Item**.
3. Choose **Class** (<span class="codeSnip">.cs</span> file).
4. Name your file (e.g., Player.cs).
5. Click **Add**.

---
### Shortcut:
---

- **Windows**: <span class="emphasis">Ctrl + Shift + A</span>

Adding files through Solution Explorer helps maintain an organized project structure for larger C# applications.

---
## Error Detection (C# Specific)
---

Visual Studio provides **real-time syntax and semantic error checking** while you write C# code:

- Incorrect or incomplete C# code will be marked with **red squiggly lines**.
- Hover over the squiggly line to see a description of the issue and quick fixes.
- Common errors in C# include missing semicolons, unclosed braces, incorrect data types, and syntax errors.

This feature is powered by **IntelliSense**, enhancing your C# development by providing suggestions and detecting errors early.

---
## Using the Error List (C# Context)
---

The **Error List** window consolidates all syntax and semantic issues in your C# project:

- Open via **View** > **Error List** or click on the Error List tab at the bottom.
- Double-click any error or warning to jump to the exact line in your <span class="codeSnip">.cs</span>file.
- Keeping the Error List visible improves your workflow when working on large C# projects.

---
## Commenting and Uncommenting Code in C#
---

In C#, comments are essential for documentation and temporarily disabling code.

- **Single-line comment**: Start the line with <span class="codeSnip">//</span>
- **Multi-line comment**: Enclose the block with <span class="codeSnip">/* */</span>

### Commenting Shortcuts (Visual Studio on Windows):
- **Comment selected lines**: Ctrl + K, then Ctrl + C
- **Uncomment selected lines**: Ctrl + K, then Ctrl + U

Visual Studio also provides buttons in the toolbar for commenting and uncommenting code.

---
## Summary

Visual Studio is tightly integrated with the C# language, providing tools like IntelliSense, real-time error checking, and easy project and file management. For anyone working with C#, mastering Visual Studio's core features is key to writing better, more efficient applications.
