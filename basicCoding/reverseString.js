//Write a JavaScript program to reverse a given string.

function getReverseString(str) {
  let rstr = str.split("").reverse().join("");
  console.log(rstr);
  return rstr;
}
getReverseString("hello");
