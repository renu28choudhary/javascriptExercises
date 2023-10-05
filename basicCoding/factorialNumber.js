//Write a JavaScript program to calculate the factorial of a given number.

function getFactorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    let result = num * getFactorial(num - 1);
    console.log(result);
    return result;
  }
}
getFactorial(5);
