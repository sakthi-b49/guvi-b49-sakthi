//Return all the prime numbers in an array.
// Anonymous Function
let getPrimeNumbers = function(arr){
    let primeNumbers = arr.filter(num =>{
        for(let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++ ){
            if (num % i ===0){
                return false;
            }
        }
        return num >1;
    });
    console.log(primeNumbers);
};
//IIFE
(function(arr){
    let primeNumbers = arr.filter(num =>{
        for(let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++ ){
            if (num % i ===0){
                return false;
            }
        }
        return num >1;
    });
    console.log(primeNumbers);


})([2, 3, 4, 5, 6, 7, 8]);