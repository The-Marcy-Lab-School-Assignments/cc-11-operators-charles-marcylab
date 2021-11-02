//1
//give function 2 parameters called num1 and num2
// function areBothSame(num1 ,num2){
// //write an if statement
// //your if statement should check to see if both arguments have same value
//   if(num1 == num2){
//     return true;
//   }else{
//     return false;
//   }
// }
//or //return num1 == num2
//console.log(areBothSame(true, 1))

//2
//give function 2 parameters
function areBothEqual(num1, num2){
  //create a boolean condition
  return num1 === num2
}
//console.log(areBothEqual('2', 2))

//3
function areAllFourEqual(num1, num2, num3, num4){
  return num1 === num2 && num1 === num3 && num1 === num4
}
//console.log(areAllFourEqual("2", "2", "2", "2"))

//4
function areAllFourSame(num1, num2, num3, num4){
  return num1 == num2 && num1 == num3 && num1 == num4
}
//console.log(areAllFourSame(true, true, 1, "1"))
//5
function areAllFourSameOrEqual(num1, num2, num3, num4){
  if(num1 === num2 && num1 === num3 && num1 === num4){
    return "equal"
  }else if(num1 == num2 && num1 == num3 && num1 == num4){
    return "same"
  }else{
    return null
  }
}

console.log(areAllFourSameOrEqual(true, true, 1, "1"))
