var a = 78;
var b= 34;
 let Sum = a + b;
//  console.log(c);
 document.getElementById("demo").innerHTML = Sum;

var x = 5;
var y = 6;
var z = x + y;
document.getElementById("demo").innerHTML = "The value of z is: " + z ;

// Var String //
let string = "This is";
let name ="Gaurav";
let message =" he is a good boy."
var channel = "CodeWithFun";
console.log(string + name + message);

let temp = `${name} is a nice person and he has a channel called ${channel}`;
console.log(temp);
// document.getElementById("demo").innerHTML = temp;//

//Length//
console.log(name.length);

console.log("Hello\nGaurav");

var str = new String("this");
document.getElementById("content").innerHTML ='<h2> this is an heading.</h2>';

/// String Functions ///

var str = "Hi everyone, My name is Gaurav Gupta is.";
console.log(str);
console.log(str.indexOf('is'));      // Give first occurence of substring //
console.log(str.lastIndexOf('is'));  // Last occurenceof substring //

// Substring from string //
 let substr = "Hello World";
 console.log(substr);
 console.log(substr.slice(6,11));     // It can take both negative or postive value.//
 console.log(substr.substring(6,11)); // It take only positive value.//
 console.log(substr.substr(1,3));     // output : ell //
 console.log(substr.replace('World', 'Duniya'));

 console.log(substr.toUpperCase()); 
 console.log(substr.toLowerCase()); 

let newstr = "Baby";
console.log(substr.concat('\n',newstr));
let string1 = " Good India "
console.log(string1.trim()); // Reduce spaces from starting and ending of string//

console.log(newstr.charAt(3)); // return character index from string //

console.log(substr.charCodeAt(2)); 

console.log(newstr[3]);




