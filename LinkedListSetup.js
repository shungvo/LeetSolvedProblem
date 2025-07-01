function node(val, next) {
    this.val = val===undefined ? 0 : val;
    this.next = next===undefined ? null : next
} 

var node1 = new node(1)
var node2 = new node(2)
var node3 = new node(3)

node1.next =  node2
node2.next = node3

const traverse = ( node ) => {
    var currNode = node
    while(currNode) {
        console.log(currNode.val)
        currNode = currNode.next
    }
}
traverse(node1)
console.log(node1)