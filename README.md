<p align="center">
 <h2 align="center">:package: Javascript data structures</h2>
 <p align="center">Data structure NPM Module</p>
  <p align="center">
    <a href="https://github.com/s-azizkhan/js-datawave/issues">
      <img alt="Issues" src="https://img.shields.io/github/issues/s-azizkhan/js-datawave?style=flat&color=336791" />
    </a>
    <a href="https://github.com/s-azizkhan/js-datawave/pulls">
      <img alt="GitHub pull requests" src="https://img.shields.io/github/issues-pr/s-azizkhan/js-datawave?style=flat&color=336791" />
    </a>
    <br />
    <br />
  <a href="https://github.com/s-azizkhan/js-datawave/issues/new/choose">Report Bug</a>
  |
  <a href="https://github.com/s-azizkhan/js-datawave/issues/new/choose">Request Feature</a>
  </p>
<p align="center">Did you like the project? Please, considerate a star 🌟 to motivate!</p>

<p align="center"><strong>TypeScript NPM Module for A npm package learning project</strong>✨</p>

# Getting started

## Installation
```cmd
npm i js-datawave
```

# JavaScript Data Structures

The [js-datawave](https://www.npmjs.com/package/js-datawave) package is a comprehensive collection of common data structures implemented in JavaScript. It provides a set of classes and methods that allow developers to easily work with and manipulate data structures in their JavaScript applications.

## Features

- **LinkedList**: An implementation of a singly linked list that allows efficient insertion, removal, and traversal of elements.

  The LinkedList package is a versatile implementation of a singly linked list data structure in JavaScript. It provides a flexible and efficient way to store and manipulate a collection of elements. This package offers a range of features to manage and traverse linked lists, making it an essential tool for developers working with data structures and algorithms.

  ## LinkedList Key Features
  - **Node Management**: Easily add nodes to the tail of the linked list, remove nodes by value, and retrieve node values by index.
  - **Traversal**: Traverse the linked list and perform operations on each node, such as printing node values or searching for specific values.
  -- **Dynamic Size**: Track the length of the linked list to efficiently manage the size of the collection.
  - **Flexibility**: Utilize various methods to insert nodes at the head, specific positions, or remove nodes by index.

  - **Additional Functionality**: Perform operations like reversing the linked list, concatenating multiple linked lists, and more.
  

## Usage

```typescript
import { LinkedList } from "js-datawave";
// Create a new instance of LinkedList
const linkedList = new LinkedList<number>();

// Add values to the tail of the linked list
linkedList.addToTail(1);
linkedList.addToTail(2);
linkedList.addToTail(3);

// Print the values of each node in the linked list
linkedList.print(); // Output: 1, 2, 3

// Remove a node with the specified value from the linked list
const removed = linkedList.remove(2);

if (removed) {
  console.log("Node with value 2 has been removed.");
}

// Get the length of the linked list
const length = linkedList.getLength();
console.log(`Length of the linked list: ${length}`); // Output: Length of the linked list: 2
```



## 🤝 Contributing

Contributions, issues, and feature requests are welcome!<br />Feel free to check [issues page](issues).


## 📝 License

Copyright © 2022 [S Aziz Khan](https://github.com/s-azizkhan).<br />
This project is [MIT](LICENSE) licensed.
