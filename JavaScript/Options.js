class Options {
    constructor() {
        const messegesContainer = document.querySelector('.icons__messeges-wrapper ')
        const messegesIcon = document.querySelector('.icons__single-item-2')
        const body = document.getElementById('body')

        let flag = 0;
        let flag2 = false;

        const showMesseges = () => {

            if(messegesContainer.style.display === "block") {
                messegesContainer.style.display = 'none'
                return;
            }
           
            messegesContainer.style.display = 'block'
            flag++
        }

        const preventBug = () => {
            flag--;
        }

        const hidePopup = () => {
            
            flag++;

            if(messegesContainer.style.display === "block" && flag === 3) {
                messegesContainer.style.display = 'none';
                flag = 0;
                return;
            }
        }

        messegesContainer.addEventListener('click', preventBug);
        messegesIcon.addEventListener('click', showMesseges)
        body.addEventListener('click', hidePopup);
        
    }
}