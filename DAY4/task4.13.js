//Arrow Function
//Peturn all the palindromes in an array:
let isPalindrome = (str =>) {
    let reversed = str.split("").reverse().join("");
    return str === reversed;

};
let getPalindromes = (arr) => {
    return arr.fliter ((str) => isPalindrome(str));
};

console.log(getPalindromes(["level", "madam", "radar"]));