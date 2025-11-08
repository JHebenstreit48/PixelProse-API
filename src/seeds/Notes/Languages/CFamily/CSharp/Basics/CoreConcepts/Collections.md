## Collections in C#

Collections in C# are used to store groups of related objects. They are a fundamental part of most applications and help in organizing and manipulating data efficiently.

C# provides several types of collections, each suited for specific scenarios.

---

## Arrays

An array is a fixed-size, strongly-typed collection of elements.

```csharp
int[] numbers = new int[3];
numbers[0] = 1;
numbers[1] = 2;
numbers[2] = 3;
```

You can also initialize an array at the time of declaration:

```csharp
int[] numbers = { 1, 2, 3 };
```

Arrays are useful when you know the number of elements in advance and that number will not change.

---

## Comparison: Arrays in C# vs JavaScript

Although both C# and JavaScript have arrays, there are important differences:

<table class="notesTable">
  <thead>
    <tr class="tableHeader">
      <th class="tableCellHeader">Feature</th>
      <th class="tableCellHeader">C# Arrays</th>
      <th class="tableCellHeader">JavaScript Arrays</th>
    </tr>
  </thead>
  <tbody>
    <tr class="tableRow">
      <td class="tableCell">Type Safety</td>
      <td class="tableCell">Strongly typed — all elements must be the same type</td>
      <td class="tableCell">Loosely typed — elements can be of different types</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Size</td>
      <td class="tableCell">Fixed size after declaration</td>
      <td class="tableCell">Dynamic — can grow and shrink</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Initialization</td>
      <td class="tableCell">Must specify size or provide elements</td>
      <td class="tableCell">Can be empty or populated at any time</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Methods</td>
      <td class="tableCell">Limited — mainly basic operations (Length, Copy)</td>
      <td class="tableCell">Rich set of methods (push, pop, map, filter, etc.)</td>
    </tr>
    <tr class="tableRow">
      <td class="tableCell">Memory Efficiency</td>
      <td class="tableCell">More efficient — fixed memory allocation</td>
      <td class="tableCell">Less efficient — dynamic resizing incurs overhead</td>
    </tr>
  </tbody>
</table>

In C#, if you need dynamic sizing or rich functionality similar to JavaScript arrays, you typically use `List<T>` instead of an array.

```csharp
using System.Collections.Generic;

List<int> dynamicList = new List<int> { 1, 2, 3 };
dynamicList.Add(4);
```

JavaScript Example:

```javascript
let numbers = [1, 2, 3];
numbers.push(4);
```

---

## Lists

A list is a dynamic array provided by the `List<T>` class in the `System.Collections.Generic` namespace. Lists can grow and shrink as needed.

```csharp
using System.Collections.Generic;

List<string> names = new List<string>();
names.Add("Alice");
names.Add("Bob");
names.Add("Charlie");
```

Lists are preferred when you need a flexible-size collection with fast access by index.

---

## Dictionaries

A dictionary is a collection of key-value pairs. It allows for fast lookups based on unique keys.

```csharp
using System.Collections.Generic;

Dictionary<string, int> ages = new Dictionary<string, int>();
ages["Alice"] = 30;
ages["Bob"] = 25;
ages["Charlie"] = 35;
```

Dictionaries are ideal when you want to associate unique keys with specific values.

---

## Stacks

A stack is a Last-In-First-Out (LIFO) collection. The last item added is the first to be removed.

```csharp
using System.Collections.Generic;

Stack<int> stack = new Stack<int>();
stack.Push(1);
stack.Push(2);
stack.Push(3);

int topItem = stack.Pop(); // Returns 3
```

Stacks are useful for undo functionality, parsing expressions, and algorithms like depth-first search.

---

## Queues

A queue is a First-In-First-Out (FIFO) collection. The first item added is the first to be removed.

```csharp
using System.Collections.Generic;

Queue<int> queue = new Queue<int>();
queue.Enqueue(1);
queue.Enqueue(2);
queue.Enqueue(3);

int firstItem = queue.Dequeue(); // Returns 1
```

Queues are used in scenarios like task scheduling, order processing, and breadth-first search algorithms.

---

## Iterating Through Collections

You can use a `foreach` loop to iterate through arrays, lists, stacks, queues, and many other collection types.

```csharp
List<string> names = new List<string> { "Alice", "Bob", "Charlie" };

foreach (string name in names)
{
    Console.WriteLine(name);
}
```

Iteration allows you to perform operations on each element in a collection.

---

## Collection Initialization and Manipulation

Collections can be initialized with data at the time of creation and can be manipulated through methods like `Add`, `Remove`, `Clear`, etc.

```csharp
List<int> numbers = new List<int> { 1, 2, 3, 4, 5 };
numbers.Remove(3);
numbers.Add(6);
numbers.Clear();
```

Understanding how to properly initialize and manipulate collections is essential for building efficient programs.

---

## Summary

Collections in C# provide powerful and flexible ways to group, store, and manage data. Choosing the right type of collection depends on the specific requirements of your application, such as performance, order, and access pattern needs.
