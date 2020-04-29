class Done {
    constructor() {
        const doneTodosButton = document.querySelector('.profile-menu__text-done');
        const doneContainer = document.querySelector('.done-todos');
        const todoContentTitle = document.querySelector('.todos__title-wrapper')
        const todoMainContent = document.querySelector('.main-content')
        const today = document.querySelector('.profile-menu__text-today');

        const showDone = () => {
            doneContainer.style.display = "block";
            doneContainer.style.visibility = "visible";

           todoContentTitle.style.display = 'none';
           todoContentTitle.style.visibility = 'hidden';

           todoMainContent.style.display = 'none';
           todoMainContent.style.visibility = 'hidden';
        }

        const showTodo = () => {
            doneContainer.style.display = "none";
            doneContainer.style.visibility = "hidden";

            todoContentTitle.style.display = 'flex';
            todoContentTitle.style.visibility = 'visible';

            todoMainContent.style.display = 'block';
            todoMainContent.style.visibility = 'visible';
        }
        
        today.addEventListener('click', showTodo);
        doneTodosButton.addEventListener('click', showDone);
    }
}