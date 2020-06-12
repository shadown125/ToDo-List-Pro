export default class Chat {
    constructor() {
        this.customCheckBox = document.querySelector('.chat-container__custom-checkbox');
        this.customCheckDiv = document.querySelector('.chat-container__custom-checkbox-inner');
        this.deleteButton = document.querySelector('.message-container__svg-delete');
        this.deleteCircle = document.querySelector('.message-container__circle-delete');
        this.chatContainer = document.querySelector('.chat-container');

        this.flagCounter = 0;

        // this.customCheckBox.addEventListener('click', function() {
        //     this.check();
        // }) 
        
       this.customCheckBox.addEventListener('click', this.check.bind(this))
        // this.customCheckBox.addEventListener('click', () => {
        //     this.check();
        // }) 
    } 
    
    check() {
        if(this.customCheckDiv.style.display === "block") {
            this.customCheckDiv.style.display = 'none'
            this.flagCounter--;
            return
        }

        this.customCheckDiv.style.display = 'block'
        this.flagCounter++


        this.deleteButton.addEventListener('click', this.deleteMessege.bind(this))
        this.deleteCircle.addEventListener('click', this.deleteMessege.bind(this))
    }

    deleteMessege(e) {
        e.preventDefault();
        if(this.flagCounter && this.customCheckDiv.style.display === "block") {
            this.chatContainer.remove();
     
        }
    }
}