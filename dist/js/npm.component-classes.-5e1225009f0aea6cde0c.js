(window.webpackJsonp=window.webpackJsonp||[]).push([["npm.component-classes"],{PFWz:function(t,i,s){try{var e=s("zs13")}catch(t){e=s("zs13")}var r=/\s+/,o=Object.prototype.toString;function n(t){if(!t||!t.nodeType)throw new Error("A DOM element reference is required");this.el=t,this.list=t.classList}t.exports=function(t){return new n(t)},n.prototype.add=function(t){if(this.list)return this.list.add(t),this;var i=this.array();return~e(i,t)||i.push(t),this.el.className=i.join(" "),this},n.prototype.remove=function(t){if("[object RegExp]"==o.call(t))return this.removeMatching(t);if(this.list)return this.list.remove(t),this;var i=this.array(),s=e(i,t);return~s&&i.splice(s,1),this.el.className=i.join(" "),this},n.prototype.removeMatching=function(t){for(var i=this.array(),s=0;s<i.length;s++)t.test(i[s])&&this.remove(i[s]);return this},n.prototype.toggle=function(t,i){return this.list?(void 0!==i?i!==this.list.toggle(t,i)&&this.list.toggle(t):this.list.toggle(t),this):(void 0!==i?i?this.add(t):this.remove(t):this.has(t)?this.remove(t):this.add(t),this)},n.prototype.array=function(){var t=(this.el.getAttribute("class")||"").replace(/^\s+|\s+$/g,"").split(r);return""===t[0]&&t.shift(),t},n.prototype.has=n.prototype.contains=function(t){return this.list?this.list.contains(t):!!~e(this.array(),t)}}}]);