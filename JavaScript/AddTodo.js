 export default class AddTodo {
     constructor() {
         this.toDoList = [];

         this.inputTitle = document.querySelector('.popup-task__title');
         this.inputDescription = document.querySelector('.popup-task__description');
         this.addTaskButton = document.querySelector('.popup-task__button');
         this.ulListTodo = document.querySelector('.main-content__list-items');
         this.popup = document.querySelector('.popup-task');
         this.listItems = document.getElementsByClassName('main-content__item');
         this.mustDo = document.querySelector('.progression__must-do-task-counter');
         this.doneTasks = document.querySelector('.progression__done-counter');

         this.doneTodosUl = document.querySelector('.done-todos__item-list');
         this.searchInput = document.querySelector('.search__input');

         this.index;
         this.counter = 0;


         this.addTaskButton.addEventListener('click', this.addTask.bind(this));
         this.searchInput.addEventListener('input', this.searchTask.bind(this));
     }


     removeTask(e) {

         this.index = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.dataset.key;
         if (this.index) {
             this.toDoList.splice(this.index, 1);
             this.mustDo.textContent = this.toDoList.length;

             this.renderList();
         } else {
             this.index = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.dataset.key;

             this.toDoList.splice(this.index, 1);
             this.mustDo.textContent = this.toDoList.length;

             this.renderList();
         }

     }

     completeTask(e) {

         //Adding
         this.counter++;

         this.index = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.dataset.key;

         if (this.index) {
             e.target.parentNode.parentNode.parentNode.parentNode.remove();

             this.doneTodosUl.appendChild(this.toDoList[this.index]);
             this.toDoList.splice(this.index, 1);
             this.mustDo.textContent = this.toDoList.length;

             this.renderList();
         } else {
             this.index = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.dataset.key;

             e.target.parentNode.parentNode.parentNode.parentNode.parentNode.remove();
             this.doneTodosUl.appendChild(this.toDoList[this.index]);

             this.toDoList.splice(this.index, 1);

             this.mustDo.textContent = this.toDoList.length;
             this.renderList();
         }
         this.doneTasks.textContent = this.counter.toString();
     }

     addTask(e) {
         e.preventDefault();
         let titleText = this.inputTitle.value;
         let descriptionText = this.inputDescription.value;
         if (titleText == '') return;
         const task = document.createElement('li');
         task.className = 'main-content__item';
         task.innerHTML = "<div class=main-content__header>" + "<div class=main-content__circle></div>" + "<div class=main-content__header-wrapper>" + "<div class=main-content__title-wrapper>" + "<p class=main-content__title>" + titleText + "</p></div>" + "<div class=main-content__svg-wrapper>" + "<div class=main-content__svg-circle-check>" + "<button class=btn-svg>" + "<a href=#><svg class=main-content__svg-check>" + "<use xlink:href=img/sprite.svg#icon-check></use>" + "</svg></a></button></div>" + "<div class=main-content__svg-circle-message>" + "<button class=btn-svg>" + "<svg class=main-content__svg-message>" + "<use xlink:href=img/sprite.svg#icon-bubble></use>" + "</svg></button></div>" + "<div class=main-content__svg-circle-attachment>" + "<button class=btn-svg>" + "<a href=#><svg class=main-content__svg-attachment>" + "<use xlink:href=img/sprite.svg#icon-cross></use>" + "</svg></a></button></div></div></div></div>" + "<div class=main-content__text-container>" + "<p class=main-content__text>" + descriptionText + "</p></div>";

         this.toDoList.push(task);
         this.renderList()

         // ulListTodo.appendChild(task);
         this.inputDescription.value = '';
         this.inputTitle.value = '';
         this.mustDo.textContent = this.toDoList.length;
         window.location.replace('#')

         task.querySelector('.main-content__svg-attachment').addEventListener('click', this.removeTask.bind(this));
         task.querySelector('.main-content__svg-check').addEventListener('click', this.completeTask.bind(this));
     }

     renderList() {
         this.ulListTodo.textContent = '';
         this.toDoList.forEach((toDoElement, key) => {
             toDoElement.dataset.key = key;
             this.ulListTodo.appendChild(toDoElement);
         })
     }

     //SEARCHING ITEMS


     searchTask(e) {
         e.preventDefault();
         const searchText = e.target.value.toLowerCase().trim();
         this.ulListTodo.textContent = "";
         let filtrList = this.toDoList.filter((filtrLi) => {
             return filtrLi.textContent.toLowerCase().includes(searchText);
         })
         filtrList.forEach(filtrLi => {
             this.ulListTodo.appendChild(filtrLi);
         })
     }
 }