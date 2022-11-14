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

display.textContent = "";
everyButton = document.querySelectorAll('.digit');
let operator = "none";
let content = [];
let shouldClear = false;

for (let i = 0; i < everyButton.length; i++) { //Displays the pressed button's id
    everyButton[i].addEventListener('click', function (e) {
        idNumber = parseFloat(e.srcElement.id)
        if (shouldClear && display.textContent != "") {
            display.textContent = "";
            shouldClear = false;
        }
        display.textContent += idNumber;
        console.log("content: " + content);
    })
}

function filterResult() {
    let intArray = content.map(function (x) {
        return parseInt(x, 10);
    });
    let numberTypeArray = intArray.filter(item => typeof item === "number");
    let numbersArray = numberTypeArray.filter(item => typeof item === Boolean || item === 0 || typeof item === "number");
    return numbersArray;
}

function clearContent() {
    content = [];
}

function checkContent() {
    if (typeof content[0] != "number") {
        content.pop();
    }
}

function operate(operator) {
    if (content.length == 0) {
        return;
    }
    if (operator == "none") {
        return;
    }
    filterResult();

    if (operator == "add") {
        let addition = filterResult()[0] + filterResult()[1];
        console.log(addition);
        display.textContent = addition;
        clearContent();
        content.push(addition);
    }
    if (operator == "sub") {
        let subtraction = filterResult()[0] - filterResult()[1];
        console.log(subtraction);
        display.textContent = subtraction;
        clearContent();
        content.push(subtraction);
    }
    if (operator == "multiply") {
        let multiplication = filterResult()[0] * filterResult()[1];
        console.log(multiplication);
        display.textContent = multiplication;
        clearContent();
        content.push(multiplication);
    }
    if (operator == "divide") {
        if (filterResult()[1] == 0) {
            display.textContent = "Nice try";
            content.pop();
            shouldClear = true;
            return;
        }
        let division = filterResult()[0] / filterResult()[1];
        console.log(division);
        display.textContent = division;
        clearContent();
        content.push(division);
    }
    shouldClear = true;
}

addBtn.addEventListener('click', () => {
    if (display.textContent != "" && display.textContent != "Nice try") {


        let a = display.textContent;
        console.log(typeof a);
        console.log(content);
        if (a != "" && typeof a != "undefined") {
            content.push(a);
        }

        display.textContent = "";
        operate(operator);
        if (operator != "add") {
            operator = "add";
        }
    }
})

subBtn.addEventListener('click', () => {
    if (display.textContent != "" && display.textContent != "Nice try") {
        let a = display.textContent;
        if (a != "") {
            content.push(a);
        }
        display.textContent = "";
        operate(operator);
        operator = "sub";
    }
})

multiplyBtn.addEventListener('click', () => {
    if (display.textContent != "" && display.textContent != "Nice try") {
        let a = display.textContent;
        if (a != "") {
            content.push(a);
        }
        display.textContent = "";
        operate(operator);
        operator = "multiply";
    }
})

divideBtn.addEventListener('click', () => {
    if (display.textContent != "" && display.textContent != "Nice try") {
        let a = display.textContent;
        if (a != "") {
            content.push(a);
        }
        display.textContent = "";
        operate(operator);
        operator = "divide";
    }
})

acBtn.addEventListener('click', () => {
    display.textContent = "";
    clearContent();
    operator = "none";
})

delBtn.addEventListener('click', () => {
    let screenList = [...display.textContent]
    screenList.pop();
    let reformedNumber = screenList.join("");
    display.textContent = reformedNumber;
})

equalBtn.addEventListener('click', () => {
    if(display.textContent != "" && display.textContent != "Nice try"){
        content.push(display.textContent);
    operate(operator);
    }
})
