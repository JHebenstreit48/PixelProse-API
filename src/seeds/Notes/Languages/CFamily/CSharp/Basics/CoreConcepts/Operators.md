## Operators in C#

Operators in C# are symbols or keywords that specify operations to be performed on variables and values. Understanding operators is essential for writing expressions and making decisions in your code.

C# includes many types of operators, from basic assignment to logical and comparison operators.

---

## Dot Operator (.)

The dot operator is used to access the members (methods, properties, and fields) of a class or object.

This is similar to how JavaScript uses the dot operator. In both C# and JavaScript, the dot (.) acts like opening a toolbox — allowing you to retrieve or execute a specific tool (method or property) from a class or object.

Example in C#:

```csharp
Console.WriteLine("Hello, world!");
```

Here, Console is the class, and WriteLine is the method being accessed using the dot operator.

---

## Assignment Operator (=)

The assignment operator is used to assign a value to a variable.

```csharp
int number = 10;
```

It places the value on the right side into the variable on the left side.

---

## Arithmetic Operators

Arithmetic operators are used to perform mathematical calculations:

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Operator</th>
      <th class="tableCellHeader">Description</th>
      <th class="tableCellHeader">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">+</td>
      <td class="tableCell">Addition</td>
      <td class="tableCell">int sum = 5 + 3;</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">-</td>
      <td class="tableCell">Subtraction</td>
      <td class="tableCell">int diff = 5 - 3;</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">*</td>
      <td class="tableCell">Multiplication</td>
      <td class="tableCell">int product = 5 * 3;</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">/</td>
      <td class="tableCell">Division</td>
      <td class="tableCell">int quotient = 5 / 3;</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">%</td>
      <td class="tableCell">Modulus (remainder)</td>
      <td class="tableCell">int remainder = 5 % 3;</td>
    </tr>
  </tbody>
</table>

```csharp
int a = 10;
int b = 3;
int sum = a + b;
int diff = a - b;
int product = a * b;
int quotient = a / b;
int remainder = a % b;
```

---

## Comparison Operators

Comparison operators are used to compare two values and return a boolean result (true or false):

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Operator</th>
      <th class="tableCellHeader">Description</th>
      <th class="tableCellHeader">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">==</td>
      <td class="tableCell">Equal to</td>
      <td class="tableCell">5 == 5 // true</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">!=</td>
      <td class="tableCell">Not equal to</td>
      <td class="tableCell">5 != 3 // true</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">&gt;</td>
      <td class="tableCell">Greater than</td>
      <td class="tableCell">5 &gt; 3 // true</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">&lt;</td>
      <td class="tableCell">Less than</td>
      <td class="tableCell">5 &lt; 3 // false</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">&gt;=</td>
      <td class="tableCell">Greater than or equal to</td>
      <td class="tableCell">5 &gt;= 5 // true</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">&lt;=</td>
      <td class="tableCell">Less than or equal to</td>
      <td class="tableCell">3 &lt;= 5 // true</td>
    </tr>
  </tbody>
</table>

```csharp
int x = 10;
int y = 20;
bool result = x < y;
```

---

## Logical Operators

Logical operators are used to combine boolean expressions:

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Operator</th>
      <th class="tableCellHeader">Description</th>
      <th class="tableCellHeader">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">&amp;&amp;</td>
      <td class="tableCell">Logical AND</td>
      <td class="tableCell">true &amp;&amp; false // false</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">||</td>
      <td class="tableCell">Logical OR</td>
      <td class="tableCell">true || false // true</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">!</td>
      <td class="tableCell">Logical NOT</td>
      <td class="tableCell">!true // false</td>
    </tr>
  </tbody>
</table>

```csharp
bool a = true;
bool b = false;
bool andResult = a && b;
bool orResult = a || b;
bool notResult = !a;
```

---

## Compound Assignment Operators

Compound assignment operators combine an arithmetic operation with assignment:

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Operator</th>
      <th class="tableCellHeader">Description</th>
      <th class="tableCellHeader">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">+=</td>
      <td class="tableCell">Add and assign</td>
      <td class="tableCell">x += 5; // x = x + 5</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">-=</td>
      <td class="tableCell">Subtract and assign</td>
      <td class="tableCell">x -= 5; // x = x - 5</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">*=</td>
      <td class="tableCell">Multiply and assign</td>
      <td class="tableCell">x *= 5; // x = x * 5</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">/=</td>
      <td class="tableCell">Divide and assign</td>
      <td class="tableCell">x /= 5; // x = x / 5</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">%=</td>
      <td class="tableCell">Modulus and assign</td>
      <td class="tableCell">x %= 5; // x = x % 5</td>
    </tr>
  </tbody>
</table>

```csharp
int number = 10;
number += 5;
```

---

## Ternary Operator (?:)

The ternary operator is a shorthand for an if-else statement. It evaluates a boolean expression and returns one of two values depending on whether the expression is true or false.

Syntax:

condition ? value_if_true : value_if_false;

```csharp
int score = 85;
string result = (score >= 60) ? "Pass" : "Fail";
```

---

## Null Coalescing Operators (??, ??=)

The null coalescing operator (??) returns the left-hand operand if it is not null; otherwise, it returns the right-hand operand.

The null coalescing assignment operator (??=) assigns the right-hand operand to the left-hand operand only if the left-hand operand is null.

```csharp
string name = null;
string displayName = name ?? "Guest";

int? count = null;
count ??= 5;
```

---

## Summary

Operators are fundamental to writing expressions and logic in C#. From simple assignment and arithmetic to comparisons and complex logical combinations, mastering operators will allow you to build flexible and powerful code.
