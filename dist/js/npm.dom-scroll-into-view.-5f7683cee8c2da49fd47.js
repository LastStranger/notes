(window.webpackJsonp=window.webpackJsonp||[]).push([["npm.dom-scroll-into-view"],{"9Do8":function(t,o,e){"use strict";t.exports=e("zt9T")},jB5C:function(t,o,e){"use strict";var r=Object.assign||function(t){for(var o=1;o<arguments.length;o++){var e=arguments[o];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};function n(t,o){var e=t["page"+(o?"Y":"X")+"Offset"],r="scroll"+(o?"Top":"Left");if("number"!=typeof e){var i=t.document;"number"!=typeof(e=i.documentElement[r])&&(e=i.body[r])}return e}function l(t){return n(t)}function f(t){return n(t,!0)}function d(t){var o=function(t){var o,e=void 0,r=void 0,i=t.ownerDocument,n=i.body,l=i&&i.documentElement;return e=(o=t.getBoundingClientRect()).left,r=o.top,{left:e-=l.clientLeft||n.clientLeft||0,top:r-=l.clientTop||n.clientTop||0}}(t),e=t.ownerDocument,r=e.defaultView||e.parentWindow;return o.left+=l(r),o.top+=f(r),o}var p=new RegExp("^("+/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source+")(?!px)[a-z%]+$","i"),c=/^(top|right|bottom|left)$/,u="currentStyle",s="runtimeStyle",a="left",v="px";var w=void 0;function h(t,o){for(var e=0;e<t.length;e++)o(t[e])}function y(t){return"border-box"===w(t,"boxSizing")}"undefined"!=typeof window&&(w=window.getComputedStyle?function(t,o,e){var r="",i=t.ownerDocument,n=e||i.defaultView.getComputedStyle(t,null);return n&&(r=n.getPropertyValue(o)||n[o]),r}:function(t,o){var e=t[u]&&t[u][o];if(p.test(e)&&!c.test(o)){var r=t.style,i=r[a],n=t[s][a];t[s][a]=t[u][a],r[a]="fontSize"===o?"1em":e||0,e=r.pixelLeft+v,r[a]=i,t[s][a]=n}return""===e?"auto":e});var m=["margin","border","padding"],g=-1,b=2,T=1;function W(t,o,e){var r=0,i=void 0,n=void 0,l=void 0;for(n=0;n<o.length;n++)if(i=o[n])for(l=0;l<e.length;l++){var f=void 0;f="border"===i?i+e[l]+"Width":i+e[l],r+=parseFloat(w(t,f))||0}return r}function L(t){return null!=t&&t==t.window}var S={};function x(t,o,e){if(L(t))return"width"===o?S.viewportWidth(t):S.viewportHeight(t);if(9===t.nodeType)return"width"===o?S.docWidth(t):S.docHeight(t);var r="width"===o?["Left","Right"]:["Top","Bottom"],i="width"===o?t.offsetWidth:t.offsetHeight,n=(w(t),y(t)),l=0;(null==i||i<=0)&&(i=void 0,(null==(l=w(t,o))||Number(l)<0)&&(l=t.style[o]||0),l=parseFloat(l)||0),void 0===e&&(e=n?T:g);var f=void 0!==i||n,d=i||l;if(e===g)return f?d-W(t,["border","padding"],r):l;if(f){var p=e===b?-W(t,["border"],r):W(t,["margin"],r);return d+(e===T?0:p)}return l+W(t,m.slice(e),r)}h(["Width","Height"],function(t){S["doc"+t]=function(o){var e=o.document;return Math.max(e.documentElement["scroll"+t],e.body["scroll"+t],S["viewport"+t](e))},S["viewport"+t]=function(o){var e="client"+t,r=o.document,i=r.body,n=r.documentElement[e];return"CSS1Compat"===r.compatMode&&n||i&&i[e]||n}});var O={position:"absolute",visibility:"hidden",display:"block"};function C(t){var o=void 0,e=arguments;return 0!==t.offsetWidth?o=x.apply(void 0,e):function(t,o,e){var r={},i=t.style,n=void 0;for(n in o)o.hasOwnProperty(n)&&(r[n]=i[n],i[n]=o[n]);for(n in e.call(t),o)o.hasOwnProperty(n)&&(i[n]=r[n])}(t,O,function(){o=x.apply(void 0,e)}),o}function H(t,o,e){var r=e;if("object"!==(void 0===o?"undefined":i(o)))return void 0!==r?("number"==typeof r&&(r+="px"),void(t.style[o]=r)):w(t,o);for(var n in o)o.hasOwnProperty(n)&&H(t,n,o[n])}h(["width","height"],function(t){var o=t.charAt(0).toUpperCase()+t.slice(1);S["outer"+o]=function(o,e){return o&&C(o,t,e?0:T)};var e="width"===t?["Left","Right"]:["Top","Bottom"];S[t]=function(o,r){if(void 0===r)return o&&C(o,t,g);if(o){w(o);return y(o)&&(r+=W(o,["padding","border"],e)),H(o,t,r)}}}),t.exports=r({getWindow:function(t){var o=t.ownerDocument||t;return o.defaultView||o.parentWindow},offset:function(t,o){if(void 0===o)return d(t);!function(t,o){"static"===H(t,"position")&&(t.style.position="relative");var e=d(t),r={},i=void 0,n=void 0;for(n in o)o.hasOwnProperty(n)&&(i=parseFloat(H(t,n))||0,r[n]=i+o[n]-e[n]);H(t,r)}(t,o)},isWindow:L,each:h,css:H,clone:function(t){var o={};for(var e in t)t.hasOwnProperty(e)&&(o[e]=t[e]);if(t.overflow)for(var e in t)t.hasOwnProperty(e)&&(o.overflow[e]=t.overflow[e]);return o},scrollLeft:function(t,o){if(L(t)){if(void 0===o)return l(t);window.scrollTo(o,f(t))}else{if(void 0===o)return t.scrollLeft;t.scrollLeft=o}},scrollTop:function(t,o){if(L(t)){if(void 0===o)return f(t);window.scrollTo(l(t),o)}else{if(void 0===o)return t.scrollTop;t.scrollTop=o}},viewportWidth:0,viewportHeight:0},S)},zt9T:function(t,o,e){"use strict";var r=e("jB5C");t.exports=function(t,o,e){e=e||{},9===o.nodeType&&(o=r.getWindow(o));var i=e.allowHorizontalScroll,n=e.onlyScrollIfNeeded,l=e.alignWithTop,f=e.alignWithLeft,d=e.offsetTop||0,p=e.offsetLeft||0,c=e.offsetBottom||0,u=e.offsetRight||0;i=void 0===i||i;var s=r.isWindow(o),a=r.offset(t),v=r.outerHeight(t),w=r.outerWidth(t),h=void 0,y=void 0,m=void 0,g=void 0,b=void 0,T=void 0,W=void 0,L=void 0,S=void 0,x=void 0;s?(W=o,x=r.height(W),S=r.width(W),L={left:r.scrollLeft(W),top:r.scrollTop(W)},b={left:a.left-L.left-p,top:a.top-L.top-d},T={left:a.left+w-(L.left+S)+u,top:a.top+v-(L.top+x)+c},g=L):(h=r.offset(o),y=o.clientHeight,m=o.clientWidth,g={left:o.scrollLeft,top:o.scrollTop},b={left:a.left-(h.left+(parseFloat(r.css(o,"borderLeftWidth"))||0))-p,top:a.top-(h.top+(parseFloat(r.css(o,"borderTopWidth"))||0))-d},T={left:a.left+w-(h.left+m+(parseFloat(r.css(o,"borderRightWidth"))||0))+u,top:a.top+v-(h.top+y+(parseFloat(r.css(o,"borderBottomWidth"))||0))+c}),b.top<0||T.top>0?!0===l?r.scrollTop(o,g.top+b.top):!1===l?r.scrollTop(o,g.top+T.top):b.top<0?r.scrollTop(o,g.top+b.top):r.scrollTop(o,g.top+T.top):n||((l=void 0===l||!!l)?r.scrollTop(o,g.top+b.top):r.scrollTop(o,g.top+T.top)),i&&(b.left<0||T.left>0?!0===f?r.scrollLeft(o,g.left+b.left):!1===f?r.scrollLeft(o,g.left+T.left):b.left<0?r.scrollLeft(o,g.left+b.left):r.scrollLeft(o,g.left+T.left):n||((f=void 0===f||!!f)?r.scrollLeft(o,g.left+b.left):r.scrollLeft(o,g.left+T.left)))}}}]);