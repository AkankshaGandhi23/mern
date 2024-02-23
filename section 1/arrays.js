const arr1=[ 44, 66 ,77, 'akku', null, true];
console.log(arr1);

const fruits = ['Apple', 'Mango','grapes','kiwi','orange'];

//indexing
console.log( fruits[3]); //also works with string
console.log( fruits[1]);
console.log( fruits.indexOf( 'orange'));  //with string also💕  //window+dot💕
console.log(fruits.at(-2));  //also with string
console.log(fruits.length);  //also with string

//slicing
console.log(fruits.slice(1,4));  //alsowith string
console.log(fruits.slice(1));      //alsowith string    //ctrl+shift+4 rs symbol

price='₹3455677.456';
console.log(price.slice(1))

fruits.push('banana');  // add element at the end
fruits.unshift('papaya');  //add element at the begining
console.log(fruits);

fruits.pop();  //removes from end
fruits.shift();  //removes from front
console.log(fruits);