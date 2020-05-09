class Mobile {
    constructor() {
        const sidebar = document.querySelector('.sidebar');
        const background = document.querySelector('.background-blur');
        const buttonNav = document.querySelector('.menu__btn');

        const inbox = document.querySelector('.interface');
        const inboxText = document.querySelector('.profile-menu__text-inbox');

        const todoContent = document.querySelector('.content');
        const today = document.querySelector('.profile-menu__text-today');
        const doneTodos = document.querySelector('.profile-menu__text-done');
        const progressionButton = document.querySelector('.profile-menu__progression')
        const progressionContent = document.querySelector('.progression-levels')
        let sizeSmall = window.matchMedia('(max-width: 600px)');
        let sizeBig = window.matchMedia('(max-width: 1200px)')
        
        
        
        const preventBug = () => {
            // if(size < window.innerWidth ) {
            //     inbox.style.display = 'none';
            //     inbox.style.visibility = "hidden";
            // }

            if(window.innerWidth > sizeSmall && inbox.style.display === "block" && inbox.style.visibility === "visible" && todoContent.style.display === "none" || todoContent.style.visibility === "hidden") {

                todoContent.style.display = 'none';
                todoContent.style.visibility = "hidden"
                console.log('lol')

            } else if (window.innerWidth > sizeSmall && window.innerWidth < sizeBig && inbox.style.display === "block" || inbox.style.visibility === "visible" && todoContent.style.display === "block" || todoContent.style.visibility === "visible") {

                inbox.style.display = 'none';
                inbox.style.visibility = "hidden";
                
            }

            if (window.innerWidth > sizeBig && progressionContent.style.display === "none" ) {
                inbox.style.display = "block";
                inbox.style.visibility = "visible";
                todoContent.style.display = "block";
                todoContent.style.visibility = "visible";
            }
        }

        

        const showSidebar = () => {
            sidebar.style.left = "0"

            
        }

        const hideSidebar = () => {
            sidebar.style.left = "-60%"
        }

        const inboxContent = () => {

            if(window.innerWidth < sizeBig) {

            if(todoContent.style.display === "block" || todoContent.style.visibility === "visible" || true ) {
                todoContent.style.display = 'none';
                todoContent.style.visibility = "hidden"
            }

            sidebar.style.left = "-60%"
            inbox.style.display = "block";
            inbox.style.visibility = "visible";
            console.log('ssdsa')

        }
    }

        const todos = () => {

            if(window.innerWidth < sizeBig) {

            if(inbox.style.display === "block" || inbox.style.visibility === "visible" ) {
                inbox.style.display = 'none';
                inbox.style.visibility = "hidden";
                console.log('lol')
            }

            sidebar.style.left = "-60%"

            todoContent.style.display = "block";
            todoContent.style.visibility = "visible"; 

        }

        if(progressionContent.style.display === 'block' || progressionContent.style.visibility === "visible") {
            progressionContent.style.display = 'none';
            progressionContent.style.visibility = "hidden";
        }

        todoContent.style.display = "block";
        todoContent.style.visibility = "visible";

        inbox.style.display = "block";
        inbox.style.visibility = "visible";
        
    }

        const doneTodoContent = () => {
            if(window.innerWidth < sizeBig) {
                if(inbox.style.display === "block" || inbox.style.visibility === "visible" ) {
                    inbox.style.display = 'none';
                    inbox.style.visibility = "hidden";
                }

                doneTodos.style.display = "block";
                doneTodos.style.visibility = "visible";
                
                todoContent.style.display = "block";
                todoContent.style.visibility = "visible";
            }

            

                if(progressionContent.style.display === 'block' || progressionContent.style.visibility === "visible") {
                    progressionContent.style.display = 'none';
                    progressionContent.style.visibility = "hidden";
                }

                doneTodos.style.display = "block";
                doneTodos.style.visibility = "visible";
                
                todoContent.style.display = "block";
                todoContent.style.visibility = "visible";

                inbox.style.display = "block";
                inbox.style.visibility = "visible";

            
        }

        const progressionsSection = () => {
            
                inbox.style.display = 'none';
                inbox.style.visibility = "hidden";
                todoContent.style.display = 'none';
                todoContent.style.visibility = "hidden"
            
            progressionContent.style.display = 'block';
            progressionContent.style.visibility = "visible";

        }
    

        window.addEventListener('resize', preventBug)
        today.addEventListener('click', todos)
        inboxText.addEventListener('click', inboxContent)
        background.addEventListener('click', hideSidebar)
        buttonNav.addEventListener('click', showSidebar);
        doneTodos.addEventListener('click', hideSidebar);
        doneTodos.addEventListener('click', doneTodoContent);
        progressionButton.addEventListener('click', progressionsSection);
        
    }

}