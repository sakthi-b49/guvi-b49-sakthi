// return median of two sorted arrays of the same size:
//Anonymous Function
let findMedian =function(arr1, arr2){
    let mergedArray =[...arr1, ...arr2];
    mergedArray.sort((a,b)=> a-b);

    let midIndex = Math.floor(mergedArray.length/2);
    if(mergedArray.length % 2 === 0){
        let median = (mergedArray[midIndex -1] + mergedArray[midIndex]) /2;
        console.log(median);
    }
        else{

            console.log(mergedArray[midIndex]);
        }
    };

//IIFE
(function(arr1, arr2) {
    let mergedArray =[...arr1, ...arr2];
    mergedArray.sort((a,b)=> a-b);

    let midIndex = Math.floor(mergedArray.length/2);
    if(mergedArray.length % 2 === 0){
        let median = (mergedArray[midIndex -1] + mergedArray[midIndex]) /2;
        console.log(median);
    }
        else{

            console.log(mergedArray[midIndex]);
        }

})([1, 3, 5], [2, 4, 6]);