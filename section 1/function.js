//addtion
function add(a,b){
   var c=a+b;
    console.log(c);

}

add(2,44);

//average
const getavg = function(m1,m2,m3){
    const avg =(m1+m2+m3)/3;
    return avg;
    //console.log(avg);
}
const result=getavg(34,54,65);
console.log(result);

//factorial

const getfact=(n) => {
    let fact=1;
    for(i=1;i<=n;i++){
        fact=fact*i;
    }
   // console.log(fact);
   return fact;
}
getfact(5);

const myres=getfact(5)/getfact(10);
console.log(myres);