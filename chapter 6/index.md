Chapter 6

Queues
We’re told: wait our turn. Queues enforce this, as Sequential data structures. Values emerge in order we add them. Like waiting in line at a store, first value to enter is the first to exit (first customer to wait in line is the first to get a tasty treat!). For this reason, Queues contain only a few methods:

enqueue(val): add val to Queue
dequeue(): remove & return front value
front(): return (not remove) first val
contains(val): Queue contains val?
isEmpty(): Queue contains no values?
size(): return num of vals in Queue

We can implement Queues in many ways; we will create a Queue using singly linked list, starting with:

function SLNode(value) {
    this.val = value;
    this.next = null;
}
function SLQueue() {
    var head = null; // these point
    var tail = null; // ->Node objs
}

1. [x] SLQueue: Enqueue
2. [x] SLQueue: Front
3. [x] SLQueue: Is Empty
4. [x] SLQueue: Compare Queues
5. [x] SLQueue: Dequeue
6. [x] SLQueue: Contains
7. [x] SLQueue: Size
8. [x] SLQueue: Remove Minimums
9. [] SLQueue: Interleave Queue

Stacks
Stacks and Queues are companion data structures. Both are sequential, meaning they manage data according to the order in which they were added. A Queue data structure operates by a principle of “First-In becomes First-Out” (FIFO); a Stack is quite the opposite (Last-In, First-Out or LIFO).

Consider a pile of papers. With this stack of papers, we can only get a good look at the top of the pile. When we add another paper, that page becomes the only one visible. We can only add and remove papers from the top. We cannot add a page mid-stack (just as one should not cut into the middle of a queue at the ice cream store). In this way, Stacks and Queues mirror one another. Their methods correspond: substitute push / pop / top for enqueue / dequeue / front, and they become identical.

Stack Implementation Based on Array
Build essential methods push, pop, top, contains, isEmpty, size for ArrStack using an array. Make sure you designate the underlying array as private (declared var), not public (attached to this).

10. [] ArrStack: Push
11. [] ArrStack: Top
12. [] ArrStack: Is Empty
13. [] ArrStack: Pop
14. [] ArrStack: Contains
15. [] ArrStack: Size

Now that you’re warmed up, create a list-based class SLStack, with a singly linked list:

16. [] SLStack: Push
17. [] SLStack: Top
18. [] SLStack: Is Empty
19. [] SLStack: Pop
20. [] SLStack: Contains
21. [] SLStack: Size
22. [] Compare Stacks

In the code you’ve written the past few days, you may have seen the significant similarity between Queues and Stacks. Today, along with other challenges, we will use that similarity to our advantage, reducing our code footprint.

23. [] Stack: Copy
24. [] Create Queue Using Two Stacks
25. [] Queue: Is Palindrome
26. [] Stack / Queue Code-Sharing
27. [] Deque: Implementation
28. [] Stack: Remove Stack Min 

We created an SLQueue and an SLStack. We created an ArrStack, but no ArrQueue. Why not? Singly linked lists have a beginning, a direction and an end; using a list to implement a Queue feels natural. What if we wanted to use an underlying array? Why would we do this? In high-performance scenarios, when working with our queue we may not be able to allocate memory for new node objects. Although we could allocate a large number of empty node objects ahead of time and keep them in a resource pool, what if instead we built a Queue class using an array as the underlying data structure?

Arrays are a natural choice for a Stack data structure, since Stacks add and remove from the same end, just like Stacks do. They even both have push() and pop() methods. To use an array underneath a Queue, however, there is a wrinkle – at least after a while. With both Queue and Stack, as we add elements our array gets longer, since elements are placed at the end of the array. With a Stack, as we remove elements our array grows and shrinks back like an accordion, since they are removed from the end (the [0] side of the array never changes). This isn’t the case with a Queue: we add elements to the end, but we remove them from the beginning. We will need to track the head index and the tail index. Unfortunately (and here is the wrinkle), over time as elements are added and removed, our array will get very large, as our head and tail indices grow higher and higher. This eats up memory even worse than allocating (and freeing!) ListNode objects. What to do? Start by capping our array’s size!

Circular Queues
When queue’s tail or head approaches size, wrap around to [0] and continue. tail and head shouldn’t meet – one can’t “lap” the other. Instead, enqueue(val) fails: a full queue. Ditto dequeue(), if empty. Constructor requires a size argument. Starting there, implement a circular queue!

function CirQueue(cap) {
    var head = 0;
    var tail = 0;
    var capacity = cap;
    var arr = [];
}

29. [] CirQueue: Front
30. [] CirQueue: Is Empty
31. [] CirQueue: Is Full
32. [] CirQueue: Size
33. [] CirQueue: Enqueue
34. [] CirQueue: Dequeue
35. [] CirQueue: Contains
36. [] CirQueue: Grow

We know you can’t get enough and would wait in line to receive a stack of additional challenges, so here are a few more! Solve them using the data structures as directed.

37. [] Reorder Absolute Queue
38. [] Stack: Partition
39. [] Stack: Is Sorted
40. [] Stack: Switch Pairs
41. [] Stack: Mirror
42. [] Weak Finger
43. [] Short Answer Questions: Queues and Stacks
44. [] Weekend Challenge: Stacks and Queues

Queues and Stacks Review

Data structures hold and manage data. Each data structure is optimized for some specific use and as a result is less optimized for other uses. In this chapter, we studied data structures that are good abstract data types. An abstract data type satisfies a specific external interface (such as push, pop, top, isEmpty, size and contains) but can be internally implemented in different ways (e.g. with an Array or with an SList).

Queues and stacks are abstract data types that manage data sequentially, based on the order in which this data was added. Queues manage data in a FIFO (first-in, first-out) manner, and stacks manage data in a LIFO (last-in, first-out) manner. Queues are considered inherently fair data structures and commonly used when managing a running list of tasks or objects. Stacks are invaluable when you pause what you are doing to handle something new, before returning to the task at hand.

Working with queue and stack objects (‘reverse this queue, using only one other queue’) has long been a staple of entry-level software interviews, as they force you to think abstractly but also work with basic objects to build more complex behaviors. Queue/stack questions are not as common as they once were (generally interview questions are more advanced nowadays). Don’t fret though – we are only a fraction of the way through our algorithm journey as well. Keep working hard, and you’ll be fluent in abstract data types (and other data structures) in no time!