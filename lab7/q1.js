function Node(data) {
    this.data = data;
    this.next = null;
  }
  
  function LinkedList() {
    this.head = null;
  
    this.add = function (data) {
      const newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
    };
  
    this.remove = function (data) {
      if (!this.head) {
        return;
      }
  
      if (this.head.data === data) {
        this.head = this.head.next;
        return;
      }
  
      let current = this.head;
      let prev = null;
  
      while (current && current.data !== data) {
        prev = current;
        current = current.next;
      }
  
      if (!current) {
        return;
      }
  
      prev.next = current.next;
    };
  
    this.print = function () {
      let result = 'LinkedList{';
      let current = this.head;
  
      while (current) {
        result += current.data;
        if (current.next) {
          result += ',';
        }
        current = current.next;
      }
  
      result += '}';
      console.log(result);
    };
}


let linkedlist = new LinkedList();

linkedlist.add(1);
linkedlist.add(2);
linkedlist.add(3);

linkedlist.print(); //Expected Result: LinkedList{1,2,3};

linkedlist.remove(2);

linkedlist.print(); //Expected Result: LinkedList{1,3};