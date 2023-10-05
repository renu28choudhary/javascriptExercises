//Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards).

function checkPalindrome(str) {
  let astr = str.toLowerCase().split("");
  let rstr = astr.reverse().join("");
  console.log(rstr);

  str === rstr
    ? console.log("Palindrome string")
    : console.log("Not a Palindrome string");
  return str;
}
checkPalindrome("Renu");
