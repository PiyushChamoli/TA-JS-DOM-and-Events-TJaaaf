let userRoot = document.querySelector('.first-ul');
let computerRoot = document.querySelector('.second-ul');
let result = document.querySelector('.display');
let reset = document.querySelector('.reset');

let dataSet = [
    {
        name: 'rock',
        beats: 'scissors'
    },
    {
        name: 'paper',
        beats: 'rock'
    },
    {
        name: 'scissors',
        beats: 'paper'
    }
];    

let userSelected = {}, computerSelected = {};

function randomNumberGenerator(max=3) {
    return Math.floor(Math.random() * max);
};

function getWinner(user,computer) {
    if (user.name === computer.name) {
        result.innerText = 'Its a Tie';
    } else if (user.beats === computer.name) {
        result.innerText = 'User Wins';
    } else {
        result.innerText = 'Computer Wins';
    }
}

function createUserLayout() {
    userRoot.innerHTML = '';
    dataSet.forEach((icon) => {
        let li = document.createElement('li');
        let i = document.createElement('i');
        i.className = `fa fa-hand-${icon.name}-o`;
        
        if (userSelected.name === icon.name) {
            li.classList.add('selected');
        };

        li.addEventListener('click', () => {
            userSelected = icon;
            computerSelected = dataSet[randomNumberGenerator()];

            getWinner(userSelected, computerSelected);

            createUserLayout();
            createComputerLayout();
        });
        li.append(i);
        userRoot.append(li);
    });
}

createUserLayout();

function createComputerLayout() {
    computerRoot.innerHTML = '';
    dataSet.forEach((icon) => {
        let li = document.createElement('li');
        let i = document.createElement('i');
        i.className = `fa fa-hand-${icon.name}-o`;
        
        if (computerSelected.name === icon.name) {
            li.classList.add('selected');
        };

        li.append(i);
        computerRoot.append(li);
    });
}

createComputerLayout();

reset.addEventListener('click', () => {
    userSelected = {};
    computerSelected = {};
    createUserLayout();
    createComputerLayout();
    getWinner(userSelected,computerSelected);
});