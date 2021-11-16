What is an array?
What types of values can be held in an array?
What happens if you try to contain values of different data types
in an array?
What is the index of the first element in an array?
What is the index of the last element in an array?
If you control an array, what is the easiest way to determine the
number of values?
When would the above method not work well, and what must
you do in that case?
What is an array?
What types of values can be held in an array?
What happens if you try to contain values of different data types
in an array?
What is the index of the first element in an array?
What is the index of the last element in an array?
If you control an array, what is the easiest way to determine the
number of values?
When would the above method not work well, and what must
you do in that case?

Arrays Review
This chapter covered JavaScript arrays in more depth. We showed
how to declare and initialize arrays, how to read from specific
indices, and how to write values into arrays – both overwriting
existing values, as well as writing into new index locations that likely
extend an array’s length. We made significant use of the property
.length that is present in every array, and we discussed how this
property is usually (but not always) equal to the number of elements
present in the array. Specifically, we mentioned that arrays can be
sparse, which means we can configure an array so that certain index
locations have not yet been written with any value (and hence
contain undefined). We rehearsed numerous times the iteration of an
array, using a FOR loop. We touched on the subject of function
parameters that are passed by reference, and how that changes a
function from purely returning advisory information to making
permanent changes in the array (or another parameter). We did an
exhaustive walkthrough of debugging FOR loops with arrays. Finally,
we built on our new understanding of JavaScript data types, and
discussed the values that (across type conversion) all equate to false
– the six “falsy” values.