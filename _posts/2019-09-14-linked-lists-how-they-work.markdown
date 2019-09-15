---
layout: post
title:  "Linked lists - Explaining how they work"
---

Learning goals:

1. Be able to state how to iterate to the end of a linked list.

2. Be able to read code that adds an item to the **middle** of a linked list, and explain how it works.

Recommendation:

1. Read this article: <a href="https://www.interviewcake.com/concept/javascript/linked-list">https://www.interviewcake.com/concept/javascript/linked-list</a>

2. Open your code editor, and **type in** the code in this link: <a href="/assets/2019-09-14-linked-lists-how-they-work/sample.js">sample.js</a>

3. Use the JS console to run: `iterateAndPrint(makeExampleList())`

4. Use the JS console to run:

```
var l = makeExampleList()
addToMiddle(l)
iterateAndPrint(l)
```

5. Discuss how all four functions work with your instructor. Consider specifically the question of if `addToMiddle` returns a value, and if not, why not.

Bonus learning goals:

1. Be able to state one advantage of linked lists over arrays in terms of performance (runtime or memory).

2. Be able to state one advantage of arrays over linked lists in terms of performance (runtime or memory).

3. Be able to explain how you would write a function that prints just the 3rd element of a linked list (assuming it has a third element).
