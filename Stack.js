// Create a private method using WeakMap method.
const _items = new WeakMap();

class Stack {
  constructor() {
    // Set an empty array.
    _items.set(this, []);
  }

  // Add an object to the end of the array.
  push(obj) {
    _items.get(this).push(obj);
  }

  // Remove the object on top of stack.
  pop() {
    const items = _items.get(this);
    if (items.length === 0) throw new Error('Stack is empty.');
    return items.pop();
  }

  // Method to view what object is at the top of stack.
  peek() {
    const items = _items.get(this);
    if (items.length === 0) throw new Error('Stack is empty');
    return items[items.length - 1];
  }

  // Returns the count of the objects in the stack array.
  get count() {
    return _items.get(this).length;
  }
}

const stack = new Stack();
