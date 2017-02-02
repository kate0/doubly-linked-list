const Node = require('./node');

class LinkedList {

    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        let node = new Node(data);

        if (this.length) {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        } else {
            this._head = node;
            this._tail = node;
        }

        this.length++;

        return this;
    }

    head() {
        return this._head ? this._head.data : null;
    }

    tail() {
        return this._tail ? this._tail.data : null;
    }

    at(index) {
        var cNode = this._head,
            count = 0;

        while (count < index) {
            cNode = cNode.next;
            count++;
        }

        return cNode.data;
    }

    insertAt(index, data) {
        var cNode = this._head,
            nNode = new Node(data),
            count = 0;
        if (!cNode) {
            this.append(data);
        } else {
            while (count < index) {
                cNode = cNode.next;
                count++;
            }

            nNode.prev = cNode.prev;
            nNode.next = cNode;
            cNode.prev.next = nNode;
            cNode.prev = nNode;

            this.length++;
        }

        return this;
    }

    isEmpty() {
        return ( this.length === 0 ) ? true : false;  
    }

    clear() {
        this._head = null;
        this._tail = null;
        this.length = 0;

        return this;
    }

    deleteAt(index) {
        var cNode = this._head,
            count = 0;

        if (index != 0) {
            while (count < index) {
                cNode = cNode.next;
                count++;
            } 

            cNode.prev.next = cNode.next;
            cNode.next.prev = cNode.prev;
        } else {
            if ( this.length == 1 ) {
                this.clear();
            } else {
                if (index == 0) {
                    this._head = this._head.next;
                    this._head.prev = null;
                }
                if (index == this.length - 1) {
                    this._tail = this._tail.prev;
                    this._tail.next = null;
                }
            }
        }
        return this;
    }

    reverse() {
        while (true) {
            this._head.prev = [this._head.next, this._head.next = this._head.prev][0];

            if (!this._head.prev) break;
            else this._head = this._head.prev;
        }
        
        var cNode = this._head,
            count = 1;

        while (count < this.length) {
            cNode = cNode.next;
            count++;
        }

        this._tail = cNode;

        return this;
    }

    indexOf(data) {
        var cNode = this._head,
            index = 0;

        while (cNode.data != data) {
            if (!cNode.next) return -1;
            else {
                cNode = cNode.next;
                index++;
            }
        }

        return index;
    }
}

module.exports = LinkedList;