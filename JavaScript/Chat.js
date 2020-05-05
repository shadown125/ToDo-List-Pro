class Chat {
    constructor() {
        const customCheckBox = document.querySelector('.chat-container__custom-checkbox');
        const customCheckDiv = document.querySelector('.chat-container__custom-checkbox-inner');
        const deleteButton = document.querySelector('.message-container__svg-delete');
        const deleteCircle = document.querySelector('.message-container__circle-delete');
        const chatContainer = document.querySelector('.chat-container');

        let flagCounter = 0;

        const check = () => {

            if(customCheckDiv.style.display === "block") {
                customCheckDiv.style.display = 'none'
                flagCounter--;
                return
            }

            customCheckDiv.style.display = 'block'
            flagCounter++


            deleteButton.addEventListener('click', deleteMessege)
            deleteCircle.addEventListener('click', deleteMessege)
        }

        const deleteMessege = () =>  {

            if(flagCounter && customCheckDiv.style.display === "block") {
                chatContainer.remove();
                console.log('1');
         
            }
        }

        
        customCheckBox.addEventListener('click', check)
    }    
}