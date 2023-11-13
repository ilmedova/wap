class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    add(value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
  
    remove(value) {
      if (!this.head) {
        return;
      }
  
      if (this.head.value === value) {
        this.head = this.head.next;
        return;
      }
  
      let current = this.head;
      while (current.next && current.next.value !== value) {
        current = current.next;
      }
  
      if (current.next && current.next.value === value) {
        current.next = current.next.next;
      }
    }
  
    print() {
      let current = this.head;
      let result = "LinkedList{";
      while (current) {
        result += current.value;
        if (current.next) {
          result += ",";
        }
        current = current.next;
      }
      result += "}";
      console.log(result);
    }
  }
  
  // Example usage
  const linkedlist = new LinkedList();
  linkedlist.add(1);
  linkedlist.add(2);
  linkedlist.add(3);
  
  linkedlist.print(); // Output: LinkedList{1,2,3}
  
  linkedlist.remove(2);
  linkedlist.print(); // Output: LinkedList{1,3}
  