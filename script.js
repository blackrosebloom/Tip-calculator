const btnel = document.getElementById("calculate");
const billInput = document.getElementById("bill");
const tipInput = document.getElementByIdId("tip");
const totalSpan = document.getElementById("total");

function calculateTotal(){
const billValue = billInput.value;
console.log(billValue)
const tipValue = tipInput.value;
console.log(tipValue)
const totalValue = billValue * (1 + tipValue / 100);
totalSpan.innerText = totalValue.toFixed(2);
}
