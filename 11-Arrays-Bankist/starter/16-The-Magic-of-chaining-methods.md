## The magic of chaining methods

So up until now, we have been using the map filter and reduce methods kind of in isolation. However, we can take this one step further by chaining all these methods one after another. 
```
const totalDepositsUSD = movements
.filter(mov => mov > 0)
.map(mov => mov * eurToUSD)
.reduce(acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);
```
