const display = document.getElementById("screen");
const actualBody = document.getElementById("wholeBody");

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
const eightBtn = document.getElementById("8");
const nineBtn = document.getElementById("9");
const zeroBtn = document.getElementById("0");
const dotBtn = document.getElementById(".");

const acBtn = document.getElementById("all-clear");
const delBtn = document.getElementById("delete");

display.textContent = "";
everyDigitButton = document.querySelectorAll('.digit');
let operator = "none";
let content = [];
let shouldClear = false;

for (let i = 0; i < everyDigitButton.length; i++) { //Displays the pressed button's id
    everyDigitButton[i].addEventListener('click', function (e) {
        if(e.srcElement.id != "."){
            idNumber = parseFloat(e.srcElement.id);
        }else if(e.srcElement.id == "."){
            idNumber = ".";
        }

        if (shouldClear && display.textContent != "") {
            display.textContent = "";
            shouldClear = false;
        }
        let aa = display.textContent;
        let displayContainsDot = aa.match(/\./g) ? "true" : "false";
        
        if (idNumber != "."){
            display.textContent += idNumber;
        }else if (idNumber == "." && displayContainsDot == "false"){
            display.textContent += idNumber;
        }else if (idNumber == "." && displayContainsDot == "true"){
            return;
        }

        aa = display.textContent;
    })
}

function filterResult() {
    let intArray = content.map(function (x) {
        return parseFloat(x, 10);
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
            operator = "none";
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

window.addEventListener('keydown', function(e)  {
    if (e.key == "=" || e.key == "Enter"){
    equalBtn.style.backgroundColor = "#00FF41";
    equalBtn.style.color = "black";
    }

    if(e.key == "1"){
        oneBtn.style.backgroundColor = "#c4b4ba";
        oneBtn.style.color = "black";
    }else if(e.key == "2"){
        twoBtn.style.backgroundColor = "#c4b4ba";
        twoBtn.style.color = "black";
    }else if(e.key == "3"){
        threeBtn.style.backgroundColor = "#c4b4ba";
        threeBtn.style.color = "black";
    }else if(e.key == "4"){
        fourBtn.style.backgroundColor = "#c4b4ba";
        fourBtn.style.color = "black";
    }else if(e.key == "5"){
        fiveBtn.style.backgroundColor = "#c4b4ba";
        fiveBtn.style.color = "black";
    }else if(e.key == "6"){
        sixBtn.style.backgroundColor = "#c4b4ba";
        sixBtn.style.color = "black";
    }else if(e.key == "7"){
        sevenBtn.style.backgroundColor = "#c4b4ba";
        sevenBtn.style.color = "black";
    }else if(e.key == "8"){
        eightBtn.style.backgroundColor = "#c4b4ba";
        eightBtn.style.color = "black";
    }else if(e.key == "9"){
        nineBtn.style.backgroundColor = "#c4b4ba";
        nineBtn.style.color = "black";
    }else if(e.key == "0"){
        zeroBtn.style.backgroundColor = "#c4b4ba";
        zeroBtn.style.color = "black";
    }else if(e.key == "."){
        dotBtn.style.backgroundColor = "#c4b4ba";
        dotBtn.style.color = "black";
    }

    if(e.key == "Backspace"){
        delBtn.style.backgroundColor = "#D83B3B";
        delBtn.style.color = "black";
    }else if(e.key == "Delete"){
        acBtn.style.backgroundColor = "#D83B3B";
        acBtn.style.color = "black";
    }
    
    console.log(e.key);
})

window.addEventListener('keyup', function(e) {
    if(e.key == "=" || e.key == "Enter"){
    equalBtn.style.backgroundColor = "#616161"
    equalBtn.style.color = "white";
    }

    if(e.key == "1"){
        oneBtn.style.backgroundColor = "#616161";
        oneBtn.style.color = "white";
        oneBtn.style.cssText = ".digit:hover{background-color: #c4b4ba;";
    }else if(e.key == "2"){
        twoBtn.style.backgroundColor = "#616161";
        twoBtn.style.color = "white";
        twoBtn.style.cssText = ".digit:hover{background-color: #c4b4ba;";
    }else if(e.key == "3"){
        threeBtn.style.backgroundColor = "#616161";
        threeBtn.style.color = "white";
        threeBtn.style.cssText = ".digit:hover{background-color: #c4b4ba;";
    }else if(e.key == "4"){
        fourBtn.style.backgroundColor = "#616161";
        fourBtn.style.color = "white";
        fourBtn.style.cssText = ".digit:hover{background-color: #c4b4ba;";
    }else if(e.key == "5"){
        fiveBtn.style.backgroundColor = "#616161";
        fiveBtn.style.color = "white";
        fiveBtn.style.cssText = ".digit:hover{background-color: #c4b4ba;";
    }else if(e.key == "6"){
        sixBtn.style.backgroundColor = "#616161";
        sixBtn.style.color = "white";
        sixBtn.style.cssText = ".digit:hover{background-color: #c4b4ba;";
    }else if(e.key == "7"){
        sevenBtn.style.backgroundColor = "#616161";
        sevenBtn.style.color = "white";
        sevenBtn.style.cssText = ".digit:hover{background-color: #c4b4ba;";
    }else if(e.key == "8"){
        eightBtn.style.backgroundColor = "#616161";
        eightBtn.style.color = "white";
        eightBtn.style.cssText = ".digit:hover{background-color: #c4b4ba;";
    }else if(e.key == "9"){
        nineBtn.style.backgroundColor = "#616161";
        nineBtn.style.color = "white";
        nineBtn.style.cssText = ".digit:hover{background-color: #c4b4ba;";
    }else if(e.key == "0"){
        zeroBtn.style.backgroundColor = "#616161";
        zeroBtn.style.color = "white";
        zeroBtn.style.cssText = ".digit:hover{background-color: #c4b4ba;";
    }else if(e.key == "."){
        dotBtn.style.backgroundColor = "#616161";
        dotBtn.style.color = "white";
        dotBtn.style.cssText = ".digit:hover{background-color: #c4b4ba;";
    }

    if(e.key == "Backspace"){
        delBtn.style.backgroundColor = "#616161";
        delBtn.style.color = "white";
    }else if(e.key == "Delete"){
        acBtn.style.backgroundColor = "#616161";
        acBtn.style.color = "white";
    }
    console.log(e.key + "Keyup");
})


const readKey = window.addEventListener('keydown', function (e) {
    if(e.key == "1"){
        oneBtn.click();
    }else if(e.key == "2"){
        twoBtn.click();
    }else if(e.key == "3"){
        threeBtn.click();
    }else if(e.key == "4"){
        fourBtn.click();
    }else if(e.key == "5"){
        fiveBtn.click();
    }else if(e.key == "6"){
        sixBtn.click();
    }else if(e.key == "7"){
        sevenBtn.click();
    }else if(e.key == "8"){
        eightBtn.click();
    }else if(e.key == "9"){
        nineBtn.click();
    }else if(e.key == "0"){
        zeroBtn.click();
    }

    if(e.key == "+"){
        addBtn.click();
    }else if(e.key == "-"){
        subBtn.click();
    }else if(e.key == "*" || e.key == "x"){
        multiplyBtn.click();
    }else if(e.key == "/"){
        divideBtn.click();
    }else if (e.key == "=" || e.key == "Enter"){
        equalBtn.click();
    }

    if(e.key == "Backspace"){
        delBtn.click();
    }else if(e.key == "Delete"){
        acBtn.click();
    }

    if(e.key == "."){
        dotBtn.click();
    }
  }, false);
