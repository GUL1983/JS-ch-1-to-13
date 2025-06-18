// CHAPTER 17-20 ARRAYS AND LOOP

// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)

let Array = [];
let array1 = [];

// 2. Declare and initialize a multidimensional array 
// representing the following matrix:

let matrix = [0, 1, 2, 3 , 1, 0, 1, 2, 2, 1, 0, 1];
document.writeln ("0 1 2 3 <br> 1 0 1 2 <br> 2 1 0 1 <br><pre></pre>");

// 3. Write a program to print numeric counting from 1 to 10.

for(var i = 1;i< 11 ;i++){
    document.writeln(i + "<br>")
}

// 4. Write a program to print multiplication table of any 
// number using for loop. Table number & length should be 
// taken as an input from user.

let table = prompt ("Enter a number to show ist multiplication table")
let table_number = prompt ("Enter a tablenumber")
let table_lenght = prompt ("Enter a number lenght")

// 2 * 1 = 2
let tableNum = 2
for(var i = 1; i <= 15; i++){
    document.writeln(tableNum+ ""+  "x"+ " "+ i + "=" + tableNum * i ,"<br>")
}

// 5. Write a program to print items of the following array 
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, 
// “strawberry”]

let fruits = ["“apple”, “banana”, “mango”, “orange”, “strawberry”"];

for(let i = 0 ;i < fruits.length; i++) {
    document.writeln ("<pre></pre> apple<br> banana<br> mango<br> orange<br> strawberry <pre></pre>")
    document.writeln ("Element 0 is at apple <br>")
    document.writeln ("Element 1 is at banana <br>")
    document.writeln ("Element 2 is at mango <br>")
    document.writeln ("Element 3 is at orange <br>")
    document.writeln ("Element 4 is at strawberry <br>")
}

// 6. Generate the following series in your browser. See 
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15

document.writeln("<h3>counting</h3>.")
var i = 1
for(i;i<= 15; i++){
    document.writeln(i)
}

// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

let R_counting = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let Reverse_counting = R_counting.reverse();
console.log("Reverse_counting:", Reverse_counting);
document.writeln("<h3>Reverse counting</h3>.")
document.writeln ("10, 9, 8, 7, 6, 5, 4, 3, 2, 1<br> <pre></pre>");

// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20

document.writeln ("<h3>Even</h3>")
for(let a = 0; a < 20; a = a+2) {
    document.writeln(a)
}

// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
 
document.writeln("<h3>Odd</h3>.")
for(var b = 1; b <= 20 ; b = b+2){
    document.writeln(b)
}

// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20kd

let k_values = ["2k", "4k", "6k", "8k", "10k", "12k", "14k", "16k", "18k", "20kd"]
console.log("k_values:" , k_values);
document.writeln("<h3>Series</h3>.")
document.writeln ("2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20kd 1<br> <pre></pre>");

// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an 
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example

let bakery_food_items = prompt ("Welcome to our Bakery what do you want to order Sir/Ma'am")

let bakery_items = ["cake","apple pie", "cookie", "chips", "patties"];
var ismatch = false 

for (let i = 0; i < bakery_items.length, i++;) {
    console.log(bakery_items[i]);
    if (bakery_items[i] === "cake")
        ismatch = ture
    alert ("cake is available at index 0 in our bakery")
    alert ("apple pie is available at index 1 in our bakery")   
    alert ("cookie is available at index 2 in our bakery")   
    alert ("chips is available at index 3 in our bakery")   
    alert ("patties is available at index 4 in our bakery")       
}
if (ismatch === false) {
    alert("this item is not available")
}

// 8. Write a program to identify the largest number in the 
// given array.
// A = [24, 53, 78, 91, 12]

let A = [24, 53, 78, 91, 12];
let largest = A[0];

for (let i = 1; i < A.length; i++) {
  if (A[i] > largest) {
    largest = A[i];
  }
}
console.log("Array: ", A);
console.log("Largest number: ", largest);
document.writeln ("Largest number is 91 <br>")

// 9. Write a program to identify the smallest number in the 
// given array.
// A = [24, 53, 78, 91, 12]

let A1 = [24, 53, 78, 91, 12];
let smallest = A1[0];

for (let i = 1; i < A1.length; i++) {
    if (A1[i] < smallest) {
        smallest = A1[i]
    }
}
console.log("Array: ", A1);
console.log("smallest number: ", smallest);
document.writeln ("smallest number is 12 <br><pre></pre>");

// 10. Write a program to print multiples of 5 ranging 1 to 
// 100

// 5 * 1 = 5
let table_Num = 5
for(var i = 1; i <= 20; i++){
    document.writeln(table_Num+ ""+  "x"+ " "+ i + "=" + table_Num * i ,"<br>")
}