class SidebarNav {
    constructor() {
        this.buttonProject = document.querySelector('.project-container__svg-button');
        this.buttonLabels = document.querySelector('.labels-container__svg-button');
        this.buttonFiltres = document.querySelector('.filtres-container__svg-button');

        this.ulListItemsProject = document.querySelector('.project-container__item-list')
        this.ulListItemsLabels = document.querySelector('.labels-container__items-list')
        this.ulListItemsFiltres = document.querySelector('.filtres-container__items-list')

        this.countP = 0;
        this.countL = 0;
        this.countF = 0;

        this.buttonProject.addEventListener('click', this.optionsProject.bind(this));
        this.buttonLabels.addEventListener('click', this.optionsLabels.bind(this));
        this.buttonFiltres.addEventListener('click', this.optionsFiltres.bind(this));
    }

    optionsProject() {
        if(this.countP === 1) {
            this.ulListItemsProject.style.display = "none"
            this.countP = 0
            return;
        }

        this.ulListItemsProject.style.display = "block"
        this.countP++;
    }

    optionsLabels() {
        if(this.countL === 1) {
            this.ulListItemsLabels.style.display = "none"
            this.countL = 0
            return;
        }

        this.ulListItemsLabels.style.display = "block"
        this.countL++;
    }

    optionsFiltres() {
        if(this.countF === 1) {
            this.ulListItemsFiltres.style.display = "none"
            this.countF = 0
            return;
        }

        this.ulListItemsFiltres.style.display = "block"
        this.countF++;
    }

}