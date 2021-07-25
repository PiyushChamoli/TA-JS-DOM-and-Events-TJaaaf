function main () {

    let inputText = document.querySelector('#text');
    let root = document.querySelector('ul');
    let allTodos = JSON.parse(localStorage.getItem('todos')) || [];

    let all = document.querySelector('.all');
    let active = document.querySelector('.active');
    let completed = document.querySelector('.completed');
    let clear = document.querySelector('.clear');

    let activeButton = 'all';
    
    function handleInput(event) {
        let value = event.target.value;
        if (event.keyCode === 13 && value !== '') {
            let todo = {
                name : value,
                isDone : false,
            }
            allTodos.push(todo);
            event.target.value = '';
            createUI(allTodos, root);
        }
        localStorage.setItem('todos', JSON.stringify(allTodos));
    };
    
    function handleDelete(event) {
        let id = event.target.dataset.id;
        allTodos.splice(id, 1);
        localStorage.setItem('todos', JSON.stringify(allTodos));
        createUI(allTodos, root);
    }
    
    function handleToggle(event) {
        let id = event.target.dataset.id;
        allTodos[id].isDone = !allTodos[id].isDone;
        localStorage.setItem('todos', JSON.stringify(allTodos));
    
        createUI(allTodos, root);
    };
    
    function updateActiveButton(btn = activeButton) {
        all.classList.remove('selected');
        active.classList.remove('selected');
        completed.classList.remove('selected');

        if (btn === 'all') {
            all.classList.add('selected');
        }
        if (btn === 'active') {
            active.classList.add('selected');
        }
        if (btn === 'completed') {
            completed.classList.add('selected');
        }
    };

    updateActiveButton();

    inputText.addEventListener('keyup',handleInput);
    
    function createUI(data = allTodos, rootElm = root) {
        rootElm.innerHTML = '';
        data.forEach((todo, index) => {
            let li = document.createElement('li');
            let input = document.createElement('input');
            let p = document.createElement('p');
            let span = document.createElement('span');
        
            input.type = 'checkbox';
            p.innerText = todo.name;
            span.innerText = 'x';
            
            input.checked = todo.isDone;
            span.addEventListener('click', handleDelete);
            span.setAttribute('data-id', index);
    
            input.addEventListener('input', handleToggle);
            input.setAttribute('data-id', index);
    
            li.append(input,p,span);
            rootElm.append(li);
        });
    };
    
    createUI(allTodos, root);

    clear.addEventListener('click', () => {
        allTodos = allTodos.filter((todo) => !todo.isDone);
        localStorage.setItem('todos', JSON.stringify(allTodos));
        createUI();
    });

    active.addEventListener('click', () => {
        let notCompleted = allTodos.filter((todo) => !todo.isDone);
        createUI(notCompleted);
        activeButton = 'active';
        updateActiveButton();
    });

    completed.addEventListener('click', () => {
        let completedTodos = allTodos.filter((todo) => todo.isDone);
        createUI(completedTodos);
        activeButton = 'completed';
        updateActiveButton();
    });

    all.addEventListener('click', () => {
        createUI();
        activeButton = 'all';
        updateActiveButton(); 
    });
};

main ();