// let boxes = document.querySelector('.boxes');

// for (i=0;i<500;i++) {
//     let div = document.createElement('div');
//     div.classList.add('box');

//     let h2 = document.createElement('h2');
//     h2.innerHTML = Math.floor(Math.random() * 501);

//     div.append(h2);
//     boxes.append(div);
// }

// function getRandomColor () {
//     let hex = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
//     let color = '#';
//     for (i=0;i<6;i++) {
//         let randomNumber = Math.floor(Math.random() * 16);
//         color = color + hex[randomNumber];
//     }
//     return color;
// }

// function handleMouseMove () {
//     let allBox = document.querySelectorAll('.box');
//     for (let box of allBox) {
//         box.style.backgroundColor = getRandomColor();
//         box.innerHTML = `<h2>${Math.floor(Math.random() * 501)}</h2>`
//     }
// }

// boxes.addEventListener('mousemove',handleMouseMove);

//////////////////////////////////////////////////////////////////////////////////////////////////////


/*
function getRandomNumber(max){
    return Math.floor(Math.random()* max);
}
function generaterRandomColor(){
    let hexCharacters = ['0','1','2' ,'3','4','5','6','7','8','9','a','b','c','d','e','f',];
   
    let color ="#";
   
    for ( let i = 0; i<6; i++){
    let randomNumber = Math.floor(Math.random()*16);
          color = color + hexCharacters[randomNumber]
    }
   
   
    return color;
   }

 let parentBox = document.querySelector(".boxes");

   for( let i=0 ; i<500 ;i++){
       let div = document.createElement('div');
       div.classList.add('box')

       let h3 = document.createElement('h3');
       let randomNo =  getRandomNumber(500);
        h3.innerText = randomNo;

        div.append(h3);
        parentBox.append(div);
   }


   let allBoxes = document.querySelectorAll(".box");

   function handleMouseMove(){
       allBoxes.forEach((box) =>{
           box.style.backgroundColor = generaterRandomColor();

           box.querySelector("h3").innerText = getRandomNumber(500);
       })
   }

   parentBox.addEventListener("mousemove" , handleMouseMove);

*/

function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

function getRandomColor() {
    let hexCharacters = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
    let color = '#';
    for (let i=0;i<6;i++) {
        let randomNumber = getRandomNumber(16);
        color += hexCharacters[randomNumber];
    }
    return color;
}

let parentBox = document.querySelector('.boxes');

for (let i=0;i<500;i++) {
    let div = document.createElement('div');
    div.classList.add('box');
    let h3 = document.createElement('h3');
    let randomNo = getRandomNumber(500);
    h3.innerText = randomNo;
    div.append(h3);
    parentBox.append(div);
}

let allBoxes = document.querySelectorAll('.box');

function handleMouseMove() {
    allBoxes.forEach((box) => {
        box.style.backgroundColor = getRandomColor();
        box.querySelector('h3').innerText = getRandomNumber(500);
    })
}

parentBox.addEventListener('mousemove', handleMouseMove);