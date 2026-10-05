# Getting Java Running on Your Computer

<hr class="dividerSection" />

## Checking if Java Is Installed

<hr class="dividerSection" />

Some computers already have Java installed.

On Windows, open Command Prompt (cmd.exe), and on macOS or Linux, open a terminal.

Then run this command:

```shell
java -version
```

If Java is installed, the first line of the output shows the version number, for example <span class="codeSnip">java version "21.0.2"</span>.

The rest of the output names the runtime that Java is using, and the exact text depends on the version and vendor.

If the command is not recognized, Java is either not installed or not added to the system PATH.

Searching the Start menu for Java is not a reliable check, because a Java installation does not always add a Start menu entry.

<hr class="dividerSection" />

## Installing Java

<hr class="dividerSection" />

To write and compile programs you need the <span class="emphasis">Java Development Kit (JDK)</span>, which includes the <span class="codeSnip">javac</span> compiler.

The JDK can be downloaded from <a href="https://www.oracle.com/java/technologies/downloads/" target="_blank" rel="noopener noreferrer">oracle.com</a>.

<hr class="dividerSection" />

## Choosing an Editor

<hr class="dividerSection" />

Java code can be written in any plain text editor, such as Notepad on Windows or Notepad++.

An <span class="emphasis">Integrated Development Environment (IDE)</span>, such as IntelliJ IDEA, NetBeans, or Eclipse, is also an option.

IDEs are particularly useful for managing larger collections of Java files.

<hr class="dividerSection" />

## Compiling and Running a Program

<hr class="dividerSection" />

<div class="centeredNumberedList">
  1. **Save the code**

  <div class="centeredBullet">
    <ul class="diamondBullets fullWidthBullet">
      <li>Save the Hello World program as <span class="codeSnip">Main.java</span>, because a public class must match its file name.</li>
      <li>In Notepad, set "Save as type" to "All files" so that <span class="codeSnip">.txt</span> is not added to the name.</li>
    </ul>
  </div>

  2. **Open the folder in a terminal**

  <div class="centeredBullet">
    <ul class="diamondBullets fullWidthBullet">
      <li>Open Command Prompt or a terminal and use <span class="codeSnip">cd</span> to move to the folder that contains the file.</li>
    </ul>
  </div>

  3. **Compile it**

  <div class="centeredBullet">
    <ul class="diamondBullets fullWidthBullet">
      <li>Run <span class="codeSnip">javac Main.java</span>.</li>
      <li>If there are no errors, the prompt returns with no message, and a <span class="codeSnip">Main.class</span> file now exists in the folder.</li>
    </ul>
  </div>

  4. **Run it**

  <div class="centeredBullet">
    <ul class="diamondBullets fullWidthBullet">
      <li>Run <span class="codeSnip">java Main</span>.</li>
    </ul>
  </div>
</div>

```shell
javac Main.java
java Main
```

The output reads:

```shell
Hello World
```

The compile command includes the <span class="codeSnip">.java</span> extension, and the run command does not.

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/languages/java/basics/fundamentals/introduction" target="_blank" rel="noopener noreferrer">
    Java → Basics → Fundamentals → Introduction (A Simple "Hello, World!" Program)
  </a>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/languages/java/basics/fundamentals/introduction">← Back</a>
    <div class="xrefTitle">Java - Basics - Fundamentals - Introduction</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/languages/java/basics/fundamentals/syntax-and-structure">Next →</a>
    <div class="xrefTitle">Java - Basics - Fundamentals - Syntax & Structure</div>
  </div>
</div>