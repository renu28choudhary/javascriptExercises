// Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.

function getEvenNumbers(arr) {
  let evenArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      evenArr.push(arr[i]);
    }
  }
  console.log(evenArr);
  return evenArr;
}
getEvenNumbers([21, 33, 48, 65, 67]);
////////
function evenNumber(a) {
  let result = a.filter((i) => i % 2 === 0);
  console.log(result);
  return result;
}
evenNumber([3, 4, 9, 2]);
