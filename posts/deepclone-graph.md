---
title: Deep Clone a Graph. But wait..?
---

### [draft version]

A deep clone of a graph is a clone where the clone nodes do not reference the original nodes. For ex:
```json
let object1 = { "a":1 }
```
We have the original node as object1 with property a, value 1.
```
let object2 = object1
```
In this case we do not copy the properties of object1 to object2, rather pass the object reference. That means now object2 and object1 are sharing the same reference and any change in object2 will cause a change in object1 and vice-versa.
Take this example:
```
object1.a = 20
console.log(object1.a)
console.log(object2.a)
```
**Output**
<br/>
20
<br/>
20
<br/>

Simple way to do deep copy would be to use spread operator.
```json
let object2 = {...object1}
object1.a = 30
console.log(object1.a)
console.log(object2.a)
```
**Output**
<br/>
30
<br/>
20
<br/>
Now coming to the graph. Assuming connected graph (every node is either directly or indirectly connected to all the other nodes).
But how do we even create a graph in JS? new operator in JS creates an object from any function/class. Therefore, 
```
const Node = function(val, neoghbors = []){
    this.val = val
    this.neighbors = neighbors
}
const node = new Node(5)
```
will create a new object named node.
