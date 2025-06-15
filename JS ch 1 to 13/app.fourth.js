// CHAPTER 9 USER INPUT & CONDITIONAL STATEMENT

// 1. Write a program to take “city” name as input from user. If 
// user enters “Karachi”, welcome the user like this: 
// “Welcome to city of lights”

alert ("hello");

let city = "karachi"
let usercity = prompt ("Enter your city")

if (city == usercity) {
    document.writeln ("Welcome to city of lights <br> <pre></pre>")
} else {
    document.writeln ("Enter a valid city name <br> <pre></pre>")
}

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the 
// user is female, give the message: Good Morning Ma’am.

let gender1 = "male"
let gender2 = "female"

let yourgender = prompt ("Enter your gender")

if (gender1 == yourgender) {
    document.writeln ("Good Morning Sir <br> <pre></pre>")
} else {
    document.writeln ("Good Morning Ma'am <br> <pre></pre>")
}

// 3. Write a program to take input color of road traffic signal 
// from the user & show the message according to this table:

let traffic_light1 = "Red"
let traffic_light2 = "Yellow"
let traffic_light3 = "Green"

let traffic_light_mean = prompt ("Enter traffic light colour")

if (traffic_light1 == traffic_light_mean) {
    document.writeln ("Red light means = Stop <br> <pre></pre>")
} else if (traffic_light2 == traffic_light_mean) {
    document.writeln ("Yellow light means = Ready to move <br> <pre></pre>")
} else if (traffic_light3 == traffic_light_mean) {
    document.writeln ("Green light means = Move now <br> <pre></pre>")
} else {
    document.writeln ("Enter corrcet colour <br> <pre></pre>")
}

// 4. Write a program to take input remaining fuel in car (in 
// litres) from user. If the current fuel is less than 0.25litres, 
// show the message “Please refill the fuel in your car”

let car_fuel = 0.25;

let fill_car_fuel = prompt ("Your car fuel conutity")

if (fill_car_fuel == car_fuel) {
    document.writeln ("Your car is fix <br> <pre></pre>")
} else {
    document.writeln ("refill your car fuel <br> <pre></pre>")
}

// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
// a. var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
   
let a = 4;
console.log("4 ++a =", ++a);
alert ("given condition for variable a is true")
document.writeln ("given condition for variable a is true <br> <pre></pre>")

// b. var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

let b = 82;
console.log("82 =", 82);

let b2 = 83;
console.log("++b2 = ",b2 );
alert ("given condition for variable b is true")
document.writeln ("given condition for variable b is true <br> <pre></pre>")

// c. var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

let c = 12;
console.log("c++ === 13 =", c++ === 13);

let c2 = 13;
console.log("c === 13 =", c === 13);

let c3 = 13;
console.log("++c < 14 =", ++c < 14);

let c4 = 14;
console.log("c === 14 =", c === 14);

// d. var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

let materialCost = 20000;
let laborCost = 2000;
console.log("materialCost + laborCost =", materialCost + laborCost);

// e. if (true){
//     alert("True");
//     }
//     if (false){
//     alert("False");
//     }

let e = true;
let e2 = false;
console.log("e === e2 =", e === e2);

// f. if("car" < "cat"){
//     alert("car is smaller than cat");
//     }
    
let f = "car";
let f2 = "cat";
console.log("f === f2 =", f === f2 );

// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute 
// grade as per following table:

let sub1_T_marks = 100;
let sub2_T_marks = 100;
let sub3_T_marks = 100;
console.log("100 + 100 + 100 =", 100 + 100 +100);

let pre1 = 80;
let pre2 = 70;
let pre3 = 60;
let add = 9;
console.log("80 + 70 + 60 + 9 =", 80 + 70 + 60 + 9 );

let total_obt_marks = 219;
console.log("219 / 3 =", 219 / 3);

document.writeln ("<h2>Marks Sheet</h2> <br>");
document.writeln ("Total Marks = 300 <br> <pre></pre>");
document.writeln ("Marks Obtained = 219 <br> <pre></pre>");
document.writeln ("Percentage = 73% <br> <pre></pre>");
document.writeln ("Grade = B <br> <pre></pre>");
document.writeln ("Remarks = You need to improve <br> <pre></pre>");

// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

let nums = ("1, 2, 3, 4, 5, 6, 7, 8, 9, 10");
let nums_game = prompt ("guess the secret number")

if (nums == nums_game) {
    document.writeln ("Bingo! Correct answer <br> <pre></pre>");
} else {
    document.writeln ("Close enough to the correct answer <br> <pre></pre>");
}

// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number 
// is divisible by 3.

let num = 3;
let nmum_three = prompt ("Enter a number");

if (nmum_three % 3 === 0) {
     console.log("is a multiple of 3 =", num);
}else {
    console.log("is not a multiple of 3 =", num);
}

// 9. Write a program that checks whether the given input is an
// even number or an odd number.

// Odd or Even numbers

let odd_even_num = 10;

if (odd_even_num % 2 === 0) {
    console.log("even");
    document.writeln ("even <br> <pre></pre>")
} else {
    console.log("odd");
    document.writeln ("odd <br> <pre></pre>")
}

// 10. Write a program that takes temperature as input and 
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool"
// d. T > 10 then “OMG! Today’s weather is so Cool.”

let temp = 40;

if (temp == 40) {
    document.writeln ("It is too hot outside <br> <pre></pre>")
} else if (temp > 30) {
    document.writeln ("The Weather today is Normal <br> <pre></pre>")
} else if (temp > 20) {
    document.writeln ("Today’s Weather is cool <br> <pre></pre>")
} else if (temp > 10) {
    document.writeln ("OMG! Today’s weather is so Cool. <br> <pre></pre>")
} else {
    document.writeln ("The wearher is hot <br> <pre></pre>")
}

// 11. Write a program to create a calculator for +,-,*, / & % 
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

let number_one = prompt("enter number_one")
let number_two = prompt("enter number_two")

let add1 = number_one + number_two
let add2 = number_one - number_two
let add3 = number_one * number_two
let add4 = number_one % number_two
let add5 = number_one / number_two

alert(add , "Result")