
const express = require("express");

const app = express();

// String example
let text = "Jhon Doe is a Good man. Also Ibrahim is a good man.";

// String as a object 
let x = new String ("Jhon");

// String Functions
    // Find the length of string 
    let length = text.length;

    // slice() extracts a part of string and accept nagative indexs
    console.log(text.slice(5,8)); // show string under 5 to 7 position index
    console.log(text.slice(5)); // show full string start from 5 position index
    console.log( text.slice(-9, -5)); // It's nagative string example

    // substring() similar to slice() string but cannot accept nagative indexs
    console.log(text.substring(5,8));
    console.log( text.substring(5));

    // replace() method replaces a specified value with another value
    console.log(text.replace('Jhon', "Ibrahim"));
    console.log(text.replace("/JHON/g", "Ibrahim")); // if have case sensitive. 
                                                      //if use g -> To replace all matches. 
                                                      //If use i -> To replace case insensitive
    
    // toUpperCase() is converted to upper case
    console.log(text.toUpperCase());

    // toLowerCase() is converted to lower case
    console.log(text.toLowerCase());

    // concat() join two or more string
    let text1 = "Hello ";
    let text2 = "World!";
    console.log(text1.concat(text2));
    console.log("".concat( text1 , text2));

    // trim() method removes whitespace from both sides of a string
    let trim_str = "  Hello World!  ";
    console.log(trim_str.trim());

    // charAtr() method returns the characters at a specified index in a string
    console.log(text.charAt(0)); // show position string

    // charCodeArt() method returns the unicode of the character at a specified index in a string
    console.log(text.charCodeAt(2)); // show total character index

    // split() method string can be converted to an array

    console.log(text.split(" "));

    //** String search **//

    // indexOf() method returns the index of the first occurrence
    console.log(text.indexOf("Doe"));
    console.log(text.indexOf("man", 40)); // second parameter as the starting position for the search

    // lastIndexOf() method returns the index of the last occurance
    console.log(text.lastIndexOf('man'));
    console.log(text.lastIndexOf('Doe', 25)); // the search starts at position 15, and searches to the beginning of the string.

    //search() method searches a string for a specified value and returns the position of the match
    console.log(text.search("Doe"));

    /*
        The search() method cannot take a second start position argument.
        The indexOf() method cannot take powerful search values (regular expressions).
    */ 

    //  match() method searches a string for a match against a regular expression, and returns the matches, as an Array object.
    console.log(text.match(/man/g));
    // perform a global and case-insensitive 
    console.log(text.match(/good/gi));

    // includes() method returns true if a string contains a specified value.
    console.log(text.includes("Doe"));
    // Check if a string includes "world", starting the search at position 5
    console.log(text.includes('Doe', 6));

    // startsWith() method returns true if a string begins with a specified value, otherwise false
    console.log(text.startsWith("Jhon"));
    console.log(text.startsWith("Doe", 5));

    // endsWith() method returns true if a string ends with a specified value, otherwise false
    console.log(text.endsWith("."));

    // Variable Substitutions
    let firstName = "Jhone";
    let lastName = "Doe";
    console.log(`welcome ${firstName}, ${lastName}`);


app.listen(3000);


    




