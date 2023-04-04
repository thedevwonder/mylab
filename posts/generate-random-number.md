---
title: Generating Random Number in JavaScript
---

In many day-to-day software development, we may come across the task of creating random numbers inclusive and exclusive of a given range. For JavaScript, we may need to build a function to use it again and again, as and when required.
For the scope of this blog, we will consider the function to be applied on whole numbers, however the idea can be extended to decimal numbers as well.
Mathematically, for two whole numbers a and b, we have the following possible ranges:
1. (a,b)  exclusive of a and b
2. [a,b]  inclusive of a and b
3. [a, b) including a but not b
4. (a, b] including b but not a

***

The idea here is to use modulo to generate numbers in a specific range. Let's say we want to create random numbers between 0-9, we know that any number modulo 10 would give us the result between 0-9. For ex: 78 % 10 = 8. Similarly, 66 % 10 = 6.
Having this we can add any number let's say 10 to manipulate the range to 10-19.

### Case 1: both a and b are inclusive
we take the difference of a and b, so that our range becomes 0 - (b-a). And thus, we need to generate random 2 digit number **n** and do the following operation:
**n % (b - a + 1)** 
After that we add a to the result and get the desired range of a - b both inclusive

```
    const randomHelper = function(a, b) {
        const diff = b - a + 1
        const random = Math.floor(Math.random()*100)
        return a + (random % diff)
    }
```
### Case 2: a is inclusive or b is inclusive but not both
We reduce the diff by 1 to calculate this case.
```
    const randomHelper = function(a, b, isAInclusive, isBInclusive){
        const diff = b - a
        const random = Math.floor(Math.random()*100)
        if(isAInclusive) return a + (random % diff)
        if(isBInclusive) return a + 1 + (random % diff)
    }
```

### Case 3: both a and b are exclusive
We reduce the diff by further 1 to calculate this case
```
    const randomHelper = function(a, b){
        const diff = b - a - 1
        const random = Math.floor(Math.random()*100)
        return a + 1 + (random % diff)
    }
```

