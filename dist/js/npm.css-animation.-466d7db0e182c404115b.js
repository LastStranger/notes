(window.webpackJsonp=window.webpackJsonp||[]).push([["npm.css-animation"],{"/dDc":function(n,t,i){"use strict";var e={transitionstart:{transition:"transitionstart",WebkitTransition:"webkitTransitionStart",MozTransition:"mozTransitionStart",OTransition:"oTransitionStart",msTransition:"MSTransitionStart"},animationstart:{animation:"animationstart",WebkitAnimation:"webkitAnimationStart",MozAnimation:"mozAnimationStart",OAnimation:"oAnimationStart",msAnimation:"MSAnimationStart"}},o={transitionend:{transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"mozTransitionEnd",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd"},animationend:{animation:"animationend",WebkitAnimation:"webkitAnimationEnd",MozAnimation:"mozAnimationEnd",OAnimation:"oAnimationEnd",msAnimation:"MSAnimationEnd"}},r=[],a=[];function s(n,t,i){n.addEventListener(t,i,!1)}function m(n,t,i){n.removeEventListener(t,i,!1)}"undefined"!=typeof window&&"undefined"!=typeof document&&function(){var n=document.createElement("div").style;function t(t,i){for(var e in t)if(t.hasOwnProperty(e)){var o=t[e];for(var r in o)if(r in n){i.push(o[r]);break}}}"AnimationEvent"in window||(delete e.animationstart.animation,delete o.animationend.animation),"TransitionEvent"in window||(delete e.transitionstart.transition,delete o.transitionend.transition),t(e,r),t(o,a)}();var d={startEvents:r,addStartEventListener:function(n,t){0!==r.length?r.forEach(function(i){s(n,i,t)}):window.setTimeout(t,0)},removeStartEventListener:function(n,t){0!==r.length&&r.forEach(function(i){m(n,i,t)})},endEvents:a,addEndEventListener:function(n,t){0!==a.length?a.forEach(function(i){s(n,i,t)}):window.setTimeout(t,0)},removeEndEventListener:function(n,t){0!==a.length&&a.forEach(function(i){m(n,i,t)})}};t.a=d},J9Du:function(n,t,i){"use strict";i.d(t,"b",function(){return m});var e=i("EJiy"),o=i.n(e),r=i("/dDc"),a=i("PFWz"),s=i.n(a),m=0!==r.a.endEvents.length,d=["Webkit","Moz","O","ms"],c=["-webkit-","-moz-","-o-","ms-",""];function u(n,t){for(var i=window.getComputedStyle(n,null),e="",o=0;o<c.length&&!(e=i.getPropertyValue(c[o]+t));o++);return e}function E(n){if(m){var t=parseFloat(u(n,"transition-delay"))||0,i=parseFloat(u(n,"transition-duration"))||0,e=parseFloat(u(n,"animation-delay"))||0,o=parseFloat(u(n,"animation-duration"))||0,r=Math.max(i+t,o+e);n.rcEndAnimTimeout=setTimeout(function(){n.rcEndAnimTimeout=null,n.rcEndListener&&n.rcEndListener()},1e3*r+200)}}function l(n){n.rcEndAnimTimeout&&(clearTimeout(n.rcEndAnimTimeout),n.rcEndAnimTimeout=null)}var f=function(n,t,i){var e="object"===(void 0===t?"undefined":o()(t)),a=e?t.name:t,m=e?t.active:t+"-active",d=i,c=void 0,u=void 0,f=s()(n);return i&&"[object Object]"===Object.prototype.toString.call(i)&&(d=i.end,c=i.start,u=i.active),n.rcEndListener&&n.rcEndListener(),n.rcEndListener=function(t){t&&t.target!==n||(n.rcAnimTimeout&&(clearTimeout(n.rcAnimTimeout),n.rcAnimTimeout=null),l(n),f.remove(a),f.remove(m),r.a.removeEndEventListener(n,n.rcEndListener),n.rcEndListener=null,d&&d())},r.a.addEndEventListener(n,n.rcEndListener),c&&c(),f.add(a),n.rcAnimTimeout=setTimeout(function(){n.rcAnimTimeout=null,f.add(m),u&&setTimeout(u,0),E(n)},30),{stop:function(){n.rcEndListener&&n.rcEndListener()}}};f.style=function(n,t,i){n.rcEndListener&&n.rcEndListener(),n.rcEndListener=function(t){t&&t.target!==n||(n.rcAnimTimeout&&(clearTimeout(n.rcAnimTimeout),n.rcAnimTimeout=null),l(n),r.a.removeEndEventListener(n,n.rcEndListener),n.rcEndListener=null,i&&i())},r.a.addEndEventListener(n,n.rcEndListener),n.rcAnimTimeout=setTimeout(function(){for(var i in t)t.hasOwnProperty(i)&&(n.style[i]=t[i]);n.rcAnimTimeout=null,E(n)},0)},f.setTransition=function(n,t,i){var e=t,o=i;void 0===i&&(o=e,e=""),e=e||"",d.forEach(function(t){n.style[t+"Transition"+e]=o})},f.isCssAnimationSupported=m,t.a=f}}]);