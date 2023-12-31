//variables
const allNumbers = document.querySelectorAll('.number');
const symbols = document.querySelectorAll('.symbol');
const equalButton = document.querySelector('.equal');
const cButton = document.querySelector('.c');
const ceButton = document.querySelector('.ce');

const display1 = document.querySelector('.display-1');
const display2 = document.querySelector('.display-2');
const display3 = document.querySelector('.display-3');

let sign = '';
let result = null;
let outputOne = '';
let outputTwo = '';
let dot = false;

allNumbers.forEach( Number => {
   Number.addEventListener('click', showNumber);

});
//show numbers
function showNumber(e){
    if(e.target.innerText === '.' & !dot){
        dot=true
    } else if(e.target.innerText === '.' & dot){
        return;
    }
    outputTwo= outputTwo + e.target.innerText;
    display2.innerText = outputTwo;
}

//display result in the screen
 symbols.forEach(symbols=>{
    symbols.addEventListener('click', showResult)
 })

//show result
function showResult(e){
    if(!outputTwo) result;
    dot = false;
    const signName = e.target.innerText;

    if(outputOne && outputTwo && sign){
        checkCalculation();
     } else{
            result = parseFloat(outputTwo);
         }
         ClearMainDisplay(signName);
         sign = signName;
        
}
// check calculation
function checkCalculation(){
    if(sign === 'X'){
        result = parseFloat(result) * parseFloat(outputTwo);
    }else if(sign === '+'){
        result = parseFloat(result) + parseFloat(outputTwo);
    }else if(sign === '-'){
        result = parseFloat(result) - parseFloat(outputTwo);
    }else if(sign === '/'){
        result = parseFloat(result) / parseFloat(outputTwo);
    }else if(sign === '%'){
        result = parseFloat(result) % parseFloat(outputTwo);
    
    }
}

//clear display
function ClearMainDisplay(name = ''){
    outputOne += outputTwo + '' + name + '';
    display1.innerText = outputOne;
    display2.innerText = '';
    display3.innerText = result;
    outputTwo = '';
}
equalButton.addEventListener('click', calculate)

function calculate(){
if(!outputTwo || !outputOne){

   return
}else{

    checkCalculation();
    ClearMainDisplay();
    display2.innerText = result;
    outputTwo = result;
    display3.innerText = '';
    outputOne = '';

}
}
//cbutton and cebutton
cButton.addEventListener('click', deletAll)
ceButton.addEventListener('click',deleteLastInput);

function deletAll(){
    display1.innerText = '0';
    display2.innerText = '0';
    display3.innerText = '0';
    outputOne = ''
    outputTwo = ''
    result = ''
}

function deleteLastInput(){
    display2.innerText = '';
    outputTwo = '';
}