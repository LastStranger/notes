(window.webpackJsonp=window.webpackJsonp||[]).push([["npm.reach"],{YwZP:function(t,e,n){"use strict";var r,o,i,a,u,c=n("q1tI"),s=n.n(c),p=(n("6DQo"),n("17x9"),n("QLaP")),l=n.n(p),f=n("/tz4"),h=n.n(f),v=n("VCL8"),d=function(t,e){return t.substr(0,e.length)===e},m=function(t,e){for(var n=void 0,r=void 0,o=e.split("?")[0],i=P(o),a=""===i[0],u=C(t),c=0,s=u.length;c<s;c++){var p=!1,f=u[c].route;if(f.default)r={route:f,params:{},uri:e};else{for(var h=P(f.path),v={},d=Math.max(i.length,h.length),m=0;m<d;m++){var y=h[m],g=i[m];if("*"===y){v["*"]=i.slice(m).map(decodeURIComponent).join("/");break}if(void 0===g){p=!0;break}var w=b.exec(y);if(w&&!a){-1===j.indexOf(w[1])||l()(!1);var E=decodeURIComponent(g);v[w[1]]=E}else if(y!==g){p=!0;break}}if(!p){n={route:f,params:v,uri:"/"+i.slice(0,m).join("/")};break}}}return n||r||null},y=function(t,e){if(d(t,"/"))return t;var n=t.split("?"),r=n[0],o=n[1],i=e.split("?")[0],a=P(r),u=P(i);if(""===a[0])return x(i,o);if(!d(a[0],".")){var c=u.concat(a).join("/");return x(("/"===i?"":"/")+c,o)}for(var s=u.concat(a),p=[],l=0,f=s.length;l<f;l++){var h=s[l];".."===h?p.pop():"."!==h&&p.push(h)}return x("/"+p.join("/"),o)},g=function(t,e){return"/"+P(t).map(function(t){var n=b.exec(t);return n?e[n[1]]:t}).join("/")},b=/^:(.+)/,w=function(t){return b.test(t)},E=function(t,e){return{route:t,score:t.default?0:P(t.path).reduce(function(t,e){return t+=4,!function(t){return""===t}(e)?w(e)?t+=2:!function(t){return"*"===t}(e)?t+=3:t-=5:t+=1,t},0),index:e}},C=function(t){return t.map(E).sort(function(t,e){return t.score<e.score?1:t.score>e.score?-1:t.index-e.index})},P=function(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")},x=function(t,e){return t+(e?"?"+e:"")},j=["uri","path"],O=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},F=function(t){return O({},t.location,{state:t.history.state,key:t.history.state&&t.history.state.key||"initial"})},k=!("undefined"==typeof window||!window.document||!window.document.createElement),D=(r=k?window:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/",e=0,n=[{pathname:t,search:""}],r=[];return{get location(){return n[e]},addEventListener:function(t,e){},removeEventListener:function(t,e){},history:{get entries(){return n},get index(){return e},get state(){return r[e]},pushState:function(t,o,i){var a=i.split("?"),u=a[0],c=a[1],s=void 0===c?"":c;e++,n.push({pathname:u,search:s}),r.push(t)},replaceState:function(t,o,i){var a=i.split("?"),u=a[0],c=a[1],s=void 0===c?"":c;n[e]={pathname:u,search:s},r[e]=t}}}}(),o=[],i=F(r),a=!1,u=function(){},{get location(){return i},get transitioning(){return a},_onTransitionComplete:function(){a=!1,u()},listen:function(t){o.push(t);var e=function(){i=F(r),t({location:i,action:"POP"})};return r.addEventListener("popstate",e),function(){r.removeEventListener("popstate",e),o=o.filter(function(e){return e!==t})}},navigate:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.state,c=e.replace,s=void 0!==c&&c;n=O({},n,{key:Date.now()+""});try{a||s?r.history.replaceState(n,null,t):r.history.pushState(n,null,t)}catch(e){r.location[s?"replace":"assign"](t)}i=F(r),a=!0;var p=new Promise(function(t){return u=t});return o.forEach(function(t){return t({location:i,action:"PUSH"})}),p}});D.navigate;n.d(e,"a",function(){return V}),n.d(e,"b",function(){return A});var q=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};function S(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}function T(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function L(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function U(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var R=function(t,e){var n=h()(e);return n.Consumer.displayName=t+".Consumer",n.Provider.displayName=t+".Provider",n},_=R("Location"),I=function(t){var e=t.children;return s.a.createElement(_.Consumer,null,function(t){return t?e(t):s.a.createElement(K,null,e)})},K=function(t){function e(){var n,r;T(this,e);for(var o=arguments.length,i=Array(o),a=0;a<o;a++)i[a]=arguments[a];return n=r=L(this,t.call.apply(t,[this].concat(i))),r.state={context:r.getContext(),refs:{unlisten:null}},L(r,n)}return U(e,t),e.prototype.getContext=function(){var t=this.props.history;return{navigate:t.navigate,location:t.location}},e.prototype.componentDidCatch=function(t,e){if(!Z(t))throw t;(0,this.props.history.navigate)(t.uri,{replace:!0})},e.prototype.componentDidUpdate=function(t,e){e.context.location!==this.state.context.location&&this.props.history._onTransitionComplete()},e.prototype.componentDidMount=function(){var t=this,e=this.state.refs,n=this.props.history;e.unlisten=n.listen(function(){Promise.resolve().then(function(){requestAnimationFrame(function(){t.unmounted||t.setState(function(){return{context:t.getContext()}})})})})},e.prototype.componentWillUnmount=function(){var t=this.state.refs;this.unmounted=!0,t.unlisten()},e.prototype.render=function(){var t=this.state.context,e=this.props.children;return s.a.createElement(_.Provider,{value:t},"function"==typeof e?e(t):e||null)},e}(s.a.Component);K.defaultProps={history:D};var M=R("Base",{baseuri:"/",basepath:"/"}),A=function(t){return s.a.createElement(M.Consumer,null,function(e){return s.a.createElement(I,null,function(n){return s.a.createElement($,q({},e,n,t))})})},$=function(t){function e(){return T(this,e),L(this,t.apply(this,arguments))}return U(e,t),e.prototype.render=function(){var t=this.props,e=t.location,n=t.navigate,r=t.basepath,o=t.primary,i=t.children,a=(t.baseuri,t.component),u=void 0===a?"div":a,c=S(t,["location","navigate","basepath","primary","children","baseuri","component"]),p=s.a.Children.map(i,et(r)),l=e.pathname,f=m(p,l);if(f){var h=f.params,v=f.uri,d=f.route,g=f.route.value;r=d.default?r:d.path.replace(/\*$/,"");var b=q({},h,{uri:v,location:e,navigate:function(t,e){return n(y(t,v),e)}}),w=s.a.cloneElement(g,b,g.props.children?s.a.createElement(A,{primary:o},g.props.children):void 0),E=o?N:u,C=o?q({uri:v,location:e,component:u},c):c;return s.a.createElement(M.Provider,{value:{baseuri:v,basepath:r}},s.a.createElement(E,C,w))}return null},e}(s.a.PureComponent);$.defaultProps={primary:!0};var J=R("Focus"),N=function(t){var e=t.uri,n=t.location,r=t.component,o=S(t,["uri","location","component"]);return s.a.createElement(J.Consumer,null,function(t){return s.a.createElement(z,q({},o,{component:r,requestFocus:t,uri:e,location:n}))})},Q=!0,W=0,z=function(t){function e(){var n,r;T(this,e);for(var o=arguments.length,i=Array(o),a=0;a<o;a++)i[a]=arguments[a];return n=r=L(this,t.call.apply(t,[this].concat(i))),r.state={},r.requestFocus=function(t){r.state.shouldFocus||t.focus()},L(r,n)}return U(e,t),e.getDerivedStateFromProps=function(t,e){if(null==e.uri)return q({shouldFocus:!0},t);var n=t.uri!==e.uri,r=e.location.pathname!==t.location.pathname&&t.location.pathname===t.uri;return q({shouldFocus:n||r},t)},e.prototype.componentDidMount=function(){W++,this.focus()},e.prototype.componentWillUnmount=function(){0===--W&&(Q=!0)},e.prototype.componentDidUpdate=function(t,e){t.location!==this.props.location&&this.state.shouldFocus&&this.focus()},e.prototype.focus=function(){var t=this.props.requestFocus;t?t(this.node):Q?Q=!1:this.node.contains(document.activeElement)||this.node.focus()},e.prototype.render=function(){var t=this,e=this.props,n=(e.children,e.style),r=(e.requestFocus,e.role),o=void 0===r?"group":r,i=e.component,a=void 0===i?"div":i,u=(e.uri,e.location,S(e,["children","style","requestFocus","role","component","uri","location"]));return s.a.createElement(a,q({style:q({outline:"none"},n),tabIndex:"-1",role:o,ref:function(e){return t.node=e}},u),s.a.createElement(J.Provider,{value:this.requestFocus},this.props.children))},e}(s.a.Component);Object(v.a)(z);var B=function(){},H=s.a.forwardRef;void 0===H&&(H=function(t){return t});var V=H(function(t,e){var n=t.innerRef,r=S(t,["innerRef"]);return s.a.createElement(M.Consumer,null,function(t){t.basepath;var o=t.baseuri;return s.a.createElement(I,null,function(t){var i=t.location,a=t.navigate,u=r.to,c=r.state,p=r.replace,l=r.getProps,f=void 0===l?B:l,h=S(r,["to","state","replace","getProps"]),v=y(u,o),m=i.pathname===v,g=d(i.pathname,v);return s.a.createElement("a",q({ref:e||n,"aria-current":m?"page":void 0},h,f({isCurrent:m,isPartiallyCurrent:g,href:v,location:i}),{href:v,onClick:function(t){h.onClick&&h.onClick(t),nt(t)&&(t.preventDefault(),a(v,{state:c,replace:p}))}}))})})});function Y(t){this.uri=t}var Z=function(t){return t instanceof Y},G=function(t){function e(){return T(this,e),L(this,t.apply(this,arguments))}return U(e,t),e.prototype.componentDidMount=function(){var t=this.props,e=t.navigate,n=t.to,r=(t.from,t.replace),o=void 0===r||r,i=t.state,a=(t.noThrow,S(t,["navigate","to","from","replace","state","noThrow"]));Promise.resolve().then(function(){e(g(n,a),{replace:o,state:i})})},e.prototype.render=function(){var t=this.props,e=(t.navigate,t.to),n=(t.from,t.replace,t.state,t.noThrow),r=S(t,["navigate","to","from","replace","state","noThrow"]);return n||function(t){throw new Y(t)}(g(e,r)),null},e}(s.a.Component),X=function(t){return s.a.createElement(I,null,function(e){return s.a.createElement(G,q({},e,t))})},tt=function(t){return t.replace(/(^\/+|\/+$)/g,"")},et=function(t){return function(e){if(!e)return null;var n,r,o;if(e.props.path||e.props.default||e.type===X||l()(!1),e.type!==X||e.props.from&&e.props.to||l()(!1),e.type===X&&(n=e.props.from,r=e.props.to,o=function(t){return w(t)},P(n).filter(o).sort().join("/")!==P(r).filter(o).sort().join("/"))&&l()(!1),e.props.default)return{value:e,default:!0};var i=e.type===X?e.props.from:e.props.path,a="/"===i?t:tt(t)+"/"+tt(i);return{value:e,default:e.props.default,path:e.props.children?tt(a)+"/*":a}}},nt=function(t){return!t.defaultPrevented&&0===t.button&&!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}}}]);