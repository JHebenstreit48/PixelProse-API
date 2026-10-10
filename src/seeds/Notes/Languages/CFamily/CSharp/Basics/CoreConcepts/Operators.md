# What Operators Do

<hr class="dividerSection" />

## Working with Operators

<hr class="dividerSection" />

Operators in C# are symbols or keywords that specify operations to be performed on variables and values.

Understanding operators is essential for writing expressions and making decisions in your code.

C# includes many types of operators, from basic assignment to logical and comparison operators.

<hr class="dividerSection" />

## Dot Operator (.)

<hr class="dividerSection" />

The dot operator is used to access the members (methods, properties, and fields) of a class or object.

This is similar to how JavaScript uses the dot operator.

In both C# and JavaScript, the dot (<span class="codeSnip">.</span>) acts like opening a toolbox, allowing you to retrieve or execute a specific tool (method or property) from a class or object.

<hr class="dividerExample" />

#### Example: Dot Operator in C#

<hr class="dividerExample" />

```csharp
Console.WriteLine("Hello, world!");
```

Here, <span class="codeSnip">Console</span> is the class, and <span class="codeSnip">WriteLine</span> is the method being accessed using the dot operator.

<hr class="dividerSection" />

## Assignment Operator (=)

<hr class="dividerSection" />

The assignment operator is used to assign a value to a variable.

```csharp
int number = 10;
```

It places the value on the right side into the variable on the left side.

<hr class="dividerSection" />

## Arithmetic Operators

<hr class="dividerSection" />

Arithmetic operators are used to perform mathematical calculations.

<div class="tablePairSideBySide">
  <div class="tableWrapper">
    <table class="notesTable">
      <thead>
        <tr class="tableHeader">
          <th class="tableCellHeader">Operator</th>
          <th class="tableCellHeader">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr class="tableRow">
          <td class="tableCell"><span class="codeSnip">+</span></td>
          <td class="tableCell">Addition</td>
        </tr>
        <tr class="tableRow">
          <td class="tableCell"><span class="codeSnip">-</span></td>
          <td class="tableCell">Subtraction</td>
        </tr>
        <tr class="tableRow">
          <td class="tableCell"><span class="codeSnip">*</span></td>
          <td class="tableCell">Multiplication</td>
        </tr>
        <tr class="tableRow">
          <td class="tableCell"><span class="codeSnip">/</span></td>
          <td class="tableCell">Division</td>
        </tr>
        <tr class="tableRow">
          <td class="tableCell"><span class="codeSnip">%</span></td>
          <td class="tableCell">Modulus (remainder)</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="tableWrapper">
    <table class="notesTable">
      <thead>
        <tr class="tableHeader">
          <th class="tableCellHeader">Operator</th>
          <th class="tableCellHeader">Example</th>
        </tr>
      </thead>
      <tbody>
        <tr class="tableRow">
          <td class="tableCell"><span class="codeSnip">+</span></td>
          <td class="tableCell"><span class="codeSnip">int sum = 5 + 3;</span></td>
        </tr>
        <tr class="tableRow">
          <td class="tableCell"><span class="codeSnip">-</span></td>
          <td class="tableCell"><span class="codeSnip">int diff = 5 - 3;</span></td>
        </tr>
        <tr class="tableRow">
          <td class="tableCell"><span class="codeSnip">*</span></td>
          <td class="tableCell"><span class="codeSnip">int product = 5 * 3;</span></td>
        </tr>
        <tr class="tableRow">
          <td class="tableCell"><span class="codeSnip">/</span></td>
          <td class="tableCell"><span class="codeSnip">int quotient = 5 / 3;</span></td>
        </tr>
        <tr class="tableRow">
          <td class="tableCell"><span class="codeSnip">%</span></td>
          <td class="tableCell"><span class="codeSnip">int remainder = 5 % 3;</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

```csharp
int a = 10;
int b = 3;
int sum = a + b;
int diff = a - b;
int product = a * b;
int quotient = a / b;
int remainder = a % b;
```

<hr class="dividerSection" />

## Comparison Operators

<hr class="dividerSection" />

Comparison operators are used to compare two values and return a boolean result (true or false).

<div class="tablePairSideBySide">
  <div class="tableWrapper">
    <table class="notesTable">
      <thead>
        <tr class="tableHeader">
          <th class="tableCellHeader">Operator</th>
          <th class="tableCellHeader">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr class="tableRow">
          <td class="tableCell"><span class="codeSnip">==</span></td>
          <td class="tableCell">Equal to</td>
        </tr>
        <tr class="tableRow">
          <td class="tableCell"><span class="codeSnip">!=</span></td>
          <td class="tableCell">Not equal to</td>
        </tr>
        <tr class="tableRow">
          <td class="tableCell"><span class="codeSnip">&gt;</span></td>
          <td class="tableCell">Greater than</td>
        </tr>
        <tr class="tableRow">
          <td class="tableCell"><span class="codeSnip">&lt;</span></td>
          <td class="tableCell">Less than</td>
        </tr>
        <tr class="tableRow">
          <td class="tableCell"><span class="codeSnip">&gt;=</span></td>
          <td class="tableCell">Greater than or equal to</td>
        </tr>
        <tr class="tableRow">
          <td class="tableCell"><span class="codeSnip">&lt;=</span></td>
          <td class="tableCell">Less than or equal to</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="tableWrapper">
    <table class="notesTable">
      <thead>
        <tr class="tableHeader">
          <th class="tableCellHeader">Operator</th>
          <th class="tableCellHeader">Example</th>
        </tr>
      </thead>
      <tbody>
        <tr class="tableRow">
          <td class="tableCell"><span class="codeSnip">==</span></td>
          <td class="tableCell"><span class="codeSnip">5 == 5 // true</span></td>
        </tr>
        <tr class="tableRow">
          <td class="tableCell"><span class="codeSnip">!=</span></td>
          <td class="tableCell"><span class="codeSnip">5 != 3 // true</span></td>
        </tr>
        <tr class="tableRow">
          <td class="tableCell"><span class="codeSnip">&gt;</span></td>
          <td class="tableCell"><span class="codeSnip">5 &gt; 3 // true</span></td>
        </tr>
        <tr class="tableRow">
          <td class="tableCell"><span class="codeSnip">&lt;</span></td>
          <td class="tableCell"><span class="codeSnip">5 &lt; 3 // false</span></td>
        </tr>
        <tr class="tableRow">
          <td class="tableCell"><span class="codeSnip">&gt;=</span></td>
          <td class="tableCell"><span class="codeSnip">5 &gt;= 5 // true</span></td>
        </tr>
        <tr class="tableRow">
          <td class="tableCell"><span class="codeSnip">&lt;=</span></td>
          <td class="tableCell"><span class="codeSnip">3 &lt;= 5 // true</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

```csharp
int x = 10;
int y = 20;
bool result = x < y;
```

<hr class="dividerSection" />

## Logical Operators

<hr class="dividerSection" />

Logical operators are used to combine boolean expressions.

<div class="tablePairSideBySide">
  <div class="tableWrapper">
    <table class="notesTable">
      <thead>
        <tr class="tableHeader">
          <th class="tableCellHeader">Operator</th>
          <th class="tableCellHeader">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr class="tableRow">
          <td class="tableCell"><span class="codeSnip">&amp;&amp;</span></td>
          <td class="tableCell">Logical AND</td>
        </tr>
        <tr class="tableRow">
          <td class="tableCell"><span class="codeSnip">||</span></td>
          <td class="tableCell">Logical OR</td>
        </tr>
        <tr class="tableRow">
          <td class="tableCell"><span class="codeSnip">!</span></td>
          <td class="tableCell">Logical NOT</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="tableWrapper">
    <table class="notesTable">
      <thead>
        <tr class="tableHeader">
          <th class="tableCellHeader">Operator</th>
          <th class="tableCellHeader">Example</th>
        </tr>
      </thead>
      <tbody>
        <tr class="tableRow">
          <td class="tableCell"><span class="codeSnip">&amp;&amp;</span></td>
          <td class="tableCell"><span class="codeSnip">true &amp;&amp; false // false</span></td>
        </tr>
        <tr class="tableRow">
          <td class="tableCell"><span class="codeSnip">||</span></td>
          <td class="tableCell"><span class="codeSnip">true || false // true</span></td>
        </tr>
        <tr class="tableRow">
          <td class="tableCell"><span class="codeSnip">!</span></td>
          <td class="tableCell"><span class="codeSnip">!true // false</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

```csharp
bool a = true;
bool b = false;
bool andResult = a && b;
bool orResult = a || b;
bool notResult = !a;
```

<hr class="dividerSection" />

## Compound Assignment Operators

<hr class="dividerSection" />

Compound assignment operators combine an arithmetic operation with assignment.

<div class="tablePairSideBySide">
  <div class="tableWrapper">
    <table class="notesTable">
      <thead>
        <tr class="tableHeader">
          <th class="tableCellHeader">Operator</th>
          <th class="tableCellHeader">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr class="tableRow">
          <td class="tableCell"><span class="codeSnip">+=</span></td>
          <td class="tableCell">Add and assign</td>
        </tr>
        <tr class="tableRow">
          <td class="tableCell"><span class="codeSnip">-=</span></td>
          <td class="tableCell">Subtract and assign</td>
        </tr>
        <tr class="tableRow">
          <td class="tableCell"><span class="codeSnip">*=</span></td>
          <td class="tableCell">Multiply and assign</td>
        </tr>
        <tr class="tableRow">
          <td class="tableCell"><span class="codeSnip">/=</span></td>
          <td class="tableCell">Divide and assign</td>
        </tr>
        <tr class="tableRow">
          <td class="tableCell"><span class="codeSnip">%=</span></td>
          <td class="tableCell">Modulus and assign</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="tableWrapper">
    <table class="notesTable">
      <thead>
        <tr class="tableHeader">
          <th class="tableCellHeader">Operator</th>
          <th class="tableCellHeader">Example</th>
        </tr>
      </thead>
      <tbody>
        <tr class="tableRow">
          <td class="tableCell"><span class="codeSnip">+=</span></td>
          <td class="tableCell"><span class="codeSnip">x += 5; // x = x + 5</span></td>
        </tr>
        <tr class="tableRow">
          <td class="tableCell"><span class="codeSnip">-=</span></td>
          <td class="tableCell"><span class="codeSnip">x -= 5; // x = x - 5</span></td>
        </tr>
        <tr class="tableRow">
          <td class="tableCell"><span class="codeSnip">*=</span></td>
          <td class="tableCell"><span class="codeSnip">x *= 5; // x = x * 5</span></td>
        </tr>
        <tr class="tableRow">
          <td class="tableCell"><span class="codeSnip">/=</span></td>
          <td class="tableCell"><span class="codeSnip">x /= 5; // x = x / 5</span></td>
        </tr>
        <tr class="tableRow">
          <td class="tableCell"><span class="codeSnip">%=</span></td>
          <td class="tableCell"><span class="codeSnip">x %= 5; // x = x % 5</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

```csharp
int number = 10;
number += 5;
```

<hr class="dividerSection" />

## Increment and Decrement Operators

<hr class="dividerSection" />

The <span class="emphasis">increment operator</span> <span class="codeSnip">++</span> increases a variable by <span class="secondEmphasis">1</span>.

The <span class="emphasis">decrement operator</span> <span class="codeSnip">--</span> decreases a variable by <span class="secondEmphasis">1</span>.

```csharp
int number = 10;

number--;               // number is now 9
number = number - 1;    // number is now 8

number++;               // number is now 9
number = number + 1;    // number is now 10
```

<span class="codeSnip">number--</span> does the same thing as <span class="codeSnip">number = number - 1</span>, and <span class="codeSnip">number++</span> does the same thing as <span class="codeSnip">number = number + 1</span>.

These operators are used most often in loops, to count up or down one step at a time.

<div class="xrefBox">
  <span class="emphasis">See:</span>
  <a href="/languages/c-family/c-sharp/basics/control-flow/loops" target="_blank" rel="noopener noreferrer">
    C# → Basics → Control Flow → Loops (Counting with a For Loop)
  </a>
</div>

<hr class="dividerSection" />

## Ternary Operator (?:)

<hr class="dividerSection" />

The ternary operator is a shorthand for an if-else statement.

It evaluates a boolean expression and returns one of two values depending on whether the expression is true or false.

<hr class="dividerExample" />

#### Example: Ternary Operator Syntax

<hr class="dividerExample" />

<span class="codeSnip">condition ? value_if_true : value_if_false;</span>

```csharp
int score = 85;
string result = (score >= 60) ? "Pass" : "Fail";
```

<hr class="dividerSection" />

## Null Coalescing Operators (??, ??=)

<hr class="dividerSection" />

The null coalescing operator (<span class="codeSnip">??</span>) returns the left-hand operand if it is not null, otherwise it returns the right-hand operand.

The null coalescing assignment operator (<span class="codeSnip">??=</span>) assigns the right-hand operand to the left-hand operand only if the left-hand operand is null.

```csharp
string name = null;
string displayName = name ?? "Guest";

int? count = null;
count ??= 5;
```

<hr class="dividerSection" />

## Summary

<hr class="dividerSection" />

Operators are fundamental to writing expressions and logic in C#.

From simple assignment and arithmetic to comparisons and complex logical combinations, mastering operators will allow you to build flexible and powerful code.

<hr class="dividerSection" />

<div class="xrefNav">
  <div class="xrefItem">
    <a class="xrefBtn" href="/languages/c-family/c-sharp/basics/core-concepts/console">← Back</a>
    <div class="xrefTitle">C# - Basics - Core Concepts - Console</div>
  </div>

  <div class="xrefItem">
    <a class="xrefBtn" href="/languages/c-family/c-sharp/basics/core-concepts/arrays">Next →</a>
    <div class="xrefTitle">C# - Basics - Core Concepts - Arrays</div>
  </div>
</div>