// CHAPTER 14-16 ARRAYS

// 1. Declare an empty array using JS literal notation to store
// student names in future.

let student_name = [];

// 3. Declare and initialize a strings array.

let cities = ["Karachi", "Multan", "Lahore", "Sukkhar", "Pashawer"];

// 4. Declare and initialize a numbers array.

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 5. Declare and initialize a boolean array.

// let boolean_value = ["student" = "ispass"];

// 6. Declare and initialize a mixed array.

let mixed_array = ["A", 1, 2, "b", "C", 3, 4, "d", "E"];

// 7. Declare and Initialize an array and store available 
// education qualifications in Pakistan (e.g. SSC, HSC, BCS, 
// BS, BCOM, MS, M. Phil., PhD). Show the listed 
// qualifications in your browser like:

let qualifications = ["SSC" , "HSC" , "BCS" , "BS" , "BCON" ," MS" , "M . Phill", "PhD"];

document.writeln ("<h3>SSC</h3> <h3>HSC</h3> <h3>BCS</h3> <h3>BS</h3> <h3>BCON</h3> <h3>MS</h3> <h3>M . Phill</h3> <h3>PhD</h3>");

// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students. 
// Assume that total marks are 500 for each student, display 
// the scores & percentages of students like:

let student_names = ["Ali" , "Bilal" , "Umar"];
let total_marks = 500;
let score = [320 , 230 , 480];
let percentages = [64 , 46 , 96];

console.log("320 - 64 =", 320 - 64 );
console.log("230 - 46 =", 230 - 46 );
console.log("480 - 96 =", 480 - 96 );

document.writeln ("Score of Ali is 320 , percentages = 64% , marks = 256 <br>");
document.writeln ("Score of Bilal is 230 , percentages = 46% , marks = 184 <br>");
document.writeln ("Score of Ali is 320 , percentages = 96% , marks = 384 <br><pre></per>");

// 9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end 
// & add that color to the end of the array. Display the 
// updated array in your browser.
// c. Add two more color to the beginning of the array. 
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color 
// & color name. Then add the color to desired 
// position/index. . Display the updated array in your 
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

// Initialize array with color names
let colors = ["Red", "Green", "Blue"];

// Display initial array
document.writeln("Initial array: " + colors.join(", ") + "<br><br>");

// a. Add color to the beginning
let addColorBeginning = prompt("Enter a color to add to the beginning:");
colors.unshift(addColorBeginning);
document.writeln("Array after adding color to the beginning: " + colors.join(", ") + "<br><br>");

// b. Add color to the end
let addColorEnd = prompt("Enter a color to add to the end:");
colors.push(addColorEnd);
document.writeln("Array after adding color to the end: " + colors.join(", ") + "<br><br>");

// c. Add two more colors to the beginning
colors.unshift("Yellow", "Orange");
document.writeln("Array after adding two colors to the beginning: " + colors.join(", ") + "<br><br>");

// d. Delete the first color
colors.shift();
document.writeln("Array after deleting the first color: " + colors.join(", ") + "<br><br>");

// e. Delete the last color
colors.pop();
document.writeln("Array after deleting the last color: " + colors.join(", ") + "<br><br>");

// f. Add color at specific index
let index = parseInt(prompt("Enter the index where you want to add a color:"));
let color = prompt("Enter the color name:");
colors.splice(index, 0, color);
document.write("Array after adding color at index " + index + ": " + colors.join(", ") + "<br><br>");

// g. Delete color(s) from specific index
let deleteIndex = parseInt(prompt("Enter the index where you want to delete color(s):"));
let deleteCount = parseInt(prompt("Enter the number of colors to delete:"));
colors.splice(deleteIndex, deleteCount);
document.writeln("Array after deleting " + deleteCount + " color(s) from index " + deleteIndex + ": " + colors.join(", ") + "<br>");

// 10. Write a program to store student scores in an array & 
// sort the array in ascending order using Array’s sort 
// method.

 let Score_of_students = [320 , 230 , 480 , 120];

 let sorted_Score_of_students = Score_of_students.toSorted()

//  11. Write a program to initialize an array with city names. 
// Copy 3 array elements from cities array to selectedCities 
// array.

let cities_list = ["Karachi", "Multan", "Lahore", "Sukkhar", "Pashawer", "Quetta", "Islamabad"];
let selected_Cities = [ "Quetta", "Islamabad"];

// 12. Write a program to create a single string from the 
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

let arr = ["This", "is", "my", "cat"];
console.log(arr.toString());

document.writeln ("<h3>Array</h3>")
document.writeln ("This , is , my , cat <br>")

document.writeln ("<h3>String</h3>")
document.writeln ("This is my cat <br>")

// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they 
// were stored. (FIFO-First In First Out)

let computer_parts_first = ["Keyboard", "Mouse", "Printer", "Moniter"];

document.writeln ("Devices");
document.writeln ("Keyboard", "Mouse", "Printer", "Moniter");
document.writeln ("Out: Keyboard, <br>Out: Mouse, <br>Out: Printer, <br>Out: Moniter <pre></pre>");

// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In-First Out)

let computer_parts_end = ["Keyboard", "Mouse", "Printer", "Moniter"];

document.writeln ("Devices");
document.writeln ("Keyboard" , "Mouse" , "Printer" , "Moniter");
document.writeln ("Out: Moniter, <br>Out: Printer, <br>Out: Mouse, <br>Out: Keyboard <pre></pre>");

// 15. Write a program to store phone manufacturers (Apple,
// Samsung, Motorola, Nokia, Sony & Haier) in an array. 
// Display the following dropdown/select menu in your 
// browser using document.write() method:

let company_names_first = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.writeln ("company names");
document.writeln ("Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier");
document.writeln ("First");
document.writeln ("Out: Apple, <br>Out: Samsung, <br>Out: Motorola, <br>Out: Nokia, <br>Out: Sony, <br>Out: Haier <pre></pre>");
document.writeln ("End");
document.writeln ("Out: Haier, <br>Out: Sony, <br>Out: Nokia, <br>Out: Motorola, <br>Out: Samsung, <br>Out: Apple");


