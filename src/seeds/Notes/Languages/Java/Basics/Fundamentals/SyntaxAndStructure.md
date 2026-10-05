# How Java Code Is Structured

<hr class="dividerSection" />

Java follows a small set of syntax rules that every program must follow.

This page covers the rules that apply to every Java program, using a basic Hello World program as the example.

<hr class="dividerSection" />

## Statements and Semicolons

<hr class="dividerSection" />

Each Java statement must end with a semicolon <span class="codeSnip">;</span>.

This tells the compiler that a complete instruction has been written.

Leaving out a semicolon causes a compile error.

```java
System.out.println("Hello World");
```

<hr class="dividerSection" />

## Case Sensitivity

<hr class="dividerSection" />

Java is a <span class="emphasis">case-sensitive</span> language.

<span class="codeSnip">MyClass</span> and <span class="codeSnip">myclass</span> are treated as two completely different names.

```java
int score = 10;
int Score = 20;

System.out.println(score);
System.out.println(Score);
```

This produces the output:

```shell
10
20
```

<hr class="dividerSection" />

## Classes and File Names

<hr class="dividerSection" />

Every line of code that runs in a traditional Java program must be inside a <span class="emphasis">class</span>.

By convention, a class name starts with an uppercase letter.

In this example, the class is named <span class="codeSnip">Main</span>.

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}
```

This produces the output:

```shell
Hello World
```

The name of a public class must match the name of the file.

A class named <span class="codeSnip">Main</span> must therefore be saved as <span class="codeSnip">Main.java</span>.

When saving a file, use the class name and add <span class="codeSnip">.java</span> to the end.

If the names do not match, the compiler reports an error and the program does not compile or run.

Java 25 and later also allow small programs to be written without an explicit class, but the traditional structure shown here works in every version of Java.

<hr class="dividerSection" />

## The main Method

<hr class="dividerSection" />

Every Java program has a <span class="emphasis">main</span> method, which is where the program starts running.

```java
public static void main(String[] args)
```

Any code placed inside the <span class="codeSnip">main</span> method is executed.

The parts of the line each have a meaning:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="codeSnip">public</span>, the method can be called from anywhere, which lets the JVM run it.</li>
    <li><span class="codeSnip">static</span>, the method belongs to the class itself, so it can run without creating an object first.</li>
    <li><span class="codeSnip">void</span>, the method does not return a value.</li>
    <li><span class="codeSnip">String[] args</span>, an array of text values that holds any command-line arguments passed to the program.</li>
  </ul>
</div>

Java 25 and later also allow a simpler entry point, such as <span class="codeSnip">void main()</span> for small programs.

The traditional form shown above works in every version of Java.

<hr class="dividerSection" />

## Printing with System.out.println

<hr class="dividerSection" />

Inside the <span class="codeSnip">main</span> method, the <span class="codeSnip">println()</span> method prints a line of text to the screen.

```java
public static void main(String[] args) {
    System.out.println("Hello World");
}
```

<span class="codeSnip">System.out.println()</span> may look long, but it works as a single command that means send this text to the screen.

Each part of it has a meaning:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="codeSnip">System</span> is a built-in Java class.</li>
    <li><span class="codeSnip">out</span> is a member of <span class="codeSnip">System</span>, short for output.</li>
    <li><span class="codeSnip">println()</span> is a method, short for print line.</li>
  </ul>
</div>

The text to print is written between double quotation marks.

<hr class="dividerSection" />

## Blocks and Curly Braces

<hr class="dividerSection" />

The curly braces <span class="codeSnip">{}</span> mark the beginning and the end of a block of code.

Every opening brace needs a matching closing brace.

In the Hello World program, the braces create two blocks:

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>The class block contains the <span class="codeSnip">main</span> method.</li>
    <li>The <span class="codeSnip">main</span> block contains the statements that run.</li>
  </ul>
</div>

<div class="xrefBox">
  <span class="emphasis">See:</span><br />
  <a href="/languages/c-family/c-sharp/basics/fundamentals/syntax-and-structure" target="_blank" rel="noopener noreferrer">
    C# → Basics → Fundamentals → Syntax & Structure (Entry Point and the Main Method)
  </a><br />
  <a href="/languages/c-family/c-sharp/basics/core-concepts/console" target="_blank" rel="noopener noreferrer">
    C# → Basics → Core Concepts → Console
  </a>
</div>

<hr class="dividerSection" />

## Summary

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Each statement ends with a semicolon, and Java is case-sensitive.</li>
    <li>Code lives inside a class, and a public class must be saved in a file with the same name.</li>
    <li>The <span class="codeSnip">main</span> method is where the program starts running.</li>
    <li><span class="codeSnip">System.out.println()</span> prints a line of text to the screen.</li>
    <li>Curly braces mark blocks of code.</li>
  </ul>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/languages/java/basics/fundamentals/setup-and-running">← Back</a>
    <div class="xrefTitle">Java - Basics - Fundamentals - Setup & Running Java</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/languages/java/basics/fundamentals/variables-and-data-types">Next →</a>
    <div class="xrefTitle">Java - Basics - Fundamentals - Variables & Data Types</div>
  </div>
</div>