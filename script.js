let addToButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');


addToButton.addEventListener('click', function ()  {

var paragraph = document.createElement('p')
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";


    paragraph.addEventListener('click', function() {
    paragraph.style.textDecoration = 'line-through'; 

    paragraph.addEventListener('dblclick', function () {
    paragraph.style.display = 'none';

    // paragraph.addEventListener('click', function () {
    //     paragraph.style.textDecoration = 'none';
    // })

    })
})})


