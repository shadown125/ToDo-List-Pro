export default class Done {
    constructor() {
        this.doneTodosButton = document.querySelector('.profile-menu__text-done');
        this.doneContainer = document.querySelector('.done-todos');
        this.todoContentTitle = document.querySelector('.todos__title-wrapper')
        this.todoMainContent = document.querySelector('.main-content')
        this.today = document.querySelector('.profile-menu__text-today');

        
        this.today.addEventListener('click', this.showTodo.bind(this));
        this.doneTodosButton.addEventListener('click', this.showDone.bind(this));
    }

    showDone() {
        this.doneContainer.style.display = "block";
        this.doneContainer.style.visibility = "visible";

       this.todoContentTitle.style.display = 'none';
       this.todoContentTitle.style.visibility = 'hidden';

       this.todoMainContent.style.display = 'none';
       this.todoMainContent.style.visibility = 'hidden';
    }

    showTodo() {
        this.doneContainer.style.display = "none";
        this.doneContainer.style.visibility = "hidden";

        this.todoContentTitle.style.display = 'flex';
        this.todoContentTitle.style.visibility = 'visible';

        this.todoMainContent.style.display = 'block';
        this.todoMainContent.style.visibility = 'visible';
    }
}