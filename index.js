class Node {
    constructor(data, next=null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    //INSERT FIRST NODE
    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }
    //INSERT LAST NODE
    insertLast(data) {
        let node = new Node(data);
        let current;
        //IF EMPTY, MAKE HEAD
        if(!this.head) {
            this.head = node;
        } else {
            current = this.head;
            while(current.next) {
                current = current.next;
            }
            current.next = node;    
        }
        this.size++;
    }
    //INSERT AT INDEX
    insertAt(data, index) {
        //IF INDEX IS OUT OF RANGE
        if(index > 0 && index > this.size){
            return;
        }
        //IF FIRST INDEX
        if(index === 0) {
            this.insertFirst(data, this.head);
            return;
        }
        const node = new Node(data);
        let current, previous;
        
        //SET CURRENT TO FIRST
        current = this.head;
        let count = 0;

        while(count < index) {
            previous = current; //NODE BEFORE INDEX
            count++;
            current = current.next; //NODE AFTER INDEX
        }
        node.next = current;
        previous.next = node;
        this.size++;
    }
    //GET AT INDEX
    getAt(index) {
        let current = this.head;
        let count = 0;

        while(current) {
            if(count == index){
                console.log(current.data)
            }
            count++;
            current = current.next;
        }
        return null;
    }
    //REMOVE AT INDEX
    removeAt(index) {
        if(index > 0 && index > this.size) {
            return;
        }
        let current = this.head;
        let previous;
        let count = 0;

        //REMOVE FIRST
        if(index === 0) {
            this.head = current.next;
        } else {
            while(count < index) {
                count++;
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }  
        this.size--;
    }
    //CLEAR LIST
    clearList() {
        this.head = null;
        this.size = 0;
    }
    //PRINT LIST DATA
    printListData() {
        let current = this.head;
        while(current) {
            console.log(current.data)
            current = current.next;
        }
    }
}

const ll = new LinkedList();

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(400);

ll.clearList();

ll.printListData();
// ll.getAt(2);