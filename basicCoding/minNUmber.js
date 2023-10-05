//Write a JavaScript program to find the minimum number in an array.

function minNumber(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });
  console.log(arr[0]);
  return arr;
}
minNumber([8, 5, 2]);
