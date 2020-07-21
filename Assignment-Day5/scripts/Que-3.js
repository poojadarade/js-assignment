console.log("questio 3");

async function fetchdata(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    let str = JSON.stringify(data);

    console.log(str);

}
fetchdata();

let obj1 = [{
    "userId": 2,
    "id": 26,
    "title": "aliquam aut quasi",
    "completed": true
  }]
  console.log(obj1);
let str = JSON.stringify(obj1);
console.log(str)
