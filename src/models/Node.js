export class Node {
 
  #next
  #prev
    constructor(element) {
        this.element = element;
        this.#next = null;
        this.#prev = null;
    }

    getElement() {
      return this.element;
    }
  
    setElement(element) {
      this.element = element;
    }
  
    getNext() {
      return this. #next;
    }
  
    setNext(node) {
      this. #next= node;
    }
  
    getPrev() {
      return this.#prev;
    }
  
    setPrev(node) {
      this.#prev = node;
    }
  
  }