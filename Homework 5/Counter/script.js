const numberElement = document.getElementById("number");

if (localStorage.getItem("number")) {
    numberElement.innerText = localStorage.getItem("number");
}

localStorage.setItem("number", numberElement.innerText);
const decreaseBtn = document.getElementById("Decrease");
const resetBtn = document.getElementById("Reset");
const increaseBtn = document.getElementById("Increase");
let numberData = +localStorage.getItem("number");

decreaseBtn.addEventListener('click', function increase() {
    if (numberData) {
        numberData--;
        numberElement.innerText = numberData;
    }
    numberData = +numberElement.innerText;
    localStorage.setItem("number", numberData);
})

resetBtn.addEventListener('click', function reset() {
    numberData = 0;
    numberElement.innerText = numberData;
    numberData = +numberElement.innerText;
    localStorage.setItem("number", numberData);
})

increaseBtn.addEventListener('click', function increase() {
    numberData++;
    numberElement.innerText = numberData;
    numberData = +numberElement.innerText;
    localStorage.setItem("number", numberData);
})