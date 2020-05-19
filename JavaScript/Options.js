class Options {
    constructor() {
        this.messegesContainer = document.querySelector('.icons__messeges-wrapper ');
        this.messegesIcon = document.querySelector('.icons__single-item-2');
        this.body = document.getElementById('body');

        // Option List buttons
        this.optionList = document.getElementsByClassName('popup-settings__options-list');
        this.nameButton = document.querySelector('.popup-settings__option-name')
        this.professionButton = document.querySelector('.popup-settings__option-profession')
        this.imageButton = document.querySelector('.popup-settings__option-image')
        this.languageButton = document.querySelector('.popup-settings__option-Language')
        this.deleteButton = document.querySelector('.popup-settings__option-delete')
        this.logOutButton = document.querySelector('.popup-settings__option-log-out')
        
        // Changing options
        this.nameContainer = document.querySelector('.name-change');
        this.professionContainer = document.querySelector('.profession-change');

        // Buttons
        this.buttonBack = document.querySelector('.name-change__button-back');
        this.buttonBackPro = document.querySelector('.name-change__button-back-pro');
        this.buttonApply = document.querySelector('.name-change__button-apply');
        this.buttonApplyPro = document.querySelector('.name-change__button-apply-pro');
        this.ahrefPopup = document.querySelector('.popup-settings__svg-ahref');

        // Date
        this.profileName = document.getElementsByClassName('profile-box__user-name');
        this.profileProfession = document.getElementsByClassName('profile-box__user-experience');
        this.successContainer = document.getElementsByClassName('name-change__successful-container')

        // input 

        this.inputName = document.getElementById('name-input');
        this.inputSurName = document.getElementById('surname-input');


        this.flag = 0;
        this.flag2 = false;


        this.messegesContainer.addEventListener('click', this.preventBug.bind(this));
        this.messegesIcon.addEventListener('click', this.showMesseges.bind(this))
        this.body.addEventListener('click', this.hidePopup.bind(this));
        this.nameButton.addEventListener('click', this.showChangeName.bind(this));
        this.nameButton.addEventListener('click', this.hideOptions.bind(this));
        this.buttonBack.addEventListener('click', this.backToOptions.bind(this));
        this.ahrefPopup.addEventListener('click', this.backToOptions.bind(this));
        // Profession section

        this.professionButton.addEventListener('click', this.hideOptions.bind(this));
        this.professionButton.addEventListener('click', this.displayProfession.bind(this));
        this.buttonBackPro.addEventListener('click', this.backToOptions.bind(this));

        // Date

        this.buttonApply.addEventListener('click', this.changeName.bind(this))
        this.buttonApplyPro.addEventListener('click', this.changeSurName.bind(this))
        
        
    }

    showMesseges() {
        this.flag = 0;

        if(this.messegesContainer.style.display === "block") {
            this.messegesContainer.style.display = 'none'
            return;
        }
       
        this.messegesContainer.style.display = 'block'
        this.flag++
    }

    preventBug() {
        this.flag--;
    }

    hidePopup() {
        this.flag++;

        if(this.messegesContainer.style.display === "block" && this.flag === 3) {
            this.messegesContainer.style.display = 'none';
            this.flag = 0;
            return;
        }
    }

    hideOptions() {
        for (let i=0; i< this.optionList.length; i++) {
            this.optionList[i].style.display = 'none';
        }
    }

    showChangeName () {
        this.nameContainer.style.display = 'block';
    }

    backToOptions() {
        for (let i=0; i< this.optionList.length; i++) {
            this.optionList[i].style.display = 'block';
        }
        this.professionContainer.style.display = 'none';
        this.nameContainer.style.display = 'none';
        for (let i = 0; i< this.successContainer.length; i++) {
            this.successContainer[i].style.visibility = 'hidden'
        }
    }

    displayProfession() {
        this.professionContainer.style.display = 'block'
    }

    changeName() {
        if(this.inputName.value == '') return
           
        for (let i = 0; i< this.profileName.length; i++) {
            this.profileName[i].textContent = '';
            this.profileName[i].textContent = this.inputName.value;
        }
        this.inputName.value = '';
        for (let i = 0; i< this.successContainer.length; i++) {
            this.successContainer[i].style.visibility = 'visible'
        }
    }

    changeSurName() {
        if(this.inputSurName.value == '') return

        for (let i = 0; i< this.profileProfession.length; i++) {
            this.profileProfession[i].textContent = '';
            this.profileProfession[i].textContent = this.inputSurName.value;
        }
        this.inputSurName.value = '';
        for (let i = 0; i< this.successContainer.length; i++) {
            this.successContainer[i].style.visibility = 'visible'
        }
    }

}