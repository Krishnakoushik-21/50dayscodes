let Username = prompt("enter your name:");
console.log(Username)
let age = Number(prompt("ENter your age:"));
switch(true){
    case (age<18 && age>13):
        console.log("Not eligible for vote");
        break;
    case (age>=18 && age<65):
        console.log("Eligible for vote");
        break;
     case (age>=65):
        // console.log("You are eligible for vote"); 
        console.log("You are a seniour citizen");
        break;
    default:
        console.log("no specical categiry");    

}
