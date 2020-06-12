export default class Mobile {
    constructor() {
        this.sidebar = document.querySelector('.sidebar');
        this.background = document.querySelector('.background-blur');
        this.buttonNav = document.querySelector('.menu__btn');

        this.inbox = document.querySelector('.interface');
        this.inboxText = document.querySelector('.profile-menu__text-inbox');

        this.todoContent = document.querySelector('.content');
        this.today = document.querySelector('.profile-menu__text-today');
        this.doneTodos = document.querySelector('.profile-menu__text-done');
        this.progressionButton = document.querySelector('.profile-menu__progression')
        this.progressionContent = document.querySelector('.progression-levels')
        this.size = 600
        
        
        
        // const preventBug = () => {
        //     // if(size < window.innerWidth ) {
        //     //     inbox.style.display = 'none';
        //     //     inbox.style.visibility = "hidden";
        //     // }

            
        // }

        

        // const showSidebar = () => {
           

            
        // }

        // const hideSidebar = () => {
           
        // }

    //     const inboxContent = () => {

            
    // }

    //     const todos = () => {

           
        
    // }

        // const doneTodoContent = () => {
            
        // }

        // const progressionsSection = () => {
            
   

        // }
    

        window.addEventListener('resize', this.preventBug.bind(this))
        this.today.addEventListener('click', this.todos.bind(this))
        this.inboxText.addEventListener('click', this.inboxContent.bind(this))
        this.background.addEventListener('click', this.hideSidebar.bind(this))
        this.buttonNav.addEventListener('click', this.showSidebar.bind(this));
        this.doneTodos.addEventListener('click', this.hideSidebar.bind(this));
        this.doneTodos.addEventListener('click', this.doneTodoContent.bind(this));
        this.progressionButton.addEventListener('click', this.progressionsSection.bind(this));
        this.progressionButton.addEventListener('click', this.hideSidebar.bind(this));
        
    }

    preventBug() {

        if(window.innerWidth > 600 && this.inbox.style.display === "block" && this.inbox.style.visibility === "visible" && this.todoContent.style.display === "none" || this.todoContent.style.visibility === "hidden") {

            this.todoContent.style.display = 'none';
            this.todoContent.style.visibility = "hidden";

        } else if (window.innerWidth > 600 && window.innerWidth < 1200 && this.inbox.style.display === "block" || this.inbox.style.visibility === "visible" && this.todoContent.style.display === "block" || this.todoContent.style.visibility === "visible") {

            this.inbox.style.display = 'none';
            this.inbox.style.visibility = "hidden";
            
        }

        if (window.innerWidth > 1200 && this.progressionContent.style.display === "none" ) {
            this.inbox.style.display = "block";
            this.inbox.style.visibility = "visible";
            this.todoContent.style.display = "block";
            this.todoContent.style.visibility = "visible";
        }
    }

    showSidebar() {
        this.sidebar.style.left = "0"
    }

    hideSidebar() {
        this.sidebar.style.left = "-60%"
    }

    inboxContent() {

        if(window.innerWidth < 1200) {

            if(this.todoContent.style.display === "block" || this.todoContent.style.visibility === "visible" || true ) {
                this.todoContent.style.display = 'none';
                this.todoContent.style.visibility = "hidden";
            }

            this.sidebar.style.left = "-60%";
            this.inbox.style.display = "block";
            this.inbox.style.visibility = "visible";

            if(this.progressionContent.style.display === 'block' && this.progressionContent.style.visibility === 'visible') {
                this.progressionContent.style.display = 'none';
                this.progressionContent.style.visibility = "hidden";
            }

        }
    }

    todos() {

        if(window.innerWidth < 1200) {

            if(this.inbox.style.display == "block" || this.inbox.style.visibility == "visible" ) {
                this.inbox.style.display = 'none';
                this.inbox.style.visibility = "hidden";
                console.log('lol')
            }

            this.sidebar.style.left = "-60%"

            this.todoContent.style.display = "block";
            this.todoContent.style.visibility = "visible"; 

        }

        if(window.innerWidth > 1200) {
            this.inbox.style.display = "block";
            this.inbox.style.visibility = "visible";
        }

        if(this.progressionContent.style.display === 'block' || this.progressionContent.style.visibility === "visible") {
            this.progressionContent.style.display = 'none';
            this.progressionContent.style.visibility = "hidden";
        }

        this.todoContent.style.display = "block";
        this.todoContent.style.visibility = "visible";
    }

    doneTodoContent() {

        if(window.innerWidth < 1200) {
            if(this.inbox.style.display === "block" || this.inbox.style.visibility === "visible" ) {
                this.inbox.style.display = 'none';
                this.inbox.style.visibility = "hidden";
            }

            this.doneTodos.style.display = "block";
            this.doneTodos.style.visibility = "visible";
            
            this.todoContent.style.display = "block";
            this.todoContent.style.visibility = "visible";
        }

        if(window.innerWidth > 1200) {
            this.inbox.style.display = "block";
        this.inbox.style.visibility = "visible";
        }

            if(this.progressionContent.style.display === 'block' || this.progressionContent.style.visibility === "visible") {
                this.progressionContent.style.display = 'none';
                this.progressionContent.style.visibility = "hidden";
            }

            this.doneTodos.style.display = "block";
            this.doneTodos.style.visibility = "visible";
            
            this.todoContent.style.display = "block";
            this.todoContent.style.visibility = "visible";
    }
    
    progressionsSection() {
        this.inbox.style.display = 'none';
        this.inbox.style.visibility = "hidden";
        this.todoContent.style.display = 'none';
        this.todoContent.style.visibility = "hidden"
    
        this.progressionContent.style.display = 'block';
        this.progressionContent.style.visibility = "visible";
    }

}