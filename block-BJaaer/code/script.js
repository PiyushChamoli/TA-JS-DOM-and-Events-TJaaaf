let form = document.querySelector('form');

let userInfo = {};

function handleSubmit(event) {
    event.preventDefault();
    userInfo.name = form.elements.name.value;
    userInfo.email = (form.elements.email[0].value);
    userInfo.love = (form.elements.gender.value);
    userInfo.color = (form.elements.color.value);
    userInfo.range = (form.elements.range.value);
    userInfo.fiction = (form.elements.fiction.checked);
    // userInfo[non-fiction] = (form.elements);
    userInfo.adventure = (form.elements.adventure.checked);
    userInfo.terms = (form.elements.terms.checked);
};

form.addEventListener('submit',handleSubmit);

console.log(userInfo);