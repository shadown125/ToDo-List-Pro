import $ from 'jquery';
export default class Progress {
    constructor() {
        this.$dateNumber = $('.progression__day');
        this.$monthDate = $('.progression__month');
        this.$progressLine = $('.progression__bar');
        this.$doneTodoCounter = $('.progression__done-counter');
        this.$mustDoCounter = $('.progression__must-do-task-counter');

        this.$progressPercent = $('.progression__bar-percent');

        // DATE

        this.months();

        // PROGRESSION LINE

        this.progressLineContent();

    }

    months() {
        setInterval(() => {

            const nowTime = new Date().getDate();
            const nowMonth = new Date().getMonth();

            this.$dateNumber.text(nowTime);

            if (nowMonth === 0) {
                this.$monthDate.text('JAN')
            } else if (nowMonth === 1) {
                this.$monthDate.text('FEB')
            } else if (nowMonth === 2) {
                this.$monthDate.text('MARCH')
            } else if (nowMonth === 3) {
                this.$monthDate.text('APR')
            } else if (nowMonth === 4) {
                this.$monthDate.text('MAY')
            } else if (nowMonth === 5) {
                this.$monthDate.text('JUN')
            } else if (nowMonth === 6) {
                this.$monthDate.text('JUL')
            } else if (nowMonth === 7) {
                this.$monthDate.text('AUG')
            } else if (nowMonth === 8) {
                this.$monthDate.text('SEPT')
            } else if (nowMonth === 9) {
                this.$monthDate.text('OCT')
            } else if (nowMonth === 10) {
                this.$monthDate.text('NOV')
            } else if (nowMonth === 11) {
                this.$monthDate.text('DEC')
            }

        }, 100)
    }

    progressLineContent() {

        setInterval(() => {

            let mustDoNumber = this.$mustDoCounter.text();
            let doneTodoNumber = this.$doneTodoCounter.text();

            const total = Number(mustDoNumber) + Number(doneTodoNumber);
            let percent = doneTodoNumber * 100 / total;

            if(percent) {
                Number(this.$progressPercent.text(`${percent.toFixed(2)}%`))
            }
            this.$progressLine.css('width', `${percent}%`)
        }, 500)
    }
}