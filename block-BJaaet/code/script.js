let input = document.querySelector('input[type=text');
let rootElm = document.querySelector('.movies_list');

let allMovies = [];

input.addEventListener('keyup', (event) => {
    //adding a movie
    if (event.keyCode === 13) {
        console.log(event.target.value);
        
        allMovies.push({
            name: event.target.value,
            watched: false,
        });
        event.target.value = "";
        createMovieUI();
    }
});

function deleteMovie(event) {
    //event.target.parentElement.remove();
    let id = event.target.dataset.id;
    allMovies.splice(id, 1);
    createMovieUI();
};

function handleChange(event) {
    let id = event.target.id;
    allMovies[id].watched = !allMovies[id].watched; 
};

function createMovieUI() {
    rootElm.innerHTML = '';
    allMovies.forEach((movie, i) => {
        let li = document.createElement('li');
        let input = document.createElement('input');
        let label = document.createElement('label');
        let span = document.createElement('span');
        
        input.classList.add('styled-checkbox');
        input.type = "checkbox";
        input.checked = movie.watched;
        input.id = i;
        label.for = i;
        label.innerText = movie.name;
        span.innerText = "x";

        span.addEventListener('click',deleteMovie);
        span.setAttribute('data-id', i);

        input.addEventListener('change',handleChange);

        li.append(input, label, span);

        rootElm.append(li);
    });

};

createMovieUI();