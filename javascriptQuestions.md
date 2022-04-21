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


### Question4: What do I need to do to delete any element that exists within HTML? (Что мне нужно сделать, чтобы удалить любой элемент, существующий в HTML?)

### Question5: What do I need to do to copy an element in HTML and paste it into another element? (Что мне нужно сделать, чтобы скопировать элемент в HTML и вставить его в другой элемент?)