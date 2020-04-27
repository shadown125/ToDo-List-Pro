class AddTodo {
    constructor() {
        const toDoList = [];

        const inputTitle = document.querySelector('.popup-task__title'); 
        const inputDescription = document.querySelector('.popup-task__description');
        // const todoContainer = document.querySelector('.todos');
        const addTaskButton = document.querySelector('.popup-task__button');
        const ulListTodo = document.querySelector('.main-content__list-items');
        const popup = document.querySelector('.popup-task');
        const listItems = document.getElementsByClassName('main-content__item');
        const mustDo = document.querySelector('.progression__must-do-task-counter');

        const removeTask = (e) => {
           // e.target.parentNode.parentNode.parentNode.parentNode.parentNode.remove();
            let index = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.dataset.key;
            if (index) {
                toDoList.splice(index, 1);
            // console.log(toDoList)
            console.log(index)
            mustDo.textContent = listItems.length - 1;
            
            renderList();
            } else {
                index = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.dataset.key;

                toDoList.splice(index, 1);
            // console.log(toDoList)
            console.log(index)
            mustDo.textContent = listItems.length - 1;
            
            renderList();
            }
            
        }

        const addTask = (e) => {
            e.preventDefault();
            let titleText = inputTitle.value;
            let descriptionText = inputDescription.value;
            if(titleText == '') return;
            const task = document.createElement('li');
            task.className = 'main-content__item';
            task.innerHTML = "<div class=main-content__header>" + "<div class=main-content__circle></div>" + "<div class=main-content__header-wrapper>" + "<div class=main-content__title-wrapper>" + "<p class=main-content__title>" + titleText + "</p></div>" + "<div class=main-content__svg-wrapper>" + "<div class=main-content__svg-circle-check>" + "<button class=btn-svg>" + "<a href=#0><svg class=main-content__svg-check>" + "<use xlink:href=img/sprite.svg#icon-check></use>" + "</svg></a></button></div>" + "<div class=main-content__svg-circle-message>" + "<button class=btn-svg>" + "<svg class=main-content__svg-message>" + "<use xlink:href=img/sprite.svg#icon-bubble></use>" + "</svg></button></div>" + "<div class=main-content__svg-circle-attachment>" + "<button class=btn-svg>" + "<a href=#><svg class=main-content__svg-attachment>" + "<use xlink:href=img/sprite.svg#icon-cross></use>" + "</svg></a></button></div></div></div></div>" + "<div class=main-content__text-container>" + "<p class=main-content__text>" + descriptionText + "</p></div>";

            toDoList.push(task);
            renderList()

            // ulListTodo.appendChild(task);
            inputDescription.value = '';
            inputTitle.value = '';
            mustDo.textContent = listItems.length;
            window.location.replace('#')

            task.querySelector('.main-content__svg-circle-attachment').addEventListener('click', removeTask);
        }


        const renderList = () => {
             ulListTodo.textContent = '';
            toDoList.forEach((toDoElement, key) => {
                toDoElement.dataset.key = key;
                ulListTodo.appendChild(toDoElement);
            })
        }
        addTaskButton.addEventListener('click', addTask);

    }

}
