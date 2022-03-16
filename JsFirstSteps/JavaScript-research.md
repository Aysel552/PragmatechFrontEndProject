### Understanding Syntax and Code Structure in JavaScript [Understanding Syntax and Code Structure](https://www.digitalocean.com/community/tutorials/understanding-syntax-and-code-structure-in-javascript)
## What is a syntax?
- Answer: <b>Syntax</b> is a <i>set of rules </i> that determine(identify) <i> the correct structure </i> of programming languages.
## Two main reasons to focus on syntax?
- Answer:  <b>Readability </b> and <b> functionality </b> are the vital reasons to focus on syntax.
## Does JS ignore the whitespaces?
- Excessive whitespace <b> outside of a string</b> and the spaces between operators and other symbols are <b> ignored </b> by JavaScript.
## Where should we use indentation?
-  For a readability  we use newlines and indentation.
## In which ways we use indentation?
- any code included within a block;
- if/else statement;
```
// Conditional statement with indentation
if (x === 1) {
	// execute code if true
} else {
	// execute code if false
}
```
- nested block statement:
```
function isEqualToOne(x) {
	// Check if x is equal to one
	if (x === 1) {
		// on success, return true
		return true;
	} else {
	  return false;
	}
}
```
## What is identifier?
- Answer: The <b> name of a variable,function or property </b> is called  <b>identifier</b> Note: Identifiers consist of letters and numbers,however they cannot include any symbol oustide of $ and _.Additionally, identifiers cannot start with a number!!!
## Are identifiers case-sensitive?
- Yes,they are. For instance,let myVariable = 1; let myvariable = 2; would refer to 2 distinct variables. A common way to write an identifier in JS is Camel Case. There is only exception in writing class identifiers using PascalCase.
## Can we use Reserved Keywords as identifiers? [A list of reserved keywords](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_keywords_as_of_ecmascript_2015)
- Identfiers also <b>Must not consist </b> of any reserved keywords. <b>Keywords  </b> are words in JS that have a built-in functionality, such as var,if,for and this. For example it is a mistake to assign a value to a variable named var: var var = 'Some value";

## Question 1: Which of these expressions will give an error: let a=5; let a= 5?
- Answer: No one.Because the spaces between operators and other symbols are ignored by JS. The exception is a whitespace inside of a string!

## Question2:  All programming languages including JS use special symbols. How V8Engine are analysing () and {}? How does it understand them during the translation?
- I don't know the answer yet!!! But i will!!

## Question3: Are there any difference between let StudentName; let studentName; let studentname?Is JS case-sensitive?
- JS is a case-sensitive. These three identifiers are three distinct variables.

## Question4: In which ways we use indentation? Am i obligatory to use indendation?
- any code included within a block;
- if/else statement;
```
// Conditional statement with indentation
if (x === 1) {
	// execute code if true
} else {
	// execute code if false
}
```
- nested block statement:
```
function isEqualToOne(x) {
	// Check if x is equal to one
	if (x === 1) {
		// on success, return true
		return true;
	} else {
	  return false;
	}
}
```
- I am not obligatory to use indentation,but it helps with readability of bunch of code.

### Primitive and Reference data types? [Data Types: Primitive & Reference](https://www.freecodecamp.org/news/primitive-vs-reference-data-types-in-javascript/)

## What are primitive data types?
* Primitive Data types are not objects and don't have methods!!!
Here is a list of Primitive Data Types:
- Numbers
- String
- Boolean
- Null
- Undefined
- Symbols

## How are primitive data types treated in JavaScript?
- When you declare a primitive data type in JavaScript, it is stored on a stack. <b>Stack</b> is <i> a simple data structure </i> that the computer uses <i> to store and retrieve data quickly.</i> A primitive data type on the stack identified by the variable name which we use for declaration in the program. With each primitive data type we create, data is added to the stack!

## How to implement?
```
Declare a variable, numOne, and give it a value of 50. Declare a variable, numTwo, and give it also  a value of 50.  What happens on the stack: the computer creates room for numOne and stores its assigned value on the stack. When numTwo is created, the computer again creates room, and stores 50 on the stack. It does not matter that both variables are assigned the same value.

What if during the coding process, we decided to update the value of numOne to say, 100? Does it mean numTwo will change too? The answer is no. Because these variables were stored on the stack separately and updating one of them will not affect the other.
```

## Reference data types in JS:
* Reference Data Types List:
- Objects
- Functions
- Collections
- Arrays
- Dates 
- Other type of objects...
Note: Most of the reference data types are considered as objects and consequently, have methods.

## The difference between primitive and reference data types:
- Reference data types are more dynamic than primitive ones.Also, reference data types do not have a fixed size.

-Also the main difference between primitive and reference data types is when we create a variable and assign it a value that is a reference data type,the computer does not directly store data type in that variable(as it did with primitive types.)

Note: What you have assigned to that variable is a pointer that points to the location of that data type in memory(То, что вы присвоили этой переменной, является указателем, указывающим на расположение этого типа данных в памяти.)

![Stack- Heap Explanation](./images/stack-heap.png)
As it is shown in the image, we have two data structures: stack and heap.
For instance,we declared an object.The object itself is stored on a heap and its pointer is stored on a stack. The pointer identified by the object's variable name and points to that object

![Example Explanation](./images/example-explanation.png)

```
Now, we create a variable, object1, and assign an object to it. What if like before, we create another variable object2, and assign it to object1. Does that mean another object will be created on the heap? The answer is no. Why?
Because since the object already exists on the heap, object2 and object1 will both point to the same object.

Another difference comes in when we update object1. If we log both variables to the console, we see that the  change affected them both. This is because they are pointing to the same object on the heap – and updating one variable of course affects the other.

Example:

let object1 = {
name:'Bingeh',
age:18
};

let object2 = object1;

//updating object1,
object1.age = 20;

console.log(object2); //we see that object2 also updates the age attribute

```

## Question1: How do you imagine to translate let x=5 to 


## Question2:  What is the reason of dividing data types into primitive and reference?
- Different way of actioning (stack and heap):
- Primitive data Types: numbers,string,boolean,undefined,null,symbols; 
- Reference data Types: objects,arrays, functions,collections,dates;

## Question3: What are main difference between two data types?
- Reference data types are more dynamic than primitive ones.Also, reference data types do not have a fixed size.

- Also the main difference between primitive and reference data types is when we create a variable and assign it a value that is a reference data type,the computer does not directly store data type in that variable(as it did with primitive types.)

- While in primitive data types the updating one variable will not affect on another,in contrast,in reference data types updating one variable will affect on another.

## Question4: Write where these data types are located:
- Primitive data types are located on a stack;
- Reference data types: the object itself is stored on a heap and its pointer is stored on a stack.

## Question5: Is it refers to JS,or these categories are common in other programming languages?
- 
## Question6: Which benefits will bring you this topic?
- Quickly understand the error which occurs;

### NaN, null, undefined in Javascript

### Expressions and operators

### Next week topic - Functions in Javascript