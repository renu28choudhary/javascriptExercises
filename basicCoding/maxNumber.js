//Write a JavaScript program to find the maximum number in an array.

function maxNumber(arr) {
  arr.sort(function (a, b) {
    return b - a;
  });
  console.log(arr[0]);
  return arr;
}
maxNumber([12, 86, 49]);
