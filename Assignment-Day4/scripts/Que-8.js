
let ask = (question, yes, no)=>{
    if (confirm(question)) yes()
    else no()
}
ask(
    "Do you agree?",
    ()=>alert("you agreed.") ,
    ()=>alert("you canceled the executin.") 


);