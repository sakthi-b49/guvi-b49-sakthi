//Sum of all number in an array
//Anonymous Function
let sumOfNumbers = function(arr){
    let sum =0;
    arr.forEach(num =>
    {
        sum+=Number;
    });
    console.log(sum);
};
//IIFE
(function(arr){
    let sum=0;
    arr.forEach(num => {
        sum+=num;
    });
    console.log(sum);
})([1, 2, 3, 4, 5]);