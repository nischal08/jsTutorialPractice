/**********************************
 * Variable and data types
 */

/*
var firstName = 'Jhon';
console.log(firstName);

var lastName ='snow';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'teacher';
console.log(job);

// Variable naming rules
var _3year=3;
var johnMark = 'john and mark';
var function =23;
var if = 23;
var delete = 23;
*/

/**********************************
 * Variable mutation and type correction
 */

/*
var firstName ='Jhon';
var age = 28;

//Type coercion
console.log(firstName+' '+age);

var job,isMarried;
job='teacher';
isMarried = false;

console.log(firstName+' '+age+' year old'+' '+job+'. '+'Is he married ? '+isMarried );

//Variables Mutation
age='twenty eight';
job='driver'; 

alert(firstName+' '+age+' year old'+' '+job+'. '+'Is he married ? '+isMarried );

var lastName = prompt('What is his last name?');
console.log(firstName+' '+lastName);
*/

/**********************************
 * Basic operators
 */

/* 
var now,yearJohn,yearNischal,ageJohn,ageNischal;
now =2019;
ageJohn =28;
ageNischal=22;

//Math operators
yearJhon =now -ageJohn;
yearNischal =now -ageNischal;

console.log(yearJohn+' '+yearNischal );

console.log(now+2);
console.log(now*2);
console.log(now/10);

//Logical operators
var johnOlder=ageJohn>ageNischal;
console.log(johnOlder);

//typeof operator
console.log(typeof johnOlder);
console.log(typeof now);
console.log(typeof ageJohn);
console.log(typeof 'hi its me');
var x;
console.log(typeof x);
*/

/**********************************
 * Operator precedence
 */

/* 

var now ,ageNischal,yearNischal,fullAge,isFullAge; 
now = 2019;
//ageNischal=22;
//yearNischal=now-ageNischal;
yearNischal=1997;
fullAge =18;

//Multiple operator
isFullAge = now-yearNischal>=fullAge;//true
console.log(isFullAge);


//Grouping
var ageNischal = now -yearNischal;
var ageJohn =35;
var average = (ageNischal+ageJohn )/ 2;
console.log(average);

//Multiple assignments
var x, y;
x = y =(3+5)*4-6;//8*4-6//32-6//26
console.log(x,y);

//More operators
x *= 2;  //x = x*2;
console.log(x);

x+=10; //x=x+10
console.log(x);



x++; //x = x+1 or x += 1
console.log(x);

x--; //x = x-1 or x -= 1
console.log(x);

*/

/*****************************
 * CODING CHALLENGE 1
 */

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/

/**********************
 *Answers of the CODING CALLENGE 1
 */

/*

var markMass,johnMass,markHeight,johnHeight,markBMI,johnBMI,isMarkHigherBMI;
alert("Enter the mass and height of Mark andd John");
markMass=prompt("Mark's Mass");//=60;//kg
johnMass=prompt("John's Mass");//=70;//kg
markHeight=prompt("Mark's Height ");//=1.6;//meters
johnHeight=prompt("John's Height");//2.1;//meters

markBMI=markMass/(markHeight*markHeight);
johnBMI=johnMass/(johnHeight*johnHeight);

console.log("Marks BMI is "+markBMI,"John BMI is"+johnBMI);

isMarkHigherBMI = markBMI>johnBMI;
console.log("Is mark BMI higher than of John ? "+isMarkHigherBMI);

 
*/

/******************************
 *If / else statements
 */

/**

var firstName = "John";
var civilStatus = "single";

if (civilStatus === "married") {
  console.log(firstName + " is married!");
} else {
  console.log(firstName + " will hopefully marry soon :)");
}

var isMarried = true;
if (isMarried) {
  console.log(firstName + " is married!");
} else {
  console.log(firstName + " will hopefully marry soon :)");
}


var markMass,johnMass,markHeight,johnHeight,markBMI,johnBMI,isMarkHigherBMI;
//alert("Enter the mass and height of Mark andd John");
markMass=60;//prompt("Mark's Mass");////kg
johnMass=70;//prompt("John's Mass");////kg
markHeight=1.6;//prompt("Mark's Height ");////meters
johnHeight=2.1;//prompt("John's Height");////meters

markBMI=markMass/(markHeight*markHeight);
johnBMI=johnMass/(johnHeight*johnHeight);

if(markBMI>johnBMI){
    console.log('BMI of Mark\'s is higher than BMI of John\'s.');
}else{
    console.log('BMI of John\'s is higher than BMI of Mark\'s.');
}
//console.log("Marks BMI is "+markBMI,"John BMI is"+johnBMI);

//isMarkHigherBMI = markBMI>johnBMI;
//console.log("Is mark BMI higher than of John ? "+isMarkHigherBMI);

 */

/******************************
 *Boolean Logic
 */

/** 
var firstName = "John";
var age = 20;

if (age < 13) {
  console.log(firstName + " is a boy.");
} else if (age >= 13 && age < 20) {
  console.log(firstName + " is a teenager.");
  //Between 13 and 20 === age >=13 AND age <20
} else if (age >= 20 && age < 30) {
  console.log(firstName + " is a young man.");
} else {
  console.log(firstName + " is a man.");
}
*/

/******************************
 *The Ternary Operator and Switch Statements
 */

/* var firstName = "Jhon";
var age = 30;

//Ternary Operator
age >= 18
  ? console.log(firstName + " drinks beer.")
  : console.log(firstName + " drinks juice.");

var drink = age >= 18 ? "beer" : "juice";
console.log(drink);

// if (age>=18) {
//    var drink='beer';
//    console.log(drink);
// }else{
//     var drink='juice';
//     console.log(drink);
// }

//Switch statement
var job = "instructor";
switch (job) {
  case "teacher":
  case "instructor":
    console.log(firstName + " teaches kids how to code.");
    break;

  case "driver":
    console.log(firstName + " drives the uber in Lisbon.");
    break;

  case "designer":
    console.log(firstName + " design beautiful websites.");
    break;

  default:
    console.log(firstName + " does something else.");
}

var age=20;
switch (true) {
  case age < 13:
    console.log(firstName + " is a boy.");
    break;

  case age >= 13 && age < 20:
    console.log(firstName + " is a teenager.");
    break;

  case age >= 20 && age < 30:
    console.log(firstName + " is a young man.");
    break;

    default:
    console.log(firstName + " is a man.");
}
 */

/******************************
 *Truthy and Falsy values and Equality Operators
 */

/* //falsy values : undefined , null , 0, '', NaN
// truthy values : Not falsy values

var height = 23;

if (height || height === 0) {
  console.log("varible is defined.");
} else {
  console.log("varible has not been defined.");
}

//Equality operators
if(height=='23'){
    console.log('The == operator does type coercion!');
} */

/*****************************
 * CODING CHALLENGE 2
 */

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/

/******************************
 *Coding challegenes 2 Answer
 */

/* 
var johnAverageScorce, mikeAverageScorce;
johnScorces = 89 + 120 + 103;
mikeScorces = 116 + 94 + 123;
maryScores = 97 + 134 + 105;

johnAverageScorce = johnScorces / 3;
mikeAverageScorce = mikeScorces / 3;
maryAverageScorce = maryScores / 3;
console.log(johnScorces,mikeScorces,maryScores);
console.log(johnAverageScorce,mikeAverageScorce,maryAverageScorce);

//  if (johnAverageScorce > mikeAverageScorce) {
//   console.log("John has the higher average scores.");
// } else if(mikeAverageScorce>johnAverageScorce){
//   console.log("Mike has the higher average scores.");
// } else{
//     console.log('Its draw...');
// } 

if (
  johnAverageScorce>mikeAverageScorce && johnAverageScorce>maryAverageScorce
) {
    console.log("John\'s team wins with "+johnAverageScorce+" points.");
} else if (mikeAverageScorce>johnAverageScorce && mikeAverageScorce>maryAverageScorce) {
    console.log("Mike\'s team wins with "+mikeAverageScorce+" points.");
} else if(maryAverageScorce>johnAverageScorce && maryAverageScorce>mikeAverageScorce){
  console.log("Mary\'s team wins with "+maryAverageScorce+" points.");
}else{
    console.log("It is draw...");
}
 */

/*****************************
 * Functions
 */

/* function calculateAge(birthYear) {
  console.log(birthYear);
  var now = 2019;
  return now - birthYear;
}
var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageNischal = calculateAge(1997);
console.log(ageJohn, ageMike, ageNischal);

function yearUntilRetirement(year, firstname) {
  var age = calculateAge(year);
  var retirement = 65 - age;
  if(retirement>0){
  console.log(firstname + " retires in " + retirement + " years.");
}else{
    console.log(firstname+" is already retired.")
}
}
yearUntilRetirement(1992, "Jhon");
yearUntilRetirement(1997, "Nischal");
yearUntilRetirement(1947, "Mike");
 */

/*****************************
 * Functions statements and Expressions
 */

/* //function declaration
// function whatDoYouDo(job,firstName){
//}
 
//function expression
var whatDoYouDo = function(job, firstname) {
  switch (job) {
    case "teacher":
      return firstname + " teaches kid\'s how to code.";

    case "driver":
      return firstname + " driver a cab in Kathmandu.";

    case "designer":
      return firstname + " designs a beautiful websites.";

    default:
      return firstname+' does something else.';
  }
};

console.log(whatDoYouDo('teacher','Ram'));
console.log(whatDoYouDo('driver','Hari'));
console.log(whatDoYouDo('designer','Nischal'));
console.log(whatDoYouDo('Kam','John'));

 */

/*****************************
 * Arrays
 */

/* var names =['John','Mark','Jane'];
var years =new Array(1990,1969,1948);

console.log(names[0]);
console.log(names);
console.log(names.length);

//Mutate array data
names[1]='Ben';
names[names.length]='Mary';
console.log(names);

//Different data types 

var john = ['John','Smith',1990,'teacher','designer',false];

john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);
console.log(john.indexOf(1990));

var isDesigner=john.indexOf('designer') ===-1 ? 'John is not designer' : 'John is a designer';
console.log(isDesigner); */

/*****************************
 * CODING CHALLENGE 3
 */

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator 
(as a function). He likes to tip 20% of the bill when the bill is less
 than $50, 15% when the bill is between $50 and $200, and 10% if the 
 bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/

/*****************************
 * CODING CHALLENGE 3 ANSWER
 */

/* var bill, percentage, tip;
function tipCalculator(bill) {
  if (bill < 50) {
    percentage = 0.2;
  } else if (bill > 50 && bill < 200) {
    percentage = 0.15;
  } else {
    percentage = 0.1;
  }
  return bill * percentage;
}
bill = [124, 48, 268];

tip = [tipCalculator(bill[0]), tipCalculator(bill[1]), tipCalculator(bill[2])];

total = [tip[0] + bill[0], tip[1] + bill[1], tip[2] + bill[2]];

console.log(tip, total); */

/*****************************
 * Objects and properties
 */

/* var john = {
  firstname: "John",
  lastName: "Smith",
  birthYear: 1990,
  family: ["Jane", "Mark", "Bob", "Emily"],
  job: "teacher",
  isMarried: false
};

console.log(john.firstname);
console.log(john['lastName']);
var x= 'birthYear';
console.log(john[x]);

//mutate or modified
john.job='designer';
john['isMarried']=true;
console.log(john);

//creating new objects syntax
var jane = new Object();
jane.name='jane';
jane.birthYear=1969;
jane['lastName']='Smith';
console.log(jane);
 */

/*****************************
 * Objects and methods
 */

/* var john = {
  firstname: "John",
  lastName: "Smith",
  birthYear: 1990,
  family: ["Jane", "Mark", "Bob", "Emily"],
  job: "teacher",
  isMarried: false,
  calcAge: function() {
    this.age=2019 - this.birthYear;
  }
};

john.calcAge();
console.log(john);
 */

/*****************************
 * CODING CHALLENGE 4
 */

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/

/*****************************
 * CODING CHALLENGE 4 solution
 */
/* var Mark = {
  fullName: "Mark",
  mass: 81, //kg
  height: 2, //meters
  calcBMI: function() {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  }
};

var John = {
  fullName: "John",
  mass: 69, //kg
  height: 1.70688, //meters
  calcBMI: function() {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;//return then we have to do all the methods calcBMI()
  }
};

//Mark.calcBMI();  //Return then no call the methods
//John.calcBMI();
console.log(Mark);
console.log(John);
console.log(Mark.calcBMI());
console.log(John.calcBMI());

//A BMI of less than 18.5 means that a person is underweight. A BMI of between 18.5 and 24.9 is ideal. A BMI of between 25 and 29.9 is overweight. A BMI over 30 indicates obesity.

//One time call of calcBMI will do.
if(Mark.calcBMI()>John.calcBMI()){
  console.log(Mark.fullName+" has a highest BMI with "+Mark.BMI);
}else if(Mark.BMI<John.BMI){
  console.log(John.fullName+" has a highest BMI with "+John.BMI);
}else{
  console.log("They have equal BMI");
}
 */

/*****************************
 * Loops and iteration
 */

//For loop

/* for (var i = 0; i < 10; i += 2) {
  console.log(i);
}

// for (var i = 0; i < 10; i ++) {
//   console.log(i);
// } //down there expanation

//i=0,0<10 true,log i to console,i++
//i=1,1<10 true,log i to console,i++
//...
//i=9,9<10 true,log i to console,i++
//i=9,10<10 false,exit the loop!

var john = ["John", "Smith", 1990, "teacher", "designer", false, "blue"];

// console.log(john[0]);
// console.log(john[1]);
// console.log(john[2]);  //not good way for 50 item we have to do till 50 console.log(john[...]);
// console.log(john[3]);
// console.log(john[4]);

 for(var i=0;i<john.length;i++){
  console.log(john[i]);   //john.length is 5 because of the item in array .
}


//While loop
var i =0;
while(i<john.length){
  console.log(john[i]); 
  i++;
}
 

//Continue and break statements

var john = ["John", "Smith", 1990, "teacher", "designer", false, "blue"];

for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== "string") continue;
  console.log(john[i]);
}

for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== "string") break;
  console.log(john[i]);
}

//loop backward
for (var i = john.length-1; i>=0 ; i--) {
  console.log(john[i]);
} */

/*****************************
 * CODING CHALLENGE 5
 */

/*
Remember the tip calculator challenge? Let's create a more advanced version 
using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were
 $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the 
bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do
 the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array 
containing final paid amounts (bill + tip). HINT: Start with two empty arrays[]
 as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different
 restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the 
bill is between $100 and $300, and 25% if the bill is more than $300 (different 
  than John).

5. Implement the same functionality as before, this time using Mark's tipping 
rules
6. Create a function (not a method) to calculate the average of a given array
 of tips. HINT: Loop over the array, and in each iteration store the current 
 sum in a variable (starting from 0). After you have the sum of the array, 
 divide it by the number of elements in it (that's how you calculate the 
 average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/

/*****************************
 * CODING CHALLENGE 5 SOLUTION
 */

//answer

/* var john = {
  fullName: "John Smith",
  bills: [124, 48, 268, 180, 42],

  calcTips: function() {
    this.tips = [];
    this.finalValues = [];

    for (var i = 0; i < this.bills.length; i++) {
      var percentage;
      var bill = this.bills[i];

      if (bill < 50) {
        percentage = 0.2;
      } else if (bill >= 50 && bill < 200) {
        percentage = 0.15;
      } else {
        percentage = 0.1;
      }

      this.tips[i] = bill * percentage;
      this.finalValues[i] = this.tips[i] + bill;
    }
  }
};

//Marks

mark = {
  fullName: "Mark Walker",
  bills: [77, 375, 110, 45],

  calcTips: function() {
    this.tips = [];
    this.finalValues = [];

    for (var index = 0; index < this.bills.length; index++) {
      var percentage;
      bill = this.bills[index];

      if (bill < 100) {
        percentage = 0.2;
      } else if (bill >= 100 && bill < 300) {
        percentage = 0.1;
      } else {
        percentage = 0.25;
      }

      this.tips[index] = percentage * bill;
      this.finalValues[index] = percentage * bill + bill;
    }
  }
};

function calcAverage(tips) {
  var sum = 0;

  for(var i =0;i<tips.length;i++){
  sum += tips[i];
  }
  return sum/tips.length;
}

john.calcTips();
mark.calcTips();
john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john, mark);
console.log(john.tips.length);
console.log(mark.tips.length);


if(john.average>mark.average){
  console.log(john.fullName +'\'s pays higher tips, with average of '+john.average);
  
}else if(john.average<mark.average){
  console.log(mark.fullName+'\'s pays higher tips, with average of '+mark.average);
  
}else{
  console.log('Both are equal');
  
} */