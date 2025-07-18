//for loop 
for(let i=0 ; i<=20 ; i++){ 
if(i%2==0){
    console.log("Itiration",+i);
}
}
//sum of numbers from 1 to 100
let sum=0;
for(let i=1 ; i<=100 ; i++){
    sum+=i;
    console.log("sum of numbers:"+sum);
}
console.log("sum of numbers:"+sum);
// composite numbers
let num= Number( prompt("Enter the number:"));
let count=0;
for(let i=2 ; i< num/2 ; i++){
    if(num%i==0){
        if(i!=num)
        count+=1;
    }
}
    if(count==0 && num>1){
        console.log("It is a prime number");
    }
    else{
        console.log("it is a composite number")
    }
//tables
let numb=prompt("Enter the number:")
for(let i=1 ;i<=10; i++){
    console.log(numb+"*"+i+"="+numb*i);
}
//for off
const fruits=["apple","banana","mango"];
for(const  fruit of fruits ){
    console.log(fruits);
}
//while loop
let counts=0;
while(counts<3){
console.log("count is"+counts)
counts++
}
