//	Write a program to separate each digit from a given number? without using prefined methods?

function getEachDigit(num) {
  let output = [];
  while (num) {
    output.push(num % 10);
    num = Math.floor(num / 10);
  }
  console.log(output);
}
getEachDigit(2345);

function getDigit(n) {
  let arr = n.toString().split("");
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
getDigit(9876);
