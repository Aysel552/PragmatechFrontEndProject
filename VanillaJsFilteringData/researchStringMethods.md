In JavaScript, the textual data is stored as strings.There is no separate type for a single character.

### Quotes:

Strings can be enclosed within either single quotes, double quotes or backticks.
Backticks, however, allow us to embed any expression into the string, by wrapping it in ${…}:

```
function sum(a, b) {
  return a + b;
}

alert(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.

```

Another advantage of using backticks is that they allow a string to span multiple lines:

```
let guestList = `Guests:
 * John
 * Pete
 * Mary
`;

alert(guestList); // a list of guests, multiple lines
```

It is still possible to create multiline strings with single and double quotes by using a so-called “newline character”, written as \n, which denotes a line break:

```
let guestList = "Guests:\n * John\n * Pete\n * Mary";

alert(guestList); // a multiline list of guests
```

Backslash character \ uses if we want to insert a quote into the string.

```
alert( 'I\'m the Walrus!' ); // I'm the Walrus!

```

### String length
The length property has the string length:

```
alert( `My\n`.length ); // 3
```

### Changing the case:

Methods toLowerCase() and toUpperCase() change the case:

```
alert( 'Interface'.toUpperCase() ); // INTERFACE
alert( 'Interface'.toLowerCase() ); // interface


Or, if we want a single character lowercased:
alert( 'Interface'[0].toLowerCase() ); // 'i'

```