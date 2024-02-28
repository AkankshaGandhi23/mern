const user = {name:"Akanksha", email:'akku@gmail.com' , password:'dff544di'};

console.log(user.email);

console.log(user['password']);

user.password ='ttt7777@';

console.log(user);

user.address = 'Lucknow';
console.log(user);

//  user = {a:2};   not valid due to const

delete user.address ;

console.log(user);

console.log( Object.keys(user) );
console.log(Object.values(user));

console.log('-----------------------------');


const Smartphone ={
    brand : 'Samsung',

    model : 'Galaxy M31',
    price : 14999 ,
    color : ['Black', 'Blue', 'Red'],
};

console.log(Smartphone.color[1].length);

Smartphone.color[2]='white';
console.log(Smartphone.color);

Smartphone.color.splice(-1,1,'gray');
console.log(Smartphone.color);

console.log('----------------------------');

Smartphone.color.push('Yellow');

console.log(Smartphone.color);
console.log('-----------------------------------------')

const myphone = {
    brand : 'Oneplus',
    model : '12',
    variant : {
        '8GB': 47000,
        '12GB' : 56000
}
};

console.log(myphone.variant['12GB']);

console.log('-------------------------------');

const phoneList = [{
    brand : 'samsung' , model: '12', price: 14999},
   { brand : 'Oneplus' , model: '16', price: 15999},
    {brand : 'Iq00' , model: '13', price: 16999},
    {brand : 'vivo' , model: '15', price: 13999},
];

console.log(phoneList.length);
console.log(phoneList[1].price); //code to find price of second smartphone

phoneList[phoneList.length-1].model = '11'; //code to change model of last Smartphone
console.log(phoneList);

//Q- find sum of all prices
//Q- get models of all Smartphones in an array
//Q- ['Galaxy M31', '12', 'Z7 pro' ,'v9']

//Q1 

let totalPrice = 0;

for(let phone of PhoneList){
    console.log(phone.price);
}

