/* eslint-disable @typescript-eslint/no-empty-function */
import { LinkedList } from "../modules/LinkedList";

describe("LinkedList", () => {
  let linkedList: LinkedList<number>;

  beforeEach(() => {
    linkedList = new LinkedList<number>();
  });

  it("should add values to the tail of the linked list", () => {
    linkedList.addToTail(1);
    linkedList.addToTail(2);
    linkedList.addToTail(3);

    expect(linkedList.getLength()).toBe(3);
  });

  it("should remove a node with the specified value from the linked list", () => {
    linkedList.addToTail(1);
    linkedList.addToTail(2);
    linkedList.addToTail(3);

    const removed = linkedList.remove(2);

    expect(removed).toBe(true);
    expect(linkedList.getLength()).toBe(2);
  });

  it("should return false when trying to remove a value not present in the linked list", () => {
    linkedList.addToTail(1);
    linkedList.addToTail(2);
    linkedList.addToTail(3);

    const removed = linkedList.remove(4);

    expect(removed).toBe(false);
    expect(linkedList.getLength()).toBe(3);
  });

  it("should print the values of each node in the linked list", () => {
    const consoleSpy = jest.spyOn(console, "log");
    consoleSpy.mockImplementation(() => {});

    linkedList.addToTail(1);
    linkedList.addToTail(2);
    linkedList.addToTail(3);

    linkedList.print();

    expect(consoleSpy).toHaveBeenCalledWith(1);
    expect(consoleSpy).toHaveBeenCalledWith(2);
    expect(consoleSpy).toHaveBeenCalledWith(3);

    consoleSpy.mockRestore();
  });
});
