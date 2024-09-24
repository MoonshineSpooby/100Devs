let num1;
let num2;
let functionKeyID;
let onSecondNum = false;

const digits = document.querySelectorAll('.digits')
digits.forEach(digit => digit.addEventListener('click',
 () => inputNumber(digit.innerText)));

const functionKeys = document.querySelectorAll('.functionKeys')
functionKeys.forEach(functionKey => functionKey.addEventListener('click',
 () => updateFunction(functionKey.id)))

document.querySelector('#equals').addEventListener('click', equals)

function inputNumber(num) {
    if (onSecondNum){ 
        if(num2 == null) num2 = num;
        else num2 = `${num2}${num}`;
        displayNumber(num2)
        return
    }
    if (num1 == null) {
        num1 = num
    }
    else num1 = `${num1}${num}`
    displayNumber(num1)
}

function updateFunction(functionKey) {
    if(functionKey == 'clear') clearCalc()
    if(num1==null) return;

    onSecondNum = true
    if(num2 != null) crunchNumbers()
    functionKeyID = functionKey
}
function crunchNumbers() {
    switch (true) {
        case functionKeyID == "divide":
            num1 = parseFloat(num1) / parseFloat(num2)
            displayNumber(num1)
            break;
        case functionKeyID == "multiply":
            num1 = parseFloat(num1) * parseFloat(num2)
            displayNumber(num1)
            break
        case functionKeyID == "subtract":
            num1 = parseFloat(num1) - parseFloat(num2)
            displayNumber(num1)
            break;
        case functionKeyID == "add":
            num1 = parseFloat(num1) + parseFloat(num2)
            displayNumber(num1)
            break;
        case functionKeyID == "mod":
            num1 = parseFloat(num1) % parseFloat(num2)
            displayNumber(num1)
            break;
        default:
            break;
    }
    num2 = null
}
function equals(){
    if(num1 == null || num2 == null){return}
    crunchNumbers()
}
function displayNumber(num){
    document.querySelector('#displayRegion').innerText = num
}
function clearCalc() {
    num1 = null
    num2 = null
    onSecondNum = false
    displayNumber(0)
}