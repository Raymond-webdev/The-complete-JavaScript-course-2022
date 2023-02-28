## Internationalizing dates

 Intl.DateTimeFormat

The Intl.DateTimeFormat object enables language-sensitive date and time formatting.
```
const date = new Date(Date.UTC(2020, 11, 20, 3, 23, 16, 738));
// Results below assume UTC timezone - your results may vary

// Specify default date formatting for language (locale)
console.log(new Intl.DateTimeFormat('en-US').format(date));
// Expected output: "12/20/2020"

// Specify default date formatting for language with a fallback language (in this case Indonesian)
console.log(new Intl.DateTimeFormat(['ban', 'id']).format(date));
// Expected output: "20/12/2020"

// Specify date and time format using "style" options (i.e. full, long, medium, short)
console.log(new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeStyle: 'long', timeZone: 'Australia/Sydney' }).format(date));
// Expected output: "Sunday, 20 December 2020 at 14:23:16 GMT+11"
```
Constructor
```
Intl.DateTimeFormat()
Creates a new Intl.DateTimeFormat object.
```
Static methods
```
Intl.DateTimeFormat.supportedLocalesOf()
```
Returns an array containing those of the provided locales that are supported without having to fall back to the runtime's default locale.

Instance methods
```
Intl.DateTimeFormat.prototype.format()
```
Getter function that formats a date according to the locale and formatting options of this DateTimeFormat object.
```
Intl.DateTimeFormat.prototype.formatToParts()
```
Returns an Array of objects representing the date string in parts that can be used for custom locale-aware formatting.
```
Intl.DateTimeFormat.prototype.resolvedOptions()
```
Returns a new object with properties reflecting the locale and formatting options computed during initialization of the object.
```
Intl.DateTimeFormat.prototype.formatRange()
```
This method receives two Dates and formats the date range in the most concise way based on the locale and options provided when instantiating DateTimeFormat.
```
Intl.DateTimeFormat.prototype.formatRangeToParts()
```
This method receives two Dates and returns an Array of objects containing the locale-specific tokens representing each part of the formatted date range.