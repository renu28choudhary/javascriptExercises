// Write a JavaScript program to find the largest element in a nested array.
// not working solution
function getLargestElement(nestedArr) {
  let largest = nestedArr[0][0];
  for (let arr of nestedArr) {
    for (let num of arr) {
      if (num > largest) {
        largest = num;
      }
    }
  }
  return largest;
}
console.log(getLargestElement([2, 3, 4, [6, 9]]));
