let data = {
"name": "sakthi",
"age" : 25,
"city" : "kovilpatti"
};
//for loop
console.log("\nUsing for loop :");
for (let key in data){
    console.log(key + ":" + data[key]);
}
//for in loop
console.log("\nUsing for in loop :");
for (let key in data){
    if(data.hasOwnProperty(key)){
    console.log(key + ":" + data[key]);
}
}
//for...of loop( for array)
console.log("\n\nUsing for...of loop :");
let dataArray = Object.entries(data);
for(let [key, value] of dataArray){
    console.log(key + ": " + value);
}
//forEach  loop( for array)
console.log("\nUsing forEach loop :");
let dataArray2 = Object.entries(data);
dataArray2.forEach(([key, value] )=>{
    console.log(key + ": " + value);
});