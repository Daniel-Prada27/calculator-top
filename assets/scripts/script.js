const display = document.getElementById("screen")

const addBtn = document.getElementById("addBtn");
const subBtn = document.getElementById("subBtn");
const multiplyBtn = document.getElementById("multiplyBtn");
const divideBtn = document.getElementById("divideBtn");
const equalBtn = document.getElementById("equalBtn");


const oneBtn = document.getElementById("1");
const twoBtn = document.getElementById("2");
const threeBtn = document.getElementById("3");
const fourBtn = document.getElementById("4");
const fiveBtn = document.getElementById("5");
const sixBtn = document.getElementById("6");
const sevenBtn = document.getElementById("7");
const nineBtn = document.getElementById("8");
const tenBtn = document.getElementById("9");
const zeroBtn = document.getElementById("0");
const dotBtn = document.getElementById(".");

const acBtn = document.getElementById("all-clear");
const delBtn = document.getElementById("delete");

// let currentNumber = document.getElementById('screen');
display.textContent = "";

everyButton = document.querySelectorAll('.digit');

for(let i = 0; i < everyButton.length; i++){ //Displays the pressed button's id
    everyButton[i].addEventListener('click', function(e){
        display.textContent += e.srcElement.id;
    })
}

addBtn.addEventListener('click', () => {

    // display.textContent += " + ";
    let a = display.textContent;
    display.textContent = "";
    console.log(a);
})

subBtn.addEventListener('click', () => {
    let a = display.textContent;
    display.textContent = "";
    console.log(a);
})

multiplyBtn.addEventListener('click', () => {
    let a = display.textContent;
    display.textContent = "";
    console.log(a);
})

divideBtn.addEventListener('click', () => {
    let a = display.textContent;
    display.textContent = "";
    console.log(a);
})

acBtn.addEventListener('click', () => {
    display.textContent = "";
})

delBtn.addEventListener('click', () => {
    let screenList = [...display.textContent]
    screenList.pop();
    let reformedNumber = screenList.join("");
    display.textContent = reformedNumber;
})
