## Working with BigInt

- BigInt values represent numeric values which are too large to be represented by the number primitive.

### Description
- A BigInt value, also sometimes just called a BigInt, is a bigint primitive, created by appending n to the end of an integer literal, or by calling the BigInt() function (without the new operator) and giving it an integer value or string value.
```
const previouslyMaxSafeInteger = 9007199254740991n

const alsoHuge = BigInt(9007199254740991)
// 9007199254740991n

const hugeString = BigInt("9007199254740991")
// 9007199254740991n

const hugeHex = BigInt("0x1fffffffffffff")
// 9007199254740991n

const hugeOctal = BigInt("0o377777777777777777")
// 9007199254740991n

const hugeBin = BigInt("0b11111111111111111111111111111111111111111111111111111")
// 9007199254740991n
```

- BigInt values are similar to Number values in some ways, but also differ in a few key matters: A BigInt value cannot be used with methods in the built-in Math object and cannot be mixed with a Number value in operations; they must be coerced to the same type. Be careful coercing values back and forth, however, as the precision of a BigInt value may be lost when it is coerced to a Number value.

### Type information

When tested against typeof, a BigInt value (bigint primitive) will give "bigint":
```
typeof 1n === 'bigint'           // true
typeof BigInt('1') === 'bigint'  // true
Copy to Clipboard
A BigInt value can also be wrapped in an Object:

typeof Object(1n) === 'object'  // true
```