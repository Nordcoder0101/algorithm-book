function setAndSwap(name, age) {
  let myNumber = age;
  let myName = name;
  
  console.log(myName, 'is my name', myNumber, 'is my age');
  myName = age;
  myNumber = name;
  console.log(myName, 'is now my age', 'and', myNumber, 'is now my name')

}

function printIntegers() {
  for (var i = -52; i <= 1066; i++) {
    console.log(i);
  }
}

function beCheerful(){
  var counter = 0;
  while(counter < 98) {
    console.log('good morning!')
  }
}

function notAllMultiples()  {
  for (let i = -300; i <= 0; i += 3) {
    if (i === -3 || i === -6) {
      
    } else{
      console.log(i);
    }
   }
}

function printIntegersWhile(){
  let counter = 2000;
  while(counter <= 5280) {
    console.log(counter);
    counter ++;
  }
}
 
function birthday(a,b) {
  if((a === 10 || a === 19) && (b === 10 || b === 19)){
    console.log("How did you know?")
  } else {
    console.log("Just another day...")
  }
}
 
function leapYear(year) {
  let resultFour = year % 4
  let resultOneHundred = year % 100
  let resultFourHundred = year % 400;
  
  if(!resultFour && !resultOneHundred && !resultFourHundred){
    console.log(year, 'is a leap year')
  } else if (!resultFour && !resultOneHundred && resultFourHundred){
    console.log(year, 'is not a leap year')
  } else if (resultFour){
    console.log(year, 'is not a leap year')
  } else if (!resultFour) {
    console.log(year, 'is a leap year')
  }
}

function printAndCount(){
  
  let counter = 0;
  for (let number = 512; number <= 4096; number ++){
    result = number % 5;
    if (!result){
      console.log(number);
      counter ++;
    }
  }
  console.log(`There were ${counter} multiples of 5`)
}

function multiplesOfSix() {
  for (let number = 6; number <= 6000; number +=6){
    console.log(number);
  }
}

function dojoCounting() {
  for (let number = 1; number <= 100; number ++){
    let result = number % 5;
    if (!result){
      console.log('Coding');
    } else {
      console.log('Dojo');
    }
  }
}

function whatDoYouKnow(incoming) {
  console.log(incoming);
}

function addOddIntegers(){
  let sum = 0;
  for (let number = -300001; number <= 300000; number += 2) {
    sum += number;
    
  }
  console.log(sum, 'is sum');
}


function countdownByFour(){
  let number = 2016;

  while (number > 0) {
    console.log(number)
    number -= 4;
  }
}

function flexibleCountdown(lowNum, highNum, mult) {
  for (i = highNum; i >= lowNum; i --){
    let result = i % mult;
    if(!result){
      console.log(i);
    }
  }
}

function finalCountdown(param1, param2, param3, param4){
    while(low <= high) {
      let result = low % mult;
      if(!result && low !== exception){
        console.log(low);
    }
      low++; 
  } 
}

function countdown(number){
  let array = [];
  for(var i = number; i >= 0; i--){
    array.push(i)
  }
  console.log(array);
  return array;
}

function printAndReturn(a,b){
  console.log(a);
  return(b);
}

function firstPlusLength(arr){
  let sum = 0;
  if(typeof(arr[0]) !== 'number') {
    console.log(`Please provide an array with a number as it's first index`);
  } else {  
    sum += arr[0] + arr.length;
  }
  return sum;
}

function greaterThanSecond(arr){
  let comparedIndex = arr[1];
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if(comparedIndex < arr[i]) {
      console.log(arr[i])
      counter++;
    }
  }
  
  return counter;
}



function greaterThanSecondGen(arr) {
  if (arr.length < 2){
    console.log('please provide an array with 2 or more indices')
  }
  let counter = 0;
  let comparedIndex = arr[1];
  let newArr = [];
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] > comparedIndex){
      newArr.push(arr[i])
      counter += 1;
    }
  }
  console.log(counter, newArr)
  return newArr;
}

function thisLengthThatValue(num1, num2) {
  let arr = [];
  for (var i = 0; i < num1; i++){
    arr.push(num2)
  }
  if(arr.length === num2){
      console.log('Jinx!', arr)
      return arr;
  }
}

function fitFirstValue(arr){
  if(arr[0] < arr.length){
    console.log('Too big!')
  } else if (arr[0] > arr.length){
    console.log('Too small!!')
  } else {
    console.log('Just right!')
  }
}

function fahrenheitToCelcius(fDegrees){
  return (fDegrees -32)*(5/9);
}

function celciusToFahrenheit(cDegrees){
  console.log((cDegrees * (9 / 5) + 32))
  return (cDegrees *(9/5) +32)
}

function makeItBig(arr){
  for(let i = 0; i < arr.length; i++){
    if (arr[i] > 0){
      arr[i] = 'big'
    }
  }
  return arr;
}

function printLowReturnHigh(arr){ 
  low = arr[0];
  high = arr[0];

  for(var i = 0; i < arr.length; i++){
    if (arr[i] < low){
      low = arr[i]
    }
    if (arr[i] > high){
      high = arr[i];
    }
  }
  console.log(low);
  return high;
}

function printOneReturnAnother(arr){
  console.log(arr[0]);
  return arr[arr.length - 2]
}

function doubleVision(arr){
  let newArr = arr.map(x => x*2);
  return newArr;
}

function countPositives(arr){
  let counter = 0;
  for (let i = 0; i < arr.length; i++){
    if(arr[i] > 0){
      counter ++;
    }
  }
  arr[arr.length-1] = counter;
  console.log(arr);
}

function evensAndOdds(arr) {
  let evenCounter = 0;
  let oddCounter = 0;
  
  for(let i = 0; i < arr.length; i ++){
    
    if((arr[i] % 2) === 0){
      evenCounter ++;
      oddCounter = 0;
      if(evenCounter === 3){
        console.log('Even more so!')
      }
    } else {
      evenCounter = 0;
      oddCounter ++;
      if(oddCounter === 3) {
        console.log(`That's odd!`)
      }
    }
  }
}

function incremementTheSeconds(arr){
  for(let i = 1; i < arr.length; i+=2) {
    arr[i] += 1;
  }
  console.log(arr);
  return arr;
}

function previousLengths(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = (arr[i].length)
    
  }
  return arr;
}

function addSevenToMost(arr) {
  let newArr = arr.map(x => x+7);
  newArr.shift();
  return newArr;
}

function reverseArray(arr) {
  let reversedArray = [];
  for(let i = arr.length -1; i >= 0; i-- ){
    reversedArray.push(arr[i]);
  }
  console.log(reversedArray)
}

function outlookNegative(arr) {
  let newArr  = [];
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] > 0) {
      arr[i] = arr[i] * -1;
    }
    newArr.push(arr[i])
  }
  console.log(newArr)
}

function alwaysHungry(arr) {
  let yumCounter = 0;
  for(let i = 0; i < arr.length; i ++) {
    if(arr[i] === 'food') {
      console.log('yummy')
      yumCounter ++
    }
  }
  if(yumCounter === 0) {
    console.log(`I'm Hungry`);
  }
}

function swapTowardTheCenter(arr){

}

function scaleTheArray(arr, num){
  for(let i = 0; i < arr.length; i++){
    arr[i] = arr[i] * num;
  }
  return arr;
}
