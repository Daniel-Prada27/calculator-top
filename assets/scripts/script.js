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
    let numArr = filterResult();

    if (operator == "add") {
        let addition = numArr[0] + numArr[1];
        console.log(addition);
        display.textContent = addition;
        clearContent();
        content.push(addition);
    } else if (operator == "sub") {
        let subtraction = numArr[0] - numArr[1];
        console.log(subtraction);
        display.textContent = subtraction;
        clearContent();
        content.push(subtraction);
    } else if (operator == "multiply") {
        let multiplication = numArr[0] * numArr[1];
        console.log(multiplication);
        display.textContent = multiplication;
        clearContent();
        content.push(multiplication);
    } else if (operator == "divide") {
        if (numArr[1] == 0) {
            display.textContent = "Nice try";
            content.pop();
            shouldClear = true;
            return;
        }
        let division = numArr[0] / numArr[1];
        console.log(division);
        display.textContent = division;
        clearContent();
        content.push(division);
    }
    shouldClear = true;
}

function selectedButtonColor(button){
    button.style.backgroundColor = "#0074FE";
    button.style.color = "black";
}

function unColorButtons(){
    subBtn.style.backgroundColor = "#616161";
    subBtn.style.color = "white";
    multiplyBtn.style.backgroundColor = "#616161";
    multiplyBtn.style.color = "white";
    divideBtn.style.backgroundColor = "#616161";
    divideBtn.style.color = "white";
    addBtn.style.backgroundColor = "#616161";
    addBtn.style.color = "white";
}

addBtn.addEventListener('click', () => {

    selectedButtonColor(addBtn);
    subBtn.style.backgroundColor = "#616161";
    subBtn.style.color = "white";
    multiplyBtn.style.backgroundColor = "#616161";
    multiplyBtn.style.color = "white";
    divideBtn.style.backgroundColor = "#616161";
    divideBtn.style.color = "white";
    
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
    selectedButtonColor(subBtn);
    addBtn.style.backgroundColor = "#616161";
    addBtn.style.color = "white";
    multiplyBtn.style.backgroundColor = "#616161";
    multiplyBtn.style.color = "white";
    divideBtn.style.backgroundColor = "#616161";
    divideBtn.style.color = "white";
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
    selectedButtonColor(multiplyBtn);
    subBtn.style.backgroundColor = "#616161";
    subBtn.style.color = "white";
    addBtn.style.backgroundColor = "#616161";
    addBtn.style.color = "white";
    divideBtn.style.backgroundColor = "#616161";
    divideBtn.style.color = "white";
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
    selectedButtonColor(divideBtn);
    subBtn.style.backgroundColor = "#616161";
    subBtn.style.color = "white";
    multiplyBtn.style.backgroundColor = "#616161";
    multiplyBtn.style.color = "white";
    addBtn.style.backgroundColor = "#616161";
    addBtn.style.color = "white";
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
    unColorButtons();
    display.textContent = "";
    clearContent();
    operator = "none";
})

delBtn.addEventListener('click', () => {
    unColorButtons();
    let screenList = [...display.textContent]
    screenList.pop();
    let reformedNumber = screenList.join("");
    display.textContent = reformedNumber;
})

equalBtn.addEventListener('click', () => {
    unColorButtons();
    if (display.textContent != "" && display.textContent != "Nice try") {
        content.push(display.textContent);
        operate(operator);
    }
})
