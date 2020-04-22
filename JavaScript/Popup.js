// Popup
class Popup {
    constructor() {
        const button = document.querySelector('.task-add-button');
        const popup = document.querySelector('.popup-task');
        const popupContent = document.querySelector('.popup-task__content');

        const displayPopup = () => {
            popup.style.visibility = "visible";
            popupContent.style.visibility = "visible";
        }

        button.addEventListener('click', displayPopup);
    }
    
}
