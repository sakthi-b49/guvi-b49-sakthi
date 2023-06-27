let obj1 = {name : "Person 1", age : 5};
let obj2 = {age : 5, name : "Person 1"};
//convert object to string
let obj1String = JSON.stringify(obj1);
let obj2String = JSON.stringify(obj2);
//sort the string
let sortedObj1String = obj1String.split('').sort().join('');
let sortedObj2String = obj2String.split('').sort().join('');
//compare sorted string
let isEqual = sortedObj1String === sortedObj2String;
console.log(isEqual);