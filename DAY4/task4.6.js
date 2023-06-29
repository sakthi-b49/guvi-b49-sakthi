// Remove duplicates from an array.
// Anonymous Function
let removeDuplicates = function(arr){
    let uniqueArray = arr.filter((value, index, self) => {
    return self.indexOf(value) === index;
    });
    console.log(uniqueArray);
};

//IIFE
(function(arr){
    let uniqueArray = arr.filter((value, index, self) => {
        return self.indexOf(value) === index;
        });
        console.log(uniqueArray);
})([1, 2, 3, 4, 5, 5, 4]);