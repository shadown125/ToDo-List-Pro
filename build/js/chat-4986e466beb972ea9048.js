!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=39)}({39:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.r(t),n.d(t,"default",(function(){return o}));var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.customCheckBox=document.querySelector(".chat-container__custom-checkbox"),this.customCheckDiv=document.querySelector(".chat-container__custom-checkbox-inner"),this.deleteButton=document.querySelector(".message-container__svg-delete"),this.deleteCircle=document.querySelector(".message-container__circle-delete"),this.chatContainer=document.querySelector(".chat-container"),this.flagCounter=0,this.customCheckBox.addEventListener("click",this.check.bind(this))}var t,n,o;return t=e,(n=[{key:"check",value:function(){if("block"===this.customCheckDiv.style.display)return this.customCheckDiv.style.display="none",void this.flagCounter--;this.customCheckDiv.style.display="block",this.flagCounter++,this.deleteButton.addEventListener("click",this.deleteMessege.bind(this)),this.deleteCircle.addEventListener("click",this.deleteMessege.bind(this))}},{key:"deleteMessege",value:function(e){e.preventDefault(),this.flagCounter&&"block"===this.customCheckDiv.style.display&&this.chatContainer.remove()}}])&&r(t.prototype,n),o&&r(t,o),e}()}});