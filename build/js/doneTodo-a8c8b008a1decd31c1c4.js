!function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=52)}({52:function(t,e,n){"use strict";function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}n.r(e),n.d(e,"default",(function(){return i}));var i=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.doneTodosButton=document.querySelector(".profile-menu__text-done"),this.doneContainer=document.querySelector(".done-todos"),this.todoContentTitle=document.querySelector(".todos__title-wrapper"),this.todoMainContent=document.querySelector(".main-content"),this.today=document.querySelector(".profile-menu__text-today"),this.today.addEventListener("click",this.showTodo.bind(this)),this.doneTodosButton.addEventListener("click",this.showDone.bind(this))}var e,n,i;return e=t,(n=[{key:"showDone",value:function(){this.doneContainer.style.display="block",this.doneContainer.style.visibility="visible",this.todoContentTitle.style.display="none",this.todoContentTitle.style.visibility="hidden",this.todoMainContent.style.display="none",this.todoMainContent.style.visibility="hidden"}},{key:"showTodo",value:function(){this.doneContainer.style.display="none",this.doneContainer.style.visibility="hidden",this.todoContentTitle.style.display="flex",this.todoContentTitle.style.visibility="visible",this.todoMainContent.style.display="block",this.todoMainContent.style.visibility="visible"}}])&&o(e.prototype,n),i&&o(e,i),t}()}});