for(let i=0; i<=10; i++){
    console.log(i);
}

let nums=[22,3,33,44,55,65];
for(let i of nums){
    console.log(i);
}
console.log("-------------");

for(let n of nums){     // to get odd numbers
    if(n%2 !==0)
    console.log(n);
}