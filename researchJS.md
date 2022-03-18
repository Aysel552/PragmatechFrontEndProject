# Hello World Article:

### Question1: How many options are there to write JS code?

## Answer: We can write JS codes in 2 ways: inside HTML using script tag  or using external scripts.


### Question2: What is the difference between script tag(inline) and <script src="script.js></script> ###

## Answer: As a rule, only the simplest scripts are put into HTML. If we have a lot of JavaScript code, we can put it into a separate file. The benefit of a separate file is that the browser will download it and store it in its cache. Other pages that reference the same script will take it from the cache instead of downloading it, so the file is actually downloaded only once. Also, a single <script> tag can not have both the src attribute and code inside.

# Code Structure Article

### Question3: Where should we use ";"?
## Answer: Statements can be separated with a semicolon.

## Examples: 1) alert('Hello'); alert('World'); -here we separate two alerts:
## Exception: A semicolon may be omitted in most cases when a line break exists.

### Question4: How many ways to write comments?
## 
Answer: 1) One-line comments start with two forward slash characters //. 
2) Multiline comments start with a forward slash and an asterisk /* and end with an asterisk and a forward slash */.
##

# Variables Article:

### Question5: What is the difference between let, var and const?

# Var 
```
Variables are used to store the information. A variable is a “named storage” for data. We can use variables to store goodies, visitors, and other data.

var - 1) the scope of a var variable is functional scope;
      2) It can be updated and redeclared into the scope;
      3) It can be declared without initialization (the preparation of a computer or similar device for operation);
      4) It can be accessed without initialization as its default value is "undefined";
```

# let

```
let - 1) the scope of a let variable is <b> block scope </b>;
      2) it can be updated but <b> cannot be re-declared </b> into the scope;
      3) it can be delared without initialization;
      4) it <b> cannot be accessed </b> without initialization as it returns an error.
```

# const

```
const - 1) the scope of a const variable is block scope;
        2) it <b>cannot be updated or redeclared </b> into the scope;
        3) it cannot be declared without initialization;
        4) it  <b>cannot be accessed</b> without initialization, as <b> it cannot be declared without initialization </b>;
```

### Question6: What are the limitations of variable naming?

```
1) The name must contain ONLY letters,digits, or the symbols $ and _
2) The first character must not be  a digit.

* When the name contains multiple words, camelCase is commonly used. 
```

### Question 7: If we write let x= 5 and then changed to x = 7.What will happen with 5? Will it take a space in memory?

```
When the value is changed, the  <b>old data is removed </b> from the variable
```

# Data Types Article:

* There are <b> eight </b> basic data types in JavaScript.

### Question 8: 5 dəyəri yaddasa yazılarkən 2-li say sisteminə çevrilir və ona görə yaddaşda tutduğu yer hesablanır.Bəs 5.34 dəyərinin yaddaşda tutduğu yeri necə hesablamaq olar?

```

```

### Question : Operators:
* An operand – is what operators are applied to. For instance, in the multiplication of 5 * 2 there are two operands: the left operand is 5 and the right operand is 2. Sometimes, people call these “arguments” instead of “operands”.
* An operator is unary if it has a single operand. For example, the unary negation - reverses the sign of a number:  x = -x;
* An operator is binary if it has two operands. The same minus exists in binary form as well: let x = 1, y = 3; alert( y - x );
* The remainder operator %, despite its appearance, is not related to percents. alert( 5 % 2 ); // 1, a remainder of 5 divided by 2 .Pokazivayet ostatok pri delenii 5/2
* exponentiation - a ** b raises a to the power of b. alert( 2 ** 2 ); // 2² = 4, alert( 2 ** 3 ); // 2³ = 8









