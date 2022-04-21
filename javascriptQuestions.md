### Question1: What is JavaScript and how it works?

**JavaScript** is a text-based programming language used both on the client-side and server-side that allows you to make web pages interactive. Where HTML and CSS are languages that give structure and style to web pages, JavaScript gives web pages interactive elements that engage a user. Common examples are:  the search box on Amazon, a news recap video embedded on The New York Times, or refreshing your Twitter feed. A few famous examples of JS include Paypal, LinkedIn, Netflix, and Uber!

#### What is JavaScript used for?

![The scheme of how JavaScript works](/image/how-works.png)

JavaScript is mainly used for web-based applications and web browsers.

The web browser loads a web page, parses the HTML, and creates what is known as a Document Object Model (DOM) from the contents. The DOM presents a live view of the web page to your JavaScript code.

The browser will then grab everything linked to the HTML, like images and CSS files. The CSS information comes from the CSS parser.

The HTML and CSS are put together by the DOM to create the web page first. Then, the browsers' JavaScript engine loads JavaScript files and inline code but does not run the code immediately. It waits for the HTML and CSS to finish loading.

Once this is done, the JavaScript is executed in the order the code is written. This results in the DOM being updated by JavaScript code and rendered by the browser.

The order here is important. If the JavaScript did not wait for the HTML and CSS to finish, it would not be able to change the DOM elements.


#### How does it work?
A JavaScript runtime environment built on Google Chrome’s JavaScript V8 engine.  It is an interpreted language, which means it does not need a compiler to translate its code like C or C++. JavaScript code runs directly in a web browser.



### Question2: What is DOM Traversing? Give the examples.


### Question3: What are the differences between DOM Element and DOM Node?


### Question4: What do I need to do to delete any element that exists within HTML? (Что мне нужно сделать, чтобы удалить любой элемент, существующий в HTML?)

### Question5: What do I need to do to copy an element in HTML and paste it into another element? (Что мне нужно сделать, чтобы скопировать элемент в HTML и вставить его в другой элемент?)