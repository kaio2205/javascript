/**
 * Estudo  das  funçoes  usando a sintaxe  moderna  de linguagem 
 * @author Kaio Eduardo 
 * 
 */

console.clear()
    function hello (){
        console.log ("hello word")
    }
hello();

console.log (typeof hello)

const hello2 = function(){
    console.log("Hello function assigned")
}

hello2 ();
console.log (typeof hello2)


// funçao anonima simplificada (Arrow function)


const hello3 = () =>{
    console.log("Hello  arrow function assigned")
}

hello3 ();
console.log (typeof hello3);




// funçao anonima super  simplificada (Arrow function) 
const hello4 = _=>console.log("Hello  arrow function assigned")


hello4 ();
console.log (typeof hello4);




// funçao simples com retorno 

function somarS (num1, num2){
    return console.log(num1+num2);

}

somarS(2,3);
console.log(typeof somarS);



// funçao Anonima  com retorno 
let somarA = function (num1, num2){
    return console.log(num1+num2);

}

somarA(2,3);
console.log(typeof somarA);


// funçao Anonima simplificada (Arrow functiom)  com retorno 


let somarAF = (num1, num2)=>{
    return console.log(num1+num2);

}

somarAF(2,3);
console.log(typeof somarAF);


// funçao Anonima SUPER!!!!!!! simplificada (Arrow functiom)  com retorno 


let somarAFS = (num1, num2)=> console.log(num1+num2);



somarAFS(2,3);
console.log(typeof somarAF);