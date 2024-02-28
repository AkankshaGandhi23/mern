const num = [22, 45, 65, 75, 87, 67,64];

//wap to get sum of all elements in array

for(let i=0; i<num.length; i++){
    console.log(num[i]);
    
}
let sum=0;
for(let i of num){
    sum= sum+i;
}
console.log(sum);

console.log('----------------------------------------');

sum2=0;
num.forEach( (a,i) => { sum2+=a; console.log( i, a); });

console.log("------------------------------------")

//get sum of all elements on even indexing

 let sum3=0;
num.forEach((a, i) =>{ if(i%2===0){
    sum3+=a;
}
})
console.log(sum3);

console.log("------------------------------------");

for(i of num){
    console.log(i**3);
}

console.log("------------------------------------");
//wap to add all even elements in array

sum4=0;
num.forEach( (a) => {if(a%2===0){
    sum4+=a;
}
})
console.log(sum4);




