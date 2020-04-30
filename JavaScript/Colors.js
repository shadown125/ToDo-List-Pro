class Colors {
    constructor() {
        const green = document.querySelector('.color-green');
        const blue = document.querySelector('.color-blue');
        const violet = document.querySelector('.color-violet');
        const orange = document.querySelector('.color-orange');
        const main = document.querySelector('.color-main');


        const container = document.querySelector('.container');
        const sidebar = document.querySelector('.sidebar');
        const todo = document.querySelector('.todos');
        const progressContent = document.querySelector('.progression');
        const interfaceContainer = document.querySelector('.int-container');
        const header = document.querySelector('.header');

        const mainFilter = () => {
            header.style.backgroundImage = 'linear-gradient(#2E3553, #2E3553)';
            container.style.backgroundImage = 'linear-gradient(#2a314f, #2E3553)';
            sidebar.style.backgroundImage = 'linear-gradient(to right bottom, #2E3553, #4C4177)';
            progressContent.style.backgroundImage = 'linear-gradient(#4C4177, #4C4177)';
            todo.style.backgroundImage = 'linear-gradient(#4C4177, #4C4177)';
            interfaceContainer.style.backgroundImage = 'linear-gradient(#4C4177, #4C4177)';
           
        }

        const violetFilter = () => {
            header.style.backgroundImage = 'linear-gradient(to right bottom, #2e3553, #2d3452, #2d3351, #2c3351, #2b3250, #2d3353, #2f3456, #313559, #373861, #3d3b68, #443e70, #4c4177)';
            container.style.backgroundImage = 'linear-gradient(to right bottom, #2e3553, #32385a, #373a61, #3d3c68, #433e6f, #433e6e, #423d6e, #423d6d, #3b3a66, #35375e, #2f3457, #2a314f)';
            sidebar.style.backgroundImage = 'linear-gradient(to right bottom, #2e3553, #32385a, #373a61, #3d3c68, #433e6f, #433e6e, #423d6e, #423d6d, #3b3a66, #35375e, #2f3457, #2a314f)';
            progressContent.style.backgroundImage = 'linear-gradient(to right bottom, #2e3553, #2d3452, #2d3351, #2c3351, #2b3250, #2d3353, #2f3456, #313559, #373861, #3d3b68, #443e70, #4c4177)';
            todo.style.backgroundImage = 'linear-gradient(to bottom, #2e3553, #2d3452, #2d3351, #2c3351, #2b3250, #2d3353, #2f3456, #313559, #373861, #3d3b68, #443e70, #4c4177)';
            interfaceContainer.style.backgroundImage = 'linear-gradient(to right top, #2e3553, #32385a, #373a61, #3d3c68, #433e6f, #433e6e, #423d6e, #423d6d, #3b3a66, #35375e, #2f3457, #2a314f)';
           
        }
        
        const greenFilter = () => {
            header.style.backgroundImage = 'linear-gradient(to left, #21777d, #21747c, #22717a, #236e79, #246b77, #256875, #266673, #276371, #28606f, #295d6c, #2a5a6a, #2b5767)';
            container.style.backgroundImage = 'linear-gradient(to left top, #21777d, #21747c, #22717a, #236e79, #246b77, #256875, #266673, #276371, #28606f, #295d6c, #2a5a6a, #2b5767)';
            sidebar.style.backgroundImage = 'linear-gradient(to left top, #268782, #248481, #228181, #217e80, #217b7f, #21787e, #21767c, #21737b, #227079, #236d78, #246a76, #256774)';
            progressContent.style.backgroundImage = 'linear-gradient(to left top, #268782, #248481, #228181, #217e80, #217b7f, #21787e, #21767c, #21737b, #227079, #236d78, #246a76, #256774)';
            todo.style.backgroundImage = 'linear-gradient(to top, #268782, #248481, #228181, #217e80, #217b7f, #21787e, #21767c, #21737b, #227079, #236d78, #246a76, #256774)';
            interfaceContainer.style.backgroundImage = 'linear-gradient(to right top, #268782, #248481, #228181, #217e80, #217b7f, #21787e, #21767c, #21737b, #227079, #236d78, #246a76, #256774)';
           
        }

        const orangeFilter = () => {
            header.style.backgroundImage = 'linear-gradient(to right, #f94327, #f83a36, #f63343, #f22d4f, #ed2a5a, #e82a63, #e12b6c, #da2e74, #d1327c, #c73783, #bc3b89, #b1408e)';
            container.style.backgroundImage = 'linear-gradient(to right bottom, #d04072, #ce417a, #ca4382, #c7468a, #c24991, #bb4e9b, #b353a4, #a958ac, #995fb7, #8667c0, #6f6dc6, #5573ca)';
            sidebar.style.backgroundImage = 'linear-gradient(to right bottom, #d14545, #cf424d, #cb4055, #c73e5d, #c23e64, #bd3f69, #b7406e, #b14173, #a94378, #a1447c, #99467f, #904882)';
            progressContent.style.backgroundImage = 'linear-gradient(to right bottom, #d14545, #cf424d, #cb4055, #c73e5d, #c23e64, #bd3f69, #b7406e, #b14173, #a94378, #a1447c, #99467f, #904882)';
            todo.style.backgroundImage = 'linear-gradient(to bottom, #d14545, #cf424d, #cb4055, #c73e5d, #c23e64, #bd3f69, #b7406e, #b14173, #a94378, #a1447c, #99467f, #904882)';
            interfaceContainer.style.backgroundImage = 'linear-gradient(to right top, #d14545, #cf424d, #cb4055, #c73e5d, #c23e64, #bd3f69, #b7406e, #b14173, #a94378, #a1447c, #99467f, #904882)';
           
        }

        const blueFilter = () => {
            header.style.backgroundImage = 'linear-gradient(to right, #8c6cc3, #8672c9, #8077ce, #7a7dd3, #7382d8, #6c87dc, #658be0, #5e90e3, #5695e6, #4d9ae8, #449eea, #3ba3ec)';
            container.style.backgroundImage = 'linear-gradient(to right bottom, #8c6cc3, #8672c9, #8077ce, #7a7dd3, #7382d8, #6c87dc, #658be0, #5e90e3, #5695e6, #4d9ae8, #449eea, #3ba3ec)';
            sidebar.style.backgroundImage = 'linear-gradient(to right bottom, #6989de, #618ee2, #5993e5, #5098e8, #479dea, #3fa1ec, #37a5ed, #2ea9ee, #23adef, #18b2ef, #0cb6ef, #01baef)';
            progressContent.style.backgroundImage = 'linear-gradient(to right bottom, #6989de, #618ee2, #5993e5, #5098e8, #479dea, #3fa1ec, #37a5ed, #2ea9ee, #23adef, #18b2ef, #0cb6ef, #01baef)';
            todo.style.backgroundImage = 'linear-gradient(to bottom, #6989de, #618ee2, #5993e5, #5098e8, #479dea, #3fa1ec, #37a5ed, #2ea9ee, #23adef, #18b2ef, #0cb6ef, #01baef)';
            interfaceContainer.style.backgroundImage = 'linear-gradient(to right top, #6989de, #618ee2, #5993e5, #5098e8, #479dea, #3fa1ec, #37a5ed, #2ea9ee, #23adef, #18b2ef, #0cb6ef, #01baef)';
           
        }

        main.addEventListener('click', mainFilter)
        orange.addEventListener('click', orangeFilter)
        violet.addEventListener('click', violetFilter)
        blue.addEventListener('click', blueFilter)
        green.addEventListener('click', greenFilter)
    }
}