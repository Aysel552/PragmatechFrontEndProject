

// 2 sampleNews

let sampleNews =`As software developers, the natural tendency is to start developing applications 
based on your own hands-on experience and knowledge right away. 
However, overtime issues in the application arise, adaptations to changes, and new features happen. 
Since then, you gradually realize that you have put too much effort into one thing: modifying the application. 
Even when implementing a simple task, it also requires understanding the whole system. 
You can’t blame them for changes or new features since they are inevitable parts 
of software development. So, what is the main problem here?
The obvious answer could be derived from the application’s design. Keeping the system design 
as clean and scalable as possible is one of the critical things that any professional developer 
should dedicate their time to. And that’s where SOLID design principles come into play. 
It helps developers eliminate design smells and build the best designs for a set of features.
Although the SOLID design principles were first introduced by the famous Computer 
Scientist Robert C. Martin (a.k.a. Uncle Bob) in his paper in 2000, 
its acronym was introduced later by Michael Feathers. Uncle Bob is also 
the author of best-selling books Clean Code, Clean Architecture, 
Agile Software Development: Principles, Patterns, and Practices.`

// 1  Write a function that returns the number of characters in the text
function NumberOfCharacters() {
    return sampleNews.length;
}
console.log(NumberOfCharacters())
// 2 ///////////////////////////////////////////////////////////////////

// 3 Write a function that returns the number of spaces in the text
function calculateSpaces() {
    return sampleNews.split(" ").length - 1
}
console.log(calculateSpaces())
// 4 //////////////////////////////////////////////////////////////////

// 5 Write a function that returns the number of sentences in the text
function sentenceCount() {
    return sampleNews.split(".").length;
}
console.log(sentenceCount());

// //////////////////////////////////////////////////////////////////
// 6 Write a function that returns the number of words in the text
function wordCount() {
    return sampleNews.split(' ').length;
}
console.log(wordCount());

// /////////////////////////////////////////////////////////////////

// 7 Write a function that returns the number of letters in the text
function calculateLetters() {
    return sampleNews.split(" ").length - 1
}
console.log(calculateLetters())
    
// ////////////////////////////////////////////////////////////////

// 8 Write a function that returns an array of Capitalized letters in the text

function onlyUpperCaseLetters() {

    for (let i = 0; i < sampleNews.length; i++){
        
        if (sampleNews[i].match(/[A-Z]/)) {
            
        }

    }

    return sampleNews;
}


// 9 Write a function that returns random text between 40 and 50 characters in length
//  If the selected text length divides the word, you must delete that word. 
//  For example, if the end of the selected text ends in the camel part of the word developers, 
// the word developers must be deleted
// 10 Write a function that returns an array of words which starts with a capital letter within the text