// My Code Attempt 
//let li = document.body.children[2].children[0].children[1].children;

// function randomNumberGenerator () {
//     return Math.floor(Math.random() * 13);
// }

// let allLi = Array.from(li);

// allLi.forEach((box) => {
//     box.addEventListener('click', function () {handleClick(box)});
    
// });

// function handleClick (box) {
//     box.innerText = randomNumberGenerator();
//     setTimeout(function () {box.innerText = ''},3000);
// }

// let ul  = document.querySelector('.box-two');
// ul.addEventListener('click', function () {handleClick(event.target)});


let firstBoxes = document.querySelectorAll('.first li');

firstBoxes.forEach((box,index) => {
    box.addEventListener('click',(event) => {
        event.target.innerText = index + 1;
        setTimeout(() => {
            event.target.innerText = '';
        },5000);
    });
});

let secondBoxes = document.querySelectorAll('.second li');

secondBoxes.forEach((box,index) => box.setAttribute('data-text',index + 1));

let secondBox = document.querySelector('.second');

secondBox.addEventListener('click',(event) => {
    let text = event.target.dataset.text;
    event.target.innerText = text;
    setTimeout(() => {
        event.target.innerText = '';
    },5000);
});