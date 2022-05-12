const btnDash = document.querySelector('.btn-dash');
const btnPlus = document.querySelector('.btn-plus');
const btnDash2 = document.querySelector('.btn-dash2');
const btnPlus2 = document.querySelector('.btn-plus2');
let numberCount = 1;
let numberCount2 = 1;

btnPlus.addEventListener('click', () => {
    numberCount++;
    const numberEl = document.getElementById('number');
    numberEl.innerText = numberCount;
    console.log(numberCount);
})

btnDash.addEventListener('click', () => {
    if (numberCount > 1) {
        numberCount -= 1;
        const numberEl = document.getElementById('number');
        numberEl.innerText = numberCount;
        console.log(numberCount);
    }
})

btnPlus2.addEventListener('click', () => {
    numberCount2++;
    const numberEl = document.getElementById('number2');
    numberEl.innerText = numberCount2;
    console.log(numberCount2);
})

btnDash2.addEventListener('click', () => {
    if (numberCount2 > 1) {
        numberCount2 -= 1;
        const numberEl = document.getElementById('number2');
        numberEl.innerText = numberCount2;
        console.log(numberCount2);
    }
})



const form = document.querySelector('form');
const modal = document.querySelector('.modal');
const btnClose = document.querySelector('.btn-close');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    modal.showModal();
})
btnClose.addEventListener('click', () => {
    modal.close();
})