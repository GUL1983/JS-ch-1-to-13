// CHAPTER 12-13 IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS

// 1. Write a program that takes a character (number or string) 
// in a variable & checks whether the given input is a 
// number, uppercase letter or lower case letter. (Hint: ASCII 
// codes:- A=65, Z=90, a=97, z=122).

let a = "ascii";
a = a.toUpperCase();

console.log("a =", a);
document.writeln ("ASCII is UpperCase <br> <pre></pre>");

let b = "a=65";
b = b.toUpperCase();

console.log("b =", b);
document.writeln ("A=65 is UpperCase <br> <pre></pre>");

let c = "z=98";
c = c.toUpperCase();

console.log("c =", c);
document.writeln ("Z=98 is UpperCase <br> <pre></pre>");

let d = "A=97";
d = d.toLowerCase();

console.log("d =", d);
document.writeln ("a=97 is LowerCase <br> <pre></pre>");

let f = "Z=122";
f = f.toLowerCase();

console.log("f =", f);
document.writeln ("z=122 is LowerCase <br> <pre></pre>");

// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

if(age = 15 > 30) {
    console.log("allowed student");
}else {
    console.log("NOT allowed");
}

if (1 >= 1) {
    console.log("1 or 1 is equal");
}

// 3. Write a program that takes input a number from user & 
// state whether the number is positive, negative or zero.

// positive or negative numbers

let positive_negative_num = 14;

if (positive_negative_num % 2 === 0) {
    console.log("positive");
    document.writeln ("positive <br> <pre></pre>")
} else {
    console.log("negative");
    document.writeln ("negative <br> <pre></pre>")
}

// 4. Write a program that takes a character (i.e. string of 
// length 1) and returns true if it is a vowel, false otherwise.

let vowel_character = a , e , i , o , u;

let vowel = prompt ("Enter a vowel")

if (vowel_character === vowel) {
    console.log("vowel");
    document.writeln ("vowel <br> <pre></pre>")
} else {
    console.log("Enter a vowel");
    document.writeln ("vowel <br> <pre></pre>")
}

// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then 
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are 
// same, show message “Correct! The password you 
// entered matches the original password”. Show 
// “Incorrect password” otherwise

let userpassword;

let user_password = prompt ("Enter your Password")

let check_user_password = prompt ("Enter your Password again")

if (user_password === check_user_password) {
    console.log("your password is correct");
    document.writeln ("your password is correct <br> <pre></pre>")
} else {
    console.log("Enter correct password");
     document.writeln ("Enter correct password <br> <pre></pre>")
}

// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

var greeting;
var hour_12 = 13;
if (hour_12 < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

// 7. Write a program that takes time as input from user in 24 
// hours clock format like: 1900 = 7pm. Implement the 
// following case using if, else & else if statements.

let time = prompt("Enter time in 24-hour format (HHMM): ");

let hour = parseInt(time.slice(0, 2));
let minute = time.slice(2);

let period;

if (hour < 12) {
  period = "AM";
  if (hour === 0) {
    hour = 12;
  }
} else if (hour === 12) {
  period = "PM";
} else {
  period = "PM";
  hour -= 12;
}

console.log(`${hour}:${minute} ${period}`);