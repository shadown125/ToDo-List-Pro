import $ from 'jquery'

export default class Login {
    constructor() {
        this.$buttonGuest = $('.login-container__login-guest-button');
        this.$loginSection = $('.login');
        this.$form = $('.login-container__form');
        this.$submitButton = $('.login-container__login-button');
        this.$inputLogin = $('.login-container__input-login');
        this.$inputPassword = $('.login-container__input-password');

        this.$loginContent = $('.login-container');


        this.$loginContainer = $('.login-container__wrapper');

        // Login SVG
        this.$loginSVG = $('.login-btn');

        this.$loginSVG.on('click', this.showLoginSection.bind(this));


        // this.$buttonGuest.on('click', this.guestLogin.bind(this));
        this.$submitButton.on('click', this.submitFunctionality.bind(this));

        //REGISTER
        this.$registerButton = $('.login-container__register-button');
        this.$registerContainer = $('.register-container');
        this.$backButton = $('.register-container__back-button');

        this.$backButton.on('click', this.backToLogin.bind(this));
        this.$registerButton.on('click', this.showRegister.bind(this));
        

        //RIPPLE BUTTON
        this.$rippleBtn = $('.ripple-btn');
        this.$gotItBtn = $('.notification-container__button');

        this.$rippleBtn.on('click', this.rippleEffect.bind(this));
        this.$rippleBtn.on('mouseenter', this.rippleEffect.bind(this));
        this.$gotItBtn.on('click', this.guestLogin.bind(this));

        //NOTIFICATION
        this.$notificationContent = $('.notification-container');

        this.$buttonGuest.on('click', this.showNotification.bind(this));
    }

    guestLogin() {
        this.$loginSection.css('display', 'none');
    }

    submitFunctionality(e) {
        e.preventDefault();
        this.$inputPassword.value = '';
    }

    showRegister() {
        this.$loginContainer.css('display', 'none');
        this.$registerContainer.css('display', 'block');
    }

    backToLogin() {
        this.$loginContainer.css('display', 'block');
        this.$registerContainer.css('display', 'none');
    }

    rippleEffect(e) {
        let x = e.clientX - e.target.offsetLeft*1.9;
        let y = e.clientY - e.target.offsetTop*1.7;

        let ripples = document.createElement('div');
        ripples.className = 'login-container__login-button-span-ripple';
        ripples.style.left = x + 'px';
        ripples.style.top = y + 'px';
        this.$submitButton.append(ripples);

        setTimeout(() => {
            ripples.remove()
        }, 1000)
    }

    showNotification() {
        this.$loginContent.css('display', 'none');
        this.$notificationContent.css('display', 'flex');
    }

    showLoginSection() {
        this.$loginSection.css('display', 'flex');
        this.$loginContent.css('display', 'flex');
        this.$notificationContent.css('display', 'none');
    }
}