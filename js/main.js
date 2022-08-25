const numbers = document.querySelectorAll('[data-number]');
const operators = document.querySelectorAll('[data-operator]');
const result = document.querySelector('[data-equal]');
const deleteNumber = document.querySelector('[data-delete]');
const allClear = document.querySelector('[data-clear-all]');
const clearElement = document.querySelector('[data-clear-element]');
const previousInput = document.querySelector('[data-previous]');
const currentInput = document.querySelector('[data-current]');
const button = document.getElementById("button");

// console.log(numbers);
let inputNumber = [];
for (const number of numbers) {
    number.addEventListener('click', () => {
        if(number.innerText === '.' && inputNumber.includes('.')) return;
        inputNumber.push(number.innerText);
        currentInput.innerHTML = inputNumber.join('');
        console.log(inputNumber);

    });
};

let del = deleteNumber.addEventListener('click' , () => {
    if(typeof hasil === 'number') {
        hasil = ''
        // previousInput.innerHTML = '';
        console.log(inputNumber);
    }
    inputNumber.pop();
    currentInput.innerHTML = inputNumber.join('');
    
});

let c = allClear.addEventListener('click', () => {
    inputNumber = [];
    hasil = ''
    previousInput.innerHTML = ''
    currentInput.innerHTML = 0
    
});

let ce = clearElement.addEventListener('click', () =>{
    if(typeof hasil === 'number') {
        inputNumber = [];
        hasil = ''
        previousInput.innerHTML = ''
        currentInput.innerHTML = 0
    }
    inputNumber = [];
    currentInput.innerHTML = 0
})



let inputOperator 
let prevInput
for(const operator of operators) {
    operator.addEventListener('click', () => {
        inputOperator = operator.innerHTML;
        if (typeof hasil === 'number') {
            prevInput = hasil;
            previousInput.innerHTML = prevInput + operator.innerHTML;
        } else {
            prevInput = inputNumber.join('');
            previousInput.innerHTML = inputNumber.join('') + ' ' + operator.innerHTML;
        }
        inputNumber = [];
        
        console.log(inputOperator);
    });
};


let hasil 
let equal = result.addEventListener('click' , () => {
    let curr = parseFloat(inputNumber.join(''));
    let prev = parseFloat(prevInput);

    if(inputOperator === '+') {
        hasil = prev + curr
        currentInput.innerHTML = hasil ;
        previousInput.innerHTML = prev + ' + ' + inputNumber.join('') + ' =';
    } else if(inputOperator === '-') {
        hasil = prev - curr
        currentInput.innerHTML = hasil ;
    } else if(inputOperator === '\xF7') {
        hasil = prev / curr
        currentInput.innerHTML = hasil ;
    } else if(inputOperator === '\xD7') {
        hasil = prev * curr
        currentInput.innerHTML = hasil ;
    } else if (inputOperator === 'x\xB2') {
        hasil = prev**2
        console.log(hasil)
        currentInput.innerHTML = hasil ;
    } else if (inputOperator === '\u221Ax') {
        hasil = Math.sqrt(prev)
        currentInput.innerHTML = hasil ;
    } else if(inputOperator === '1/x') {
        hasil = 1/prev
        currentInput.innerHTML = hasil;
    }
});
