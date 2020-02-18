//Javascript is case sensitive
/*Javascript statement end in a semicolon
Javascript comments can span single or multiple lines*/

/*Demo - Arrays
An array is a collection of data
It holds multiple data items under a single name
To access individual items inside an array, you will use a loop
*/
/*arrays start at position 0 and ends at n-1*/
console.log("Week4 04 startup code");//log in console - developer tools

function DemoArrays(){
/*var student1=50;
var student2=80;
var student3=60;
var student4=70;
var student5=50;*/

var studentGrade = [50,80,60,70,50];

/*console.log(studentGrade[0]);//this is item 1
console.log(studentGrade[1]);//this is item 2
console.log(studentGrade[2]);//this is item 3
console.log(studentGrade[3]);//this is item 4
console.log(studentGrade[4]);//this is item 5*/

var sum = 0;
for(var i =0; i < 5; i++)//access student grades individually INSIDE LOOP
{    
    console.log("Grade for student #" + i + " is " + studentGrade[i]);
 
    if (studentGrade[i]>=75)
        console.log("Kudos");
 
        sum = sum + studentGrade[i];
}

console.log("Sum of all grades is "+ sum);//display sum AFTER all calculations

var avg = sum / 5;
console.log("Average is "+ avg);
}
