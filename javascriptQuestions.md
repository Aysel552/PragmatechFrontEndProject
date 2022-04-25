### Question1: What is JavaScript and how it works?

**JavaScript** is a text-based programming language used both on the client-side and server-side that allows you to make web pages interactive. Where HTML and CSS are languages that give structure and style to web pages, JavaScript gives web pages interactive elements that engage a user. Common examples are:  the search box on Amazon, a news recap video embedded on The New York Times, or refreshing your Twitter feed. A few famous examples of JS include Paypal, LinkedIn, Netflix, and Uber!

#### What is JavaScript used for?

JavaScript is mainly used for web-based applications and web browsers.

#### How does it work?
![The scheme of how JavaScript works](/image/how-works.png)

A JavaScript runtime environment built on Google Chrome’s JavaScript V8 engine.  It is an interpreted language, which means it does not need a compiler to translate its code like C or C++. JavaScript code runs directly in a web browser.

The web browser loads a web page, parses the HTML, and creates what is known as a Document Object Model (DOM) from the contents. The DOM presents a live view of the web page to your JavaScript code.

The browser will then grab everything linked to the HTML, like images and CSS files. The CSS information comes from the CSS parser.

The HTML and CSS are put together by the DOM to create the web page first. Then, the browsers' JavaScript engine loads JavaScript files and inline code but does not run the code immediately. It waits for the HTML and CSS to finish loading.

Once this is done, the JavaScript is executed in the order the code is written. This results in the DOM being updated by JavaScript code and rendered by the browser.

The order here is important. If the JavaScript did not wait for the HTML and CSS to finish, it would not be able to change the DOM elements.






### Question2: What is DOM Traversing? Give the examples.
DOM tree traversal may be accomplished through the use of six basic properties:

- previousSibling
- nextSibling
- childNodes
- firstChild
- lastChild
- parentNode






All properties, except childNodes, contain a reference to another node object. The childNodes property contains a reference to an array of nodes.

#### What is DOM?

The Document Object Model (DOM) is a standard convention for accessing and manipulating elements within HTML and XML documents. Elements in the DOM are organized into a tree-like data structure that can be traversed to navigate, locate, or modify elements and/or content within an XML/HTML document.(Элементы в DOM организованы в виде древовидной структуры данных, по которой можно перемещаться, находить или изменять элементы и/или содержимое в документе XML/HTML.)

#### DOM Nodes

![HTML node tree](/image/HTML-node-tree.png)

According to the image above:

- The entire document is a document node
- Every HTML element is an element node
- The text inside HTML elements are text nodes
- All comments are comment nodes

The DOM tree can be imagined as a collection of “nodes” related to each other through parent-child and sibling-sibling relationships.

#### Node Relationships:

The nodes in the node tree have a hierarchical relationship to each other.
- In a node tree, the top node is called the root (or root node)
- Every node has exactly one parent, except the root (which has no parent)
- A node can have a number of children
- Siblings (brothers or sisters) are nodes with the same parent

#### Navigating between Nodes:

![Node Relationships](/image/image-info.png)

- parentNode
- previousSibling
- nextSibling
- firstChild
- lastChild
- childNodes[nodeNumber]



#### Traversal Methods:

Before dive into traversal methods,below in the comment describing HTML node tree"

```
<body>
  <div class="grandparent" id="grandparent">
    <!-- "parent-1" & "parent-2" belongs to "grandparent"-->
    <div class="parent" id="parent-1">
      <!-- "child-1" & "child-2" belongs to "parent-1"-->
      <div class="child" id="child-1">
      </div>
      <div class="child" id="child-2">
      </div>  
    </div>
    <div class="parent" id="parent-2">
      <!-- "child-3" & "child-4" belongs to "parent-2"-->
      <div class="child" id="child-3">
      </div>
      <div class="child" id="child-4">
      </div>
     </div>
  </div>
</body>
```

**getElementById**  - find a signle element node by targeting the id:

```
Example:
const grandparent = documement.getElementById=("grandparent);
```

**getElementByClassName** -  to select multiple elements at once, let’s say to target both our parent divs.

```
//selecting multiple classes
const parents = document.getElementsByClassName("parent")

//or if you want to target specific classes from specific parent nodes
const parent2 = document.getElementById("parent-2")
const childrenOfParent2 = parent2.getElementsByClassName("child")
//which will return an array of the divs of child-3 & child-4
```

**querySelector** - single method to target classes or ids

```
//find a element node by a class using the "." css selector before the class
const grandparent = document.querySelector(".grandparent")

//or

//find a element node by a id using the "#" css selector before the id
const parent2 = grandparent.querySelector("#parent-2")
```

**querySelectorAll** -  similar to querySelector but used to select multiple element nodes.

```
//find element nodes by a class using the "." css selector before the class
const parents = document.querySelectorAll(".parent")
//will return the array of parent-1 & parent-2

//or

const childrenOfParentIndex0 = parents[0].querySelectorAll(".child")
//will return the array of child-1 & child-2
```

**parentElement** - used to target one level up the DOM tree to target the parent node

```
//first you need to find a single element node
const parent1 = document.querySelector("#parent-1")

const grandparent = parent1.parentElement
//this will return the entire grandparent node containing the parents and the children
```

**previousElementSibling** - used to target one node to the left in terms of DOM tree

```
//first you need to find a single element node
const parent2 = document.querySelector("#parent-2")

const parent1 = parent2.previousElementSibling
//this will return the node with the id of parent-1
```

**nextElementSibling** - used to target one node to the right in terms of DOM tree

```
//first you need to find a single element node
const parent1 = document.querySelector("#parent-1")

const parent2 = parent1.nextElementSibling
//this will return the node with the id of parent-2
```

**firstElementChild** - used to target the first node down the DOM tree

```
//first you need to find a element node
const parent2 = document.querySelector("#parent-2")

const firstChildOfParent2 = parent2.firstElementChild
//will return the node with the id of child-3 which is the first child of parent-2
```

**lastElementChild** - used to target the last node down the DOM tree

```
//first you need to find a element node
const parent2 = document.querySelector("#parent-2")

const lastChildOfParent2 = parent2.lastElementChild
//will return the node with the id of child-4 which is the last child of parent-2
```

**childNodes[node #]** - the childNodes method takes in a number to target child nodes of a parent

```
/first you need to find a parent element node
const parent2 = document.querySelector("#parent-2")

const child1Ofparent2 = parent2.childNodes[0]
//this will return the child-3 node which is at the first index of parent2

const child2Ofparent2 = parent2.childNodes[1]
//this will return the child-4 node which is at the second index of parent2
```

### Question3: What are the differences between DOM Element and DOM Node?

The Document Object Model (DOM) is an interface that treats HTML or XML document as a tree structure, where each node is an object of the document. DOM also provides a set of methods to query the tree, alter the structure, style. 

#### DOM Node
DOM document consists of a hierarchy of nodes. Each node can have a parent and/or children.

![DOM Nodes](/image/dom-nodes.png)

```
Explanation the scheme above:

<html> is a node in the document tree. It has 2 children: <head> and <body> nodes.

<body> is also a node having 3 children: a comment <!-- Page Body -->, heading <h2>, and paragraph <p>. The parent of the <body> node is <html> node.

The tags in the HTML document represent a node, what's interesting is that regular text is also a node. The paragraph node <p> has 1 child: the text node "Thank you for visiting my web page!".
```

#### Node Types
How can you distinguish these different types of nodes? The answer lays in the DOM Node interface, particularly in the Node.nodeType property.

Node.nodeType can have one of the following values that represents the type of the node:

- Node.ELEMENT_NODE
- Node.ATTRIBUTE_NODE
- Node.TEXT_NODE
- Node.CDATA_SECTION_NODE
- Node.PROCESSING_INSTRUCTION_NODE
- Node.COMMENT_NODE
- Node.DOCUMENT_NODE
- Node.DOCUMENT_TYPE_NODE
- Node.DOCUMENT_FRAGMENT_NODE
- Node.NOTATION_NODE


#### DOM Element

An element is a node that's written using a tag in the HTML document. <html>, <head>, <title>, <body>, <h2>, <p> are all elements because they are represented by tags. **The document type, the comment, the text nodes aren't elements** because they are not written with tags.

Node is constructor of a node, and HTMLElement is a constructor of an element in JavaScript DOM. A paragraph, being a node and also an element, is an instance of both Node and HTMLElement:

### Question4: What do I need to do to delete any element that exists within HTML? (Что мне нужно сделать, чтобы удалить любой элемент, существующий в HTML?)

We need to use **removeChild()** method to remove a child node from a parent node.
The childNode is the child node of the parentNode that you want to remove. The removeChild() returns the removed child node from the DOM tree but keeps it in the memory, which can be used later.

If you don’t want to keep the removed child node in the memory, you use the following syntax:

```
parentNode.removeChild(childNode);
```

The child node will be in the memory until it is destroyed by the JavaScript garbage collector.
Removing all child nodes of an element:

- Get the first node of the element using the firstChild property.
- Repeatedly removing the child node until there are no child nodes left.

Also, it is possible to remove all child nodes using innerHTML:

```
let menu = document.getElementById('menu');
menu.innerHTML = '';
```

```
let menu = document.getElementById('menu');
while (menu.firstChild) {
    menu.removeChild(menu.firstChild);
}
```

### Question5: What do I need to do to copy an element in HTML and paste it into another element? (Что мне нужно сделать, чтобы скопировать элемент в HTML и вставить его в другой элемент?)
The .appendChild() method is an in-built JavaScript function that is used to add a child node under a parent node. The .appendChild() performs this feat by making use of the DOM Node Interface. 

For this we need to use appendChild() method. This method is also used to move an element from one element to another element.This method accepts a single parameter node which is mandatory and used to specify the node object which needs to be appended.


### Question54: What is the difference between DOM Node and DOM Element?

**DOM** (Document Object Model) is a hierarchy of nodes. Each node can have a parent and/or children. The DOM represents a document with a logical tree. Each branch of the tree ends in a node, and each node contains objects. DOM methods allow programmatic access to the tree. With them, you can change the document's structure, style, or content.

Nodes can also have event handlers attached to them. Once an event is triggered, the event handlers get executed.

 Generally speaking, a node is any DOM object. An element is one of specific type of node as there are many other types of nodes(text nodes,comment nodes,document nodes and so on).

The Document Object Model (DOM) is an interface that treats HTML or XML document as a tree structure, where each node is an object of the document. DOM also provides a set of methods to query the tree, alter the structure, style. 

#### DOM Node
DOM document consists of a hierarchy of nodes. Each node can have a parent and/or children.

![DOM Nodes](/image/dom-nodes.png)

```
Explanation the scheme above:

<html> is a node in the document tree. It has 2 children: <head> and <body> nodes.

<body> is also a node having 3 children: a comment <!-- Page Body -->, heading <h2>, and paragraph <p>. The parent of the <body> node is <html> node.

The tags in the HTML document represent a node, what's interesting is that regular text is also a node. The paragraph node <p> has 1 child: the text node "Thank you for visiting my web page!".
```

#### Node Types
How can you distinguish these different types of nodes? The answer lays in the DOM Node interface, particularly in the Node.nodeType property.

Node.nodeType can have one of the following values that represents the type of the node:

- Node.ELEMENT_NODE
- Node.ATTRIBUTE_NODE
- Node.TEXT_NODE
- Node.CDATA_SECTION_NODE
- Node.PROCESSING_INSTRUCTION_NODE
- Node.COMMENT_NODE
- Node.DOCUMENT_NODE
- Node.DOCUMENT_TYPE_NODE
- Node.DOCUMENT_FRAGMENT_NODE
- Node.NOTATION_NODE


#### DOM Element

An element is a node that's written using a tag in the HTML document. <html>, <head>, <title>, <body>, <h2>, <p> are all elements because they are represented by tags. **The document type, the comment, the text nodes aren't elements** because they are not written with tags.

Node is constructor of a node, and HTMLElement is a constructor of an element in JavaScript DOM. A paragraph, being a node and also an element, is an instance of both Node and HTMLElement.

#### DOM Properties: nodes and elements:
Distinguish the DOM properties that contain specifically only nodes, or only elements. The following properties of Node type evaluate to a node or a collection of nodes (NodeList):

![Node Properties](/image/node-properties.png)

In contrast, the following properties are elements or collection of elements(HTMLCollection):

![Element Properties](/image/elements-properties.png)







### Question55: What do nextSibling and nextElementSibling methods do and what are the differences between them?

### Question56: What are the differences between HTML Events and JavaScript Events?