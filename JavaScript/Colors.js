class Colors {
    constructor() {
        this.$green = $('.color-green');
        this.$blue = $('.color-blue');
        this.$violet = $('.color-violet');
        this.$orange = $('.color-orange');
        this.$main = $('.color-main');


        this.$container = $('.container');
        this.$sidebar = $('.sidebar');
        this.$todo = $('.todos');
        this.$progressContent = $('.progression');
        this.$interfaceContainer = $('.int-container');
        this.$header = $('.header');

        // this.orangeRemove = ['']
        
        this.$main.on('click', this.mainFilter.bind(this));
        this.$orange.on('click', this.orangeFilter.bind(this));
        this.$violet.on('click', this.violetFilter.bind(this));
        this.$blue.on('click', this.blueFilter.bind(this));
        this.$green.on('click', this.greenFilter.bind(this));
    }

    resetFilters() {
        if(this.$header.hasClass('orange-header')) {

            this.$header.removeClass('orange-header');
            this.$container.removeClass('orange-container');
            this.$sidebar.removeClass('orange-sidebar');
            this.$progressContent.removeClass('orange-progress');
            this.$todo.removeClass('orange-todo');
            this.$interfaceContainer.removeClass('orange-interface');

        } else if (this.$header.hasClass('green-header')) {

            this.$header.removeClass('green-header');
            this.$container.removeClass('green-container');
            this.$sidebar.removeClass('green-sidebar');
            this.$progressContent.removeClass('green-progress');
            this.$todo.removeClass('green-todo');
            this.$interfaceContainer.removeClass('green-interface');

        } else if(this.$header.hasClass('violet-header')) {

            this.$header.removeClass('violet-header');
            this.$container.removeClass('violet-container');
            this.$sidebar.removeClass('violet-sidebar');
            this.$progressContent.removeClass('violet-progress');
            this.$todo.removeClass('violet-todo');
            this.$interfaceContainer.removeClass('violet-interface');

        } else if (this.$header.hasClass('blue-header')) {

            this.$header.removeClass('blue-header');
            this.$container.removeClass('blue-container');
            this.$sidebar.removeClass('blue-sidebar');
            this.$progressContent.removeClass('blue-progress');
            this.$todo.removeClass('blue-todo');
            this.$interfaceContainer.removeClass('blue-interface');
        } else if (this.$header.hasClass('main-header')) {

            this.$header.removeClass('main-header');
            this.$container.removeClass('main-container');
            this.$sidebar.removeClass('main-sidebar');
            this.$progressContent.removeClass('main-progress');
            this.$todo.removeClass('main-todo');
            this.$interfaceContainer.removeClass('main-interface');

        }
    }

    mainFilter() {

        this.resetFilters();

        this.$header.addClass('main-header');
        this.$container.addClass('main-container');
        this.$sidebar.addClass('main-sidebar');
        this.$progressContent.addClass('main-progress');
        this.$todo.addClass('main-todo');
        this.$interfaceContainer.addClass('main-interface');
    }

    violetFilter() {
        
        this.resetFilters();

        this.$header.addClass('violet-header');
        this.$container.addClass('violet-container');
        this.$sidebar.addClass('violet-sidebar');
        this.$progressContent.addClass('violet-progress');
        this.$todo.addClass('violet-todo');
        this.$interfaceContainer.addClass('violet-interface');
    }

    greenFilter() {

        this.resetFilters();

        this.$header.addClass('green-header');
        this.$container.addClass('green-container');
        this.$sidebar.addClass('green-sidebar');
        this.$progressContent.addClass('green-progress');
        this.$todo.addClass('green-todo');
        this.$interfaceContainer.addClass('green-interface');
    }

    orangeFilter() {

        this.resetFilters();

        this.$header.addClass('orange-header');
        this.$container.addClass('orange-container');
        this.$sidebar.addClass('orange-sidebar');
        this.$progressContent.addClass('orange-progress');
        this.$todo.addClass('orange-todo');
        this.$interfaceContainer.addClass('orange-interface');
    }

    blueFilter() {

        this.resetFilters();

        this.$header.addClass('blue-header');
        this.$container.addClass('blue-container');
        this.$sidebar.addClass('blue-sidebar');
        this.$progressContent.addClass('blue-progress');
        this.$todo.addClass('blue-todo');
        this.$interfaceContainer.addClass('blue-interface');
    }
}