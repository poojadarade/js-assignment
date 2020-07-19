
let sales= prompt("Enter sales: ")
 
if(sales<=5000){
    num =sales*0.02;
    console.log("The total commission is "+num.toFixed(2))
}
else if(sales<=10000){
    num =sales*0.05;
    console.log("The total commission is "+num.toFixed(2))
   }
   else if(sales<=20000){
    num =sales*0.07;
    console.log("The total commission is "+num.toFixed(2))   }
   else{
    num =sales*0.1;
    console.log("The total commission is "+num.toFixed(2))
   }
