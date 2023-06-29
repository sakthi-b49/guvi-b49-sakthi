//Arrow Function
//Sum of all numbers in an array:
let calculateSum = (arr) => {
    return arr.reduce((sum,num)=>sum+num, 0);
};

console.log(calculateSum([1, 2, 3, 4, 5, 6]));