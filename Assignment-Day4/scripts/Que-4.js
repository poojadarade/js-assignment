


function addition(){  
    a=Number(document.calculator.number1.value);  
    b=Number(document.calculator.number2.value);  
    c=a+b;  
    document.calculator.total.value=c;  
    }  

function multiply(){  
a=Number(document.calculator.number1.value);  
b=Number(document.calculator.number2.value);  
c=a*b;  
document.calculator.total.value=c;  
} 

function subtraction(){  
    a=Number(document.calculator.number1.value);  
    b=Number(document.calculator.number2.value);  
    c=a-b;  
    document.calculator.total.value=c;  
    }  
     
      
    function division(){  
    a=Number(document.calculator.number1.value);  
    b=Number(document.calculator.number2.value);  
    c=a/b;  
    document.calculator.total.value=c;  
    }  
      
      
    function modulus(){  
    a=Number(document.calculator.number1.value);  
    b=Number(document.calculator.number2.value);  
    c=a%b;  
    document.calculator.total.value=c;  
    }

    function squreroot(){
        a=Number(document.calculator.number1.value);  
        b=Number(document.calculator.number2.value); 
       let c= Math.sqrt(a,b);
       document.calculator.total.value=c;  

    }
    
   function percentage(){
    a=Number(document.calculator.number1.value);  
    b=Number(document.calculator.number2.value); 
    var result = a / b ;
        var c = result * 100 ;
        document.calculator.total.value=c;  

   }

