console.log("question 1");

let num=prompt("enter the number of ur choice");
let arr=[];
let n;
for(let i=0;i<num;i++)
{
if(n==num)
{
arr.push(num);
break;}
else
arr.push(i);
}
console.log(arr);

let odd = arr.filter(el=> el%2==1);
console.log(odd);
let cube = arr.filter(el=>el%2==1).map(el=>el**3);
console.log(cube);
