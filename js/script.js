"use strict";
let num = 10;
num == 11 ? console.log(`Hello`) : console.log(`World`);

let number = 20;

while(number < 25) {
    console.log(number);
    number++;
}

for(let i = 0; i < 10; i++){
    console.log(i);
}

let arr = [2, 34, 12, 7];
arr.sort(function(a, b){
    return a - b;
});

console.log(arr);

const obj = {
    a: 23,
    b: 34,
    c: "new"
};

const newObj = {...obj};
newObj.a = 43;
console.log(newObj);
console.log(obj);