class SidebarNav {
    constructor() {
        const buttonProject = document.querySelector('.project-container__svg-button');
        const buttonLabels = document.querySelector('.labels-container__svg-button');
        const buttonFiltres = document.querySelector('.filtres-container__svg-button');

        const ulListItemsProject = document.querySelector('.project-container__item-list')
        const ulListItemsLabels = document.querySelector('.labels-container__items-list')
        const ulListItemsFiltres = document.querySelector('.filtres-container__items-list')

        let countP = 0;
        let countL = 0;
        let countF = 0;

        const optionsProject = () => {
            if(countP === 1) {
                ulListItemsProject.style.display = "none"
                countP = 0
                return;
            }

            ulListItemsProject.style.display = "block"
            countP++;
        }

        const optionsLabels = () => {
            if(countL === 1) {
                ulListItemsLabels.style.display = "none"
                countL = 0
                return;
            }

            ulListItemsLabels.style.display = "block"
            countL++;
        }

        const optionsFiltres = () => {
            if(countF === 1) {
                ulListItemsFiltres.style.display = "none"
                countF = 0
                return;
            }

            ulListItemsFiltres.style.display = "block"
            countF++;
            
        }

        buttonProject.addEventListener('click', optionsProject);
        buttonLabels.addEventListener('click', optionsLabels);
        buttonFiltres.addEventListener('click', optionsFiltres);
    }
}