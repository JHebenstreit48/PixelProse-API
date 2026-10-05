# What Is Java?

<hr class="dividerSection" />

<span class="emphasis">Java</span> is a general-purpose, <span class="secondEmphasis">object-oriented</span> programming language.

It was created by <span class="emphasis">James Gosling</span> at <span class="emphasis">Sun Microsystems</span> and first released in 1995.

Java is now owned by <span class="emphasis">Oracle</span>, which acquired Sun Microsystems in 2010.

Java programs are compiled to bytecode and run on the <span class="emphasis">Java Virtual Machine (JVM)</span>, so the same program can run on many different systems.

<hr class="dividerSection" />

## Key Features of Java

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="emphasis">Object-oriented</span>, with code organized into classes and objects</li>
    <li><span class="emphasis">Platform independent</span>, because programs run on the JVM instead of directly on the operating system</li>
    <li><span class="emphasis">Statically typed</span>, so every variable has a declared type</li>
    <li><span class="emphasis">Automatic memory management</span> through garbage collection</li>
    <li>A large <span class="emphasis">standard library</span> for collections, input and output, networking, and more</li>
  </ul>
</div>

<hr class="dividerSection" />

## What Java Is Used For

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Back-end web services and enterprise software</li>
    <li>Android apps, where Java is still supported alongside Kotlin</li>
    <li>Desktop applications</li>
    <li>Games and game tools, such as <span class="emphasis">Minecraft: Java Edition</span> and the <span class="emphasis">libGDX</span> framework</li>
  </ul>
</div>

<hr class="dividerSection" />

## How Java Runs

<hr class="dividerSection" />

A Java program goes through a few steps before it runs.

<div class="centeredNumberedList">
  1. **Write the source code**

  <div class="centeredBullet">
    <ul class="diamondBullets fullWidthBullet">
      <li>The code is written in a file that ends in <span class="codeSnip">.java</span>.</li>
    </ul>
  </div>

  2. **Compile it**

  <div class="centeredBullet">
    <ul class="diamondBullets fullWidthBullet">
      <li>The <span class="codeSnip">javac</span> compiler turns the source code into bytecode, stored in a <span class="codeSnip">.class</span> file.</li>
    </ul>
  </div>

  3. **Run it on the JVM**

  <div class="centeredBullet">
    <ul class="diamondBullets fullWidthBullet">
      <li>The JVM runs the bytecode.</li>
      <li>The same bytecode can run on any system that has a JVM, which is why Java is described as write once, run anywhere.</li>
    </ul>
  </div>
</div>

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/languages/java/basics/fundamentals/setup-and-running-java" target="_blank" rel="noopener noreferrer">
    Java → Basics → Fundamentals → Setup & Running Java
  </a>
</div>

<hr class="dividerSection" />

## A Simple "Hello, World!" Program

<hr class="dividerSection" />

Here is a basic Java program that prints <span class="codeSnip">Hello World</span> to the console.

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}
```

<hr class="dividerExample" />

#### Example: Output

<hr class="dividerExample" />

```shell
Hello World
```

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li><span class="codeSnip">public class Main</span> declares the class that holds the program.</li>
    <li><span class="codeSnip">public static void main(String[] args)</span> is where the program starts running.</li>
    <li><span class="codeSnip">System.out.println</span> prints a line of text to the screen.</li>
  </ul>
</div>

Each part of the program is explained in detail on the Syntax & Structure page.

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/languages/java/basics/fundamentals/syntax-and-structure" target="_blank" rel="noopener noreferrer">
    Java → Basics → Fundamentals → Syntax & Structure
  </a>
</div>

<hr class="dividerSection" />

## Java vs JavaScript

<hr class="dividerSection" />

<span class="emphasis">Java</span> is not to be confused with <span class="emphasis">JavaScript</span>.

Despite the similar names, they are separate languages and are not related to each other.

Java is compiled to bytecode and runs on the <span class="emphasis">Java Virtual Machine (JVM)</span>, while JavaScript is a scripting language that runs in web browsers and in runtimes such as Node.js.

<hr class="dividerSection" />

## Summary

<hr class="dividerSection" />

<div class="centeredBullet">
  <ul class="diamondBullets fullWidthBullet">
    <li>Java is a general-purpose, object-oriented language created at Sun Microsystems in 1995.</li>
    <li>Java code is compiled to bytecode and runs on the JVM, which makes it platform independent.</li>
    <li>Every Java program has a <span class="codeSnip">main</span> method where it starts running.</li>
    <li>Java and JavaScript are unrelated languages.</li>
  </ul>
</div>

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/languages/java/basics/fundamentals/setup-and-running">Next →</a>
    <div class="xrefTitle">Java - Basics - Fundamentals - Setup & Running</div>
  </div>
</div>