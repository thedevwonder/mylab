---
title: Deep Clone a Graph. But wait..?
---

A deep clone of a graph is a clone where the clone nodes do not share the reference with the original nodes. For ex:
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
But how do we even create a graph in JS? new operator in JS creates an object out of any function/class. Therefore, 
```
const Node = function(val, neighbors = []){
    this.val = val
    this.neighbors = neighbors
}
const node = new Node(5)
```
will create a new object named node.

## Approach
We know a new operator will create a new object reference.

 1. create a new Node object which is a deep clone of the root node, but with empty neighbors
 2. create a map with key as original node and value as the clone node.
 3. iterate through neighbors and recursively call them. Store the result of the clones in the map and return if already present.
 4. push the clones of neighbors in the root clone and return the result.

 ***____Here is a slight nuance____***, the correct way to store an object in map is by using map.set and not map[], which is the usual notation for setting an object key value. 
 <br/>
 __Reason?__ when you store an object by using map[object], JS converts object into a string, similar to what would happen if you applied toString method to any object. ( Try this: `let object = {a:1}; object.toString()` ) This creates an object string `'[object Object]'`. since the string which literally has the value `'[object, Object]'`, is not unique hence it is not suitable for a key. You can get the value of node using map.get function.

 ## Code
 ```
 var helper = function(node, dp){
    if(node == null || !node.val) return node;
    if(dp.get(node)) return dp.get(node)
    const neighbors = []
    const newNode = new Node(node.val, neighbors)
    dp.set(node, newNode)
    for(let i=0;i<node.neighbors.length;i++){
        const temp = helper(node.neighbors[i], dp)
        newNode.neighbors.push(temp);
    }
    return newNode;
}
var cloneGraph = function(node) {
    const dp = new Map()
    return helper(node, dp)
};

```