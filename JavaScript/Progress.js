class Progress {
    constructor() {
        const dateNumber = document.querySelector('.progression__day');
        const monthDate = document.querySelector('.progression__month');
        const progressLine = document.querySelector('.progression__bar');
        const doneTodoCounter = document.querySelector('.progression__done-counter')
        const mustDoCounter = document.querySelector('.progression__must-do-task-counter')
        const nowTime = new Date().getDate();
        const nowMonth = new Date().getMonth();


        // DATE
        dateNumber.textContent = nowTime;

        if(nowMonth === 0) {
            monthDate.textContent = 'JAN'
        } else if (nowMonth === 1) {
            monthDate.textContent = 'FEB'
        } else if (nowMonth === 2) {
            monthDate.textContent = 'MARCH'
        } else if (nowMonth === 3) {
            monthDate.textContent = 'APR'
        } else if (nowMonth === 4) {
            monthDate.textContent = 'MAY'
        } else if (nowMonth === 5) {
            monthDate.textContent = 'JUN'
        } else if (nowMonth === 6) {
            monthDate.textContent = 'JUL'
        } else if (nowMonth === 7) {
            monthDate.textContent = 'AUG'
        } else if (nowMonth === 8) {
            monthDate.textContent = 'SEPT'
        } else if (nowMonth === 9) {
            monthDate.textContent = 'OCT'
        } else if (nowMonth === 10) {
            monthDate.textContent = 'NOV'
        } else if (nowMonth === 11) {
            monthDate.textContent = 'DEC'
        }

        // PROGRESSION LINE

        

        setInterval(() => {

            let mustDoNumber = mustDoCounter.textContent;
            let doneTodoNumber = doneTodoCounter.textContent;

            const total = Number(mustDoNumber) + Number(doneTodoNumber);
            let percent = doneTodoNumber * 100 / total;
        
            progressLine.style.width = `${percent}%`

            console.log(percent)
            console.log(total)
            console.log(doneTodoNumber)
        }, 500)
        
        
    }
}