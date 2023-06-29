//Arrow Function
//Return all prime numbers in an array:
let isPrime = (num) => {

    if(num <= 1){
        return false;
    }
    for(let i = 2; i <= Math.sqrt(num); i++){
        if (num % i === 0){
            return false;
        }
    }
    return true;
};

let getPrimeNumbers = (arr) => {
    return arr.filter((num) => isPrime(num));
};
console.log(getrPrimeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));