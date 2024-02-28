const num = [1 , 4 , 6 , 7 , 8, 5];
// find square of all the elements in the above array

const arr1 = num.map((n) => {return n**2});  // callback function
console.log(arr1);

console.log('--------------------------------------')

const prices = ['₹344.55' , '₹455.77' ,'₹9787.466' , '₹756.87'];
console.log(parseInt('₹455.77'.slice(1)));
const numprice = prices.map((p) => {return parseInt(p.slice(1))});  //parseInt to convert in number
console.log(numprice);

console.log('--------------------------------------')

prices2 = [1200 ,3400 , 200 , 20 ,400];

const budgetprice =prices2.filter((p) => {return p>2000 && p<10000});

console.log(budgetprice);

console.log('---------------------------------');

const names = ['raju' , 'chaman' , 'kaliya' , 'chotu'];

const longnames = names.filter((r) => {return r.length>=5 });
console.log(longnames);

console.log('--------------------------------------')

const num22 = [23, 443, 556, 65, 44, 42];
//filter aal the even numbers

const even = num22.filter( ( f ) => { return f%2 === 0});
console.log(even);

console.log('----------------------------------------');

const phoneList = [{
    brand : 'samsung' , model: '12', price: 14999},
   { brand : 'Oneplus' , model: '16', price: 15999},
    {brand : 'Iq00' , model: '13', price: 16999},
    {brand : 'vivo' , model: '15', price: 33999},
];

const price = phoneList.filter ( (p) => {return p.price<20000});
console.log(price);

console.log('----------------------------------')

const samsungphone = phoneList.filter( (phone) => {return phone.brand ==='samsung'});
console.log(samsungphone);

console.log('--------------------------------------');

const totalPrice = phoneList.reduce( (acc , phone) => {return acc + phone.price},0);  //puchna hai
console.log(totalPrice);
