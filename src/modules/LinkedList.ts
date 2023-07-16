import { LinkedListNode } from "../nodes/LinkedListNode";

export class LinkedList<T> {
    private head: LinkedListNode<T> | null;
    private tail: LinkedListNode<T> | null;
    private length: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    /**
     * Adds a new node with the specified value to the tail of the linked list.
     * @param value - The value to be added to the tail of the linked list.
     */
    public addToTail(value: T): void {
        const newNode = new LinkedListNode(value);

        if (!this.head) {
            // If the linked list is empty, the new node becomes both the head and the tail.
            this.head = newNode;
            this.tail = newNode;
        } else {
            if (this.tail) {
                // Append the new node to the current tail and update the tail reference.
                this.tail.next = newNode;
                this.tail = newNode;
            }
        }

        this.length++;
    }

    /**
     * Removes the node with the specified value from the linked list (first occurrence only).
     * @param value - The value to be removed from the linked list.
     * @returns true if the value was found and removed, false otherwise.
     */
    public remove(value: T): boolean {
        let currentNode = this.head;
        let previousNode: LinkedListNode<T> | null = null;

        while (currentNode) {
            if (currentNode.value === value) {
                // If the value is found, update the next reference of the previous node.
                if (previousNode) {
                    previousNode.next = currentNode.next;
                } else {
                    // If the node to remove is the head, update the head reference.
                    this.head = currentNode.next;
                }

                // If the node to remove is the tail, update the tail reference.
                if (currentNode === this.tail) {
                    this.tail = previousNode;
                }

                this.length--;
                return true;
            }

            previousNode = currentNode;
            currentNode = currentNode.next;
        }

        return false;
    }

    /**
     * Returns the number of nodes in the linked list.
     * @returns The length of the linked list.
     */
    public getLength(): number {
        return this.length;
    }

    /**
     * Prints the values of each node in the linked list.
     */
    public print(): void {
        let currentNode = this.head;
        while (currentNode) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
    }
}
