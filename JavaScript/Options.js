class Options {
    constructor() {
        const messegesContainer = document.querySelector('.icons__messeges-wrapper ')
        const messegesIcon = document.querySelector('.icons__single-item-2')

        const showMesseges = () => {

            if(messegesContainer.style.display === "block") {
                messegesContainer.style.display = 'none'
                return;
            }

            messegesContainer.style.display = 'block'
        }

        messegesIcon.addEventListener('click', showMesseges)
    }
}