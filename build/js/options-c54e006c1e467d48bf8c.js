!function(e){var t={};function n(i){if(t[i])return t[i].exports;var s=t[i]={i:i,l:!1,exports:{}};return e[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(i,s,function(t){return e[t]}.bind(null,s));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=54)}({54:function(e,t,n){"use strict";function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}n.r(t),n.d(t,"default",(function(){return s}));var s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.messegesContainer=document.querySelector(".icons__messeges-wrapper "),this.messegesIcon=document.querySelector(".icons__single-item-2"),this.body=document.getElementById("body"),this.optionList=document.getElementsByClassName("popup-settings__options-list"),this.progressLine=document.querySelector(".popup-settings__progress-bar-container"),this.nameButton=document.querySelector(".popup-settings__option-name"),this.professionButton=document.querySelector(".popup-settings__option-profession"),this.imageButton=document.querySelector(".popup-settings__option-image"),this.languageButton=document.querySelector(".popup-settings__option-Language"),this.deleteButton=document.querySelector(".popup-settings__option-delete"),this.logOutButton=document.querySelector(".popup-settings__option-log-out"),this.nameContainer=document.querySelector(".name-change"),this.professionContainer=document.querySelector(".profession-change"),this.buttonBack=document.querySelector(".name-change__button-back"),this.buttonBackPro=document.querySelector(".name-change__button-back-pro"),this.buttonApply=document.querySelector(".name-change__button-apply"),this.buttonApplyPro=document.querySelector(".name-change__button-apply-pro"),this.ahrefPopup=document.querySelector(".popup-settings__svg-ahref"),this.btnConfig=document.querySelector(".icons__btn-config"),this.profileName=document.getElementsByClassName("profile-box__user-name"),this.profileProfession=document.getElementsByClassName("profile-box__user-experience"),this.successContainer=document.getElementsByClassName("name-change__successful-container"),this.inputName=document.getElementById("name-input"),this.inputSurName=document.getElementById("surname-input"),this.flag=0,this.flag2=!1,this.btnConfig.addEventListener("click",this.displayProgressBar.bind(this)),this.messegesContainer.addEventListener("click",this.preventBug.bind(this)),this.body.addEventListener("click",this.hidePopup.bind(this)),this.nameButton.addEventListener("click",this.showChangeName.bind(this)),this.nameButton.addEventListener("click",this.hideOptions.bind(this)),this.buttonBack.addEventListener("click",this.backToOptions.bind(this)),this.ahrefPopup.addEventListener("click",this.backToOptions.bind(this)),this.ahrefPopup.addEventListener("click",this.hideProgressBar.bind(this)),this.professionButton.addEventListener("click",this.hideOptions.bind(this)),this.professionButton.addEventListener("click",this.displayProfession.bind(this)),this.buttonBackPro.addEventListener("click",this.backToOptions.bind(this)),this.buttonApply.addEventListener("click",this.changeName.bind(this)),this.buttonApplyPro.addEventListener("click",this.changeSurName.bind(this))}var t,n,s;return t=e,(n=[{key:"preventBug",value:function(){this.flag--}},{key:"hidePopup",value:function(){if(this.flag++,"block"===this.messegesContainer.style.display&&3===this.flag)return this.messegesContainer.style.display="none",void(this.flag=0)}},{key:"hideOptions",value:function(){for(var e=0;e<this.optionList.length;e++)this.optionList[e].style.display="none";this.progressLine.style.display="none"}},{key:"showChangeName",value:function(){this.nameContainer.style.display="block"}},{key:"backToOptions",value:function(){for(var e=0;e<this.optionList.length;e++)this.optionList[e].style.display="block";this.progressLine.style.display="flex",this.professionContainer.style.display="none",this.nameContainer.style.display="none";for(var t=0;t<this.successContainer.length;t++)this.successContainer[t].style.visibility="hidden"}},{key:"displayProfession",value:function(){this.professionContainer.style.display="block"}},{key:"changeName",value:function(){if(""!=this.inputName.value){for(var e=0;e<this.profileName.length;e++)this.profileName[e].textContent="",this.profileName[e].textContent=this.inputName.value;this.inputName.value="";for(var t=0;t<this.successContainer.length;t++)this.successContainer[t].style.visibility="visible"}}},{key:"changeSurName",value:function(){if(""!=this.inputSurName.value){for(var e=0;e<this.profileProfession.length;e++)this.profileProfession[e].textContent="",this.profileProfession[e].textContent=this.inputSurName.value;this.inputSurName.value="";for(var t=0;t<this.successContainer.length;t++)this.successContainer[t].style.visibility="visible"}}},{key:"displayProgressBar",value:function(){this.progressLine.style.display="flex"}},{key:"hideProgressBar",value:function(){var e=this;setTimeout((function(){e.progressLine.style.display="none"}),500)}}])&&i(t.prototype,n),s&&i(t,s),e}()}});