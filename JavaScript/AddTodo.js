 import $ from 'jquery'

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

        // LVL SECTION

        this.$completeTodoBtn = $('.main-content__svg-circle-check');
        this.$photoMainLvl = $('.profile-box__levels');
        this.$settingsMainLvl = $('.popup-settings__progress-bar-lvl');

        // VALUES
        this.$currentExp = $('.popup-settings__current-exp');
        this.$lvlUpExp = $('.popup-settings__to-lvlup-exp');
        this.$progressLine = $('.popup-settings__progress');
        this.$progressPercent = $('.popup-settings__progress-value');

        this.multiplayer = 1;
        this.leftExpAfterLvl = 0;
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
         task.querySelector('.main-content__svg-check').addEventListener('click', this.addExp.bind(this));
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

     addExp() {
        
        let currentExpValue = Number(this.$currentExp.text());
        let toLvlUpExpValue = Number(this.$lvlUpExp.text());

        let photoMainLvlValue = Number(this.$photoMainLvl.text());
        let settingsMainLvlValue = Number(this.$settingsMainLvl.text());

        let currentSum = currentExpValue + 11 * this.multiplayer;

        let percentExp = currentSum * 100 / toLvlUpExpValue;

        this.$progressLine.css('width', `${percentExp}%`);
        this.$progressPercent.text(`${percentExp.toFixed(2)}%`)
        this.$currentExp.text(Math.round(currentSum));

        if(Number(this.$currentExp.text()) >= toLvlUpExpValue) {
            
            this.leftExpAfterLvl = Number(this.$currentExp.text()) - toLvlUpExpValue;
            this.$photoMainLvl.text(photoMainLvlValue += 1);
            this.$settingsMainLvl.text(settingsMainLvlValue += 1);

            this.$lvlUpExp.text(toLvlUpExpValue = Math.round(toLvlUpExpValue * 1.7));
            Number(this.$currentExp.text(Math.round(this.leftExpAfterLvl)));

            let percentExpAfterExp = this.leftExpAfterLvl * 100 / toLvlUpExpValue;

            this.$progressLine.css('width', `${percentExpAfterExp}%`);
            this.$progressPercent.text(`${percentExpAfterExp.toFixed(2)}%`);

            this.multiplayer = this.multiplayer + 0.3;
            return;
        }
        
        
    }
 }