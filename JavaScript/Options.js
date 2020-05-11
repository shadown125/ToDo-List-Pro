class Options {
    constructor() {
        const messegesContainer = document.querySelector('.icons__messeges-wrapper ');
        const messegesIcon = document.querySelector('.icons__single-item-2');
        const body = document.getElementById('body');

        // Option List buttons
        const optionList = document.getElementsByClassName('popup-settings__options-list');
        const nameButton = document.querySelector('.popup-settings__option-name')
        const professionButton = document.querySelector('.popup-settings__option-profession')
        const imageButton = document.querySelector('.popup-settings__option-image')
        const languageButton = document.querySelector('.popup-settings__option-Language')
        const deleteButton = document.querySelector('.popup-settings__option-delete')
        const logOutButton = document.querySelector('.popup-settings__option-log-out')
        
        // Changing options
        const nameContainer = document.querySelector('.name-change');

        // Buttons
        const buttonBack = document.querySelector('.name-change__button-back');
        const buttonApply = document.querySelector('.name-change__button-apply');
        const ahrefPopup = document.querySelector('.popup-settings__svg-ahref')


        let flag = 0;
        let flag2 = false;

        const showMesseges = () => {
            flag = 0;

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

        const showChangeName = () => {

            for (let i=0; i< optionList.length; i++) {
                optionList[i].style.display = 'none';
            }
            
            nameContainer.style.display = 'block';
        }

        const backToOptions = () => {
            for (let i=0; i< optionList.length; i++) {
                optionList[i].style.display = 'block';
            }
            
            nameContainer.style.display = 'none';
        }


        messegesContainer.addEventListener('click', preventBug);
        messegesIcon.addEventListener('click', showMesseges)
        body.addEventListener('click', hidePopup);
        nameButton.addEventListener('click', showChangeName);
        buttonBack.addEventListener('click', backToOptions)
        ahrefPopup.addEventListener('click', backToOptions)
    }
}