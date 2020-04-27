class Mobile {
    constructor() {
        const sidebar = document.querySelector('.sidebar');
        const background = document.querySelector('.background-blur');
        const buttonNav = document.querySelector('.menu__btn');

        const inbox = document.querySelector('.interface');
        const inboxText = document.querySelector('.profile-menu__text-inbox');

        const todoContent = document.querySelector('.content')
        const today = document.querySelector('.profile-menu__text-today');

        const showSidebar = () => {
            sidebar.style.left = "0"
        }

        const hideSidebar = () => {
            sidebar.style.left = "-60%"
        }

        const inboxContent = () => {

            if(todoContent.style.display === 'block'|| todoContent.style.visibility === "visible" ) {
                todoContent.style.display === 'none';
                todoContent.style.visibility === "hidden"
            }

            sidebar.style.left = "-60%"
            inbox.style.display = "block";
            inbox.style.visibility = "visible";
            console.log('ssdsa')
        }

        const todos = () => {

            if(inbox.style.display === "block" || inbox.style.visibility === "visible" ) {
                inbox.style.display = 'none';
                inbox.style.visibility = "hidden";
                console.log('lol')
            }

            sidebar.style.left = "-60%"

            todoContent.style.display = "block";
            todoContent.style.visibility = "visible";

            
        }

        today.addEventListener('click', todos)
        inboxText.addEventListener('click', inboxContent)
        background.addEventListener('click', hideSidebar)
        buttonNav.addEventListener('click', showSidebar);
    }

}