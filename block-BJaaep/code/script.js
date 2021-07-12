let li = document.body.children[2].children[0].children[1].children;

function randomNumberGenerator () {
    return Math.floor(Math.random() * 13);
}

let allLi = Array.from(li);

allLi.forEach((box) => {
    box.addEventListener('click', function () {handleClick(box)});
    
});

function handleClick (box) {
    box.innerText = randomNumberGenerator();
    setTimeout(function () {box.innerText = ''},3000);
}

let ul  = document.querySelector('.box-two');
ul.addEventListener('click', function () {handleClick(event.target)});
