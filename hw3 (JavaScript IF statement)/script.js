//---------task1---------
// let age = 18;
// if(age >= 18){
//     console.log("You are an adult");
// }else{
//     console.log("You are a minor");
// }

//---------task2---------
// let score = 45;
// if(score >= 50){
//     console.log("You passed the test");
// }else{
//     console.log("You failed the test");
// }

//---------task3---------
// let fname = 'john';
// if(fname == 'john'){
//     console.log("Hello john");
// }

//---------task4---------
// let day = 'Monday';
// if(day != 'Saturday' && day != 'Sunday'){
//     console.log("It's a weekday");
// }

//---------task5---------
// let num  = 6;
// if(num % 2 == 0){
//     console.log("the number is even!");
// }else{
//     console.log("the number is odd!");
// }

//---------task6---------
// let char = 'a';
// let letters = 'abcdefghijklmnopqrstuvwxyz'
// for(let i = 0; i < letters.length; i++){
//     if(char == letters[i]){
//         console.log("It's a letter");
//     }
    
// }

//---------task7---------
// let list = [1,2,3];
// if(typeof(list) == 'object'){ //Note that in javascript, Array is an object.
//     console.log("It's an array");
// }

//---------task8---------
// let x = 5;
// if(x > 0){
//     console.log("x is a positive number");
// }

//---------task9---------
// let y = -5;
// if(y < 0){
//     console.log("y is a negative number");
// }

//---------task10---------
// let z = 9;
// if(z % 3 == 0){
//     console.log('z is a multiple of 3');
// }

//---------task11---------
// let gpa = 3;
// if(gpa >= 3){
//     console.log("Congratulations, you have a good GPA!");
// }

//---------task12---------
// let pass = '12345559'
// if(pass.length >= 8){
//     console.log("Your password is strong");
// }

//---------task13---------
// let age = 30;
// if(age >= 18 && age <= 65){
//     console.log("You are of working age");
// }

//---------task14---------
// let color = 'blue';
// if(color == 'red' || color == 'green' || color == 'blue'){
//     console.log("color is a primary color");
// }

//---------task15--------- ********************** 
function isValidNumber(number){
    if(isNaN(number) == 'number'){
        console.log(`${number} is a valid number`);
    }else{
        console.log(`${number} is not a number`);
    }
}

isValidNumber('12')




