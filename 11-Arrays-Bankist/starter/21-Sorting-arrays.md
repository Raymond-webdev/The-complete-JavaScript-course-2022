## The sorting array method

- The sort() method sorts the elements of an array in place and returns the reference to the same array, now sorted. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

The time and space complexity of the sort cannot be guaranteed as it depends on the implementation.
```
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// Expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// Expected output: Array [1, 100000, 21, 30, 4]
```
```
Syntax
// Functionless
sort()

// Arrow function
sort((a, b) => { /* … */ } )

// Compare function
sort(compareFn)

// Inline compare function
sort(function compareFn(a, b) { /* … */ })
Copy to Clipboard
Parameters
compareFn Optional
Specifies a function that defines the sort order. If omitted, the array elements are converted to strings, then sorted according to each character's Unicode code point value.

a
The first element for comparison.

b
The second element for comparison.

Return value
The reference to the original array, now sorted. Note that the array is sorted in place, and no copy is made.

Description
If compareFn is not supplied, all non-undefined array elements are sorted by converting them to strings and comparing strings in UTF-16 code units order. For example, "banana" comes before "cherry". In a numeric sort, 9 comes before 80, but because numbers are converted to strings, "80" comes before "9" in the Unicode order. All undefined elements are sorted to the end of the array.

The sort() method preserves empty slots. If the source array is sparse, the empty slots are moved to the end of the array, and always come after all the undefined.

Note: In UTF-16, Unicode characters above \uFFFF are encoded as two surrogate code units, of the range \uD800 - \uDFFF. The value of each code unit is taken separately into account for the comparison. Thus the character formed by the surrogate pair \uD855\uDE51 will be sorted before the character \uFF3A.
```
```
If compareFn is supplied, all non-undefined array elements are sorted according to the return value of the compare function (all undefined elements are sorted to the end of the array, with no call to compareFn).

compareFn(a, b) return value	sort order
> 0	sort a after b
< 0	sort a before b
=== 0	keep original order of a and b
So, the compare function has the following form:

function compareFn(a, b) {
  if (a is less than b by some ordering criterion) {
    return -1;
  }
  if (a is greater than b by the ordering criterion) {
    return 1;
  }
  // a must be equal to b
  return 0;
}
```