## Creating dates

- JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).

- Date format and time zone conversions
There are several methods available to obtain a date in various formats, as well as to perform time zone conversions. Particularly useful are the functions that output the date and time in Coordinated Universal Time (UTC), the global standard time defined by the World Time Standard. (This time is historically known as Greenwich Mean Time, as UTC lies along the meridian that includes London—and nearby Greenwich—in the United Kingdom.) The user's device provides the local time.

- In addition to methods to read and alter individual components of the local date and time (such as getDay() and setHours()), there are also versions of the same methods that read and manipulate the date and time using UTC (such as getUTCDay() and setUTCHours()).
```
Constructor
Date()
```
When called as a function, returns a string representation of the current date and time. All arguments are ignored. The result is the same as executing new Date().toString().
```
new Date()
When called as a constructor, returns a new Date object.
```
```
Static methods
Date.now()
Returns the numeric value corresponding to the current time—the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC, with leap seconds ignored.
```
```
Date.parse()
Parses a string representation of a date and returns the number of milliseconds since 1 January, 1970, 00:00:00 UTC, with leap seconds ignored.
```