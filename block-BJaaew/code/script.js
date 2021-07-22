let ul = document.querySelector('.cards');
let rootTags = document.querySelector('.tags');
let search = document.querySelector('.search');

let allPeople = got.houses.reduce((acc,cv) => {
    acc.push(cv.people);
    return acc;
},[]).flat();

console.log(allPeople);

let activeHouse = '';
let allTags = got.houses.map((house) => house.name);

function createCards(data) {
    ul.innerHTML = '';
    data.forEach((person) => {
        let li = document.createElement('li');
        li.classList.add('flex-30','card');
    
        let img = document.createElement('img');
        img.src = person.image;
        img.alt = person.name;
    
        let h2 = document.createElement('h2');
        h2.innerText = person.name;
    
        let p = document.createElement('p');
        p.innerText = person.description;
    
        let btn = document.createElement('a');
        btn.href = person.wikiLink;
        btn.innerText = 'Learn More!';
        
        let head = document.createElement('div');
        head.classList.add('center');
        head.append(img,h2);
    
        let footer = document.createElement('div');
        footer.classList.add('text-center');
        footer.append(btn);
    
        li.append(head,p,footer);
        ul.append(li);
    });
};

function createTagsUI (tags=[]) {
    rootTags.innerHTML = '';

    tags.forEach((tag) => {
        let li = document.createElement('li');
        li.innerText = tag;

        if (activeHouse == tag) {
            li.classList.add('active');
        };

        li.addEventListener('click', () => {
            activeHouse = tag;
            let peopleOfTheHouse = got.houses.find(house => house.name === tag).people || [];
            createCards(peopleOfTheHouse);
            createTagsUI(allTags);
        });

        rootTags.append(li);
    });
};

function handleSearch(event) {
    let text = event.target.value;
    let filteredPeople = allPeople.filter((p) => p.name.toLowerCase().includes(text.toLowerCase()));
    createCards(filteredPeople);
};

search.addEventListener('input', handleSearch);

createTagsUI(allTags);

createCards(allPeople);