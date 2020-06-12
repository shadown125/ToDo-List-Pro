import $ from 'jquery'

export default class Login {
    constructor() {
        this.$buttonGuest = $('.login-container__login-guest-button');
        this.$loginSection = $('.login');

        this.$buttonGuest.on('click', this.guestLogin.bind(this))
    }

    guestLogin() {
        this.$loginSection.css('display', 'none');
    }
}