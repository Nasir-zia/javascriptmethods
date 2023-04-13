// 1
// method of the string

let a="Nasir";
console.log(a.length);

// 2

let b="Nasir";
let c="zia";
console.log(b.concat('',c));

// 3

let d="pakistan";
console.log(d.toUpperCase());
// 4
let d1="PAKISTAN";
console.log(d1.toLowerCase());

// 5
let e ="pakistan";

console.log(e.substring(2,5));

// 6

let e1="pakistan";
console.log(e1.indexOf("t"));

// 7


let e2="pakistan";

console.log(e2.replace('pakistan','lakki'));

// 8


let e3="p  akistan";

console.log(e3.trim(''));

// 9


let e4="pakistan";
console.log(e4.split(''));

// 10


let f =['a', 'b', 'c', 'd', 'e'];

console.log(f.reverse());



// Numbers methods


// sum

let e5=10;
let e6=20;
let c1 = e5+e6;
console.log(c1);




// division


let e7=10;
let e8=20;
let c2 = e7/e8;
console.log(c2);


// mul

let e9=10;
let e10=20;
let c3 = e9*e10;
console.log(c3);


// sub




let f2=10;
let f3=20;
let c4 = f2-f3;
console.log(c4);




// q and r

let f4=5;
let f5=20;
console.log(f4%f5);

// nearest number
let nearest= 5.5;
console.log(nearest.toFixed());

// random number

let randomNumber = Math.random();

console.log(randomNumber);

// power

let power = 2;

console.log(2**3);

// square

let square =Math.sqrt(7);

console.log(square);

// abs

let abs = Math.abs(4.77);
console.log(abs);


// min

let min = Math.min(11111);
console.log(min);


// max

let max = Math.max(23232);
console.log(max);





// date  and month format


let d3 = new Date();
console.log(d3);

// year format

let year = new Date();
console.log(year.getFullYear());

// month

let month = new Date();
console.log(month.getMonth());


// day

let day = new Date();
console.log(day.getUTCDay());

// special day

let specialDay = new Date(22,3,2023);
console.log(specialDay.get());

// millisecond format

let millisecond = new Date();
console.log(millisecond.getMilliseconds());


// object

let object ={
   year: new Date(),
   month: new Date(),
   day: new Date()

}
console.log(object);


// compare dates

let compare= new Date();
let compare1=new Date(compare);
let same=compare.getDate===compare1.getDate;
console.log(same);


// math

// abc

let abc=Math.abs(333);
console.log(abc);



// highest value

let highest=Math.max();

console.log(Math.max(1,3,5));

// min

let lowest=Math.min();

console.log(Math.min(1,3,5));


// near
let near= 5.5;
console.log(near.toFixed());


// round
let x = Math.round(2.5);

console.log(Math.round(x));

// exponent

let exponent = 2**2;
console.log(exponent);


// log
console.log(Math.log(2));

// sin

console.log(Math.sin(3));


// cos

console.log(Math.cos(5));



// sqrt

console.log(Math.sqrt(6));





// for loop

for(let i = 0; i <11; i++) {
    console.log(i);}


    // loop in array
    
let  z=['a','b','c','d','e','f'];

    for(let i in z) {
        console.log(z[i]);
    
    }


    // sum

    for (let i =0 ; i<100 ; i++) {

        if(i%2==0) {
            console.log(i);
    }
    
}
//  add even numbers
total=0;
for(let c5=0;c5<101;c5++){
  if(c5%2==0){
  total+=c5;
  console.log(total)
  }
  
  
}
// random number

let input=prompt("enter the random number");
let RandomNumber = Math.random();
console.log(RandomNumber);

if(input==RandomNumber){
    console.log('number is random')
     
}
else{
    console.log("number is not random")
}​

//  multiplication

let l =prompt("Enter the number");

for(i = 0 ; i<11;i++) {
console.log(i*l);
}


// fractional

for(i =0; i < 100; i++) {

    console.log(2/11* 11/2);}


     //   while loop


     let x1=prompt("Enter a number");
    while(x1){
        if(x1%2!=0){
            alert("odd", x1);
            i--;
        }
         else{
            alert("not odd",x1);
            break;
         }
    }

    // mul

    let x2=prompt("Mul number");

    while(x2<11){
        
        alert(x2*3);
    
        x2++;
    
    }

    // sum and average

    let y2=prompt("Average number");
    let y21= prompt("number");
    let y31= prompt("number");
    while(y2+y21+y31&&y2/y21/y31 ){
        
        alert("average number");
        y2++;
        y21++;
        break;
    }

    // reverse
    let c6 = 11;
    while(c6>0){
        console.log(c6);
        c6--;
    }

    // Do while loop
   // Write a program that asks the user to enter a password. Keep asking the user to enter a password until they enter the correct password.
   let password = "Nasir";
   let userPassword;
   
   do {
     userPassword = prompt("Please enter the password:");
     if (userPassword === password) {
       alert("Access granted!");
     } else {
       alert("Incorrect password. Please try again.");
     }
   } while (userPassword !== password);

//    Write a program that asks the user to enter a number and then prints out all the numbers from that number down to 1.
let num = parseInt(prompt("Enter a number: ")); 

do {
  console.log(num); 
  num--;  
}
 while (num >= 1);

 //Write a program that asks the user to enter a series of numbers and then finds the largest number. The program should keep asking the user for numbers until they enter a negative number.
 let largest=Number.NEGATIVE_INFINITY;
 let num1 = parseInt(prompt("Enter frist number"));
 let num2 = parseInt(prompt("Enter sec number"));
 let num3 = parseInt(prompt("Enter Thd number"));

 do{
    if (num1>num2&&num1<num3){
        alert("Number1 is greater");
    }
    else if (num2>num1&&num2>num3){
        alert("Number2 is greater");
    }
    else if (num3>num1&&num3>num2){
        alert("Number 3 is greater");
    
    }

    break;

 }while(largest<0);

//  switch
//Write a js program to print day of week name using switch case.

let  day =3;
switch (day) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid day of week");
}


// Write a js program print total number of days in a month using switch case.


let number = 0;
switch (number) {
    case 0:
        // console.log(new Date());
        for(number=0;number<=31;number++) {
            console.log(number);
        }
        break;
        }

        //  Write a js program to check whether an alphabet is vowel or consonant using switch case
        let  char =3;
        switch (char) {
          case 0:
            console.log("a vowel");
            break;
          case 1:
            console.log("e vowel");
            break;
          case 2:
            console.log("i vowel");
            break;
          case 3:
            console.log("o vowel");
            break;
          case 4:
            console.log("u vowel");
            break;
          default:
            console.log("constant");
        }
        
        // Write a js program to find maximum between two numbers using switch case.
        let num5 = 10
        let num6 = 20
        
        switch (num5<num6) {
            case false:
              console.log(num5);
              break;
            case true:
              console.log(num6);
             break;
            }
            
            //Write a js program to check whether a number is even or odd using switch case.
            let num4 = 10;

            switch(num4 % 2) {
              case 0:
                console.log(` is even`);
                break;
              case 1:
                console.log(`is odd`);
                break;
              default:
                console.log(`is not a number`);
            }

            //. Write a js program to check whether a number is positive, negative or zero using switch case.
            let num8 =23;
            switch(num8<0){
                case 0:
                    console.log("postive");
                    break;}
                    switch(num8>0){
                    case 1:
                        console.log("negtive");
                        break;

            }