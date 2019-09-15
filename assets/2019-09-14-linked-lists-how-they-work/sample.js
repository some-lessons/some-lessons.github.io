function Node(value, next) {
    return {value: value, next: next};
}

function makeExampleList() {
    // Create a linked list of length three, starting at `start`.
    const start = Node('hello', null);
    const middle = Node('world', null);
    start.next = middle;
    const end = Node('!', null);
    middle.next = end;
    return start;
}

function iterateAndPrint(startNode) {
    let currentNode = startNode;
    while (currentNode !== null) {
        console.log(currentNode.value);
        currentNode = currentNode.next;        
    }
}

function addToMiddle(startNode) {
    const newSecond = Node('there');
    const oldSecond = startNode.next;
    startNode.next = newSecond;
    newSecond.next = oldSecond;
}