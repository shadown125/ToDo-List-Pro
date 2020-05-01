class Options {
    constructor() {
        const buttonConfig = document.querySelector('.icons__btn-config');
        const svgConfig = document.querySelector('.icons__svg-config');

        const showSettingPopup = () => {
            
        }


        buttonConfig.addEventListener('click', showSettingPopup);
        svgConfig.addEventListener('click', showSettingPopup);
    }
}