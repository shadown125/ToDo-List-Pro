// Popup
class Popup {
    constructor() {
        const button = document.querySelector('.task-add-button');
        const popup = document.querySelector('.popup-task');
        const popupContent = document.querySelector('.popup-task__content');
        const popupContentButton = document.querySelector('.popup-task__svg-button');

        const displayPopup = (e) => {
            e.preventDefault();
            popup.style.visibility = "visible";
            popupContent.style.visibility = "visible";
        }

        const hidePopup = (e) => {
            e.preventDefault();
            popup.style.visibility = "hidden";
            popupContent.style.visibility = "hidden";
        }

        button.addEventListener('click', displayPopup);
        popupContentButton.addEventListener('click', hidePopup);
    }
    
}
