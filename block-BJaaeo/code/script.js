// let display = document.querySelector('.display');

// let root = document.querySelector('.container');

// root.addEventListener('click', () => {handleClick(event.target.innerText)});

// numbers = [0,1,2,3,4,5,6,7,8,9]

// function handleClick (event) {
//     if (event in numbers) {

//     }
// }

let display = document.querySelector('.display');
let allBtn = document.querySelectorAll('button');

let initialValue = 0;

function handleClick (event) {
    if (event.target.classList.contains('equal')) {
        display.innerText = eval(display.innerText);
        return;
    }
    if (event.target.classList.contains('clear')) {
        display.innerText = initialValue;
        return;
    }
    if (display.innerText == initialValue) {
        display.innerText = event.target.innerText;
    } else {
        display.innerText += event.target.innerText;
    }

}

allBtn.forEach((btn) => {
    btn.addEventListener('click',handleClick);
});

display.innerText = initialValue;