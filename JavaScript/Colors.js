import $ from 'jquery';

export default class Colors {
    constructor() {
        this.$green = $('.color-green');
        this.$blue = $('.color-blue');
        this.$violet = $('.color-violet');
        this.$orange = $('.color-orange');
        this.$main = $('.color-main');

        this.$body = $('body')
        
        this.$main.on('click', this.mainFilter.bind(this));
        this.$orange.on('click', this.orangeFilter.bind(this));
        this.$violet.on('click', this.violetFilter.bind(this));
        this.$blue.on('click', this.blueFilter.bind(this));
        this.$green.on('click', this.greenFilter.bind(this));
    }

    resetFilters() {

        this.$body.removeClass('color-main');
        this.$body.removeClass('color-violet');
        this.$body.removeClass('color-orange');
        this.$body.removeClass('color-green');
        this.$body.removeClass('color-blue');
    }

    mainFilter() {

        this.resetFilters();
        this.$body.addClass('color-main');
    }

    violetFilter() {
        
        this.resetFilters();
        this.$body.addClass('color-violet');
    }

    greenFilter() {

        this.resetFilters();
        this.$body.addClass('color-green');
    }

    orangeFilter() {

        this.resetFilters();
        this.$body.addClass('color-orange');
    }

    blueFilter() {

        this.resetFilters();
        this.$body.addClass('color-blue');
    }
}