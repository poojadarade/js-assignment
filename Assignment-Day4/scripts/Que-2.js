console.log("Question 2");

const student = {
    name : "Helsinki",
    age : 24,
    projects : {
        diceGame : "Two player dice game using javascript"
    }
}

//console.log(student.name);

const {name,age,projects:{diceGame}} = student;
console.log(name ,age ,diceGame);

